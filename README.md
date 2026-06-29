# @zooai/brand

Zoo brand card / hero / OG-image generator. One layout system renders
self-contained 1200×630 SVGs — README heroes and `og:image` social cards — all
carrying the Zoo prism mark and prism palette by default.

## Install

```bash
npm add @zooai/brand
```

## Usage

```ts
import { renderHero, renderPost, zoo } from '@zooai/brand'

// README hero / og:image
const hero = renderHero({
  title: '@zooai/sdk',
  tagline: 'Open AI for everyone',
  backdrop: 'glow',
})

// Blog-post card
const post = renderPost({
  tag: 'Research',
  title: 'Decentralized Science, end to end',
  author: 'Zoo Labs',
  date: '2026',
  site: 'zoo.ngo',
})
```

Each function returns an SVG string. Rasterize to PNG for `og:image` with any
SVG→PNG renderer (resvg-js, satori, sharp, rsvg-convert):

```ts
import { Resvg } from '@resvg/resvg-js'
const png = new Resvg(renderHero({ title: 'Zoo' })).render().asPng()
```

## Cards

| Function | Card |
|----------|------|
| `renderHero` | README / og hero (title + tagline + footers) |
| `renderPost` | Blog post (tag, headline, author · date) |
| `renderAnnouncement` | Centered launch statement |
| `renderQuote` | Pull quote |
| `renderShowcase` | Brand text + framed product screenshot |

Every card accepts a `Palette` (`bg`, `fg`, `accent`, `accentColors`,
`markInner`, `markViewBox`). Defaults are Zoo identity — pass `zoo` explicitly,
or override any field per card:

```ts
import { renderAnnouncement, zoo, ZOO_RED } from '@zooai/brand'
renderAnnouncement({ ...zoo, headline: 'Zoo v2 is live', accent: ZOO_RED })
```

## Mark & palette

The mark is the colorful Zoo prism, sourced from
[`@zooai/logo`](https://github.com/zooai/logo). The prism colors are exported:

```ts
import { ZOO_GREEN, ZOO_RED, ZOO_BLUE, prism } from '@zooai/brand'
// '#00A652'   '#ED1C24'  '#2E3192'   { green, red, blue }
```

## CLI

```bash
zoo-brand hero     --title "@zooai/sdk" --tagline "…" --backdrop glow --out .github/hero.svg
zoo-brand showcase --title "Zoo Desktop" --image shot.png --out .github/showcase.svg
```

Flags override defaults read from the nearest `brand.json`.

## License

MIT
