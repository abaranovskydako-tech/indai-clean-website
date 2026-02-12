# INDAI_HERO_DESIGN_CONCEPT_CANON.md

Project: INDAI Clean  
Document role: Hero block design concept (no mockups)  
Path: `01_BRAND/INDAI_HERO_DESIGN_CONCEPT_CANON.md`  
Status: CANONICAL — ACTIVE  
Document-ID: INDAI-BRAND-002  
Version: 2.0.0  
Parent: `00_GOVERNANCE/INDAI_MASTER_SPEC.md` (OVERRIDES THIS DOCUMENT)  
Last updated: 2026-02-07  

---

## Changelog

| Version | Date | Summary |
|---------|------|---------|
| 1.0.0 | 2026-01-30 | Initial canonical release (Russian) |
| 2.0.0 | 2026-02-07 | Removed incorrect SUPERSEDED status. Rewritten in English per §4 Language Policy. Removed AI widget visual rules (governed by INDAI_AI_WIDGET_PLACEMENT_CANON.md per §19.1). Added Design System references per §21. Added Document-ID, Changelog. Aligned with MASTER_SPEC v3.0.0. |

---

## 1. PURPOSE

This document defines the **design concept** for the HERO block (homepage first screen) at the level of:

- Composition
- Visual character
- Element hierarchy
- Permitted and forbidden design decisions

This document is **not** a design mockup and does **not** replace a designer's work.  
It sets hard constraints within which any design implementation is considered correct.

---

## 2. ROLE OF HERO DESIGN

The HERO design in INDAI:

- Serves the message, not decorates it
- Reinforces the feeling of engineering reliability
- Must not attract attention to itself

The HERO does not sell and does not entertain.  
The HERO creates trust and calm.

---

## 3. COMPOSITION LOGIC

### 3.1 Core principle

Text is the anchor.  
Video is the background.  
Interface elements are secondary.

If video and interface are removed, the HERO must remain strong and convincing.

### 3.2 Space and breathing room

- The HERO must not be dense
- Large margins and whitespace are permitted
- The feeling of "premium space", not a landing page

Forbidden:

- ❌ Overloading the first screen with elements
- ❌ Decorative panels without function

---

## 4. TEXT SCALE AND HIERARCHY

### Heading

- Visually dominant
- Instantly readable
- Not fragmented into small elements

### Subheading

- Reinforces but does not compete
- Visually secondary
- Remains in the same logical block as the heading

### Permitted

- Strict alignment
- Clear typographic hierarchy
- Typography per `00_УПРАВЛЕНИЕ/03_DESIGN_SYSTEM/INDAI_TYPOGRAPHY_CANON.md`

### Forbidden

- ❌ Creative typography
- ❌ Decorative fonts
- ❌ "Advertising" accents

---

## 5. VIDEO AND VISUAL BACKGROUND

### Video in HERO

- Background character only
- Does not compete with text
- May be darkened / muted
- Must comply with MASTER_SPEC §20.2: hero video < 5MB, lazy-loaded

### Permitted

- Monotone industrial scenes
- Wide-angle shots
- Feeling of control and order

### Forbidden

- ❌ Clip-style editing
- ❌ High contrast
- ❌ Visual noise

> Full video requirements: `01_BRAND/INDAI_HERO_VIDEO_CANON.md`

---

## 6. COLOR AND CONTRAST

The HERO design must:

- Be restrained
- Use a limited number of colors
- Avoid sharp contrasts

Principle:  
**Neutral and strict is better than bright and memorable.**

Color values and usage rules are defined in `00_УПРАВЛЕНИЕ/03_DESIGN_SYSTEM/INDAI_COLOR_PALETTE_CANON.md`.  
Quick reference (from MASTER_SPEC §21.1):

| Token | Hex | Typical HERO usage |
|-------|-----|--------------------|
| `dark-500` | `#023047` | Text, dark overlay |
| `primary-500` | `#00B4D8` | Subtle accents only |
| `accent-500` | `#FF9E1B` | CTA button only |
| `light-200` | `#F0F9FF` | Not used in HERO (light bg sections) |

---

## 7. OVERALL FEELING (most important)

A correct HERO must evoke the feeling of:

- Calm
- Control
- Engineering precision
- Absence of haste

If the feeling is:

- "Beautiful"
- "Spectacular"
- "Wow"

→ The design does **not** conform to the INDAI concept.

---

## 8. ACCEPTANCE CRITERIA

The HERO design is considered correct if:

- It requires no explanation
- It does not look like a service landing page
- It does not resemble competitor websites
- It is perceived as the interface of a serious engineering company

If the design needs to be "defended with words" — it is wrong.

---

## 9. CHANGE MANAGEMENT

Any changes to the HERO design concept:

- Require a separate addendum or version increment in this document
- Must not be introduced through "taste-based" edits
- Must not be optimized for conversion or clicks
- Must be submitted via PR per MASTER_SPEC §23.2

---

## 10. DOCUMENT RELATIONSHIPS

| Document | Defines |
|----------|---------|
| `INDAI_MASTER_SPEC.md` | Architecture, hierarchy, performance budget |
| `INDAI_HERO_COPY_CANON.md` | Hero text and messaging |
| `INDAI_HERO_VIDEO_CANON.md` | Hero video requirements |
| `INDAI_HERO_DESIGN_CONCEPT_CANON.md` (this file) | Hero visual design rules |
| `INDAI_AI_WIDGET_PLACEMENT_CANON.md` | AI widget behavior, placement, and visual rules |
| `INDAI_COLOR_PALETTE_CANON.md` | Brand colors |
| `INDAI_TYPOGRAPHY_CANON.md` | Fonts, sizes, hierarchy |

---

Document approved.  
INDAI Clean HERO design operates exclusively within these constraints.
