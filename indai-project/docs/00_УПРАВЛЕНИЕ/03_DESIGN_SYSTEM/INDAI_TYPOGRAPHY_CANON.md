# INDAI TYPOGRAPHY CANON

## Metadata

| Field | Value |
|-------|-------|
| Status | **DEFINED** |
| Version | 1.0.0 |
| Date | 2026-02-07 |
| Location | `/docs/00_УПРАВЛЕНИЕ/03_DESIGN_SYSTEM/INDAI_TYPOGRAPHY_CANON.md` |
| Depends on | `INDAI_MASTER_SPEC.md`, `ADDENDUM_P0.2.md` |
| Authority | Single source of truth for all typography decisions |
| Defined by | Design System Canon Authoring task (2026-02-07) |

---

## Purpose

This document defines the complete, binding typography system for INDAI Clean.

No font, size, weight, or line-height decision may be made without this document.

---

## Font Families

### Primary Font (Body and Headings)

**Font stack:** System font stack optimized for Russian (Cyrillic) text.

**Tailwind configuration:**

```typescript
fontFamily: {
  sans: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ],
}
```

**Rationale:**
- System fonts load instantly (no external resources) — per MASTER_SPEC §20.3: no render-blocking external resources
- Excellent Cyrillic support across all listed fonts
- Zero bundle size impact
- Consistent with minimal infrastructure approach

**Heading font:** Same as body (no separate heading font family).

**Mono font:** Not defined at this stage. Deferred until code blocks or technical content require it.

---

## Base Typography

### Body Text

| Property | Value | Tailwind Class | Notes |
|----------|-------|----------------|-------|
| Font size | `1rem` (16px) | `text-base` | Base size for all body text |
| Line height | `1.5` (24px) | `leading-6` | 1.5× base size for readability |
| Font weight | `400` (normal) | `font-normal` | Default body weight |
| Letter spacing | `0` (normal) | `tracking-normal` | No custom tracking |

**Accessibility compliance:** 16px base size meets MASTER_SPEC §16.2 requirement for body text (≥4.5:1 contrast applies).

**Paragraph spacing:** `1rem` (16px) between paragraphs — use Tailwind `space-y-4` or manual `mb-4`.

---

## Heading Hierarchy

### H1 — Page Title

| Property | Value | Tailwind Class | Notes |
|----------|-------|----------------|-------|
| Font size | `2.25rem` (36px) | `text-4xl` | One per page (MASTER_SPEC §14.1) |
| Line height | `1.2` | `leading-tight` | Tighter for large headings |
| Font weight | `700` (bold) | `font-bold` | Strong visual hierarchy |
| Letter spacing | `-0.025em` | `tracking-tight` | Slight negative tracking for large text |

**Usage:** Page titles only. Must be unique per page (MASTER_SPEC §14.1).

**Accessibility:** Large text (36px) — ≥3:1 contrast requirement applies.

---

### H2 — Section Headings

| Property | Value | Tailwind Class | Notes |
|----------|-------|----------------|-------|
| Font size | `1.875rem` (30px) | `text-3xl` | Section-level hierarchy |
| Line height | `1.3` | `leading-snug` | Balanced for section headings |
| Font weight | `600` (semibold) | `font-semibold` | Distinct from h1 but prominent |
| Letter spacing | `0` (normal) | `tracking-normal` | Normal tracking |

**Usage:** Section headings within pages (e.g., "Услуги", "Метод INDAI").

---

### H3 — Sub-section Headings

| Property | Value | Tailwind Class | Notes |
|----------|-------|----------------|-------|
| Font size | `1.5rem` (24px) | `text-2xl` | Sub-section level |
| Line height | `1.4` | `leading-relaxed` | Slightly relaxed for readability |
| Font weight | `600` (semibold) | `font-semibold` | Same weight as h2 |
| Letter spacing | `0` (normal) | `tracking-normal` | Normal tracking |

**Usage:** Sub-sections within major sections.

---

### H4–H6

**Status:** Not defined at this stage.

**Rationale:** Current content structure (service pages, homepage sections) uses h1–h3 only. H4–H6 will be defined when content requires deeper heading hierarchy.

**Deferred until:** Content requires h4–h6 headings.

---

## Font Weights

### Permitted Weights

| Weight | Value | Tailwind Class | Usage |
|--------|-------|----------------|-------|
| Normal | `400` | `font-normal` | Body text, default |
| Semibold | `600` | `font-semibold` | H2, H3 headings |
| Bold | `700` | `font-bold` | H1 headings, emphasis |

**Forbidden weights:** Light (300), Medium (500), Extrabold (800), Black (900) — not permitted at this stage.

