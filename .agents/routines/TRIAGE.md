---
name: TRIAGE
description: Analyze a feature request or bug before writing any code.
---

# /TRIAGE

Run when the user brings a feature request, improvement, or bug report.

## Protocol

1. **Stop. Do not execute.**
2. Read `about.md` and the files involved in the request.
3. Determine scope:

**Small** (≤ 2 files, isolated change):
- Create `plans/hito-N-<slug>.md` following the structure in `plans/Verificable-Plan-Example.md`.
- Present it for approval before touching any code.

**Large** (cross-cutting, multiple files, or architectural):
- Decompose into numbered, independent milestones.
- Create one plan file per milestone in `plans/`.
- Each milestone must be completable and verifiable in isolation.
4. **STOP and wait for user approval:**
   - Present the plan to the user.
   - You are strictly forbidden from writing, editing, or deleting code until the user explicitly approves the milestone.

## Every Plan Must Include

- Which rules apply (`frontend.rules.md`, `backend.rules.md`, `design.rules.md`).
- Checkboxed acceptance criteria that are **verifiable by command or observation**.
- A **Non-Negotiable Constraints** section (what MUST NOT be broken or touched).
- A **Verification** section with runnable commands (`tsc`, `lint`, `build`).
- The canonical structure from `plans/Verificable-Plan-Example.md`.
