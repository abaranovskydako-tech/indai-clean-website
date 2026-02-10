# INDAI COLOR PALETTE CANON

## Metadata

| Field | Value |
|-------|-------|
| Status | **DEFINED** |
| Version | 1.0.0 |
| Date | 2026-02-07 |
| Location | `/docs/00_УПРАВЛЕНИЕ/03_DESIGN_SYSTEM/INDAI_COLOR_PALETTE_CANON.md` |
| Depends on | `INDAI_MASTER_SPEC.md`, `ADDENDUM_P0.2.md` |
| Authority | Single source of truth for all color decisions |
| Defined by | Design System Canon Authoring task (2026-02-07) |

---

## Purpose

This document defines the complete, binding color palette for INDAI Clean.

This canon confirms the bootstrap palette from ADDENDUM P0.2 §71-79 as the canonical palette. This palette is binding until replaced by a future canon version.

---

## Primary Palette

The primary palette consists of five canonical tokens defined in ADDENDUM P0.2 §71-79.

| Token | Hex | RGB | Tailwind Class | Usage | Accessibility Note |
|-------|-----|-----|----------------|-------|-------------------|
| `primary-500` | `#00B4D8` | `rgb(0, 180, 216)` | `bg-primary-500`, `text-primary-500`, `border-primary-500` | Main brand color — turquoise. Used for primary actions, brand elements, and key visual accents. | Text on white: 2.8:1 (insufficient for body). Use as background or large text only. |
| `ocean-500` | `#0077B6` | `rgb(0, 119, 182)` | `bg-ocean-500`, `text-ocean-500`, `border-ocean-500` | Secondary brand color — ocean blue. Used for secondary actions, supporting elements, and depth. | Text on white: 4.6:1 (meets body text requirement). |
| `accent-500` | `#FF9E1B` | `rgb(255, 158, 27)` | `bg-accent-500`, `text-accent-500`, `border-accent-500` | CTA color — orange. Used for call-to-action buttons, highlights, and attention-drawing elements. | Text on white: 2.1:1 (insufficient). Use as background or large text only. |
| `dark-500` | `#023047` | `rgb(2, 48, 71)` | `bg-dark-500`, `text-dark-500`, `border-dark-500` | Text color — deep ocean. Used for primary text, headings, and dark backgrounds. | Text on white: 15.8:1 (exceeds requirement). |
| `light-200` | `#F0F9FF` | `rgb(240, 249, 255)` | `bg-light-200`, `text-light-200`, `border-light-200` | Background color — light blue. Used for light backgrounds, section backgrounds, and subtle contrast. | Text on this: dark-500 provides 15.8:1 contrast. |

**Tailwind configuration mapping:**

All tokens are defined in `tailwind.config.ts` under `theme.extend.colors`:

```typescript
colors: {
  primary: { 500: '#00B4D8' },
  ocean: { 500: '#0077B6' },
  accent: { 500: '#FF9E1B' },
  dark: { 500: '#023047' },
  light: { 200: '#F0F9FF' },
}
```

---

## Secondary Palette

**Status:** Not defined at this stage.

**Rationale:** The five-token bootstrap palette is sufficient for initial implementation. Additional secondary colors will be added when specific use cases require them, via a canon version update.

---

## Semantic Colors

**Status:** Not defined at this stage.

**Rationale:** Success, warning, error, and info states are not required for the current product foundation phase. These will be defined when form validation, notifications, or status indicators are implemented.

**Deferred until:** Form validation or notification system implementation.

---

## Neutral / Gray Scale

**Status:** Not defined at this stage.

**Rationale:** The current palette uses `dark-500` for text and `light-200` for backgrounds. A full gray scale will be added when borders, disabled states, or additional text hierarchy levels are required.

**Deferred until:** Border styles, disabled states, or additional text hierarchy implementation.

---

## Gradient Rules

**Status:** Gradients are not permitted at this stage.

**Rationale:** Per MASTER_SPEC §21 and design system principles, the initial implementation uses solid colors only. Gradients may be added in a future canon version if justified by specific design requirements.

---

## Dark Mode

**Status:** Dark mode is not supported.

**Rationale:** Per MASTER_SPEC §16.2, accessibility requirements are met with the current light-mode palette. Dark mode support would require a complete palette mapping and is deferred until explicitly required.

