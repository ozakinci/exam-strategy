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

## Dependencies

| What | Where it lives | How it's activated |
|---|---|---|
| Node.js | system install (`node`, `node --version`) | runs `build.mjs` only; the built HTML has zero runtime deps |
| Browser | any modern browser (Edge/Chrome/Firefox) | open `index.html`, `2d.html` or `3d.html` |

No npm packages. No external assets, fonts, or images.

## Usage

```sh
node build.mjs          # -> writes 2d.html and 3d.html from src/content.js
```

Open `index.html` for the landing page, or open `2d.html` / `3d.html` directly and print to A4
(enable "background graphics" in the print dialog so the colours and depth effects appear).

## Keeping this current

Update this file whenever a feature or dependency changes.

## Industry-standard note

Follows the same conventions as the rest of the workspace: a project `README.md`, one content
source built into standalone outputs, and a print-first design. It stays intentionally lean -
no framework, no bundler, no dependency - because the artifact is a single printable page that
must open anywhere and print identically.