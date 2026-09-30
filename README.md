# exam-strategy

A one-page, printable study- and exam-strategy poster (in Dutch) - a flat 2D version and a 3D version.

## What this is

A single self-contained reference for taking tests and exams, distilled into six stages:
INTERESSE, BEGRIJPEN, (NA)DENKEN, OPLOSSEN, BEVESTIGEN, CONTROLEREN. It is meant to be
printed on A4 (one page) and pinned above a desk - a study method, not a time planner.

The design is deliberately lightweight: plain HTML, CSS and inline SVG, no frameworks and no
dependencies. One content file feeds both printables, so the story stays identical across the
2D and 3D renders.

## Features

- **Six-stage method** with concrete sub-points, aimed at secondary-school students (~11-14).
- **Two printables**: `2d.html` (flat flow) and `3d.html` (same flow with depth and a route).
- **A4, one page, print-friendly**: `@page` A4 rules, `print-color-adjust: exact`, and a design
  that still reads when colours are off.
- **One content source**: edit `src/content.js`, run the build, and both printables update.
- **Self-contained output**: each built HTML file opens directly from disk - no server, no CDN.
- **Dutch** content and wording throughout.

## Layout

```
exam-strategy/
  src/                     sources (never opened directly)
    content.js             the single Dutch content source
    2d.html                template - content injected at build
    3d.html                template - content injected at build
    index.html             landing-page template
  build.mjs                writes everything into output/
  output/                  end results only - open files from here
    2d.html
    3d.html
    index.html
  .github/workflows/       publishes output/ to GitHub Pages
  README.md
  LICENSE
```

**Only open files from `output/`.** The files in `src/` are templates - they contain a
`/*__CONTENT__*/` marker instead of the content and are not meant to be opened.

## Usage

```sh
node build.mjs          # -> writes output/2d.html, output/3d.html, output/index.html
```

Open `output/index.html` for the landing page, or open `output/2d.html` / `output/3d.html`
directly and print to A4 (enable "background graphics" in the print dialog so the colours and
depth effects appear).

## Deploy

Pushing to `main` triggers `.github/workflows/pages.yml`, which publishes the `output/` folder
to GitHub Pages at `https://ozakinci.github.io/exam-strategy/`.

## Dependencies

| What | Where it lives | How it's activated |
|---|---|---|
| Node.js | system install (`node`) | runs `build.mjs` only; the built HTML has zero runtime deps |
| Browser | any modern browser (Edge/Chrome/Firefox) | open a file in `output/` |
| GitHub Pages | this repo's Actions workflow | runs on push to `main` |

No npm packages. No external assets, fonts, or images.

## Keeping this current

Update this file whenever a feature or dependency changes.

## Industry-standard note

Follows the same conventions as the rest of the workspace: a project `README.md`, one content
source built into a single results folder, and a print-first design. It stays intentionally
lean - no framework, no bundler, no dependency - because the artifact is a single printable
page that must open anywhere and print identically.