INDAI — MASTER SPECIFICATION (CANONICAL)

Project: INDAI Clean Website
Repository Type: Frontend (Next.js)
Document Role: Single Source of Truth
Status: CANONICAL — OVERRIDES ALL
Last Updated: 2026-02-05

1. PURPOSE

This document is the only authoritative specification for the INDAI Clean website.

Any file, folder, documentation, content, or code that contradicts this document
must be changed to comply with it.

There are no exceptions.

2. CORE GOALS

Maintain a clean, scalable, non-chaotic repository

Enforce strict separation of concerns:

governance

brand

content & services

products

archive

Enable AI-assisted development without losing control

Eliminate duplication, ambiguity, and undocumented decisions

3. FIXED TECHNOLOGY STACK

Framework: Next.js 13+ (App Router)

Language: TypeScript (strict)

Styling: Tailwind CSS

Architecture: Component-based

Content source: Markdown (.md)

Repository language: English only (paths, files, code)

4. CANONICAL /docs STRUCTURE
/docs
├── 00_GOVERNANCE            # Control, rules, audits (SOURCE OF TRUTH)
│   ├── INDAI_MASTER_SPEC.md
│   ├── INDAI_PROJECT_STATUS.md
│   ├── AUDIT_REPORT.md
│   └── .keep
│
├── 01_BRAND                 # Brand, tone, voice, visual canon
│   ├── INDAI_HERO_COPY_CANON.md
│   ├── INDAI_HERO_DESIGN_CONCEPT_CANON.md
│   ├── INDAI_HERO_VIDEO_CANON.md
│   └── .keep
│
├── 02_CONTENT_SERVICES      # Service content & pages
│   ├── INDAI_SERVICES_PAGES_CANON.md
│   ├── heat_exchanger_cleaning.md
│   ├── pipe_cleaning.md
│   └── .keep
│
├── 03_PRODUCTS              # Product logic, AI, UX rules
│   ├── INDAI_PRODUCT_COPY.md
│   ├── INDAI_AI_WIDGET_PLACEMENT_CANON.md
│   └── .keep
│
└── 99_ARCHIVE               # Deprecated / historical documents
    └── .keep

⚠️ STRICT RULE

Files must NOT exist directly in /docs.
Everything belongs inside a numbered category.

5. HIERARCHY OF TRUTH

INDAI_MASTER_SPEC.md (this file)

Other documents in 00_GOVERNANCE

Canonical brand & product documents

Content & service files

Code implementation

Code never overrides documentation.

6. NAMING RULES (NON-NEGOTIABLE)
Folders

Format: NN_CATEGORY_NAME

English only

Uppercase

Numbers define priority & order

Files

Format: UPPER_SNAKE_CASE.md

English only

No duplicates

No vague names (final, new, test, copy2)

7. CONTENT RULES

Content lives only in:

01_BRAND

02_CONTENT_SERVICES

Markdown is the source of truth

Pages are generated from MD

No business content logic inside React components

8. AI & AUTOMATION RULES

AI widgets must follow:

INDAI_AI_WIDGET_PLACEMENT_CANON.md

AI must:

assist, not dominate

never block content

never override user intent

UX > AI visibility

9. CHANGE MANAGEMENT

Any structural change requires:

Update to this document

Clear commit message explaining why

No silent refactors

10. FORBIDDEN

❌ Duplicate folders
❌ Files outside categories
❌ Mixed governance & content
❌ Undocumented decisions
❌ Contradictions with this spec

11. FINAL RULE

If you are unsure where something belongs —
it goes into 00_GOVERNANCE until decided.

This document is law.
