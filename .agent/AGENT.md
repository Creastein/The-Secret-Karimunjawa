# AGENT RULES — The Secret Karimunjawa
# Stack: React 18 + TypeScript + Vite + Tailwind CSS v3 + Framer Motion + GSAP

These rules are STRICT and NON-NEGOTIABLE. Every code change, refactor, or new
feature MUST comply with all rules below. No exceptions. No guessing.

---

## 1. ANTI-HALLUCINATION RULES

- **NEVER invent file paths, component names, or imports** that don't exist yet.
  Always verify with `list_dir` or `grep_search` before referencing.
- **NEVER assume a package is installed.** Check `package.json` first. If a
  package is missing, propose installing it — do NOT silently use it.
- **NEVER fabricate prop types.** Read the actual component source before passing props.
- **NEVER guess what a function does.** Read it with `view_file` or
  `view_code_item` first.
- If unsure about ANY fact, say so explicitly and ask the user.

---

## 2. PROJECT STRUCTURE (STRICT — DO NOT DEVIATE)

```
src/
├── App.tsx               # Root app — routing + global layout only
├── index.tsx             # Entry point — never edited unless env changes
├── index.css             # Global styles + Tailwind base
│
├── components/
│   ├── layout/           # Structural shell: Navbar, Footer, Section
│   ├── sections/         # Page sections: Hero, About, Gallery, etc.
│   └── ui/               # Reusable primitives: Button, Preloader, etc.
│
├── config/               # Static data/config: site metadata, nav links, projects
├── hooks/                # Custom React hooks only (useScroll, useAnimation, etc.)
└── lib/                  # Pure utilities: cn(), formatDate(), etc.
```

### Placement Rules
| File type              | Correct location            |
|------------------------|-----------------------------|
| Page-level section     | `src/components/sections/`  |
| Layout shell           | `src/components/layout/`    |
| Reusable UI primitive  | `src/components/ui/`        |
| Static data / config   | `src/config/`               |
| Custom React hook      | `src/hooks/`                |
| Pure utility function  | `src/lib/`                  |

- **NO flat files in `src/components/`** directly — always use a subfolder.
- **NO business logic in layout components.** Layout = structure only.
- **NO hardcoded strings in JSX.** Text content comes from `src/config/`.

---

## 3. TYPESCRIPT RULES

- **Strict mode is ON** (`tsconfig.json`). Never use `any` or `// @ts-ignore`.
- Every component MUST have an explicit `interface Props {}` or `type Props = {}`.
- Export types from the file where they are defined, never duplicate.
- Use `React.FC<Props>` consistently for all components.
- Enums are forbidden. Use `as const` objects instead.

```typescript
// ✅ CORRECT
const VARIANT = { primary: 'primary', secondary: 'secondary' } as const;
type Variant = typeof VARIANT[keyof typeof VARIANT];

// ❌ WRONG
enum Variant { primary, secondary }
```

---

## 4. COMPONENT RULES

- One component per file. Filename = component name (PascalCase).
- Component files use `.tsx`. Utility files use `.ts`.
- Props interface declared at the TOP of the file, before the component.
- No anonymous default exports:

```typescript
// ✅ CORRECT
export default function Hero() { ... }

// ❌ WRONG
export default () => { ... }
export default function() { ... }
```

- Side effects only in `useEffect`. Never at module level.
- Never read `window` or `document` outside of `useEffect` or event handlers.

---

## 5. ANIMATION RULES

This project uses **Framer Motion as PRIMARY** animation library and **GSAP as
secondary** (only for timeline-specific or scroll-based effects not easily done
in Framer Motion).

### Framer Motion
- Use `variants` + `staggerChildren` for list/grid reveals.
- Use `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true }}` for
  scroll-triggered animations.
- **NEVER mix GSAP and Framer Motion on the same element.**
- Wrap page sections with `motion.section` or `motion.div`.

### GSAP
- Use only inside `useEffect` with a cleanup (`gsap.context(() => {}).revert()`).
- Never use `gsap.globalTimeline` or modify globals.
- GSAP ScrollTrigger MUST call `ScrollTrigger.refresh()` after layout changes.

