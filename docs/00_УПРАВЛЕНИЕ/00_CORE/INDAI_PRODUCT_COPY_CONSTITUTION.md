# INDAI_PRODUCT_COPY.md

Project: INDAI Clean  
Document role: Product messaging & copy rules  
Path: `03_PRODUCTS/INDAI_PRODUCT_COPY.md`  
Status: CANONICAL  
Document-ID: INDAI-PROD-001  
Version: 2.0.0  
Parent: `00_GOVERNANCE/INDAI_MASTER_SPEC.md` (OVERRIDES THIS DOCUMENT)  
Last updated: 2026-02-07  

---

## Changelog

| Version | Date | Summary |
|---------|------|---------|
| 1.0.0 | 2026-01-28 | Initial canonical release (Russian) |
| 2.0.0 | 2026-02-07 | Rewritten in English per §4 Language Policy. Aligned with MASTER_SPEC v3.0.0. Removed AI behavior section (governed by INDAI_AI_WIDGET_PLACEMENT_CANON.md per §19.1). Added Document-ID. Aligned service page structure with §10.2 frontmatter schema. |

---

## 1. PURPOSE

This document defines:

- INDAI Clean product line and canonical service names
- Permitted messaging and copy formulations
- Copywriting rules and tone of voice
- CTA (Call To Action) standards

⚠️ If any conflict arises with `INDAI_MASTER_SPEC.md`,  
**the master specification always wins** (per §7 Hierarchy of Truth).

---

## 2. CORE VALUE PROPOSITION (UVP)

### Canonical UVP

> **Free test cleaning.  
> Result first — payment after.**

(Russian UI text: «Бесплатная тест-очистка. Сначала результат — потом оплата.»)

### Permitted expansions (Russian UI)

- «Вы видите результат до оплаты»
- «Результат фиксируется в договоре»
- «Оплата — только при соответствии тесту»

### Forbidden formulations

- ❌ «Самые дешёвые» / «Cheapest»
- ❌ «Лучшая цена» / «Best price»
- ❌ «Скидки» / «Discounts»
- ❌ «Акции» / «Promotions»
- ❌ Any mass B2C-style messaging

---

## 3. PRODUCT LINE

### 3.1 Priority P0 (core services — mapped to ServicesSection cards per §10.3)

| # | Service (Russian UI) | Slug (English, kebab-case per §9) |
|---|---------------------|-----------------------------------|
| 1 | Промывка теплообменников | `heat-exchanger-cleaning` |
| 2 | Чистка труб и трубопроводов | `pipe-cleaning` |
| 3 | Промывка котлов | `boiler-cleaning` |
| 4 | Гидродинамическая очистка оборудования | `hydrodynamic-cleaning` |
| 5 | Очистка резервуаров и ёмкостей | `tank-cleaning` |
| 6 | Химическая очистка оборудования | `chemical-cleaning` |

> **Note:** §10.3 requires exactly 6 service cards in ServicesSection.  
> P0 services 1–5 plus P1 service "Химическая очистка" fill this requirement.

### 3.2 Priority P1 (expansion)

| # | Service (Russian UI) | Slug |
|---|---------------------|------|
| 7 | Чистка металлических поверхностей | `metal-surface-cleaning` |
| 8 | Уборка после строительства / ЧП | `post-construction-cleaning` |

### 3.3 Priority P2 (scale — no individual service pages until addendum)

| # | Service (Russian UI) | Notes |
|---|---------------------|-------|
| 9 | Региональные проекты | Requires service page spec |
| 10 | Контрактное обслуживание | Requires service page spec |
| 11 | Инженерный аудит загрязнений | Requires service page spec |

> P2 items do not have service pages or slugs until approved via MASTER_SPEC addendum.

---

## 4. POSITIONING

INDAI Clean is:

- A B2B contractor (not consumer cleaning)
- An engineering company (not a "cleaning service")
- A solution to downtime cost (not "cleanliness for its own sake")
- A measurable result in money, time, and equipment lifespan

Key focus:

> **Economics of downtime, not cleanliness for cleanliness' sake.**

---

## 5. COPYWRITING RULES

### 5.1 Tone of voice

Permitted:
- Engineering
- Business
- Calm
- Confident

Forbidden:
- Advertising noise
- Emotional slogans
- "Hard sell" language
- Abstract promises

> Full tone rules: `01_BRAND/INDAI_TONE_OF_VOICE_CANON.md`

### 5.2 Content sourcing (per MASTER_SPEC §10.1)

- All page content sourced from Markdown files
- React components **must not** contain hardcoded service text
- Service copy lives only in `02_КОНТЕНТ_УСЛУГИ/`
- Brand copy lives only in `01_BRAND/`

---

## 6. SERVICE PAGE CONTENT STRUCTURE

Each service page must contain these content sections:

| # | Section | Description |
|---|---------|-------------|
| 1 | Client problem | What pain does the client experience? |
| 2 | Consequences without cleaning | What happens if they don't act? |
| 3 | INDAI method | How INDAI solves this specifically |
| 4 | Why test cleaning is free | Explain the UVP mechanism |
| 5 | Cases / numbers | Measurable results, before/after |
| 6 | Call to action | Canonical CTA (see §7 below) |

### Frontmatter requirement (per MASTER_SPEC §10.2)

Every service content file in `02_КОНТЕНТ_УСЛУГИ/` **must** include the mandatory frontmatter schema defined in MASTER_SPEC §10.2. Files missing required fields **must not** be deployed.

---

## 7. CANONICAL CTAs

### Permitted CTAs (Russian UI text)

- Записаться на тест-очистку
- Получить инженерный расчёт
- Запросить аудит
- Показать результат на моём объекте

### Forbidden CTAs

- ❌ Купить
- ❌ Заказать сейчас
- ❌ Получить скидку
- ❌ Узнать цену (without object context)

### CTA tracking (per MASTER_SPEC §18.2)

All CTA clicks must fire the `click_cta` analytics event with `cta_id` and `section` parameters.

---

## 8. AI COMMUNICATION

> **Governance note:** All AI widget behavior, placement, and interaction rules  
> are defined exclusively in `03_PRODUCTS/INDAI_AI_WIDGET_PLACEMENT_CANON.md`  
> per MASTER_SPEC §19.1.

This document provides only **copy constraints** for AI responses:

- AI assistant must use only formulations from this document
- AI must always lead toward test cleaning or audit
- AI must not discuss pricing without object context
- AI must not promise results without a test

For technical constraints (lazy-load, bundle size, fallback, error state),  
see MASTER_SPEC §19.2–19.3.

---

## 9. ENFORCEMENT

This document is mandatory for:

- All user-facing text on the website
- All AI agent responses (copy only — behavior in AI Widget Canon)
- All SEO content (titles, descriptions per §14.1)
- All external contractors producing content

Changes to this document require a PR with MASTER_SPEC compliance check.

---

## 10. DOCUMENT RELATIONSHIPS

| Document | Defines |
|----------|---------|
| `INDAI_MASTER_SPEC.md` | Architecture, strategy, rules, hierarchy |
| `INDAI_PRODUCT_COPY.md` (this file) | What and how we communicate about products |
| `INDAI_AI_WIDGET_PLACEMENT_CANON.md` | AI widget behavior and placement |
| `INDAI_TONE_OF_VOICE_CANON.md` | Brand voice and tone rules |
| `INDAI_SERVICES_PAGES_CANON.md` | Service page structure and rendering rules |

---

Document approved.  
INDAI Clean operates exclusively under this product model.
