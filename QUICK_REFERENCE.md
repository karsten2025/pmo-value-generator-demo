# 🎯 PMO Value Generator: Quick Reference Card

## Kern-Konzept

```
USER wählt OUTCOME → System empfiehlt SERVICE → User navigiert PROCESS GROUPS
     ↓                      ↓                          ↓
   O-01, O-06, O-18    S-01, S-10, S-14, S-17    Initiating → Closing
                            ↓
                     User wählt METRIKEN aus (Tailoring)
                            ↓
                     Dashboard wird generiert (Live)
```

---

## 📊 Die 3x4 Matrix (Outcomes x Services)

| Outcome | Service(s) | OPM Layer | Metriken-Fokus |
|---------|-----------|-----------|----------------|
| **O-06**: Sinnvolle Projekte priorisieren | **S-01** | Strategisch | Business Case, Strategic Fit, ROI, Benefits |
| **O-18**: Planungssicherheit gewinnen | **S-14 + S-17** | Taktisch | Change Requests, Risk Register, Issue SLA |
| **O-01**: Fachkräfte finden & halten | **S-10** | Operational | Skills Gap, Team Formation, Capacity, Morale |

---

## 🔄 Die 5 Process Groups (PMBOK)

### 1️⃣ INITIATING (Start)
**Frage:** "Warum machen wir das? Wer ist dabei?"  
**Metriken:** Business Case, Strategic Fit, Stakeholder Map, Team Formation  
**Output:** Project Charter, Business Case, Initial Team

### 2️⃣ PLANNING (Planung)
**Frage:** "Was genau? Wie lange? Wie teuer?"  
**Metriken:** WBS, Budget, Schedule, Risk Register, Resource Plan  
**Output:** Project Plan, Budget, Schedule Baseline

### 3️⃣ EXECUTING (Umsetzung)
**Frage:** "Schaffen wir es? Wie geht's dem Team?"  
**Metriken:** Deliverables, Sprint Burndown, Defect Rate, Team Morale  
**Output:** Deliverables, Change Requests, Team Performance

### 4️⃣ MONITORING & CONTROLLING (Steuerung)
**Frage:** "Sind wir on track? Müssen wir steuern?"  
**Metriken:** SPI, CPI, Cycle Time, Risk Exposure, Quality Metrics  
**Output:** Performance Reports, Corrective Actions

### 5️⃣ CLOSING (Abschluss)
**Frage:** "Was haben wir erreicht? Was lernen wir?"  
**Metriken:** Benefits Realization, Actual ROI, CSAT, Lessons Learned  
**Output:** Final Report, Benefits Measurement, Knowledge Base

---

## 🎨 Input-Typen (Metrik-Erfassung)

| Typ | Symbol | Verwendung | Beispiel |
|-----|--------|------------|----------|
| `currency` | 💰 | Budget, ROI, Kosten | 450.000 € |
| `rating_10` | 🎯 | Strategic Fit, CSAT | 8/10 ⭐⭐⭐⭐⭐⭐⭐⭐ |
| `rating_5` | ❤️ | Team Morale, Quality | 4/5 ♥♥♥♥ |
| `slider_percent` | 📊 | Completion, Capacity | 75% ━━━●━━━ |
| `traffic_light` | 🚦 | Status, Health | 🟢 🟡 🔴 |
| `number` | # | Count, Days, Index | 42 |
| `date` | 📅 | Deadlines, Milestones | 2026-12-31 |
| `select` | ▼ | Categories, Options | "Wöchentlich" |
| `text` | ✏️ | Names, Short Desc | "John Doe" |
| `textarea` | 📝 | Long Desc, Benefits | "Lorem ipsum..." |

---

## 🏗️ Architektur-Überblick

