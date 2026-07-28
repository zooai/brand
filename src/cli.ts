#!/usr/bin/env node
/**
 * zoo-brand — generate brand-consistent cards.
 *
 *   zoo-brand hero     --title "@zooai/sdk" --tagline "…" [--backdrop grid] --out .github/hero.svg
 *   zoo-brand showcase --title "Zoo Desktop" --image shot.png --out .github/showcase.svg
 *
 * Defaults come from the repo's nearest brand.json (if any), so every product
 * shares one look. Override per-repo via flags.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve, dirname, join, extname } from 'node:path'
import { renderHero, type HeroOptions } from './hero'
import { renderShowcase, type ShowcaseCard } from './cards'

function findBrandJson(start: string): Record<string, any> | null {
  let dir = resolve(start)
  for (let i = 0; i < 8; i++) {
    const p = join(dir, 'brand.json')
    if (existsSync(p)) { try { return JSON.parse(readFileSync(p, 'utf8')) } catch { /* ignore */ } }
    const parent = dirname(dir)
    if (parent === dir) break
    dir = parent
  }
  const own = join(__dirname, '..', 'brand.json')
  if (existsSync(own)) { try { return JSON.parse(readFileSync(own, 'utf8')) } catch { /* ignore */ } }
  return null
}

function parseArgs(argv: string[]): Record<string, string> {
  const out: Record<string, string> = {}
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a.startsWith('--')) { out[a.slice(2)] = argv[i + 1]?.startsWith('--') || argv[i + 1] === undefined ? 'true' : argv[++i] }
  }
  return out
}

const emit = (svg: string, out?: string) => {
  if (out && out !== 'true') { writeFileSync(out, svg); console.error(`wrote ${out}`) }
  else process.stdout.write(svg)
}

function imageDataUri(path: string): string {
  const mime = extname(path).toLowerCase() === '.jpg' || extname(path).toLowerCase() === '.jpeg' ? 'image/jpeg' : 'image/png'
  return `data:${mime};base64,${readFileSync(path).toString('base64')}`
}

function main() {
  const [cmd, ...rest] = process.argv.slice(2)
  const args = parseArgs(rest)
  const b = findBrandJson(process.cwd())?.brand ?? {}

  if (cmd === 'hero') {
    const opts: HeroOptions = {
      title: args.title || b.title || b.name || 'Zoo',
      tagline: args.tagline ?? b.description ?? '',
      github: args.github || (b.github ? String(b.github).replace(/^https?:\/\//, '') : undefined),
      docs: args.docs || b.docsDomain || undefined,
      accent: args.accent || undefined,
      backdrop: (args.backdrop as HeroOptions['backdrop']) || undefined,
    }
    return emit(renderHero(opts), args.out)
  }

  if (cmd === 'showcase') {
    if (!args.image || args.image === 'true') {
      console.error('zoo-brand showcase requires --image <screenshot.png>')
      process.exit(1)
    }
    const opts: ShowcaseCard = {
      title: args.title || b.title || b.name || 'Zoo',
      tagline: args.tagline ?? '',
      image: imageDataUri(resolve(args.image)),
      site: args.site || b.appDomain || undefined,
      accent: args.accent || undefined,
    }
    return emit(renderShowcase(opts), args.out)
  }

  console.error('usage:\n  zoo-brand hero     [--title T] [--tagline S] [--backdrop grid|glow|dots] [--accent #hex] [--out f.svg]\n  zoo-brand showcase --image shot.png [--title T] [--tagline S] [--out f.svg]')
  process.exit(cmd ? 1 : 0)
}

main()
