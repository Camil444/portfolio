# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio website for Camil Hennebert (Data Analyst). Built with Next.js 16 App Router + Tailwind CSS v4.

## Commands

- `npm run dev` — Start dev server (http://localhost:3000)
- `npm run build` — Production build
- `npm run lint` — ESLint

## Architecture

```
src/
  app/
    layout.tsx      — Root layout (SEO meta, NavBar, Footer)
    page.tsx        — Home: hero, stack ticker, project cards
    cv/page.tsx     — CV: experiences + formations
    about/page.tsx  — Bio, contact, languages, interests
    globals.css     — @font-face (Aeonik), Tailwind theme, keyframes
    icon.svg        — Favicon (CH initials)
  components/
    NavBar.tsx      — Client component, sticky nav with active pill state (usePathname)
    Footer.tsx      — Server component
public/fonts/       — Aeonik OTF files (Light, Regular, Medium, Bold, Black)
```

## Design System

- **Font**: Aeonik (300 Light, 400 Regular, 500 Medium, 700 Bold, 800 Black)
- **Colors**: beige `#f5f5eb`, card `#faf9f3`, accent `#c8e634`, text `#1a1a1a`, text-secondary `#555`
- **Style**: Minimaliste, border-radius 12-16px, borders `rgba(0,0,0,0.08)`
- Custom Tailwind theme colors defined via `@theme inline` in globals.css (Tailwind v4 syntax)

## Assets

- `Aeonik TRIAL/` — Source font files (OTF, trial license). Subset copied to `public/fonts/`.
