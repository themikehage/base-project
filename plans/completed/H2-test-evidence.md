# H2 — Tests: evidence per criterion

**Status**: done
**Objective**: "Approved" means every acceptance criterion has recorded evidence, not just a passing build.

**Active rules**: none (protocol files only).

---

## Current State (As-Is)

- Plan template uses `npx tsc`/`npm run build` instead of `verify`; manual verification has no tool or evidence.
- Agent ticks `[x]` with nothing recorded.

## Target State (To-Be) — Acceptance Criteria

- [x] **H2-A1** — `plan.md` template has an **Evidence** section: one line per criterion (command output, screenshot path, log excerpt).
- [x] **H2-A2** — Template Verification uses `<pm> run verify`; no standalone tsc/build block.
- [x] **H2-A3** — `EXECUTE.md` forbids setting `done` while any criterion lacks evidence, and tells the agent to drive behavioral criteria through a real run (browser/CLI/HTTP), citing `agent-browser` when UI is involved.
- [x] **H2-A4** — `EXECUTE.md` requires a self-review pass of the diff against the plan (scope + criteria) before closing.
- [x] **H2-A5** — Criteria that cannot be checked by command or observation (e.g. "no console errors") must state how they are checked.

## Artifacts

1. MODIFY `.agents/templates/plan.md`
2. MODIFY `.agents/routines/EXECUTE.md`
3. MODIFY `.agents/routines/TRIAGE.md` ("Every Plan Must Include")

## Non-Negotiable Constraints

1. `verify` stays the single gate.
2. Conventional commit, no AI attribution.

## Verification

```bash
grep -n "Evidence" .agents/templates/plan.md .agents/routines/EXECUTE.md
grep -c "npx tsc" .agents/templates/plan.md   # -> 0
```
