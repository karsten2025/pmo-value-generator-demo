// modules/core-data/data-complete-services.ts
// VOLLSTÄNDIGE VERSION: 4 Services mit allen 5 PMBOK Process Groups
// Ready für ProcessGroupNavigator Component

import { PMOService, PMOOutcome } from "./types";

export const services: PMOService[] = [
  // ============================================================================
  // SERVICE S-01: PORTFOLIO STRATEGY & ALIGNMENT (Strategic)
  // ============================================================================
  {
    id: "S-01",
    name: {
      de: "Strategische Klarheit & Ausrichtung",
      en: "Strategic Clarity & Alignment",
      es: "Claridad y Alineación Estratégica",
    },
    description: {
      de: "Sicherstellung, dass alle Kraft in die richtigen Themen fließt.",
      en: "Ensuring energy flows into the right topics.",
      es: "Asegurar que la energía fluya hacia los temas correctos.",
    },
    deliverables: [
      {
        de: "Orientierungshilfe für Entscheidungen",
        en: "Decision Guidance",
        es: "Guía de decisión",
      },
      {
        de: "Landkarte der strategischen Ziele",
        en: "Strategic Goal Map",
        es: "Mapa de objetivos estratégicos",
      },
    ],
    kpis: [
      {
        de: "Gefühlte Sinnhaftigkeit der Projekte",
        en: "Perceived Purpose",
        es: "Propósito percibido",
      },
      {
        de: "Strategische Stimmigkeit",
        en: "Strategic Fit",
        es: "Ajuste estratégico",
      },
    ],
    businessName: {
      de: "Portfolio Value & Strategic Alignment (OPM)",
      en: "Portfolio Value & Strategic Alignment",
      es: "Valor de Cartera y Alineación",
    },
    hardKpis: [
      {
        de: "Portfolio ROI Optimierung",
        en: "Portfolio ROI Optimization",
        es: "Optimización ROI",
      },
      {
        de: "Strategischer Deckungsgrad > 90%",
        en: "Strategic Coverage > 90%",
        es: "Cobertura estratégica > 90%",
      },
    ],
    roiImpact: {
      de: "Vermeidung von 'Waste' durch OPM-konformes Portfolio-Management.",
      en: "Avoidance of waste through OPM-compliant portfolio management.",
      es: "Evitación de desperdicios mediante gestión de cartera.",
    },
    category: "Strategic",
    maturityLevels: [],

    implementationPlan: [
      // ===== INITIATING =====
      {
        phase: "Initiating",
        steps: [
          {
            id: "S01-INIT-Charter",
            title: {
              de: "Business Case & Charter",
              en: "Business Case & Charter",
              es: "Caso de Negocio",
            },
            description: {
              de: "Erstellung des initialen Business Case und Portfolio Charter",
              en: "Create initial business case and portfolio charter",
              es: "Crear caso de negocio inicial",
            },
          },
          {
            id: "S01-INIT-Stakeholder",
            title: {
              de: "Stakeholder-Analyse C-Level",
              en: "C-Level Stakeholder Analysis",
              es: "Análisis de Interesados",
            },
            description: {
              de: "Identifikation der strategischen Entscheider und ihrer Ziele",
              en: "Identify strategic decision makers and their goals",
              es: "Identificar tomadores de decisiones estratégicas",
            },
          },
        ],
      },
      // ===== PLANNING =====
      {
        phase: "Planning",
        steps: [
          {
            id: "S01-PLAN-Scope",
            title: {
              de: "Strategie-Workshop & Zielsetzung",
              en: "Strategy Workshop & Goal Setting",
              es: "Taller de Estrategia",
            },
            description: {
              de: "Definition der Top-3 Unternehmensziele für das laufende Jahr",
              en: "Define top 3 corporate goals for the current year",
              es: "Definir los 3 objetivos principales",
            },
          },
          {
            id: "S01-PLAN-Criteria",
            title: {
              de: "Bewertungskriterien festlegen",
              en: "Define Scoring Criteria",
              es: "Definir Criterios de Evaluación",
            },
            description: {
              de: "Entwicklung eines Scoring-Modells zur Projektbewertung",
              en: "Develop scoring model for project evaluation",
              es: "Desarrollar modelo de puntuación",
            },
          },
        ],
      },
      // ===== EXECUTING =====
      {
        phase: "Executing",
        steps: [
          {
            id: "S01-EXEC-Delivery",
            title: {
              de: "Portfolio-Inventur & Mapping",
              en: "Portfolio Inventory & Mapping",
              es: "Inventario de Cartera",
            },
            description: {
              de: "Erfassung aller laufenden Projekte und Mapping auf Ziele",
              en: "Capture all running projects and map to goals",
              es: "Capturar proyectos y mapear a objetivos",
            },
          },
          {
            id: "S01-EXEC-Prioritize",
            title: {
              de: "Priorisierung & Go/No-Go",
              en: "Prioritization & Go/No-Go",
              es: "Priorización",
            },
            description: {
              de: "Bewertung und Priorisierung des Projektportfolios",
              en: "Evaluate and prioritize project portfolio",
              es: "Evaluar y priorizar cartera",
            },
          },
        ],
      },
      // ===== MONITORING =====
      {
        phase: "Monitoring",
        steps: [
          {
            id: "S01-MONITOR-Performance",
            title: {
              de: "Quarterly Business Review (QBR)",
              en: "Quarterly Business Review (QBR)",
              es: "Revisión Trimestral",
            },
            description: {
              de: "Überprüfung der Strategie-Konformität und Portfolio-Performance",
              en: "Review strategic fit and portfolio performance",
              es: "Revisar ajuste estratégico",
            },
          },
          {
            id: "S01-MONITOR-Health",
            title: {
              de: "Portfolio Health Dashboard",
              en: "Portfolio Health Dashboard",
              es: "Dashboard de Salud",
            },
            description: {
              de: "Monitoring der Portfolio-KPIs (SPI, CPI, ROI)",
              en: "Monitor portfolio KPIs (SPI, CPI, ROI)",
              es: "Monitorear KPIs de cartera",
            },
          },
        ],
      },
      // ===== CLOSING =====
      {
        phase: "Closing",
        steps: [
          {
            id: "S01-CLOSE-Value",
            title: {
              de: "Benefits Realization Review",
              en: "Benefits Realization Review",
              es: "Revisión de Beneficios",
            },
            description: {
              de: "Messung der tatsächlich erzielten Werte vs. Plan",
              en: "Measure actual value achieved vs. plan",
              es: "Medir valor real vs. plan",
            },
          },
          {
            id: "S01-CLOSE-Lessons",
            title: {
              de: "Portfolio Retrospective",
              en: "Portfolio Retrospective",
              es: "Retrospectiva de Cartera",
            },
            description: {
              de: "Lessons Learned auf Portfolio-Ebene dokumentieren",
              en: "Document portfolio-level lessons learned",
              es: "Documentar lecciones aprendidas",
            },
          },
        ],
      },
    ],
  },

  // ============================================================================
  // SERVICE S-10: RESOURCE & CAPACITY MANAGEMENT (Operational)
  // ============================================================================
  {
    id: "S-10",
    name: {
      de: "Team-Balance & Planung",
      en: "Team Balance & Planning",
      es: "Balance y Planificación de Equipo",
    },
    description: {
      de: "Sicherstellen, dass genügend passende Leute verfügbar sind.",
      en: "Ensuring enough suitable people are available.",
      es: "Asegurar disponibilidad de personas adecuadas.",
    },
    deliverables: [
      {
        de: "Ressourcenplan mit Verfügbarkeitsübersicht",
        en: "Resource Plan with Availability Overview",
        es: "Plan de recursos con disponibilidad",
      },
      {
        de: "Skill-Matrix und Gap-Analyse",
        en: "Skill Matrix and Gap Analysis",
        es: "Matriz de habilidades",
      },
    ],
    kpis: [
      {
        de: "Auslastungsgrad gesund (70-85%)",
        en: "Healthy Utilization (70-85%)",
        es: "Utilización saludable",
      },
      {
        de: "Skill-Abdeckung pro Projekt",
        en: "Skill Coverage per Project",
        es: "Cobertura de habilidades",
      },
    ],
    businessName: {
      de: "Resource & Capacity Management (OPM Enablers)",
      en: "Resource & Capacity Management",
      es: "Gestión de Recursos",
    },
    hardKpis: [
      {
        de: "Ressourcen-Auslastung 80% ± 5%",
        en: "Resource Utilization 80% ± 5%",
        es: "Utilización de recursos 80%",
      },
      {
        de: "Skill Gap < 15%",
        en: "Skill Gap < 15%",
        es: "Brecha de habilidades < 15%",
      },
    ],
    roiImpact: {
      de: "Vermeidung von Über-/Unterauslastung spart Kosten und steigert Mitarbeiterzufriedenheit.",
      en: "Avoiding over/underutilization saves costs and increases employee satisfaction.",
      es: "Evitar sobre/subutilización ahorra costos.",
    },
    category: "Operational",
    maturityLevels: [],

    implementationPlan: [
      // ===== INITIATING =====
      {
        phase: "Initiating",
        steps: [
          {
            id: "S10-INIT-Team",
            title: {
              de: "Team Formation & Rollendefinition",
              en: "Team Formation & Role Definition",
              es: "Formación de Equipo",
            },
            description: {
              de: "Identifikation benötigter Rollen und Skills für das Projekt",
              en: "Identify required roles and skills for the project",
              es: "Identificar roles y habilidades necesarias",
            },
          },
          {
            id: "S10-INIT-Skills",
            title: {
              de: "Skills Gap Assessment",
              en: "Skills Gap Assessment",
              es: "Evaluación de Brechas de Habilidades",
            },
            description: {
              de: "Analyse vorhandener vs. benötigter Kompetenzen",
              en: "Analyze existing vs. required competencies",
              es: "Analizar competencias existentes vs. necesarias",
            },
          },
        ],
      },
      // ===== PLANNING =====
      {
        phase: "Planning",
        steps: [
          {
            id: "S10-PLAN-Resources",
            title: {
              de: "Ressourcenplan erstellen",
              en: "Create Resource Plan",
              es: "Crear Plan de Recursos",
            },
            description: {
              de: "Detaillierte Ressourcenplanung über Projektlaufzeit",
              en: "Detailed resource planning over project duration",
              es: "Planificación detallada de recursos",
            },
          },
          {
            id: "S10-PLAN-Capacity",
            title: {
              de: "Kapazitätsplanung (Sprint Velocity)",
              en: "Capacity Planning (Sprint Velocity)",
              es: "Planificación de Capacidad",
            },
            description: {
              de: "Schätzung der Team-Velocity und Kapazität",
              en: "Estimate team velocity and capacity",
              es: "Estimar velocidad del equipo",
            },
          },
        ],
      },
      // ===== EXECUTING =====
      {
        phase: "Executing",
        steps: [
          {
            id: "S10-EXEC-Assignment",
            title: {
              de: "Resource Assignment & Onboarding",
              en: "Resource Assignment & Onboarding",
              es: "Asignación de Recursos",
            },
            description: {
              de: "Zuweisung von Mitarbeitern zu Projekten und Onboarding",
              en: "Assign employees to projects and onboard",
              es: "Asignar empleados a proyectos",
            },
          },
          {
            id: "S10-EXEC-Morale",
            title: {
              de: "Team Morale & Happiness Tracking",
              en: "Team Morale & Happiness Tracking",
              es: "Seguimiento de Moral del Equipo",
            },
            description: {
              de: "Regelmäßige Messung der Team-Zufriedenheit",
              en: "Regular measurement of team satisfaction",
              es: "Medición regular de satisfacción",
            },
          },
        ],
      },
      // ===== MONITORING =====
      {
        phase: "Monitoring",
        steps: [
          {
            id: "S10-MONITOR-Utilization",
            title: {
              de: "Auslastungs-Monitoring",
              en: "Utilization Monitoring",
              es: "Monitoreo de Utilización",
            },
            description: {
              de: "Überwachung der Ressourcen-Auslastung (Target: 70-85%)",
              en: "Monitor resource utilization (Target: 70-85%)",
              es: "Monitorear utilización de recursos",
            },
          },
          {
            id: "S10-MONITOR-Conflicts",
            title: {
              de: "Konflikt-Management (Bus Factor)",
              en: "Conflict Management (Bus Factor)",
              es: "Gestión de Conflictos",
            },
            description: {
              de: "Identifikation und Auflösung von Ressourcenkonflikten",
              en: "Identify and resolve resource conflicts",
              es: "Identificar y resolver conflictos",
            },
          },
        ],
      },
      // ===== CLOSING =====
      {
        phase: "Closing",
        steps: [
          {
            id: "S10-CLOSE-History",
            title: {
              de: "Velocity History & Benchmarks",
              en: "Velocity History & Benchmarks",
              es: "Historial de Velocidad",
            },
            description: {
              de: "Dokumentation der Team-Performance für zukünftige Planung",
              en: "Document team performance for future planning",
              es: "Documentar rendimiento del equipo",
            },
          },
          {
            id: "S10-CLOSE-Transfer",
            title: {
              de: "Knowledge Transfer & Offboarding",
              en: "Knowledge Transfer & Offboarding",
              es: "Transferencia de Conocimiento",
            },
            description: {
              de: "Sicherstellung des Wissenstransfers bei Team-Wechsel",
              en: "Ensure knowledge transfer during team transitions",
              es: "Asegurar transferencia de conocimiento",
            },
          },
        ],
      },
    ],
  },

  // ============================================================================
  // SERVICE S-14: CHANGE CONTROL & GOVERNANCE (Tactical)
  // ============================================================================
  {
    id: "S-14",
    name: {
      de: "Änderungsbegleitung",
      en: "Change Facilitation",
      es: "Facilitación de Cambios",
    },
    description: {
      de: "Schnelle und klare Entscheidungen zu Änderungen ermöglichen.",
      en: "Enable fast and clear decisions on changes.",
      es: "Permitir decisiones rápidas sobre cambios.",
    },
    deliverables: [
      {
        de: "Change Control Board Setup",
        en: "Change Control Board Setup",
        es: "Configuración de Junta de Control",
      },
      {
        de: "Entscheidungsprozess dokumentiert",
        en: "Decision Process Documented",
        es: "Proceso de decisión documentado",
      },
    ],
    kpis: [
      {
        de: "Entscheidungslatenz (Zeit bis Approval)",
        en: "Decision Latency (Time to Approval)",
        es: "Latencia de decisión",
      },
      {
        de: "Approval-Rate (% genehmigte CRs)",
        en: "Approval Rate (% approved CRs)",
        es: "Tasa de aprobación",
      },
    ],
    businessName: {
      de: "Change Control & Governance (OPM Enablers)",
      en: "Change Control & Governance",
      es: "Control de Cambios y Gobernanza",
    },
    hardKpis: [
      {
        de: "Decision Latency < 3 Tage",
        en: "Decision Latency < 3 Days",
        es: "Latencia < 3 días",
      },
      {
        de: "Change Success Rate > 85%",
        en: "Change Success Rate > 85%",
        es: "Tasa de éxito > 85%",
      },
    ],
    roiImpact: {
      de: "Schnellere Entscheidungen reduzieren Wartezeiten und erhöhen Agilität.",
      en: "Faster decisions reduce wait times and increase agility.",
      es: "Decisiones rápidas reducen tiempos de espera.",
    },
    category: "Tactical",
    maturityLevels: [],

    implementationPlan: [
      // ===== INITIATING =====
      {
        phase: "Initiating",
        steps: [
          {
            id: "S14-INIT-Mandate",
            title: {
              de: "Change Board Mandat definieren",
              en: "Define Change Board Mandate",
              es: "Definir Mandato de Junta",
            },
            description: {
              de: "Festlegung der Entscheidungskompetenzen des Change Boards",
              en: "Define decision-making authority of the change board",
              es: "Definir autoridad de decisión",
            },
          },
          {
            id: "S14-INIT-Members",
            title: {
              de: "Board-Mitglieder nominieren",
              en: "Nominate Board Members",
              es: "Nominar Miembros de la Junta",
            },
            description: {
              de: "Auswahl der Stakeholder für das Change Control Board",
              en: "Select stakeholders for the change control board",
              es: "Seleccionar partes interesadas",
            },
          },
        ],
      },
      // ===== PLANNING =====
      {
        phase: "Planning",
        steps: [
          {
            id: "S14-PLAN-Process",
            title: {
              de: "Change Control Process Design",
              en: "Change Control Process Design",
              es: "Diseño de Proceso de Control",
            },
            description: {
              de: "Definition des Change-Request-Workflows",
              en: "Define change request workflow",
              es: "Definir flujo de trabajo de cambios",
            },
          },
          {
            id: "S14-PLAN-Threshold",
            title: {
              de: "Schwellenwerte & Autonomie",
              en: "Thresholds & Autonomy",
              es: "Umbrales y Autonomía",
            },
            description: {
              de: "Festlegung, was das Team ohne Board entscheiden darf",
              en: "Define what the team can decide without board approval",
              es: "Definir qué puede decidir el equipo solo",
            },
          },
        ],
      },
      // ===== EXECUTING =====
      {
        phase: "Executing",
        steps: [
          {
            id: "S14-EXEC-Change",
            title: {
              de: "Change Request Handling",
              en: "Change Request Handling",
              es: "Manejo de Solicitudes de Cambio",
            },
            description: {
              de: "Bearbeitung eingehender Change Requests",
              en: "Process incoming change requests",
              es: "Procesar solicitudes de cambio",
            },
          },
          {
            id: "S14-EXEC-Backlog",
            title: {
              de: "Backlog Refinement (Agil)",
              en: "Backlog Refinement (Agile)",
              es: "Refinamiento de Backlog",
            },
            description: {
              de: "Kontinuierliche Priorisierung des Change-Backlogs",
              en: "Continuous prioritization of change backlog",
              es: "Priorización continua del backlog",
            },
          },
        ],
      },
      // ===== MONITORING =====
      {
        phase: "Monitoring",
        steps: [
          {
            id: "S14-MONITOR-Latency",
            title: {
              de: "Decision Latency Tracking",
              en: "Decision Latency Tracking",
              es: "Seguimiento de Latencia",
            },
            description: {
              de: "Messung der Durchlaufzeit von Change Requests",
              en: "Measure throughput time of change requests",
              es: "Medir tiempo de procesamiento",
            },
          },
          {
            id: "S14-MONITOR-Rate",
            title: {
              de: "Approval Rate & Effectiveness",
              en: "Approval Rate & Effectiveness",
              es: "Tasa de Aprobación",
            },
            description: {
              de: "Analyse der Genehmigungsrate und Board-Effektivität",
              en: "Analyze approval rate and board effectiveness",
              es: "Analizar tasa de aprobación",
            },
          },
        ],
      },
      // ===== CLOSING =====
      {
        phase: "Closing",
        steps: [
          {
            id: "S14-CLOSE-Review",
            title: {
              de: "Governance Effectiveness Review",
              en: "Governance Effectiveness Review",
              es: "Revisión de Efectividad",
            },
            description: {
              de: "Bewertung der Change-Governance-Wirksamkeit",
              en: "Assess change governance effectiveness",
              es: "Evaluar efectividad de gobernanza",
            },
          },
          {
            id: "S14-CLOSE-Lessons",
            title: {
              de: "Process Improvement Lessons",
              en: "Process Improvement Lessons",
              es: "Lecciones de Mejora",
            },
            description: {
              de: "Dokumentation von Verbesserungspotentialen",
              en: "Document improvement opportunities",
              es: "Documentar oportunidades de mejora",
            },
          },
        ],
      },
    ],
  },

  // ============================================================================
  // SERVICE S-17: ISSUE & RISK MANAGEMENT (Tactical)
  // ============================================================================
  {
    id: "S-17",
    name: {
      de: "Hindernis-Beseitigung",
      en: "Obstacle Removal",
      es: "Eliminación de Obstáculos",
    },
    description: {
      de: "Unterstützung bei der Lösung von Blockern und Eskalationen.",
      en: "Support in solving blockers and escalations.",
      es: "Apoyo en resolver bloqueos y escaladas.",
    },
    deliverables: [
      {
        de: "Eskalationspfade klar definiert",
        en: "Escalation Paths Clearly Defined",
        es: "Rutas de escalada definidas",
      },
      {
        de: "Issue-Resolution-SLA dokumentiert",
        en: "Issue Resolution SLA Documented",
        es: "SLA de resolución documentado",
      },
    ],
    kpis: [
      {
        de: "Durchschnittliche Lösungszeit (MTTR)",
        en: "Mean Time to Resolution (MTTR)",
        es: "Tiempo medio de resolución",
      },
      {
        de: "Psychologische Sicherheit (Team-Feedback)",
        en: "Psychological Safety (Team Feedback)",
        es: "Seguridad psicológica",
      },
    ],
    businessName: {
      de: "Issue & Risk Management (PMBOK Risk Domain)",
      en: "Issue & Risk Management",
      es: "Gestión de Problemas y Riesgos",
    },
    hardKpis: [
      {
        de: "MTTR < 24 Stunden für kritische Issues",
        en: "MTTR < 24 Hours for Critical Issues",
        es: "MTTR < 24 horas para críticos",
      },
      {
        de: "Risk Exposure Value < 10% Budget",
        en: "Risk Exposure Value < 10% Budget",
        es: "Valor de riesgo < 10% presupuesto",
      },
    ],
    roiImpact: {
      de: "Schnelle Problemlösung verhindert Projektverzögerungen und spart Kosten.",
      en: "Quick problem resolution prevents project delays and saves costs.",
      es: "Resolución rápida previene retrasos.",
    },
    category: "Tactical",
    maturityLevels: [],

    implementationPlan: [
      // ===== INITIATING =====
      {
        phase: "Initiating",
        steps: [
          {
            id: "S17-INIT-Paths",
            title: {
              de: "Eskalationspfade definieren",
              en: "Define Escalation Paths",
              es: "Definir Rutas de Escalada",
            },
            description: {
              de: "Festlegung klarer Eskalationswege für verschiedene Issue-Typen",
              en: "Define clear escalation paths for different issue types",
              es: "Definir rutas claras de escalada",
            },
          },
          {
            id: "S17-INIT-Risk",
            title: {
              de: "Initiale Risikoidentifikation",
              en: "Initial Risk Identification",
              es: "Identificación Inicial de Riesgos",
            },
            description: {
              de: "Erste Identifikation der Top-Projektrisiken",
              en: "Initial identification of top project risks",
              es: "Identificación inicial de riesgos principales",
            },
          },
        ],
      },
      // ===== PLANNING =====
      {
        phase: "Planning",
        steps: [
          {
            id: "S17-PLAN-Register",
            title: {
              de: "Risk Register aufsetzen",
              en: "Set Up Risk Register",
              es: "Configurar Registro de Riesgos",
            },
            description: {
              de: "Erstellung des Risk-Registers mit Bewertungsmatrix",
              en: "Create risk register with assessment matrix",
              es: "Crear registro de riesgos",
            },
          },
          {
            id: "S17-PLAN-Response",
            title: {
              de: "Risk Response Planning",
              en: "Risk Response Planning",
              es: "Planificación de Respuesta",
            },
            description: {
              de: "Definition von Risiko-Reaktionsstrategien",
              en: "Define risk response strategies",
              es: "Definir estrategias de respuesta",
            },
          },
        ],
      },
      // ===== EXECUTING =====
      {
        phase: "Executing",
        steps: [
          {
            id: "S17-EXEC-Issues",
            title: {
              de: "Issue Tracking & Resolution",
              en: "Issue Tracking & Resolution",
              es: "Seguimiento de Problemas",
            },
            description: {
              de: "Aktive Bearbeitung und Lösung von Issues",
              en: "Active processing and resolution of issues",
              es: "Procesamiento activo de problemas",
            },
          },
          {
            id: "S17-EXEC-Impediments",
            title: {
              de: "Impediment Removal (Agil)",
              en: "Impediment Removal (Agile)",
              es: "Eliminación de Impedimentos",
            },
            description: {
              de: "Beseitigung von Blockern im Sprint",
              en: "Remove blockers during sprint",
              es: "Eliminar bloqueos en sprint",
            },
          },
        ],
      },
      // ===== MONITORING =====
      {
        phase: "Monitoring",
        steps: [
          {
            id: "S17-MONITOR-Risk",
            title: {
              de: "Risk Exposure Monitoring",
              en: "Risk Exposure Monitoring",
              es: "Monitoreo de Exposición al Riesgo",
            },
            description: {
              de: "Überwachung des Risk Exposure Value (REV)",
              en: "Monitor risk exposure value (REV)",
              es: "Monitorear valor de exposición",
            },
          },
          {
            id: "S17-MONITOR-Safety",
            title: {
              de: "Psychologische Sicherheit messen",
              en: "Measure Psychological Safety",
              es: "Medir Seguridad Psicológica",
            },
            description: {
              de: "Team-Feedback zur Melde-Kultur sammeln",
              en: "Collect team feedback on reporting culture",
              es: "Recopilar feedback del equipo",
            },
          },
        ],
      },
      // ===== CLOSING =====
      {
        phase: "Closing",
        steps: [
          {
            id: "S17-CLOSE-Lessons",
            title: {
              de: "Risk Lessons Learned",
              en: "Risk Lessons Learned",
              es: "Lecciones de Riesgos",
            },
            description: {
              de: "Dokumentation welche Risiken eintraten und wie sie gelöst wurden",
              en: "Document which risks occurred and how they were resolved",
              es: "Documentar riesgos ocurridos",
            },
          },
          {
            id: "S17-CLOSE-Archive",
            title: {
              de: "Issue Archive & Knowledge Base",
              en: "Issue Archive & Knowledge Base",
              es: "Archivo de Problemas",
            },
            description: {
              de: "Archivierung von Issues für zukünftige Projekte",
              en: "Archive issues for future projects",
              es: "Archivar problemas para futuros proyectos",
            },
          },
        ],
      },
    ],
  },
];

