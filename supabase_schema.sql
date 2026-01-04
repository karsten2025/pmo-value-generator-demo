-- ============================================================================
-- SUPABASE DATABASE SCHEMA: PMO Value Generator
-- ============================================================================
-- Version: 1.0
-- Created: 2026-01-04
-- Description: Schema für PMBOK Process Group Metrics mit Hybrid-Support
-- ============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- 1. ORGANIZATIONS & USERS
-- ============================================================================

CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  industry TEXT,
  size TEXT CHECK (size IN ('small', 'medium', 'large', 'enterprise')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  org_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  role TEXT CHECK (role IN ('admin', 'pmo_manager', 'project_manager', 'team_member', 'viewer')),
  language TEXT DEFAULT 'de' CHECK (language IN ('de', 'en', 'es')),
  view_preference TEXT DEFAULT 'team' CHECK (view_preference IN ('team', 'management')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- 2. PROJECTS & SERVICES
-- ============================================================================

CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  org_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  
  -- Service-Zuordnung (S-01, S-10, S-14, S-17)
  service_id TEXT NOT NULL CHECK (service_id IN ('S-01', 'S-10', 'S-14', 'S-17')),
  
  -- Outcome-Zuordnung (O-01, O-06, O-18)
  outcome_id TEXT CHECK (outcome_id IN ('O-01', 'O-06', 'O-18')),
  
  -- Project Status
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'on_hold', 'completed', 'cancelled')),
  
  -- OPM Classification
  opm_domain TEXT CHECK (opm_domain IN ('strategy', 'portfolio', 'program', 'project', 'enablers')),
  
  -- Methodology
  methodology TEXT DEFAULT 'hybrid' CHECK (methodology IN ('classical', 'agile', 'hybrid')),
  
  -- Timestamps
  start_date DATE,
  planned_end_date DATE,
  actual_end_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  created_by UUID REFERENCES users(id)
);

-- Index für Performance
CREATE INDEX idx_projects_org_id ON projects(org_id);
CREATE INDEX idx_projects_service_id ON projects(service_id);
CREATE INDEX idx_projects_status ON projects(status);

-- ============================================================================
-- 3. PROCESS GROUPS STATUS TRACKING
-- ============================================================================

CREATE TABLE process_group_status (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  
  -- Process Group (PMBOK)
  process_group TEXT NOT NULL CHECK (process_group IN ('initiating', 'planning', 'executing', 'monitoring', 'closing')),
  
  -- Status
  status TEXT DEFAULT 'not_started' CHECK (status IN ('not_started', 'in_progress', 'completed', 'blocked')),
  
  -- Progress
  completion_percent INTEGER DEFAULT 0 CHECK (completion_percent >= 0 AND completion_percent <= 100),
  
  -- Timestamps
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Constraints
  UNIQUE(project_id, process_group)
);

CREATE INDEX idx_process_status_project ON process_group_status(project_id);

-- ============================================================================
-- 4. METRIC DEFINITIONS & SELECTIONS (User Tailoring)
-- ============================================================================

