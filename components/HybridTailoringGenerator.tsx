// components/HybridTailoringGenerator.tsx
"use client";

import { useState, useEffect } from "react";
// Importiert jetzt korrekt das exportierte Interface
import {
  stepMetrics,
  MetricDefinition,
} from "@/modules/core-data/roadmap-metrics-extended";

interface GeneratorProps {
  stepId: string;
  lang: "de" | "en" | "es";
}

export default function HybridTailoringGenerator({
  stepId,
  lang,
}: GeneratorProps) {
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([]);

  useEffect(() => {
    setSelectedMetrics([]);
  }, [stepId]);

  const metricsPool = stepMetrics[stepId];

  const uiTexts = {
    title: {
      de: "Erfolgsfaktoren definieren (Tailoring)",
      en: "Define Success Factors",
      es: "Definir Factores",
    },
    sub: {
      de: "Wählen Sie aus der Liste, was für DIESEN Schritt relevant ist.",
      en: "Select what is relevant for THIS step.",
      es: "Seleccione lo relevante.",
    },
    preview: {
      de: "Datenerfassung (Vorschau):",
      en: "Data Collection (Preview):",
      es: "Recopilación de Datos:",
    },
    saveBtn: {
      de: "Auswahl speichern & Dashboard generieren",
      en: "Save & Generate Dashboard",
      es: "Guardar y Generar",
    },
    noConfig: {
      de: "Für diesen Schritt ist noch keine Konfiguration hinterlegt.",
      en: "No config yet.",
      es: "Sin configuración.",
    },
  };

  const toggleMetric = (id: string) => {
    setSelectedMetrics((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  if (!metricsPool) {
    return (
      <div className="p-6 text-center text-slate-500 text-xs italic bg-slate-900/30 border-t border-slate-800">
        {uiTexts.noConfig[lang]}
      </div>
    );
  }

  return (
    <div className="border-t border-slate-700 bg-slate-800/30 p-4 animate-in slide-in-from-top-2">
      <div className="mb-6">
        <h4 className="text-sm font-bold text-blue-100 flex items-center gap-2 mb-1">
          <span>📝</span> {uiTexts.title[lang]}
        </h4>
        <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
          {uiTexts.sub[lang]}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {metricsPool.map((metric) => {
          const isChecked = selectedMetrics.includes(metric.id);
          return (
            <div
              key={metric.id}
              onClick={() => toggleMetric(metric.id)}
              className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 select-none flex flex-col justify-between ${
                isChecked
                  ? "bg-blue-600/20 border-blue-500 shadow-sm"
                  : "bg-slate-900 border-slate-700 hover:border-slate-600"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <div
                  className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                    isChecked
                      ? "bg-blue-500 border-blue-500"
                      : "border-slate-500"
                  }`}
                >
                  {isChecked && (
                    <span className="text-white text-[10px]">✓</span>
                  )}
                </div>
                <span
                  className={`text-xs font-bold ${
                    isChecked ? "text-blue-200" : "text-slate-300"
                  }`}
                >
                  {metric.label[lang]}
                </span>
              </div>
              <p className="text-[10px] text-slate-500 ml-6 leading-tight">
                {metric.desc[lang]}
              </p>
            </div>
          );
        })}
      </div>

      {selectedMetrics.length > 0 && (
        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 animate-in fade-in">
          <h5 className="text-[10px] uppercase font-bold text-slate-500 mb-3 tracking-widest">
            {uiTexts.preview[lang]}
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedMetrics.map((id) => {
              const metric = metricsPool.find((m) => m.id === id);
              if (!metric) return null;

              return (
                <div
                  key={id}
                  className="space-y-1 animate-in slide-in-from-left-2"
                >
                  <label className="text-xs text-slate-300 block">
                    {metric.label[lang]}
                  </label>
                  {metric.inputType === "text" && (
                    <input
                      type="text"
                      className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-white focus:border-blue-500 outline-none"
                      placeholder="..."
                    />
                  )}
                  {metric.inputType === "textarea" && (
                    <textarea
                      className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-white focus:border-blue-500 outline-none"
                      rows={2}
                      placeholder="..."
                    />
                  )}
                  {metric.inputType === "currency" && (
                    <div className="relative">
                      <span className="absolute left-3 top-2 text-slate-500">
                        €
                      </span>
                      <input
                        type="number"
                        className="w-full bg-slate-900 border border-slate-700 rounded p-2 pl-7 text-sm text-white focus:border-blue-500 outline-none"
                        placeholder="0.00"
                      />
                    </div>
                  )}
                  {metric.inputType === "number" && (
                    <input
                      type="number"
                      className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-white focus:border-blue-500 outline-none"
                      placeholder="0"
                    />
                  )}
                  {metric.inputType === "date" && (
                    <input
                      type="date"
                      className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-slate-400 focus:border-blue-500 outline-none"
                    />
                  )}
                  {(metric.inputType === "rating_10" ||
                    metric.inputType === "rating_5") && (
                    <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 rounded p-2">
                      <input
                        type="range"
                        min="1"
                        max={metric.inputType === "rating_10" ? 10 : 5}
                        className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                      <span className="text-xs text-slate-400 font-mono">
                        1-{metric.inputType === "rating_10" ? 10 : 5}
                      </span>
                    </div>
                  )}
                  {metric.inputType === "slider_percent" && (
                    <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 rounded p-2">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                      />
                      <span className="text-xs text-slate-400 font-mono">
                        %
                      </span>
                    </div>
                  )}
                  {/* HIER WAR DER FEHLER: Wir fügen (o: string) hinzu */}
                  {metric.inputType === "select" && (
                    <select className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-slate-300 focus:border-blue-500 outline-none">
                      {metric.options?.map((o: string) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  )}

                  {metric.inputType === "rating_traffic_light" && (
                    <div className="flex gap-2">
                      {["🟢", "🟡", "🔴"].map((color) => (
                        <button
                          key={color}
                          className="p-2 bg-slate-900 border border-slate-700 rounded hover:bg-slate-800"
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="mt-6 flex justify-end">
        <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:scale-105 text-white text-xs font-bold py-2.5 px-5 rounded-lg shadow-lg shadow-emerald-900/20 transition-all flex items-center gap-2">
          <span>🚀</span> {uiTexts.saveBtn[lang]}
        </button>
      </div>
    </div>
  );
}
