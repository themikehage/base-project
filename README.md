# Base Project — AI Agent Starter Scaffold

Plantilla base y protocolo sistemático para regir el comportamiento de agentes de IA en proyectos de software.

## Estructura

```
├── AGENTS.md                          # Protocolo obligatorio del agente y disparadores
├── about.md                           # Arquitectura, stack y decisiones (lectura previa obligatoria)
├── steps.md                           # Backlog vivo y registro de progreso (una línea por hito)
├── inbox.md                           # Ideas y peticiones aún sin planificar
├── .deploy.example.md                 # Plantilla versionada de la guía de despliegue
├── .deploy.md                         # Copia local con valores reales (git-ignored)
├── .gitignore                         # Patrones base
├── .agents/
│   ├── routines/
│   │   ├── START.md                   # /START: Orientación y comprobación de scaffold
│   │   ├── TRIAGE.md                  # /TRIAGE: Análisis y creación obligatoria de planes
│   │   └── EXECUTE.md                 # /EXECUTE: Implementación, validación y commit
│   ├── rules/
│   │   ├── backend.rules.md           # Puertos, DI, Zod, errores tipados, files ≤ 300
│   │   ├── frontend.rules.md          # 1 hook por página, service modules, no direct fetch
│   │   └── design.rules.md            # Document canvas, tipografía dual, touch-first
│   └── skills/
│       ├── coolify/
│       │   ├── SKILL.md               # Skill de despliegue y health check
│       │   └── scripts/coolify-cli.ts # Cliente mínimo: deploy, logs, health
│       ├── frontend-design/
│       │   ├── SKILL.md               # Dirección estética para UI nueva
│       │   └── LICENSE.txt
│       └── project-setup/
│           └── SKILL.md               # Guía para poblar protocol files en greenfield/brownfield
├── .agents/templates/
│   └── plan.md                        # Plantilla canónica de plan (Status: draft | approved | done)
└── plans/
    └── completed/                     # Planes archivados (H<N>-<slug>.md)
```

## Flujo de Trabajo para el Agente

1. **`/START`**: Al iniciar, lee `about.md`, `steps.md` e `inbox.md` para entender el contexto sin tocar código (`.deploy.md` solo al desplegar).
2. **`/TRIAGE`**: Ante cualquier feature o bug, detiene la ejecución, investiga y genera un plan verificable (`plans/H<N>-<slug>.md`, `Status: draft`) con criterios de aceptación. Espera la aprobación del usuario.
3. **`/EXECUTE`**: Una vez aprobado el plan (`Status: approved`), ejecuta el hito, corre typecheck y lint, archiva el plan en `plans/completed/` y genera un commit convencional sin atribución de IA.
