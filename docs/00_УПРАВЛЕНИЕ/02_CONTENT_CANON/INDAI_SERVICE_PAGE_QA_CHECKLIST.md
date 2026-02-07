# INDAI_SERVICE_PAGE_QA_CHECKLIST.md

Project: INDAI Clean  
Document role: QA validation checklist for service page content  
Path: `02_CONTENT_SERVICES/INDAI_SERVICE_PAGE_QA_CHECKLIST.md`  
Status: CANONICAL — ACTIVE  
Document-ID: INDAI-CONTENT-002  
Version: 1.0.0  
Parent: `00_GOVERNANCE/INDAI_MASTER_SPEC.md` (OVERRIDES THIS DOCUMENT)  
Last updated: 2026-02-07  
Supersedes: `INDAI_SERVICE_PAGE_COPY_TEMPLATE.md` v1.0 (moved to `99_ARCHIVE/`)

---

## Changelog

| Version | Date | Summary |
|---------|------|---------|
| 1.0.0 | 2026-02-07 | Created from INDAI_SERVICE_PAGE_COPY_TEMPLATE.md. Converted from generation template to QA/validation document. Aligned with 7-section canonical structure (established by approved reference pages). Rewritten in English per §4. Added frontmatter validation. Resolved CTA conflicts with PRODUCT_COPY §7. Resolved UVP conflicts with PRODUCT_COPY §2. |

---

## 1. PURPOSE

This document is a **QA validation checklist** for service page content files in `02_CONTENT_SERVICES/content/`.

It is **not** a generation template. Content is generated using the approved reference pages as structural templates (see §2).

This document validates that generated content:

- Conforms to MASTER_SPEC §10.2 (frontmatter schema)
- Follows the canonical 7-section body structure
- Respects PRODUCT_COPY messaging rules (§2 UVP, §5 tone, §6 structure, §7 CTA)
- Maintains engineering tone and avoids prohibited formulations

---

## 2. CANONICAL STRUCTURE REFERENCE

### 2.1 Approved reference pages (do not modify)

| Service | File | Slug |
|---------|------|------|
| Промывка теплообменников | `heat_exchanger_cleaning.md` | `heat-exchanger-cleaning` |
| Чистка труб и трубопроводов | `pipe_cleaning.md` | `pipe-cleaning` |

All new service pages must be structurally, tonally, and volumetrically equivalent to these reference pages.

### 2.2 Canonical body structure (7 sections, fixed order)

| # | Section heading (Russian) | Function | Source |
|---|--------------------------|----------|--------|
| 1 | `# [Service name]` (H1) | Page title | PRODUCT_COPY §6.1 |
| 2 | `## Проблема клиента` | Client pain points from operational context | PRODUCT_COPY §6.1 |
| 3 | `## Последствия без очистки` | Business consequences of inaction | PRODUCT_COPY §6.2 |
| 4 | `## Метод INDAI` | Engineering approach to the task | PRODUCT_COPY §6.3 |
| 5 | `## Почему тест-очистка бесплатна` | UVP mechanism explanation | PRODUCT_COPY §6.4, §2 |
| 6 | `## Кейсы и цифры` | Illustrative cases with engineering metrics | PRODUCT_COPY §6.5 |
| 7 | `## Как организуется работа` | Process steps (6 stages) | PRODUCT_COPY §6.6 |
| 8 | `## Следующий шаг` | Canonical CTA from frontmatter | PRODUCT_COPY §7 |

Section order changes require addendum to MASTER_SPEC.

### 2.3 Optional section (requires addendum for inclusion)

| Section | Function | Status |
|---------|----------|--------|
| `## Ограничения применимости` | When the service does NOT apply | Not included — requires addendum |
| Safety & Compliance block | HSE principles, regulatory compliance | Not included — requires addendum |

---

## 3. FRONTMATTER VALIDATION

### 3.1 Required fields (per MASTER_SPEC §10.2)

| Field | Type | Rule | Example |
|-------|------|------|---------|
| `title` | string | Russian, page H1 | `"Промывка теплообменников"` |
| `slug` | string | English, kebab-case | `"heat-exchanger-cleaning"` |
| `description` | string | Russian, meta description | `"Промышленная промывка..."` |
| `category` | string | Fixed: `"industrial-cleaning"` | `"industrial-cleaning"` |
| `seo_title` | string | Russian, max 60 chars, ends with `| INDAI Clean` | `"Промывка теплообменников | INDAI Clean"` |
| `seo_description` | string | Russian, max 160 chars | `"Инженерная промывка..."` |
| `hero_image` | string | Path: `/images/services/{slug}.webp` | `"/images/services/heat-exchanger.webp"` |
| `og_image` | string | Path: `/images/og/{slug}.jpg`, 1200×630 | `"/images/og/heat-exchanger.jpg"` |
| `status` | string | `"draft"` or `"published"` | `"draft"` |
| `created` | string | ISO date | `"2026-02-02"` |
| `updated` | string | ISO date | `"2026-02-07"` |

