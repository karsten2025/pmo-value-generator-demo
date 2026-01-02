// modules/core-data/data.ts
import { PMOService, PMOOutcome } from "./types";

// HINWEIS: Die Texte wurden paraphrasiert, um Urheberrechtsverletzungen zu vermeiden.
// Sie basieren auf gängigen PMO-Standards, sind aber keine 1:1 Kopien aus dem Guide.

export const services: PMOService[] = [
  {
    id: "S-01",
    name: {
      de: "Strategische Beratung der Führungsebene",
      en: "Executive Strategy Advisory",
      es: "Asesoramiento Estratégico Ejecutivo",
    },
    category: "Strategic",
    description: {
      de: "Unterstützung des Managements mit datengestützten Analysen zur Portfolio-Optimierung.",
      en: "Supporting senior leadership with data-driven insights for portfolio and project decisions.",
      es: "Apoyo a la alta dirección con análisis basados en datos para decisiones de cartera.",
    },
    maturityLevels: [],
  },
  {
    id: "S-10",
    name: {
      de: "Ressourcen- & Kapazitätsplanung",
      en: "Resource Capacity Planning",
      es: "Planificación de Capacidad y Recursos",
    },
    category: "Tactical",
    description: {
      de: "Optimierung der Mitarbeiterauslastung über alle laufenden Projekte hinweg.",
      en: "Ensuring efficient distribution and utilization of personnel across all initiatives.",
      es: "Asegurar la distribución y utilización eficiente del personal en todas las iniciativas.",
    },
    maturityLevels: [],
  },
  {
    id: "S-14",
    name: {
      de: "Änderungsmanagement (Change Control)",
      en: "Project Change Control",
      es: "Control de Cambios del Proyecto",
    },
    category: "Operational",
    description: {
      de: "Strukturierter Prozess zur Bewertung und Genehmigung von Projektänderungen.",
      en: "Structured handling of scope and requirement changes to prevent scope creep.",
      es: "Manejo estructurado de cambios de alcance y requisitos para evitar desviaciones.",
    },
    maturityLevels: [],
  },
  {
    id: "S-17",
    name: {
      de: "Problem- & Issue-Lösung",
      en: "Issue & Problem Resolution",
      es: "Resolución de Problemas e Incidencias",
    },
    category: "Operational",
    description: {
      de: "Systematische Erfassung und Beseitigung von Hindernissen im Projektverlauf.",
      en: "Systematic tracking and resolving of blockers that threaten project success.",
      es: "Seguimiento sistemático y resolución de bloqueos que amenazan el éxito del proyecto.",
    },
    maturityLevels: [],
  },
];

export const outcomes: PMOOutcome[] = [
  {
    id: "O-01",
    name: {
      de: "Verfügbarkeit von Fachkräften sichern",
      en: "Securing Skilled Talent",
      es: "Asegurar Talento Cualificado",
    },
    description: {
      de: "Herausforderung, geeignetes Personal für Projekte zu finden und zu binden.",
      en: "Challenges in sourcing and retaining qualified project management staff.",
      es: "Desafíos en la búsqueda y retención de personal cualificado para proyectos.",
    },
    category: {
      de: "Ressourcen & Talent",
      en: "Resources & Talent",
      es: "Recursos y Talento",
    },
    recommendedServiceIds: ["S-10"],
  },
  {
    id: "O-18",
    name: {
      de: "Budgettreue & Kostenkontrolle",
      en: "Budget Integrity & Cost Control",
      es: "Integridad Presupuestaria y Control",
    },
    description: {
      de: "Projekte überschreiten regelmäßig die geplanten Kosten.",
      en: "Recurring issues with project costs exceeding planned limits.",
      es: "Problemas recurrentes con costos de proyectos que exceden los límites.",
    },
    category: {
      de: "Prozesse & Steuerung",
      en: "Process & Control",
      es: "Procesos y Control",
    },
    recommendedServiceIds: ["S-14", "S-17"],
  },
  {
    id: "O-06",
    name: {
      de: "Strategischer Fit der Projekte",
      en: "Strategic Project Alignment",
      es: "Alineación Estratégica de Proyectos",
    },
    description: {
      de: "Laufende Projekte zahlen nicht auf die Unternehmensziele ein.",
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
