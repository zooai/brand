/**
 * README hero + social (og:image) generator.
 *
 * One layout, Zoo brand. 1200×630 — the universal social size; also a clean
 * GitHub README hero (referenced via `<img>`). The Zoo prism mark + green
 * accent come from ./zoo; override any field per call. Rasterize to PNG for
 * `og:image` with any SVG→PNG renderer (resvg-js, satori, sharp, rsvg-convert).
 */
import { ZOO_GREEN, ZOO_MARK, ZOO_MARK_VIEWBOX } from './zoo'

export interface HeroOptions {
  /** Repo / product / package name, e.g. `@zooai/sdk` or `Zoo Node`. */
  title: string
  /** One-line description shown under the title. */
  tagline?: string
  /** Left footer (defaults to the GitHub org). */
  github?: string
  /** Right footer (defaults to the docs domain). */
  docs?: string
  /** Accent for the glow backdrop. Default Zoo green. */
  accent?: string
  /** Prism gradient stops (reserved). Default Zoo prism. */
  accentColors?: string[]
  /** Foreground (text) color. Default white. */
  fg?: string
  /** Background color. Default near-black. */
  bg?: string
  /** Override the prism mark with custom inner SVG. */
  markInner?: string
  /** viewBox for `markInner`. Default = the Zoo prism viewBox. */
  markViewBox?: string
  /** Background treatment: a subtle architectural grid, a soft radial glow, a
   *  dot matrix, or plain. */
  backdrop?: 'plain' | 'grid' | 'glow' | 'dots'
  width?: number
  height?: number
}

/** A subtle background layer (architectural grid / glow / dots) — depth without
 *  noise; the glow picks up the accent. */
function backdropLayer(kind: string, fg: string, accent: string, w: number, h: number): string {
  if (kind === 'grid') {
    return `<defs><pattern id="bd-grid" width="50" height="50" patternUnits="userSpaceOnUse">
      <path d="M50 0H0V50" fill="none" stroke="${fg}" stroke-opacity="0.05" stroke-width="1"/></pattern></defs>
      <rect width="${w}" height="${h}" fill="url(#bd-grid)"/>
      <rect width="${w}" height="${h}" fill="none" stroke="${fg}" stroke-opacity="0.06"/>`
  }
  if (kind === 'glow') {
    return `<defs><radialGradient id="bd-glow" cx="22%" cy="28%" r="55%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/></radialGradient></defs>
      <rect width="${w}" height="${h}" fill="url(#bd-glow)"/>`
  }
  if (kind === 'dots') {
    return `<defs><pattern id="bd-dots" width="36" height="36" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.6" fill="${fg}" fill-opacity="0.07"/></pattern></defs>
      <rect width="${w}" height="${h}" fill="url(#bd-dots)"/>`
  }
  return ''
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Render a Zoo hero/og card as a self-contained SVG string. */
export function renderHero(opts: HeroOptions): string {
  const {
    title,
    tagline = '',
    github = 'github.com/zooai',
    docs = 'zoo.ngo',
    accent = ZOO_GREEN,
    accentColors,
    fg = '#FFFFFF',
    bg = '#0A0A0A',
    markInner = ZOO_MARK,
    markViewBox = ZOO_MARK_VIEWBOX,
    backdrop = 'plain',
    width = 1200,
    height = 630,
  } = opts

  const pad = 88
  const markSize = 76
  const font = `'Inter','SF Pro Display','Helvetica Neue',Arial,sans-serif`
  const titleSize = title.length > 26 ? 64 : 80
  void accentColors // reserved; the accent reads via the glow backdrop

  const markEl = `<svg x="${pad}" y="${pad}" width="${markSize}" height="${markSize}" viewBox="${markViewBox}">${markInner}</svg>`

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(title)}">
  <rect width="${width}" height="${height}" fill="${bg}"/>
  ${backdropLayer(backdrop, fg, accent, width, height)}
  ${markEl}
  <text x="${pad}" y="${height / 2 + 34}" font-family="${font}" font-size="${titleSize}" font-weight="800" letter-spacing="-2" fill="${fg}">${esc(title)}</text>
  ${tagline ? `<text x="${pad}" y="${height / 2 + 92}" font-family="${font}" font-size="30" font-weight="400" fill="${fg}" opacity="0.62">${esc(tagline)}</text>` : ''}
  <line x1="${pad}" y1="${height - pad - 40}" x2="${width - pad}" y2="${height - pad - 40}" stroke="${fg}" stroke-opacity="0.12"/>
  <text x="${pad}" y="${height - pad}" font-family="${font}" font-size="24" font-weight="500" fill="${fg}" opacity="0.7">${esc(github)}</text>
  <text x="${width - pad}" y="${height - pad}" font-family="${font}" font-size="24" font-weight="500" fill="${fg}" opacity="0.7" text-anchor="end">${esc(docs)}</text>
</svg>`
}

export default renderHero
