# AGENTS.md

Guidance for agents working in this repository.

## Project

A one-page, printable study- and exam-strategy poster in Dutch, in a flat 2D version and a 3D version. Plain HTML, CSS and inline SVG: no framework, no bundler, no dependency. One content file feeds both printables, so the story stays identical across the two renders. A push to `main` publishes `output/` to GitHub Pages.

## Files

- `src/content.js` - the single Dutch content source. Edit content here.
- `src/2d.html`, `src/3d.html`, `src/index.html` - templates holding a `/*__CONTENT__*/` marker. Never open them directly.
- `build.mjs` - injects the content and writes everything into `output/`.
- `output/` - the built files, and the only files worth opening.
- `.github/workflows/pages.yml` - publishes `output/` on push to `main`.

## Commands

```powershell
node build.mjs
```

Then open `output/index.html` for the landing page, or `output/2d.html` / `output/3d.html` to print.

## Rules

- Change content in `src/`. Never hand-edit a file in `output/`: the next build overwrites it.
- After any content or template change, run `node build.mjs` and confirm all three files in `output/` regenerate.
- Keep it one A4 page. A longer poster breaks the reason it exists. Check the print result with background graphics on.
- Content stays Dutch, and the six stages stay in their order: INTERESSE, BEGRIJPEN, (NA)DENKEN, OPLOSSEN, BEVESTIGEN, CONTROLEREN.
- No dependencies, external assets, web fonts, images or CDN links. Each built file must open from disk with no server.
- Colour must never carry meaning alone: the poster still reads when colours are off.

## Session triggers (clock in / clock out)

1. **Project memory** - this file is auto-loaded; use it directly.
2. **README freshness** - check that `README.md` matches the current features, layout and commands; update it when they drift.
3. **Global blocks** - no project-specific start or end steps; the global blocks apply as-is.
