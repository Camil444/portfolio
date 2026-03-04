# Portfolio — Camil Hennebert

Portfolio personnel construit avec **Next.js 16** (App Router) et **Tailwind CSS v4**.

## Stack

- Next.js 16 (App Router)
- Tailwind CSS v4
- TypeScript
- Police Aeonik (CoType Foundry)
- Déployé sur Vercel

## Développement

```bash
npm install
npm run dev
```

Le site est en ligne sur [https://camil-portfolio.vercel.app](https://camil-portfolio.vercel.app).

## Structure

```
src/
  app/
    page.tsx        — Accueil (hero, stack technique, projet)
    cv/page.tsx     — CV (expériences, formations)
    about/page.tsx  — À propos (bio, contact, langues)
  components/
    NavBar.tsx      — Navigation sticky
    Footer.tsx      — Pied de page
    Marquee.tsx     — Défilement infini stack technique
```

## Déploiement

Push sur `main` → Vercel build et déploie automatiquement.
