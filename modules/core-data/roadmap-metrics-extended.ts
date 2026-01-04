// modules/core-data/roadmap-metrics-extended.ts
// ============================================================================
// VOLLSTÄNDIGE PMBOK PROCESS GROUP METRIKEN
// Basierend auf: PMBOK 7th Ed. + OPM Standard + Hybrid/Agile Practice Guide
// ============================================================================

export interface MetricDefinition {
  id: string;
  label: { de: string; en: string; es: string };
  desc: { de: string; en: string; es: string };
  inputType:
    | "text"
    | "textarea"
    | "currency"
    | "date"
    | "rating_10"
    | "rating_5"
    | "slider_percent"
    | "rating_traffic_light"
    | "select"
    | "number";
  options?: string[];
  // NEU: Metrik-Klassifikation
  methodology: "classical" | "agile" | "hybrid";
  opmDomain: "strategy" | "portfolio" | "program" | "project" | "enablers"; // OPM Guide Domains
  pmbokKnowledgeArea?: 
    | "Integration"
    | "Scope"
    | "Schedule"
    | "Cost"
    | "Quality"
    | "Resource"
    | "Communication"
    | "Risk"
    | "Procurement"
    | "Stakeholder";
}

// ============================================================================
// PROCESS GROUP 1: INITIATING
// "Defining a new project or new phase" (PMBOK)
// OPM: Strategic Alignment & Portfolio Selection
// ============================================================================

export const initiatingMetrics: Record<string, MetricDefinition[]> = {
  // S-01: Portfolio / Strategy Alignment
  "S01-INIT-Charter": [
    {
      id: "init_business_case_roi",
      label: {
        de: "💰 Business Case ROI (Klassisch)",
        en: "💰 Business Case ROI (Classical)",
        es: "💰 ROI del Caso de Negocio",
      },
      desc: {
        de: "Erwarteter Return on Investment über 3 Jahre",
        en: "Expected 3-year ROI",
        es: "ROI esperado a 3 años",
      },
      inputType: "currency",
      methodology: "classical",
      opmDomain: "portfolio",
      pmbokKnowledgeArea: "Integration",
    },
    {
      id: "init_strategic_fit",
      label: {
        de: "🎯 Strategischer Fit Score (OPM)",
        en: "🎯 Strategic Fit Score (OPM)",
        es: "🎯 Puntuación de Ajuste Estratégico",
      },
      desc: {
        de: "Alignment mit Unternehmenszielen (1-10)",
        en: "Alignment with corporate goals",
        es: "Alineación con objetivos corporativos",
      },
      inputType: "rating_10",
      methodology: "hybrid",
      opmDomain: "strategy",
      pmbokKnowledgeArea: "Integration",
    },
    {
      id: "init_stakeholder_map",
      label: {
        de: "👥 Stakeholder Power/Interest Grid",
        en: "👥 Stakeholder Power/Interest Grid",
        es: "👥 Matriz de Interesados",
      },
      desc: {
        de: "Anzahl identifizierter Key Stakeholders",
        en: "Number of key stakeholders identified",
        es: "Número de partes interesadas clave",
      },
      inputType: "number",
      methodology: "classical",
      opmDomain: "project",
      pmbokKnowledgeArea: "Stakeholder",
    },
    {
      id: "init_product_vision",
      label: {
        de: "🔭 Product Vision (Agil)",
        en: "🔭 Product Vision (Agile)",
        es: "🔭 Visión del Producto",
      },
      desc: {
        de: "Klarheit der Vision (Elevator Pitch vorhanden?)",
        en: "Vision clarity (Elevator pitch available?)",
        es: "Claridad de la visión",
      },
      inputType: "rating_5",
      methodology: "agile",
      opmDomain: "portfolio",
      pmbokKnowledgeArea: "Scope",
    },
    {
      id: "init_sponsor_commitment",
      label: {
        de: "🤝 Sponsor Commitment Level",
        en: "🤝 Sponsor Commitment Level",
        es: "🤝 Nivel de Compromiso del Patrocinador",
      },
      desc: {
        de: "Engagement des Executive Sponsors",
        en: "Executive sponsor engagement",
        es: "Compromiso del patrocinador ejecutivo",
      },
      inputType: "rating_traffic_light",
      methodology: "hybrid",
      opmDomain: "enablers",
      pmbokKnowledgeArea: "Stakeholder",
    },
    {
      id: "init_feasibility_check",
      label: {
        de: "✅ Machbarkeitsprüfung Status",
        en: "✅ Feasibility Study Status",
        es: "✅ Estado de Estudio de Factibilidad",
      },
      desc: {
        de: "Technisch/Wirtschaftlich/Rechtlich geprüft?",
        en: "Technical/Economic/Legal checked?",
        es: "¿Verificado técnico/económico/legal?",
      },
      inputType: "select",
      options: ["Nicht gestartet", "In Prüfung", "Abgeschlossen", "Genehmigt"],
      methodology: "classical",
      opmDomain: "project",
      pmbokKnowledgeArea: "Integration",
    },
    {
      id: "init_funding_source",
      label: {
        de: "💼 Finanzierungsquelle",
        en: "💼 Funding Source",
        es: "💼 Fuente de Financiamiento",
      },
      desc: {
        de: "Ist Budget reserviert und freigegeben?",
        en: "Budget reserved and approved?",
        es: "¿Presupuesto reservado y aprobado?",
      },
      inputType: "select",
      options: ["Unklar", "Beantragt", "Reserviert", "Freigegeben"],
      methodology: "classical",
      opmDomain: "portfolio",
      pmbokKnowledgeArea: "Cost",
    },
  ],

  // S-10: Team Assembly & Resource Initiation
  "S10-INIT-Team": [
    {
      id: "init_team_formation",
      label: {
        de: "🧑‍🤝‍🧑 Team Formation Status",
        en: "🧑‍🤝‍🧑 Team Formation Status",
        es: "🧑‍🤝‍🧑 Estado de Formación del Equipo",
      },
      desc: {
        de: "Sind Kernrollen besetzt? (PM, PO, Architect)",
        en: "Core roles filled?",
        es: "¿Roles clave asignados?",
      },
      inputType: "slider_percent",
      methodology: "hybrid",
      opmDomain: "project",
      pmbokKnowledgeArea: "Resource",
    },
    {
      id: "init_skills_gap",
      label: {
        de: "🧩 Skills Gap Analysis",
        en: "🧩 Skills Gap Analysis",
        es: "🧩 Análisis de Brechas de Habilidades",
      },
      desc: {
        de: "Fehlende Kompetenzen identifiziert (%)",
        en: "Missing competencies identified",
        es: "Competencias faltantes identificadas",
      },
      inputType: "slider_percent",
      methodology: "classical",
      opmDomain: "enablers",
      pmbokKnowledgeArea: "Resource",
    },
    {
      id: "init_team_charter",
      label: {
        de: "📜 Team Charter (Agil: Working Agreement)",
        en: "📜 Team Charter (Agile: Working Agreement)",
        es: "📜 Acuerdo de Trabajo del Equipo",
      },
      desc: {
        de: "Spielregeln definiert und akzeptiert?",
        en: "Ground rules defined and accepted?",
        es: "¿Reglas básicas definidas y aceptadas?",
      },
      inputType: "rating_traffic_light",
      methodology: "agile",
      opmDomain: "project",
      pmbokKnowledgeArea: "Resource",
    },
  ],
};

