---
name: project-setup
description: Comprehensive guide for AI agents on how to inspect codebases and accurately populate protocol files (about.md, steps.md, .deploy.md, AGENTS.md, and plans/) when bootstrapping a greenfield project or retrofitting an existing repository.
---

# Project Setup Skill — Protocol & Scaffold Bootstrapping

This skill instructs AI agents on how to initialize, audit, and populate the agent protocol files (`AGENTS.md`, `about.md`, `steps.md`, `.deploy.md`, `.gitignore`, and `plans/`) for any codebase.

---

## 1. Ground Truth Principle

> **Never invent architecture or assume progress.**  
> Every statement in `about.md`, `steps.md`, and `.deploy.md` must be backed by tangible evidence: inspect files, check configurations, review git history, and run validation commands (`tsc`, `build`, `test`).

---

## 2. Greenfield vs. Brownfield Detection

Before touching any file, determine the repository state:

| Condition | Scenario | Strategy |
|---|---|---|
| Empty directory, or only initial commit with empty scaffold | **Greenfield (New Project)** | Set up baseline architecture, define initial roadmap (`H1 — Foundation`), create blank configuration templates. |
| Existing application code, commit history, dependencies installed | **Brownfield (Existing Project)** | **Audit first.** Extract reality from code, verify test/build status, document actual constraints and gotchas, align `steps.md` with current feature completeness. |

---

## 3. Step-by-Step File Population Guide

### A. `AGENTS.md` — The Operational Protocol Entrypoint

1. **Project Name**: Replace `{{PROJECT_NAME}}` with the official application name.
2. **Relative Paths**: Confirm that all referenced files exist:
   - `./about.md`
   - `./steps.md`
   - `./.deploy.md`
   - `./.agents/routines/START.md`, `TRIAGE.md`, `EXECUTE.md`
   - `./.agents/rules/backend.rules.md`, `frontend.rules.md`, `design.rules.md`
3. **Domain Constraints**: In section `## 6. Non-Negotiable Constraints`, append critical project-wide rules (e.g. "Zero `any` in core layer", "All financial values in integer cents", "Files ≤ 300 lines").

---

### B. `about.md` — Architecture, Domain & Constraints Hub

This file is the mandatory read-first document for any agent before writing code. Keep it dense, structured, and factual.

#### 1. Header & Summary
- `Last updated`: Today's date (`YYYY-MM-DD`).
- `Stack`: Concise summary line (e.g. `Bun + Hono + SQLite + React 19 + Tailwind CSS v4`).
- `Summary`: 1–2 paragraphs explaining:
  - What problem the project solves.
  - Who the user is.
  - Core domain entities.

#### 2. Architecture & Directory Map
Inspect the project tree (`src/`, `client/`, `apps/`, `packages/`):
- Identify architectural style: Ports & Adapters (Hexagonal), Clean Architecture, Modular Monolith, Serverless Workers, or Fullstack SPA/SSR.
- Map top-level directories and their single responsibility:
  - Domain / Core logic (schemas, business rules, pure functions).
  - Adapters / Infrastructure (DB clients, external API clients, file storage).
  - Delivery / Transport (HTTP routers, CLI commands, background jobs).
  - Frontend SPA (pages, components, hooks, state context).

#### 3. Tech Stack Matrix
Fill out the explicit table:
```markdown
| Layer | Technology | Version / Notes |
|---|---|---|
| **Runtime** | Bun / Node / Deno / Cloudflare Workers | Exact engine |
| **Backend Framework** | Hono / Express / Fastify / Nest | HTTP router |
| **Frontend Framework** | React / Vue / Svelte / Vite / Next.js | Client UI |
| **Styling** | Tailwind CSS / CSS Modules | Design tokens |
| **Database & ORM** | SQLite / PostgreSQL / Drizzle / Prisma | Storage engine |
| **Testing** | Bun Test / Vitest / Jest | Test runner |
| **Deploy Target** | Coolify / Cloudflare / Docker / VPS | Infra target |
```

