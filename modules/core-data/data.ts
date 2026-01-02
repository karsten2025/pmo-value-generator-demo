// modules/core-data/data.ts
import { PMOService, PMOOutcome } from "./types";

export const services: PMOService[] = [
  {
    id: "S-01",
    // FRONTEND: Weich & Strategisch (Zukunftsfähigkeit)
    name: {
      de: "Strategische Beratung & Ausrichtung",
      en: "Executive Strategy Advisory",
      es: "Asesoramiento Estratégico",
    },
    description: {
      de: "Sicherung der Zukunftsfähigkeit durch strategische Klarheit.",
      en: "Ensuring future viability through strategic clarity.",
      es: "Asegurar la viabilidad futura mediante claridad estratégica.",
    },
    deliverables: [
      {
        de: "Entscheidungsvorlagen",
        en: "Decision Memos",
        es: "Memorandos de decisión",
      },
      {
        de: "Strategische Landkarte",
        en: "Strategic Map",
        es: "Mapa estratégico",
      },
    ],
    kpis: [
      // Soft: Vital-Werte
      {
        de: "Strategische Stimmigkeit",
        en: "Strategic Fit",
        es: "Ajuste estratégico",
      },
      {
        de: "Wertbeitrag zur Gesundheit",
        en: "Value Contribution",
        es: "Contribución de valor",
      },
    ],

    // BACKEND: Hart & Monetär (Rationalisierung)
    businessName: {
      de: "Portfolio-Rationalisierung & ROI-Optimierung",
      en: "Portfolio Rationalization & ROI Optimization",
      es: "Racionalización de cartera y optimización del ROI",
    },
    hardKpis: [
      {
        de: "Portfolio ROI > 15%",
        en: "Portfolio ROI > 15%",
        es: "ROI de cartera > 15%",
      },
      {
        de: "Reduzierung 'Sunk Costs' um 20%",
        en: "Sunk Cost Reduction 20%",
        es: "Reducción de costos hundidos 20%",
      },
    ],
    roiImpact: {
      de: "Vermeidung von Fehlinvestitionen im 6-stelligen Bereich.",
      en: "Prevention of bad investments in the 6-figure range.",
      es: "Prevención de malas inversiones en el rango de 6 cifras.",
    },
    category: "Strategic",
    maturityLevels: [],
  },

  {
    id: "S-10",
    // FRONTEND: Fürsorglich (Balance & Schutz)
    name: {
      de: "Kapazitäts-Balance & Planung",
      en: "Capacity Balance Planning",
      es: "Equilibrio de Capacidad",
    },
    description: {
      de: "Schutz vor Überlastung durch vorausschauende Planung.",
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
        de: "Verfügbarkeits-Check",
        en: "Availability Check",
        es: "Verificación de disponibilidad",
      },
    ],
    kpis: [
      // Soft
      { de: "Team-Balance", en: "Team Balance", es: "Equilibrio del equipo" },
      {
        de: "Planungs-Ruhe",
        en: "Planning Stability",
        es: "Estabilidad de planificación",
      },
    ],

    // BACKEND: Effizienz (Auslastung & Kosten)
    businessName: {
      de: "Ressourcen-Effizienz-Steigerung",
      en: "Resource Efficiency Maximization",
      es: "Maximización de la eficiencia de recursos",
    },
    hardKpis: [
      {
        de: "FTE-Auslastungsgrad > 85%",
        en: "FTE Utilization > 85%",
        es: "Utilización FTE > 85%",
      },
      {
        de: "Senkung externer Tagessätze",
        en: "Contractor Rate Reduction",
        es: "Reducción de tarifas de contratistas",
      },
    ],
    roiImpact: {
      de: "Reduzierung externer Kosten um 15-20% durch optimale interne Allokation.",
      en: "External cost reduction of 15-20% via optimal allocation.",
      es: "Reducción de costos externos del 15-20%.",
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
      de: "Gemeinsame Einordnung neuer Anforderungen.",
      en: "Joint assessment of new requirements.",
      es: "Evaluación conjunta de nuevos requisitos.",
    },
    deliverables: [
      { de: "Änderungs-Logbuch", en: "Change Log", es: "Registro de cambios" },
      {
        de: "Auswirkungs-Prognose",
        en: "Impact Forecast",
        es: "Pronóstico de impacto",
      },
    ],
    kpis: [
      // Soft
      {
        de: "Reaktions-Qualität",
        en: "Response Quality",
        es: "Calidad de respuesta",
      },
      { de: "Verlässlichkeit", en: "Reliability", es: "Fiabilidad" },
    ],

    // BACKEND: Controlling (Kostenkontrolle)
    businessName: {
      de: "Scope Creep Prevention & Cost Control",
      en: "Scope Creep Prevention",
      es: "Prevención de desviación de alcance",
    },
    hardKpis: [
      {
        de: "Kostenabweichung < 5%",
        en: "Cost Variance < 5%",
        es: "Variación de costos < 5%",
      },
      {
        de: "Abgelehnte CRs (Cost Avoidance)",
        en: "Rejected CRs Value",
        es: "Valor de CRs rechazados",
      },
    ],
    roiImpact: {
      de: "Verhinderung unbezahlter Mehraufwände (Scope Creep).",
      en: "Prevention of unpaid additional work (Scope Creep).",
      es: "Prevención de trabajo adicional no remunerado.",
    },
    category: "Operational",
    maturityLevels: [],
  },

  {
    id: "S-17",
    // FRONTEND: Unterstützend (Rücken freihalten)
    name: {
      de: "Lösungsunterstützung",
      en: "Solution Support",
      es: "Soporte de Soluciones",
    },
    description: {
      de: "Aktive Beseitigung von Hindernissen für die Teams.",
      en: "Active removal of obstacles for teams.",
      es: "Eliminación activa de obstáculos.",
    },
    deliverables: [
      {
        de: "Hindernis-Register",
        en: "Obstacle Register",
        es: "Registro de obstáculos",
      },
      {
        de: "Unterstützungs-Matrix",
        en: "Support Matrix",
        es: "Matriz de soporte",
      },
    ],
    kpis: [
      // Soft
      {
        de: "Lösungs-Dynamik",
        en: "Solution Momentum",
        es: "Impulso de solución",
      },
      { de: "Projekt-Fluss", en: "Project Flow", es: "Flujo del proyecto" },
    ],

    // BACKEND: Performance (Geschwindigkeit & Downtime)
    businessName: {
      de: "Issue Resolution Speed & Downtime Reduction",
      en: "Issue Resolution Efficiency",
      es: "Eficiencia en resolución de problemas",
    },
    hardKpis: [
      {
        de: "Mean Time to Resolve (MTTR) < 2 Tage",
        en: "MTTR < 2 Days",
        es: "MTTR < 2 días",
      },
      {
        de: "Vermeidung von Projektstopps",
        en: "Downtime Avoidance",
        es: "Evitación de tiempos de inactividad",
      },
    ],
    roiImpact: {
      de: "Beschleunigung Time-to-Market durch Blockaden-Lösung.",
      en: "Faster Time-to-Market via blocker removal.",
      es: "Tiempo de comercialización más rápido.",
    },
    category: "Operational",
    maturityLevels: [],
  },
];

