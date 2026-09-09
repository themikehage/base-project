# Base Project — AI Agent Starter Scaffold

Plantilla base y protocolo sistemático para regir el comportamiento de agentes de IA en proyectos de software.

## Estructura

```
├── AGENTS.md                          # Protocolo obligatorio del agente y disparadores
├── about.md                           # Arquitectura, stack y decisiones (lectura previa obligatoria)
├── steps.md                           # Backlog vivo y registro de progreso
├── .deploy.md                         # Guía y parámetros de despliegue en producción
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
│       │   └── SKILL.md               # Skill de despliegue y health check
│       └── project-setup/
│           └── SKILL.md               # Guía para poblar protocol files en greenfield/brownfield
└── plans/
    └── Verificable-Plan-Example.md    # Plantilla canónica para hitos y planes verificables
```

## Flujo de Trabajo para el Agente

1. **`/START`**: Al iniciar, lee `about.md`, `steps.md` y `.deploy.md` para entender el contexto sin tocar código.
2. **`/TRIAGE`**: Ante cualquier feature o bug, detiene la ejecución, investiga y genera un plan verificable con criterios de aceptación en `plans/`. Espera la aprobación del usuario.
3. **`/EXECUTE`**: Una vez aprobado el plan, ejecuta el hito, corre typecheck y lint, y genera un commit convencional sin atribución de IA.
