# H1 — Higiene de secretos de deploy

**Status**: done
**Objective**: Que `.deploy.md` real nunca entre en git y el template solo distribuya un ejemplo.

**Active rules**: ninguna (protocolo, sin código de aplicación).

---

## Current State (As-Is)

- `.deploy.md` está trackeado en el template aunque `.gitignore` lo excluye; los proyectos copiados lo heredan en git (just-post lo tiene trackeado).
- `project-setup/SKILL.md` y `AGENTS.md` §3 asumen que `.deploy.md` ya existe.

## Target State (To-Be) — Acceptance Criteria

- [x] **H1-A1** — `git ls-files .deploy.md` no devuelve nada; existe `.deploy.example.md` trackeado.
- [x] **H1-A2** — `.gitignore` excluye `.deploy.md` y no `.deploy.example.md`.
- [x] **H1-A3** — `project-setup/SKILL.md` indica copiar `.deploy.example.md` → `.deploy.md` y rellenarlo.
- [x] **H1-A4** — `AGENTS.md` §3 y `README.md` mencionan el par example/real.

## Artifacts

1. RENAME `.deploy.md` → `.deploy.example.md` (`git mv`) y recrear copia local ignorada.
2. MODIFY `.gitignore`, `AGENTS.md` §3, `README.md`, `.agents/skills/project-setup/SKILL.md` §D.

## Non-Negotiable Constraints

1. No se tocan los placeholders `{{...}}` del contenido.
2. Un solo commit convencional: `chore(deploy): track example guide, ignore real .deploy.md`.

## Verification

```bash
git ls-files | grep -x '.deploy.md' ; test $? -eq 1
git check-ignore .deploy.md && ! git check-ignore .deploy.example.md
```
