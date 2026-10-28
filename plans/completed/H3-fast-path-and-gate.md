# H3 — Vía rápida y gate de validación único

**Status**: done
**Objective**: Eliminar la contradicción sobre cuándo hace falta plan y convertir el gate en un único comando por proyecto.

**Active rules**: ninguna.

---

## Current State (As-Is)

- AGENTS §4 exige TRIAGE para todo; §6 dice "plan si 2+ archivos"; TRIAGE llama "Small" a ≤2 archivos y pide plan igualmente.
- EXECUTE: `lint # if configured`; la regla ≤300 líneas no se comprueba.

## Target State (To-Be) — Acceptance Criteria

- [x] **H3-A1** — AGENTS define tres vías: **Trivial** (1 archivo, sin cambio de comportamiento: typo, copy, config menor → sin plan, con verify + commit), **Small** (plan corto) y **Large** (hitos).
- [x] **H3-A2** — §4, §6 y TRIAGE usan los mismos umbrales (`grep` no encuentra "2+ files" contradictorio).
- [x] **H3-A3** — `about.md` define el comando `verify` obligatorio (typecheck + lint + check:size + test + build); EXECUTE y AGENTS §4.4 lo referencian como único gate.
- [x] **H3-A4** — project-setup indica crear `verify` y `check:size` (script que falla si un archivo >300 líneas) al adoptar un proyecto.

## Artifacts

MODIFY `AGENTS.md` §4 y §6, `.agents/routines/TRIAGE.md`, `.agents/routines/EXECUTE.md`, `about.md` (sección Commands), `.agents/skills/project-setup/SKILL.md`.

## Non-Negotiable Constraints

1. La vía Trivial nunca aplica a lógica, esquemas, auth ni deploy.
2. Commit: `docs(protocol): add trivial fast path and single verify gate`.

## Verification

```bash
grep -n "verify" AGENTS.md about.md .agents/routines/EXECUTE.md
```
Revisión manual: leer §4/§6/TRIAGE y confirmar que un typo y un feature de 5 archivos tienen una única vía posible.
