# INDAI Clean — Documentation

Governed by: `00_УПРАВЛЕНИЕ/INDAI_MASTER_SPEC.md` (INDAI-GOV-001, v3.0.0)

## Structure

- `00_УПРАВЛЕНИЕ/` — master spec, project status, audit log, changelog
  - `00_CORE/` — core governance sub-documents
  - `01_АРХИТЕКТУРА/` — architecture decisions
  - `02_CONTENT_CANON/` — content governance
  - `03_DESIGN_SYSTEM/` — design system canons
  - `04_LEAD_SYSTEM/` — lead generation logic
- `01_БРЕНД/` — hero copy, design concept, video canon, tone of voice
- `02_КОНТЕНТ_УСЛУГИ/` — service content source files (frontmatter-validated MD)
- `99_АРХИВ/` — deprecated and superseded documents (historical only)

## Active Addenda

| Addendum | Location | Scope |
|----------|----------|-------|
| P0.1 | `00_УПРАВЛЕНИЕ/ADDENDUM_P0.1.md` | No `src/` directory — root-level paths are canonical |
| P0.2 | `00_УПРАВЛЕНИЕ/ADDENDUM_P0.2.md` | Tailwind-only styling, Design System governance |

## Rules

- No files stored directly in `/docs` root (except this README)
- Maximum nesting depth: 3 levels from `/docs` (extensions require justification in MASTER_SPEC)
- Canon documents: `UPPER_SNAKE_CASE.md`
- Content source files: `lower_snake_case.md`
- Files exceeding 500 lines must be split (exception: MASTER_SPEC)
- Superseded documents must be moved to `99_АРХИВ/` with replacement reference
- Canon documents must not be changed without explicit approval

## Hierarchy of Truth

1. `INDAI_MASTER_SPEC.md` + binding addenda
2. Other documents in `00_УПРАВЛЕНИЕ/`
3. Brand canons (`01_БРЕНД/`)
4. Design system and lead system canons (within `00_УПРАВЛЕНИЕ/` sub-folders)
5. Content & service files (`02_КОНТЕНТ_УСЛУГИ/`)
6. Code implementation

Code never overrides documentation.
