/*
 * build.mjs - inline the single content source into both printables.
 *
 *   node build.mjs
 *
 * Reads the sources in src/ and writes ONLY the end results into output/:
 * the two self-contained printables (2d.html, 3d.html) and the landing page
 * (index.html). Open files from output/ - nothing else there is meant to run.
 * No dependencies.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = dirname(fileURLToPath(import.meta.url));
const src = join(root, 'src');
const outDir = join(root, 'output');
mkdirSync(outDir, { recursive: true });

const content = readFileSync(join(src, 'content.js'), 'utf8');
const MARKER = '/*__CONTENT__*/';

for (const name of ['2d', '3d']) {
  const template = readFileSync(join(src, `${name}.html`), 'utf8');
  if (!template.includes(MARKER)) {
    throw new Error(`src/${name}.html is missing the ${MARKER} marker`);
  }
  const out = template.replace(MARKER, () => content.trim());
  writeFileSync(join(outDir, `${name}.html`), out);
  console.log(`built output/${name}.html`);
}

// landing page: copied verbatim (no content injection)
writeFileSync(join(outDir, 'index.html'), readFileSync(join(src, 'index.html'), 'utf8'));
console.log('built output/index.html');