// ============================================================================
// PROCESS GROUP 2: PLANNING
// "Establishing scope, objectives, and course of action" (PMBOK)
// OPM: Program/Project Planning & Organizational Capabilities
// ============================================================================

export const planningMetrics: Record<string, MetricDefinition[]> = {
  "S01-PLAN-Scope": [
    {
      id: "plan_wbs_depth",
      label: {
        de: "📊 WBS Tiefe (Work Breakdown Structure)",
        en: "📊 WBS Depth (Work Breakdown Structure)",
        es: "📊 Profundidad EDT",
      },
      desc: {
        de: "Detaillierungsgrad der Arbeitspakete (Ebenen)",
        en: "Work package detail level",
        es: "Nivel de detalle de paquetes",
      },
      inputType: "number",
      methodology: "classical",
      opmDomain: "project",
      pmbokKnowledgeArea: "Scope",
    },
    {
      id: "plan_epic_story_count",
      label: {
        de: "📝 Product Backlog Size (Agil)",
        en: "📝 Product Backlog Size (Agile)",
        es: "📝 Tamaño del Backlog",
      },
      desc: {
        de: "Anzahl Epics/User Stories im Backlog",
        en: "Number of epics/user stories",
        es: "Número de épicas/historias",
      },
      inputType: "number",
      methodology: "agile",
      opmDomain: "project",
      pmbokKnowledgeArea: "Scope",
    },
    {
      id: "plan_acceptance_criteria",
      label: {
        de: "✅ Definition of Done (DoD) Klarheit",
        en: "✅ Definition of Done (DoD) Clarity",
        es: "✅ Claridad de Definición de Hecho",
      },
      desc: {
        de: "Sind Exit-Kriterien klar definiert?",
        en: "Exit criteria clearly defined?",
        es: "¿Criterios de salida definidos?",
      },
      inputType: "rating_5",
      methodology: "hybrid",
      opmDomain: "project",
      pmbokKnowledgeArea: "Quality",
    },
    {
      id: "plan_schedule_baseline",
      label: {
        de: "📅 Zeitplan-Baseline (Gantt/Roadmap)",
        en: "📅 Schedule Baseline (Gantt/Roadmap)",
        es: "📅 Línea Base del Cronograma",
      },
      desc: {
        de: "Geplantes Endedatum",
        en: "Planned end date",
        es: "Fecha de finalización planificada",
      },
      inputType: "date",
      methodology: "classical",
      opmDomain: "project",
      pmbokKnowledgeArea: "Schedule",
    },
    {
      id: "plan_release_cadence",
      label: {
        de: "🔄 Release Taktung (Agil)",
        en: "🔄 Release Cadence (Agile)",
        es: "🔄 Cadencia de Lanzamientos",
      },
      desc: {
        de: "Wie oft liefern wir produktiv?",
        en: "How often do we deliver to production?",
        es: "¿Con qué frecuencia entregamos?",
      },
      inputType: "select",
      options: ["Täglich (CI/CD)", "Wöchentlich", "2-Wochen Sprint", "Monatlich", "Quartalsweise"],
      methodology: "agile",
      opmDomain: "project",
      pmbokKnowledgeArea: "Schedule",
    },
    {
      id: "plan_budget_allocation",
      label: {
        de: "💰 Budget-Verteilung (Top-Down)",
        en: "💰 Budget Allocation (Top-Down)",
        es: "💰 Asignación de Presupuesto",
      },
      desc: {
        de: "Gesamtbudget eingeplant (€)",
        en: "Total budget planned",
        es: "Presupuesto total planificado",
      },
      inputType: "currency",
      methodology: "classical",
      opmDomain: "portfolio",
      pmbokKnowledgeArea: "Cost",
    },
    {
      id: "plan_risk_register",
      label: {
        de: "🛡️ Risiko-Register Vollständigkeit",
        en: "🛡️ Risk Register Completeness",
        es: "🛡️ Completitud del Registro de Riesgos",
      },
      desc: {
        de: "Top-Risiken identifiziert und bewertet?",
        en: "Top risks identified and assessed?",
        es: "¿Riesgos principales identificados?",
      },
      inputType: "slider_percent",
      methodology: "classical",
      opmDomain: "project",
      pmbokKnowledgeArea: "Risk",
    },
    {
      id: "plan_communication_matrix",
      label: {
        de: "📢 Kommunikationsplan (RACI)",
        en: "📢 Communication Plan (RACI)",
        es: "📢 Plan de Comunicación (RACI)",
      },
      desc: {
        de: "Stakeholder-Kommunikation strukturiert?",
        en: "Stakeholder communication structured?",
        es: "¿Comunicación estructurada?",
      },
      inputType: "rating_traffic_light",
      methodology: "classical",
      opmDomain: "project",
      pmbokKnowledgeArea: "Communication",
    },
  ],

  "S10-PLAN-Resources": [
    {
      id: "plan_resource_histogram",
      label: {
        de: "📊 Ressourcen-Histogramm",
        en: "📊 Resource Histogram",
        es: "📊 Histograma de Recursos",
      },
      desc: {
        de: "Personalbedarf über Zeit geplant?",
        en: "Staffing needs over time planned?",
        es: "¿Necesidades de personal planificadas?",
      },
      inputType: "rating_5",
      methodology: "classical",
      opmDomain: "project",
      pmbokKnowledgeArea: "Resource",
    },
    {
      id: "plan_team_capacity",
      label: {
        de: "⚡ Sprint Capacity (Agil: Story Points)",
        en: "⚡ Sprint Capacity (Agile: Story Points)",
        es: "⚡ Capacidad del Sprint",
      },
      desc: {
        de: "Velocity-Schätzung pro Sprint",
        en: "Estimated velocity per sprint",
        es: "Velocidad estimada por sprint",
      },
      inputType: "number",
      methodology: "agile",
      opmDomain: "project",
      pmbokKnowledgeArea: "Resource",
    },
    {
      id: "plan_procurement_strategy",
      label: {
        de: "🛒 Beschaffungsstrategie",
        en: "🛒 Procurement Strategy",
        es: "🛒 Estrategia de Adquisiciones",
      },
      desc: {
        de: "Make-or-Buy Entscheidungen getroffen?",
        en: "Make-or-buy decisions made?",
        es: "¿Decisiones de hacer o comprar?",
      },
      inputType: "select",
      options: ["Nicht relevant", "Intern (Make)", "Extern (Buy)", "Hybrid"],
      methodology: "classical",
      opmDomain: "project",
      pmbokKnowledgeArea: "Procurement",
    },
  ],
};

