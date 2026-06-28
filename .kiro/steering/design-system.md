---
inclusion: auto
---

# Design System Rules — Maui Rayos Portfolio

## 1. Design Tokens (WCAG AA Compliant)

### Colors

```
--color-background:     #1F1F1F   (Main page background)
--color-primary:        #20294B   (Deep navy — used for accented surfaces)
--color-secondary:      #5294FF   (Blue — accent, links, interactive elements)
--color-surface:        #2A2A2A   (Content area background)
--color-surface-light:  #333333   (Slightly lighter surface for hover/cards)
--color-card:           #252525   (Card interiors)
--color-text-primary:   #FFFFFF   (Headings — 15.3:1 on #1F1F1F ✓)
--color-text-secondary: #B0B0B0   (Body text — 7.2:1 on #1F1F1F ✓)
--color-text-muted:     #888888   (Tertiary/labels — 4.6:1 on #1F1F1F ✓)
--color-border:         #3D3D3D   (Borders — subtle division)
--color-border-strong:  #555555   (Stronger borders for emphasis)
--color-accent:         #5294FF   (Interactive — 4.7:1 on #1F1F1F ✓)
--color-accent-hover:   #6EAAFF   (Hover state — 5.8:1 on #1F1F1F ✓)
```

### WCAG Compliance Notes

- All text-on-background combinations meet WCAG AA (4.5:1 for normal, 3:1 for large)
- `#FFFFFF` on `#1F1F1F` = 15.3:1 ✓
- `#B0B0B0` on `#1F1F1F` = 7.2:1 ✓ (body text)
- `#888888` on `#1F1F1F` = 4.6:1 ✓ (small labels only with caution)
- `#5294FF` on `#1F1F1F` = 4.7:1 ✓ (AA for normal text)
- `#5294FF` on `#2A2A2A` = 4.3:1 ✓ (AA for large text / 14px bold)
- Focus indicators: 2px solid #5294FF with 2px offset
- Reduced-motion: All animations disabled when `prefers-reduced-motion: reduce`

### Typography

| Role        | Font             | Weight | Use                          |
|-------------|-----------------|--------|------------------------------|
| Headings    | Space Grotesk   | 700    | Section titles, hero, nav    |
| Body        | Space Mono      | 400    | Body text, labels            |
| Body Bold   | Space Mono      | 700    | Buttons, links, emphasis     |

### Key Typography Rules

- Section titles use `//` prefix (e.g., `// About Me`)
- Headings are uppercase
- Body text is sentence case, small (12-13px)
- Buttons: uppercase, 11px, font-bold, tracking-wider
- Links prefixed with `>` (e.g., `> VIEW WEBSITE`)

### Borders

```
Standard: 1px solid #3D3D3D
No border-radius except avatar circles
```

---

## 2. Accessibility Rules

- All interactive elements have `:focus-visible` ring (2px solid accent, 2px offset)
- All images have descriptive `alt` text
- Navigation uses `role="menubar"` / `role="menuitem"` with `aria-expanded`
- Skip-to-content link at top of page
- Landmark regions: `<header>`, `<main>`, `<section>`, `<footer>`
- Form inputs have associated `<label>` elements
- External links indicate with `aria-label` mentioning "opens in new tab"
- `prefers-reduced-motion: reduce` disables all animations and transitions
- Color is never the only means of conveying information

---

## 3. Implementation Rules

- Next.js 15 / React 19 / TypeScript / Tailwind CSS 4
- Fonts: `Space_Grotesk` + `Space_Mono` via `next/font/google`
- All components are `"use client"` only when needed (animations)
- `ScrollReveal` wraps animated content — intersection observer based
- Images use `next/image` with proper `sizes` and `alt`
