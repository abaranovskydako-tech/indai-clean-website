
# INDAI_SERVICES_PAGES_CANON

**Project:** INDAI Clean  
**Document role:** Canonical structure and rules for service pages  
**Path:** `02_CONTENT_SERVICES/INDAI_SERVICES_PAGES_CANON.md`  
**Status:** CANONICAL — ACTIVE  
**Document-ID:** INDAI-CONTENT-001  
**Version:** 3.0.0  
**Parent:** `00_GOVERNANCE/INDAI_MASTER_SPEC.md` (OVERRIDES THIS DOCUMENT)  
**Last updated:** 2026-02-07  

---

## Changelog

| Version | Date | Summary |
|--------|------|---------|
| 1.0.0 | 2026-02-02 | Initial service page structure (9-block template, Russian) |
| 2.0.0 | 2026-02-06 | Revised as INDAI_SERVICES_PAGES_CANON_v2.md (Russian) |
| 3.0.0 | 2026-02-07 | Consolidated to 7-section canonical structure based on approved reference pages. Rewritten in English per §4. Removed `_v2` from filename. QA extracted to separate document. |

---

## 1. PURPOSE

This document defines the **mandatory structure, rules, and constraints** for all service pages in the INDAI Clean project.

It governs:

- Content structure (section order and requirements)
- Frontmatter schema (extension of MASTER_SPEC §10.2)
- Language and tone rules
- Prohibitions
- Canonical reference pages

⚠️ If any conflict arises with `INDAI_MASTER_SPEC.md`,  
**the master specification always wins** (Hierarchy of Truth).

---

## 2. HIERARCHY

```text
INDAI_MASTER_SPEC.md              ← absolute law
  ↓
INDAI_PRODUCT_COPY.md             ← UVP, CTA, product logic
  ↓
INDAI_SERVICES_PAGES_CANON.md     ← structure & rules (this file)
  ↓
Service content files
(02_CONTENT_SERVICES/content/*.md)
````

---

## 3. REFERENCE PAGES

The following service pages are **approved canonical references**.

All new service pages must be structurally, logically, and tonally equivalent.

| # | Service                     | File                         | Slug                      |
| - | --------------------------- | ---------------------------- | ------------------------- |
| 1 | Промывка теплообменников    | `heat_exchanger_cleaning.md` | `heat-exchanger-cleaning` |
| 2 | Чистка труб и трубопроводов | `pipe_cleaning.md`           | `pipe-cleaning`           |

These files must not be modified without an addendum to this document.

---

## 4. FRONTMATTER SCHEMA

Every service content file **must** include the following frontmatter.

This schema extends MASTER_SPEC §10.2.

```yaml
---
title: "Промывка теплообменников"
slug: "heat-exchanger-cleaning"
description: "Промышленная промывка теплообменников..."
category: "industrial-cleaning"
seo_title: "Промывка теплообменников | INDAI Clean"
seo_description: "Инженерная промывка теплообменников..."
hero_image: "/images/services/heat-exchanger.webp"
og_image: "/images/og/heat-exchanger.jpg"
status: "draft"
created: "2026-02-02"
updated: "2026-02-07"
cta_primary:
  text: "Записаться на тест-очистку"
  cta_id: "test-cleaning"
  form_id: "F1"
cta_secondary:
  text: "Получить инженерный расчёт"
  cta_id: "engineering-estimate"
  form_id: "F2"
---
```

Files missing any required field **must not be deployed**.

---

## 5. CANONICAL PAGE STRUCTURE (MANDATORY)

Every service page body **must** contain exactly these sections in this order.

| # | Section                                       | Purpose                             |
| - | --------------------------------------------- | ----------------------------------- |
| 1 | `# [Название услуги]` + `## Проблема клиента` | Client operational problem          |
| 2 | `## Последствия без очистки`                  | Engineering & economic consequences |
| 3 | `## Метод INDAI`                              | Engineering approach                |
| 4 | `## Почему тест-очистка бесплатна`            | UVP mechanism explanation           |
| 5 | `## Кейсы и цифры`                            | Illustrative engineering cases      |
| 6 | `## Как организуется работа`                  | Process steps                       |
| 7 | `## Следующий шаг`                            | Canonical CTA                       |