#### 4. Key Constraints & Gotchas (CRITICAL)
Inspect code and configuration for technical traps:
- **Database isolation in tests**: Does `test` run against an isolated SQLite file (e.g. `test.sqlite`) to avoid destroying dev data?
- **Runtime-specific APIs**: Are there dependencies on Bun-only (`bun:sqlite`, `Bun.serve`) or Node-only APIs?
- **Puppeteer / Headless Browsers**: Does the project run Chromium in Docker (`PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium`)?
- **Data Persistence**: Is `./data` or another path required as a mounted volume in production?
- **Port Allocations & Proxies**: Backend port (e.g. `:4000`) vs frontend dev server (e.g. `:5173` with reverse proxy).

#### 5. Environment Variables
Inspect `.env.example`, `env.ts`, or schema definitions. Document each key:
```markdown
| Key | Description | Default / Example |
|---|---|---|
| `PORT` | HTTP server port | `4000` |
| `DB_PATH` | Path to persistent database | `./data/app.sqlite` |
```
*(Never include real secret values in `about.md`.)*

#### 6. Runnable Project Commands
Extract real npm/pnpm/bun scripts from `package.json`:
- Dev commands: separate backend dev vs frontend dev vs concurrent hot-reload (`pnpm dev`).
- Quality gates: `typecheck` (`tsc --noEmit`), `lint`, `test`.
- Build commands: client bundle compilation and production assets.

---

### C. `steps.md` — Living Roadmap & Progress Tracker

This document reflects current milestone execution status.

#### Greenfield Project:
Define the initial sequential milestones:
- `[ ] **H1 — Foundation**: Scaffold, environment validation, database connection, health check.`
- `[ ] **H2 — Core Domain**: Business logic schemas, validation, ports.`
- `[ ] **H3 — API Routes**: HTTP endpoints and integration tests.`
- `[ ] **H4 — Frontend UI / Integration**: User interface and consumption of API.`
- `[ ] **H5 — Production Deployment**: Dockerfile, CI/CD, and hosting config.`

#### Brownfield Project (Existing Codebase):
1. **Audit Git & Code**: Review git log and existing routes/components.
2. **Reconcile Completed Work**: Add completed features to `## Completed` with `[x]` and descriptions.
3. **Inspect Working Tree**: Add any uncommitted or partially implemented features to `## In Progress`.
4. **Populate Backlog**: Add pending features or planned milestones to `## Backlog`.
5. **Link Plans**: If milestones have dedicated files in `plans/` (e.g. `plans/H10-docx-ingestion.md`), link them directly in markdown.

---

### D. `.deploy.md` — Production Infrastructure & Deploy Protocol

> **SECURITY MANDATE:** `.deploy.md` must be added to `.gitignore`. It contains internal URLs, infrastructure UUIDs, and production credentials.

#### 1. Production Parameters Table
```markdown
| Parameter | Value |
|---|---|
| **Production URL** | `https://app.your-domain.com` |
| **Health Check** | `https://app.your-domain.com/health` |
| **Deploy Target** | Coolify / Cloudflare / Docker VPS |
| **Application UUID** | `{{COOLIFY_OR_SERVICE_UUID}}` |
| **Git Repository** | `git@github.com:org/repo.git` (`main`) |
| **Container Port** | `3000` |
| **Persistent Volume** | `/app/data` (for SQLite / uploads) |
```

#### 2. Redeploy Flow
Document the exact command sequence:
1. Local validation (`bun run typecheck && bun test`).
2. Git commit and push to `main`.
3. Deployment trigger (e.g. Coolify CLI skill trigger or git webhook).
4. Health check validation.

---

### E. `.gitignore` Verification

Verify and ensure that the root `.gitignore` excludes:
```gitignore
# Deploy guide with secrets
.deploy.md

# Environment variables
.env
.env.*
!.env.example

# Databases and persistent volumes
data/
*.sqlite
*.sqlite-journal

# Build outputs and dependencies
node_modules/
dist/
client/dist/
```

---

## 4. Discovery Audit Routine (Brownfield Inspection)

When adopting an existing repository, run this command checklist in order:

```bash
# 1. Inspect file tree and identify tools
ls -la

# 2. Check package scripts and dependencies
cat package.json

# 3. Check git history and active changes
git status -s
git log -n 10 --oneline

# 4. Check for environment configuration
ls -la .env*

# 5. Check if the project currently compiles cleanly
npm run typecheck # or bun run typecheck / tsc --noEmit
npm test          # or bun test
```

After completing the audit, write or update the protocol files immediately.