// ============================================================================
// PROCESS GROUP 3: EXECUTING
// "Completing work defined in the project management plan" (PMBOK)
// OPM: Value Delivery & Organizational Change Management
// ============================================================================

export const executingMetrics: Record<string, MetricDefinition[]> = {
  "S01-EXEC-Delivery": [
    {
      id: "exec_deliverable_count",
      label: {
        de: "📦 Abgeschlossene Arbeitspakete",
        en: "📦 Completed Work Packages",
        es: "📦 Paquetes de Trabajo Completados",
      },
      desc: {
        de: "Anzahl fertiggestellter Deliverables",
        en: "Number of completed deliverables",
        es: "Número de entregables completados",
      },
      inputType: "number",
      methodology: "classical",
      opmDomain: "project",
      pmbokKnowledgeArea: "Scope",
    },
    {
      id: "exec_sprint_burndown",
      label: {
        de: "🔥 Sprint Burndown Trend (Agil)",
        en: "🔥 Sprint Burndown Trend (Agile)",
        es: "🔥 Tendencia del Burndown",
      },
      desc: {
        de: "Velocity-Stabilität über letzte 3 Sprints",
        en: "Velocity stability over last 3 sprints",
        es: "Estabilidad de velocidad",
      },
      inputType: "rating_traffic_light",
      methodology: "agile",
      opmDomain: "project",
      pmbokKnowledgeArea: "Schedule",
    },
    {
      id: "exec_quality_defects",
      label: {
        de: "🐛 Defect Density (Quality Gate)",
        en: "🐛 Defect Density (Quality Gate)",
        es: "🐛 Densidad de Defectos",
      },
      desc: {
        de: "Anzahl kritischer Fehler pro Release",
        en: "Critical defects per release",
        es: "Defectos críticos por lanzamiento",
      },
      inputType: "number",
      methodology: "hybrid",
      opmDomain: "project",
      pmbokKnowledgeArea: "Quality",
    },
    {
      id: "exec_team_morale",
      label: {
        de: "😊 Team-Stimmung (Happiness Metric)",
        en: "😊 Team Morale (Happiness Metric)",
        es: "😊 Moral del Equipo",
      },
      desc: {
        de: "Retrospektive: Wie glücklich ist das Team? (1-5)",
        en: "Retrospective: Team happiness?",
        es: "Retrospectiva: ¿Felicidad del equipo?",
      },
      inputType: "rating_5",
      methodology: "agile",
      opmDomain: "enablers",
      pmbokKnowledgeArea: "Resource",
    },
    {
      id: "exec_stakeholder_satisfaction",
      label: {
        de: "⭐ Stakeholder Zufriedenheit",
        en: "⭐ Stakeholder Satisfaction",
        es: "⭐ Satisfacción de Interesados",
      },
      desc: {
        de: "Review-Feedback Score (1-10)",
        en: "Review feedback score",
        es: "Puntuación de retroalimentación",
      },
      inputType: "rating_10",
      methodology: "hybrid",
      opmDomain: "project",
      pmbokKnowledgeArea: "Stakeholder",
    },
  ],

  "S14-EXEC-Change": [
    {
      id: "exec_change_requests",
      label: {
        de: "📝 Change Requests (CR) Status",
        en: "📝 Change Request (CR) Status",
        es: "📝 Estado de Solicitudes de Cambio",
      },
      desc: {
        de: "Anzahl offener/genehmigter/abgelehnter CRs",
        en: "Number of open/approved/rejected CRs",
        es: "Número de CRs abiertas/aprobadas",
      },
      inputType: "text",
      methodology: "classical",
      opmDomain: "project",
      pmbokKnowledgeArea: "Integration",
    },
    {
      id: "exec_decision_latency",
      label: {
        de: "⏱️ Entscheidungs-Latenz (Days)",
        en: "⏱️ Decision Latency (Days)",
        es: "⏱️ Latencia de Decisiones",
      },
      desc: {
        de: "Durchschnittliche Zeit von Request bis Approval",
        en: "Avg time from request to approval",
        es: "Tiempo promedio de solicitud a aprobación",
      },
      inputType: "number",
      methodology: "hybrid",
      opmDomain: "enablers",
      pmbokKnowledgeArea: "Integration",
    },
    {
      id: "exec_backlog_refinement",
      label: {
        de: "🔄 Backlog Refinement Rate (Agil)",
        en: "🔄 Backlog Refinement Rate (Agile)",
        es: "🔄 Tasa de Refinamiento del Backlog",
      },
      desc: {
        de: "% Stories mit klaren Acceptance Criteria",
        en: "% stories with clear acceptance criteria",
        es: "% historias con criterios claros",
      },
      inputType: "slider_percent",
      methodology: "agile",
      opmDomain: "project",
      pmbokKnowledgeArea: "Scope",
    },
  ],
};

