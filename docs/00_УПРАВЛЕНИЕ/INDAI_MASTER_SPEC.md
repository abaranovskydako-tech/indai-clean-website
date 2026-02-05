
⚠️ **Правило:**  
Файлы **НЕ должны** лежать напрямую в `/документы` — только в категориях.

---

## 5. GOVERNANCE RULES

### 5.1 Hierarchy of Truth

1. `INDAI_MASTER_SPEC.md` (this file)
2. Other files in `00_УПРАВЛЕНИЕ`
3. Canonical brand & product docs
4. Content files
5. Code implementation

---

### 5.2 Naming Rules

- Folders: `NN_CATEGORY_NAME`
- Files: `UPPER_SNAKE_CASE.md`
- No Russian symbols in filenames
- No duplicates
- No vague names like `final`, `new`, `test`

---

## 6. CONTENT RULES

- Content lives ONLY in:
  - `01_БРЕНД`
  - `02_КОНТЕНТ_УСЛУГИ`
- Markdown is the **source**, not HTML
- Pages are generated from MD files
- No content logic in code

---

## 7. AI & AUTOMATION RULES

- AI widgets follow `INDAI_AI_WIDGET_PLACEMENT_CANON.md`
- AI must not:
  - disrupt UX
  - block content
  - override user intent
- AI assists, not dominates

---

## 8. CHANGE MANAGEMENT

Any structural change requires:
1. Update in this spec
2. Commit message explaining reason
3. No silent refactors

---

## 9. WHAT IS FORBIDDEN

❌ Duplicate folders  
❌ Files outside categories  
❌ Contradicting documentation  
❌ Mixing governance and content  
❌ Untracked decisions  

---

## 10. FINAL RULE

If you are unsure where something belongs —  
**it belongs in 00_УПРАВЛЕНИЕ until decided.**

---

**This document is law.**
