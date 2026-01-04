// components/ProcessGroupNavigator.tsx
"use client";

import { useState } from "react";
import { allProcessGroupMetrics, MetricDefinition } from "@/modules/core-data/roadmap-metrics-extended";

interface ProcessGroupNavigatorProps {
  serviceId: string; // S-01, S-10, S-14, S-17
  lang: "de" | "en" | "es";
  isManagementView: boolean;
}

type ProcessGroup = "initiating" | "planning" | "executing" | "monitoring" | "closing";

const processGroupIcons = {
  initiating: "🚀",
  planning: "📋",
  executing: "⚡",
  monitoring: "📊",
  closing: "🎯",
};

const processGroupColors = {
  initiating: "from-blue-600 to-cyan-500",
  planning: "from-purple-600 to-pink-500",
  executing: "from-green-600 to-emerald-500",
  monitoring: "from-orange-600 to-yellow-500",
  closing: "from-red-600 to-rose-500",
};

const processGroupLabels = {
  initiating: {
    de: "Start & Charter",
    en: "Initiating",
    es: "Inicio",
  },
  planning: {
    de: "Planung",
    en: "Planning",
    es: "Planificación",
  },
  executing: {
    de: "Umsetzung",
    en: "Executing",
    es: "Ejecución",
  },
  monitoring: {
    de: "Steuerung",
    en: "Monitoring",
    es: "Monitoreo",
  },
  closing: {
    de: "Abschluss",
    en: "Closing",
    es: "Cierre",
  },
};

const processGroupDescriptions = {
  initiating: {
    de: "Warum machen wir das? Wer ist dabei?",
    en: "Why do we do this? Who's involved?",
    es: "¿Por qué hacemos esto? ¿Quién participa?",
  },
  planning: {
    de: "Was genau? Wie lange? Wie teuer?",
    en: "What exactly? How long? How much?",
    es: "¿Qué exactamente? ¿Cuánto tiempo? ¿Cuánto cuesta?",
  },
  executing: {
    de: "Schaffen wir es? Wie geht's dem Team?",
    en: "Are we making it? How's the team?",
    es: "¿Lo logramos? ¿Cómo está el equipo?",
  },
  monitoring: {
    de: "Sind wir on track? Müssen wir steuern?",
    en: "Are we on track? Need to adjust?",
    es: "¿Vamos bien? ¿Necesitamos ajustar?",
  },
  closing: {
    de: "Was haben wir erreicht? Was lernen wir?",
    en: "What did we achieve? What did we learn?",
    es: "¿Qué logramos? ¿Qué aprendimos?",
  },
};

