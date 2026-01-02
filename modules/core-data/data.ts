// modules/core-data/data.ts
import { PMOService, PMOOutcome } from "./types";

export const services: PMOService[] = [
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

    // NEU: Der Prozess-Plan
    implementationPlan: [
      {
        phase: "Initiating",
        steps: [
          {
            id: "S01-I-1",
            title: {
              de: "Stakeholder-Analyse C-Level",
              en: "Stakeholder Analysis C-Level",
              es: "Análisis de Interesados",
            },
            description: {
              de: "Identifikation der strategischen Entscheider und ihrer Ziele.",
              en: "Identify strategic decision makers.",
              es: "Identificar a los tomadores de decisiones.",
            },
          },
        ],
      },
      {
        phase: "Planning",
        steps: [
          {
            id: "S01-P-1",
            title: {
              de: "Strategie-Workshop",
              en: "Strategy Workshop",
              es: "Taller de Estrategia",
            },
            description: {
              de: "Definition der Top-3 Unternehmensziele für das laufende Jahr.",
              en: "Define top 3 corporate goals.",
              es: "Definir los 3 objetivos principales.",
            },
          },
          {
            id: "S01-P-2",
            title: {
              de: "Bewertungskriterien festlegen",
              en: "Define Scoring Criteria",
              es: "Definir Criterios",
            },
            description: {
              de: "Entwicklung eines Scoring-Modells zur Projektbewertung.",
              en: "Develop scoring model.",
              es: "Desarrollar modelo de puntuación.",
            },
          },
        ],
      },
      {
        phase: "Executing",
        steps: [
          {
            id: "S01-E-1",
            title: {
              de: "Portfolio-Inventur",
              en: "Portfolio Inventory",
              es: "Inventario de Cartera",
            },
            description: {
              de: "Erfassung aller laufenden Projekte und Mapping auf Ziele.",
              en: "Map current projects to goals.",
              es: "Mapear proyectos actuales a objetivos.",
            },
          },
        ],
      },
      {
        phase: "Monitoring",
        steps: [
          {
            id: "S01-M-1",
            title: {
              de: "Quarterly Business Review (QBR)",
              en: "QBR",
              es: "Revisión Trimestral",
            },
            description: {
              de: "Überprüfung der Strategie-Konformität.",
              en: "Review strategic fit.",
              es: "Revisar ajuste estratégico.",
            },
          },
        ],
      },
      {
        phase: "Closing",
        steps: [
          {
            id: "S01-C-1",
            title: {
              de: "Jahresabschluss-Bericht",
              en: "Annual Report",
              es: "Informe Anual",
            },
            description: {
              de: "Analyse des strategischen Wertbeitrags.",
              en: "Analyze strategic value contribution.",
              es: "Analizar contribución de valor.",
            },
          },
        ],
      },
    ],
  },

  {
    id: "S-10",
    name: {
      de: "Team-Balance & Planung",
      en: "Team Balance & Planning",
      es: "Equilibrio de Equipo",
    },
    description: {
      de: "Schutz vor Überlastung durch vorausschauende Einteilung.",
      en: "Protection against overload through forward planning.",
      es: "Protección contra sobrecarga mediante planificación.",
    },
    deliverables: [
      {
        de: "Bedarfs-Vorschau",
        en: "Demand Forecast",
        es: "Previsión de demanda",
      },
      {
        de: "Machbarkeits-Check",
        en: "Feasibility Check",
        es: "Verificación de viabilidad",
      },
    ],
    kpis: [
      {
        de: "Gesunde Team-Belastung",
        en: "Healthy Team Load",
        es: "Carga de equipo saludable",
      },
      {
        de: "Planungs-Ruhe",
        en: "Planning Calmness",
        es: "Calma en la planificación",
      },
    ],
    businessName: {
      de: "Resource Optimization & Capacity Mgmt (OPM)",
      en: "Resource Optimization",
      es: "Optimización de Recursos",
    },
    hardKpis: [
      {
        de: "FTE-Effizienz-Steigerung",
        en: "FTE Efficiency Increase",
        es: "Aumento de eficiencia FTE",
      },
      {
        de: "Reduzierung externer Kosten",
        en: "External Cost Reduction",
        es: "Reducción de costos externos",
      },
    ],
    roiImpact: {
      de: "Maximierung der Ressourcen-Nutzung durch OPM-Kapazitätsplanung.",
      en: "Maximizing resource utilization via OPM capacity planning.",
      es: "Maximización de utilización de recursos.",
    },
    category: "Tactical",
    maturityLevels: [],

    // NEU: Der Prozess-Plan
    implementationPlan: [
      {
        phase: "Initiating",
        steps: [
          {
            id: "S10-I-1",
            title: {
              de: "Rollen & Skills definieren",
              en: "Define Roles & Skills",
              es: "Definir Roles y Habilidades",
            },
            description: {
              de: "Standardisierung der Job-Profile (z.B. Senior Dev, PM).",
              en: "Standardize job profiles.",
              es: "Estandarizar perfiles.",
            },
          },
        ],
      },
      {
        phase: "Planning",
        steps: [
          {
            id: "S10-P-1",
            title: {
              de: "Kapazitäts-Baseline",
              en: "Capacity Baseline",
              es: "Línea Base de Capacidad",
            },
            description: {
              de: "Erfassung der Netto-Verfügbarkeit (abzüglich Run/Urlaub).",
              en: "Calculate net availability.",
              es: "Calcular disponibilidad neta.",
            },
          },
        ],
      },
      {
        phase: "Executing",
        steps: [
          {
            id: "S10-E-1",
            title: {
              de: "Bedarfs-Abfrage",
              en: "Demand Collection",
              es: "Recolección de Demanda",
            },
            description: {
              de: "Projekte melden Ressourcenbedarf an.",
              en: "Projects submit resource requests.",
              es: "Proyectos solicitan recursos.",
            },
          },
          {
            id: "S10-E-2",
            title: {
              de: "Allokations-Meeting",
              en: "Allocation Meeting",
              es: "Reunión de Asignación",
            },
            description: {
              de: "Verteilung der Ressourcen auf Prioritäten.",
              en: "Assign resources to priorities.",
              es: "Asignar recursos a prioridades.",
            },
          },
        ],
      },
      {
        phase: "Monitoring",
        steps: [
          {
            id: "S10-M-1",
            title: {
              de: "Auslastungs-Check",
              en: "Utilization Check",
              es: "Control de Utilización",
            },
            description: {
              de: "Prüfung auf Über-/Unterlastung (Heatmap).",
              en: "Check for over/underutilization.",
              es: "Verificar sobre/subutilización.",
            },
          },
        ],
      },
      {
        phase: "Closing",
        steps: [
          {
            id: "S10-C-1",
            title: {
              de: "Planungs-Review",
              en: "Planning Review",
              es: "Revisión de Planificación",
            },
            description: {
              de: "Vergleich Plan vs. Ist-Stunden.",
              en: "Compare planned vs. actual hours.",
              es: "Comparar horas planificadas vs. reales.",
            },
          },
        ],
      },
    ],
  },

  {
    id: "S-14",
    name: {
      de: "Änderungsbegleitung",
      en: "Change Facilitation",
      es: "Facilitación de Cambios",
    },
    description: {
      de: "Gemeinsamer Umgang mit neuen Anforderungen ohne Chaos.",
      en: "Handling new requirements together without chaos.",
      es: "Manejo conjunto de nuevos requisitos.",
    },
    deliverables: [
      {
        de: "Änderungs-Übersicht",
        en: "Change Overview",
        es: "Resumen de cambios",
      },
      {
        de: "Auswirkungs-Check",
        en: "Impact Check",
        es: "Verificación de impacto",
      },
    ],
    kpis: [
      {
        de: "Stabilität im Arbeitsalltag",
        en: "Workday Stability",
        es: "Estabilidad laboral",
      },
      {
        de: "Verlässlichkeit von Zusagen",
        en: "Reliability",
        es: "Fiabilidad",
      },
    ],
    businessName: {
      de: "Scope Control & Variance Mgmt (OPM)",
      en: "Scope Control",
      es: "Control de Alcance",
    },
    hardKpis: [
      {
        de: "Minimierung Scope Creep",
        en: "Minimize Scope Creep",
        es: "Minimizar desviación",
      },
      {
        de: "Budget-Treue",
        en: "Budget Adherence",
        es: "Adherencia presupuestaria",
      },
    ],
    roiImpact: {
      de: "Kostenschutz durch formalisierte Governance.",
      en: "Cost protection through formalized governance.",
      es: "Protección de costos mediante gobernanza.",
    },
    category: "Operational",
    maturityLevels: [],

    // NEU: Der Prozess-Plan
    implementationPlan: [
      {
        phase: "Initiating",
        steps: [
          {
            id: "S14-I-1",
            title: {
              de: "Change Board etablieren",
              en: "Establish Change Board",
              es: "Establecer Comité de Cambios",
            },
            description: {
              de: "Benennung der Entscheider für Änderungen.",
              en: "Nominate decision makers.",
              es: "Nombrar tomadores de decisiones.",
            },
          },
        ],
      },
      {
        phase: "Planning",
        steps: [
          {
            id: "S14-P-1",
            title: {
              de: "CR-Prozess definieren",
              en: "Define CR Process",
              es: "Definir Proceso CR",
            },
            description: {
              de: "Festlegung: Wer darf wann was beantragen?",
              en: "Define request rules.",
              es: "Definir reglas de solicitud.",
            },
          },
        ],
      },
      {
        phase: "Executing",
        steps: [
          {
            id: "S14-E-1",
            title: {
              de: "Impact Analyse",
              en: "Impact Analysis",
              es: "Análisis de Impacto",
            },
            description: {
              de: "Bewertung von Kosten/Zeit/Qualität pro Change.",
              en: "Evaluate cost/time/quality.",
              es: "Evaluar costo/tiempo/calidad.",
            },
          },
        ],
      },
      {
        phase: "Monitoring",
        steps: [
          {
            id: "S14-M-1",
            title: {
              de: "Change Log Monitoring",
              en: "Monitor Change Log",
              es: "Monitorear Registro de Cambios",
            },
            description: {
              de: "Überwachung der genehmigten Changes.",
              en: "Track approved changes.",
              es: "Rastrear cambios aprobados.",
            },
          },
        ],
      },
      {
        phase: "Closing",
        steps: [
          {
            id: "S14-C-1",
            title: {
              de: "Learning Review",
              en: "Learning Review",
              es: "Revisión de Aprendizaje",
            },
            description: {
              de: "Warum traten die Änderungen auf?",
              en: "Why did changes occur?",
              es: "¿Por qué ocurrieron los cambios?",
            },
          },
        ],
      },
    ],
  },

  {
    id: "S-17",
    name: {
      de: "Hindernis-Beseitigung",
      en: "Obstacle Removal",
      es: "Eliminación de Obstáculos",
    },
    description: {
      de: "Aktive Unterstützung, um den Teams den Rücken frei zu halten.",
      en: "Active support to keep teams' backs free.",
      es: "Apoyo activo para los equipos.",
    },
    deliverables: [
      {
        de: "Lösungs-Register",
        en: "Solution Register",
        es: "Registro de soluciones",
      },
      {
        de: "Unterstützungs-Wege",
        en: "Support Paths",
        es: "Rutas de soporte",
      },
    ],
    kpis: [
      {
        de: "Ungestörter Arbeitsfluss",
        en: "Uninterrupted Flow",
        es: "Flujo ininterrumpido",
      },
      {
        de: "Schnelle Hilfe bei Problemen",
        en: "Fast Help",
        es: "Ayuda rápida",
      },
    ],
    businessName: {
      de: "Issue Resolution & Risk Mitigation (OPM)",
      en: "Issue Resolution",
      es: "Resolución de Problemas",
    },
    hardKpis: [
      {
        de: "Reduzierung Downtime",
        en: "Downtime Reduction",
        es: "Reducción de inactividad",
      },
      {
        de: "Erhöhung Delivery Velocity",
        en: "Increase Delivery Velocity",
        es: "Aumento de velocidad",
      },
    ],
    roiImpact: {
      de: "Sicherung der Time-to-Market durch OPM Risk Management.",
      en: "Securing Time-to-Market via OPM Risk Management.",
      es: "Asegurar Time-to-Market.",
    },
    category: "Operational",
    maturityLevels: [],

    // NEU: Der Prozess-Plan
    implementationPlan: [
      {
        phase: "Initiating",
        steps: [
          {
            id: "S17-I-1",
            title: {
              de: "Eskalationswege klären",
              en: "Define Escalation Paths",
              es: "Definir Rutas de Escalada",
            },
            description: {
              de: "Wer hilft bei welchem Blockertyp?",
              en: "Who helps with what blocker?",
              es: "¿Quién ayuda con qué bloqueo?",
            },
          },
        ],
      },
      {
        phase: "Planning",
        steps: [
          {
            id: "S17-P-1",
            title: {
              de: "Risiko-Register anlegen",
              en: "Setup Risk Register",
              es: "Configurar Registro de Riesgos",
            },
            description: {
              de: "Zentraler Ort für Issues und Risiken.",
              en: "Central place for issues.",
              es: "Lugar central para problemas.",
            },
          },
        ],
      },
      {
        phase: "Executing",
        steps: [
          {
            id: "S17-E-1",
            title: {
              de: "Daily Blocker Check",
              en: "Daily Blocker Check",
              es: "Control Diario de Bloqueos",
            },
            description: {
              de: "Kurze Abfrage in Teams (Stand-up).",
              en: "Short check in teams.",
              es: "Breve revisión en equipos.",
            },
          },
          {
            id: "S17-E-2",
            title: {
              de: "Lösungs-Taskforce",
              en: "Solution Taskforce",
              es: "Grupo de Trabajo de Solución",
            },
            description: {
              de: "Gezieltes Beseitigen kritischer Blocker.",
              en: "Targeted removal of blockers.",
              es: "Eliminación dirigida de bloqueos.",
            },
          },
        ],
      },
      {
        phase: "Monitoring",
        steps: [
          {
            id: "S17-M-1",
            title: {
              de: "Trend-Analyse",
              en: "Trend Analysis",
              es: "Análisis de Tendencias",
            },
            description: {
              de: "Wiederholen sich bestimmte Probleme?",
              en: "Do problems recur?",
              es: "¿Se repiten los problemas?",
            },
          },
        ],
      },
      {
        phase: "Closing",
        steps: [
          {
            id: "S17-C-1",
            title: {
              de: "Ursachen-Analyse (Root Cause)",
              en: "Root Cause Analysis",
              es: "Análisis de Causa Raíz",
            },
            description: {
              de: "Nachhaltiges Abstellen der Ursache.",
              en: "Sustainable fix of root cause.",
              es: "Solución sostenible de causa raíz.",
            },
          },
        ],
      },
    ],
  },
];

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
