// modules/onboarding/tour-config.ts
import { DriveStep } from "driver.js";

type Language = "de" | "en" | "es";

// === TOUR 1: STARTSEITE (Übersicht) ===
export const getMainTourSteps = (lang: Language): DriveStep[] => {
  const t = {
    de: {
      welcome: {
        t: "👋 Willkommen",
        d: "Entdecken Sie, wie Sie operative Herausforderungen in strategischen Wert verwandeln. Ich führe Sie kurz durch die Logik.",
      },
      // Neutraleres Wording
      tile1: {
        t: "1. Mensch & Kapazität",
        d: "Hier adressieren wir Engpässe in der Personalplanung. Wie finden und halten wir die richtigen Fachkräfte nachhaltig?",
      },
      tile2: {
        t: "2. Prozess & Struktur",
        d: "Der Bereich für Stabilität. Wenn Termine rutschen oder Budgets explodieren, finden Sie hier die passenden Governance-Hebel.",
      },
      tile3: {
        t: "3. Strategie & Fokus",
        d: 'Gegen das "Verzetteln". Hier stellen wir sicher, dass wir an den Dingen arbeiten, die wirklich auf die Unternehmensziele einzahlen.',
      },
      view: {
        t: "Perspektiv-Wechsel",
        d: 'Schalten Sie jederzeit um: Die "Team-Sicht" fokussiert auf Kultur & Buy-In, die "Management-Sicht" auf ROI & KPIs.',
      },
      hint: {
        t: "Jetzt ausprobieren",
        d: "Klicken Sie auf eine der Kacheln, um in die Detailebene (Roadmap & Tailoring) einzutauchen.",
      },
    },
    en: {
      welcome: {
        t: "👋 Welcome",
        d: "Discover how to turn operational challenges into strategic value. Let me guide you through the logic.",
      },
      tile1: {
        t: "1. People & Capacity",
        d: "Addressing bottlenecks in staffing. How do we find and retain the right talent sustainably?",
      },
      tile2: {
        t: "2. Process & Structure",
        d: "The area for stability. If deadlines slip or budgets explode, you will find the right governance levers here.",
      },
      tile3: {
        t: "3. Strategy & Focus",
        d: "Avoiding distraction. Here we ensure that we work on things that truly contribute to company goals.",
      },
      view: {
        t: "Change Perspective",
        d: 'Switch anytime: "Team View" focuses on culture & buy-in, "Management View" on ROI & KPIs.',
      },
      hint: {
        t: "Try it now",
        d: "Click on any tile to dive into the detailed level (Roadmap & Tailoring).",
      },
    },
    es: {
      welcome: {
        t: "👋 Bienvenido",
        d: "Descubra cómo convertir desafíos operativos en valor estratégico. Permítame guiarle por la lógica.",
      },
      tile1: {
        t: "1. Personas y Capacidad",
        d: "Abordar cuellos de botella en la dotación de personal. ¿Cómo atraemos y retenemos el talento de forma sostenible?",
      },
      tile2: {
        t: "2. Proceso y Estructura",
        d: "El área de estabilidad. Si los plazos se deslizan, aquí encontrará las palancas de gobernanza adecuadas.",
      },
      tile3: {
        t: "3. Estrategia y Enfoque",
        d: "Evitar distracciones. Aquí aseguramos trabajar en lo que realmente contribuye a los objetivos.",
      },
      view: {
        t: "Cambiar Perspectiva",
        d: 'Cambie en cualquier momento: "Vista de Equipo" (Cultura), "Vista de Gestión" (ROI).',
      },
      hint: {
        t: "Pruébelo ahora",
        d: "Haga clic en cualquier ficha para sumergirse en el nivel detallado.",
      },
    },
  }[lang];

  return [
    {
      element: "#tour-welcome",
      popover: { title: t.welcome.t, description: t.welcome.d, side: "bottom" },
    },
    {
      element: "#tile-0",
      popover: {
        title: t.tile1.t,
        description: t.tile1.d,
        side: "right",
        align: "start",
      },
    },
    {
      element: "#tile-1",
      popover: {
        title: t.tile2.t,
        description: t.tile2.d,
        side: "right",
        align: "start",
      },
    },
    {
      element: "#tile-2",
      popover: {
        title: t.tile3.t,
        description: t.tile3.d,
        side: "left",
        align: "start",
      },
    }, // Side left for the last one
    {
      element: "#tour-view-toggle",
      popover: { title: t.view.t, description: t.view.d, side: "bottom" },
    },
    {
      element: "#tile-0",
      popover: { title: t.hint.t, description: t.hint.d, side: "right" },
    }, // Point back to tiles
  ];
};

// === TOUR 2: MODAL (Detailansicht) ===
export const getModalTourSteps = (lang: Language): DriveStep[] => {
  const t = {
    de: {
      roadmap: {
        t: "Die Implementierungs-Roadmap",
        d: "Der Weg zum Ziel. Diese Prozessschritte basieren auf Standards (PMBOK/OPM), sind aber vereinfacht. Klicken Sie auf einen Schritt, um ihn zu bearbeiten.",
      },
      metrics: {
        t: "Smartes Tailoring",
        d: "Hier passiert die Magie. Statt starrer Formulare wählen Sie nur die Erfolgsfaktoren (Metriken), die für DIESES Projekt relevant sind. Ihre Auswahl konfiguriert das Dashboard.",
      },
      save: {
        t: "Speichern & Analysieren",
        d: "Diese Daten fließen direkt in Ihr Supabase-Dashboard für Echtzeit-Auswertungen.",
      },
    },
    en: {
      roadmap: {
        t: "Implementation Roadmap",
        d: "The path to the goal. These steps are based on standards but simplified. Click a step to configure it.",
      },
      metrics: {
        t: "Smart Tailoring",
        d: "Magic happens here. Instead of rigid forms, select only the success factors relevant to THIS project.",
      },
      save: {
        t: "Save & Analyze",
        d: "Data flows directly into your Supabase dashboard for real-time analysis.",
      },
    },
    es: {
      roadmap: {
        t: "Hoja de Ruta",
        d: "El camino hacia el objetivo. Pasos basados en estándares. Haga clic en un paso para configurarlo.",
      },
      metrics: {
        t: "Adaptación Inteligente",
        d: "Aquí sucede la magia. Seleccione solo los factores de éxito relevantes para ESTE proyecto.",
      },
      save: {
        t: "Guardar y Analizar",
        d: "Los datos fluyen directamente a su tablero Supabase.",
      },
    },
  }[lang];

  return [
    {
      element: "#modal-roadmap-area",
      popover: { title: t.roadmap.t, description: t.roadmap.d, side: "top" },
    },
    // Wir zielen auf den Container des Generators, falls sichtbar
    {
      element: "#modal-metrics-area",
      popover: { title: t.metrics.t, description: t.metrics.d, side: "top" },
    },
    {
      element: "#modal-save-btn",
      popover: { title: t.save.t, description: t.save.d, side: "left" },
    },
  ];
};
