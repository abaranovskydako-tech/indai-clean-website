# INDAI MASTER SPEC — ADDENDUM P0.2

## Metadata

| Field | Value |
|-------|-------|
| Status | **CANONICAL — BINDING** |
| Date | 2025-02-07 |
| Location | `/docs/00_GOVERNANCE/ADDENDUM_P0.2.md` |
| Depends on | `INDAI_MASTER_SPEC.md`, `ADDENDUM_P0.1.md` |
| Authority | Equal to MASTER_SPEC within declared scope |

---

## Purpose

This addendum establishes:

1. **Tailwind CSS** as the single permitted styling layer for all frontend code.
2. **Design System** (`/docs/05_DESIGN_SYSTEM/*`) as the canonical source of all UI decisions.
3. Explicit rules for what constitutes a styling violation.

---

## Resolution (BINDING)

### Canonical styling files

| File | Role | Authority |
|------|------|-----------|
| `tailwind.config.ts` | Token definitions (colors, spacing, fonts, breakpoints) | Single source of truth for design tokens |
| `app/globals.css` | Tailwind directives + base resets only | No component styles allowed here |
| `/docs/05_DESIGN_SYSTEM/*` | Design decisions, component specs, usage rules | Governs all UI implementation |

### Canonical utility files (styling-related)

| File | Role | Authority |
|------|------|-----------|
| `lib/utils.ts` | `cn()` helper for conditional Tailwind classes | **REQUIRED** — must exist in every environment |

**Rules:**
- `cn()` is the only permitted method for conditional class composition
- Absence of `lib/utils.ts` constitutes a styling violation (🔴 Critical)
- Replacement of `cn()` with ad-hoc logic (template literals, manual concatenation, `clsx` without `twMerge`) constitutes a styling violation (🔴 Critical)

### Mandatory Design System documents

The following documents MUST exist in `/docs/05_DESIGN_SYSTEM/`. Any UI implementation is **blocked** until the relevant document is present.

| Document | Status | Governs |
|----------|--------|---------|
| `INDAI_COLOR_PALETTE_CANON.md` | 🔴 Required | All color usage, palette extensions, dark/light modes |
| `INDAI_TYPOGRAPHY_CANON.md` | 🔴 Required | Font families, sizes, weights, line-heights, heading hierarchy |
| `INDAI_COMPONENT_LIBRARY_CANON.md` | 🔴 Required | Button, Card, Input, Badge — props, variants, states, spacing |
| `INDAI_SPACING_LAYOUT_CANON.md` | 🟡 Recommended | Grid, containers, section padding, breakpoint behavior |
| `INDAI_ICONOGRAPHY_CANON.md` | 🟡 Recommended | Icon set, sizes, usage rules (Lucide subset) |

**Rules:**
- If a 🔴 Required document is missing → CloudCode MUST flag it in the Readiness Report as ❌ Blocked
- No component may be implemented without a matching entry in `INDAI_COMPONENT_LIBRARY_CANON.md`
- No color may be added to `tailwind.config.ts` without prior entry in `INDAI_COLOR_PALETTE_CANON.md`
- No font/size decision may be made without `INDAI_TYPOGRAPHY_CANON.md`

### Canonical color palette

All colors MUST be referenced by Tailwind token name, never by hex value.

The **single source of truth** for the color palette is:
`/docs/05_DESIGN_SYSTEM/INDAI_COLOR_PALETTE_CANON.md`

⚠️ Until `INDAI_COLOR_PALETTE_CANON.md` is created, the following **bootstrap palette** applies as a temporary binding reference:

| Token | Hex | Usage |
|-------|-----|-------|
| `primary-500` | `#00B4D8` | Main brand — turquoise |
| `ocean-500` | `#0077B6` | Secondary — ocean blue |
| `accent-500` | `#FF9E1B` | CTAs — orange |
| `dark-500` | `#023047` | Text — deep ocean |
| `light-200` | `#F0F9FF` | Backgrounds — light blue |

**Once `INDAI_COLOR_PALETTE_CANON.md` exists, this bootstrap table is void.** The canon document becomes the only authority.

Adding, renaming, or modifying tokens requires either:
- An update to `INDAI_COLOR_PALETTE_CANON.md`, or
- A new ADDENDUM / MASTER_SPEC revision (if the canon doc does not yet exist).

---

## Binding Rules

### REQUIRED:

- ✅ All styling via Tailwind utility classes only
- ✅ Conditional classes via `cn()` helper (from `lib/utils.ts`)
- ✅ Colors referenced by token name (`text-primary-500`, `bg-accent-500`)
- ✅ All UI components must conform to `/docs/05_DESIGN_SYSTEM/*`
- ✅ New components must be validated against Design System before merge

### FORBIDDEN:

- ❌ Inline styles (`style={{ }}`) — zero tolerance
- ❌ CSS Modules (`.module.css`)
- ❌ Styled-components, Emotion, or any CSS-in-JS library
- ❌ Hardcoded hex/rgb/hsl values in JSX or CSS
- ❌ Tailwind arbitrary values (`bg-[#FF0000]`, `w-[237px]`) unless explicitly approved per-case
- ❌ Component styles in `globals.css` (base resets and directives only)
- ❌ UI decisions not traceable to Design System documentation

---

## Violation Definition

Any of the following constitutes a **styling violation**:

| Violation | Example | Severity |
|-----------|---------|----------|
| Inline style attribute | `<div style={{ color: 'red' }}>` | 🔴 Critical |
| Hardcoded color value | `className="text-[#00B4D8]"` | 🔴 Critical |
| Color not in palette | `className="bg-purple-500"` | 🔴 Critical |
| CSS Module usage | `import styles from './X.module.css'` | 🔴 Critical |
| Arbitrary spacing without justification | `className="mt-[13px]"` | 🟡 Warning |
| Component without Design System reference | New `<Card>` with no spec source | 🟡 Warning |
| Missing `lib/utils.ts` or `cn()` | `className={`foo ${bar}`}` instead of `cn()` | 🔴 Critical |

CloudCode and all AI agents MUST flag violations immediately upon detection.

---

## Scope of Application

This addendum applies to:

| Context | Applies |
|---------|---------|
| All files in `app/` | ✅ |
| All files in `components/` | ✅ |
| All AI-generated code (CloudCode, Cursor, any LLM) | ✅ |
| All PR reviews and audits | ✅ |
| CI/CD lint checks (when implemented) | ✅ |
| Backend / API routes (non-UI code) | ❌ Not applicable |

---

## Expiration

This addendum remains valid until explicitly revoked by a newer MASTER_SPEC version or superseding ADDENDUM.