### 3.2 CTA fields (established by reference pages)

| Field | Type | Rule | Example |
|-------|------|------|---------|
| `cta_primary.text` | string | Must be from PRODUCT_COPY §7 canonical list | `"Записаться на тест-очистку"` |
| `cta_primary.cta_id` | string | English, kebab-case | `"test-cleaning"` |
| `cta_primary.form_id` | string | Form identifier | `"F1"` |
| `cta_secondary.text` | string | Must be from PRODUCT_COPY §7 canonical list | `"Получить инженерный расчёт"` |
| `cta_secondary.cta_id` | string | English, kebab-case | `"engineering-estimate"` |
| `cta_secondary.form_id` | string | Form identifier | `"F2"` |

### 3.3 Frontmatter validation checklist

| # | Check | Pass/Fail |
|---|-------|-----------|
| FM1 | All 12 required fields present? | |
| FM2 | `slug` is English, kebab-case? | |
| FM3 | `seo_title` ≤ 60 chars? | |
| FM4 | `seo_description` ≤ 160 chars? | |
| FM5 | `hero_image` path matches `/images/services/{slug}.webp`? | |
| FM6 | `og_image` path matches `/images/og/{slug}.jpg`? | |
| FM7 | `cta_primary.text` is in PRODUCT_COPY §7 canonical list? | |
| FM8 | `cta_secondary.text` is in PRODUCT_COPY §7 canonical list? | |
| FM9 | `status` is `"draft"` (for unpublished) or `"published"`? | |

---

## 4. SECTION-BY-SECTION VALIDATION

### 4.1 H1 — Service name

| # | Check | Criterion |
|---|-------|-----------|
| H1-1 | Matches `title` from frontmatter? | Single source of truth |
| H1-2 | Names the task class, not the method? | ✅ «Промывка котлов» ❌ «Гидродинамическая очистка» |
| H1-3 | No digits, deadlines, "guarantee", "best", "fast"? | Engineering tone |

### 4.2 Проблема клиента

| # | Check | Criterion |
|---|-------|-----------|
| PC1 | Opens with 1–2 sentences establishing the equipment context? | Reference page pattern |
| PC2 | Contains 4–6 symptom bullet points? | Volume equivalence |
| PC3 | Symptoms are from client's operational perspective? | ✅ «Снижение теплообмена» ❌ «Мы решаем проблемы» |
| PC4 | No INDAI self-reference? | Client perspective only |

### 4.3 Последствия без очистки

| # | Check | Criterion |
|---|-------|-----------|
| PB1 | Contains 4–5 consequence bullet points with bold headers? | Reference page pattern |
| PB2 | Consequences tied to business economics (downtime, cost, risk)? | PRODUCT_COPY §4: economics of downtime |
| PB3 | Engineering metrics used as illustration, not as guarantees? | ✅ «расход увеличивается на 15–40%» ❌ «гарантируем снижение на 40%» |
| PB4 | Closes with escalation statement? | Pattern: «Каждый месяц... увеличивает совокупную стоимость проблемы» |

### 4.4 Метод INDAI

| # | Check | Criterion |
|---|-------|-----------|
| MI1 | Opens with individual approach principle (type, contamination, conditions)? | Reference page pattern |
| MI2 | Lists 3–4 specific methods applicable to this service? | Engineering specificity |
| MI3 | No brand names, model numbers? | ❌ «Kärcher HDS 1000 DE», ❌ «Woma, Falch» |
| MI4 | No result promises? | ✅ Fact about method ❌ Promise of outcome |
| MI5 | Closes with safety/compliance statement? | Reference page pattern |

### 4.5 Почему тест-очистка бесплатна

| # | Check | Criterion |
|---|-------|-----------|
| TC1 | Opens with «INDAI проводит бесплатную тест-очистку...»? | UVP alignment (PRODUCT_COPY §2) |
| TC2 | Contains «Это не маркетинговый приём. Это инженерная необходимость»? | Reference page pattern |
| TC3 | Contains 4 bullet points (test shows, result fixed, client sees, payment only)? | Reference page pattern |
| TC4 | Closes with UVP statement: «Вы видите результат до оплаты...»? | PRODUCT_COPY §2 canonical expansions |

### 4.6 Кейсы и цифры

| # | Check | Criterion |
|---|-------|-----------|
| KC1 | Opens with disclaimer: *«Примеры из практики, приведены для иллюстрации типовых результатов.»*? | Legal protection |
| KC2 | Contains exactly 2 cases? | Reference page pattern |
| KC3 | Cases use engineering parameters (pressure, temperature, area, time)? | Not marketing metrics |
| KC4 | No client brand names? | Privacy |
| KC5 | No financial figures (cost, savings, ROI)? | PRODUCT_COPY §5: no prices |
| KC6 | Each case includes: contamination type, before metric, result, method, time? | Reference page pattern |

