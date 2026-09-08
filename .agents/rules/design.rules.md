---
trigger: always_on
---

# Design Rules — Principios de Diseño de Interfaces (Linear & Primer Style)

Reglas inamovibles para interfaces web profesionales, de alta densidad de datos y usabilidad prémium. Todo componente, pantalla o refactor visual debe cumplirlas.

---

## 1. Document Canvas & Cero "Card Inception"

- **Estructura de documento:** La página se diseña como un lienzo continuo. Prohibido anidar tarjetas dentro de tarjetas con sombras pesadas, bordes gruesos o degradados decorativos (*glows*).
- **Resource Box Pattern:** Tablas, feeds y listas usan un contenedor único con borde sutil de 1px (`border-border`), superficie neutra (`bg-surface`) y filas delimitadas por divisores limpios (`divide-y divide-border`).
- **Máxima relación señal/ruido:** Cada píxel debe aportar información o estructura. Eliminar adornos sin propósito funcional.

---

## 2. Tipografía Dual y Escaneo Numérico

- **Texto de UI:** Sans-Serif (ej. Inter, Geist) para títulos, navegación, etiquetas descriptivas y formularios.
- **Datos y Métricas:** Monospace (ej. JetBrains Mono, Geist Mono) obligatoria para importes, cifras numéricas, timestamps/fechas, hashes, IDs y métricas.
- **Alineación tabular:** Cifras numéricas en listas y tablas alineadas a la derecha con `tabular-nums` y decimales consistentes para comparación vertical inmediata.

---

## 3. Disciplina Cromática Semántica

- **Superficies neutras:** Escalas monocromáticas calibradas (canvas, superficie de contenedor, superficie elevada/hover).
- **Color reservado exclusivamente para significado:**
  - **Verde:** Estados positivos, confirmaciones, entradas/ingresos.
  - **Rojo:** Destructivo, errores críticos, caídas.
  - **Ámbar/Amarillo:** Advertencias, pendientes, transiciones.
  - **Azul/Acento:** Focos interactivos, selección activa, links informativos.
- **Sin gradientes decorativos:** Evitar fondos arcoíris o botones multicolores innecesarios.

---

## 4. Touch-First y Cero Acciones Ocultas (No Hover Traps)

- **Prohibido ocultar controles críticos tras hover:** Acciones de editar, eliminar, copiar o configurar no pueden depender de `group-hover:opacity-100`. En pantallas táctiles no existe el hover.
- **Visibilidad permanente atenuada:** Controles siempre visibles con contraste sutil (`text-muted hover:text-foreground`) y área táctil mínima de 32x32px (40px+ en pantallas móviles).

---

## 5. Adaptabilidad Móvil: Popovers vs Bottom Sheets

- **Desktop (≥ sm/md):** Filtros, dropdowns y selectores se abren como popovers anclados a su disparador.
- **Mobile (< sm/md):** Todo selector o menú contextual se transforma en un **Bottom Sheet** anclado al fondo con `backdrop-blur`, altura táctil cómoda y botón de cierre accesible.

---

## 6. Diálogos de Confirmación Estandarizados

- **Cero `window.confirm()` o `window.alert()`:** Prohibido el uso de diálogos nativos bloqueantes del navegador.
- **Modal de confirmación explícito:** Cualquier acción destructiva o irreversible debe invocar un diálogo modal accesible con explicación clara de consecuencias y botón semántico de peligro.

---

## 7. Scroll Nativo y Respeto al Viewport

- **Scroll perteneciente a `window`:** Evitar encerrar el contenido principal en `div` interiores con `overflow-y-auto` a menos que sea un editor/chat con paneles divididos explícitos.
- **Inercia y atajos:** El scroll de ventana garantiza 60/120 FPS fluidos, soporte nativo de teclas (`Space`, `PageUp/Down`) y comportamiento predecible de barras de herramientas fijas.

---

## 8. Densidad de Datos y Tiras Métricas

- **Metric Strips sobre Widgets gigantes:** Reemplazar tarjetas colosales con números gigantes por franjas métricas horizontales compactas (`Métrica A: 120 · Métrica B: 45 · Total: 165`).
- **Responsive wrapping:** Usar `flex-wrap` y separadores condicionales (`hidden sm:inline`) para que las tiras no desborden en pantallas pequeñas (< 400px).

---

## 9. Accesibilidad por Teclado y Estados de Foco

- **Todo elemento interactivo es focuseable:** Anillos de foco visibles (`focus-visible:ring-2 focus-visible:outline-none`).
- **Atajos estándar:** `Escape` siempre cierra modales, sheets y popovers. `Enter`/`Space` activan botones. Soporte de `Cmd+K` / `Ctrl+K` si existe buscador o Command Palette.

---

## 10. Skeletons y Estados Vacíos Claros

- **Skeletons sobre Spinners:** En cargas de listas o paneles densos, usar skeletons estructurados que respeten el layout final, evitando pantallas parpadeantes o spinners genéricos en el centro.
- **Empty States accionables:** Cuando no hay datos, explicar qué falta y ofrecer el botón de acción principal para crearlo (no dejar un contenedor en blanco).
