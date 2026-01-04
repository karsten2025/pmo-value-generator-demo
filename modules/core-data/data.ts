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
      de: { 
        simple: "Die richtigen Projekte auswählen", 
        pro: "Portfolio-Strategie & Alignment (OPM)" 
      },
      en: { 
        simple: "Choose the right projects", 
        pro: "Portfolio Strategy & Alignment (OPM)" 
      },
      es: { 
        simple: "Elegir los proyectos correctos", 
        pro: "Estrategia y Alineación de Cartera (OPM)" 
      },
    },
    description: {
      de: { 
        simple: "Sicherstellen, dass alle Energie in die wirklich wichtigen Themen fließt.", 
        pro: "Strategische Ausrichtung aller Projekte gemäß OPM Framework für Portfolio Value Optimization." 
      },
      en: { 
        simple: "Ensure all energy flows into truly important topics.", 
        pro: "Strategic alignment of all projects per OPM Framework for Portfolio Value Optimization." 
      },
      es: { 
        simple: "Asegurar que toda la energía fluya hacia temas realmente importantes.", 
        pro: "Alineación estratégica de todos los proyectos según OPM Framework para Portfolio Value Optimization." 
      },
    },
    deliverables: [
      {
        de: { 
          simple: "Entscheidungshilfe für Projektauswahl", 
          pro: "Portfolio Decision Framework & Governance Model" 
        },
        en: { 
          simple: "Decision guide for project selection", 
          pro: "Portfolio Decision Framework & Governance Model" 
        },
        es: { 
          simple: "Guía de decisión para selección de proyectos", 
          pro: "Portfolio Decision Framework & Governance Model" 
        },
      },
      {
        de: { 
          simple: "Übersichtskarte aller wichtigen Ziele", 
          pro: "Strategic Goal Map & OKR/KPI Dashboard" 
        },
        en: { 
          simple: "Overview map of all important goals", 
          pro: "Strategic Goal Map & OKR/KPI Dashboard" 
        },
        es: { 
          simple: "Mapa de descripción general de todos los objetivos importantes", 
          pro: "Strategic Goal Map & OKR/KPI Dashboard" 
        },
      },
    ],
    kpis: [
      {
        de: { 
          simple: "Macht das Projekt Sinn? (Team-Feedback)", 
          pro: "Strategic Alignment Score (OPM)" 
        },
        en: { 
          simple: "Does the project make sense? (Team Feedback)", 
          pro: "Strategic Alignment Score (OPM)" 
        },
        es: { 
          simple: "¿Tiene sentido el proyecto? (Feedback del equipo)", 
          pro: "Strategic Alignment Score (OPM)" 
        },
      },
      {
        de: { 
          simple: "Passt das Projekt zur Strategie?", 
          pro: "Portfolio Strategic Fit Index" 
        },
        en: { 
          simple: "Does the project fit the strategy?", 
          pro: "Portfolio Strategic Fit Index" 
        },
        es: { 
          simple: "¿El proyecto encaja con la estrategia?", 
          pro: "Portfolio Strategic Fit Index" 
        },
      },
    ],
    businessName: {
      de: { 
        simple: "Projekt-Prioritäten setzen", 
        pro: "Portfolio Value & Strategic Alignment (OPM)" 
      },
      en: { 
        simple: "Set project priorities", 
        pro: "Portfolio Value & Strategic Alignment (OPM)" 
      },
      es: { 
        simple: "Establecer prioridades de proyecto", 
        pro: "Portfolio Value & Strategic Alignment (OPM)" 
      },
    },
    hardKpis: [
      {
        de: { 
          simple: "Return on Investment verbessern", 
          pro: "Portfolio ROI Optimization > 15%" 
        },
        en: { 
          simple: "Improve return on investment", 
          pro: "Portfolio ROI Optimization > 15%" 
        },
        es: { 
          simple: "Mejorar el retorno de inversión", 
          pro: "Portfolio ROI Optimization > 15%" 
        },
      },
      {
        de: { 
          simple: "90% aller Projekte passen zur Strategie", 
          pro: "Strategic Coverage > 90% (OPM)" 
        },
        en: { 
          simple: "90% of all projects fit the strategy", 
          pro: "Strategic Coverage > 90% (OPM)" 
        },
        es: { 
          simple: "90% de todos los proyectos se ajustan a la estrategia", 
          pro: "Strategic Coverage > 90% (OPM)" 
        },
      },
    ],
    roiImpact: {
      de: { 
        simple: "Wir vermeiden unnötige Arbeit und sparen Zeit & Geld.", 
        pro: "Waste Avoidance durch OPM-konformes Portfolio-Management (PMBOK)." 
      },
      en: { 
        simple: "We avoid unnecessary work and save time & money.", 
        pro: "Waste Avoidance through OPM-compliant Portfolio Management (PMBOK)." 
      },
      es: { 
        simple: "Evitamos trabajo innecesario y ahorramos tiempo y dinero.", 
        pro: "Waste Avoidance mediante Portfolio Management conforme a OPM (PMBOK)." 
      },
    },
    category: "Strategic",
    maturityLevels: [],

    implementationPlan: [
      // ===== INITIATING =====
      {
        phase: "Initiating",
        phaseLabel: {
          de: { simple: "Start", pro: "Initiating (PMBOK)" },
          en: { simple: "Start", pro: "Initiating (PMBOK)" },
          es: { simple: "Inicio", pro: "Initiating (PMBOK)" },
        },
        steps: [
          {
            id: "S01-INIT-Charter",
            title: {
              de: { 
                simple: "Warum machen wir das?", 
                pro: "Business Case & Project Charter (PMBOK)" 
              },
              en: { 
                simple: "Why are we doing this?", 
                pro: "Business Case & Project Charter (PMBOK)" 
              },
              es: { 
                simple: "¿Por qué hacemos esto?", 
                pro: "Business Case & Project Charter (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Klären, was wir erreichen wollen und warum es wichtig ist.", 
                pro: "Erstellung des initialen Business Case und Portfolio Charter gemäß PMBOK Integration Management." 
              },
              en: { 
                simple: "Clarify what we want to achieve and why it's important.", 
                pro: "Create initial business case and portfolio charter per PMBOK Integration Management." 
              },
              es: { 
                simple: "Aclarar qué queremos lograr y por qué es importante.", 
                pro: "Crear caso de negocio inicial y charter de cartera según PMBOK Integration Management." 
              },
            },
          },
          {
            id: "S01-INIT-Stakeholder",
            title: {
              de: { 
                simple: "Wer entscheidet mit?", 
                pro: "C-Level Stakeholder Analysis (PMBOK)" 
              },
              en: { 
                simple: "Who decides?", 
                pro: "C-Level Stakeholder Analysis (PMBOK)" 
              },
              es: { 
                simple: "¿Quién decide?", 
                pro: "C-Level Stakeholder Analysis (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Herausfinden, wer Einfluss hat und was ihnen wichtig ist.", 
                pro: "Identifikation der strategischen Entscheider und ihrer Ziele gemäß PMBOK Stakeholder Management." 
              },
              en: { 
                simple: "Find out who has influence and what's important to them.", 
                pro: "Identify strategic decision makers and their goals per PMBOK Stakeholder Management." 
              },
              es: { 
                simple: "Averiguar quién tiene influencia y qué es importante para ellos.", 
                pro: "Identificar tomadores de decisiones estratégicas y sus objetivos según PMBOK Stakeholder Management." 
              },
            },
          },
        ],
      },
      // ===== PLANNING =====
      {
        phase: "Planning",
        phaseLabel: {
          de: { simple: "Planung", pro: "Planning (PMBOK)" },
          en: { simple: "Planning", pro: "Planning (PMBOK)" },
          es: { simple: "Planificación", pro: "Planning (PMBOK)" },
        },
        steps: [
          {
            id: "S01-PLAN-Scope",
            title: {
              de: { 
                simple: "Was sind unsere Ziele?", 
                pro: "Strategie-Workshop & Zielsetzung (PMBOK)" 
              },
              en: { 
                simple: "What are our goals?", 
                pro: "Strategy Workshop & Goal Setting (PMBOK)" 
              },
              es: { 
                simple: "¿Cuáles son nuestros objetivos?", 
                pro: "Taller de Estrategia (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Die wichtigsten 3 Unternehmensziele für dieses Jahr festlegen.", 
                pro: "Definition der Top-3 Unternehmensziele für das laufende Jahr gemäß PMBOK Scope Management." 
              },
              en: { 
                simple: "Define the top 3 company goals for this year.", 
                pro: "Define top 3 corporate goals for the current year per PMBOK Scope Management." 
              },
              es: { 
                simple: "Definir los 3 principales objetivos de la empresa para este año.", 
                pro: "Definir los 3 objetivos principales según PMBOK Scope Management." 
              },
            },
          },
          {
            id: "S01-PLAN-Criteria",
            title: {
              de: { 
                simple: "Wie bewerten wir Projekte?", 
                pro: "Bewertungskriterien & Scoring (PMBOK)" 
              },
              en: { 
                simple: "How do we evaluate projects?", 
                pro: "Scoring Criteria & Evaluation (PMBOK)" 
              },
              es: { 
                simple: "¿Cómo evaluamos proyectos?", 
                pro: "Criterios de Evaluación (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Ein einfaches System entwickeln, um Projekte zu vergleichen.", 
                pro: "Entwicklung eines Scoring-Modells zur Projektbewertung gemäß PMBOK Quality Management." 
              },
              en: { 
                simple: "Develop a simple system to compare projects.", 
                pro: "Develop scoring model for project evaluation per PMBOK Quality Management." 
              },
              es: { 
                simple: "Desarrollar un sistema simple para comparar proyectos.", 
                pro: "Desarrollar modelo de puntuación según PMBOK Quality Management." 
              },
            },
          },
        ],
      },
      // ===== EXECUTING =====
      {
        phase: "Executing",
        phaseLabel: {
          de: { simple: "Umsetzung", pro: "Executing (PMBOK)" },
          en: { simple: "Execution", pro: "Executing (PMBOK)" },
          es: { simple: "Ejecución", pro: "Executing (PMBOK)" },
        },
        steps: [
          {
            id: "S01-EXEC-Delivery",
            title: {
              de: { 
                simple: "Was läuft gerade?", 
                pro: "Portfolio-Inventur & Mapping (PMBOK)" 
              },
              en: { 
                simple: "What's currently running?", 
                pro: "Portfolio Inventory & Mapping (PMBOK)" 
              },
              es: { 
                simple: "¿Qué está en curso?", 
                pro: "Inventario de Cartera (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Alle laufenden Projekte auflisten und zu Zielen zuordnen.", 
                pro: "Erfassung aller laufenden Projekte und Mapping auf Ziele gemäß PMBOK Integration Management." 
              },
              en: { 
                simple: "List all running projects and map to goals.", 
                pro: "Capture all running projects and map to goals per PMBOK Integration Management." 
              },
              es: { 
                simple: "Listar todos los proyectos en curso y mapear a objetivos.", 
                pro: "Capturar proyectos y mapear a objetivos según PMBOK Integration Management." 
              },
            },
          },
          {
            id: "S01-EXEC-Prioritize",
            title: {
              de: { 
                simple: "Weitermachen oder stoppen?", 
                pro: "Priorisierung & Go/No-Go Decision (PMBOK)" 
              },
              en: { 
                simple: "Continue or stop?", 
                pro: "Prioritization & Go/No-Go Decision (PMBOK)" 
              },
              es: { 
                simple: "¿Continuar o detener?", 
                pro: "Priorización (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Entscheiden: Welche Projekte passen zur Strategie? Welche nicht?", 
                pro: "Bewertung und Priorisierung des Projektportfolios gemäß PMBOK Portfolio Management." 
              },
              en: { 
                simple: "Decide: Which projects fit the strategy? Which don't?", 
                pro: "Evaluate and prioritize project portfolio per PMBOK Portfolio Management." 
              },
              es: { 
                simple: "Decidir: ¿Qué proyectos encajan con la estrategia? ¿Cuáles no?", 
                pro: "Evaluar y priorizar cartera según PMBOK Portfolio Management." 
              },
            },
          },
        ],
      },
      // ===== MONITORING =====
      {
        phase: "Monitoring",
        phaseLabel: {
          de: { simple: "Kontrolle", pro: "Monitoring & Controlling (PMBOK)" },
          en: { simple: "Control", pro: "Monitoring & Controlling (PMBOK)" },
          es: { simple: "Control", pro: "Monitoring & Controlling (PMBOK)" },
        },
        steps: [
          {
            id: "S01-MONITOR-Performance",
            title: {
              de: { 
                simple: "Läuft alles nach Plan?", 
                pro: "Quarterly Business Review - QBR (PMBOK)" 
              },
              en: { 
                simple: "Is everything on track?", 
                pro: "Quarterly Business Review - QBR (PMBOK)" 
              },
              es: { 
                simple: "¿Todo va según lo previsto?", 
                pro: "Revisión Trimestral (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Regelmäßig prüfen: Passen die Projekte noch zur Strategie?", 
                pro: "Überprüfung der Strategie-Konformität und Portfolio-Performance gemäß PMBOK Performance Management." 
              },
              en: { 
                simple: "Check regularly: Do the projects still fit the strategy?", 
                pro: "Review strategic fit and portfolio performance per PMBOK Performance Management." 
              },
              es: { 
                simple: "Verificar regularmente: ¿Los proyectos aún encajan con la estrategia?", 
                pro: "Revisar ajuste estratégico según PMBOK Performance Management." 
              },
            },
          },
          {
            id: "S01-MONITOR-Health",
            title: {
              de: { 
                simple: "Wie gesund ist unser Portfolio?", 
                pro: "Portfolio Health Dashboard (PMBOK)" 
              },
              en: { 
                simple: "How healthy is our portfolio?", 
                pro: "Portfolio Health Dashboard (PMBOK)" 
              },
              es: { 
                simple: "¿Qué tan saludable es nuestro portafolio?", 
                pro: "Dashboard de Salud de Cartera (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Wichtige Kennzahlen im Blick behalten (Zeit, Kosten, Nutzen).", 
                pro: "Monitoring der Portfolio-KPIs (SPI, CPI, ROI) gemäß PMBOK Performance Reporting." 
              },
              en: { 
                simple: "Keep track of important metrics (time, cost, value).", 
                pro: "Monitor portfolio KPIs (SPI, CPI, ROI) per PMBOK Performance Reporting." 
              },
              es: { 
                simple: "Mantener seguimiento de métricas importantes (tiempo, costo, valor).", 
                pro: "Monitorear KPIs de cartera según PMBOK Performance Reporting." 
              },
            },
          },
        ],
      },
      // ===== CLOSING =====
      {
        phase: "Closing",
        phaseLabel: {
          de: { simple: "Abschluss", pro: "Closing (PMBOK)" },
          en: { simple: "Closure", pro: "Closing (PMBOK)" },
          es: { simple: "Cierre", pro: "Closing (PMBOK)" },
        },
        steps: [
          {
            id: "S01-CLOSE-Value",
            title: {
              de: { 
                simple: "Was haben wir erreicht?", 
                pro: "Benefits Realization Review (PMBOK)" 
              },
              en: { 
                simple: "What did we achieve?", 
                pro: "Benefits Realization Review (PMBOK)" 
              },
              es: { 
                simple: "¿Qué logramos?", 
                pro: "Revisión de Beneficios (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Messen: Haben wir das erreicht, was wir wollten?", 
                pro: "Messung der tatsächlich erzielten Werte vs. Plan gemäß PMBOK Benefits Management." 
              },
              en: { 
                simple: "Measure: Did we achieve what we wanted?", 
                pro: "Measure actual value achieved vs. plan per PMBOK Benefits Management." 
              },
              es: { 
                simple: "Medir: ¿Logramos lo que queríamos?", 
                pro: "Medir valor real vs. plan según PMBOK Benefits Management." 
              },
            },
          },
          {
            id: "S01-CLOSE-Lessons",
            title: {
              de: { 
                simple: "Was haben wir gelernt?", 
                pro: "Portfolio Retrospective (PMBOK)" 
              },
              en: { 
                simple: "What did we learn?", 
                pro: "Portfolio Retrospective (PMBOK)" 
              },
              es: { 
                simple: "¿Qué aprendimos?", 
                pro: "Retrospectiva de Cartera (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Sammeln: Was lief gut? Was können wir verbessern?", 
                pro: "Lessons Learned auf Portfolio-Ebene dokumentieren gemäß PMBOK Knowledge Management." 
              },
              en: { 
                simple: "Collect: What went well? What can we improve?", 
                pro: "Document portfolio-level lessons learned per PMBOK Knowledge Management." 
              },
              es: { 
                simple: "Recopilar: ¿Qué salió bien? ¿Qué podemos mejorar?", 
                pro: "Documentar lecciones aprendidas según PMBOK Knowledge Management." 
              },
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
        phaseLabel: {
          de: { simple: "Start", pro: "Initiating (PMBOK)" },
          en: { simple: "Start", pro: "Initiating (PMBOK)" },
          es: { simple: "Inicio", pro: "Initiating (PMBOK)" },
        },
        steps: [
          {
            id: "S10-INIT-Team",
            title: {
              de: { 
                simple: "Wer macht was?", 
                pro: "Team Formation & Rollendefinition (PMBOK)" 
              },
              en: { 
                simple: "Who does what?", 
                pro: "Team Formation & Role Definition (PMBOK)" 
              },
              es: { 
                simple: "¿Quién hace qué?", 
                pro: "Formación de Equipo (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Festlegen, welche Leute wir brauchen und was sie tun sollen.", 
                pro: "Identifikation benötigter Rollen und Skills gemäß PMBOK Resource Management." 
              },
              en: { 
                simple: "Define which people we need and what they should do.", 
                pro: "Identify required roles and skills per PMBOK Resource Management." 
              },
              es: { 
                simple: "Definir qué personas necesitamos y qué deben hacer.", 
                pro: "Identificar roles y habilidades según PMBOK Resource Management." 
              },
            },
          },
          {
            id: "S10-INIT-Skills",
            title: {
              de: { 
                simple: "Was können wir schon?", 
                pro: "Skills Gap Assessment (PMBOK)" 
              },
              en: { 
                simple: "What can we already do?", 
                pro: "Skills Gap Assessment (PMBOK)" 
              },
              es: { 
                simple: "¿Qué podemos hacer ya?", 
                pro: "Evaluación de Brechas (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Prüfen: Was können unsere Leute? Was fehlt noch?", 
                pro: "Analyse vorhandener vs. benötigter Kompetenzen gemäß PMBOK." 
              },
              en: { 
                simple: "Check: What can our people do? What's missing?", 
                pro: "Analyze existing vs. required competencies per PMBOK." 
              },
              es: { 
                simple: "Verificar: ¿Qué puede hacer nuestra gente? ¿Qué falta?", 
                pro: "Analizar competencias existentes vs. necesarias según PMBOK." 
              },
            },
          },
        ],
      },
      // ===== PLANNING =====
      {
        phase: "Planning",
        phaseLabel: {
          de: { simple: "Planung", pro: "Planning (PMBOK)" },
          en: { simple: "Planning", pro: "Planning (PMBOK)" },
          es: { simple: "Planificación", pro: "Planning (PMBOK)" },
        },
        steps: [
          {
            id: "S10-PLAN-Resources",
            title: {
              de: { 
                simple: "Wer ist wann verfügbar?", 
                pro: "Ressourcenplanung & Availability (PMBOK)" 
              },
              en: { 
                simple: "Who is available when?", 
                pro: "Resource Planning & Availability (PMBOK)" 
              },
              es: { 
                simple: "¿Quién está disponible cuándo?", 
                pro: "Planificación de Recursos (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Planen, wer wann an welchem Projekt arbeiten kann.", 
                pro: "Detaillierte Ressourcenplanung über Projektlaufzeit gemäß PMBOK." 
              },
              en: { 
                simple: "Plan who can work on which project when.", 
                pro: "Detailed resource planning over project duration per PMBOK." 
              },
              es: { 
                simple: "Planificar quién puede trabajar en qué proyecto cuándo.", 
                pro: "Planificación detallada de recursos según PMBOK." 
              },
            },
          },
          {
            id: "S10-PLAN-Capacity",
            title: {
              de: { 
                simple: "Schaffen wir das zeitlich?", 
                pro: "Kapazitätsplanung - Sprint Velocity (PMBOK)" 
              },
              en: { 
                simple: "Can we manage timewise?", 
                pro: "Capacity Planning - Sprint Velocity (PMBOK)" 
              },
              es: { 
                simple: "¿Podemos manejarlo en tiempo?", 
                pro: "Planificación de Capacidad (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Prüfen, wie viel Arbeit das Team schafft.", 
                pro: "Schätzung der Team-Velocity und Kapazität gemäß PMBOK." 
              },
              en: { 
                simple: "Check how much work the team can handle.", 
                pro: "Estimate team velocity and capacity per PMBOK." 
              },
              es: { 
                simple: "Verificar cuánto trabajo puede manejar el equipo.", 
                pro: "Estimar velocidad del equipo según PMBOK." 
              },
            },
          },
        ],
      },
      // ===== EXECUTING =====
      {
        phase: "Executing",
        phaseLabel: {
          de: { simple: "Umsetzung", pro: "Executing (PMBOK)" },
          en: { simple: "Execution", pro: "Executing (PMBOK)" },
          es: { simple: "Ejecución", pro: "Executing (PMBOK)" },
        },
        steps: [
          {
            id: "S10-EXEC-Assignment",
            title: {
              de: { 
                simple: "Leute zuteilen", 
                pro: "Resource Assignment & Onboarding (PMBOK)" 
              },
              en: { 
                simple: "Assign people", 
                pro: "Resource Assignment & Onboarding (PMBOK)" 
              },
              es: { 
                simple: "Asignar personas", 
                pro: "Asignación de Recursos (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Mitarbeiter den Projekten zuordnen und einarbeiten.", 
                pro: "Zuweisung von Mitarbeitern zu Projekten und Onboarding gemäß PMBOK." 
              },
              en: { 
                simple: "Assign employees to projects and onboard them.", 
                pro: "Assign employees to projects and onboard per PMBOK." 
              },
              es: { 
                simple: "Asignar empleados a proyectos e incorporarlos.", 
                pro: "Asignar empleados a proyectos según PMBOK." 
              },
            },
          },
          {
            id: "S10-EXEC-Morale",
            title: {
              de: { 
                simple: "Wie glücklich ist das Team?", 
                pro: "Team Morale & Happiness Tracking (PMBOK)" 
              },
              en: { 
                simple: "How happy is the team?", 
                pro: "Team Morale & Happiness Tracking (PMBOK)" 
              },
              es: { 
                simple: "¿Qué tan feliz está el equipo?", 
                pro: "Seguimiento de Moral (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Regelmäßig prüfen: Geht es den Leuten gut?", 
                pro: "Regelmäßige Messung der Team-Zufriedenheit gemäß PMBOK Team Management." 
              },
              en: { 
                simple: "Check regularly: Are people doing well?", 
                pro: "Regular measurement of team satisfaction per PMBOK Team Management." 
              },
              es: { 
                simple: "Verificar regularmente: ¿La gente está bien?", 
                pro: "Medición regular de satisfacción según PMBOK Team Management." 
              },
            },
          },
        ],
      },
      // ===== MONITORING =====
      {
        phase: "Monitoring",
        phaseLabel: {
          de: { simple: "Kontrolle", pro: "Monitoring & Controlling (PMBOK)" },
          en: { simple: "Control", pro: "Monitoring & Controlling (PMBOK)" },
          es: { simple: "Control", pro: "Monitoring & Controlling (PMBOK)" },
        },
        steps: [
          {
            id: "S10-MONITOR-Utilization",
            title: {
              de: { 
                simple: "Sind alle ausgelastet?", 
                pro: "Auslastungs-Monitoring & Balancing (PMBOK)" 
              },
              en: { 
                simple: "Is everyone busy?", 
                pro: "Utilization Monitoring & Balancing (PMBOK)" 
              },
              es: { 
                simple: "¿Todos están ocupados?", 
                pro: "Monitoreo de Utilización (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Überwachen: Haben alle genug zu tun? Ist jemand überlastet?", 
                pro: "Überwachung der Ressourcen-Auslastung (Target: 70-85%) gemäß PMBOK." 
              },
              en: { 
                simple: "Monitor: Does everyone have enough to do? Is anyone overloaded?", 
                pro: "Monitor resource utilization (Target: 70-85%) per PMBOK." 
              },
              es: { 
                simple: "Monitorear: ¿Todos tienen suficiente que hacer? ¿Alguien está sobrecargado?", 
                pro: "Monitorear utilización de recursos (Objetivo: 70-85%) según PMBOK." 
              },
            },
          },
          {
            id: "S10-MONITOR-Conflicts",
            title: {
              de: { 
                simple: "Gibt es Probleme im Team?", 
                pro: "Konflikt-Management - Bus Factor (PMBOK)" 
              },
              en: { 
                simple: "Are there team problems?", 
                pro: "Conflict Management - Bus Factor (PMBOK)" 
              },
              es: { 
                simple: "¿Hay problemas en el equipo?", 
                pro: "Gestión de Conflictos (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Frühzeitig erkennen wenn es zwischen Leuten knirscht.", 
                pro: "Identifikation und Auflösung von Ressourcenkonflikten gemäß PMBOK." 
              },
              en: { 
                simple: "Detect early when there's friction between people.", 
                pro: "Identify and resolve resource conflicts per PMBOK." 
              },
              es: { 
                simple: "Detectar temprano cuando hay fricción entre personas.", 
                pro: "Identificar y resolver conflictos de recursos según PMBOK." 
              },
            },
          },
        ],
      },
      // ===== CLOSING =====
      {
        phase: "Closing",
        phaseLabel: {
          de: { simple: "Abschluss", pro: "Closing (PMBOK)" },
          en: { simple: "Closure", pro: "Closing (PMBOK)" },
          es: { simple: "Cierre", pro: "Closing (PMBOK)" },
        },
        steps: [
          {
            id: "S10-CLOSE-History",
            title: {
              de: { 
                simple: "Was lief gut? Was nicht?", 
                pro: "Velocity History & Performance Benchmarks (PMBOK)" 
              },
              en: { 
                simple: "What went well? What didn't?", 
                pro: "Velocity History & Performance Benchmarks (PMBOK)" 
              },
              es: { 
                simple: "¿Qué salió bien? ¿Qué no?", 
                pro: "Historial de Velocidad (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Lernen: Wie schnell war das Team? Was können wir verbessern?", 
                pro: "Dokumentation der Team-Performance für zukünftige Planung gemäß PMBOK." 
              },
              en: { 
                simple: "Learn: How fast was the team? What can we improve?", 
                pro: "Document team performance for future planning per PMBOK." 
              },
              es: { 
                simple: "Aprender: ¿Qué tan rápido fue el equipo? ¿Qué podemos mejorar?", 
                pro: "Documentar rendimiento del equipo según PMBOK." 
              },
            },
          },
          {
            id: "S10-CLOSE-Transfer",
            title: {
              de: { 
                simple: "Wissen weitergeben", 
                pro: "Knowledge Transfer & Offboarding (PMBOK)" 
              },
              en: { 
                simple: "Share knowledge", 
                pro: "Knowledge Transfer & Offboarding (PMBOK)" 
              },
              es: { 
                simple: "Compartir conocimiento", 
                pro: "Transferencia de Conocimiento (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Sicherstellen, dass wichtiges Wissen nicht verloren geht.", 
                pro: "Sicherstellung des Wissenstransfers bei Team-Wechsel gemäß PMBOK Closing Process." 
              },
              en: { 
                simple: "Ensure important knowledge isn't lost.", 
                pro: "Ensure knowledge transfer during team transitions per PMBOK Closing Process." 
              },
              es: { 
                simple: "Asegurar que el conocimiento importante no se pierda.", 
                pro: "Asegurar transferencia de conocimiento según PMBOK Closing Process." 
              },
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
        phaseLabel: {
          de: { simple: "Start", pro: "Initiating (PMBOK)" },
          en: { simple: "Start", pro: "Initiating (PMBOK)" },
          es: { simple: "Inicio", pro: "Initiating (PMBOK)" },
        },
        steps: [
          {
            id: "S14-INIT-Mandate",
            title: {
              de: { 
                simple: "Wer darf entscheiden?", 
                pro: "Change Board Mandat definieren (PMBOK)" 
              },
              en: { 
                simple: "Who can decide?", 
                pro: "Define Change Board Mandate (PMBOK)" 
              },
              es: { 
                simple: "¿Quién puede decidir?", 
                pro: "Definir Mandato de Junta (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Festlegen, wer bei Änderungen das letzte Wort hat.", 
                pro: "Festlegung der Entscheidungskompetenzen des Change Boards gemäß PMBOK." 
              },
              en: { 
                simple: "Define who has the final say on changes.", 
                pro: "Define decision-making authority of the change board per PMBOK." 
              },
              es: { 
                simple: "Definir quién tiene la última palabra en cambios.", 
                pro: "Definir autoridad de decisión según PMBOK." 
              },
            },
          },
          {
            id: "S14-INIT-Members",
            title: {
              de: { 
                simple: "Wer sitzt am Tisch?", 
                pro: "Board-Mitglieder nominieren (PMBOK)" 
              },
              en: { 
                simple: "Who's at the table?", 
                pro: "Nominate Board Members (PMBOK)" 
              },
              es: { 
                simple: "¿Quién está en la mesa?", 
                pro: "Nominar Miembros (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Auswählen, welche Leute bei Änderungen mitentscheiden sollen.", 
                pro: "Auswahl der Stakeholder für das Change Control Board gemäß PMBOK." 
              },
              en: { 
                simple: "Choose which people should have a say in changes.", 
                pro: "Select stakeholders for the change control board per PMBOK." 
              },
              es: { 
                simple: "Elegir qué personas deben decidir sobre cambios.", 
                pro: "Seleccionar partes interesadas según PMBOK." 
              },
            },
          },
        ],
      },
      // ===== PLANNING =====
      {
        phase: "Planning",
        phaseLabel: {
          de: { simple: "Planung", pro: "Planning (PMBOK)" },
          en: { simple: "Planning", pro: "Planning (PMBOK)" },
          es: { simple: "Planificación", pro: "Planning (PMBOK)" },
        },
        steps: [
          {
            id: "S14-PLAN-Process",
            title: {
              de: { 
                simple: "Wie läuft eine Änderung ab?", 
                pro: "Change Control Process Design (PMBOK)" 
              },
              en: { 
                simple: "How does a change work?", 
                pro: "Change Control Process Design (PMBOK)" 
              },
              es: { 
                simple: "¿Cómo funciona un cambio?", 
                pro: "Diseño de Proceso (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Den Weg festlegen: Wer macht was, wenn jemand etwas ändern will?", 
                pro: "Definition des Change-Request-Workflows gemäß PMBOK." 
              },
              en: { 
                simple: "Define the path: Who does what when someone wants to change something?", 
                pro: "Define change request workflow per PMBOK." 
              },
              es: { 
                simple: "Definir el camino: ¿Quién hace qué cuando alguien quiere cambiar algo?", 
                pro: "Definir flujo de trabajo según PMBOK." 
              },
            },
          },
          {
            id: "S14-PLAN-Threshold",
            title: {
              de: { 
                simple: "Was darf das Team selbst?", 
                pro: "Schwellenwerte & Team-Autonomie (PMBOK)" 
              },
              en: { 
                simple: "What can the team decide itself?", 
                pro: "Thresholds & Team Autonomy (PMBOK)" 
              },
              es: { 
                simple: "¿Qué puede decidir el equipo solo?", 
                pro: "Umbrales y Autonomía (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Regeln: Welche Änderungen kann das Team direkt machen?", 
                pro: "Festlegung, was das Team ohne Board entscheiden darf gemäß PMBOK." 
              },
              en: { 
                simple: "Rules: Which changes can the team make directly?", 
                pro: "Define what the team can decide without board approval per PMBOK." 
              },
              es: { 
                simple: "Reglas: ¿Qué cambios puede hacer el equipo directamente?", 
                pro: "Definir qué puede decidir el equipo según PMBOK." 
              },
            },
          },
        ],
      },
      // ===== EXECUTING =====
      {
        phase: "Executing",
        phaseLabel: {
          de: { simple: "Umsetzung", pro: "Executing (PMBOK)" },
          en: { simple: "Execution", pro: "Executing (PMBOK)" },
          es: { simple: "Ejecución", pro: "Executing (PMBOK)" },
        },
        steps: [
          {
            id: "S14-EXEC-Change",
            title: {
              de: { 
                simple: "Änderungswünsche bearbeiten", 
                pro: "Change Request Handling (PMBOK)" 
              },
              en: { 
                simple: "Process change requests", 
                pro: "Change Request Handling (PMBOK)" 
              },
              es: { 
                simple: "Procesar solicitudes de cambio", 
                pro: "Manejo de Solicitudes (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Wenn jemand eine Änderung will: Prüfen, bewerten, entscheiden.", 
                pro: "Bearbeitung eingehender Change Requests gemäß PMBOK." 
              },
              en: { 
                simple: "When someone wants a change: Check, evaluate, decide.", 
                pro: "Process incoming change requests per PMBOK." 
              },
              es: { 
                simple: "Cuando alguien quiere un cambio: Verificar, evaluar, decidir.", 
                pro: "Procesar solicitudes entrantes según PMBOK." 
              },
            },
          },
          {
            id: "S14-EXEC-Backlog",
            title: {
              de: { 
                simple: "Prioritäten setzen", 
                pro: "Backlog Refinement - Agile (PMBOK)" 
              },
              en: { 
                simple: "Set priorities", 
                pro: "Backlog Refinement - Agile (PMBOK)" 
              },
              es: { 
                simple: "Establecer prioridades", 
                pro: "Refinamiento de Backlog (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Laufend sortieren: Was ist wichtig? Was kann warten?", 
                pro: "Kontinuierliche Priorisierung des Change-Backlogs gemäß Agile/PMBOK." 
              },
              en: { 
                simple: "Continuously sort: What's important? What can wait?", 
                pro: "Continuous prioritization of change backlog per Agile/PMBOK." 
              },
              es: { 
                simple: "Ordenar continuamente: ¿Qué es importante? ¿Qué puede esperar?", 
                pro: "Priorización continua del backlog según Agile/PMBOK." 
              },
            },
          },
        ],
      },
      // ===== MONITORING =====
      {
        phase: "Monitoring",
        phaseLabel: {
          de: { simple: "Kontrolle", pro: "Monitoring & Controlling (PMBOK)" },
          en: { simple: "Control", pro: "Monitoring & Controlling (PMBOK)" },
          es: { simple: "Control", pro: "Monitoring & Controlling (PMBOK)" },
        },
        steps: [
          {
            id: "S14-MONITOR-Latency",
            title: {
              de: { 
                simple: "Wie lange dauern Entscheidungen?", 
                pro: "Decision Latency Tracking (PMBOK)" 
              },
              en: { 
                simple: "How long do decisions take?", 
                pro: "Decision Latency Tracking (PMBOK)" 
              },
              es: { 
                simple: "¿Cuánto tardan las decisiones?", 
                pro: "Seguimiento de Latencia (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Messen: Wie schnell werden Änderungen genehmigt oder abgelehnt?", 
                pro: "Messung der Durchlaufzeit von Change Requests gemäß PMBOK." 
              },
              en: { 
                simple: "Measure: How quickly are changes approved or rejected?", 
                pro: "Measure throughput time of change requests per PMBOK." 
              },
              es: { 
                simple: "Medir: ¿Qué tan rápido se aprueban o rechazan los cambios?", 
                pro: "Medir tiempo de procesamiento según PMBOK." 
              },
            },
          },
          {
            id: "S14-MONITOR-Rate",
            title: {
              de: { 
                simple: "Werden gute Änderungen genehmigt?", 
                pro: "Approval Rate & Board Effectiveness (PMBOK)" 
              },
              en: { 
                simple: "Are good changes being approved?", 
                pro: "Approval Rate & Board Effectiveness (PMBOK)" 
              },
              es: { 
                simple: "¿Se aprueban los buenos cambios?", 
                pro: "Tasa de Aprobación (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Prüfen: Sagt das Board zu oft Nein? Oder zu oft Ja?", 
                pro: "Analyse der Genehmigungsrate und Board-Effektivität gemäß PMBOK." 
              },
              en: { 
                simple: "Check: Does the board say no too often? Or yes too often?", 
                pro: "Analyze approval rate and board effectiveness per PMBOK." 
              },
              es: { 
                simple: "¿La junta dice no con demasiada frecuencia?", 
                pro: "Analizar tasa de aprobación según PMBOK." 
              },
            },
          },
        ],
      },
      // ===== CLOSING =====
      {
        phase: "Closing",
        phaseLabel: {
          de: { simple: "Abschluss", pro: "Closing (PMBOK)" },
          en: { simple: "Closure", pro: "Closing (PMBOK)" },
          es: { simple: "Cierre", pro: "Closing (PMBOK)" },
        },
        steps: [
          {
            id: "S14-CLOSE-Review",
            title: {
              de: { 
                simple: "Hat der Prozess geholfen?", 
                pro: "Governance Effectiveness Review (PMBOK)" 
              },
              en: { 
                simple: "Did the process help?", 
                pro: "Governance Effectiveness Review (PMBOK)" 
              },
              es: { 
                simple: "¿El proceso ayudó?", 
                pro: "Revisión de Efectividad (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Bewerten: Wurden durch das Board bessere Entscheidungen getroffen?", 
                pro: "Bewertung der Change-Governance-Wirksamkeit gemäß PMBOK Closing Process." 
              },
              en: { 
                simple: "Evaluate: Did the board make better decisions?", 
                pro: "Assess change governance effectiveness per PMBOK Closing Process." 
              },
              es: { 
                simple: "Evaluar: ¿La junta tomó mejores decisiones?", 
                pro: "Evaluar efectividad según PMBOK Closing Process." 
              },
            },
          },
          {
            id: "S14-CLOSE-Lessons",
            title: {
              de: { 
                simple: "Was haben wir gelernt?", 
                pro: "Process Improvement Lessons (PMBOK)" 
              },
              en: { 
                simple: "What did we learn?", 
                pro: "Process Improvement Lessons (PMBOK)" 
              },
              es: { 
                simple: "¿Qué aprendimos?", 
                pro: "Lecciones de Mejora (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Dokumentieren: Welche Änderungen liefen gut? Was können wir verbessern?", 
                pro: "Dokumentation von Verbesserungspotentialen gemäß PMBOK." 
              },
              en: { 
                simple: "Document: Which changes went well? What can we improve?", 
                pro: "Document improvement opportunities per PMBOK." 
              },
              es: { 
                simple: "Documentar: ¿Qué cambios fueron bien? ¿Qué podemos mejorar?", 
                pro: "Documentar oportunidades de mejora según PMBOK." 
              },
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
        phaseLabel: {
          de: { simple: "Start", pro: "Initiating (PMBOK)" },
          en: { simple: "Start", pro: "Initiating (PMBOK)" },
          es: { simple: "Inicio", pro: "Initiating (PMBOK)" },
        },
        steps: [
          {
            id: "S17-INIT-Paths",
            title: {
              de: { 
                simple: "Wen fragen bei Problemen?", 
                pro: "Eskalationspfade definieren (PMBOK)" 
              },
              en: { 
                simple: "Who to ask when there's a problem?", 
                pro: "Define Escalation Paths (PMBOK)" 
              },
              es: { 
                simple: "¿A quién preguntar si hay problemas?", 
                pro: "Definir Rutas de Escalada (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Klarmachen: Bei welchem Problem geht man zu wem?", 
                pro: "Festlegung klarer Eskalationswege für verschiedene Issue-Typen gemäß PMBOK." 
              },
              en: { 
                simple: "Make clear: For which problem do you go to whom?", 
                pro: "Define clear escalation paths for different issue types per PMBOK." 
              },
              es: { 
                simple: "Aclarar: ¿Para qué problema acudir a quién?", 
                pro: "Definir rutas claras de escalada según PMBOK." 
              },
            },
          },
          {
            id: "S17-INIT-Risk",
            title: {
              de: { 
                simple: "Was könnte schiefgehen?", 
                pro: "Initiale Risikoidentifikation (PMBOK)" 
              },
              en: { 
                simple: "What could go wrong?", 
                pro: "Initial Risk Identification (PMBOK)" 
              },
              es: { 
                simple: "¿Qué podría salir mal?", 
                pro: "Identificación Inicial (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Sammeln: Welche Risiken sehen wir am Anfang?", 
                pro: "Erste Identifikation der Top-Projektrisiken gemäß PMBOK Risk Management." 
              },
              en: { 
                simple: "Collect: Which risks do we see at the beginning?", 
                pro: "Initial identification of top project risks per PMBOK Risk Management." 
              },
              es: { 
                simple: "Recopilar: ¿Qué riesgos vemos al inicio?", 
                pro: "Identificación inicial de riesgos principales según PMBOK Risk Management." 
              },
            },
          },
        ],
      },
      // ===== PLANNING =====
      {
        phase: "Planning",
        phaseLabel: {
          de: { simple: "Planung", pro: "Planning (PMBOK)" },
          en: { simple: "Planning", pro: "Planning (PMBOK)" },
          es: { simple: "Planificación", pro: "Planning (PMBOK)" },
        },
        steps: [
          {
            id: "S17-PLAN-Register",
            title: {
              de: { 
                simple: "Risiken aufschreiben", 
                pro: "Risk Register aufsetzen (PMBOK)" 
              },
              en: { 
                simple: "Write down risks", 
                pro: "Set Up Risk Register (PMBOK)" 
              },
              es: { 
                simple: "Anotar riesgos", 
                pro: "Configurar Registro (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Eine Liste machen: Alle Risiken sammeln und bewerten.", 
                pro: "Erstellung des Risk-Registers mit Bewertungsmatrix gemäß PMBOK." 
              },
              en: { 
                simple: "Make a list: Collect and assess all risks.", 
                pro: "Create risk register with assessment matrix per PMBOK." 
              },
              es: { 
                simple: "Hacer una lista: Recopilar y evaluar todos los riesgos.", 
                pro: "Crear registro de riesgos con matriz según PMBOK." 
              },
            },
          },
          {
            id: "S17-PLAN-Response",
            title: {
              de: { 
                simple: "Was tun wenn's passiert?", 
                pro: "Risk Response Planning (PMBOK)" 
              },
              en: { 
                simple: "What to do if it happens?", 
                pro: "Risk Response Planning (PMBOK)" 
              },
              es: { 
                simple: "¿Qué hacer si sucede?", 
                pro: "Planificación de Respuesta (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Planen: Wie reagieren wir, wenn ein Risiko eintritt?", 
                pro: "Definition von Risiko-Reaktionsstrategien gemäß PMBOK." 
              },
              en: { 
                simple: "Plan: How do we react if a risk occurs?", 
                pro: "Define risk response strategies per PMBOK." 
              },
              es: { 
                simple: "Planificar: ¿Cómo reaccionamos si ocurre un riesgo?", 
                pro: "Definir estrategias de respuesta según PMBOK." 
              },
            },
          },
        ],
      },
      // ===== EXECUTING =====
      {
        phase: "Executing",
        phaseLabel: {
          de: { simple: "Umsetzung", pro: "Executing (PMBOK)" },
          en: { simple: "Execution", pro: "Executing (PMBOK)" },
          es: { simple: "Ejecución", pro: "Executing (PMBOK)" },
        },
        steps: [
          {
            id: "S17-EXEC-Issues",
            title: {
              de: { 
                simple: "Probleme lösen", 
                pro: "Issue Tracking & Resolution (PMBOK)" 
              },
              en: { 
                simple: "Solve problems", 
                pro: "Issue Tracking & Resolution (PMBOK)" 
              },
              es: { 
                simple: "Resolver problemas", 
                pro: "Seguimiento y Resolución (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Wenn etwas nicht läuft: Schnell kümmern und lösen.", 
                pro: "Aktive Bearbeitung und Lösung von Issues gemäß PMBOK." 
              },
              en: { 
                simple: "When something doesn't work: Quickly address and solve it.", 
                pro: "Active processing and resolution of issues per PMBOK." 
              },
              es: { 
                simple: "Cuando algo no funciona: Atender y resolver rápidamente.", 
                pro: "Procesamiento activo y resolución según PMBOK." 
              },
            },
          },
          {
            id: "S17-EXEC-Impediments",
            title: {
              de: { 
                simple: "Hindernisse wegräumen", 
                pro: "Impediment Removal - Agile (PMBOK)" 
              },
              en: { 
                simple: "Remove obstacles", 
                pro: "Impediment Removal - Agile (PMBOK)" 
              },
              es: { 
                simple: "Quitar obstáculos", 
                pro: "Eliminación de Impedimentos (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Team unterstützen: Blockaden aus dem Weg räumen.", 
                pro: "Beseitigung von Blockern im Sprint gemäß Scrum/PMBOK." 
              },
              en: { 
                simple: "Support the team: Clear away blockages.", 
                pro: "Remove blockers during sprint per Scrum/PMBOK." 
              },
              es: { 
                simple: "Apoyar al equipo: Despejar bloqueos.", 
                pro: "Eliminar bloqueos en sprint según Scrum/PMBOK." 
              },
            },
          },
        ],
      },
      // ===== MONITORING =====
      {
        phase: "Monitoring",
        phaseLabel: {
          de: { simple: "Kontrolle", pro: "Monitoring & Controlling (PMBOK)" },
          en: { simple: "Control", pro: "Monitoring & Controlling (PMBOK)" },
          es: { simple: "Control", pro: "Monitoring & Controlling (PMBOK)" },
        },
        steps: [
          {
            id: "S17-MONITOR-Risk",
            title: {
              de: { 
                simple: "Wie groß sind die Risiken?", 
                pro: "Risk Exposure Monitoring (PMBOK)" 
              },
              en: { 
                simple: "How big are the risks?", 
                pro: "Risk Exposure Monitoring (PMBOK)" 
              },
              es: { 
                simple: "¿Qué tan grandes son los riesgos?", 
                pro: "Monitoreo de Exposición (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Laufend prüfen: Welche Risiken werden größer? Welche kleiner?", 
                pro: "Überwachung des Risk Exposure Value (REV) gemäß PMBOK." 
              },
              en: { 
                simple: "Continuously check: Which risks are growing? Which shrinking?", 
                pro: "Monitor risk exposure value (REV) per PMBOK." 
              },
              es: { 
                simple: "Verificar continuamente: ¿Qué riesgos crecen? ¿Cuáles disminuyen?", 
                pro: "Monitorear valor de exposición según PMBOK." 
              },
            },
          },
          {
            id: "S17-MONITOR-Safety",
            title: {
              de: { 
                simple: "Trauen sich alle Probleme zu melden?", 
                pro: "Psychologische Sicherheit messen (PMBOK)" 
              },
              en: { 
                simple: "Does everyone dare to report problems?", 
                pro: "Measure Psychological Safety (PMBOK)" 
              },
              es: { 
                simple: "¿Todos se atreven a reportar problemas?", 
                pro: "Medir Seguridad Psicológica (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Prüfen: Fühlen sich die Leute sicher, Probleme anzusprechen?", 
                pro: "Team-Feedback zur Melde-Kultur sammeln gemäß PMBOK Team Management." 
              },
              en: { 
                simple: "Check: Do people feel safe to speak up about problems?", 
                pro: "Collect team feedback on reporting culture per PMBOK Team Management." 
              },
              es: { 
                simple: "Verificar: ¿La gente se siente segura de hablar sobre problemas?", 
                pro: "Recopilar feedback del equipo según PMBOK Team Management." 
              },
            },
          },
        ],
      },
      // ===== CLOSING =====
      {
        phase: "Closing",
        phaseLabel: {
          de: { simple: "Abschluss", pro: "Closing (PMBOK)" },
          en: { simple: "Closure", pro: "Closing (PMBOK)" },
          es: { simple: "Cierre", pro: "Closing (PMBOK)" },
        },
        steps: [
          {
            id: "S17-CLOSE-Lessons",
            title: {
              de: { 
                simple: "Was haben wir über Risiken gelernt?", 
                pro: "Risk Lessons Learned (PMBOK)" 
              },
              en: { 
                simple: "What did we learn about risks?", 
                pro: "Risk Lessons Learned (PMBOK)" 
              },
              es: { 
                simple: "¿Qué aprendimos sobre riesgos?", 
                pro: "Lecciones de Riesgos (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Festhalten: Welche Risiken sind eingetreten? Wie haben wir reagiert?", 
                pro: "Dokumentation welche Risiken eintraten und wie sie gelöst wurden gemäß PMBOK Closing." 
              },
              en: { 
                simple: "Record: Which risks occurred? How did we respond?", 
                pro: "Document which risks occurred and how they were resolved per PMBOK Closing." 
              },
              es: { 
                simple: "Registrar: ¿Qué riesgos ocurrieron? ¿Cómo respondimos?", 
                pro: "Documentar riesgos ocurridos y soluciones según PMBOK Closing." 
              },
            },
          },
          {
            id: "S17-CLOSE-Archive",
            title: {
              de: { 
                simple: "Probleme für die Zukunft speichern", 
                pro: "Issue Archive & Knowledge Base (PMBOK)" 
              },
              en: { 
                simple: "Save problems for the future", 
                pro: "Issue Archive & Knowledge Base (PMBOK)" 
              },
              es: { 
                simple: "Guardar problemas para el futuro", 
                pro: "Archivo de Problemas (PMBOK)" 
              },
            },
            description: {
              de: { 
                simple: "Alle Probleme sammeln, damit andere daraus lernen können.", 
                pro: "Archivierung von Issues für zukünftige Projekte gemäß PMBOK Knowledge Management." 
              },
              en: { 
                simple: "Collect all problems so others can learn from them.", 
                pro: "Archive issues for future projects per PMBOK Knowledge Management." 
              },
              es: { 
                simple: "Recopilar todos los problemas para que otros aprendan.", 
                pro: "Archivar problemas para futuros proyectos según PMBOK Knowledge Management." 
              },
            },
          },
        ],
      },
    ],
  },
];

// ============================================================================
// OUTCOMES mit Team/Management-View (MatrixText)
// ============================================================================
export const outcomes: PMOOutcome[] = [
  {
    id: "O-01",
    name: {
      de: { 
        simple: "Gute Leute finden & behalten", 
        pro: "Resource Management & Talent Retention" 
      },
      en: { 
        simple: "Find & keep good people", 
        pro: "Resource Management & Talent Retention" 
      },
      es: { 
        simple: "Encontrar y retener buena gente", 
        pro: "Gestión de Recursos y Retención de Talento" 
      },
    },
    description: {
      de: { 
        simple: "Schwierigkeit, Personal sinnvoll einzuteilen, ohne dass alle am Limit arbeiten.", 
        pro: "Herausforderung in der nachhaltigen und gesunden Ressourcenplanung gemäß PMBOK Resource Management." 
      },
      en: { 
        simple: "Difficulty planning people without everyone being at their limit.", 
        pro: "Challenge in sustainable and healthy resource planning per PMBOK Resource Management." 
      },
      es: { 
        simple: "Dificultad para planificar personas sin que todos estén al límite.", 
        pro: "Desafío en la planificación sostenible y saludable según PMBOK Resource Management." 
      },
    },
    category: {
      de: { 
        simple: "Menschen & Kapazität", 
        pro: "Resource & Capacity Management (PMBOK)" 
      },
      en: { 
        simple: "People & Capacity", 
        pro: "Resource & Capacity Management (PMBOK)" 
      },
      es: { 
        simple: "Personas y Capacidad", 
        pro: "Gestión de Recursos y Capacidad (PMBOK)" 
      },
    },
    recommendedServiceIds: ["S-10"],
  },
  {
    id: "O-18",
    name: {
      de: { 
        simple: "Verlässliche Termine & Kosten", 
        pro: "Schedule & Cost Performance (PMBOK)" 
      },
      en: { 
        simple: "Reliable dates & costs", 
        pro: "Schedule & Cost Performance (PMBOK)" 
      },
      es: { 
        simple: "Fechas y costos confiables", 
        pro: "Rendimiento de Cronograma y Costos (PMBOK)" 
      },
    },
    description: {
      de: { 
        simple: "Wunsch nach mehr Verlässlichkeit: Wann sind wir fertig? Was kostet es wirklich?", 
        pro: "Anforderung an Planungssicherheit bei Zeit und Kosten gemäß PMBOK Schedule/Cost Management." 
      },
      en: { 
        simple: "Desire for more reliability: When are we done? What will it really cost?", 
        pro: "Requirement for planning certainty in time and cost per PMBOK Schedule/Cost Management." 
      },
      es: { 
        simple: "Deseo de más confiabilidad: ¿Cuándo terminamos? ¿Cuánto costará realmente?", 
        pro: "Requisito de certeza de planificación en tiempo y costo según PMBOK Schedule/Cost Management." 
      },
    },
    category: {
      de: { 
        simple: "Planung & Struktur", 
        pro: "Process & Governance (PMBOK)" 
      },
      en: { 
        simple: "Planning & Structure", 
        pro: "Process & Governance (PMBOK)" 
      },
      es: { 
        simple: "Planificación y Estructura", 
        pro: "Proceso y Gobernanza (PMBOK)" 
      },
    },
    recommendedServiceIds: ["S-14", "S-17"],
  },
  {
    id: "O-06",
    name: {
      de: { 
        simple: "Die richtigen Dinge tun", 
        pro: "Strategic Portfolio Alignment (OPM)" 
      },
      en: { 
        simple: "Do the right things", 
        pro: "Strategic Portfolio Alignment (OPM)" 
      },
      es: { 
        simple: "Hacer las cosas correctas", 
        pro: "Alineación Estratégica de Cartera (OPM)" 
      },
    },
    description: {
      de: { 
        simple: "Sicherstellen, dass wir unsere Zeit in die wirklich wichtigen Projekte stecken.", 
        pro: "Sicherstellung strategischer Ausrichtung und Portfolio-Priorisierung gemäß OPM Standard." 
      },
      en: { 
        simple: "Ensure we invest our time in the truly important projects.", 
        pro: "Ensuring strategic alignment and portfolio prioritization per OPM Standard." 
      },
      es: { 
        simple: "Asegurar que invirtamos nuestro tiempo en los proyectos realmente importantes.", 
        pro: "Asegurar alineación estratégica y priorización de cartera según OPM Standard." 
      },
    },
    category: {
      de: { 
        simple: "Strategie & Fokus", 
        pro: "Portfolio Governance & Strategy (OPM)" 
      },
      en: { 
        simple: "Strategy & Focus", 
        pro: "Portfolio Governance & Strategy (OPM)" 
      },
      es: { 
        simple: "Estrategia y Enfoque", 
        pro: "Gobernanza de Cartera y Estrategia (OPM)" 
      },
    },
    recommendedServiceIds: ["S-01"],
  },
];