// ============================================================================
// PROCESS GROUP 4: MONITORING & CONTROLLING
// "Tracking, reviewing, and regulating progress" (PMBOK)
// OPM: Performance Measurement & Portfolio Governance
// ============================================================================

export const monitoringMetrics: Record<string, MetricDefinition[]> = {
  "S01-MONITOR-Performance": [
    {
      id: "monitor_spi",
      label: {
        de: "📈 Schedule Performance Index (SPI)",
        en: "📈 Schedule Performance Index (SPI)",
        es: "📈 Índice de Desempeño del Cronograma",
      },
      desc: {
        de: "Earned Value: SPI = EV / PV (>1 = gut)",
        en: "Earned Value: SPI = EV / PV (>1 = good)",
        es: "Valor Ganado: SPI = EV / PV",
      },
      inputType: "number",
      methodology: "classical",
      opmDomain: "project",
      pmbokKnowledgeArea: "Schedule",
    },
    {
      id: "monitor_cpi",
      label: {
        de: "💰 Cost Performance Index (CPI)",
        en: "💰 Cost Performance Index (CPI)",
        es: "💰 Índice de Desempeño de Costos",
      },
      desc: {
        de: "Earned Value: CPI = EV / AC (>1 = gut)",
        en: "Earned Value: CPI = EV / AC (>1 = good)",
        es: "Valor Ganado: CPI = EV / AC",
      },
      inputType: "number",
      methodology: "classical",
      opmDomain: "project",
      pmbokKnowledgeArea: "Cost",
    },
    {
      id: "monitor_cumulative_flow",
      label: {
        de: "📊 Cumulative Flow Diagram (CFD) - WIP",
        en: "📊 Cumulative Flow Diagram (CFD) - WIP",
        es: "📊 Diagrama de Flujo Acumulado",
      },
      desc: {
        de: "Work-in-Progress Items (Agil: Kanban)",
        en: "Work-in-Progress items",
        es: "Elementos en progreso",
      },
      inputType: "number",
      methodology: "agile",
      opmDomain: "project",
      pmbokKnowledgeArea: "Schedule",
    },
    {
      id: "monitor_cycle_time",
      label: {
        de: "⏱️ Cycle Time (Lead Time) - Agil",
        en: "⏱️ Cycle Time (Lead Time) - Agile",
        es: "⏱️ Tiempo de Ciclo",
      },
      desc: {
        de: "Durchschnittliche Zeit von Start bis Done (Tage)",
        en: "Avg time from start to done (days)",
        es: "Tiempo promedio de inicio a fin",
      },
      inputType: "number",
      methodology: "agile",
      opmDomain: "project",
      pmbokKnowledgeArea: "Schedule",
    },
    {
      id: "monitor_variance_analysis",
      label: {
        de: "📉 Variance Analysis (Budget vs Actual)",
        en: "📉 Variance Analysis (Budget vs Actual)",
        es: "📉 Análisis de Varianza",
      },
      desc: {
        de: "Abweichung von Baseline (%)",
        en: "Deviation from baseline",
        es: "Desviación de línea base",
      },
      inputType: "slider_percent",
      methodology: "classical",
      opmDomain: "project",
      pmbokKnowledgeArea: "Cost",
    },
    {
      id: "monitor_quality_metrics",
      label: {
        de: "✅ Quality Metrics Dashboard",
        en: "✅ Quality Metrics Dashboard",
        es: "✅ Tablero de Métricas de Calidad",
      },
      desc: {
        de: "Test Coverage, Code Quality, etc. (Ampel)",
        en: "Test coverage, code quality, etc.",
        es: "Cobertura de pruebas, calidad de código",
      },
      inputType: "rating_traffic_light",
      methodology: "hybrid",
      opmDomain: "project",
      pmbokKnowledgeArea: "Quality",
    },
  ],

  "S17-MONITOR-Risk": [
    {
      id: "monitor_risk_exposure",
      label: {
        de: "🛡️ Risk Exposure Value (REV)",
        en: "🛡️ Risk Exposure Value (REV)",
        es: "🛡️ Valor de Exposición al Riesgo",
      },
      desc: {
        de: "Summe: Wahrscheinlichkeit x Impact (€)",
        en: "Sum: Probability x Impact",
        es: "Suma: Probabilidad x Impacto",
      },
      inputType: "currency",
      methodology: "classical",
      opmDomain: "project",
      pmbokKnowledgeArea: "Risk",
    },
    {
      id: "monitor_issue_resolution_time",
      label: {
        de: "🚑 Issue Resolution Time (SLA)",
        en: "🚑 Issue Resolution Time (SLA)",
        es: "🚑 Tiempo de Resolución de Problemas",
      },
      desc: {
        de: "Durchschnittliche Lösungszeit (Stunden)",
        en: "Average resolution time (hours)",
        es: "Tiempo promedio de resolución",
      },
      inputType: "number",
      methodology: "hybrid",
      opmDomain: "project",
      pmbokKnowledgeArea: "Risk",
    },
    {
      id: "monitor_impediment_count",
      label: {
        de: "🚧 Impediment Count (Agil: Blocker)",
        en: "🚧 Impediment Count (Agile: Blocker)",
        es: "🚧 Cuenta de Impedimentos",
      },
      desc: {
        de: "Anzahl aktiver Impediments im Backlog",
        en: "Number of active impediments",
        es: "Número de impedimentos activos",
      },
      inputType: "number",
      methodology: "agile",
      opmDomain: "project",
      pmbokKnowledgeArea: "Risk",
    },
  ],
};

