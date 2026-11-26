# Nightfall

*A world tour of myth & fable.*

Nightfall is a static reading site for world myths and fables, each retold in
three chapters (**nights**). Browse stories in the **Sky** view, where each
culture forms its own constellation and selecting a star opens its story, or
switch to the **Doors** view to filter myths by realm.

**Live site:** <https://stannrodriguez.github.io/nightfall/>

## What's inside

- **Two browse views.** The home page opens on **Sky**, a star chart where each
  culture's myths form a constellation with connecting lines and minor stars. A
  toggle switches to **Doors**, a grid of arched cards with animated emblems.
  Your selection is saved in `localStorage`.
- **Tonight's story.** One myth is featured each day, rotating on the UTC date
  on the client so every visitor sees the same daily pick.
- **Stories told in three nights.** Each myth is a single page with three
  chapters, chapter-tab navigation, a distinct hero gradient for each night, and
  an "About this myth" note covering the sources behind the retelling.
- **Realm filters.** In the Doors view, filter chips sort myths by realm. Realms
  are added in even sets so no category outpaces the others.
- **Fully static.** No framework runtime and no tracking: only Astro-rendered
  HTML, one stylesheet, and two small inline scripts.

## Included myths

| Realm | Myths |
| --- | --- |
| The Sky | The Fall of Icarus (Greek) · Amaterasu and the Cave (Japanese) · How Māui Snared the Sun (Māori) · Chang’e Flies to the Moon (Chinese) · The Weaver Girl and the Cowherd (Chinese) · Oshun’s Flight (Yoruba) · Phaethon and the Chariot of the Sun (Greek) |
| Fire & Ending | Ragnarök (Norse) · The Fifth Sun (Aztec) · The Death of Baldr (Norse) · Nüwa Mends the Sky (Chinese) · The Eye of Ra (Egyptian) · Vasilisa and the Fire (Slavic) · Māui and the Fire Goddess (Māori) |
| The Crossroads | How Anansi Got the Stories (Akan) · The First Day of Hermes (Greek) · Anansi and the Pot of Wisdom (Akan) · The Secret Name of Ra (Egyptian) · Oisín in the Land of Youth (Irish) · Eshu’s Cap (Yoruba) · Ganesha and the Race Around the World (Hindu) |
| The Underworld | Orpheus Looks Back (Greek) · Izanami and Izanagi (Japanese) · Savitri and the Lord of Death (Hindu) · Isis and Osiris (Egyptian) · Inanna’s Descent (Sumerian) · Persephone and the Seeds (Greek) · Quetzalcoatl and the Bones of the Dead (Aztec) |
| The Deep | The Churning of the Ocean (Hindu) · Thor Goes Fishing (Norse) · How Māui Fished Up the Land (Māori) · Gilgamesh and the Plant of Youth (Sumerian) · The Children of Lir (Irish) · Sadko and the Tsar of the Sea (Slavic) · Sedna, Mother of the Sea (Inuit) |

All 35 myths span 14 cultures: Greek, Norse, Japanese, Akan, Aztec, Māori,
Hindu, Chinese, Egyptian, Sumerian, Irish, Yoruba, Slavic, and Inuit.

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
│   ├── index.astro       # Home page: sky + doors views, daily featured pick
│   └── myth/[id].astro   # One statically generated story page per myth
└── styles/
    └── global.css        # All styling, including both views and story pages
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

All views (doors grid, filter chips, sky constellations, daily featured
rotation, and story routes) derive from `src/data/myths.js`:

1. Append one myth object to the `myths` array with its id, names, culture,
   realm, accent color, door gradient, emblem, orb, three hero gradients,
   epigraph, `about` note on sources, and three nights of two paragraphs each
   (about 120 to 160 words per night, literary and wry).
2. Give it a star position in `skyPos`.
3. For a new culture, add an entry in `cultures` with a constellation color,
   label position, minor stars, and connecting lines. A new realm becomes a
   filter chip automatically.

Style notes:

- Keep accents in the same dark celestial palette and emblems abstract and
  geometric (no illustrations, no emoji).
- Keep realms balanced by adding stories in even realm sets so no category
  outgrows the others.

### Sky layout rules

Every named star renders its title and metadata caption *below* the dot
(roughly 13% of the canvas wide and 10% tall). When placing stars:

- Keep named stars **~12% apart on at least one axis** so captions never
  collide, and keep minor stars and culture labels out of every caption box.
- Each culture owns a region of the canvas (Māori top-left, Norse top-center,
  Hindu top-right, Greek left, Japanese right, Akan bottom-center, Aztec
  bottom-left, Chinese center, Egyptian bottom-right, Sumerian lower-left
  edge, Irish top-left corner, Yoruba lower-center-right, Slavic right edge,
  Inuit bottom left-of-center). Place new stars inside their culture's region.
- Lean minor stars toward the middle of the canvas so the center of the sky
  never looks empty.

The mobile sky derives automatically: each culture's stars are normalized into
a compact stacked cluster, so only the desktop coordinates need manual layout.

## Deployment

Pushes to `main` build and deploy via GitHub Actions
(`.github/workflows/deploy.yml`) to GitHub Pages. In the repository settings,
set **Pages → Source** to **GitHub Actions**.
