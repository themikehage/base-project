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

### Server
- `<pm> run dev` — Local dev server

### Client
- `<pm> run dev` — Vite dev server (:5173)
- `<pm> run build` — Production bundle
