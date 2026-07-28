/**
 * Zoo brand identity — the single source of the prism mark, the prism colors,
 * and the shared `Palette` type that the card / hero generators read.
 *
 * The mark is sourced once from `@zooai/logo` (the colorful three-circle prism)
 * and embedded as inner SVG. Everything brand-specific lives here; the renderers
 * in `./cards` and `./hero` stay geometry-only.
 */
import { getColorSVGCropped } from '@zooai/logo'

/** Zoo prism colors. */
export const ZOO_GREEN = '#00A652'
export const ZOO_RED = '#ED1C24'
export const ZOO_BLUE = '#2E3192'

/** The prism, by name. */
export const prism = { green: ZOO_GREEN, red: ZOO_RED, blue: ZOO_BLUE } as const

/**
 * Per-card palette. Every field is optional and defaults to Zoo identity, so
 * `renderPost({ title })` already looks like Zoo. Override any field per card.
 */
export interface Palette {
  /** Highlight color for kickers / quote marks. Default: Zoo green. */
  accent?: string
  /** Prism gradient stops (the kicker uses the first). Default: Zoo prism. */
  accentColors?: string[]
  /** Canvas background. Default near-black. */
  bg?: string
  /** Text color. Default white. */
  fg?: string
  /** Reserved for monochrome marks; ignored by the default Zoo prism. */
  markFill?: string
  /** Override the mark with custom inner SVG (e.g. a one-color Zoo mark). */
  markInner?: string
  /** viewBox for `markInner`. Default = the Zoo prism viewBox. */
  markViewBox?: string
}

// The colorful Zoo prism, tightly cropped, embedded as inner SVG. Single source
// of the mark — the viewBox is derived from the asset so it can never drift.
const PRISM = getColorSVGCropped()
const PRISM_SIZE = Number(PRISM.match(/width="(\d+)"/)?.[1]) || 1024

/** The Zoo prism mark as embeddable inner SVG. */
export const ZOO_MARK = PRISM
/** viewBox that maps `ZOO_MARK` into a mark box. */
export const ZOO_MARK_VIEWBOX = `0 0 ${PRISM_SIZE} ${PRISM_SIZE}`

/** Ready-made Zoo palette: dark canvas, white text, prism mark + green accent. */
export const zoo: Palette = {
  bg: '#0A0A0A',
  fg: '#FFFFFF',
  accent: ZOO_GREEN,
  accentColors: [ZOO_GREEN, ZOO_RED, ZOO_BLUE],
}