**Rationale:** Three weights provide sufficient hierarchy without visual noise. Additional weights may be added via canon update if justified.

---

## Line Heights

Line heights are defined per text size (see Heading Hierarchy and Base Typography above).

**General rule:****
- Headings: Tighter line heights (1.2–1.4) for visual cohesion
- Body text: Standard line height (1.5) for readability
- All values must meet or exceed 1.2× font size for accessibility

---

## Letter Spacing

**Default:** `0` (normal) — no custom tracking for body text or most headings.

**Exception:** H1 uses `-0.025em` (slight negative tracking) to improve visual balance at large sizes.

**Rationale:** Russian (Cyrillic) text does not require letter spacing adjustments for readability. Custom tracking is minimal and used only for large headings.

---

## Responsive Typography

**Status:** Not implemented at this stage.

**Rationale:** Base typography scales are defined for desktop. Responsive scaling (smaller on mobile, larger on desktop) will be added when mobile-specific requirements are identified.

**Deferred until:** Mobile design requirements are defined.

**Explicit statement:** All typography values are defined for desktop viewport. Mobile adjustments will be added via canon update.

---

## Russian Language Considerations

### Cyrillic Font Support

**Font stack selection:** All fonts in the system stack (Apple System, Segoe UI, Roboto, Helvetica Neue, Arial) have excellent Cyrillic character support.

**No additional configuration required** for Cyrillic text rendering.

### Hyphenation

**Status:** Not configured at this stage.

**Rationale:** CSS hyphenation requires language-specific rules and may impact performance. Deferred until text layout issues are identified.

**Deferred until:** Text layout or readability issues require hyphenation.

### Word Break

**Status:** Default browser behavior.

**Rationale:** System fonts handle Russian word breaking correctly. No custom `word-break` rules required.

---

## Forbidden

The following typography patterns are explicitly forbidden:

1. **Decorative fonts** — Script, display, or decorative typefaces (per HERO_DESIGN_CONCEPT_CANON §4.3)
2. **Font sizes not in scale** — Custom sizes outside defined hierarchy (h1: 36px, h2: 30px, h3: 24px, body: 16px)
3. **Font weights not permitted** — Light (300), Medium (500), Extrabold (800), Black (900)
4. **External font loading** — Google Fonts or other external fonts without `next/font` optimization (MASTER_SPEC §20.3)
5. **Inline font definitions** — `style={{ fontFamily: '...' }}` or CSS `@font-face` without canon update
6. **Creative typography** — Decorative effects, text shadows, transforms (per HERO_DESIGN_CONCEPT_CANON §4.3)

---

## Tailwind Implementation

### Configuration

Add to `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ],
    },
    fontSize: {
      // Custom sizes if needed, otherwise use Tailwind defaults
    },
  },
}
```

### Usage in Components

```tsx
// H1
<h1 className="text-4xl font-bold leading-tight tracking-tight text-dark-500">...</h1>

// H2
<h2 className="text-3xl font-semibold leading-snug text-dark-500">...</h2>

// H3
<h3 className="text-2xl font-semibold leading-relaxed text-dark-500">...</h3>

// Body
<p className="text-base font-normal leading-6 text-dark-500">...</p>
```

---

## Changelog

| Version | Date | Summary |
|---------|------|---------|
| 0.1.0 | 2025-02-07 | Scaffold created |
| 1.0.0 | 2026-02-07 | Canon defined — system font stack, base typography, h1–h3 hierarchy, three font weights. Responsive typography and h4–h6 deferred. |

---

## Deferred Items

The following typography system elements are explicitly deferred:

1. **H4–H6 headings** — Deeper heading hierarchy not required for current content
2. **Responsive typography** — Mobile scaling adjustments
3. **Caption / small text styles** — Not required for current content
4. **Mono font family** — Code blocks and technical content not yet implemented
5. **Hyphenation rules** — CSS hyphenation configuration
6. **Dark mode typography** — Dark mode not supported (see COLOR_PALETTE_CANON)

**Rationale:** The defined typography system (system fonts, base + h1–h3, three weights) is sufficient for the current product foundation phase. Additional typography features will be added via canon version updates when content or design requirements demand them.

---

## Related Canons

- `INDAI_COLOR_PALETTE_CANON.md` — Color tokens (text colors: `dark-500`)
- `INDAI_COMPONENT_LIBRARY_CANON.md` — Component specifications (references typography)
- `ADDENDUM P0.2.md` — Design System governance
- `INDAI_HERO_DESIGN_CONCEPT_CANON.md` — Hero typography rules (§4.3)

---

**Canon approved. This typography system is binding until superseded by a future version.**
