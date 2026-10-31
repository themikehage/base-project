# H4 — Integration: `/SHIP` routine

**Status**: done
**Objective**: Integration has a defined path: branch/PR, gate, deploy by reversibility, smoke of the change, rollback.

**Active rules**: none (protocol files only).

---

## Current State (As-Is)

- `/EXECUTE` ends at commit. `.deploy.example.md` pushes straight to `main` with `typecheck`+`build` only. No rollback, no deploy criteria.

## Target State (To-Be) — Acceptance Criteria

- [x] **H4-A1** — New `.agents/routines/SHIP.md` with preconditions (plan `done`, evidence complete, `verify` green, clean tree).
- [x] **H4-A2** — SHIP defines autonomy by reversibility: PR/branch push → autonomous; staging deploy → autonomous only with complete evidence; production, migrations, irreversible ops → explicit human approval each time.
- [x] **H4-A3** — SHIP requires a post-deploy smoke of the *changed behavior* (not only `/health`) and defines rollback (revert commit + redeploy, or Coolify previous deployment) with the trigger: smoke fails → roll back, then report.
- [x] **H4-A4** — `AGENTS.md` routine table includes `/SHIP`; README structure/flow updated.
- [x] **H4-A5** — `.deploy.example.md` uses `verify`, drops direct `git add .`/push-to-main as the default, and adds a Rollback section and a Smoke section.
- [x] **H4-A6** — `coolify` SKILL.md gains a "When to use" note linking to SHIP (no script changes).

## Artifacts

1. NEW `.agents/routines/SHIP.md`
2. MODIFY `AGENTS.md`, `README.md`, `.deploy.example.md`, `.agents/skills/coolify/SKILL.md`

## Non-Negotiable Constraints

1. `.deploy.md` (git-ignored) is **not touched**.
2. `coolify-cli.ts` is **not modified**.
3. Conventional commit, no AI attribution.

## Verification

```bash
test -f .agents/routines/SHIP.md
grep -n "SHIP" AGENTS.md README.md .agents/skills/coolify/SKILL.md
grep -n "verify" .deploy.example.md
```