Changing order or removing sections is forbidden.

---
## Service Page Model Decision

The INDAI Clean website adopts a **six service pages model** as the primary, client-facing structure.

Each service page is defined by a **real-world client entry point** (object or method), reflecting how industrial clients naturally formulate problems and search for solutions.

The previously defined **engineering task classification** (e.g. cleaning classes, process categories) is preserved and used:
- internally within service page content,
- in workflow descriptions,
- in lead qualification and back-office logic,
- in analytics and reporting.

This approach ensures:
- clarity and accessibility for first-time and non-expert visitors,
- strong SEO and demand capture,
- preservation of engineering rigor without exposing unnecessary abstraction to the client.

Engineering classification **does not define URLs or top-level navigation**, but remains a foundational internal model.

## 6. OPTIONAL SECTION

### Ограничения применимости

May be added **after section 7** if the service has material, environmental, or technical limits.

* 2–4 bullet points
* Honest, neutral tone
* May reference another INDAI service

This section is optional. Making it mandatory requires an addendum.

---

## 7. LANGUAGE AND TONE RULES

### Language

* Page content: **Russian**
* Slugs and filenames: **English, kebab-case**
* Frontmatter keys: **English**

### Tone

| Permitted                   | Forbidden                   |
| --------------------------- | --------------------------- |
| Engineering, neutral        | Marketing persuasion        |
| Client task perspective     | “We are the best”           |
| Facts about method          | Promises of result          |
| “Восстановление параметров” | “Гарантируем эффективность” |

**Test:**
If the text could fit a residential cleaning website — it is wrong.

---

## 8. PROHIBITIONS

### Content

* Guarantees or promises
* Prices, discounts, promotions
* Brand names or model numbers as marketing
* Emotional pressure or urgency
* Residential cleaning language
* Non-canonical CTA text

### Structure & UX

* Changing section order
* Removing mandatory sections
* Hardcoded CTA labels in React
* Lead capture forms (phone/email)
* Pop-ups or callbacks

---

## 9. REGISTERED SERVICE PAGES

| # | Priority | Service                                | File                         | Slug                      | Status    |
| - | -------- | -------------------------------------- | ---------------------------- | ------------------------- | --------- |
| 1 | P0       | Промывка теплообменников               | `heat_exchanger_cleaning.md` | `heat-exchanger-cleaning` | Reference |
| 2 | P0       | Чистка труб и трубопроводов            | `pipe_cleaning.md`           | `pipe-cleaning`           | Reference |
| 3 | P0       | Промывка котлов                        | `boiler_cleaning.md`         | `boiler-cleaning`         | Draft     |
| 4 | P0       | Гидродинамическая очистка оборудования | `hydrodynamic_cleaning.md`   | `hydrodynamic-cleaning`   | Draft     |
| 5 | P0       | Очистка резервуаров и ёмкостей         | `tank_cleaning.md`           | `tank-cleaning`           | Draft     |
| 6 | P0       | Химическая очистка оборудования        | `chemical_cleaning.md`       | `chemical-cleaning`       | Draft     |

---

## 10. CHANGE MANAGEMENT

* Structure changes → addendum required
* New services → register in §9
* CTA changes → update PRODUCT_COPY §7
* Frontmatter changes → MASTER_SPEC addendum
* All changes via PR

---

## 11. SUPERSEDED DOCUMENTS

The following documents are archived in `99_ARCHIVE/`:

* `INDAI_SERVICES_PAGES_CANON_v2.md`
* `INDAI_SERVICE_PAGE_COPY_TEMPLATE.md`

---

**Document approved.**



