// modules/core-data/roadmap-metrics.ts

// WICHTIG: Das "export" hier muss stehen, damit andere Dateien es nutzen können!
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
}

export const stepMetrics: Record<string, MetricDefinition[]> = {
  // S01: Strategie
  "S01-I-1": [
    {
      id: "metric_roi",
      label: {
        de: "💰 Geldwerter Vorteil (ROI/Kosten)",
        en: "💰 Financial Benefit (ROI)",
        es: "💰 Beneficio Financiero",
      },
      desc: {
        de: "Spart es Geld oder bringt es Umsatz?",
        en: "Saves money or generates revenue?",
        es: "¿Ahorra dinero o genera ingresos?",
      },
      inputType: "currency",
    },
    {
      id: "metric_fit",
      label: {
        de: "🎯 Strategischer Volltreffer (Fit)",
        en: "🎯 Strategic Fit",
        es: "🎯 Ajuste Estratégico",
      },
      desc: {
        de: "Passt das zu unseren Jahreszielen?",
        en: "Matches annual goals?",
        es: "¿Coincide con objetivos anuales?",
      },
      inputType: "rating_10",
    },
    {
      id: "metric_customer",
      label: {
        de: "❤️ Nutzen für Kunden/Nutzer",
        en: "❤️ Customer Value",
        es: "❤️ Valor para el Cliente",
      },
      desc: {
        de: "Wird das Leben für jemanden besser?",
        en: "Does it improve someone's life?",
        es: "¿Mejora la vida de alguien?",
      },
      inputType: "textarea",
    },
    {
      id: "metric_time",
      label: {
        de: "📅 Zeitpunkt der Wirkung (Time-to-Value)",
        en: "📅 Time-to-Value",
        es: "📅 Tiempo de Valor",
      },
      desc: {
        de: "Wann sehen wir erste Ergebnisse?",
        en: "When do we see results?",
        es: "¿Cuándo vemos resultados?",
      },
      inputType: "date",
    },
    {
      id: "metric_risk",
      label: {
        de: "🛡️ Risikominimierung",
        en: "🛡️ Risk Reduction",
        es: "🛡️ Reducción de Riesgos",
      },
      desc: {
        de: "Verhindern wir ein Desaster (z.B. Gesetz)?",
        en: "Preventing disaster?",
        es: "¿Prevenir desastres?",
      },
      inputType: "select",
      options: [
        "Niedrig / Low",
        "Mittel / Medium",
        "Hoch / High",
        "Existentiell / Critical",
      ],
    },
    {
      id: "metric_owner",
      label: {
        de: "🙋‍♂️ Klarer Verantwortlicher (Owner)",
        en: "🙋‍♂️ Clear Owner",
        es: "🙋‍♂️ Responsable Claro",
      },
      desc: {
        de: "Wer hält den Kopf für den Nutzen hin?",
        en: "Who is accountable?",
        es: "¿Quién responde?",
      },
      inputType: "text",
    },
  ],

  // S10: Team
  "S10-I-1": [
    {
      id: "hr_skill_match",
      label: {
        de: "🧩 Skill-Passung (Hard Skills)",
        en: "🧩 Skill Match",
        es: "🧩 Ajuste de Habilidades",
      },
      desc: {
        de: "Haben wir das technische Know-how?",
        en: "Do we have the know-how?",
        es: "¿Tenemos el conocimiento?",
      },
      inputType: "slider_percent",
    },
    {
      id: "hr_seniority",
      label: {
        de: "⚖️ Senioritäts-Mix (Erfahrung)",
        en: "⚖️ Seniority Mix",
        es: "⚖️ Mezcla de Seniority",
      },
      desc: {
        de: "Verhältnis Junior/Senior gesund?",
        en: "Healthy Junior/Senior ratio?",
        es: "¿Ratio saludable?",
      },
      inputType: "select",
      options: [
        "Zu viele Juniors",
        "Ausgewogen / Gesund",
        "Sehr Senior-lastig",
        "Kritischer Experten-Mangel",
      ],
    },
    {
      id: "hr_chemistry",
      label: {
        de: "🤝 Team-Chemie (Soft Skills)",
        en: "🤝 Team Chemistry",
        es: "🤝 Química de Equipo",
      },
      desc: {
        de: "Passt die Gruppe menschlich?",
        en: "Cultural fit?",
        es: "¿Ajuste cultural?",
      },
      inputType: "rating_5",
    },
    {
      id: "hr_bus_factor",
      label: {
        de: "🤒 Ausfall-Risiko (Kopfmonopole)",
        en: "🤒 Bus Factor Risk",
        es: "🤒 Riesgo de Ausencia",
      },
      desc: {
        de: "Abhängigkeit von Einzelpersonen",
        en: "Dependency on individuals",
        es: "Dependencia individual",
      },
      inputType: "rating_traffic_light",
    },
  ],

  // S14: Change
  "S14-I-1": [
    {
      id: "chg_mandate",
      label: {
        de: "⚖️ Entscheidungs-Mandat (Power)",
        en: "⚖️ Decision Mandate",
        es: "⚖️ Mandato de Decisión",
      },
      desc: {
        de: "Darf das Board entscheiden oder nur empfehlen?",
        en: "Can they decide or just recommend?",
        es: "¿Pueden decidir o solo recomendar?",
      },
      inputType: "select",
      options: [
        "Nur Empfehlung (Zahnlos)",
        "Teil-Mandat (Budget begrenzt)",
        "Volles Mandat (Durchgriff)",
      ],
    },
    {
      id: "chg_speed",
      label: {
        de: "⏱️ Reaktions-Taktung (Speed)",
        en: "⏱️ Response Speed",
        es: "⏱️ Velocidad de Respuesta",
      },
      desc: {
        de: "Wie lange wartet das Team auf das Go?",
        en: "How long is the wait?",
        es: "¿Cuánto tiempo de espera?",
      },
      inputType: "select",
      options: [
        "Täglich / Auf Zuruf (Agil)",
        "Wöchentlich",
        "Monatlich (Klassisch)",
        "Quartalsweise (Bremse)",
      ],
    },
    {
      id: "chg_threshold",
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
    },
    {
      id: "chg_mindset",
      label: {
        de: "🧠 Haltung des Boards",
        en: "🧠 Board Mindset",
        es: "🧠 Mentalidad",
      },
      desc: {
        de: "Sind sie 'Wächter' oder 'Ermöglicher'?",
        en: "Gatekeepers or Enablers?",
        es: "¿Guardianes o Facilitadores?",
      },
      inputType: "rating_traffic_light",
    },
  ],

  // S17: Issues
  "S17-I-1": [
    {
      id: "esc_clarity",
      label: {
        de: "🗺️ Klarheit der Wege",
        en: "🗺️ Path Clarity",
        es: "🗺️ Claridad de Ruta",
      },
      desc: {
        de: "Weiß jeder sofort, wen er anrufen muss?",
        en: "Does everyone know whom to call?",
        es: "¿Saben a quién llamar?",
      },
      inputType: "rating_10",
    },
    {
      id: "esc_sla",
      label: {
        de: "🚑 Reaktionszeit (SLA)",
        en: "🚑 Response Time (SLA)",
        es: "🚑 Tiempo de Respuesta",
      },
      desc: {
        de: "Wann kommt garantierte Hilfe?",
        en: "When does help arrive?",
        es: "¿Cuándo llega la ayuda?",
      },
      inputType: "select",
      options: [
        "Sofort / Notfall",
        "< 4 Stunden",
        "< 24 Stunden",
        "Best Effort (Unklar)",
      ],
    },
    {
      id: "esc_safety",
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
    },
    {
      id: "esc_competence",
      label: {
        de: "🛠️ Lösungskompetenz Ebene+1",
        en: "🛠️ Solver Competence",
        es: "🛠️ Competencia de Solución",
      },
      desc: {
        de: "Kann der Eskalations-Partner das Problem technisch lösen?",
        en: "Can they actually fix it?",
        es: "¿Pueden solucionarlo?",
      },
      inputType: "rating_5",
    },
  ],
};
