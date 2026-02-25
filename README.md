# mathewe.com

Personal website built with [Astro](https://astro.build).

## Quick Start

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview production build
```

Deploys automatically to GitHub Pages on push to `main`.

## Project Structure

```
src/
├── data/site.ts        # all content lives here
├── layouts/Base.astro   # shell: head, layout, JS
├── styles/global.css    # all styles
├── pages/               # one file per route
│   ├── index.astro      # /
│   ├── research.astro   # /research
│   ├── cv.astro         # /cv
│   └── projects.astro   # /projects
└── components/          # reusable UI
public/                  # static assets (images, favicon, CNAME)
```

## Editing Content

All content is in `src/data/site.ts`. Edit the relevant field and the site updates everywhere:

- **Bio, tagline, status** — `site.home`
- **Publications** — `site.research.publications`
- **Experience / education** — `site.cv`
- **Projects** — `site.art.projects`
- **Highlight chips** — `site.home.highlights`
- **Nav links** — `site.nav.links`

## Adding a Page

1. Create `src/pages/your-page.astro`:

```astro
---
import Base from "../layouts/Base.astro";
---
<Base title="Title" description="Description.">
  <div class="page-intro">
    <h1>Title</h1>
  </div>
</Base>
```

2. Add to `site.nav.links` in `src/data/site.ts`.
