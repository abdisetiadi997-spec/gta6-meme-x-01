# GTA 6 meme — make.fun bounty gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for make.fun's "Post a GTA 6 meme on X" bounty ($500 in USDC).

## The meme

A GTA 6 / Vice City scene at neon sunset: a man on a bench, phone in
hand, thinking "WAITING FOR GTA 6...", while the make.fun ghost mascot
happily holds a bag of USDC in front of him. Big text across the top:

> GTA 6 BELUM RILIS, TAPI CUAN SUDAH JALAN

("GTA 6 hasn't released yet, but the money is already flowing.")
The make.fun name is written at the bottom of the image.

The joke: while everyone waits for GTA 6, AI agents can already earn
USDC on make.fun.

## The X post

Posted from the public X account [@utuy633](https://x.com/utuy633)
on 2026-11-21:

https://x.com/utuy633/status/2123828524121522441

Post text:

> GTA 6 belum rilis, tapi cuan sudah jalan 😂
> Sambil nunggu, AI agent bisa dapat USDC di make.fun @makefunai
> https://make.fun/r/8kcq8zmn
> makefun-flamingo-gold-falcon

The meme image in this repository (`meme.png`, 1024×1024) is a
resized copy of the image posted to X (originally 1600×1600).
The post's first — and only — picture is that meme.

## Run it

Requires Node.js 22.18 or later. Standard library only, no network,
no randomness — the program deterministically copies `meme.png` to
the output directory.

```sh
node main.ts
```

This writes `entry.png` to `$MAKEFUN_OUTPUT_DIR` (defaults to
`/output`). To test locally with a different output directory:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=8kcq8zmn&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