// ============================================================================
// PROCESS GROUP 5: CLOSING
// "Finalizing all activities to formally close the project" (PMBOK)
// OPM: Benefits Realization & Organizational Learning
// ============================================================================

export const closingMetrics: Record<string, MetricDefinition[]> = {
  "S01-CLOSE-Value": [
    {
      id: "close_benefits_realization",
      label: {
        de: "🎯 Benefits Realization Rate (OPM)",
        en: "🎯 Benefits Realization Rate (OPM)",
        es: "🎯 Tasa de Realización de Beneficios",
      },
      desc: {
        de: "Geplanter vs. tatsächlich erzielter Nutzen (%)",
        en: "Planned vs. actual benefits achieved",
        es: "Beneficios planificados vs. reales",
      },
      inputType: "slider_percent",
      methodology: "hybrid",
      opmDomain: "portfolio",
      pmbokKnowledgeArea: "Integration",
    },
    {
      id: "close_roi_actual",
      label: {
        de: "💰 Tatsächlicher ROI (Post-Implementation)",
        en: "💰 Actual ROI (Post-Implementation)",
        es: "💰 ROI Real",
      },
      desc: {
        de: "Gemessener ROI nach 6-12 Monaten",
        en: "Measured ROI after 6-12 months",
        es: "ROI medido después de 6-12 meses",
      },
      inputType: "currency",
      methodology: "classical",
      opmDomain: "portfolio",
      pmbokKnowledgeArea: "Cost",
    },
    {
      id: "close_user_adoption",
      label: {
        de: "👥 User Adoption Rate (Agil: Value Stream)",
        en: "👥 User Adoption Rate (Agile: Value Stream)",
        es: "👥 Tasa de Adopción de Usuarios",
      },
      desc: {
        de: "% aktiver Nutzer nach Go-Live",
        en: "% active users after go-live",
        es: "% usuarios activos después del lanzamiento",
      },
      inputType: "slider_percent",
      methodology: "agile",
      opmDomain: "strategy",
      pmbokKnowledgeArea: "Stakeholder",
    },
    {
      id: "close_customer_satisfaction",
      label: {
        de: "⭐ Customer Satisfaction Score (CSAT)",
        en: "⭐ Customer Satisfaction Score (CSAT)",
        es: "⭐ Puntuación de Satisfacción del Cliente",
      },
      desc: {
        de: "Post-Launch Survey Ergebnis (1-10)",
        en: "Post-launch survey result",
        es: "Resultado de encuesta post-lanzamiento",
      },
      inputType: "rating_10",
      methodology: "hybrid",
      opmDomain: "strategy",
      pmbokKnowledgeArea: "Stakeholder",
    },
  ],

  "GLOBAL-CLOSE-Lessons": [
    {
      id: "close_lessons_learned",
      label: {
        de: "📚 Lessons Learned Dokumentiert",
        en: "📚 Lessons Learned Documented",
        es: "📚 Lecciones Aprendidas Documentadas",
      },
      desc: {
        de: "Retrospektive durchgeführt und archiviert?",
        en: "Retrospective conducted and archived?",
        es: "¿Retrospectiva realizada y archivada?",
      },
      inputType: "rating_traffic_light",
      methodology: "hybrid",
      opmDomain: "enablers",
      pmbokKnowledgeArea: "Integration",
    },
    {
      id: "close_knowledge_transfer",
      label: {
        de: "🎓 Knowledge Transfer Abschluss",
        en: "🎓 Knowledge Transfer Completion",
        es: "🎓 Finalización de Transferencia de Conocimiento",
      },
      desc: {
        de: "Übergabe an Betrieb/Maintenance erfolgreich?",
        en: "Handover to operations successful?",
        es: "¿Traspaso exitoso a operaciones?",
      },
      inputType: "rating_5",
      methodology: "classical",
      opmDomain: "enablers",
      pmbokKnowledgeArea: "Communication",
    },
    {
      id: "close_team_velocity_history",
      label: {
        de: "📊 Team Velocity Historie (Agil)",
        en: "📊 Team Velocity History (Agile)",
        es: "📊 Historia de Velocidad del Equipo",
      },
      desc: {
        de: "Durchschnittliche Velocity für zukünftige Planung",
        en: "Average velocity for future planning",
        es: "Velocidad promedio para planificación futura",
      },
      inputType: "number",
      methodology: "agile",
      opmDomain: "enablers",
      pmbokKnowledgeArea: "Resource",
    },
    {
      id: "close_contract_closure",
      label: {
        de: "📄 Vertragsabschluss (Procurement)",
        en: "📄 Contract Closure (Procurement)",
        es: "📄 Cierre de Contratos",
      },
      desc: {
        de: "Alle Verträge formal geschlossen?",
        en: "All contracts formally closed?",
        es: "¿Todos los contratos cerrados?",
      },
      inputType: "rating_traffic_light",
      methodology: "classical",
      opmDomain: "project",
      pmbokKnowledgeArea: "Procurement",
    },
    {
      id: "close_project_archive",
      label: {
        de: "🗄️ Projekt-Archivierung",
        en: "🗄️ Project Archiving",
        es: "🗄️ Archivado del Proyecto",
      },
      desc: {
        de: "Dokumentation vollständig archiviert?",
        en: "Documentation fully archived?",
        es: "¿Documentación completamente archivada?",
      },
      inputType: "rating_traffic_light",
      methodology: "classical",
      opmDomain: "enablers",
      pmbokKnowledgeArea: "Integration",
    },
  ],
};

