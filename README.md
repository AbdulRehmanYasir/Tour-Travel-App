# Wanderly — Tour & Travel Website

A responsive static tour & travel website built with React + Vite. Built for React Project 0
(component decomposition, props drilling, CSS in React).

## Tech
- React 19 + Vite (plain JS, no TypeScript)
- Plain CSS per component (CSS variables for theming, no framework)
- No backend — all data is static, from `src/data/siteData.js`

## Getting started
```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Component tree
```
App
├─ Navbar               (nav links + brand drilled down; mobile menu toggle)
├─ Hero                 (title/subtitle/stats props)
├─ Destinations         (maps destinations[] -> DestinationCard, drills onSelectDestination)
│  └─ DestinationCard   (reusable card; receives single destination + onSelect)
├─ Packages             (maps packages[] -> PackageCard)
│  └─ PackageCard       (reusable pricing card)
├─ Testimonials         (maps testimonials[] -> TestimonialCard)
│  └─ TestimonialCard   (reusable review card)
├─ ContactCta           (self-contained newsletter form, local state)
├─ Footer               (brand + nav links drilled down)
└─ DestinationModal     (controlled by selectedDestination state in App)
```

State (`selectedDestination`) is lifted up to `App` and drilled down through
`Destinations -> DestinationCard` (via `onSelectDestination`) and back out to
`DestinationModal`, demonstrating one level of prop drilling with a callback.

9 components total, all reusable/parameterized via props (well above the 5 required).

## Deployment
**Vercel**
1. Push this folder to a new GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: Vite. Build command: `npm run build`. Output dir: `dist`.
4. Deploy — you'll get a live URL.

**Netlify**
1. Push this folder to a new GitHub repo.
2. Go to app.netlify.com → Add new site → Import an existing project.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy — you'll get a live URL.

Or drag-and-drop the `dist/` folder directly into Netlify's dashboard for a quick deploy
without connecting GitHub.
