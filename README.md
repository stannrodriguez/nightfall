# Nightfall

A world tour of myth & fable — a dark, celestial "Hall of Doors" where each myth
is a doorway (or a star in its culture's constellation), opening onto a story
told in three chaptered "nights."

Built with [Astro](https://astro.build) as a fully static site, deployed to
GitHub Pages at `/nightfall/`.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321/nightfall/
npm run build    # static output in dist/
```

## Adding a myth

All views (doors grid, filter chips, sky constellations, tonight's rotation,
story routes) derive from `src/data/myths.js`:

1. Append one myth object to the `myths` array — id, names, culture, realm,
   accent color, door gradient, emblem, orb, three hero gradients, an
   epigraph, an optional `about` note, and three nights of two paragraphs each
   (~120–160 words per night, literary and wry).
2. Give it a star position in `skyPos`.
3. New culture? Add an entry in `cultures` with a constellation color, label
   position, minor stars, and connecting lines. New realm? Nothing to do — it
   becomes a filter chip automatically.

Keep accents in the same dark celestial family and emblems abstract-geometric —
no illustrations, no emoji.

## Deployment

Pushes to `main` build and deploy via GitHub Actions
(`.github/workflows/deploy.yml`) to GitHub Pages. In the repository settings,
set **Pages → Source** to **GitHub Actions**.
