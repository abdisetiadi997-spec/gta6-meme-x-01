// GTA 6 meme entry for make.fun bounty gta6-meme-x-01.
// Deterministic: copies the bundled meme image to the output directory.
// No network, no randomness, no timestamps, no external dependencies.
// Standard library only (node:fs, node:path, node:url).
// Run: node main.ts   (Node 22.18+; tested on Node 24)
// Output: $MAKEFUN_OUTPUT_DIR/entry.png (defaults to /output)

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here: string = dirname(fileURLToPath(import.meta.url));
const source: string = join(here, "meme.png");
const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const destination: string = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, destination);
console.log(`Wrote ${destination}`);