### 4.7 Как организуется работа

| # | Check | Criterion |
|---|-------|-----------|
| KR1 | Exactly 6 numbered steps? | Reference page pattern |
| KR2 | Step 3 includes «Бесплатная тест-очистка — фиксация результата»? | UVP integration |
| KR3 | No deadlines («за 3 дня», «в течение 24 часов»)? | No urgency |
| KR4 | No prices? | PRODUCT_COPY §5: no prices without context |

### 4.8 Следующий шаг

| # | Check | Criterion |
|---|-------|-----------|
| SS1 | CTA text matches `cta_primary.text` and `cta_secondary.text` from frontmatter? | Single source (§10.1) |
| SS2 | CTA formulations are from PRODUCT_COPY §7 canonical list? | Canonical CTA only |
| SS3 | HTML comment references frontmatter as CTA source? | Implementation contract |
| SS4 | No lead capture forms (name, phone, email)? | Engineering dialogue, not lead capture |
| SS5 | No callback widgets, pop-ups, urgency elements? | PRODUCT_COPY §5 tone |

---

## 5. GLOBAL VALIDATION TESTS

| # | Test | Method | Pass criterion |
|---|------|--------|---------------|
| G1 | Consumer cleaning test | Could this text be placed on a residential cleaning website without changes? | If yes → rewrite |
| G2 | Promise test | Does the text contain a specific result number or the word «гарантия»? | If yes → remove (except §4.6 illustrative cases with disclaimer) |
| G3 | Pressure test | Is there any element accelerating the reader toward action? | If yes → remove |
| G4 | Self-sufficiency test | Is the text understandable without visiting the homepage? | If no → strengthen §4.2 |
| G5 | Order test | All 7 sections + CTA in canonical order? | Must match §2.2 exactly |
| G6 | Frontmatter completeness test | All required fields present and valid? | Must pass all FM1–FM9 |
| G7 | UVP presence test | Does the page contain the free test-cleaning mechanism? | §4.5 must be present and complete |
| G8 | Volume equivalence test | Is section depth comparable to reference pages? | ±20% line count per section |

---

## 6. PERMITTED CTA FORMULATIONS

Source: PRODUCT_COPY §7 (canonical, no additions without addendum).

### Permitted

- Записаться на тест-очистку
- Получить инженерный расчёт
- Запросить аудит
- Показать результат на моём объекте

### Forbidden

- ❌ Купить
- ❌ Заказать сейчас
- ❌ Получить скидку
- ❌ Узнать цену (without object context)
- ❌ Получить цену
- ❌ Заказать услугу
- ❌ Оставить заявку
- ❌ Бесплатная консультация
- ❌ Рассчитать стоимость
- ❌ Описать объект (not in canonical list)
- ❌ Обсудить задачу (not in canonical list)

### CTA discrimination test

If the CTA formulation would work on a residential cleaning website → it is forbidden for INDAI.

---

## 7. TONE RULES (quick reference)

Source: PRODUCT_COPY §5.

| Permitted | Forbidden |
|-----------|-----------|
| Neutral description | Marketing persuasion |
| Client task perspective | "We are the best" perspective |
| Facts about method | Promises of results |
| «Восстановление параметров» | «Гарантируем эффективность» |
| Engineering documentation language | Commercial proposal language |

### Discrimination test

If a formulation could appear in engineering documentation (equipment passport, technical specs, operating procedures) → permitted.  
If it could only appear in a commercial proposal → forbidden.

---

## 8. DOCUMENT RELATIONSHIPS

| Document | Role in validation |
|----------|-------------------|
| `INDAI_MASTER_SPEC.md` | Frontmatter schema §10.2, content rules §10.1 |
| `INDAI_PRODUCT_COPY.md` | UVP §2, tone §5, page structure §6, CTA §7 |
| `INDAI_SERVICES_PAGES_CANON.md` | Service page architecture and constraints |
| `INDAI_TONE_OF_VOICE_CANON.md` | Brand voice rules |
| Reference pages (heat_exchanger, pipe) | Structural and tonal template |
| This document | Validation checklist |

---

## 9. SUPERSEDED DOCUMENT

`INDAI_SERVICE_PAGE_COPY_TEMPLATE.md` v1.0 (2026-02-06) is superseded by this document and must be moved to `99_ARCHIVE/` with header:

```
⚠️ SUPERSEDED by INDAI_SERVICE_PAGE_QA_CHECKLIST.md v1.0.0 (2026-02-07)
Reason: Converted from generation template to QA validation document.
9-block structure replaced by 7-section canonical structure.
```

---

Document approved.  
All service page content is validated exclusively against this checklist.
