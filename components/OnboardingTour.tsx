// components/OnboardingTour.tsx
"use client";

import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import {
  getMainTourSteps,
  getModalTourSteps,
} from "@/modules/onboarding/tour-config";

type Language = "de" | "en" | "es";

interface TourProps {
  lang: Language;
  isModalOpen: boolean; // NEU: Der Guide muss wissen, wo wir sind
}

export default function OnboardingTour({ lang, isModalOpen }: TourProps) {
  const uiTexts = {
    de: { next: "Weiter 👉", prev: "Zurück", done: "Verstanden 👍" },
    en: { next: "Next 👉", prev: "Back", done: "Got it 👍" },
    es: { next: "Siguiente 👉", prev: "Atrás", done: "Entendido 👍" },
  };

  const startTour = () => {
    // Entscheide, welche Schritte geladen werden
    const steps = isModalOpen
      ? getModalTourSteps(lang)
      : getMainTourSteps(lang);

    const tourDriver = driver({
      showProgress: true,
      animate: true,
      steps: steps,
      nextBtnText: uiTexts[lang].next,
      prevBtnText: uiTexts[lang].prev,
      doneBtnText: uiTexts[lang].done,
      popoverClass: "driverjs-theme", // Optionales CSS Styling
    });

    tourDriver.drive();
  };

  return (
    <>
      <style jsx>{`
        @keyframes nervous-wiggle {
          0%,
          100% {
            transform: rotate(-3deg) scale(1);
          }
          50% {
            transform: rotate(3deg) scale(1.1);
          }
        }
        .nervous-btn {
          animation: nervous-wiggle 3s ease-in-out infinite;
        }
        .nervous-btn:hover {
          animation: none;
          transform: scale(1.1);
        }
      `}</style>

      <button
        onClick={startTour}
        className="nervous-btn fixed bottom-6 right-6 z-[60] bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-14 h-14 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.6)] flex items-center justify-center font-bold text-2xl border-2 border-white/20 cursor-pointer"
        title="Start Tour"
      >
        ?
      </button>
    </>
  );
}
