# INDAI MASTER SPEC — ADDENDUM P0.1

## Metadata

| Field | Value |
|-------|-------|
| Status | **CANONICAL — BINDING** |
| Date | 2025-02-07 |
| Location | `/docs/00_GOVERNANCE/ADDENDUM_P0.1.md` |
| Supersedes | Conflicting path assumptions in MASTER_SPEC §6 |
| Authority | Equal to MASTER_SPEC within declared scope |

---

## Purpose

Resolves a structural contradiction between MASTER_SPEC §6 (assumed `src/` prefix)
and the actual repository structure (root-level directories).

---

## Contradiction

### MASTER_SPEC §6 assumes:
```
src/app/
src/components/
src/types/
```

### Repository reality:
```
app/
components/
types/
```

---

## Resolution (BINDING)

The **root-level structure is the single canonical path**.

| MASTER_SPEC reference | Canonical path (BINDING) |
|----------------------|--------------------------|
| `src/app/` | `app/` |
| `src/components/` | `components/` |
| `src/types/` | `types/` |

⚠️ **There is NO `src/` directory. Do not create it. Do not reference it.**
Any tool, agent, or CI process encountering `src/` in specs MUST silently resolve to the root-level equivalent.

---

## Scope of application

This addendum applies to:
- All CloudCode / Cursor agent sessions
- All CI/CD pipelines and validation scripts
- All governance audits and readiness reports
- All future canonical documents referencing project structure

## Affected documents

| Document | Affected section |
|----------|-----------------|
| `INDAI_MASTER_SPEC.md` | §6 — Project structure |
| `INDAI_CURSOR_AGENT_PROMPT.md` | Boot Sequence, Document Hierarchy |
| Any future implementation spec | Path references |

---

## Expiration

This addendum remains valid until explicitly revoked by a newer MASTER_SPEC version or superseding ADDENDUM.
