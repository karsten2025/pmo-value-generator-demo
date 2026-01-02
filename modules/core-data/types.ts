// modules/core-data/types.ts

// NEU: Ein Typ für mehrsprachige Texte
export interface LocalizedString {
  de: string;
  en: string;
  es: string;
}

// 1. Die Reifegrade
export interface MaturityLevel {
  level: 1 | 2 | 3 | 4 | 5;
  title: LocalizedString; // War vorher string, jetzt LocalizedString
  criteria: LocalizedString; // War vorher string
}

// 2. Die Services
export interface PMOService {
  id: string;
  name: LocalizedString; // Jetzt mehrsprachig
  category: "Strategic" | "Tactical" | "Operational";
  description: LocalizedString; // Jetzt mehrsprachig
  maturityLevels: MaturityLevel[];
}

// 3. Die Outcomes
export interface PMOOutcome {
  id: string;
  name: LocalizedString; // Jetzt mehrsprachig
  description: LocalizedString; // Jetzt mehrsprachig
  category: LocalizedString; // Jetzt mehrsprachig (z.B. "Ressourcen" / "Resources")
  recommendedServiceIds: string[];
}
