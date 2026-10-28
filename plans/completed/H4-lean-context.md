# H4 — Contexto ligero por sesión

**Status**: done
**Objective**: Reducir lo que el agente lee en cada sesión y dar casa a las ideas sueltas.

**Active rules**: ninguna.

---

## Current State (As-Is)

- `steps.md` crece sin límite (agentik 276 líneas, the-spaces 578) con párrafos por hito.
- `next-steps.md` surgió ad hoc en 5 proyectos.
- `/START` lee `.deploy.md` siempre y referencia `BASE_PROJECT` sin definir.
- `about.md` debe actualizarse "tras cualquier corrección".

## Target State (To-Be) — Acceptance Criteria

- [x] **H4-A1** — `steps.md`: Completed = una línea + enlace al plan archivado (formato documentado en la propia cabecera).
- [x] **H4-A2** — Nuevo `inbox.md` en el template; TRIAGE indica revisarlo y promover entradas a planes.
- [x] **H4-A3** — START lee `about.md` y `steps.md`; `.deploy.md` solo al desplegar. Referencia a `BASE_PROJECT` eliminada o definida.
- [x] **H4-A4** — Regla de `about.md`: actualizar solo si cambian arquitectura, restricciones, variables de entorno o comandos.

## Artifacts

MODIFY `steps.md`, `.agents/routines/START.md`, `TRIAGE.md`, `AGENTS.md` §1–§2, `README.md`. NEW `inbox.md`.

## Non-Negotiable Constraints

1. No se migran los `steps.md` de proyectos derivados en este hito.
2. Commit: `docs(protocol): slim steps, add inbox, narrow about.md updates`.

## Verification

```bash
grep -n "BASE_PROJECT" -r . --include=*.md   # sin resultados o definido
test -f inbox.md && wc -l steps.md
```