// ============================================================================
// KOMBINIERTES EXPORT FÜR EINFACHE VERWENDUNG
// ============================================================================

export const allProcessGroupMetrics = {
  initiating: initiatingMetrics,
  planning: planningMetrics,
  executing: executingMetrics,
  monitoring: monitoringMetrics,
  closing: closingMetrics,
};

// Legacy-Kompatibilität mit bestehender Struktur
export const stepMetrics: Record<string, MetricDefinition[]> = {
  // ============================================================================
  // SERVICE S-01: PORTFOLIO STRATEGY & ALIGNMENT
  // ============================================================================
  
  // Initiating
  "S01-INIT-Charter": initiatingMetrics["S01-INIT-Charter"] || [],
  "S01-INIT-Stakeholder": initiatingMetrics["S01-INIT-Charter"] || [], // Reuse metrics
  
  // Planning
  "S01-PLAN-Scope": planningMetrics["S01-PLAN-Scope"] || [],
  "S01-PLAN-Criteria": planningMetrics["S01-PLAN-Scope"] || [], // Reuse metrics
  
  // Executing
  "S01-EXEC-Delivery": executingMetrics["S01-EXEC-Delivery"] || [],
  "S01-EXEC-Prioritize": executingMetrics["S01-EXEC-Delivery"] || [], // Reuse metrics
  
  // Monitoring
  "S01-MONITOR-Performance": monitoringMetrics["S01-MONITOR-Performance"] || [],
  "S01-MONITOR-Health": monitoringMetrics["S01-MONITOR-Performance"] || [], // Reuse metrics
  
  // Closing
  "S01-CLOSE-Value": closingMetrics["S01-CLOSE-Value"] || [],
  "S01-CLOSE-Lessons": closingMetrics["GLOBAL-CLOSE-Lessons"] || [],
  
  // ============================================================================
  // SERVICE S-10: RESOURCE & CAPACITY MANAGEMENT
  // ============================================================================
  
  // Initiating
  "S10-INIT-Team": initiatingMetrics["S10-INIT-Team"] || [],
  "S10-INIT-Skills": initiatingMetrics["S10-INIT-Team"] || [], // Reuse metrics
  
  // Planning
  "S10-PLAN-Resources": planningMetrics["S10-PLAN-Resources"] || [],
  "S10-PLAN-Capacity": planningMetrics["S10-PLAN-Resources"] || [], // Reuse metrics
  
  // Executing
  "S10-EXEC-Assignment": [
    {
      id: "exec_resource_assignment",
      label: {
        de: "👤 Ressourcenzuweisung Status",
        en: "👤 Resource Assignment Status",
        es: "👤 Estado de Asignación",
      },
      desc: {
        de: "Sind alle benötigten Rollen besetzt?",
        en: "Are all required roles filled?",
        es: "¿Están asignados todos los roles?",
      },
      inputType: "slider_percent",
      methodology: "hybrid",
      opmDomain: "project",
      pmbokKnowledgeArea: "Resource",
    },
  ],
  "S10-EXEC-Morale": [
    {
      id: "exec_team_morale",
      label: {
        de: "😊 Team-Stimmung (Happiness Metric)",
        en: "😊 Team Morale (Happiness Metric)",
        es: "😊 Moral del Equipo",
      },
      desc: {
        de: "Retrospektive: Wie glücklich ist das Team? (1-5)",
        en: "Retrospective: Team happiness?",
        es: "Retrospectiva: ¿Felicidad del equipo?",
      },
      inputType: "rating_5",
      methodology: "agile",
      opmDomain: "enablers",
      pmbokKnowledgeArea: "Resource",
    },
  ],
  
  // Monitoring
  "S10-MONITOR-Utilization": [
    {
      id: "monitor_utilization",
      label: {
        de: "📊 Ressourcen-Auslastung",
        en: "📊 Resource Utilization",
        es: "📊 Utilización de Recursos",
      },
      desc: {
        de: "Ist die Auslastung im gesunden Bereich (70-85%)?",
        en: "Is utilization in healthy range (70-85%)?",
        es: "¿Utilización en rango saludable?",
      },
      inputType: "slider_percent",
      methodology: "classical",
      opmDomain: "project",
      pmbokKnowledgeArea: "Resource",
    },
  ],
  "S10-MONITOR-Conflicts": [
    {
      id: "monitor_bus_factor",
      label: {
        de: "🚌 Bus Factor Risk",
        en: "🚌 Bus Factor Risk",
        es: "🚌 Riesgo de Factor Bus",
      },
      desc: {
        de: "Abhängigkeit von Einzelpersonen (Kopfmonopole)",
        en: "Dependency on key individuals",
        es: "Dependencia de individuos clave",
      },
      inputType: "rating_traffic_light",
      methodology: "hybrid",
      opmDomain: "project",
      pmbokKnowledgeArea: "Risk",
    },
  ],
  
  // Closing
  "S10-CLOSE-History": [
    {
      id: "close_team_velocity_history",
      label: {
        de: "📊 Team Velocity Historie (Agil)",
        en: "📊 Team Velocity History (Agile)",
        es: "📊 Historia de Velocidad del Equipo",
      },
      desc: {
        de: "Durchschnittliche Velocity für zukünftige Planung",
        en: "Average velocity for future planning",
        es: "Velocidad promedio para planificación futura",
      },
      inputType: "number",
      methodology: "agile",
      opmDomain: "enablers",
      pmbokKnowledgeArea: "Resource",
    },
  ],
  "S10-CLOSE-Transfer": closingMetrics["GLOBAL-CLOSE-Lessons"] || [],
  
  // ============================================================================
  // SERVICE S-14: CHANGE CONTROL & GOVERNANCE
  // ============================================================================
  
  // Initiating
  "S14-INIT-Mandate": [
    {
      id: "init_change_mandate",
      label: {
        de: "⚖️ Entscheidungs-Mandat (Power)",
        en: "⚖️ Decision Mandate",
        es: "⚖️ Mandato de Decisión",
      },
      desc: {
        de: "Darf das Board entscheiden oder nur empfehlen?",
        en: "Can the board decide or just recommend?",
        es: "¿Puede decidir o solo recomendar?",
      },
      inputType: "select",
      options: [
        "Nur Empfehlung (Zahnlos)",
        "Teil-Mandat (Budget begrenzt)",
        "Volles Mandat (Durchgriff)",
      ],
      methodology: "classical",
      opmDomain: "enablers",
      pmbokKnowledgeArea: "Integration",
    },
  ],
  "S14-INIT-Members": [
    {
      id: "init_board_members",
      label: {
        de: "👥 Board-Zusammensetzung",
        en: "👥 Board Composition",
        es: "👥 Composición de la Junta",
      },
      desc: {
        de: "Sind alle relevanten Stakeholder im Board vertreten?",
        en: "Are all relevant stakeholders represented?",
        es: "¿Están representados todos los interesados?",
      },
      inputType: "rating_5",
      methodology: "hybrid",
      opmDomain: "enablers",
      pmbokKnowledgeArea: "Stakeholder",
    },
  ],
  
  // Planning
  "S14-PLAN-Process": [
    {
      id: "plan_change_process",
      label: {
        de: "📋 Change Process Design",
        en: "📋 Change Process Design",
        es: "📋 Diseño de Proceso",
      },
      desc: {
        de: "Ist der Change-Request-Workflow klar dokumentiert?",
        en: "Is the change request workflow clearly documented?",
        es: "¿Está documentado el flujo de trabajo?",
      },
      inputType: "rating_traffic_light",
      methodology: "classical",
      opmDomain: "enablers",
      pmbokKnowledgeArea: "Integration",
    },
  ],
  "S14-PLAN-Threshold": [
    {
      id: "plan_autonomy_threshold",
      label: {
        de: "🚧 Schwellenwert (Autonomie)",
        en: "🚧 Approval Threshold",
        es: "🚧 Umbral de Aprobación",
      },
      desc: {
        de: "Was darf das Team OHNE Board entscheiden?",
        en: "What can team decide alone?",
        es: "¿Qué decide el equipo solo?",
      },
      inputType: "currency",
      methodology: "hybrid",
      opmDomain: "enablers",
      pmbokKnowledgeArea: "Integration",
    },
  ],
  
  // Executing
  "S14-EXEC-Change": executingMetrics["S14-EXEC-Change"] || [],
  "S14-EXEC-Backlog": [
    {
      id: "exec_backlog_refinement",
      label: {
        de: "🔄 Backlog Refinement Rate (Agil)",
        en: "🔄 Backlog Refinement Rate (Agile)",
        es: "🔄 Tasa de Refinamiento del Backlog",
      },
      desc: {
        de: "% Stories mit klaren Acceptance Criteria",
        en: "% stories with clear acceptance criteria",
        es: "% historias con criterios claros",
      },
      inputType: "slider_percent",
      methodology: "agile",
      opmDomain: "project",
      pmbokKnowledgeArea: "Scope",
    },
  ],
  
  // Monitoring
  "S14-MONITOR-Latency": [
    {
      id: "monitor_decision_latency",
      label: {
        de: "⏱️ Entscheidungs-Latenz (Days)",
        en: "⏱️ Decision Latency (Days)",
        es: "⏱️ Latencia de Decisiones",
      },
      desc: {
        de: "Durchschnittliche Zeit von Request bis Approval",
        en: "Avg time from request to approval",
        es: "Tiempo promedio de solicitud a aprobación",
      },
      inputType: "number",
      methodology: "hybrid",
      opmDomain: "enablers",
      pmbokKnowledgeArea: "Integration",
    },
  ],
  "S14-MONITOR-Rate": [
    {
      id: "monitor_approval_rate",
      label: {
        de: "✅ Approval Rate",
        en: "✅ Approval Rate",
        es: "✅ Tasa de Aprobación",
      },
      desc: {
        de: "% genehmigte Change Requests",
        en: "% approved change requests",
        es: "% solicitudes aprobadas",
      },
      inputType: "slider_percent",
      methodology: "classical",
      opmDomain: "enablers",
      pmbokKnowledgeArea: "Integration",
    },
  ],
  
  // Closing
  "S14-CLOSE-Review": [
    {
      id: "close_governance_effectiveness",
      label: {
        de: "📊 Governance Effectiveness",
        en: "📊 Governance Effectiveness",
        es: "📊 Efectividad de Gobernanza",
      },
      desc: {
        de: "War das Change Board effektiv? (Feedback)",
        en: "Was the change board effective?",
        es: "¿Fue efectiva la junta?",
      },
      inputType: "rating_5",
      methodology: "hybrid",
      opmDomain: "enablers",
      pmbokKnowledgeArea: "Integration",
    },
  ],
  "S14-CLOSE-Lessons": closingMetrics["GLOBAL-CLOSE-Lessons"] || [],
  
  // ============================================================================
  // SERVICE S-17: ISSUE & RISK MANAGEMENT
  // ============================================================================
  
  // Initiating
  "S17-INIT-Paths": [
    {
      id: "init_escalation_paths",
      label: {
        de: "🗺️ Klarheit der Eskalationswege",
        en: "🗺️ Path Clarity",
        es: "🗺️ Claridad de Ruta",
      },
      desc: {
        de: "Weiß jeder sofort, wen er anrufen muss?",
        en: "Does everyone know whom to call?",
        es: "¿Saben a quién llamar?",
      },
      inputType: "rating_10",
      methodology: "hybrid",
      opmDomain: "project",
      pmbokKnowledgeArea: "Communication",
    },
  ],
  "S17-INIT-Risk": [
    {
      id: "init_risk_identification",
      label: {
        de: "🛡️ Initiale Risiko-Identifikation",
        en: "🛡️ Initial Risk Identification",
        es: "🛡️ Identificación Inicial de Riesgos",
      },
      desc: {
        de: "Wurden die Top-5 Projektrisiken identifiziert?",
        en: "Have the top 5 project risks been identified?",
        es: "¿Se identificaron los 5 riesgos principales?",
      },
      inputType: "rating_traffic_light",
      methodology: "classical",
      opmDomain: "project",
      pmbokKnowledgeArea: "Risk",
    },
  ],
  
  // Planning
  "S17-PLAN-Register": [
    {
      id: "plan_risk_register",
      label: {
        de: "🛡️ Risk Register Vollständigkeit",
        en: "🛡️ Risk Register Completeness",
        es: "🛡️ Completitud del Registro de Riesgos",
      },
      desc: {
        de: "Top-Risiken identifiziert und bewertet?",
        en: "Top risks identified and assessed?",
        es: "¿Riesgos principales identificados?",
      },
      inputType: "slider_percent",
      methodology: "classical",
      opmDomain: "project",
      pmbokKnowledgeArea: "Risk",
    },
  ],
  "S17-PLAN-Response": [
    {
      id: "plan_risk_response",
      label: {
        de: "🎯 Risk Response Strategies",
        en: "🎯 Risk Response Strategies",
        es: "🎯 Estrategias de Respuesta",
      },
      desc: {
        de: "Sind für alle High-Risiken Reaktionsstrategien definiert?",
        en: "Are response strategies defined for all high risks?",
        es: "¿Están definidas estrategias de respuesta?",
      },
      inputType: "rating_5",
      methodology: "classical",
      opmDomain: "project",
      pmbokKnowledgeArea: "Risk",
    },
  ],
  
  // Executing
  "S17-EXEC-Issues": [
    {
      id: "exec_issue_resolution",
      label: {
        de: "🚑 Issue Resolution Time (SLA)",
        en: "🚑 Issue Resolution Time (SLA)",
        es: "🚑 Tiempo de Resolución",
      },
      desc: {
        de: "Durchschnittliche Lösungszeit (Stunden)",
        en: "Average resolution time (hours)",
        es: "Tiempo promedio de resolución",
      },
      inputType: "number",
      methodology: "hybrid",
      opmDomain: "project",
      pmbokKnowledgeArea: "Risk",
    },
  ],
  "S17-EXEC-Impediments": [
    {
      id: "exec_impediment_count",
      label: {
        de: "🚧 Impediment Count (Agil: Blocker)",
        en: "🚧 Impediment Count (Agile: Blocker)",
        es: "🚧 Cuenta de Impedimentos",
      },
      desc: {
        de: "Anzahl aktiver Impediments im Backlog",
        en: "Number of active impediments",
        es: "Número de impedimentos activos",
      },
      inputType: "number",
      methodology: "agile",
      opmDomain: "project",
      pmbokKnowledgeArea: "Risk",
    },
  ],
  
  // Monitoring
  "S17-MONITOR-Risk": monitoringMetrics["S17-MONITOR-Risk"] || [],
  "S17-MONITOR-Safety": [
    {
      id: "monitor_psychological_safety",
      label: {
        de: "🛡️ Psychologische Sicherheit",
        en: "🛡️ Psychological Safety",
        es: "🛡️ Seguridad Psicológica",
      },
      desc: {
        de: "Wird Melden von Problemen bestraft oder gelobt?",
        en: "Is reporting punished or praised?",
        es: "¿Se castiga o alaba el reporte?",
      },
      inputType: "slider_percent",
      methodology: "agile",
      opmDomain: "enablers",
      pmbokKnowledgeArea: "Communication",
    },
  ],
  
  // Closing
  "S17-CLOSE-Lessons": closingMetrics["GLOBAL-CLOSE-Lessons"] || [],
  "S17-CLOSE-Archive": [
    {
      id: "close_issue_archive",
      label: {
        de: "🗄️ Issue Archive & Knowledge Base",
        en: "🗄️ Issue Archive & Knowledge Base",
        es: "🗄️ Archivo de Problemas",
      },
      desc: {
        de: "Sind alle Issues für zukünftige Projekte archiviert?",
        en: "Are all issues archived for future projects?",
        es: "¿Están archivados todos los problemas?",
      },
      inputType: "rating_traffic_light",
      methodology: "hybrid",
      opmDomain: "enablers",
      pmbokKnowledgeArea: "Communication",
    },
  ],
  
  // ============================================================================
  // LEGACY COMPATIBILITY (alte Step-IDs)
  // ============================================================================
  "S01-I-1": initiatingMetrics["S01-INIT-Charter"] || [],
  "S10-I-1": initiatingMetrics["S10-INIT-Team"] || [],
  "S01-P-1": planningMetrics["S01-PLAN-Scope"] || [],
  "S10-P-1": planningMetrics["S10-PLAN-Resources"] || [],
  "S01-E-1": executingMetrics["S01-EXEC-Delivery"] || [],
  "S14-I-1": executingMetrics["S14-EXEC-Change"] || [],
  "S01-M-1": monitoringMetrics["S01-MONITOR-Performance"] || [],
  "S17-I-1": monitoringMetrics["S17-MONITOR-Risk"] || [],
  "S01-C-1": closingMetrics["S01-CLOSE-Value"] || [],
  "GLOBAL-C-1": closingMetrics["GLOBAL-CLOSE-Lessons"] || [],
};

