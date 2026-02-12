# INDAI_HERO_VIDEO_CANON.md

Project: INDAI Clean  
Document role: Hero video requirements and constraints  
Path: `01_BRAND/INDAI_HERO_VIDEO_CANON.md`  
Status: CANONICAL — ACTIVE  
Document-ID: INDAI-BRAND-003  
Version: 2.0.0  
Parent: `00_GOVERNANCE/INDAI_MASTER_SPEC.md` (OVERRIDES THIS DOCUMENT)  
Last updated: 2026-02-07  

---

## Changelog

| Version | Date | Summary |
|---------|------|---------|
| 1.0.0 | 2026-01-30 | Initial canonical release (Russian) |
| 2.0.0 | 2026-02-07 | Rewritten in English per §4 Language Policy. Removed reference to nonexistent `_v2` document. Added performance budget constraints from §20. Added accessibility rules from §16. Added Document-ID, Changelog. Aligned with MASTER_SPEC v3.0.0. |

---

## 1. PURPOSE

The HERO video in INDAI:

- Is **not** an advertisement
- Is **not** a substitute for HERO text
- Does **not** explain services
- Does **not** sell

Its sole function is to **reinforce the feeling of industrial scale and the seriousness of the challenges the company addresses**.

---

## 2. HERO ELEMENT HIERARCHY

Strict priority order within the HERO block:

| Priority | Element | Role |
|----------|---------|------|
| 1 (primary) | HERO text | Positioning, value proposition |
| 2 (secondary) | Video | Background atmosphere reinforcement |
| 3 (tertiary) | Interactive elements | CTA, forms |

If the video is removed entirely, the HERO **must** remain fully functional.

> Visual hierarchy rules: `01_BRAND/INDAI_HERO_DESIGN_CONCEPT_CANON.md`  
> HERO text and messaging: `01_BRAND/INDAI_HERO_COPY_CANON.md`

---

## 3. WHAT THE VIDEO DOES

The HERO video must:

- Create a sense of industrial scale
- Convey control and process manageability
- Support the tone of calm engineering confidence
- Function as a visual background, not a narrative

The video must not demand attention.  
The video must not distract from text.

---

## 4. WHAT THE VIDEO MUST NOT DO (hard prohibitions)

The HERO video must **never** contain:

- ❌ Storytelling or narrative arc
- ❌ Before/after sequences
- ❌ Actors or staged scenes
- ❌ Dramatic music
- ❌ Titles, text overlays, or slogans on top of video
- ❌ Emotional peaks
- ❌ Consumer cleaning associations
- ❌ "Dirt for the sake of dirt" imagery
- ❌ Focus on people instead of processes
- ❌ Auto-playing audio (per §16.2: no auto-playing media with sound)

INDAI is not a show and not a demonstration of labor heroism.

---

## 5. PERMITTED VIDEO CONTENT

### Allowed visual types

- Industrial facilities
- Equipment in operation
- Technological processes
- Wide-angle shots
- Neutral camera movements
- Fragments, not complete operations

### Target sensations

- Control
- Precision
- Systematization
- Absence of haste

---

## 6. PACE AND DYNAMICS

- Slow or moderate tempo, no subjective rhythm
- No sharp editing cuts
- No clip-style pacing
- No "action"

Principle:  
**Better to understate and undershow than to create a feeling of rush.**

---

## 7. AUDIO AND AUTOPLAY

- Video is **muted by default** (`muted` attribute required)
- No audio required for video to function
- Music (if any): neutral, background, non-essential
- Video must work in complete silence
- Must respect `prefers-reduced-motion` (per MASTER_SPEC §16.2)

### Autoplay implementation

```html
<video autoplay muted loop playsinline>
```

- `muted` — mandatory (browser autoplay policy + §16.2)
- `playsinline` — mandatory (mobile Safari)
- `loop` — permitted (see §8)

---

## 8. TECHNICAL ROLE AND REPLACEABILITY

The video:

- May be looped
- May be fragmentary
- May be replaced by a static frame without loss of meaning

The video is a **replaceable element**, not the foundation of the HERO.

### Fallback behavior

- If video fails to load → display static poster image
- Poster image must meet the same visual criteria as the video (§5)
- No layout shift on video load/fail (CLS = 0, per MASTER_SPEC §2.2)

---

## 9. PERFORMANCE BUDGET (per MASTER_SPEC §20)

| Constraint | Value | Source |
|------------|-------|--------|
| Maximum file size | < 5MB | §20.1 |
| Loading strategy | Lazy-loaded | §20.1 |
| Format | MP4 (H.264) preferred, WebM fallback | §20.2 image rules adapted |
| Max resolution | 1920px wide | §20.2 |
| Third-party scripts impact | Video must not add external scripts | §20.3 |
| CLS contribution | 0 (explicit width/height or aspect-ratio) | §2.2 |

### Implementation requirements

- Video element must have explicit `width` and `height` attributes or CSS `aspect-ratio`
- Use `<source>` elements for format fallback
- Poster image: WebP, < 500KB (per §20.2 largest image rule)
- Video must not be in the critical rendering path (lazy-load or `loading="lazy"`)

```html
<video
  autoplay muted loop playsinline
  poster="/images/hero/hero-poster.webp"
  width="1920" height="1080"
>
  <source src="/video/hero.mp4" type="video/mp4" />
  <source src="/video/hero.webm" type="video/webm" />
</video>
```

---

## 10. ACCESSIBILITY (per MASTER_SPEC §16)

| Requirement | Implementation |
|-------------|---------------|
| No auto-playing sound | `muted` attribute (§16.2) |
| Reduced motion | Pause video when `prefers-reduced-motion: reduce` is active (§16.2) |
| Alt content | Poster image with descriptive `alt` in Russian (§16.2) |
| Keyboard | Video decorative — no keyboard interaction required |
| ARIA | `aria-hidden="true"` on decorative video element |

---

## 11. ACCEPTANCE CRITERIA

The HERO video is considered correct if:

- It does not distract from the text
- It requires no explanation
- It does not evoke "wow" or "noise" reactions
- It reinforces the feeling of professionalism
- It is equally appropriate for a CEO, chief engineer, and safety officer

**If the video invites discussion — it is wrong.**

---

## 12. CHANGE MANAGEMENT

Any changes to the format, role, or behavior of the HERO video:

- Require a separate addendum or version increment in this document
- Must not be introduced through designer "taste" edits
- Must not be optimized for marketing metrics
- Must be submitted via PR per MASTER_SPEC §23.2

---

## 13. DOCUMENT RELATIONSHIPS

| Document | Defines |
|----------|---------|
| `INDAI_MASTER_SPEC.md` | Performance budget §20, accessibility §16, measurable criteria §2.2 |
| `INDAI_HERO_DESIGN_CONCEPT_CANON.md` | Visual composition and hierarchy of the HERO block |
| `INDAI_HERO_COPY_CANON.md` | HERO text and messaging (primary element) |
| `INDAI_HERO_VIDEO_CANON.md` (this file) | Video requirements and constraints |
| `INDAI_COLOR_PALETTE_CANON.md` | Color values for poster/overlay |

---

Document approved.  
INDAI Clean HERO video operates exclusively within these constraints.
