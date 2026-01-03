// modules/core-data/mock-dashboard.ts

// Diese Daten simulieren die Aggregation aus Supabase.
// Wir tun so, als hätten wir 12 aktive Service-Instanzen laufen.

export const portfolioStats = {
  activeInstances: 12,
  totalBudget: 450000,
  avgRoi: 3.2, // 320%
  healthScore: 82, // von 100
};

// S01: Strategie-Daten (Aggregiert)
export const strategyData = [
  { name: "Proj A", fit: 9, roi: 45000 },
  { name: "Proj B", fit: 6, roi: 12000 },
  { name: "Proj C", fit: 10, roi: 85000 },
  { name: "Proj D", fit: 4, roi: -5000 },
  { name: "Proj E", fit: 8, roi: 32000 },
];

// S10: HR & Skills (Heatmap Simulation)
export const skillDistribution = [
  { skill: "Frontend", level: 85 }, // hr_skill_match
  { skill: "Backend", level: 60 },
  { skill: "PM Meth.", level: 90 },
  { skill: "Soft Skills", level: 40 }, // hr_chemistry
];

// S14: Change Governance
export const changeStats = {
  approved: 14,
  rejected: 3,
  avgApprovalTime: "1.5 Days", // chg_speed
  mandateLevel: "High", // chg_mandate
};

// S17: Culture & Safety (Trend)
export const cultureTrend = [
  { month: "Jan", safety: 40 }, // esc_safety
  { month: "Feb", safety: 55 },
  { month: "Mar", safety: 65 },
  { month: "Apr", safety: 80 },
];
