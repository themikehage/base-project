---
name: coolify
description: Deploy and manage applications on Coolify v4 via CLI. Handles deploy triggers, health checks, env var management, and log inspection for Coolify-hosted projects.
---

# Coolify Skill

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

1. Set `COOLIFY_TOKEN` in your environment (get it from Coolify → API Tokens).
2. Set `COOLIFY_BASE_URL` to your Coolify instance URL (e.g. `https://coolify.your-domain.com`).
3. See `.deploy.md` for project-specific UUIDs and URLs.

## Script Location

Place `coolify-cli.ts` in `.agents/skills/coolify/scripts/`.
Copy from another project (e.g. `just-post/.agents/skills/coolify/scripts/coolify-cli.ts`).
