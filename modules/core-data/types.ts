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
  title: MatrixText | LocalizedString; // HYBRID: Team vs. Management View OR old format
  description: MatrixText | LocalizedString; // Was genau ist zu tun?
}

// NEU: Phase Names with dual view
export interface PhaseLabel {
  de: { simple: string; pro: string; };
  en: { simple: string; pro: string; };
  es: { simple: string; pro: string; };
}

// NEU: Die Prozess-Gruppe (Der Container)
export interface ProcessGroup {
  phase: "Initiating" | "Planning" | "Executing" | "Monitoring" | "Closing";
  phaseLabel?: PhaseLabel; // OPTIONAL: Team vs. Management labels (for backward compat)
  steps: ProcessStep[];
}

export interface PMOService {
  id: string;

  // Frontend / Soft (Team-View) - HYBRID format
  name: MatrixText | LocalizedString; // simple = Team, pro = Management OR old format
  description: MatrixText | LocalizedString;
  deliverables: (MatrixText | LocalizedString)[];
  kpis: (MatrixText | LocalizedString)[];

  // Backend / Hard (Management-View) - HYBRID format
  businessName?: MatrixText | LocalizedString;
  hardKpis?: (MatrixText | LocalizedString)[];
  roiImpact?: MatrixText | LocalizedString;

  // NEU: Der konkrete Fahrplan (Prozess-Kollektion)
  implementationPlan: ProcessGroup[];

  category: "Strategic" | "Tactical" | "Operational";
  maturityLevels: MaturityLevel[];
}

export interface PMOOutcome {
  id: string;
  name: MatrixText | LocalizedString; // simple = Team, pro = Management OR old format
  description: MatrixText | LocalizedString;
  category: MatrixText | LocalizedString;
  recommendedServiceIds: string[];
}
