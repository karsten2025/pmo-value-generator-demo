// components/DashboardView.tsx
"use client";

import {
  portfolioStats,
  strategyData,
  skillDistribution,
  cultureTrend,
} from "@/modules/core-data/mock-dashboard";

interface DashboardProps {
  lang: "de" | "en" | "es";
  isManagementView: boolean; // Reagiert auf den Schalter!
}

export default function DashboardView({
  lang,
  isManagementView,
}: DashboardProps) {
  const texts = {
    title: isManagementView
      ? "Portfolio Intelligence (Supabase Live)"
      : "Team Health Monitor",
    subtitle: isManagementView
      ? "Aggregated Performance Metrics & ROI Analysis"
      : "Stimmungsbild & Qualitative Entwicklung",

    card1: isManagementView ? "Active Roadmaps" : "Laufende Initiativen",
    card2: isManagementView ? "Total Budget Invest" : "Investierte Energie",
    card3: isManagementView ? "Avg. ROI Factor" : "Wirkungs-Faktor",
    card4: isManagementView ? "Governance Health" : "Team Gesundheit",

    chart1: isManagementView
      ? "Strategic Fit vs. ROI (S-01)"
      : "Sinnhaftigkeit & Wert (S-01)",
    chart2: isManagementView
      ? "Resource Capability Audit (S-10)"
      : "Skill-Level & Balance (S-10)",
    chart3: isManagementView
      ? "Risk & Safety Trend (S-17)"
      : "Psychologische Sicherheit (S-17)",
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* HEADER */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          {texts.title}
        </h2>
        <p className="text-slate-400 mt-2">{texts.subtitle}</p>
      </div>

      {/* KPI CARDS (Top Row) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KpiCard
          label={texts.card1}
          value={portfolioStats.activeInstances}
          sub="Projects"
          color="blue"
        />
        <KpiCard
          label={texts.card2}
          value={isManagementView ? `${portfolioStats.totalBudget}€` : "High"}
          sub="Planned"
          color="indigo"
        />
        <KpiCard
          label={texts.card3}
          value={isManagementView ? `${portfolioStats.avgRoi}x` : "Positive"}
          sub="Forecast"
          color="emerald"
        />
        <KpiCard
          label={texts.card4}
          value={`${portfolioStats.healthScore}%`}
          sub="Score"
          color={portfolioStats.healthScore > 80 ? "green" : "yellow"}
        />
      </div>

      {/* CHARTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* CHART 1: STRATEGY (Bar Chart) */}
        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl">
          <h3 className="text-sm font-bold text-slate-300 mb-6 flex items-center gap-2">
            <span>🎯</span> {texts.chart1}
          </h3>
          <div className="space-y-4">
            {strategyData.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-16 text-xs text-slate-400 text-right">
                  {item.name}
                </div>
                {/* Fit Bar */}
                <div className="flex-1 h-3 bg-slate-700 rounded-full overflow-hidden flex">
                  <div
                    className="h-full bg-blue-500"
                    style={{ width: `${item.fit * 10}%` }}
                  ></div>
                </div>
                {/* ROI Text */}
                <div className="w-20 text-xs font-mono text-emerald-400 text-right">
                  {isManagementView
                    ? `${(item.roi / 1000).toFixed(1)}k€`
                    : "High Val"}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CHART 2: SKILLS (Progress Bars) */}
        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl">
          <h3 className="text-sm font-bold text-slate-300 mb-6 flex items-center gap-2">
            <span>🧩</span> {texts.chart2}
          </h3>
          <div className="space-y-5">
            {skillDistribution.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">{item.skill}</span>
                  <span className="text-slate-500">{item.level}%</span>
                </div>
                <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      item.level < 50 ? "bg-red-500" : "bg-emerald-500"
                    }`}
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CHART 3: CULTURE (Line Chart Simulation via Flex) */}
        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl md:col-span-2">
          <h3 className="text-sm font-bold text-slate-300 mb-6 flex items-center gap-2">
            <span>🛡️</span> {texts.chart3}
          </h3>
          <div className="flex justify-between items-end h-32 px-4 border-b border-slate-600 pb-2">
            {cultureTrend.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 group w-full"
              >
                <div className="relative w-full flex justify-center items-end h-full">
                  <div
                    className="w-4 sm:w-12 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm transition-all group-hover:opacity-80"
                    style={{ height: `${item.safety}%` }}
                  ></div>
                  {/* Tooltip Simulation */}
                  <span className="absolute -top-6 text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.safety}%
                  </span>
                </div>
                <span className="text-xs text-slate-500">{item.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Component für die kleinen Karten
function KpiCard({ label, value, sub, color }: any) {
  return (
    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
      <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
        {label}
      </div>
      <div className={`text-2xl font-bold text-${color}-400`}>{value}</div>
      <div className="text-[10px] text-slate-600 mt-1">{sub}</div>
    </div>
  );
}
