// modules/core-data/data.ts
import { PMOService, PMOOutcome } from "./types";

export const services: PMOService[] = [
  {
    id: "S-01",
    // FRONTEND: Weich & Strategisch (Zukunftsfähigkeit)
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
      // Soft: Vital-Werte
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

    // BACKEND: OPM & Business (Hart)
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
      de: "Vermeidung von 'Waste' durch OPM-konformes Portfolio-Management[cite: 148].",
      en: "Avoidance of waste through OPM-compliant portfolio management.",
      es: "Evitación de desperdicios mediante gestión de cartera.",
    },
    category: "Strategic",
    maturityLevels: [],
  },

  {
    id: "S-10",
    // FRONTEND: Fürsorglich (Balance & Schutz)
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
      // Soft
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

    // BACKEND: OPM & Business (Hart)
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
      de: "Maximierung der Ressourcen-Nutzung durch OPM-Kapazitätsplanung[cite: 198].",
      en: "Maximizing resource utilization via OPM capacity planning.",
      es: "Maximización de utilización de recursos.",
    },
    category: "Tactical",
    maturityLevels: [],
  },

  {
    id: "S-14",
    // FRONTEND: Kooperativ (Gemeinsamkeit)
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
      // Soft
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

    // BACKEND: OPM & Business (Hart)
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
      de: "Kostenschutz durch formalisierte Governance[cite: 921].",
      en: "Cost protection through formalized governance.",
      es: "Protección de costos mediante gobernanza.",
    },
    category: "Operational",
    maturityLevels: [],
  },

  {
    id: "S-17",
    // FRONTEND: Unterstützend (Rücken freihalten)
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
      // Soft
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

    // BACKEND: OPM & Business (Hart)
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
      de: "Sicherung der Time-to-Market durch OPM Risk Management[cite: 1404].",
      en: "Securing Time-to-Market via OPM Risk Management.",
      es: "Asegurar Time-to-Market.",
    },
    category: "Operational",
    maturityLevels: [],
  },
];

// Outcomes (Probleme) bleiben nutzerzentriert
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