-- Master Metric Library (aus roadmap-metrics-extended.ts)
CREATE TABLE metric_library (
  id TEXT PRIMARY KEY, -- z.B. "init_business_case_roi"
  
  -- Labels (Multilingual)
  label_de TEXT NOT NULL,
  label_en TEXT NOT NULL,
  label_es TEXT NOT NULL,
  
  -- Descriptions
  desc_de TEXT,
  desc_en TEXT,
  desc_es TEXT,
  
  -- Classification
  process_group TEXT NOT NULL CHECK (process_group IN ('initiating', 'planning', 'executing', 'monitoring', 'closing')),
  service_id TEXT NOT NULL, -- Welchem Service gehört die Metrik?
  methodology TEXT CHECK (methodology IN ('classical', 'agile', 'hybrid')),
  opm_domain TEXT CHECK (opm_domain IN ('strategy', 'portfolio', 'program', 'project', 'enablers')),
  pmbok_knowledge_area TEXT CHECK (pmbok_knowledge_area IN (
    'Integration', 'Scope', 'Schedule', 'Cost', 'Quality', 
    'Resource', 'Communication', 'Risk', 'Procurement', 'Stakeholder'
  )),
  
  -- Input Type
  input_type TEXT NOT NULL CHECK (input_type IN (
    'text', 'textarea', 'currency', 'date', 'rating_10', 'rating_5',
    'slider_percent', 'rating_traffic_light', 'select', 'number'
  )),
  
  -- Options für Select-Felder
  options JSONB,
  
  -- Meta
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- User's Metric Selection (Tailoring)
CREATE TABLE metric_selections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  metric_id TEXT REFERENCES metric_library(id) ON DELETE CASCADE,
  
  -- User Selection
  enabled BOOLEAN DEFAULT true,
  
  -- Custom Configuration
  custom_label TEXT, -- User kann Label überschreiben
  custom_threshold JSONB, -- z.B. {"warning": 50, "critical": 30}
  
  -- Timestamps
  selected_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  selected_by UUID REFERENCES users(id),
  
  UNIQUE(project_id, metric_id)
);

CREATE INDEX idx_metric_selections_project ON metric_selections(project_id);
CREATE INDEX idx_metric_selections_enabled ON metric_selections(enabled);

-- ============================================================================
-- 5. METRIC VALUES (Live Data from Projects)
-- ============================================================================

CREATE TABLE metric_values (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  metric_id TEXT REFERENCES metric_library(id) ON DELETE CASCADE,
  
  -- Value Storage (JSONB für Flexibilität)
  value JSONB NOT NULL,
  -- Beispiele:
  -- {"type": "number", "value": 85}
  -- {"type": "currency", "value": 450000, "currency": "EUR"}
  -- {"type": "date", "value": "2026-06-30"}
  -- {"type": "rating", "value": 8, "max": 10}
  -- {"type": "traffic_light", "value": "green"}
  -- {"type": "text", "value": "Product Owner: John Doe"}
  
  -- Metadata
  recorded_at TIMESTAMPTZ DEFAULT NOW(),
  recorded_by UUID REFERENCES users(id),
  
  -- Notes
  comment TEXT,
  
  -- Data Quality
  is_validated BOOLEAN DEFAULT false,
  validation_status TEXT CHECK (validation_status IN ('pending', 'approved', 'rejected', 'needs_review'))
);

-- Indexes für Performance (zeitbasierte Queries)
CREATE INDEX idx_metric_values_project ON metric_values(project_id);
CREATE INDEX idx_metric_values_metric ON metric_values(metric_id);
CREATE INDEX idx_metric_values_recorded_at ON metric_values(recorded_at DESC);
CREATE INDEX idx_metric_values_project_metric ON metric_values(project_id, metric_id, recorded_at DESC);

-- ============================================================================
-- 6. DASHBOARDS & VISUALIZATIONS
-- ============================================================================

