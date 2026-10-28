---
name: TRIAGE
description: Analyze a feature request or bug before writing any code.
---

# /TRIAGE

Run when the user brings a feature request, improvement, or bug report.

## Protocol

1. **Stop. Do not execute.**
2. Read `about.md` and the files involved in the request.
3. Determine the lane (see Work Lanes in `AGENTS.md`). If it is **Trivial**, tell the user and go straight to the fix, `verify` and commit — no plan.

**Small** (2–3 files, isolated change):
- Create `plans/H<N>-<slug>.md` from `.agents/templates/plan.md` with `Status: draft`.
- Present it for approval before touching any code.

**Large** (cross-cutting, 4+ files, or architectural):
- Decompose into numbered, independent milestones.
- Create one plan file per milestone in `plans/` (`H<N>-<slug>.md`, `Status: draft`).
- Each milestone must be completable and verifiable in isolation.
4. **STOP and wait for user approval:**
   - Present the plan to the user.
   - You are strictly forbidden from writing, editing, or deleting code until the user explicitly approves the milestone. On approval, set `Status: approved` in the plan.

## Every Plan Must Include

- Which rules apply (`frontend.rules.md`, `backend.rules.md`, `design.rules.md`).
- Checkboxed acceptance criteria that are **verifiable by command or observation**.
- A **Non-Negotiable Constraints** section (what MUST NOT be broken or touched).
- A **Verification** section with runnable commands, always including `verify`.
- The canonical structure from `.agents/templates/plan.md`.
