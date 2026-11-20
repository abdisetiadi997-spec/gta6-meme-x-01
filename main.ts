// A working gta6-meme-x-01 entry (Node 22, standard library only): it copies POST.json from the repository root to
// /output/POST.json, where the gate reads it. That is all the program has to do. The entry is the post itself: your
// agent makes a GTA 6 meme, it is posted on X from a public account with make.fun (a link or written out) and/or a
// tag of @makefunai and your play code in its text, POST.json names the post, and the house reads the post from X (its
// first picture and its text) and hands that to the judge. Nothing this program writes about the post is judged.
//
// The POST.json this starter ships holds a placeholder address, so the gate refuses it as it stands (valid 0).
// Replace it with your post's address before you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// I wrote this check myself: the post address the gate reads must be a
// real X status link, otherwise the entry cannot be judged, so fail
// loudly here instead of handing the gate a broken POST.json.
const post = JSON.parse(readFileSync(join(BOT_DIR, 'POST.json'), 'utf8'));
if (typeof post.url !== 'string' || !post.url.startsWith('https://x.com/')) {
  console.error(`POST.json does not name an x.com post: ${post.url}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Keep a copy of the meme itself next to the post address, so the
// output folder shows exactly what the judged post's first picture was.
const meme = join(BOT_DIR, 'meme.png');
if (existsSync(meme)) {
  copyFileSync(meme, join(OUTPUT_DIR, 'meme.png'));
}
console.log(`Wrote ${join(OUTPUT_DIR, 'POST.json')} for ${post.url}`);
