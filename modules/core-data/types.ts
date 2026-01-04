// modules/core-data/types.ts

export type MatrixText = {
  de: { simple: string; pro: string; };
  en: { simple: string; pro: string; };
  es: { simple: string; pro: string; };
}

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

// NEU: Definition eines einzelnen Prozess-Schritts
export interface ProcessStep {
  id: string;
  title: LocalizedString;
  description: LocalizedString; // Was genau ist zu tun?
}

// NEU: Die Prozess-Gruppe (Der Container)
export interface ProcessGroup {
  phase: "Initiating" | "Planning" | "Executing" | "Monitoring" | "Closing";
  steps: ProcessStep[];
}

export interface PMOService {
  id: string;

  // Frontend / Soft
  name: LocalizedString;
  description: LocalizedString;
  deliverables: LocalizedString[];
  kpis: LocalizedString[];

  // Backend / Hard
  businessName?: LocalizedString;
  hardKpis?: LocalizedString[];
  roiImpact?: LocalizedString;

  // NEU: Der konkrete Fahrplan (Prozess-Kollektion)
  implementationPlan: ProcessGroup[];

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
