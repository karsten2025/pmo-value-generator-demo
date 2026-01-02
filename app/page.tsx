// app/page.tsx
"use client";

import { useState } from "react";
import { outcomes, services } from "../modules/core-data/data";
import { useStore } from "../modules/operations/store";

type Language = "de" | "en" | "es";

export default function Home() {
  const [lang, setLang] = useState<Language>("de");
  const { selectedOutcomeIds, toggleOutcome } = useStore();

  const uiTexts = {
    de: {
      title: "PMO Value Generator",
      sub: "Wählen Sie Ihr aktuelles Thema, um passende Lösungsbausteine zu finden.",
      rec: "🛠️ Empfohlene Services:",
      action: "Lösungsvorschlag anzeigen",
      // NEUE LABELS für die Details
      delLabel: "📦 Ergebnisse (Deliverables):",
      kpiLabel: "❤️ Vital-Werte (Nutzen):",
    },
    en: {
      title: "PMO Value Generator",
      sub: "Select your current pain point to find the matching solution.",
      rec: "🛠️ Recommended Services:",
      action: "Generate Solution Proposal",
      delLabel: "📦 Key Deliverables:",
      kpiLabel: "❤️ Vital Signs (Benefit):",
    },
    es: {
      title: "Generador de Valor PMO",
      sub: "Seleccione su problema actual para encontrar la solución.",
      rec: "🛠️ Servicios recomendados:",
      action: "Generar propuesta de solución",
      delLabel: "📦 Resultados clave:",
      kpiLabel: "❤️ Signos Vitales (Beneficio):",
    },
  };

  return (
    <main className="min-h-screen bg-slate-50 p-8 font-sans text-slate-900 pb-32">
      {/* Sprach-Umschalter */}
      <div className="flex justify-end gap-2 mb-8">
        {(["de", "en", "es"] as Language[]).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-3 py-1 rounded uppercase text-xs font-bold transition-colors ${
              lang === l
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-slate-500 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      <header className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            {uiTexts[lang].title}
          </span>
          <span className="ml-2">⚡</span>
        </h1>
        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {uiTexts[lang].sub}
        </p>
      </header>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {outcomes.map((outcome) => {
          const matchingServices = services.filter((service) =>
            outcome.recommendedServiceIds.includes(service.id)
          );

          const isSelected = selectedOutcomeIds.includes(outcome.id);

          return (
            <div
              key={outcome.id}
              onClick={() => toggleOutcome(outcome.id)}
              className={`
                cursor-pointer relative p-6 rounded-2xl transition-all duration-300 group
                ${
                  isSelected
                    ? "bg-white border-2 border-blue-600 shadow-xl shadow-blue-900/10 scale-[1.02] z-10"
                    : "bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300"
                }
              `}
            >
              {isSelected && (
                <div className="absolute top-4 right-4 bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-sm animate-in fade-in zoom-in duration-200">
                  ✓
                </div>
              )}

              <div className="mb-6">
                <span
                  className={`inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3 transition-colors ${
                    isSelected
                      ? "bg-blue-100 text-blue-700"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {outcome.category[lang]}
                </span>
                <h2
                  className={`text-xl font-bold mt-2 transition-colors ${
                    isSelected ? "text-blue-700" : "text-slate-800"
                  }`}
                >
                  {outcome.name[lang]}
                </h2>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                  {outcome.description[lang]}
                </p>
              </div>

              <div
                className={`border-t pt-4 -mx-6 px-6 -mb-6 pb-6 rounded-b-2xl transition-colors ${
                  isSelected
                    ? "bg-blue-50/50 border-blue-100"
                    : "bg-slate-50 border-slate-100"
                }`}
              >
                <h3 className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
                  {uiTexts[lang].rec}
                </h3>

                <div className="space-y-3">
                  {matchingServices.map((service) => (
                    <div
                      key={service.id}
                      className={`rounded-lg border overflow-hidden transition-all duration-300 ${
                        isSelected
                          ? "bg-white border-blue-200 shadow-sm"
                          : "bg-white border-slate-200"
                      }`}
                    >
                      {/* Service Header */}
                      <div className="p-3 flex justify-between items-center">
                        <span
                          className={`font-semibold text-sm transition-colors ${
                            isSelected ? "text-blue-900" : "text-slate-700"
                          }`}
                        >
                          {service.name[lang]}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-full text-slate-500 border border-slate-200">
                          {service.category}
                        </span>
                      </div>

                      {/* DETAILS: Werden nur angezeigt, wenn Kachel ausgewählt ist! */}
                      {isSelected && (
                        <div className="px-3 pb-4 pt-0 text-xs animate-in slide-in-from-top-2 duration-300">
                          <hr className="border-slate-100 mb-3" />

                          {/* Grid für KPIs und Deliverables */}
                          <div className="grid grid-cols-1 gap-4">
                            {/* Deliverables */}
                            <div>
                              <strong className="block text-slate-400 uppercase text-[10px] mb-1 tracking-wider">
                                {uiTexts[lang].delLabel}
                              </strong>
                              <ul className="list-disc list-inside text-slate-600 space-y-0.5 ml-1">
                                {service.deliverables.map((del, idx) => (
                                  <li key={idx}>{del[lang]}</li>
                                ))}
                              </ul>
                            </div>

                            {/* KPIs */}
                            <div>
                              <strong className="block text-blue-400 uppercase text-[10px] mb-1 tracking-wider">
                                {uiTexts[lang].kpiLabel}
                              </strong>
                              <ul className="list-disc list-inside text-slate-600 space-y-0.5 ml-1">
                                {service.kpis.map((kpi, idx) => (
                                  <li key={idx}>{kpi[lang]}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ACTION BAR */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] transition-transform duration-300 transform z-50 ${
          selectedOutcomeIds.length > 0 ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center animate-bounce">
              {selectedOutcomeIds.length}
            </span>
            <span className="text-slate-700 font-medium hidden md:inline">
              {selectedOutcomeIds.length === 1
                ? lang === "de"
                  ? "Thema ausgewählt"
                  : "Selection"
                : lang === "de"
                ? "Themen ausgewählt"
                : "Selections"}
            </span>
          </div>

          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-lg font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2">
            <span>⚡</span>
            {uiTexts[lang].action}
          </button>
        </div>
      </div>
    </main>
  );
}
