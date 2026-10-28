# Agent Protocol — {{PROJECT_NAME}}

Any AI agent working in this repository must follow these instructions **strictly**.

---

## 1. Mandatory Read-First Rule

Before any investigation, code change, feature, or bug fix:

> **You MUST read [about.md](./about.md) to understand the project architecture, tech stack, domain, and key constraints.**

When a change alters architecture, key constraints, environment variables, or project commands:

> **You MUST update [about.md](./about.md) in the same commit.** Other changes do not require it.

---

## 2. Plans & Steps

- Active and pending work lives in [plans/](./plans/) as `H<N>-<slug>.md`, created from [.agents/templates/plan.md](./.agents/templates/plan.md). Each plan carries `Status: draft | approved | done`; `/EXECUTE` only runs `approved` plans.
- Completed milestones are archived in [plans/completed/](./plans/completed/).
- Overall progress is tracked in [steps.md](./steps.md) (one line per milestone, linking its plan).
- Unplanned ideas and requests go to [inbox.md](./inbox.md); `/TRIAGE` promotes them to plans.

---

## 3. Deploy

> Deployment guide and environment configuration (read only when deploying): [.deploy.md](./.deploy.md)  
> *(git-ignored — contains production URLs, UUIDs. Created from the tracked template [.deploy.example.md](./.deploy.example.md).)*

---

## 4. Agent Routines (MANDATORY EXECUTION)

Routines are strict operational workflows. When a trigger condition is met, **you MUST read the corresponding routine file completely and execute every step in sequence without skipping or improvising**.

| Routine | Dedicated File | When It Applies (Triggers) |
|---|---|---|
| **`/START`** | [.agents/routines/START.md](./.agents/routines/START.md) | First time opening the project, starting a new work session, or after a long pause. |
| **`/TRIAGE`** | [.agents/routines/TRIAGE.md](./.agents/routines/TRIAGE.md) | Any feature request, bug report, refactor, or optimization that is not **Trivial** (see Work Lanes). Never write code directly. |
| **`/EXECUTE`** | [.agents/routines/EXECUTE.md](./.agents/routines/EXECUTE.md) | **ONLY** after the user explicitly reviews and approves an existing plan in `plans/`. |

### Work Lanes

| Lane | Criteria | Flow |
|---|---|---|
| **Trivial** | 1 file, no behavior change (typo, copy, comment-free config tweak). Never logic, schemas, auth, or deploy. | No plan. Run `verify`, commit conventionally. |
| **Small** | 2–3 files, one isolated behavior. | `/TRIAGE` → one plan → `/EXECUTE`. |
| **Large** | Cross-cutting or architectural. | `/TRIAGE` → numbered milestones → `/EXECUTE` one at a time. |

If unsure, it is not Trivial.

### Strict Operational Rules:
1. **Never jump straight into coding:** Outside the Trivial lane, when the user asks for a feature or reports a bug, you are strictly forbidden from writing code immediately. You MUST trigger `/TRIAGE`, read [.agents/routines/TRIAGE.md](./.agents/routines/TRIAGE.md), and deliver an approved plan first.
2. **Read the routine file first:** Before starting any routine, read its dedicated file in [.agents/routines/](./.agents/routines/) to ensure zero deviation from the current protocol.
3. **One milestone at a time:** `/EXECUTE` only processes the single active approved milestone. Never batch multiple milestones together.
4. **Mandatory validation gate:** every lane ends with the project's single `verify` command (defined in `about.md`: typecheck, lint, file-size check, tests, build) passing, then a clean conventional commit.

---

## 5. Architecture Principles & Code Rules

Before writing any plan or code, consult the project rules:
- **Backend Rules**: [.agents/rules/backend.rules.md](./.agents/rules/backend.rules.md) (Ports first, context DI, sub-routers, Zod, typed errors).
- **Frontend Rules**: [.agents/rules/frontend.rules.md](./.agents/rules/frontend.rules.md) (1 hook per page, service modules only, domain components, no external state lib).
- **Design Rules**: [.agents/rules/design.rules.md](./.agents/rules/design.rules.md) (Document canvas, dual typography, semantic color, touch-first, mobile sheets).

The rules files take precedence over any default agent behavior.

---

## 6. Non-Negotiable Constraints

- **No code without a plan** outside the Trivial lane (see Work Lanes).
- **No direct singletons** — use dependency injection.
- **No `any`** in new code — strict TypeScript always.
- **Files ≤ 300 lines** — extract when growing.
- **Conventional commits only** — no AI attribution.
