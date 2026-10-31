---
name: coolify
description: Deploy and manage applications on Coolify v4 via CLI. Handles deploy triggers, health checks, env var management, and log inspection for Coolify-hosted projects.
---

# Coolify Skill

## When to use

Only from the `/SHIP` routine (`.agents/routines/SHIP.md`): staging deploys may be autonomous with complete evidence; production deploys need explicit human approval each time. If health or smoke fails, roll back (see Rollback in `.deploy.md`) before anything else.

## Usage

```bash
# Deploy application
bun run .agents/skills/coolify/scripts/coolify-cli.ts deploy <UUID>

# Health check
bun run .agents/skills/coolify/scripts/coolify-cli.ts health <URL>

# View logs
bun run .agents/skills/coolify/scripts/coolify-cli.ts logs <UUID>
```

## Setup

1. Set `COOLIFY_TOKEN` in your environment or `.env` (get it from Coolify → API Tokens).
2. Set `COOLIFY_BASE_URL` to your Coolify instance URL, without `/api/v1` (e.g. `https://coolify.your-domain.com`).
3. See `.deploy.md` for project-specific UUIDs and URLs.

## Script

`scripts/coolify-cli.ts` is a minimal, project-agnostic client (Bun or Node 18+). Extend it per project if you need more Coolify endpoints.
