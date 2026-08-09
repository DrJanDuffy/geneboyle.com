/**
 * Compact global hero banner config — shown on every page via root layout.
 * Distinct from full-bleed PageHero (homepage / page-level heroes).
 */

export type GlobalHeroConfig = {
  src: string;
  alt: string;
  tagline: string;
  phoneDisplay?: string;
  phoneTel?: string;
};

export const GLOBAL_HERO: GlobalHeroConfig = {
  // Compressed JPEG (~259KB); next/image serves AVIF/WebP variants.
  src: "/images/global-hero/heyberkshire.jpg",
  alt: "Las Vegas Valley desert skyline and residential rooftops at dusk — Irvine to Las Vegas relocation with Dr. Gene Boyle",
  tagline: "geneboyle.com — Irvine to Las Vegas Relocation by Dr. Gene Boyle",
  phoneDisplay: "(702) 222-1964",
  phoneTel: "tel:+17022221964",
};