// Outcomes (Probleme) bleiben "Soft" und User-zentriert
export const outcomes: PMOOutcome[] = [
  {
    id: "O-01",
    name: {
      de: "Verfügbarkeit von Fachkräften sichern",
      en: "Securing Skilled Talent",
      es: "Asegurar Talento Cualificado",
    },
    description: {
      de: "Herausforderung, geeignetes Personal rechtzeitig und nachhaltig einzuplanen.",
      en: "Challenges in sourcing and retaining qualified project management staff.",
      es: "Desafíos en la búsqueda y retención de personal cualificado para proyectos.",
    },
    category: {
      de: "Kapazität & Kompetenz",
      en: "Resources & Talent",
      es: "Recursos y Talento",
    },
    recommendedServiceIds: ["S-10"],
  },
  {
    id: "O-18",
    name: {
      de: "Budget- & Planungssicherheit",
      en: "Budget Integrity & Cost Control",
      es: "Integridad Presupuestaria y Control",
    },
    description: {
      de: "Bedarf nach höherer Transparenz und Verlässlichkeit bei der Kostenentwicklung.",
      en: "Recurring issues with project costs exceeding planned limits.",
      es: "Problemas recurrentes con costos de proyectos que exceden los límites.",
    },
    category: {
      de: "Prozesse & Struktur",
      en: "Process & Control",
      es: "Procesos y Control",
    },
    recommendedServiceIds: ["S-14", "S-17"],
  },
  {
    id: "O-06",
    name: {
      de: "Strategischer Beitrag der Projekte",
      en: "Strategic Project Alignment",
      es: "Alineación Estratégica de Proyectos",
    },
    description: {
      de: "Sicherstellung, dass Projekte wirksam auf die Unternehmensziele einzahlen.",
      en: "Current initiatives do not contribute effectively to organizational goals.",
      es: "Las iniciativas actuales no contribuyen eficazmente a los objetivos organizacionales.",
    },
    category: {
      de: "Strategie & Ausrichtung",
      en: "Strategy & Alignment",
      es: "Estrategia y Alineación",
    },
    recommendedServiceIds: ["S-01"],
  },
];
