/**
 * @zooai/brand — Zoo brand card / hero / OG-image generator.
 */

// Zoo palette, prism colors, and the shared Palette type.
export { zoo, prism, ZOO_GREEN, ZOO_RED, ZOO_BLUE } from './zoo'
export type { Palette } from './zoo'

// README hero + social (og:image) generator.
export { renderHero } from './hero'
export type { HeroOptions } from './hero'

// Social-card toolkit — post / announcement / quote / showcase cards.
export { renderPost, renderAnnouncement, renderQuote, renderShowcase, mark } from './cards'
export type { PostCard, AnnouncementCard, QuoteCard, ShowcaseCard } from './cards'