// ============================================================================
// OUTCOMES (bestehend, unverändert)
// ============================================================================
export const outcomes: PMOOutcome[] = [
  {
    id: "O-01",
    name: {
      de: "Fachkräfte finden & halten",
      en: "Retain Talent",
      es: "Retener Talento",
    },
    description: {
      de: "Schwierigkeit, Personal nachhaltig und gesund einzuplanen.",
      en: "Difficulty planning staff sustainably.",
      es: "Dificultad para planificar personal.",
    },
    category: {
      de: "Kapazität & Mensch",
      en: "Capacity & People",
      es: "Capacidad y Personas",
    },
    recommendedServiceIds: ["S-10"],
  },
  {
    id: "O-18",
    name: {
      de: "Planungssicherheit gewinnen",
      en: "Gain Certainty",
      es: "Ganar Certeza",
    },
    description: {
      de: "Wunsch nach mehr Verlässlichkeit bei Kosten und Terminen.",
      en: "Desire for more reliability.",
      es: "Deseo de más fiabilidad.",
    },
    category: {
      de: "Prozesse & Struktur",
      en: "Process & Structure",
      es: "Procesos y Estructura",
    },
    recommendedServiceIds: ["S-14", "S-17"],
  },
  {
    id: "O-06",
    name: {
      de: "Sinnvolle Projekte priorisieren",
      en: "Prioritize Projects",
      es: "Priorizar Proyectos",
    },
    description: {
      de: "Sicherstellen, dass wir an den wirklich wichtigen Dingen arbeiten.",
      en: "Ensuring we work on what matters.",
      es: "Asegurar que trabajamos en lo importante.",
    },
    category: {
      de: "Strategie & Fokus",
      en: "Strategy & Focus",
      es: "Estrategia y Enfoque",
    },
    recommendedServiceIds: ["S-01"],
  },
];

