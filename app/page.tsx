// app/page.tsx
"use client"; // WICHTIG: Das macht die Seite interaktiv (für den Button-Klick)

import { useState } from "react";
import { outcomes, services } from "../modules/core-data/data";

// Wir definieren den Typ für unsere Sprachen
type Language = "de" | "en" | "es";

export default function Home() {
  // Hier speichern wir die aktuell gewählte Sprache (Standard: Deutsch)
  const [lang, setLang] = useState<Language>("de");

  // UI-Texte (Headlines) auch übersetzen
  const uiTexts = {
    de: {
      title: "PMO Value Generator 🚀",
      sub: "Wählen Sie Ihr aktuelles Problem, um die Lösung zu finden.",
      rec: "💊 Empfohlene Services:",
    },
    en: {
      title: "PMO Value Generator 🚀",
      sub: "Select your current pain point to find the matching solution.",
      rec: "💊 Recommended Services:",
    },
    es: {
      title: "Generador de Valor PMO 🚀",
      sub: "Seleccione su problema actual para encontrar la solución.",
      rec: "💊 Servicios recomendados:",
    },
  };

  return (
    <main className="min-h-screen bg-slate-50 p-8 font-sans">
      {/* SPRACH-UMSCHALTER (Oben rechts) */}
      <div className="flex justify-end gap-2 mb-4">
        {(["de", "en", "es"] as Language[]).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-3 py-1 rounded uppercase text-sm font-bold ${
              lang === l
                ? "bg-blue-600 text-white"
                : "bg-white text-slate-500 border"
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      <header className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4 transition-all">
          {uiTexts[lang].title}
        </h1>
        <p className="text-slate-600 text-lg transition-all">
          {uiTexts[lang].sub}
        </p>
      </header>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {outcomes.map((outcome) => {
          const matchingServices = services.filter((service) =>
            outcome.recommendedServiceIds.includes(service.id)
          );

          return (
            <div
              key={outcome.id}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all"
            >
              {/* Schmerz (In gewählter Sprache) */}
              <div className="mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {outcome.category[lang]} {/* <--- Zugriff via [lang] */}
                </span>
                <h2 className="text-xl font-bold text-slate-800 mt-2">
                  {outcome.name[lang]}
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  {outcome.description[lang]}
                </p>
              </div>

              {/* Medizin (In gewählter Sprache) */}
              <div className="border-t border-slate-100 pt-4">
                <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                  {uiTexts[lang].rec}
                </h3>
                <ul className="space-y-2">
                  {matchingServices.map((service) => (
                    <li
                      key={service.id}
                      className="text-sm text-slate-700 bg-slate-50 p-2 rounded border border-slate-100"
                    >
                      <span className="font-semibold block">
                        {service.name[lang]}
                      </span>
                      <span className="text-xs text-slate-500">
                        {service.category} Service
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
