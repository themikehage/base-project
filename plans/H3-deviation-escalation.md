# H3 — Deviation rule and escalation list

**Status**: approved
**Objective**: The agent knows when to stop and ask, written as explicitly as when to proceed.

**Active rules**: none (protocol files only).

---

## Current State (As-Is)

- The only stop point is plan approval. Nothing covers plans that turn out wrong mid-execution.

## Target State (To-Be) — Acceptance Criteria

- [ ] **H3-A1** — `AGENTS.md` has a "Deviation & Escalation" section with the deviation rule: out-of-plan files, a criterion that cannot be met, or growth beyond the lane → stop, record it, return to `/TRIAGE`.
- [ ] **H3-A2** — Same section lists mandatory-human actions: production deploy, data migrations, destructive/irreversible operations, secrets/credentials, auth/permission changes, scope or acceptance-criteria changes, spending.
- [ ] **H3-A3** — States the principle: asking costs minutes, a wrong irreversible action costs far more; when unsure, ask.
- [ ] **H3-A4** — `EXECUTE.md` step 2 references the deviation rule.

## Artifacts

1. MODIFY `AGENTS.md` (new section, renumber nothing else)
2. MODIFY `.agents/routines/EXECUTE.md`

## Non-Negotiable Constraints

1. Existing section numbers referenced by other files are **not renumbered** (new section is appended before Non-Negotiable Constraints as "8" and Language/Constraints shift only if no file links by number).
2. Conventional commit, no AI attribution.

## Verification

```bash
grep -n "Deviation" AGENTS.md .agents/routines/EXECUTE.md
grep -rn "AGENTS.md §" . --include=*.md   # check no stale section refs
```
