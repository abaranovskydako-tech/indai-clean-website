# ADDENDUM P0.3 — Section Order, ResultsSection, CTA Compliance

**Document-ID:** INDAI-GOV-001-P0.3
**Amends:** INDAI_MASTER_SPEC.md v3.0.0
**Date:** 2026-02-12
**Status:** APPROVED

---

## 1. Section Order Change (amends §10.3)

### Rationale

The previous order (Hero → Process → Services) violates B2B conversion logic:
the user sees **how** the company works before understanding **what** it does.
Services must follow Hero immediately to answer the primary question.

Additionally, Trust before Quiz creates stronger conversion impulse —
the user sees guarantees before being asked to take action.

### New canonical order

| # | Component | Purpose | Background |
|---|-----------|---------|------------|
| 1 | HeroSection | Value proposition + primary CTA | dark gradient |
| 2 | ServicesSection | 6 service cards | bg-light-200 |
| 3 | ProcessSection | 4 steps (3 free) | bg-white |
| 4 | ResultsSection | Case results with metrics | bg-light-200 |
| 5 | TrustSection | Guarantees & trust signals | bg-white |
| 6 | QuizSection | Lead capture CTA | bg-dark-500 |
| 7 | GallerySection | Work photos | bg-white |
| 8 | FAQSection | Questions & answers | bg-white |
| 9 | CTASection | Final call-to-action | bg-dark-500 |

Section order changes still require addendum to MASTER_SPEC.

---

## 2. CasesSection replaced by ResultsSection (amends §10.3 #4)

### Rationale

Before/After photo pattern is inappropriate for industrial cleaning B2B:
- Engineers evaluate by metrics (efficiency, cost savings, timeline), not photos
- Before/After is a pattern from residential cleaning and detailing

### Change

- `CasesSection` → **`ResultsSection`** (metric-based case cards)
- `CaseItem` type → **`ResultItem`** type in `types/index.ts`

---

## 3. Forbidden CTA Formulations Fix

Per HOME_PAGE_IMPLEMENTATION_RULES_CANON.md, LEAD_GENERATION_PROTOCOL_CANON.md,
PRE_SALE_ENGINEERING_CANON.md, SERVICE_PAGE_QA_CHECKLIST.md:

| Was (forbidden) | Now (compliant) |
|----------------|-----------------|
| Рассчитать стоимость | Обсудить задачу / Забронировать тест-очистку |
| Калькулятор стоимости | Инженерный расчёт |

### New CTA added
- «Отправить ТЗ» — for hot leads with ready technical specifications

---

END OF ADDENDUM P0.3
