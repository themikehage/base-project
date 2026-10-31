# H1 — Triage: reproduce first, explicit exits

**Status**: done
**Objective**: `/TRIAGE` asks "is this real and does it need code?" before sizing the work, and offers exits other than a plan.

**Active rules**: none (protocol files only).

---

## Current State (As-Is)

- `TRIAGE.md` jumps from reading files to choosing a lane; plan is the only outcome.

## Target State (To-Be) — Acceptance Criteria

- [x] **H1-A1** — `TRIAGE.md` has a step before lane selection: classify the request and, for bugs, reproduce it (or record why it cannot be reproduced).
- [x] **H1-A2** — `TRIAGE.md` lists the non-plan exits: no code needed, duplicate, needs info (ask the user), discard.
- [x] **H1-A3** — A bug plan must include the reproduction as its first acceptance criterion.
- [x] **H1-A4** — `AGENTS.md` lane table mentions the exits.

## Artifacts

1. MODIFY `.agents/routines/TRIAGE.md`
2. MODIFY `AGENTS.md` (Work Lanes)

## Non-Negotiable Constraints

1. Existing lane definitions are **not changed**.
2. Conventional commit, no AI attribution.

## Verification

```bash
grep -n "Reproduce\|Exits" .agents/routines/TRIAGE.md
```
