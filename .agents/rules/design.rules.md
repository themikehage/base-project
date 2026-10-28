---
trigger: always_on
---

# Design Rules — Interface Design Principles (Linear & Primer Style)

Immovable rules for professional, data-dense, premium-usability web interfaces. Every component, screen, or visual refactor must follow them.

---

## 1. Document Canvas & Zero "Card Inception"

- **Document structure:** Design the page as a continuous canvas. Nesting cards inside cards with heavy shadows, thick borders, or decorative gradients (*glows*) is forbidden.
- **Resource Box Pattern:** Tables, feeds, and lists use a single container with a subtle 1px border (`border-border`), a neutral surface (`bg-surface`), and rows separated by clean dividers (`divide-y divide-border`).
- **Maximum signal-to-noise ratio:** Every pixel must carry information or structure. Remove ornaments with no functional purpose.

---

## 2. Dual Typography & Numeric Scanning

- **UI text:** Sans-serif (e.g. Inter, Geist) for headings, navigation, descriptive labels, and forms.
- **Data and metrics:** Monospace (e.g. JetBrains Mono, Geist Mono) is mandatory for amounts, numeric figures, timestamps/dates, hashes, IDs, and metrics.
- **Tabular alignment:** Numeric figures in lists and tables are right-aligned with `tabular-nums` and consistent decimals for immediate vertical comparison.

---

## 3. Semantic Color Discipline

- **Neutral surfaces:** Calibrated monochrome scales (canvas, container surface, elevated/hover surface).
- **Color is reserved exclusively for meaning:**
  - **Green:** Positive states, confirmations, inflows/income.
  - **Red:** Destructive actions, critical errors, drops.
  - **Amber/Yellow:** Warnings, pending items, transitions.
  - **Blue/Accent:** Interactive focus, active selection, informational links.
- **No decorative gradients:** Avoid rainbow backgrounds or needlessly multicolored buttons.

---

## 4. Touch-First & No Hover Traps

- **Never hide critical controls behind hover:** Edit, delete, copy, or configure actions must not depend on `group-hover:opacity-100`. Touch screens have no hover.
- **Permanently visible, muted:** Controls are always visible with subtle contrast (`text-muted hover:text-foreground`) and a minimum touch area of 32x32px (40px+ on mobile screens).

---

## 5. Mobile Adaptability: Popovers vs Bottom Sheets

- **Desktop (≥ sm/md):** Filters, dropdowns, and selectors open as popovers anchored to their trigger.
- **Mobile (< sm/md):** Every selector or context menu becomes a **Bottom Sheet** anchored to the bottom with `backdrop-blur`, comfortable touch height, and an accessible close button.

---

## 6. Standardized Confirmation Dialogs

- **No `window.confirm()` or `window.alert()`:** Blocking native browser dialogs are forbidden.
- **Explicit confirmation modal:** Any destructive or irreversible action must open an accessible modal dialog that explains the consequences, with a semantic danger button.

---

## 7. Native Scroll & Viewport Respect

- **Scroll belongs to `window`:** Avoid trapping the main content in inner `div`s with `overflow-y-auto`, unless it is an editor/chat with explicit split panes.
- **Inertia and shortcuts:** Window scroll guarantees smooth 60/120 FPS, native key support (`Space`, `PageUp/Down`), and predictable behavior of fixed toolbars.

---

## 8. Data Density & Metric Strips

- **Metric Strips over giant widgets:** Replace huge cards with giant numbers by compact horizontal metric strips (`Metric A: 120 · Metric B: 45 · Total: 165`).
- **Responsive wrapping:** Use `flex-wrap` and conditional separators (`hidden sm:inline`) so strips do not overflow on small screens (< 400px).

---

## 9. Keyboard Accessibility & Focus States

- **Every interactive element is focusable:** Visible focus rings (`focus-visible:ring-2 focus-visible:outline-none`).
- **Standard shortcuts:** `Escape` always closes modals, sheets, and popovers. `Enter`/`Space` activate buttons. Support `Cmd+K` / `Ctrl+K` if a search or command palette exists.

---

## 10. Skeletons & Clear Empty States

- **Skeletons over spinners:** When loading lists or dense panels, use structured skeletons that respect the final layout, avoiding flickering screens or generic centered spinners.
- **Actionable empty states:** When there is no data, explain what is missing and offer the primary action button to create it (never leave a blank container).
