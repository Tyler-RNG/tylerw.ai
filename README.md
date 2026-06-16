# tylerw.ai

Personal site — the **Signal** look: dark operator-console aesthetic, one blue accent, system fonts, hairline borders. Built with [Astro](https://astro.build), deployed to Cloudflare Pages.

## Edit the content

All copy lives in one file: **`src/data/site.ts`**. Name, tagline, the terminal
offerings, services, bio, calendar link, email, and socials. Anything marked
`// TODO` is a placeholder to confirm or replace.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output to dist/
npm run preview  # preview the production build
```

Requires Node 22 (see `.nvmrc`).

## Design system

Tokens are ported verbatim into `src/styles/tokens.css` (colors, type, radii,
spacing, motion). `src/styles/global.css` layers the brand primitives on top.
Rules: one accent (blue `#5b8def`), no gradients/imagery in chrome, system fonts
only, weight ≤ 600, depth via surface steps not shadow.

## Deploy

Pushes to `main` deploy automatically via Cloudflare Pages.

- Build command: `npm run build`
- Output directory: `dist`
- Node version: `22`

## Structure

```
src/
  data/site.ts        ← all editable content
  styles/             ← tokens + global base
  components/         ← Terminal, Hero, WhatIDo, About, Proof, Contact, Footer, Icon
  layouts/Base.astro  ← <head>, meta, OG tags
  pages/index.astro   ← assembles the page
public/               ← favicon, static assets
```
