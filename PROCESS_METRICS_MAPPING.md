# PMO Value Generator: Process Groups & Metrics Mapping

## 🎯 Vision
Der **Value Generator** bildet alle **5 PMBOK Process Groups** ab und bietet für jeden Prozessschritt **hybride Metriken** (klassisch + agil), die der User selektieren kann. Diese werden mit **Supabase** verbunden und im Dashboard visualisiert.

---

## 📊 Vollständige Struktur-Matrix

### Architektur-Ebenen

```
┌─────────────────────────────────────────────────────────────┐
│ OPM STRATEGIC LAYER (Portfolio/Strategy)                   │
│ └─ S-01: Portfolio Prioritization & Strategy Alignment     │
└─────────────────────────────────────────────────────────────┘
           ↓ feeds into ↓
┌─────────────────────────────────────────────────────────────┐
│ PMO TACTICAL LAYER (Governance/Standards)                  │
│ ├─ S-14: Change Control & Decision Boards                  │
│ └─ S-17: Issue & Risk Management                           │
└─────────────────────────────────────────────────────────────┘
           ↓ enables ↓
┌─────────────────────────────────────────────────────────────┐
│ PROJECT OPERATIONAL LAYER (Execution/Resources)            │
│ └─ S-10: Resource & Capacity Management                    │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔄 PMBOK Process Groups x Services Matrix

| Process Group | S-01 (Strategy) | S-10 (Resources) | S-14 (Change) | S-17 (Risk/Issue) |
|---------------|----------------|------------------|---------------|-------------------|
| **1. INITIATING** | ✅ Charter, Business Case, Strategic Fit | ✅ Team Formation, Skills Gap | ✅ Mandate Definition | ✅ Risk Identification |
| **2. PLANNING** | ✅ Scope (WBS/Backlog), Schedule, Budget | ✅ Resource Histogram, Capacity | ✅ Change Process Design | ✅ Risk Register Setup |
| **3. EXECUTING** | ✅ Deliverable Tracking, Sprint Burndown | ✅ Team Morale, Velocity | ✅ Change Requests, Decision Latency | ✅ Issue Resolution |
| **4. MONITORING** | ✅ SPI/CPI, Variance Analysis | ✅ Capacity Utilization | ✅ Backlog Refinement | ✅ Risk Exposure, Impediments |
| **5. CLOSING** | ✅ Benefits Realization, ROI, CSAT | ✅ Velocity History | ✅ Lessons Learned | ✅ Knowledge Transfer |

---

## 📈 Metriken-Katalog nach Process Group

### 1️⃣ INITIATING (Projektstart)

#### S-01: Strategy Charter
- **💰 Business Case ROI** (classical) → OPM: Portfolio
- **🎯 Strategic Fit Score** (hybrid, 1-10) → OPM: Strategy
- **👥 Stakeholder Power/Interest Grid** (classical) → PMBOK: Stakeholder Mgmt
- **🔭 Product Vision Clarity** (agile, 1-5) → Agile: Product Vision
- **🤝 Sponsor Commitment Level** (traffic light) → PMBOK: Integration
- **✅ Feasibility Study Status** (select) → PMBOK: Integration
- **💼 Funding Source Status** (select) → OPM: Portfolio

#### S-10: Team Assembly
- **🧑‍🤝‍🧑 Team Formation Status** (%) → PMBOK: Resource Mgmt
- **🧩 Skills Gap Analysis** (%) → OPM: Enablers
- **📜 Team Charter / Working Agreement** (traffic light) → Agile: Team Building

---

### 2️⃣ PLANNING (Planung)

#### S-01: Scope & Schedule Planning
- **📊 WBS Depth** (classical, Ebenen) → PMBOK: Scope
- **📝 Product Backlog Size** (agile, # Epics/Stories) → Agile: Scrum
- **✅ Definition of Done (DoD) Clarity** (hybrid, 1-5) → Agile: Quality
- **📅 Schedule Baseline** (classical, Date) → PMBOK: Schedule
- **🔄 Release Cadence** (agile, select) → Agile: Continuous Delivery
- **💰 Budget Allocation** (classical, €) → PMBOK: Cost
- **🛡️ Risk Register Completeness** (%) → PMBOK: Risk
- **📢 Communication Plan (RACI)** (traffic light) → PMBOK: Communication

#### S-10: Resource Planning
- **📊 Resource Histogram** (classical, 1-5) → PMBOK: Resource
- **⚡ Sprint Capacity** (agile, Story Points) → Agile: Velocity
- **🛒 Procurement Strategy** (select) → PMBOK: Procurement

---

### 3️⃣ EXECUTING (Umsetzung)

#### S-01: Delivery Execution
- **📦 Completed Work Packages** (#) → PMBOK: Scope
- **🔥 Sprint Burndown Trend** (agile, traffic light) → Agile: Scrum
- **🐛 Defect Density** (hybrid, #) → PMBOK: Quality
- **😊 Team Morale / Happiness** (agile, 1-5) → Agile: Retrospective
- **⭐ Stakeholder Satisfaction** (hybrid, 1-10) → PMBOK: Stakeholder

#### S-14: Change Management
- **📝 Change Request Status** (classical, text) → PMBOK: Integration
- **⏱️ Decision Latency** (hybrid, days) → OPM: Enablers
- **🔄 Backlog Refinement Rate** (agile, %) → Agile: Product Backlog

---

### 4️⃣ MONITORING & CONTROLLING (Steuerung)

#### S-01: Performance Monitoring
- **📈 Schedule Performance Index (SPI)** (classical, EV) → PMBOK: Schedule
- **💰 Cost Performance Index (CPI)** (classical, EV) → PMBOK: Cost
- **📊 Cumulative Flow Diagram - WIP** (agile, #) → Agile: Kanban
- **⏱️ Cycle Time / Lead Time** (agile, days) → Agile: Lean
- **📉 Variance Analysis** (classical, %) → PMBOK: Cost
- **✅ Quality Metrics Dashboard** (hybrid, traffic light) → PMBOK: Quality

#### S-17: Risk & Issue Monitoring
- **🛡️ Risk Exposure Value (REV)** (classical, €) → PMBOK: Risk
- **🚑 Issue Resolution Time (SLA)** (hybrid, hours) → PMBOK: Risk
- **🚧 Impediment Count** (agile, #) → Agile: Scrum

---

### 5️⃣ CLOSING (Abschluss)

#### S-01: Value Realization
- **🎯 Benefits Realization Rate** (hybrid, %) → OPM: Strategy
- **💰 Actual ROI** (classical, €) → OPM: Portfolio
- **👥 User Adoption Rate** (agile, %) → Agile: Value Stream
- **⭐ Customer Satisfaction Score (CSAT)** (hybrid, 1-10) → PMBOK: Stakeholder

#### GLOBAL: Lessons Learned
- **📚 Lessons Learned Documented** (hybrid, traffic light) → PMBOK: Integration
- **🎓 Knowledge Transfer Completion** (classical, 1-5) → PMBOK: Communication
- **📊 Team Velocity History** (agile, #) → Agile: Scrum
- **📄 Contract Closure** (classical, traffic light) → PMBOK: Procurement
- **🗄️ Project Archiving** (classical, traffic light) → PMBOK: Integration

---

## 🔗 OPM Standard Domains Mapping

| OPM Domain | Process Groups | Services | Metriken-Beispiele |
|------------|---------------|----------|-------------------|
| **Strategy** | Initiating, Closing | S-01 | Strategic Fit, Benefits Realization, User Adoption |
| **Portfolio** | Initiating, Planning, Closing | S-01 | Business Case, Budget, ROI |
| **Program** | Planning, Executing | S-01, S-14 | Deliverable Tracking, Change Requests |
| **Project** | All | All | SPI/CPI, WBS, Team Formation, Risk Register |
| **Enablers** | All | S-10, S-14, S-17 | Skills Gap, Decision Latency, Lessons Learned |

---

## 🎨 Visualisierungs-Konzept (Dashboard)

### Dashboard-Aufbau pro Service

```
┌─────────────────────────────────────────────────────────┐
│ SERVICE: S-01 (Portfolio Strategy Alignment)            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  [TAB: Initiating] [TAB: Planning] [TAB: Executing]    │
│  [TAB: Monitoring] [TAB: Closing]                       │
│                                                         │
│  ┌─ Initiating Metrics ─────────────────────────────┐  │
│  │ ✅ Strategic Fit Score: 8.5 / 10  [Chart: Trend] │  │
│  │ 💰 Business Case ROI: 450,000 € [vs. Plan: +5%]  │  │
│  │ 🔭 Product Vision Clarity: ⭐⭐⭐⭐⭐            │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
│  ┌─ User Selected Metrics (Tailoring) ──────────────┐  │
│  │ [x] Business Case ROI                             │  │
│  │ [x] Strategic Fit Score                           │  │
│  │ [ ] Stakeholder Map (nicht ausgewählt)           │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
│  [Button: Speichern & Supabase Sync]                   │
└─────────────────────────────────────────────────────────┘
```

---

## 🗄️ Supabase Datenmodell

### Tabellen-Struktur

```sql
-- Projects Table
CREATE TABLE projects (
  id UUID PRIMARY KEY,
  name TEXT,
  service_id TEXT, -- S-01, S-10, S-14, S-17
  created_at TIMESTAMP
);

