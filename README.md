# The Secret Karimunjawa

Landing page untuk **The Secret Karimunjawa** — properti villa beachfront eksklusif di Kepulauan Karimunjawa, Jawa Tengah.

Built with React 18, TypeScript, Vite, dan Tailwind CSS.

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 3.4 + custom design tokens |
| Animation | Framer Motion, GSAP |
| SEO | react-helmet-async (OG / Twitter Cards) |
| Icons | hugeicons-react |
| Fonts | Fraunces (serif), Manrope (sans) via Google Fonts |

## Project Structure

```
src/
├── components/
│   ├── layout/         # Navigation, Footer, Section wrapper
│   ├── sections/       # Hero, Estate, Suites, Experience,
│   │                   # Gallery, Testimonials, Contact, Location
│   └── ui/             # Preloader, AvailabilityStickyBar, WhatsAppIcon
├── config/             # Site data (rooms, gallery, pricing, reviews)
├── hooks/              # useScrollSpy, useScrollVisibility, useLockBodyScroll
├── lib/                # Utility functions
├── App.tsx
├── index.tsx
└── index.css
```

## Getting Started

### Prerequisites

- Node.js >= 18
- npm (atau yarn / pnpm)

### Install & Run

```bash
# clone repo
git clone https://github.com/user/the-secret-karimunjawa.git
cd the-secret-karimunjawa

# install dependencies
npm install

# jalankan dev server di port 3000
npm run dev
```

### Build Production

```bash
npm run build    # output ke dist/
npm run preview  # preview build lokal
```

## Features

- **Lazy loading** — sections di-load on demand via `React.lazy` + `Suspense` untuk first paint yang cepat
- **Scroll-driven animations** — kombinasi Framer Motion `whileInView` dan GSAP ScrollTrigger
- **Custom hooks** — scroll spy untuk highlight nav aktif, scroll visibility untuk sticky bar
- **Responsive** — mobile-first layout, fluid typography
- **SEO-ready** — meta tags, Open Graph, Twitter Cards via react-helmet-async
- **Design tokens** — color palette custom (ocean-deep, teak-accent, bleached-sand, dll.) di Tailwind config
- **Preloader** — loading screen dengan animasi sebelum konten tampil
- **WhatsApp CTA** — floating button untuk kontak langsung
- **Availability bar** — sticky bottom bar sebagai call-to-action reservasi

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server (port 3000) |
| `npm run build` | TypeScript check + production build |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint check |

## Path Aliases

```ts
// vite.config.ts
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
  }
}
```

Import pakai `@/components/...` alih-alih relative path.

## License

Private — hak cipta dilindungi.
