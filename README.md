# Japan driver guide tours: interactive map

A single-page, English-only interactive map of four Chan Brothers "Free and Easy" driver guide tours in Kyushu, Shikoku and San'in (Western Japan).

- `kyushu-tour-map.html`: the built, self-contained page. Open it in a browser.
- `src/`: source files. `page.html` holds the layout and styles. `data.js`, `data_tours.js` hold the stops and tours. `art.js`, `art2.js` hold the landmark drawings. `sfx.js` holds the sound effects. `app.js` holds the map logic.
- `src/build.py`: joins the source into `kyushu-tour-map.html`. It expects the source at `/home/claude/src2` and the geography file at `/tmp/claude-0/shot/geo/west.json`, so adjust those paths before running it.
- `geo/west.json`: prefecture outlines (from dataofjapan/land, MIT licence), simplified.
- `scripts/geo2.py`: builds `geo/west.json`.

Prices are per person, twin sharing, as shown in each tour PDF. Flights, insurance and single room supplement are not included.
