# Hito N — {{MILESTONE_TITLE}}

**Objective**: {{ONE_LINE_OBJECTIVE}}.

**Active rules**: `frontend.rules.md` · `backend.rules.md`.

---

## Current State (As-Is)

- {{CURRENT_STATE_1}}
- {{CURRENT_STATE_2}}

---

## Target State (To-Be) — Acceptance Criteria

- [ ] **HN-A1** — {{CRITERION_1}}
- [ ] **HN-A2** — {{CRITERION_2}}
- [ ] **HN-A3** — TypeScript check passes with exit code 0.
- [ ] **HN-A4** — No console errors in the browser / runtime.

---

## Artifacts

### 1. MODIFY `path/to/file.ts`

{{DESCRIPTION_OF_CHANGE}}

```typescript
// Key code snippet or interface
```

### 2. NEW `path/to/new-file.ts`

{{DESCRIPTION_OF_NEW_FILE}} (max {{N}} lines)

- Method `foo()`: does X.
- Method `bar()`: does Y.

---

## Non-Negotiable Constraints

1. {{CONSTRAINT_1}} — **not touched in this milestone**.
2. Zero `any` in new code.
3. New files ≤ 300 lines.
4. Conventional commit after completion.

---

## Verification

```bash
# TypeScript check
npx tsc --noEmit
# -> exit code 0

# Build check
npm run build
# -> no errors
```

Manual verification: {{MANUAL_VERIFICATION_STEPS}}.
