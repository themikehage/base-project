# H2 — Ciclo de vida del plan y cierre de hito

**Status**: done
**Objective**: Estado explícito en los planes, nombres únicos, archivado definido y commit limpio en un solo paso.

**Active rules**: ninguna.

---

## Current State (As-Is)

- La aprobación solo existe en el chat; el plan no tiene estado.
- `plans/completed/` se menciona pero no existe ni EXECUTE lo usa.
- Naming dispar: `hito-N-<slug>` (TRIAGE) vs `H10-...` (project-setup).
- La plantilla vive mezclada con planes reales.
- EXECUTE comita antes de marcar criterios/steps/about, y usa `git add .`.

## Target State (To-Be) — Acceptance Criteria

- [x] **H2-A1** — Plantilla movida a `.agents/templates/plan.md` con cabecera `Status: draft | approved | done`.
- [x] **H2-A2** — TRIAGE crea `plans/H<N>-<slug>.md` con `Status: draft`; EXECUTE exige `approved` y lo pasa a `done`.
- [x] **H2-A3** — EXECUTE: marcar criterios `[x]`, mover plan a `plans/completed/`, actualizar `steps.md`/`about.md` **antes** del commit; `git add` solo de rutas explícitas.
- [x] **H2-A4** — `plans/completed/.gitkeep` existe; `plans/Verificable-Plan-Example.md` eliminado; referencias actualizadas (`grep -r Verificable-Plan-Example` vacío).
- [x] **H2-A5** — Naming `H<N>-<slug>` unificado en TRIAGE, project-setup y README.

## Artifacts

MODIFY `.agents/routines/TRIAGE.md`, `.agents/routines/EXECUTE.md`, `.agents/skills/project-setup/SKILL.md`, `README.md`, `AGENTS.md` §2. NEW `.agents/templates/plan.md`, `plans/completed/.gitkeep`. DELETE `plans/Verificable-Plan-Example.md`.

## Non-Negotiable Constraints

1. Estos planes H1–H5 usan ya el nuevo formato (`Status` en cabecera).
2. Commit convencional: `docs(protocol): define plan lifecycle and closing flow`.

## Verification

```bash
grep -rn "Verificable-Plan-Example\|hito-N" . --include=*.md  # sin resultados
test -f .agents/templates/plan.md && test -d plans/completed
```