```
┌─────────────────────────────────────────────────────────┐
│                    FRONTEND (Next.js)                   │
├─────────────────────────────────────────────────────────┤
│  page.tsx          │ Main Entry Point                   │
│  DashboardView     │ Portfolio Visualizations           │
│  HybridTailoring   │ Metric Selection UI                │
│  OnboardingTour    │ User Guidance                      │
└─────────────────────────────────────────────────────────┘
           ↕ (React State + Supabase Client)
┌─────────────────────────────────────────────────────────┐
│                  DATA LAYER (TypeScript)                │
├─────────────────────────────────────────────────────────┤
│  types.ts          │ Interfaces (PMOService, etc.)      │
│  data.ts           │ Services + Outcomes                │
│  roadmap-metrics   │ Extended: 62 Metriken (5 Groups)   │
│  mock-dashboard    │ Sample Data (Portfolio Stats)      │
└─────────────────────────────────────────────────────────┘
           ↕ (API Calls + Real-time Subscriptions)
┌─────────────────────────────────────────────────────────┐
│                  BACKEND (Supabase)                     │
├─────────────────────────────────────────────────────────┤
│  metric_library    │ 62 Metric Definitions              │
│  projects          │ User's Projects                    │
│  metric_selections │ User's Tailoring Choices           │
│  metric_values     │ Live Data (Time-series)            │
│  dashboards        │ Saved Dashboard Configs            │
│  benefits_tracking │ OPM: Benefits Realization          │
│  lessons_learned   │ Knowledge Base                     │
└─────────────────────────────────────────────────────────┘
```

---

## 🔗 Key Files & Verantwortlichkeiten

| Datei | Zweck | Status |
|-------|-------|--------|
| `modules/core-data/types.ts` | TypeScript Interfaces | ✅ Vorhanden |
| `modules/core-data/data.ts` | Services & Outcomes (728 Zeilen) | ✅ Vorhanden |
| `modules/core-data/roadmap-metrics.ts` | Legacy (12 Metriken) | ✅ Vorhanden |
| **`modules/core-data/roadmap-metrics-extended.ts`** | **NEU: 62 Metriken (alle 5 Groups)** | ✅ **Erstellt** |
| `components/HybridTailoringGenerator.tsx` | Metric Selection UI | ✅ Vorhanden |
| `components/DashboardView.tsx` | Portfolio Dashboard | ✅ Vorhanden |
| `app/page.tsx` | Main Entry (541 Zeilen) | ✅ Vorhanden |
| **`supabase_schema.sql`** | **Database Schema (13 Tables)** | ✅ **Erstellt** |
| **`PROCESS_METRICS_MAPPING.md`** | **Dokumentation** | ✅ **Erstellt** |
| **`METRICS_INVENTORY.md`** | **Vollständige Inventur** | ✅ **Erstellt** |

---

## 📚 OPM Standard Domains → Metriken

| OPM Domain | Fokus | Beispiel-Metriken |
|------------|-------|-------------------|
| **Strategy** | Langfristige Ausrichtung | Strategic Fit, Benefits Realization, User Adoption |
| **Portfolio** | Projektauswahl & Budget | Business Case ROI, Budget Allocation, Portfolio Health |
| **Program** | Koordination mehrerer Projekte | Program Dependencies, Synergy Realization |
| **Project** | Einzelprojekt-Durchführung | SPI, CPI, WBS, Schedule, Deliverables |
| **Enablers** | Organisatorische Fähigkeiten | Skills Gap, Decision Latency, Lessons Learned |

---

## 🎯 PMBOK Knowledge Areas → Services

| Knowledge Area | S-01 | S-10 | S-14 | S-17 |
|----------------|------|------|------|------|
| Integration | ✅ | | ✅ | |
| Scope | ✅ | | | |
| Schedule | ✅ | | | |
| Cost | ✅ | | | |
| Quality | ✅ | | | |
| Resource | | ✅ | | |
| Communication | ✅ | ✅ | | |
| Risk | | | | ✅ |
| Procurement | | ✅ | | |
| Stakeholder | ✅ | | | ✅ |

---

## 🚀 Implementation Checklist

### Phase 1: Foundation (DONE ✅)
- [x] Define all 62 metrics (`roadmap-metrics-extended.ts`)
- [x] Create Supabase schema (`supabase_schema.sql`)
- [x] Document structure (`PROCESS_METRICS_MAPPING.md`)
- [x] Inventory all elements (`METRICS_INVENTORY.md`)

### Phase 2: Backend Setup (NEXT 🔄)
- [ ] Deploy Supabase project
- [ ] Run schema migration
- [ ] Seed `metric_library` table (62 rows)
- [ ] Test API endpoints
- [ ] Setup Row-Level Security (RLS)