export default function ProcessGroupNavigator({
  serviceId,
  lang,
  isManagementView,
}: ProcessGroupNavigatorProps) {
  const [activeGroup, setActiveGroup] = useState<ProcessGroup>("initiating");
  const [selectedMetrics, setSelectedMetrics] = useState<Set<string>>(new Set());
  const [methodologyFilter, setMethodologyFilter] = useState<"all" | "classical" | "agile" | "hybrid">("all");

  // Get metrics for the active process group and service
  const getMetricsForGroup = (group: ProcessGroup): MetricDefinition[] => {
    const groupMetrics = allProcessGroupMetrics[group];
    if (!groupMetrics) return [];

    // Find all metric arrays that match the service
    const allMetrics: MetricDefinition[] = [];
    Object.keys(groupMetrics).forEach((key) => {
      if (key.startsWith(serviceId)) {
        allMetrics.push(...groupMetrics[key]);
      }
    });

    // Apply methodology filter
    if (methodologyFilter !== "all") {
      return allMetrics.filter((m) => m.methodology === methodologyFilter);
    }

    return allMetrics;
  };

  const currentMetrics = getMetricsForGroup(activeGroup);

  const toggleMetric = (metricId: string) => {
    const newSet = new Set(selectedMetrics);
    if (newSet.has(metricId)) {
      newSet.delete(metricId);
    } else {
      newSet.add(metricId);
    }
    setSelectedMetrics(newSet);
  };

  const getMethodologyBadgeColor = (methodology: string) => {
    switch (methodology) {
      case "classical":
        return "bg-blue-600/20 text-blue-300 border-blue-500/30";
      case "agile":
        return "bg-green-600/20 text-green-300 border-green-500/30";
      case "hybrid":
        return "bg-purple-600/20 text-purple-300 border-purple-500/30";
      default:
        return "bg-slate-600/20 text-slate-300 border-slate-500/30";
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Process Group Tabs */}
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-2 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {(["initiating", "planning", "executing", "monitoring", "closing"] as ProcessGroup[]).map(
            (group) => {
              const isActive = activeGroup === group;
              return (
                <button
                  key={group}
                  onClick={() => setActiveGroup(group)}
                  className={`flex-1 min-w-[140px] p-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                    isActive
                      ? "bg-gradient-to-br shadow-lg shadow-black/20 scale-105"
                      : "bg-slate-900/50 hover:bg-slate-800/80"
                  } ${isActive ? processGroupColors[group] : ""}`}
                >
                  <div className="relative z-10">
                    <div className="text-3xl mb-2">{processGroupIcons[group]}</div>
                    <div
                      className={`text-sm font-bold mb-1 ${
                        isActive ? "text-white" : "text-slate-300"
                      }`}
                    >
                      {processGroupLabels[group][lang]}
                    </div>
                    <div
                      className={`text-[10px] leading-tight ${
                        isActive ? "text-white/80" : "text-slate-500"
                      }`}
                    >
                      {processGroupDescriptions[group][lang]}
                    </div>
                  </div>
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  )}
                </button>
              );
            }
          )}
        </div>
      </div>

      {/* Methodology Filter */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 uppercase tracking-wider">
            {lang === "de" ? "Methodik:" : lang === "en" ? "Methodology:" : "Metodología:"}
          </span>
          <div className="flex gap-2">
            {(["all", "classical", "agile", "hybrid"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setMethodologyFilter(filter)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  methodologyFilter === filter
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700 border border-slate-700"
                }`}
              >
                {filter === "all"
                  ? lang === "de"
                    ? "Alle"
                    : "All"
                  : filter === "classical"
                  ? lang === "de"
                    ? "Klassisch"
                    : "Classical"
                  : filter === "agile"
                  ? "Agile"
                  : "Hybrid"}
                {filter !== "all" && (
                  <span className="ml-1 opacity-60">
                    (
                    {
                      currentMetrics.filter((m) => methodologyFilter === "all" || m.methodology === filter)
                        .length
                    }
                    )
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="text-xs text-slate-400 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-600/20 rounded border border-blue-500/30">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            {selectedMetrics.size} {lang === "de" ? "ausgewählt" : "selected"}
          </span>
        </div>
      </div>

      {/* Metrics Grid */}
      {currentMetrics.length === 0 ? (
        <div className="text-center py-16 px-4">
          <div className="text-6xl mb-4 opacity-50">📊</div>
          <div className="text-slate-400 text-sm">
            {lang === "de"
              ? "Keine Metriken für diese Kombination verfügbar."
              : lang === "en"
              ? "No metrics available for this combination."
              : "No hay métricas disponibles para esta combinación."}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentMetrics.map((metric) => {
            const isSelected = selectedMetrics.has(metric.id);
            return (
              <div
                key={metric.id}
                onClick={() => toggleMetric(metric.id)}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 group hover:scale-[1.02] ${
                  isSelected
                    ? "bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border-blue-500 shadow-lg shadow-blue-500/20"
                    : "bg-slate-800/50 border-slate-700 hover:border-slate-600 hover:bg-slate-800"
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all ${
                          isSelected
                            ? "bg-blue-500 border-blue-500"
                            : "border-slate-600 group-hover:border-slate-500"
                        }`}
                      >
                        {isSelected && (
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                        )}
                      </div>
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded border ${getMethodologyBadgeColor(
                          metric.methodology
                        )}`}
                      >
                        {metric.methodology === "classical"
                          ? "📊"
                          : metric.methodology === "agile"
                          ? "🔄"
                          : "🔀"}
                      </span>
                    </div>
                    <h3
                      className={`text-sm font-bold leading-tight ${
                        isSelected ? "text-blue-100" : "text-slate-200"
                      }`}
                    >
                      {metric.label[lang]}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  {metric.desc[lang]}
                </p>

                {/* Footer Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-700/50">
                  <span className="text-[9px] px-2 py-0.5 rounded bg-slate-900/50 text-slate-500 uppercase tracking-wider">
                    {metric.opmDomain}
                  </span>
                  {metric.pmbokKnowledgeArea && (
                    <span className="text-[9px] px-2 py-0.5 rounded bg-slate-900/50 text-slate-500 uppercase tracking-wider">
                      {metric.pmbokKnowledgeArea}
                    </span>
                  )}
                  <span
                    className={`text-[9px] px-2 py-0.5 rounded uppercase tracking-wider ${
                      metric.inputType === "currency"
                        ? "bg-green-600/20 text-green-400"
                        : metric.inputType.includes("rating")
                        ? "bg-yellow-600/20 text-yellow-400"
                        : "bg-blue-600/20 text-blue-400"
                    }`}
                  >
                    {metric.inputType === "currency"
                      ? "💰"
                      : metric.inputType.includes("rating")
                      ? metric.inputType === "rating_traffic_light"
                        ? "🚦"
                        : "⭐"
                      : metric.inputType === "date"
                      ? "📅"
                      : "📝"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Selected Metrics Summary */}
      {selectedMetrics.size > 0 && (
        <div className="fixed bottom-6 right-6 left-6 md:left-auto md:w-96 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-2xl shadow-blue-900/50 p-6 animate-in slide-in-from-bottom-4 duration-300 border border-blue-400/20">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-white font-bold text-lg mb-1">
                {selectedMetrics.size}{" "}
                {lang === "de"
                  ? "Metriken ausgewählt"
                  : lang === "en"
                  ? "Metrics Selected"
                  : "Métricas Seleccionadas"}
              </div>
              <div className="text-blue-100 text-xs">
                {processGroupLabels[activeGroup][lang]} •{" "}
                {methodologyFilter === "all"
                  ? lang === "de"
                    ? "Alle Methoden"
                    : "All Methods"
                  : methodologyFilter}
              </div>
            </div>
            <button
              onClick={() => setSelectedMetrics(new Set())}
              className="text-white/80 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => {
                alert(`Preview: ${selectedMetrics.size} metrics would be saved`);
              }}
              className="flex-1 bg-white text-blue-600 font-bold py-3 px-4 rounded-xl hover:bg-blue-50 transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <span>👁️</span>
              {lang === "de" ? "Vorschau" : lang === "en" ? "Preview" : "Vista Previa"}
            </button>
            <button
              onClick={() => {
                alert(
                  `Would save ${selectedMetrics.size} metrics for ${processGroupLabels[activeGroup][lang]}`
                );
              }}
              className="flex-1 bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl hover:bg-emerald-400 transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <span>💾</span>
              {lang === "de" ? "Speichern" : lang === "en" ? "Save" : "Guardar"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

