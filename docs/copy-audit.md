# Copy Audit: Nightfall

## Issues found and changes made

- **Page titles & manifest (`src/pages/index.astro`, `src/pages/myth/[id].astro`, `public/site.webmanifest`)**: Replaced em dashes with a colon on the home title and manifest name, and a pipe on story titles, for cleaner metadata formatting.
- **Meta descriptions (`src/pages/index.astro`, `src/pages/myth/[id].astro`, `public/site.webmanifest`)**: Removed em dashes, standardized on "in three nights", and replaced figurative phrasing ("doors hang open tonight") with clear summaries of how visitors browse and read.
- **Social card alt text & SVG (`src/layouts/Base.astro`, `public/og-card.svg`)**: Removed the em dash from `og:image:alt` and described the actual graphic; updated stale "Fifteen doors" copy in `og-card.svg` to reflect all 35 myths and match the updated CTA label.
- **Home hero & featured CTA (`src/pages/index.astro`)**: Rewrote the subtitle ("doors hang open" / "carved with every moon") to state the format plainly without an unverified release schedule, and changed "Tonight's door" to "Tonight's story" so it fits the default Sky view.
- **Home captions, filters & ARIA labels (`src/pages/index.astro`)**: Removed em dashes from both Sky captions, changed "touch a star" to device-agnostic "Select a star", replaced cryptic footer text with a clear instruction, aligned "All doors" to "All realms", and replaced internal jargon ("Hall lens", "The sky", "The doors", "Filter doors") in ARIA labels with plain descriptions.
- **Story page navigation & ARIA labels (`src/pages/myth/[id].astro`)**: Replaced "The Hall" and "Return to the Hall" with "All myths" and "Back to all myths" for direct-link visitors, clarified the chapter nav `aria-label` to "Story chapters", and replaced middle dots with colons in tab ARIA labels.
- **Documentation (`README.md`)**: Removed all em dashes and en dashes, replaced internal "lens" phrasing with "view" for consistency with the UI, updated section headings ("Included myths"), and replaced the poetic cadence line with exact counts from `myths.js` (35 myths, 14 cultures).

## Left alone on purpose

- **`src/data/myths.js` authored content**: All 35 myth retellings (`paras`), `epigraph`, `about` source notes, myth titles, short names, and chapter titles were authored personally and left completely untouched (including em dashes inside the prose).
- **Reading time labels (`'6 min read'`)**: Uniform author-set metadata across all 35 myths; left untouched to avoid inventing new read-time estimates.
- **Core brand and view names**: Kept "Nightfall", "A world tour of myth & fable", "Doors", "Sky", "Tonight", "About this myth", "Night I / II / III", and the five realm names (`The Sky`, `Fire & Ending`, `The Crossroads`, `The Underworld`, `The Deep`) to preserve the site's identity and data values.

## Not done (next pass)

- **`public/og-card.png`**: Binary social card image still displays the older "Fifteen doors" text and should be re-exported from the updated `public/og-card.svg`.
- **Error page (`404.astro`)**: No custom 404 page exists yet; adding one requires new routing and layout outside string-only edits.