---

## 6. STYLING RULES

- **Tailwind utility classes** are the ONLY way to style components.
- **No inline `style={{}}` props** unless absolutely required (e.g., dynamic
  CSS variables). If used, leave a comment explaining why.
- Custom CSS goes ONLY in `src/index.css` under a clear comment block.
- No separate `.module.css` files — Tailwind handles everything.
- Use the `cn()` utility from `src/lib/` for conditional class merging.

```typescript
// ✅ CORRECT
<div className={cn('flex items-center', isActive && 'bg-brand')} />

// ❌ WRONG
<div style={{ display: 'flex', alignItems: 'center' }} />
```

---

## 7. IMPORT ORDER (enforced by convention)

Imports must follow this order, separated by a blank line:

```typescript
// 1. React / framework
import { useState, useEffect } from 'react';

// 2. Third-party libraries
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

// 3. Internal — absolute from src/
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

// 4. Internal — relative siblings / children
import Button from './Button';
```

---

## 8. NAMING CONVENTIONS

| Entity              | Convention     | Example                    |
|---------------------|----------------|----------------------------|
| Component file      | PascalCase     | `HeroSection.tsx`          |
| Utility / hook file | camelCase      | `useScrollPosition.ts`     |
| Config file         | camelCase      | `siteConfig.ts`            |
| CSS class (custom)  | kebab-case     | `.hero-gradient`           |
| Constants           | SCREAMING_SNAKE| `MAX_ITEMS`                |
| Variables / funcs   | camelCase      | `handleScroll`             |
| Types / Interfaces  | PascalCase     | `type HeroProps = {}`      |

---

## 9. PERFORMANCE RULES

- Images in `public/` MUST be WebP or AVIF. No PNG/JPG in production.
- Use `loading="lazy"` on all `<img>` tags below the fold.
- `React.memo()` only when there is a proven, measured render issue.
- No `useEffect` with an empty dep array if it truly has dependencies.
- Never import an entire library. Use named imports:

```typescript
// ✅ CORRECT
import { motion, AnimatePresence } from 'framer-motion';

// ❌ WRONG
import * as Framer from 'framer-motion';
```

---

## 10. PRE-TASK CHECKLIST

Before writing a single line of code, the agent MUST:

1. [ ] Read the relevant existing file(s) with `view_file`
2. [ ] Verify all imports / dependencies exist in `package.json`
3. [ ] Confirm the correct folder placement per Section 2
4. [ ] Check for existing similar components before creating new ones
5. [ ] Confirm TypeScript interfaces for any new props
6. [ ] Identify animation library to use (Framer Motion vs GSAP) per Section 5

---

## 11. FORBIDDEN PATTERNS

These patterns are **ABSOLUTELY PROHIBITED**:

```typescript
// ❌ NEVER use `any`
const data: any = fetchData();

// ❌ NEVER suppress TypeScript errors
// @ts-ignore
const x = broken();

// ❌ NEVER use inline styles for layout
<div style={{ marginTop: '20px' }} />

// ❌ NEVER create barrel re-exports without a clear reason
// src/components/index.ts  ← FORBIDDEN unless the project explicitly needs it

// ❌ NEVER duplicate config data across files
// Define once in src/config/, import everywhere

// ❌ NEVER leave console.log in committed code
console.log('debug'); // ← REMOVE before finalizing

// ❌ NEVER use default exports for utilities/config
export default { siteConfig }; // ← WRONG, use named exports
```

---

## 12. COMMIT-READY CHECKLIST

Before marking any task as complete, verify:

- [ ] Zero TypeScript errors (`tsc --noEmit`)
- [ ] Zero `console.log` or debug statements
- [ ] All new files follow naming and placement rules (Section 2 + 8)
- [ ] No unused imports or variables
- [ ] Animation library rules followed (Section 5)
- [ ] No inline styles unless documented (Section 6)
- [ ] Props interfaces defined for all new components (Section 3)
