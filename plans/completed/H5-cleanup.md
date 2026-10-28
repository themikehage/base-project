# H5 — Limpieza de skills, idioma y rules

**Status**: done
**Objective**: Quitar referencias rotas y suposiciones de stack.

**Active rules**: ninguna.

---

## Current State (As-Is)

- Skill coolify apunta a `scripts/coolify-cli.ts` inexistente (resume-pro lo añadió con un commit aparte).
- AGENTS no menciona `.agents/skills/`; README omite frontend-design.
- Idioma mezclado (AGENTS en inglés, design.rules y README en español).
- Las rules asumen React/Zod/`packages/shared`; `about.md` asume npm mientras project-setup asume bun.

## Target State (To-Be) — Acceptance Criteria

- [x] **H5-A1** — Skill coolify: script genérico mínimo incluido en `scripts/coolify-cli.ts`; sin referencias rotas.
- [x] **H5-A2** — AGENTS.md añade sección corta "Skills" listando las disponibles.
- [x] **H5-A3** — Idioma unificado (protocolo y rules en inglés, README y conversación en español) documentado en AGENTS.
- [x] **H5-A4** — project-setup indica eliminar/adaptar rules que no apliquen al stack (p. ej. Flutter); comandos de `about.md` neutros (`<pm> run verify`).
- [x] **H5-A5** — README refleja estructura real (`git ls-files` coincide con el árbol).

## Artifacts

MODIFY `AGENTS.md`, `README.md`, `about.md`, `.agents/skills/*`, `.agents/rules/*` (solo idioma si se acuerda).

## Non-Negotiable Constraints

1. No se reescribe el contenido de las rules, solo idioma/encabezado.
2. Commit: `chore(protocol): fix skills references and normalize language`.

## Verification

```bash
ls .agents/skills/coolify/scripts/ 2>/dev/null; git ls-files | sort
```
