// modules/core-data/types.ts

export interface LocalizedString {
  de: string;
  en: string;
  es: string;
}

export interface MaturityLevel {
  level: 1 | 2 | 3 | 4 | 5;
  title: LocalizedString;
  criteria: LocalizedString;
}

export interface PMOService {
  id: string;

  // EBENE 1: Die "weiche" Frontend-Darstellung (für User/Betriebsrat)
  // Fokus: Gesundheit, Balance, Stabilität
  name: LocalizedString;
  description: LocalizedString;
  deliverables: LocalizedString[];
  kpis: LocalizedString[]; // Hier stehen die "Vital-Werte"

  // EBENE 2: Die "harte" Business-Realität (für den Report/Management)
  // Fokus: Effizienz, ROI, Geld
  businessName?: LocalizedString; // z.B. "Resource Optimization" statt "Balance"
  hardKpis?: LocalizedString[]; // z.B. "FTE Utilization Rate" statt "Team-Stimmung"
  roiImpact?: LocalizedString; // Der monetäre Hebel

  category: "Strategic" | "Tactical" | "Operational";
  maturityLevels: MaturityLevel[];
}

export interface PMOOutcome {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  category: LocalizedString;
  recommendedServiceIds: string[];
}
