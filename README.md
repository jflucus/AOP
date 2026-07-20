# AOP Foundation — Website

Marketing/informational site for **Athletes of Promise Foundation (AOP Foundation)**, a NYC sports-based youth development nonprofit. Built with [Astro](https://astro.build/).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # preview the production build
```

## Project structure

```
public/
  brand/            Logo kit (SVG + PNG), favicon, icons
  favicon.png, robots.txt
src/
  config.ts         Site-wide settings: name, tagline, donate URL, contact, nav
  data.ts           Program, outcome, values, and people content
  layouts/Base.astro
  components/        Header, Footer, PageHero
  pages/            One file per route (index, about, programs, team, resources, apply,
                    get-involved, donate, partners, news, contact, 404)
  styles/global.css Brand design system (Navy #0A2245 / Gold #C68B21)
```

## Things to update before / after launch

- **Donate button** — `src/config.ts` → `donateUrl`. Currently a placeholder that shows an
  "email us to give" fallback. Paste the fiscal sponsor's secure donation URL to switch it live.
  (Year 1 giving routes through the fiscal sponsor for compliance — see the FRD.)
- **Contact email** — `src/config.ts` → `email` (used by the mailto links *and* the form endpoint).
- **Forms** — Get Involved and Contact forms post to [FormSubmit](https://formsubmit.co/) using the
  contact email. On first submission FormSubmit sends a one-time confirmation email to activate.
  Swap the `action` for any form backend you prefer (Formspree, Netlify Forms, a serverless function).
- **Team** — add board members and advisory council in `src/data.ts`; drop in real headshots to
  replace the initials avatars in `src/pages/team.astro`.
- **Domain** — set the real domain in `astro.config.mjs` (`site`) and `public/robots.txt`.
- **Statistics** — all figures are sourced (About → Evidence). Verify against primary sources before
  using in funder materials, per the source documents.

## Deploy (Vercel)

Framework preset: **Astro**. Build command `npm run build`, output `dist`. No env vars required for v1.
```
