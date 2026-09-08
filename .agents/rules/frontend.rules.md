---
trigger: always_on
---

# Frontend Rules

Immovable principles for the client. Every change must respect them.

## 1. One Hook per Page as State Machine

Each page delegates all state, effects, and callbacks to a dedicated hook (e.g. `usePageNameState`). The page component only renders — no `useState`, `useEffect`, or logic. Hooks return a plain object of values and actions.

## 2. API Calls Only Through Service Modules

Every HTTP call goes through service modules in `src/lib/api/`. Never `fetch` directly in components or hooks. Each domain has its own service file.

## 3. Domain-Based Components

New components live in `components/<domain>/`. Only generic primitives (Button, Modal, Input) go in `components/ui/`. One folder per feature.

## 4. No External State Library

React Context for shared global state. `useReducer` for complex state. Local hooks for page state. No Redux, Zustand, MobX, or similar.

## 5. Functional Components Only

Zero classes. All components are functions. Prop types are defined as inline interfaces in the same file.

## 6. Typed localStorage

Any `localStorage` access uses a typed wrapper with enum keys. In React, use a `useLocalStorage` hook. Never `localStorage.getItem/setItem` directly.

## 7. No Comments in Production Code

Code explains itself. If it needs a comment, refactor it. Only exception: TODO debt items with an issue link.

## 8. Files ≤ 300 Lines

No file exceeds 300 lines. Extract into subcomponents or hooks when growing.

## 9. Absolute Imports

Use `@/` alias for all imports within `src/`. No relative `../../../` paths.