-- Metrics Configuration (User Selection)
CREATE TABLE metric_selections (
  id UUID PRIMARY KEY,
  project_id UUID REFERENCES projects(id),
  process_group TEXT, -- initiating, planning, executing, monitoring, closing
  metric_id TEXT, -- metric_roi, metric_fit, etc.
  enabled BOOLEAN,
  created_at TIMESTAMP
);

-- Metrics Values (Live Data)
CREATE TABLE metric_values (
  id UUID PRIMARY KEY,
  project_id UUID REFERENCES projects(id),
  metric_id TEXT,
  value JSONB, -- Flexibel für verschiedene Typen (number, text, date, etc.)
  recorded_at TIMESTAMP
);

-- Process Group Status
CREATE TABLE process_status (
  id UUID PRIMARY KEY,
  project_id UUID REFERENCES projects(id),
  process_group TEXT,
  status TEXT, -- not_started, in_progress, completed
  completion_percent INTEGER,
  updated_at TIMESTAMP
);
```

---

## 🚀 Implementierungs-Roadmap

### Phase 1: Data Structure (Current)
- [x] Extend `roadmap-metrics.ts` mit allen 5 Process Groups
- [x] Define MetricDefinition mit `methodology`, `opmDomain`, `pmbokKnowledgeArea`
- [ ] Migrate bestehende Step-IDs zu neuem Schema

### Phase 2: UI Components
- [ ] Process Group Tabs (Initiating → Planning → ... → Closing)
- [ ] Metric Selection Cards mit Filtering (Classical/Agile/Hybrid)
- [ ] Dashboard Visualizations (Charts pro Metrik-Typ)

### Phase 3: Supabase Integration
- [ ] Schema erstellen (siehe oben)
- [ ] API Layer (`modules/operations/supabase-client.ts`)
- [ ] Real-time Sync für Live-Dashboards

### Phase 4: Intelligence Layer
- [ ] Maturity Assessment (welche Metriken für welches Reifelevel?)
- [ ] Empfehlungs-Engine (basierend auf OPM Best Practices)
- [ ] Benchmarking (Vergleich mit Industry Standards)

---

## 📚 Referenzen

1. **PMBOK Guide 7th Edition** - Process Groups & Knowledge Areas
2. **PMI OPM Standard** - Strategy, Portfolio, Program, Project Domains
3. **Agile Practice Guide** - Hybrid Metrics (Velocity, Burndown, Cycle Time)
4. **PMO Practice Guide** (im knowledge_base/) - PMO Functions & Services

---

## 🎯 Key Differentiators

| Feature | Traditionelle PMO-Tools | Unser Value Generator |
|---------|------------------------|----------------------|
| Process Coverage | Meist nur Executing/Monitoring | **Alle 5 Process Groups** |
| Methodology | Entweder klassisch ODER agil | **Hybrid (beides!)** |
| Customization | Fixe Dashboards | **User wählt relevante Metriken** |
| OPM Alignment | Selten explizit | **OPM-Domain-Mapping integriert** |
| Language/Mindset | Nur "Management-Speak" | **Dual: Team-View + Mgmt-View** |

---

**Version:** 1.0  
**Erstellt:** 2026-01-04  
**Autor:** PMO Value Generator Team

