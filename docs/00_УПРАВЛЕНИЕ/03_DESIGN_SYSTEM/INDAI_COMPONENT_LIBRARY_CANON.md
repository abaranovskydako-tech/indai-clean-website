# INDAI COMPONENT LIBRARY CANON

## Metadata

| Field | Value |
|-------|-------|
| Status | **DEFINED** |
| Version | 1.0.0 |
| Date | 2026-02-07 |
| Location | `/docs/00_УПРАВЛЕНИЕ/03_DESIGN_SYSTEM/INDAI_COMPONENT_LIBRARY_CANON.md` |
| Depends on | `INDAI_MASTER_SPEC.md`, `ADDENDUM_P0.2.md`, `INDAI_COLOR_PALETTE_CANON.md`, `INDAI_TYPOGRAPHY_CANON.md` |
| Authority | Single source of truth for all UI component specifications |
| Defined by | Design System Canon Authoring task (2026-02-07) |

---

## Purpose

This document defines every permitted UI component, its variants, props, states, and spacing.

No component may be implemented without a matching entry in this document.

Components are organized in three tiers per MASTER_SPEC §6:
- **Tier 1:** Atomic UI components (`components/ui/`)
- **Tier 2:** Layout components (`components/layout/`)
- **Tier 3:** Section components (`components/sections/`)

---

## Component Registry

| Component | Location | Tier | Status | MASTER_SPEC Reference |
|-----------|----------|------|--------|----------------------|
| Button | `components/ui/Button.tsx` | 1 | Defined | §21.2 |
| Badge | `components/ui/Badge.tsx` | 1 | Defined | §21.2 |
| Card | `components/ui/Card.tsx` | 1 | Defined | §21.2 |
| Input | `components/ui/Input.tsx` | 1 | Defined | §21.2 |
| Header | `components/layout/Header.tsx` | 2 | Defined | §6 |
| Footer | `components/layout/Footer.tsx` | 2 | Defined | §6 |
| HeroSection | `components/sections/HeroSection.tsx` | 3 | Defined | §10.3 #1 |
| ProcessSection | `components/sections/ProcessSection.tsx` | 3 | Defined | §10.3 #2 |
| ServicesSection | `components/sections/ServicesSection.tsx` | 3 | Defined | §10.3 #3 |
| CasesSection | `components/sections/CasesSection.tsx` | 3 | Defined | §10.3 #4 |
| QuizSection | `components/sections/QuizSection.tsx` | 3 | Defined (placeholder) | §10.3 #5 |
| TrustSection | `components/sections/TrustSection.tsx` | 3 | Defined | §10.3 #6 |
| GallerySection | `components/sections/GallerySection.tsx` | 3 | Defined | §10.3 #7 |
| FAQSection | `components/sections/FAQSection.tsx` | 3 | Defined | §10.3 #8 |
| CTASection | `components/sections/CTASection.tsx` | 3 | Defined (placeholder) | §10.3 #9 |

---

## Tier 1: Atomic UI Components

### Button

**Location:** `components/ui/Button.tsx`

**Responsibility:**
- Renders a clickable button element
- Handles user interaction for primary and secondary actions
- Applies variant-specific styling via Tailwind tokens

**Scope:**
- Does NOT contain business logic or navigation logic
- Does NOT handle form submission (parent component responsibility)
- Does NOT contain hardcoded text (text comes via props)

**Props Interface:**

```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  className?: string; // For additional Tailwind classes via cn()
}
```

**Variants (per MASTER_SPEC §21.2):**

| Variant | Color Mapping | Usage |
|---------|---------------|-------|
| `default` | `bg-accent-500`, `text-dark-500` (or white if contrast insufficient) | Primary CTAs |
| `secondary` | `bg-ocean-500`, `text-white` | Secondary actions |
| `outline` | `border-ocean-500`, `text-ocean-500`, transparent background | Tertiary actions |

**States:**

| State | Styling | Notes |
|-------|---------|-------|
| Default | Variant-specific colors | Normal interactive state |
| Hover | Darker shade or opacity change | Visual feedback |
| Active | Pressed state | Visual feedback |
| Disabled | Reduced opacity, `cursor-not-allowed` | `disabled` prop |

**Semantic Structure:**

