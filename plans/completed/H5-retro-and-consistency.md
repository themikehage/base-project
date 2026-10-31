# H5 — Close-out retro and consistency fixes

**Status**: done
**Objective**: Lessons from each plan feed back into the protocol; stale docs are aligned.

**Active rules**: none (protocol files only).

---

## Current State (As-Is)

- No step turns surprises into rules. README says "typecheck y lint" instead of `verify`. `about.md` template doesn't mention evidence or browser checks.

## Target State (To-Be) — Acceptance Criteria

- [x] **H5-A1** — `EXECUTE.md` closing step: "Retro" — if the work surfaced a surprise, a user correction, or a failed attempt, add a one-line gotcha to `about.md` (Key Constraints & Gotchas) or a rule to `.agents/rules/`; otherwise state "no lessons".
- [x] **H5-A2** — Plan template ends with a **Retro** line to be filled at close.
- [x] **H5-A3** — README flow text reflects `verify`, evidence, deviation, SHIP and retro.
- [x] **H5-A4** — `about.md` template Project Commands notes optional browser/e2e check command.
- [x] **H5-A5** — `project-setup` SKILL.md mentions the new files (SHIP, evidence, retro) where it lists protocol files.

## Artifacts

1. MODIFY `.agents/routines/EXECUTE.md`, `.agents/templates/plan.md`, `README.md`, `about.md`, `.agents/skills/project-setup/SKILL.md`

## Non-Negotiable Constraints

1. Placeholders in `about.md`/`steps.md` stay placeholders.
2. Conventional commit, no AI attribution.

## Verification

```bash
grep -n "Retro" .agents/routines/EXECUTE.md .agents/templates/plan.md
grep -n "typecheck y lint" README.md   # -> no output
```
