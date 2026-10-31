# About — {{PROJECT_NAME}}

> **Last updated**: {{DATE}}  
> **Stack**: {{STACK}}

{{PROJECT_NAME}} es {{ONE_LINE_DESCRIPTION}}.

---

## Architecture

{{ARCHITECTURE_DESCRIPTION}}

### Project Structure

```
{{PROJECT_STRUCTURE}}
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Runtime** | {{RUNTIME}} |
| **Framework** | {{FRAMEWORK}} |
| **Database** | {{DATABASE}} |
| **Deploy** | {{DEPLOY_TARGET}} |

---

## Key Constraints & Gotchas

- {{CONSTRAINT_1}}
- {{CONSTRAINT_2}}

---

## Environment Variables

| Key | Description |
|---|---|
| `ENV_VAR_1` | Description |
| `ENV_VAR_2` | Description |

---

## Project Commands

### Quality gate (mandatory)
- `<pm> run verify` — the single gate every change must pass: typecheck + lint + `check:size` (no file > 300 lines) + tests + build. Define it in `package.json` and keep this line accurate.

### CI (mandatory)
- Workflow: `.github/workflows/ci.yml` — runs on every push and PR, from a clean checkout: install → `<pm> run verify`. It must call `verify` and nothing that diverges from it.
- `verify` must include a real linter/formatter (e.g. Biome or ESLint + Prettier), configured and versioned in the repo.
- Install must work from a clean clone with a single command (workspaces unified); `test` must never traverse packages whose dependencies are not installed.

### Behavior check (optional)
- `<e2e/browser command>` — e2e or `agent-browser` run used as plan evidence for UI/behavior criteria.
- `/TEST` (Playwright) — optional exploratory/regression testing, see `.agents/routines/TEST.md`. Record the e2e command here once configured.

### Server
- `<pm> run dev` — Local dev server

### Client
- `<pm> run dev` — Vite dev server (:5173)
- `<pm> run build` — Production bundle
