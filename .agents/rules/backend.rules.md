---
trigger: always_on
---

# Backend Rules

Immovable principles for the server. Every change must respect them.

## 1. Ports First

Every new domain capability requires an interface in `src/core/ports/` **before** its concrete implementation in `core/infra/`. Interfaces define the contract; implementations fulfill it. No exceptions.

## 2. Dependency Injection via Context

Routes and services access core dependencies **exclusively** through the server context object. No direct singleton imports from service modules.

## 3. Sub-Router Pattern

Domains with multiple sub-resources use folder structure:
```
routes/<domain>/
  index.ts       # Assembles sub-routers only, no logic
  <sub>-crud.ts  # One file per sub-resource
```

## 4. Zod Validation on Every Route

Every route with body, query, or params uses schema validation. No unvalidated payloads. Reusable schemas live in `packages/shared/`.

## 5. Typed Errors Only

Controlled errors use a typed error hierarchy (400, 401, 403, 404, 409, 500). Never throw raw `new Error("...")` or strings.

## 6. Shared Types in `packages/shared`

Zod schemas, API types, WebSocket payloads, and front/back contracts live **exclusively** in `packages/shared`. No duplicated types or inline definitions in routes.

## 7. Strict TypeScript, No `any`

`strict: true`. Zero `any` in new code. If an adapter requires `any` due to an untyped external dependency, isolate it with an explicit cast and a TODO debt comment.

## 8. No Comments in Production Code

Code explains itself. If it needs a comment, refactor it. Only exception: TODO debt items with an issue link.

## 9. Files ≤ 300 Lines

No file exceeds 300 lines. If it grows, extract responsibilities into specialized submodules. God objects don't exist.
