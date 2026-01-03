// app/page.tsx
"use client";

import { useState } from "react";
import { outcomes, services } from "@/modules/core-data/data";
import { useStore } from "@/modules/operations/store";
import { stepMetrics } from "@/modules/core-data/roadmap-metrics"; // Korrigierter Import
import HybridTailoringGenerator from "@/components/HybridTailoringGenerator";
import DashboardView from "@/components/DashboardView";
import OnboardingTour from "@/components/OnboardingTour";

type Language = "de" | "en" | "es";
type ViewMode = "generator" | "dashboard";

export default function Home() {
  const [lang, setLang] = useState<Language>("de");
  const [viewMode, setViewMode] = useState<ViewMode>("generator");
  const [showModal, setShowModal] = useState(false);
  const [isManagementView, setIsManagementView] = useState(false);
  const [activeStepId, setActiveStepId] = useState<string | null>(null);

  const { selectedOutcomeIds, toggleOutcome } = useStore();

  const handleStepClick = (stepId: string) => {
    setActiveStepId((prev) => (prev === stepId ? null : stepId));
  };

  const uiTexts = {
    de: {
      title: "PMO Value Generator",
      sub: "Von der Identifikation der Bedürfnisse zur sichtbaren Wertschöpfung & Analyse.",
      rec: "🛠️ Empfohlene Services:",
      action: "Lösungsvorschlag anzeigen",
      delLabel: "📦 Ergebnisse:",
      kpiLabel: "❤️ Vital-Werte:",
      modalTitle: "Lösungskonzept & Mehrwert",
      modalIntro:
        "Basierend auf Ihrer Analyse schlagen wir folgende Maßnahmen vor.",
      modalClose: "Schließen",
      roadmapLabel: "🏗️ Implementierungs-Roadmap:",
      stepHint: "Schritt anklicken zum Konfigurieren",
      navGen: "Generator (Input)",
      navDash: "Dashboard (Simuliert)",
    },
    en: {
      title: "PMO Value Generator",
      sub: "From identifying needs to visible value creation & analysis.",
      rec: "🛠️ Recommended Services:",
      action: "Generate Solution Proposal",
      delLabel: "📦 Deliverables:",
      kpiLabel: "❤️ Vital Signs:",
      modalTitle: "Solution Concept & Value",
      modalIntro: "Based on your analysis, we propose the following measures.",
      modalClose: "Close",
      roadmapLabel: "🏗️ Implementation Roadmap:",
      stepHint: "Click step to configure",
      navGen: "Generator (Input)",
      navDash: "Dashboard (Simulated)",
    },
    es: {
      title: "Generador de Valor PMO",
      sub: "De la identificación de necesidades a la creación de valor visible y análisis.",
      rec: "🛠️ Servicios recomendados:",
      action: "Generar propuesta de solución",
      delLabel: "📦 Resultados:",
      kpiLabel: "❤️ Signos Vitales:",
      modalTitle: "Concepto de Solución y Valor",
      modalIntro: "Basado en su análisis, proponemos las siguientes medidas.",
      modalClose: "Cerrar",
      roadmapLabel: "🏗️ Hoja de ruta de implementación:",
      stepHint: "Clic para configurar",
      navGen: "Generator",
      navDash: "Dashboard",
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
    <main className="min-h-screen bg-slate-900 p-8 font-sans text-slate-100 pb-32 relative">
      {/* GUIDE: Übergabe des Modal-Status */}
      <OnboardingTour lang={lang} isModalOpen={showModal} />

      {/* Header Row */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div
          id="tour-dashboard-nav"
          className="bg-slate-800 p-1 rounded-lg border border-slate-700 flex"
        >
          <button
            onClick={() => setViewMode("generator")}
            className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${
              viewMode === "generator"
                ? "bg-slate-600 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {uiTexts[lang].navGen}
          </button>
          <button
            onClick={() => setViewMode("dashboard")}
            className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${
              viewMode === "dashboard"
                ? "bg-blue-600 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {uiTexts[lang].navDash} 📊
          </button>
        </div>
        <div className="flex gap-2">
          {(["de", "en", "es"] as Language[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1 rounded uppercase text-xs font-bold transition-colors ${
                lang === l
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* SWITCH */}
      <div id="tour-view-toggle" className="flex justify-center mb-4">
        <label className="flex items-center cursor-pointer select-none bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
          <span
            className={`mr-3 text-xs font-bold uppercase tracking-wider ${
              !isManagementView ? "text-emerald-400" : "text-slate-500"
            }`}
          >
            Team View
          </span>
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              checked={isManagementView}
              onChange={() => setIsManagementView(!isManagementView)}
            />
            <div
              className={`block w-10 h-6 rounded-full transition-colors ${
                isManagementView ? "bg-blue-600" : "bg-emerald-600"
              }`}
            ></div>
            <div
              className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
                isManagementView ? "transform translate-x-4" : ""
              }`}
            ></div>
          </div>
          <span
            className={`ml-3 text-xs font-bold uppercase tracking-wider ${
              isManagementView ? "text-blue-400" : "text-slate-500"
            }`}
          >
            Mgmt View
          </span>
        </label>
      </div>

      <header id="tour-welcome" className="max-w-4xl mx-auto mb-12 text-center">
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

      {/* CONTENT */}
      {viewMode === "dashboard" ? (
        <div className="max-w-6xl mx-auto">
          <DashboardView lang={lang} isManagementView={isManagementView} />
        </div>
      ) : (
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomes.map((outcome, idx) => {
            const matchingServices = services.filter((service) =>
              outcome.recommendedServiceIds.includes(service.id)
            );
            const isSelected = selectedOutcomeIds.includes(outcome.id);
            // HIER: IDs für die Tour (tile-0, tile-1, tile-2)
            const tileId = `tile-${idx}`;

            return (
              <div
                id={tileId}
                key={outcome.id}
                onClick={() => toggleOutcome(outcome.id)}
                className={`cursor-pointer relative p-6 rounded-2xl transition-all duration-300 group border ${
                  isSelected
                    ? "bg-slate-800 border-blue-500 shadow-xl scale-[1.02] z-10"
                    : "bg-slate-800/50 border-slate-700 hover:border-blue-400/50"
                }`}
              >
                {isSelected && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-sm">
                    ✓
                  </div>
                )}
                <div className="mb-6">
                  <span
                    className={`inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3 ${
                      isSelected
                        ? "bg-blue-600 text-white"
                        : "bg-slate-900 text-slate-500 border border-slate-700"
                    }`}
                  >
                    {outcome.category[lang]}
                  </span>
                  <h2
                    className={`text-xl font-bold mt-2 ${
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
                  <h3 className="text-sm font-bold text-slate-400 mb-3">
                    {uiTexts[lang].rec}
                  </h3>
                  <div className="space-y-3">
                    {matchingServices.map((service) => (
                      <div
                        key={service.id}
                        className={`rounded-lg border overflow-hidden ${
                          isSelected
                            ? "bg-slate-900 border-blue-500/50"
                            : "bg-slate-900 border-slate-700/50 opacity-80"
                        }`}
                      >
                        <div className="p-3 flex justify-between items-center">
                          <span
                            className={`font-semibold text-sm ${
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
                                <strong className="block text-slate-500 uppercase text-[10px] mb-1">
                                  {uiTexts[lang].delLabel}
                                </strong>
                                <ul className="list-disc list-inside text-slate-400 space-y-0.5 ml-1">
                                  {service.deliverables.map((del, idx) => (
                                    <li key={idx}>{del[lang]}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <strong className="block text-emerald-400 uppercase text-[10px] mb-1">
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
      )}

      {viewMode === "generator" && (
        <div
          id="tour-action-area"
          className={`fixed bottom-0 left-0 right-0 z-40 p-4 border-t border-slate-800 bg-slate-900/95 backdrop-blur shadow-[0_-5px_30px_rgba(0,0,0,0.5)] transition-transform duration-300 ${
            selectedOutcomeIds.length > 0 ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center animate-bounce shadow-lg shadow-blue-500/30">
                {selectedOutcomeIds.length}
              </span>
              <span className="text-slate-300 font-medium hidden md:inline text-sm tracking-wide">
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
              className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-2.5 rounded-lg font-bold shadow-lg hover:scale-105 transition-all flex items-center gap-2 text-sm"
            >
              <span>⚡</span> {uiTexts[lang].action}
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col">
            <div className="p-6 border-b border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center bg-slate-900 sticky top-0 z-10 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">
                  {uiTexts[lang].modalTitle}
                </h2>
                <p className="text-slate-400 text-sm">
                  {uiTexts[lang].modalIntro}
                </p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-500 hover:text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-full"
              >
                ✕
              </button>
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
                            </span>{" "}
                            {kpi[lang]}
                          </li>
                        ))}
                      </ul>
                      {isManagementView && service.roiImpact && (
                        <div className="mt-4 pt-3 border-t border-blue-500/30 text-xs text-blue-200 italic">
                          "{service.roiImpact[lang]}"
                        </div>
                      )}
                    </div>
                  </div>
                  {/* HIER: IDs für Modal-Tour */}
                  <div id="modal-roadmap-area" className="px-5 pb-5">
                    <div className="bg-slate-900/50 rounded-lg border border-slate-800 overflow-hidden">
                      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900">
                        <h5 className="text-[10px] uppercase font-bold text-slate-500 flex items-center gap-2">
                          {uiTexts[lang].roadmapLabel}
                        </h5>
                        <span className="text-[9px] text-slate-600 italic">
                          {uiTexts[lang].stepHint}
                        </span>
                      </div>
                      <div className="flex gap-2 overflow-x-auto p-3 scrollbar-thin scrollbar-thumb-slate-700">
                        {service.implementationPlan.map((phase, pIdx) => (
                          <div
                            key={pIdx}
                            className="flex-none w-40 flex flex-col gap-2"
                          >
                            <div
                              className={`text-[9px] font-bold uppercase pb-1 border-b border-slate-700 ${
                                pIdx === 0
                                  ? "text-emerald-400"
                                  : "text-slate-500"
                              }`}
                            >
                              {phase.phase}
                            </div>
                            {phase.steps.map((step, sIdx) => {
                              const isActive = activeStepId === step.id;
                              return (
                                <div
                                  key={sIdx}
                                  onClick={() => handleStepClick(step.id)}
                                  className={`text-[10px] p-2 rounded border cursor-pointer transition-all relative ${
                                    isActive
                                      ? "bg-blue-600 text-white border-blue-500 shadow-md"
                                      : "bg-slate-800 text-slate-300 border-slate-700 hover:border-blue-500 hover:text-white"
                                  }`}
                                >
                                  {step.title[lang]}
                                </div>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                      <div id="modal-metrics-area">
                        {activeStepId &&
                          service.implementationPlan.some((phase) =>
                            phase.steps.some((s) => s.id === activeStepId)
                          ) && (
                            <HybridTailoringGenerator
                              stepId={activeStepId}
                              lang={lang}
                            />
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-slate-800 bg-slate-900 sticky bottom-0 flex justify-between items-center">
              <div className="text-xs text-slate-500">
                {isManagementView
                  ? "PMO Value Generator v0.6 [Modular]"
                  : "PMO Value Generator v0.6"}
              </div>
              <button
                id="modal-save-btn"
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
