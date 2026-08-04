# Nightfall

*A world tour of myth & fable.*

Nightfall is a dark, celestial reading site: a "Hall of Doors" where the great
myths of the world hang open as doorways, each one retold across three
chaptered **nights**. Flip the hall's lens and the same doors become stars —
every culture keeps its own constellation, and touching a star opens its story.

**Live site:** <https://stannrodriguez.github.io/nightfall/>

## What's inside

- **Two lenses on the hall.** The hall opens on the **Sky** — a star chart
  where each culture's myths form a constellation with connecting lines and
  minor stars. A toggle switches to **Doors**, a grid of arched doorways with
  animated emblems. Your choice is remembered in `localStorage`.
- **Tonight's door.** One myth is featured each night, rotating daily on the
  UTC date, computed on the client so every visitor sees today's pick.
- **Stories told in three nights.** Each myth is a single page with three
  chapters, night-tab navigation, a shifting hero gradient per night, and an
  "About this myth" note on the sources behind the retelling.
- **Realm chips.** In the Doors lens, myths filter by realm — realms grow in
  even sets, so no category outpaces the others.
- **Fully static.** No framework runtime, no tracking — just Astro-rendered
  HTML, one stylesheet, and two small inline scripts.

## The doors tonight

| Realm | Doors |
| --- | --- |
| The Sky | The Fall of Icarus (Greek) · Amaterasu and the Cave (Japanese) · How Māui Snared the Sun (Māori) · Chang’e Flies to the Moon (Chinese) · The Weaver Girl and the Cowherd (Chinese) · Oshun’s Flight (Yoruba) |
| Fire & Ending | Ragnarök (Norse) · The Fifth Sun (Aztec) · The Death of Baldr (Norse) · Nüwa Mends the Sky (Chinese) · The Eye of Ra (Egyptian) |
| The Crossroads | How Anansi Got the Stories (Akan) · The First Day of Hermes (Greek) · Anansi and the Pot of Wisdom (Akan) · The Secret Name of Ra (Egyptian) · Oisín in the Land of Youth (Irish) |
| The Underworld | Orpheus Looks Back (Greek) · Izanami and Izanagi (Japanese) · Savitri and the Lord of Death (Hindu) · Isis and Osiris (Egyptian) · Inanna’s Descent (Sumerian) |
| The Deep | The Churning of the Ocean (Hindu) · Thor Goes Fishing (Norse) · How Māui Fished Up the Land (Māori) · Gilgamesh and the Plant of Youth (Sumerian) · The Children of Lir (Irish) |

Twelve cultures keep constellations in the sky: Greek, Norse, Japanese, Akan,
Aztec, Māori, Hindu, Chinese, Egyptian, Sumerian, Irish, and Yoruba. New doors
are carved with every moon.

## Project structure

```
src/
├── data/
│   └── myths.js          # The single source of truth: every myth, culture,
│                         # constellation, and sky position. All views derive
│                         # from this module.
├── layouts/
│   └── Base.astro        # Shared head, fonts, and global stylesheet
├── pages/
│   ├── index.astro       # The hall: sky + doors lenses, tonight's pick
│   └── myth/[id].astro   # One statically generated story page per myth
└── styles/
    └── global.css        # All styling, including both lenses and story pages
```

Built with [Astro](https://astro.build) (`output: 'static'`) and served from
the `/nightfall/` base path.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321/nightfall/
npm run build    # static output in dist/
npm run preview  # serve the built site locally
```

## Adding a myth

All views (doors grid, filter chips, sky constellations, tonight's rotation,
story routes) derive from `src/data/myths.js`:

1. Append one myth object to the `myths` array — id, names, culture, realm,
   accent color, door gradient, emblem, orb, three hero gradients, an
   epigraph, an `about` note on sources, and three nights of two paragraphs
   each (~120–160 words per night, literary and wry).
2. Give it a star position in `skyPos`.
3. New culture? Add an entry in `cultures` with a constellation color, label
   position, minor stars, and connecting lines. New realm? Nothing to do — it
   becomes a filter chip automatically.

Style notes:

- Keep accents in the same dark celestial family and emblems
  abstract-geometric — no illustrations, no emoji.
- Keep realms balanced — add stories in even realm sets so no category
  outgrows the others.

### Sky layout rules

Every named star draws its title and meta caption *below* the dot — roughly
13% of the canvas wide and 10% tall. When placing stars:

- Keep named stars **~12% apart on at least one axis** so captions never
  collide, and keep minor stars and culture labels out of every caption box.
- Each culture owns a region of the canvas (Māori top-left, Norse top-center,
  Hindu top-right, Greek left, Japanese right, Akan bottom-center, Aztec
  bottom-left, Chinese center, Egyptian bottom-right, Sumerian lower-left
  edge, Irish top-left corner, Yoruba lower-center-right); place new stars
  inside their culture's region.
- Lean minor stars toward the middle of the canvas so the center of the sky
  never reads as empty.

The mobile sky derives automatically: each culture's stars are normalized into
a compact stacked cluster, so only the desktop coordinates need care.

## Deployment

Pushes to `main` build and deploy via GitHub Actions
(`.github/workflows/deploy.yml`) to GitHub Pages. In the repository settings,
set **Pages → Source** to **GitHub Actions**.