```tsx
<button
  type={type || 'button'}
  disabled={disabled}
  onClick={onClick}
  className={cn(/* variant classes */, className)}
  aria-disabled={disabled}
>
  {children}
</button>
```

**Styling Rule:**
- All styling via Tailwind utility classes
- Conditional classes via `cn()` from `lib/utils.ts` (ADDENDUM P0.2 §94)
- Colors from COLOR_PALETTE_CANON only
- Typography from TYPOGRAPHY_CANON

---

### Badge

**Location:** `components/ui/Badge.tsx`

**Responsibility:**
- Renders a small label or tag element
- Displays status, category, or metadata information

**Scope:**
- Does NOT contain interactive behavior (not clickable)
- Does NOT contain complex content (text only)

**Props Interface:**

```typescript
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'success';
  className?: string;
}
```

**Variants (per MASTER_SPEC §21.2):**

| Variant | Color Mapping | Usage |
|---------|---------------|-------|
| `default` | `bg-light-200`, `text-dark-500` | Neutral labels |
| `accent` | `bg-accent-500`, `text-dark-500` (or white) | Highlighted labels |
| `success` | `bg-ocean-500`, `text-white` | Success/positive states |

**States:**
- Badge has no interactive states (static display component)

**Semantic Structure:**

```tsx
<span className={cn(/* variant classes */, className)}>
  {children}
</span>
```

**Styling Rule:**
- Tailwind utilities only
- `cn()` for conditional classes
- Colors from COLOR_PALETTE_CANON

---

### Card

**Location:** `components/ui/Card.tsx`

**Responsibility:**
- Renders a container element for grouped content
- Provides visual separation and structure

**Scope:**
- Does NOT contain business logic
- Does NOT enforce content structure (flexible container)

**Props Interface:**

```typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
}
```

**Variants:**
- Card has no variants (per MASTER_SPEC §21.2: "—")

**States:**
- Card has no interactive states (container component)

**Semantic Structure:**

```tsx
<div className={cn(/* base card classes */, className)}>
  {children}
</div>
```

**Styling Rule:**
- Tailwind utilities only
- Border, padding, background via Tailwind tokens
- Colors from COLOR_PALETTE_CANON

---

### Input

**Location:** `components/ui/Input.tsx`

**Responsibility:**
- Renders a form input element
- Handles text input with validation state display

**Scope:**
- Does NOT contain validation logic (parent component responsibility)
- Does NOT contain label (separate `<label>` element required per MASTER_SPEC §16.2)

**Props Interface:**

```typescript
interface InputProps {
  type?: 'text' | 'email' | 'tel' | 'number' | 'password';
  name: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean; // Error state per MASTER_SPEC §21.2
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
```

**Variants:**
- Input has no visual variants (single style)

**States (per MASTER_SPEC §21.2):**

| State | Styling | Notes |
|-------|---------|-------|
| Default | Border, background from tokens | Normal state |
| Focus | Focus ring, border color change | Keyboard accessibility |
| Error | Border color change (error indicator) | `error` prop |
| Disabled | Reduced opacity, `cursor-not-allowed` | `disabled` prop |

**Semantic Structure:**

```tsx
<input
  type={type || 'text'}
  name={name}
  value={value}
  placeholder={placeholder}
  required={required}
  disabled={disabled}
  aria-invalid={error}
  className={cn(/* base + state classes */, className)}
  onChange={onChange}
/>
```

**Accessibility Requirements (MASTER_SPEC §16.2):**
- Must have associated `<label>` element (not part of Input component)
- Focus indicator must be visible
- Error state must be communicated via `aria-invalid`

**Styling Rule:**
- Tailwind utilities only
- `cn()` for conditional classes (error state)
- Colors from COLOR_PALETTE_CANON

---

## Tier 2: Layout Components

### Header

**Location:** `components/layout/Header.tsx`

**Responsibility:**
- Renders site header with navigation
- Provides primary site navigation structure

**Scope:**
- Does NOT contain branding or logo (deferred)
- Does NOT contain search or other header features
- Navigation items limited to routes defined in MASTER_SPEC §6

**Props Interface:**

```typescript
interface HeaderProps {
  // No props at this stage — static navigation
}
```

**Semantic Structure (MASTER_SPEC §16.2):**

