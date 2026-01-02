// modules/core-data/data.ts
import { PMOService, PMOOutcome } from "./types";

export const services: PMOService[] = [
  {
    id: "S-01",
    name: {
      de: "Beratung der Geschäftsführung",
      en: "Advice to executive level",
      es: "Asesoramiento a nivel ejecutivo",
    },
    category: "Strategic",
    description: {
      de: "Bereitstellung strategischer Beratung für Führungskräfte zu Portfolio- und Projektmanagement.",
      en: "Providing strategic guidance and advice to senior executives on portfolio, program, and project management.",
      es: "Proporcionar orientación estratégica y asesoramiento a altos ejecutivos sobre gestión de carteras y proyectos.",
    },
    maturityLevels: [], // (Gekürzt für Übersichtlichkeit, Logik bleibt gleich)
  },
  {
    id: "S-10",
    name: {
      de: "Ressourcenmanagement",
      en: "Resource management",
      es: "Gestión de recursos",
    },
    category: "Tactical",
    description: {
      de: "Effektive Zuweisung und Verwaltung von Ressourcen über Projekte hinweg.",
      en: "Allocating and managing resources effectively across projects to ensure optimal utilization.",
      es: "Asignación y gestión efectiva de recursos a través de proyectos para asegurar una utilización óptima.",
    },
    maturityLevels: [],
  },
  {
    id: "S-14",
    name: {
      de: "Change Control Management",
      en: "Change control management",
      es: "Gestión de control de cambios",
    },
    category: "Operational",
    description: {
      de: "Überwachung des Änderungsprozesses in Programmen und Projekten.",
      en: "Overseeing the change control process to manage changes in programs and projects.",
      es: "Supervisión del proceso de control de cambios para gestionar cambios en programas y proyectos.",
    },
    maturityLevels: [],
  },
  {
    id: "S-17",
    name: {
      de: "Issue Management",
      en: "Issue management",
      es: "Gestión de incidencias",
    },
    category: "Operational",
    description: {
      de: "Identifizierung und Nachverfolgung von Problemen zur schnellen Lösung.",
      en: "Identifying, tracking, and managing issues to ensure they are resolved promptly.",
      es: "Identificación, seguimiento y gestión de incidencias para asegurar su pronta resolución.",
    },
    maturityLevels: [],
  },
];

export const outcomes: PMOOutcome[] = [
  {
    id: "O-01",
    name: {
      de: "Bessere Verfügbarkeit qualifizierter Ressourcen",
      en: "Better availability of skilled resources",
      es: "Mejor disponibilidad de recursos cualificados",
    },
    description: {
      de: "Schwierigkeiten, qualifizierte Ressourcen zu finden und zu halten.",
      en: "Difficulty finding and retaining skilled program or project management resources.",
      es: "Dificultad para encontrar y retener recursos cualificados de gestión de proyectos.",
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
      de: "Verbessertes Projektbudget-Management",
      en: "Improved Project Budget Management",
      es: "Mejor gestión del presupuesto del proyecto",
    },
    description: {
      de: "Häufige Budgetüberschreitungen und finanzielle Ineffizienzen.",
      en: "Frequent budget overruns and financial inefficiencies.",
      es: "Frecuentes sobrecostos e ineficiencias financieras.",
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
      de: "Stärkere Ausrichtung an strategischen Zielen",
      en: "Greater alignment with strategic objectives",
      es: "Mayor alineación con los objetivos estratégicos",
    },
    description: {
      de: "Projekte tragen nicht zu den Unternehmenszielen bei.",
      en: "Projects not contributing to organizational goals.",
      es: "Los proyectos no contribuyen a los objetivos organizacionales.",
    },
    category: {
      de: "Strategie & Ausrichtung",
      en: "Strategy & Alignment",
      es: "Estrategia y Alineación",
    },
    recommendedServiceIds: ["S-01"],
  },
];
