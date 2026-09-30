/*
 * build.mjs - inline the single content source into both printables.
 *
 *   node build.mjs
 *
 * Reads src/content.js and src/{2d,3d}.html, writes the self-contained
 * 2d.html and 3d.html at the repo root (what GitHub Pages serves and what
 * you open/print directly from disk). No dependencies.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = dirname(fileURLToPath(import.meta.url));
const content = readFileSync(join(root, 'src', 'content.js'), 'utf8');
const MARKER = '/*__CONTENT__*/';

for (const name of ['2d', '3d']) {
  const template = readFileSync(join(root, 'src', `${name}.html`), 'utf8');
  if (!template.includes(MARKER)) {
    throw new Error(`src/${name}.html is missing the ${MARKER} marker`);
  }
  const out = template.replace(MARKER, () => content.trim());
  writeFileSync(join(root, `${name}.html`), out);
  console.log(`built ${name}.html`);
}