### Phase 3: Frontend Extensions (UPCOMING ⏳)
- [ ] Create `ProcessGroupTabs.tsx` Component
- [ ] Extend `HybridTailoringGenerator.tsx` (all 5 groups)
- [ ] Build Dashboard Widgets (Charts)
- [ ] Implement Real-time Updates (Supabase Subscriptions)

### Phase 4: Integration (FUTURE 🔮)
- [ ] Connect Frontend ↔ Supabase
- [ ] User Authentication (Supabase Auth)
- [ ] Multi-Tenancy (Organizations)
- [ ] Export/Import (CSV, PDF)

### Phase 5: Intelligence (VISION 🌟)
- [ ] Maturity Assessment Algorithm
- [ ] Recommendation Engine
- [ ] Benchmarking (Industry Data)
- [ ] Predictive Analytics (ML)

---

## 🎓 Begriffe & Abkürzungen

| Begriff | Bedeutung |
|---------|-----------|
| **PMBOK** | Project Management Body of Knowledge (PMI Standard) |
| **OPM** | Organizational Project Management (PMI Standard) |
| **SPI** | Schedule Performance Index (EV / PV) |
| **CPI** | Cost Performance Index (EV / AC) |
| **EV** | Earned Value (geleistete Arbeit) |
| **PV** | Planned Value (geplante Arbeit) |
| **AC** | Actual Cost (tatsächliche Kosten) |
| **WBS** | Work Breakdown Structure |
| **ROI** | Return on Investment |
| **CSAT** | Customer Satisfaction Score |
| **NPS** | Net Promoter Score |
| **DoD** | Definition of Done |
| **CFD** | Cumulative Flow Diagram |
| **WIP** | Work in Progress |
| **SLA** | Service Level Agreement |

---

## 💡 Best Practices

### Metric Selection (User Tailoring)
✅ **DO:**
- Start with 3-5 Metriken pro Process Group
- Mix Classical + Agile für Hybrid-Approach
- Wähle Metriken basierend auf Maturity Level
- Fokussiere auf **actionable** Metriken

❌ **DON'T:**
- Nicht alle 62 Metriken auf einmal aktivieren
- Nicht nur "Vanity Metrics" (z.B. nur Currency)
- Nicht Metriken ohne klare Verantwortung

### Dashboard Design
✅ **DO:**
- Nutze Traffic Lights (🟢🟡🔴) für schnelle Übersicht
- Zeige Trends über Zeit (nicht nur Snapshots)
- Dual-View: Team-View (Empathie) + Mgmt-View (Hard Facts)

❌ **DON'T:**
- Nicht zu viele Charts auf einer Seite
- Nicht unverständliche Fachbegriffe ohne Erklärung

### Data Quality
✅ **DO:**
- Regelmäßige Updates (z.B. wöchentlich)
- Validation durch verantwortliche Person
- Kommentare für Kontext (warum ist SPI < 1?)

❌ **DON'T:**
- Nicht alte, unvalidierte Daten im Dashboard
- Nicht "Schönfärben" von kritischen Metriken

---

## 🌍 Multilingual Support

Alle Metriken sind in **3 Sprachen** verfügbar:
- 🇩🇪 **Deutsch** (Team-View fokussiert)
- 🇬🇧 **English** (International Standard)
- 🇪🇸 **Español** (Lateinamerika-Expansion)

**Struktur:**
```typescript
label: {
  de: "💰 Geldwerter Vorteil (ROI)",
  en: "💰 Financial Benefit (ROI)",
  es: "💰 Beneficio Financiero"
}
```

---

## 📞 Support & Resources

- **Dokumentation:** `PROCESS_METRICS_MAPPING.md`
- **Inventur:** `METRICS_INVENTORY.md`
- **Schema:** `supabase_schema.sql`
- **Code:** `roadmap-metrics-extended.ts`
- **PMI Standards:** `/knowledge_base/` (PDFs)

---

## 🎉 Next Steps

1. **Review** diese Quick Reference Card
2. **Deploy** Supabase Schema
3. **Extend** Frontend UI (Process Group Tabs)
4. **Test** mit echten Projekt-Daten
5. **Iterate** basierend auf User-Feedback

---

**Version:** 1.0  
**Datum:** 2026-01-04  
**Autor:** PMO Value Generator Team  
**Status:** 🚀 Ready for Implementation

