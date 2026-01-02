// app/page.tsx
"use client";

import { useState } from "react";
import { outcomes, services } from "../modules/core-data/data";
import { useStore } from "../modules/operations/store";

type Language = "de" | "en" | "es";

export default function Home() {
  const [lang, setLang] = useState<Language>("de");
  const [showModal, setShowModal] = useState(false);
  const [isManagementView, setIsManagementView] = useState(false); // NEU: Der "Geheimschalter"
  const { selectedOutcomeIds, toggleOutcome } = useStore();

  const uiTexts = {
    de: {
      title: "PMO Value Generator",
      sub: "Wählen Sie Ihr aktuelles Thema, um passende Lösungsbausteine zu finden.",
      rec: "🛠️ Empfohlene Services:",
      action: "Lösungsvorschlag anzeigen",
      delLabel: "📦 Ergebnisse:",
      kpiLabel: "❤️ Vital-Werte:",
      modalTitle: "Lösungskonzept & Mehrwert",
      modalIntro:
        "Basierend auf Ihrer Analyse schlagen wir folgende Maßnahmen vor.",
      modalClose: "Schließen",
      modalPrint: "Exportieren",
      viewToggle: "Management View (OPM)", // Beschriftung für den Schalter
    },
    en: {
      title: "PMO Value Generator",
      sub: "Select your current pain point to find the matching solution.",
      rec: "🛠️ Recommended Services:",
      action: "Generate Solution Proposal",
      delLabel: "📦 Deliverables:",
      kpiLabel: "❤️ Vital Signs:",
      modalTitle: "Solution Concept & Value",
      modalIntro: "Based on your analysis, we propose the following measures.",
      modalClose: "Close",
      modalPrint: "Export",
      viewToggle: "Management View (OPM)",
    },
    es: {
      title: "Generador de Valor PMO",
      sub: "Seleccione su problema actual para encontrar la solución.",
      rec: "🛠️ Servicios recomendados:",
      action: "Generar propuesta de solución",
      delLabel: "📦 Resultados:",
      kpiLabel: "❤️ Signos Vitales:",
      modalTitle: "Concepto de Solución y Valor",
      modalIntro: "Basado en su análisis, proponemos las siguientes medidas.",
      modalClose: "Cerrar",
      modalPrint: "Exportar",
      viewToggle: "Vista de Gestión (OPM)",
    },
  };

  const activeServices = services.filter((service) => {
    const relevantOutcomes = outcomes.filter((o) =>
      selectedOutcomeIds.includes(o.id)
    );
    return relevantOutcomes.some((o) =>
      o.recommendedServiceIds.includes(service.id)
    );
  });

  return (
    <main className="min-h-screen bg-slate-900 p-8 font-sans text-slate-100 pb-32">
      {/* Sprach-Umschalter */}
      <div className="flex justify-end gap-2 mb-8">
        {(["de", "en", "es"] as Language[]).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-3 py-1 rounded uppercase text-xs font-bold transition-colors ${
              lang === l
                ? "bg-blue-600 text-white shadow-md shadow-blue-900/50"
                : "bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700"
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      <header className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            {uiTexts[lang].title}
          </span>
          <span className="ml-2">⚡</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
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
                cursor-pointer relative p-6 rounded-2xl transition-all duration-300 group border
                ${
                  isSelected
                    ? "bg-slate-800 border-blue-500 shadow-xl shadow-blue-900/20 scale-[1.02] z-10"
                    : "bg-slate-800/50 border-slate-700 hover:border-blue-400/50 hover:bg-slate-800"
                }
              `}
            >
              {isSelected && (
                <div className="absolute top-4 right-4 bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-sm">
                  ✓
                </div>
              )}

              <div className="mb-6">
                <span
                  className={`inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3 transition-colors ${
                    isSelected
                      ? "bg-blue-600 text-white"
                      : "bg-slate-900 text-slate-500 border border-slate-700"
                  }`}
                >
                  {outcome.category[lang]}
                </span>
                <h2
                  className={`text-xl font-bold mt-2 transition-colors ${
                    isSelected ? "text-blue-200" : "text-slate-200"
                  }`}
                >
                  {outcome.name[lang]}
                </h2>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  {outcome.description[lang]}
                </p>
              </div>

              <div
                className={`border-t pt-4 -mx-6 px-6 -mb-6 pb-6 rounded-b-2xl transition-colors ${
                  isSelected
                    ? "bg-blue-950/30 border-blue-500/30"
                    : "bg-slate-900/30 border-slate-700"
                }`}
              >
                <h3 className="text-sm font-bold text-slate-400 mb-3 flex items-center gap-2">
                  {uiTexts[lang].rec}
                </h3>
                <div className="space-y-3">
                  {matchingServices.map((service) => (
                    <div
                      key={service.id}
                      className={`rounded-lg border overflow-hidden transition-all duration-300 ${
                        isSelected
                          ? "bg-slate-900 border-blue-500/50 shadow-sm"
                          : "bg-slate-900 border-slate-700/50 opacity-80"
                      }`}
                    >
                      <div className="p-3 flex justify-between items-center">
                        <span
                          className={`font-semibold text-sm transition-colors ${
                            isSelected ? "text-blue-100" : "text-slate-400"
                          }`}
                        >
                          {service.name[lang]}
                        </span>
                      </div>
                      {isSelected && (
                        <div className="px-3 pb-4 pt-0 text-xs">
                          <hr className="border-slate-800 mb-3" />
                          <div className="grid grid-cols-1 gap-4">
                            <div>
                              <strong className="block text-slate-500 uppercase text-[10px] mb-1 tracking-wider">
                                {uiTexts[lang].delLabel}
                              </strong>
                              <ul className="list-disc list-inside text-slate-400 space-y-0.5 ml-1">
                                {service.deliverables.map((del, idx) => (
                                  <li key={idx}>{del[lang]}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <strong className="block text-emerald-400 uppercase text-[10px] mb-1 tracking-wider">
                                {uiTexts[lang].kpiLabel}
                              </strong>
                              <ul className="list-disc list-inside text-slate-300 space-y-0.5 ml-1">
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

      <div
        className={`fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 p-4 shadow-[0_-5px_30px_rgba(0,0,0,0.5)] transition-transform duration-300 transform z-40 ${
          selectedOutcomeIds.length > 0 ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center animate-bounce">
              {selectedOutcomeIds.length}
            </span>
            <span className="text-slate-300 font-medium hidden md:inline">
              {selectedOutcomeIds.length === 1
                ? lang === "de"
                  ? "Thema ausgewählt"
                  : "Selection"
                : lang === "de"
                ? "Themen ausgewählt"
                : "Selections"}
            </span>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-2.5 rounded-lg font-bold shadow-lg shadow-blue-900/50 hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
          >
            <span>⚡</span> {uiTexts[lang].action}
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col">
            {/* Header mit Toggle Switch */}
            <div className="p-6 border-b border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center bg-slate-900 sticky top-0 z-10 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">
                  {uiTexts[lang].modalTitle}
                </h2>
                <p className="text-slate-400 text-sm">
                  {uiTexts[lang].modalIntro}
                </p>
              </div>

              <div className="flex items-center gap-4">
                {/* DER MAGISCHE SCHALTER */}
                <label className="flex items-center cursor-pointer select-none">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={isManagementView}
                      onChange={() => setIsManagementView(!isManagementView)}
                    />
                    <div
                      className={`block w-14 h-8 rounded-full transition-colors ${
                        isManagementView ? "bg-blue-600" : "bg-emerald-600"
                      }`}
                    ></div>
                    <div
                      className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${
                        isManagementView ? "transform translate-x-6" : ""
                      }`}
                    ></div>
                  </div>
                  <div className="ml-3 text-xs font-bold uppercase tracking-wider text-slate-300">
                    {isManagementView ? "Management (Hard)" : "Team (Soft)"}
                  </div>
                </label>

                <button
                  onClick={() => setShowModal(false)}
                  className="text-slate-500 hover:text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6 flex-grow">
              {activeServices.map((service, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl border overflow-hidden transition-all duration-500 ${
                    isManagementView
                      ? "border-blue-500/50 bg-blue-950/10"
                      : "border-emerald-500/30 bg-slate-950/50"
                  }`}
                >
                  {/* Service Titel passt sich an View an */}
                  <div
                    className={`p-4 border-b flex justify-between items-center ${
                      isManagementView
                        ? "bg-blue-900/20 border-blue-900/50"
                        : "bg-slate-900 border-slate-800"
                    }`}
                  >
                    <div>
                      <h3
                        className={`text-lg font-bold ${
                          isManagementView
                            ? "text-blue-300"
                            : "text-emerald-300"
                        }`}
                      >
                        {idx + 1}.{" "}
                        {isManagementView && service.businessName
                          ? service.businessName[lang]
                          : service.name[lang]}
                      </h3>
                      {isManagementView && (
                        <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded ml-2 uppercase tracking-widest">
                          OPM Standard
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider border border-slate-700 px-2 py-1 rounded">
                      {service.category}
                    </span>
                  </div>

                  <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Linke Seite: Was tun wir? */}
                    <div>
                      <h4 className="text-xs uppercase font-bold text-slate-500 mb-3 tracking-wider">
                        {isManagementView
                          ? "Methodology & Output"
                          : "Ergebnisse & Nutzen"}
                      </h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((del, i) => (
                          <li
                            key={i}
                            className="text-sm text-slate-300 flex items-start gap-2"
                          >
                            <span className="text-slate-600 mt-1">▪</span>{" "}
                            {del[lang]}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Rechte Seite: Der Effekt (Variiert stark!) */}
                    <div
                      className={`p-4 rounded-lg ${
                        isManagementView
                          ? "bg-blue-500/10 border border-blue-500/20"
                          : "bg-emerald-500/5 border border-emerald-500/10"
                      }`}
                    >
                      <h4
                        className={`text-xs uppercase font-bold mb-3 tracking-wider ${
                          isManagementView
                            ? "text-blue-400"
                            : "text-emerald-400"
                        }`}
                      >
                        {isManagementView
                          ? "📈 ROI & KPI (Business Case)"
                          : "❤️ Vital-Werte (Team)"}
                      </h4>

                      <ul className="space-y-2 mb-4">
                        {(isManagementView && service.hardKpis
                          ? service.hardKpis
                          : service.kpis
                        ).map((kpi, i) => (
                          <li
                            key={i}
                            className="text-sm text-slate-200 flex items-start gap-2"
                          >
                            <span
                              className={
                                isManagementView
                                  ? "text-blue-500"
                                  : "text-emerald-500"
                              }
                            >
                              {isManagementView ? "⇗" : "♥"}
                            </span>
                            {kpi[lang]}
                          </li>
                        ))}
                      </ul>

                      {/* ROI Box nur im Management View */}
                      {isManagementView && service.roiImpact && (
                        <div className="mt-4 pt-3 border-t border-blue-500/30 text-xs text-blue-200 italic">
                          "{service.roiImpact[lang]}"
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-slate-800 bg-slate-900 sticky bottom-0 flex justify-between items-center">
              <div className="text-xs text-slate-500">
                {isManagementView
                  ? "PMO Value Generator v0.3 [OPM Compliant]"
                  : "PMO Value Generator v0.3"}
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors text-sm"
              >
                {uiTexts[lang].modalClose}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