```tsx
<header>
  <nav aria-label="Основная навигация">
    <ul>
      <li><Link href="/">Главная</Link></li>
      <li><Link href="/services">Услуги</Link></li>
    </ul>
  </nav>
</header>
```

**Required Elements:**
- `<header>` — ARIA landmark
- `<nav>` with `aria-label` — Navigation landmark
- `<ul>` / `<li>` — Semantic list structure
- `next/link` — Next.js navigation

**Content Rules:**
- Navigation text in Russian (MASTER_SPEC §4)
- No hardcoded descriptions beyond navigation labels (MASTER_SPEC §24)
- Links to routes defined in MASTER_SPEC §6 only

**Styling Rule:**
- Tailwind utilities only
- `cn()` for conditional classes if needed

---

### Footer

**Location:** `components/layout/Footer.tsx`

**Responsibility:**
- Renders site footer
- Displays copyright and basic site information

**Scope:**
- Does NOT contain navigation links (deferred)
- Does NOT contain complex content (minimal footer)

**Props Interface:**

```typescript
interface FooterProps {
  // No props at this stage — static content
}
```

**Semantic Structure (MASTER_SPEC §16.2):**

```tsx
<footer>
  <p>INDAI Clean {currentYear}</p>
</footer>
```

**Required Elements:**
- `<footer>` — ARIA landmark

**Content Rules:**
- Company name: "INDAI Clean" (brand name, not content copy)
- Year: dynamic via `new Date().getFullYear()`
- No hardcoded Russian text beyond brand name (MASTER_SPEC §24)

**Styling Rule:**
- Tailwind utilities only

---

## Tier 3: Section Components

### HeroSection

**Location:** `components/sections/HeroSection.tsx`