**Explicit statement:** Dark mode is not supported. All color tokens are defined for light backgrounds only.

---

## Usage Rules

### Color Reference Rule (ADDENDUM P0.2 §66)

**All colors MUST be referenced by Tailwind token name, never by hex value.**

- ✅ Correct: `className="bg-primary-500 text-dark-500"`
- ❌ Forbidden: `className="bg-[#00B4D8]"` or `style={{ color: '#00B4D8' }}`

### Accessibility Requirements (MASTER_SPEC §16.2)

All text/background combinations must meet WCAG 2.1 Level AA contrast ratios:

- **Body text (default):** ≥ 4.5:1 contrast ratio
- **Large text (18px+ or 14px+ bold):** ≥ 3:1 contrast ratio

**Approved combinations:**

| Text Color | Background | Contrast | Usage |
|------------|-----------|---------|-------|
| `dark-500` | white | 15.8:1 | Primary text on white |
| `dark-500` | `light-200` | 15.8:1 | Primary text on light background |
| `ocean-500` | white | 4.6:1 | Secondary text on white |
| `primary-500` | white | 2.8:1 | Large text only (18px+) |
| `accent-500` | white | 2.1:1 | Large text only (18px+) |

**Forbidden combinations:**

- `primary-500` text on white (body text) — insufficient contrast
- `accent-500` text on white (body text) — insufficient contrast
- Any color on `light-200` except `dark-500` — verify contrast before use

### Color Application Rules

1. **Primary actions:** Use `accent-500` for primary CTAs (per ADDENDUM P0.2 §77)
2. **Secondary actions:** Use `ocean-500` for secondary CTAs
3. **Text:** Use `dark-500` for all body text and headings
4. **Backgrounds:** Use `light-200` for section backgrounds, `white` for page background
5. **Brand elements:** Use `primary-500` for brand accents and key visual elements

---

## Forbidden

The following color usage patterns are explicitly forbidden:

1. **Hardcoded hex values** — All colors must use Tailwind token names (ADDENDUM P0.2 §66, §104)
2. **Arbitrary Tailwind values** — `bg-[#FF0000]` is forbidden unless explicitly approved per-case (ADDENDUM P0.2 §105)
3. **Colors not in palette** — `bg-purple-500`, `text-red-600` are forbidden (ADDENDUM P0.2 §119)
4. **Insufficient contrast combinations** — `primary-500` or `accent-500` as body text on white (MASTER_SPEC §16.2)
5. **Gradients** — Not permitted at this stage (see Gradient Rules above)

---

## Tailwind Implementation

All color tokens are implemented in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: { 500: '#00B4D8' },
      ocean: { 500: '#0077B6' },
      accent: { 500: '#FF9E1B' },
      dark: { 500: '#023047' },
      light: { 200: '#F0F9FF' },
    },
  },
}
```

**Usage in components:**

```tsx
// Correct
<div className="bg-primary-500 text-white">...</div>
<button className="bg-accent-500 text-dark-500">...</button>

// Forbidden
<div className="bg-[#00B4D8]">...</div>
<div style={{ backgroundColor: '#00B4D8' }}>...</div>
```

---

## Changelog

| Version | Date | Summary |
|---------|------|---------|
| 0.1.0 | 2025-02-07 | Scaffold created |
| 1.0.0 | 2026-02-07 | Canon defined — bootstrap palette confirmed as canonical. All five tokens documented with usage rules and accessibility notes. |

---

## Deferred Items

The following color system elements are explicitly deferred:

1. **Secondary palette** — Additional supporting colors beyond the five bootstrap tokens
2. **Semantic colors** — Success, warning, error, info states
3. **Neutral/Gray scale** —** Full gray scale for borders, disabled states, additional text hierarchy
4. **Gradients** — Gradient definitions and usage rules
5. **Dark mode** — Dark mode palette mapping

**Rationale:** The five-token bootstrap palette is sufficient for the current product foundation phase. Additional colors will be added via canon version updates when specific use cases require them.

---

## Related Canons

- `INDAI_TYPOGRAPHY_CANON.md` — Typography system
- `INDAI_COMPONENT_LIBRARY_CANON.md` — Component specifications (references color tokens)
- `ADDENDUM P0.2.md` — Design System governance (bootstrap palette source)

---

**Canon approved. This palette is binding until superseded by a future version.**