CREATE TABLE dashboards (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  org_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  
  -- Dashboard Type
  dashboard_type TEXT CHECK (dashboard_type IN ('project', 'portfolio', 'service', 'custom')),
  
  -- Configuration
  config JSONB, -- Welche Metriken, Charts, Layout etc.
  
  -- Visibility
  is_public BOOLEAN DEFAULT false,
  owner_id UUID REFERENCES users(id),
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE dashboard_widgets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  dashboard_id UUID REFERENCES dashboards(id) ON DELETE CASCADE,
  
  -- Widget Config
  widget_type TEXT NOT NULL CHECK (widget_type IN (
    'kpi_card', 'line_chart', 'bar_chart', 'pie_chart', 'table', 
    'gauge', 'progress_bar', 'traffic_light', 'text_card'
  )),
  
  -- Metric Binding
  metric_id TEXT REFERENCES metric_library(id),
  project_ids UUID[], -- Mehrere Projekte für Portfolio-View
  
  -- Layout
  position JSONB, -- {"x": 0, "y": 0, "w": 4, "h": 2}
  config JSONB, -- Chart-spezifische Settings
  
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- 7. BENEFITS REALIZATION (OPM: Closing Phase)
-- ============================================================================

CREATE TABLE benefits_tracking (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  
  -- Planned Benefits (aus Business Case)
  planned_roi NUMERIC(15,2),
  planned_roi_date DATE,
  planned_benefits JSONB, -- {"cost_reduction": 100000, "revenue_increase": 50000}
  
  -- Actual Benefits (Post-Implementation)
  actual_roi NUMERIC(15,2),
  actual_roi_date DATE,
  actual_benefits JSONB,
  
  -- Realization Rate
  realization_rate NUMERIC(5,2), -- % (0-100)
  
  -- User Adoption
  target_user_count INTEGER,
  active_user_count INTEGER,
  adoption_rate NUMERIC(5,2), -- %
  
  -- Customer Satisfaction
  csat_score NUMERIC(3,1), -- 1.0 - 10.0
  nps_score INTEGER, -- -100 to +100
  
  -- Timestamps
  measurement_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- 8. LESSONS LEARNED & KNOWLEDGE BASE
-- ============================================================================

CREATE TABLE lessons_learned (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  
  -- Content
  title TEXT NOT NULL,
  description TEXT,
  category TEXT CHECK (category IN ('success', 'challenge', 'risk', 'process', 'team', 'technical')),
  
  -- Context
  process_group TEXT CHECK (process_group IN ('initiating', 'planning', 'executing', 'monitoring', 'closing')),
  pmbok_knowledge_area TEXT,
  
  -- Recommendation
  recommendation TEXT,
  impact_level TEXT CHECK (impact_level IN ('low', 'medium', 'high', 'critical')),
  
  -- Sharing
  is_shareable BOOLEAN DEFAULT true,
  is_approved BOOLEAN DEFAULT false,
  
  -- Meta
  created_at TIMESTAMPTZ DEFAULT NOW(),
  created_by UUID REFERENCES users(id)
);

-- ============================================================================
-- 9. AUDIT & HISTORY
-- ============================================================================

CREATE TABLE audit_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  entity_type TEXT NOT NULL, -- 'project', 'metric_value', 'dashboard', etc.
  entity_id UUID NOT NULL,
  action TEXT NOT NULL CHECK (action IN ('create', 'update', 'delete', 'view')),
  
  -- Changes
  old_value JSONB,
  new_value JSONB,
  
  -- User Context
  user_id UUID REFERENCES users(id),
  ip_address INET,
  user_agent TEXT,
  
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_audit_log_entity ON audit_log(entity_type, entity_id);
CREATE INDEX idx_audit_log_user ON audit_log(user_id);
CREATE INDEX idx_audit_log_created_at ON audit_log(created_at DESC);

-- ============================================================================
-- 10. ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================

-- Enable RLS on all tables
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE metric_values ENABLE ROW LEVEL SECURITY;
ALTER TABLE dashboards ENABLE ROW LEVEL SECURITY;

-- Example Policy: Users can only see their own organization's data
CREATE POLICY "Users can view own org projects" ON projects
  FOR SELECT USING (
    org_id IN (
      SELECT org_id FROM users WHERE id = auth.uid()
    )
  );

CREATE POLICY "Users can insert to own org" ON projects
  FOR INSERT WITH CHECK (
    org_id IN (
      SELECT org_id FROM users WHERE id = auth.uid()
    )
  );

-- ============================================================================
-- 11. FUNCTIONS & TRIGGERS
-- ============================================================================

-- Auto-update updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply to all relevant tables
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_metric_values_updated_at BEFORE UPDATE ON metric_values
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Calculate Benefits Realization Rate
CREATE OR REPLACE FUNCTION calculate_realization_rate()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.planned_roi > 0 AND NEW.actual_roi IS NOT NULL THEN
    NEW.realization_rate := (NEW.actual_roi / NEW.planned_roi) * 100;
  END IF;
  
  IF NEW.target_user_count > 0 AND NEW.active_user_count IS NOT NULL THEN
    NEW.adoption_rate := (NEW.active_user_count::NUMERIC / NEW.target_user_count) * 100;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_benefits_realization BEFORE INSERT OR UPDATE ON benefits_tracking
  FOR EACH ROW EXECUTE FUNCTION calculate_realization_rate();

-- ============================================================================
-- 12. VIEWS FOR COMMON QUERIES
-- ============================================================================

-- Portfolio Dashboard View
CREATE OR REPLACE VIEW v_portfolio_health AS
SELECT 
  p.org_id,
  p.service_id,
  COUNT(*) as project_count,
  COUNT(*) FILTER (WHERE p.status = 'active') as active_projects,
  AVG(pgs.completion_percent) as avg_completion,
  SUM((mv.value->>'value')::NUMERIC) FILTER (WHERE mv.metric_id = 'plan_budget_allocation') as total_budget,
  AVG((mv.value->>'value')::NUMERIC) FILTER (WHERE mv.metric_id = 'monitor_cpi') as avg_cpi,
  AVG((mv.value->>'value')::NUMERIC) FILTER (WHERE mv.metric_id = 'monitor_spi') as avg_spi
FROM projects p
LEFT JOIN process_group_status pgs ON p.id = pgs.project_id
LEFT JOIN metric_values mv ON p.id = mv.project_id
WHERE p.status IN ('active', 'on_hold')
GROUP BY p.org_id, p.service_id;

-- Recent Metric Updates View
CREATE OR REPLACE VIEW v_recent_metric_updates AS
SELECT 
  p.name as project_name,
  ml.label_de as metric_label,
  mv.value,
  mv.recorded_at,
  u.full_name as recorded_by_name
FROM metric_values mv
JOIN projects p ON mv.project_id = p.id
JOIN metric_library ml ON mv.metric_id = ml.id
LEFT JOIN users u ON mv.recorded_by = u.id
ORDER BY mv.recorded_at DESC
LIMIT 100;

-- ============================================================================
-- 13. SEED DATA (Metric Library from roadmap-metrics-extended.ts)
-- ============================================================================

-- Initiating Metrics (Beispiele)
INSERT INTO metric_library (id, label_de, label_en, label_es, desc_de, desc_en, desc_es, process_group, service_id, methodology, opm_domain, pmbok_knowledge_area, input_type) VALUES
('init_business_case_roi', '💰 Business Case ROI (Klassisch)', '💰 Business Case ROI (Classical)', '💰 ROI del Caso de Negocio', 'Erwarteter Return on Investment über 3 Jahre', 'Expected 3-year ROI', 'ROI esperado a 3 años', 'initiating', 'S-01', 'classical', 'portfolio', 'Integration', 'currency'),
('init_strategic_fit', '🎯 Strategischer Fit Score (OPM)', '🎯 Strategic Fit Score (OPM)', '🎯 Puntuación de Ajuste Estratégico', 'Alignment mit Unternehmenszielen (1-10)', 'Alignment with corporate goals', 'Alineación con objetivos corporativos', 'initiating', 'S-01', 'hybrid', 'strategy', 'Integration', 'rating_10'),
('init_product_vision', '🔭 Product Vision (Agil)', '🔭 Product Vision (Agile)', '🔭 Visión del Producto', 'Klarheit der Vision (Elevator Pitch vorhanden?)', 'Vision clarity (Elevator pitch available?)', 'Claridad de la visión', 'initiating', 'S-01', 'agile', 'portfolio', 'Scope', 'rating_5'),
('init_team_formation', '🧑‍🤝‍🧑 Team Formation Status', '🧑‍🤝‍🧑 Team Formation Status', '🧑‍🤝‍🧑 Estado de Formación del Equipo', 'Sind Kernrollen besetzt? (PM, PO, Architect)', 'Core roles filled?', '¿Roles clave asignados?', 'initiating', 'S-10', 'hybrid', 'project', 'Resource', 'slider_percent');

-- Planning Metrics (Beispiele)
INSERT INTO metric_library (id, label_de, label_en, label_es, desc_de, desc_en, desc_es, process_group, service_id, methodology, opm_domain, pmbok_knowledge_area, input_type) VALUES
('plan_wbs_depth', '📊 WBS Tiefe', '📊 WBS Depth', '📊 Profundidad EDT', 'Detaillierungsgrad der Arbeitspakete (Ebenen)', 'Work package detail level', 'Nivel de detalle de paquetes', 'planning', 'S-01', 'classical', 'project', 'Scope', 'number'),
('plan_budget_allocation', '💰 Budget-Verteilung', '💰 Budget Allocation', '💰 Asignación de Presupuesto', 'Gesamtbudget eingeplant (€)', 'Total budget planned', 'Presupuesto total planificado', 'planning', 'S-01', 'classical', 'portfolio', 'Cost', 'currency'),
('plan_sprint_capacity', '⚡ Sprint Capacity', '⚡ Sprint Capacity', '⚡ Capacidad del Sprint', 'Velocity-Schätzung pro Sprint', 'Estimated velocity per sprint', 'Velocidad estimada por sprint', 'planning', 'S-10', 'agile', 'project', 'Resource', 'number');

-- Monitoring Metrics (Beispiele)
INSERT INTO metric_library (id, label_de, label_en, label_es, desc_de, desc_en, desc_es, process_group, service_id, methodology, opm_domain, pmbok_knowledge_area, input_type) VALUES
('monitor_spi', '📈 Schedule Performance Index (SPI)', '📈 Schedule Performance Index (SPI)', '📈 Índice de Desempeño del Cronograma', 'Earned Value: SPI = EV / PV (>1 = gut)', 'Earned Value: SPI = EV / PV (>1 = good)', 'Valor Ganado: SPI = EV / PV', 'monitoring', 'S-01', 'classical', 'project', 'Schedule', 'number'),
('monitor_cpi', '💰 Cost Performance Index (CPI)', '💰 Cost Performance Index (CPI)', '💰 Índice de Desempeño de Costos', 'Earned Value: CPI = EV / AC (>1 = gut)', 'Earned Value: CPI = EV / AC (>1 = good)', 'Valor Ganado: CPI = EV / AC', 'monitoring', 'S-01', 'classical', 'project', 'Cost', 'number'),
('monitor_cycle_time', '⏱️ Cycle Time (Agil)', '⏱️ Cycle Time (Agile)', '⏱️ Tiempo de Ciclo', 'Durchschnittliche Zeit von Start bis Done (Tage)', 'Avg time from start to done (days)', 'Tiempo promedio de inicio a fin', 'monitoring', 'S-01', 'agile', 'project', 'Schedule', 'number');

-- Closing Metrics (Beispiele)
INSERT INTO metric_library (id, label_de, label_en, label_es, desc_de, desc_en, desc_es, process_group, service_id, methodology, opm_domain, pmbok_knowledge_area, input_type) VALUES
('close_benefits_realization', '🎯 Benefits Realization Rate', '🎯 Benefits Realization Rate', '🎯 Tasa de Realización de Beneficios', 'Geplanter vs. tatsächlich erzielter Nutzen (%)', 'Planned vs. actual benefits achieved', 'Beneficios planificados vs. reales', 'closing', 'S-01', 'hybrid', 'portfolio', 'Integration', 'slider_percent'),
('close_csat', '⭐ Customer Satisfaction Score', '⭐ Customer Satisfaction Score', '⭐ Puntuación de Satisfacción', 'Post-Launch Survey Ergebnis (1-10)', 'Post-launch survey result', 'Resultado de encuesta', 'closing', 'S-01', 'hybrid', 'strategy', 'Stakeholder', 'rating_10');

-- ============================================================================
-- ENDE DES SCHEMAS
-- ============================================================================

-- Grant permissions (Beispiel für Supabase)
GRANT ALL ON ALL TABLES IN SCHEMA public TO authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO authenticated;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO authenticated;