**Responsibility:**
- Renders homepage hero section
- Displays value proposition and primary CTA (per MASTER_SPEC §10.3 #1)

**Scope:**
- Does NOT contain video background (deferred — see HERO_VIDEO_CANON)
- Does NOT contain complex animations (minimal implementation)
- Content source: INDAI_HERO_COPY_CANON.md (when populated)

**Props Interface:**

```typescript
interface HeroSectionProps {
  // No props at this stage — content from canon when available
}
```

**Required Child Components:**
- Link or Button (Tier 1) for primary CTA

**Content Source:**
- Text: `INDAI_HERO_COPY_CANON.md` (currently PLACEHOLDER)
- Design rules: `INDAI_HERO_DESIGN_CONCEPT_CANON.md`

**Semantic Structure:**

```tsx
<section>
  <h1>{/* Hero heading from canon */}</h1>
  <p>{/* Hero description from canon */}</p>
  <Link href="/services">{/* CTA text from canon */}</Link>
</section>
```

**Styling Rule:**
- Tailwind utilities only
- Typography from TYPOGRAPHY_CANON
- Colors from COLOR_PALETTE_CANON

---

### ServicesSection

**Location:** `components/sections/ServicesSection.tsx`

**Responsibility:**
- Renders services listing section on homepage
- Displays published services with links to detail pages (per MASTER_SPEC §10.3 #3)

**Scope:**
- Does NOT contain service descriptions or excerpts (title + link only)
- Does NOT contain cards or complex layouts (semantic list)

**Props Interface:**

```typescript
interface ServicesSectionProps {
  // No props — reads from lib/services.ts
}
```

**Content Source:**
- Data: `getAllServices()` from `lib/services.ts`
- Filters: Only `status: "published"` services (MASTER_SPEC §10.2)

**Required Child Components:**
- None (uses semantic HTML list)

**Semantic Structure:**

```tsx
<section>
  <h2>Услуги</h2>
  <ul>
    {services.map((service) => (
      <li key={service.slug}>
        <Link href={`/services/${service.slug}`}>{service.title}</Link>
      </li>
    ))}
  </ul>
</section>
```

**Styling Rule:**
- Tailwind utilities only
- Typography from TYPOGRAPHY_CANON
- Colors from COLOR_PALETTE_CANON

---

### ProcessSection

**Location:** `components/sections/ProcessSection.tsx`

**Responsibility:**
- Renders homepage process section (4 steps, 3 free)
- Displays workflow steps with visual indicators (per MASTER_SPEC §10.3 #2)

**Scope:**
- Does NOT contain business logic
- Does NOT handle step interactions
- Content from `lib/constants.ts` (not hardcoded)

**Props Interface:**

```typescript
interface ProcessSectionProps {
  // No props — reads from lib/constants.ts
}
```

**Content Source:**
- Data: `PROCESS_STEPS` from `lib/constants.ts`
- Each step: number, title, description, isFree flag

**Required Child Components:**
- Card (from Tier 1) for each step
- Badge (from Tier 1) for "free" indicator

**Semantic Structure:**

```tsx
<section id="process" aria-labelledby="process-heading">
  <h2 id="process-heading">Процесс работы</h2>
  <div>
    {steps.map((step) => (
      <Card key={step.number}>
        <Badge variant="accent">{step.number}</Badge>
        {step.isFree && <Badge variant="success">Бесплатно</Badge>}
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </Card>
    ))}
  </div>
</section>
```

**Styling Rule:**
- Tailwind utilities only
- Typography from TYPOGRAPHY_CANON
- Colors from COLOR_PALETTE_CANON

---

### CasesSection

**Location:** `components/sections/CasesSection.tsx`

**Responsibility:**
- Renders before/after case studies (per MASTER_SPEC §10.3 #4)
- Displays case items with images and results

**Scope:**
- Does NOT contain image upload logic
- Does NOT contain case detail navigation (deferred)
- Content from `lib/constants.ts` (not hardcoded)

**Props Interface:**

```typescript
interface CasesSectionProps {
  // No props — reads from lib/constants.ts
}
```

**Content Source:**
- Data: `CASES` from `lib/constants.ts`
- Each case: title, beforeImage, afterImage, result
- Images: placeholder paths in `/public/images/cases/`

**Required Child Components:**
- Card (from Tier 1) for each case

**Semantic Structure:**

```tsx
<section id="cases" aria-labelledby="cases-heading">
  <h2 id="cases-heading">Кейсы</h2>
  <div>
    {cases.map((caseItem) => (
      <Card key={caseItem.id}>
        <h3>{caseItem.title}</h3>
        <Image src={caseItem.beforeImage} alt={caseItem.beforeAlt} />
        <Image src={caseItem.afterImage} alt={caseItem.afterAlt} />
        <p>{caseItem.result}</p>
      </Card>
    ))}
  </div>
</section>
```

**Styling Rule:**
- Tailwind utilities only
- Images via `next/image` with width/height (§20.2)
- All images < 500KB (§20.2)
- Alt text in Russian (§14.2)

---

### QuizSection

**Location:** `components/sections/QuizSection.tsx`

**Responsibility:**
- Renders cost calculator section placeholder (per MASTER_SPEC §10.3 #5)
- Displays section heading and placeholder content

**Scope:**
- Does NOT contain quiz logic (deferred to Lead System)
- Does NOT contain form inputs (deferred)
- Does NOT call `/api/quiz` (deferred)

**Props Interface:**

```typescript
interface QuizSectionProps {
  // No props at this stage
}
```

**Content Source:**
- Placeholder text from `lib/constants.ts`

**Required Child Components:**
- Button (from Tier 1) for future CTA

**Semantic Structure:**

```tsx
<section id="quiz" aria-labelledby="quiz-heading">
  <h2 id="quiz-heading">Калькулятор стоимости</h2>
  <p>{/* Placeholder text */}</p>
  <Button variant="default">{/* Future CTA */}</Button>
</section>
```

**Styling Rule:**
- Tailwind utilities only
- Typography from TYPOGRAPHY_CANON
- Colors from COLOR_PALETTE_CANON

**Status:** Placeholder — full implementation deferred to Lead System task.

---

### TrustSection

**Location:** `components/sections/TrustSection.tsx`

**Responsibility:**
- Renders guarantees and trust signals (per MASTER_SPEC §10.3 #6)
- Displays trust items with icons and descriptions

**Scope:**
- Does NOT contain business logic
- Content from `lib/constants.ts` (not hardcoded)

**Props Interface:**

```typescript
interface TrustSectionProps {
  // No props — reads from lib/constants.ts
}
```

**Content Source:**
- Data: `TRUST_SIGNALS` from `lib/constants.ts`
- Each signal: icon (Lucide), title, description

**Required Child Components:**
- Card (from Tier 1) for each signal
- Badge (optional, from Tier 1)

**Semantic Structure:**

```tsx
<section id="trust" aria-labelledby="trust-heading">
  <h2 id="trust-heading">Гарантии и доверие</h2>
  <div>
    {signals.map((signal) => (
      <Card key={signal.id}>
        <Icon name={signal.icon} />
        <h3>{signal.title}</h3>
        <p>{signal.description}</p>
      </Card>
    ))}
  </div>
</section>
```

**Styling Rule:**
- Tailwind utilities only
- Typography from TYPOGRAPHY_CANON
- Colors from COLOR_PALETTE_CANON
- Icons: Lucide (per MASTER_SPEC §3.1)

---

### GallerySection

**Location:** `components/sections/GallerySection.tsx`

**Responsibility:**
- Renders work photos gallery (per MASTER_SPEC §10.3 #7)
- Displays grid of images

**Scope:**
- Does NOT contain lightbox/modal interaction (deferred)
- Does NOT contain image upload logic
- Content from `lib/constants.ts` (not hardcoded)

**Props Interface:**

```typescript
interface GallerySectionProps {
  // No props — reads from lib/constants.ts
}
```

**Content Source:**
- Data: `GALLERY_IMAGES` from `lib/constants.ts`
- Each image: src, alt (Russian), width, height

**Required Child Components:**
- None (uses semantic grid)

**Semantic Structure:**

```tsx
<section id="gallery" aria-labelledby="gallery-heading">
  <h2 id="gallery-heading">Галерея работ</h2>
  <div className="grid">
    {images.map((image) => (
      <Image
        key={image.id}
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
    ))}
  </div>
</section>
```

**Styling Rule:**
- Tailwind utilities only
- Images via `next/image` with width/height (§20.2)
- All images < 500KB (§20.2)
- Alt text in Russian (§14.2)

---

### FAQSection

**Location:** `components/sections/FAQSection.tsx`

**Responsibility:**
- Renders questions and answers with expand/collapse (per MASTER_SPEC §10.3 #8)
- Displays FAQ items with toggleable answers

**Scope:**
- Does NOT contain business logic
- Content from `lib/constants.ts` (not hardcoded)
- Prefers native `<details>`/`<summary>` for accessibility

**Props Interface:**

```typescript
interface FAQSectionProps {
  // No props — reads from lib/constants.ts
}
```

**Content Source:**
- Data: `FAQ_ITEMS` from `lib/constants.ts`
- Each item: question, answer

**Required Child Components:**
- None (uses native `<details>`/`<summary>`)

**Semantic Structure:**

```tsx
<section id="faq" aria-labelledby="faq-heading">
  <h2 id="faq-heading">Часто задаваемые вопросы</h2>
  <div>
    {faqItems.map((item) => (
      <details key={item.id}>
        <summary>{item.question}</summary>
        <p>{item.answer}</p>
      </details>
    ))}
  </div>
</section>
```

**Styling Rule:**
- Tailwind utilities only
- Typography from TYPOGRAPHY_CANON
- Colors from COLOR_PALETTE_CANON
- Native `<details>`/`<summary>` for keyboard accessibility (§16.2)

**Note:** If custom accordion is needed later, it must be keyboard-accessible with proper ARIA attributes.

---

### CTASection

**Location:** `components/sections/CTASection.tsx`

**Responsibility:**
- Renders final call-to-action section (per MASTER_SPEC §10.3 #9)
- Displays compelling CTA with button

**Scope:**
- Does NOT contain form fields (deferred to Lead System)
- Does NOT call `/api/leads` (deferred)
- Content from `lib/constants.ts` (not hardcoded)

**Props Interface:**

```typescript
interface CTASectionProps {
  // No props — reads from lib/constants.ts
}
```

**Content Source:**
- Data: CTA text from `lib/constants.ts`

**Required Child Components:**
- Button (from Tier 1) for primary CTA

**Semantic Structure:**

```tsx
<section id="cta" aria-labelledby="cta-heading" className="bg-light-200">
  <h2 id="cta-heading">{/* CTA heading from constants */}</h2>
  <p>{/* CTA description from constants */}</p>
  <Button variant="default">{/* CTA button text */}</Button>
</section>
```

**Styling Rule:**
- Tailwind utilities only
- Typography from TYPOGRAPHY_CANON
- Colors from COLOR_PALETTE_CANON
- Section background using design tokens

**Status:** Placeholder — form submission deferred to Lead System task.

---

## Composition Rules

### Permitted Nesting

- Tier 1 components may be nested within Tier 2/3 components
- Tier 2 components (Header, Footer) are top-level in layout
- Tier 3 components are page-level sections

**Example:**
```tsx
<HeroSection>
  <Button variant="default">CTA</Button>
</HeroSection>
```

### Spacing Between Components

**Status:** Not defined at this stage.

**Rationale:** Spacing values will be defined in `INDAI_SPACING_LAYOUT_CANON.md` when created (ADDENDUM P0.2 — recommended).

**Deferred until:** INDAI_SPACING_LAYOUT_CANON.md is created.

---

## Forbidden Patterns

The following component usage patterns are explicitly forbidden:

1. **Hardcoded text in components** — All text must come from content files or props (MASTER_SPEC §24)
2. **Inline styles** — `style={{ }}` is forbidden (ADDENDUM P0.2 §101)
3. **CSS Modules** — `.module.css` files are forbidden (ADDENDUM P0.2 §102)
4. **CSS-in-JS** — Styled-components, Emotion, etc. are forbidden (ADDENDUM P0.2 §103)
5. **Components not in registry** — New components require canon update first
6. **Arbitrary Tailwind values** — `w-[237px]` without justification (ADDENDUM P0.2 §105)
7. **Color values not in palette** — `bg-purple-500` is forbidden (ADDENDUM P0.2 §119)
8. **Manual class concatenation** — Must use `cn()` from `lib/utils.ts` (ADDENDUM P0.2 §94, §123)

---

## Changelog

| Version | Date | Summary |
|---------|------|---------|
| 0.1.0 | 2025-02-07 | Scaffold created |
| 1.0.0 | 2026-02-07 | Canon defined — Tier 1 (Button, Badge, Card, Input), Tier 2 (Header, Footer), Tier 3 (HeroSection, ServicesSection). Remaining Tier 3 sections deferred. |
| 1.1.0 | 2026-02-07 | All 9 homepage sections defined and implemented. ProcessSection, CasesSection, QuizSection, TrustSection, GallerySection, FAQSection, CTASection added. Component locations updated to `components/sections/`. |

---

## Deferred Items

The following components and features are explicitly deferred:

### Tier 3 Sections — Implementation Status

All 9 homepage sections per MASTER_SPEC §10.3 are now defined and implemented:
- ✅ HeroSection (§10.3 #1) — Implemented
- ✅ ProcessSection (§10.3 #2) — Implemented
- ✅ ServicesSection (§10.3 #3) — Implemented
- ✅ CasesSection (§10.3 #4) — Implemented
- ✅ QuizSection (§10.3 #5) — Implemented (placeholder, form logic deferred to Lead System)
- ✅ TrustSection (§10.3 #6) — Implemented
- ✅ GallerySection (§10.3 #7) — Implemented
- ✅ FAQSection (§10.3 #8) — Implemented
- ✅ CTASection (§10.3 #9) — Implemented (placeholder, form submission deferred to Lead System)

**Note:** QuizSection and CTASection are structural placeholders. Full form logic and API integration will be implemented in the Lead System task.

### Recommended Canons (ADDENDUM P0.2 — not yet created)

- **INDAI_SPACING_LAYOUT_CANON.md** — Grid, containers, section padding, breakpoint behavior
- **INDAI_ICONOGRAPHY_CANON.md** — Lucide icon subset, sizes, usage rules

**Rationale:** These canons are marked as 🟡 Recommended (not 🔴 Required) in ADDENDUM P0.2. They will be authored when implementation requires spacing/layout rules or iconography.

---

## Related Canons

- `INDAI_COLOR_PALETTE_CANON.md` — Color tokens (referenced in component variants)
- `INDAI_TYPOGRAPHY_CANON.md` — Typography system (referenced in component text)
- `ADDENDUM P0.2.md` — Design System governance (styling rules, `cn()` requirement)
- `INDAI_HERO_DESIGN_CONCEPT_CANON.md` — Hero section design rules
- `INDAI_HERO_COPY_CANON.md` — Hero section content source

---

**Canon approved. Component specifications are binding until superseded by a future version.**
