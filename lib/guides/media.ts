export type GuideImage = {
  src: string;
  alt: string;
};

const neighborhoodImages: Record<string, GuideImage> = {
  summerlin: {
    src: "/images/neighborhoods/summerlin.jpg",
    alt: "Summerlin Las Vegas homes with Red Rock Canyon mountains at golden hour",
  },
  henderson: {
    src: "/images/neighborhoods/henderson.jpg",
    alt: "Henderson Nevada residential streets with desert mountain backdrop",
  },
  "green-valley": {
    src: "/images/neighborhoods/green-valley.jpg",
    alt: "Green Valley Henderson neighborhood with mature trees and tile-roof homes",
  },
  "the-ridges": {
    src: "/images/neighborhoods/the-ridges.jpg",
    alt: "Luxury custom estate with pool and desert mountain views in Las Vegas",
  },
  "southern-highlands": {
    src: "/images/neighborhoods/southern-highlands.jpg",
    alt: "Southern Highlands golf community fairways and desert mountains",
  },
  "north-las-vegas": {
    src: "/images/neighborhoods/north-las-vegas.jpg",
    alt: "Newer North Las Vegas master-planned homes with mountain foothills",
  },
  "skye-canyon": {
    src: "/images/neighborhoods/skye-canyon.jpg",
    alt: "Skye Canyon northwest Las Vegas modern subdivision homes",
  },
  "centennial-hills": {
    src: "/images/neighborhoods/centennial-hills.jpg",
    alt: "Centennial Hills northwest Las Vegas residential community",
  },
  inspirada: {
    src: "/images/neighborhoods/inspirada.jpg",
    alt: "Inspirada Henderson residential community under desert sky",
  },
  "mountains-edge": {
    src: "/images/neighborhoods/mountains-edge.jpg",
    alt: "Mountains Edge southwest Las Vegas homes below dark mountain ridge",
  },
  "sun-city-summerlin": {
    src: "/images/neighborhoods/sun-city-summerlin.jpg",
    alt: "Active-adult community homes and recreation setting in Summerlin",
  },
  "trilogy-summerlin": {
    src: "/images/neighborhoods/trilogy-summerlin.jpg",
    alt: "Trilogy-style active-adult community amenities in Summerlin area",
  },
  "sun-city-anthem": {
    src: "/images/neighborhoods/sun-city-anthem.jpg",
    alt: "Sun City Anthem active-adult residential setting in Henderson",
  },
  "sun-city-aliante": {
    src: "/images/neighborhoods/sun-city-aliante.jpg",
    alt: "Sun City Aliante active-adult community in North Las Vegas",
  },
  "solera-anthem": {
    src: "/images/neighborhoods/solera-anthem.jpg",
    alt: "Solera at Anthem active-adult homes in Henderson",
  },
  "del-webb-lake-las-vegas": {
    src: "/images/neighborhoods/del-webb-lake-las-vegas.jpg",
    alt: "Lake Las Vegas resort-style waterfront residential community",
  },
  "heritage-stonebridge": {
    src: "/images/neighborhoods/heritage-stonebridge.jpg",
    alt: "Heritage at Stonebridge active-adult community setting",
  },
};

const marketingImages: Record<string, GuideImage> = {
  services: {
    src: "/images/marketing/services.jpg",
    alt: "Relocation planning workspace with home plans and keys",
  },
  relocation: {
    src: "/images/marketing/relocation.jpg",
    alt: "Desert highway toward the Las Vegas Valley at dusk",
  },
  "market-report": {
    src: "/images/marketing/market.jpg",
    alt: "Aerial dusk view of Las Vegas Valley residential neighborhoods",
  },
  "market-update": {
    src: "/images/marketing/market.jpg",
    alt: "Las Vegas Valley housing landscape at sunset",
  },
  "market-insights": {
    src: "/images/marketing/market.jpg",
    alt: "Las Vegas Valley residential sprawl from above at dusk",
  },
  "google-business": {
    src: "/images/marketing/contact.jpg",
    alt: "Professional consultation setting for local real estate clients",
  },
  "luxury-homes": {
    src: "/images/marketing/luxury.jpg",
    alt: "Luxury Las Vegas estate with pool and mountain views",
  },
  "investment-properties": {
    src: "/images/marketing/investment.jpg",
    alt: "Contemporary Las Vegas investment townhome exteriors",
  },
  "new-construction": {
    src: "/images/marketing/new-construction.jpg",
    alt: "New construction homes in a Las Vegas master-planned community",
  },
  "why-berkshire-hathaway": {
    src: "/images/marketing/about.jpg",
    alt: "Professional real estate consultation interior",
  },
  "security-policy": {
    src: "/images/marketing/services.jpg",
    alt: "Secure planning workspace for client information",
  },
  "buyers-california-relocator": {
    src: "/images/marketing/relocation.jpg",
    alt: "Open desert road toward Las Vegas for California relocators",
  },
  "buyers-first-time": {
    src: "/images/marketing/buyers.jpg",
    alt: "Bright Las Vegas home interior for first-time buyers",
  },
  "buyers-luxury": {
    src: "/images/marketing/luxury.jpg",
    alt: "Luxury Las Vegas custom home exterior at dusk",
  },
  "sellers-relocation": {
    src: "/images/marketing/sellers.jpg",
    alt: "Staged kitchen ready for a pre-relocation home sale",
  },
  "sellers-downsizing": {
    src: "/images/marketing/sellers.jpg",
    alt: "Open-concept kitchen prepared for a downsizing listing",
  },
  "sellers-move-up": {
    src: "/images/marketing/buyers.jpg",
    alt: "Modern living space for move-up buyers and sellers",
  },
  "sellers-divorce-probate": {
    src: "/images/marketing/services.jpg",
    alt: "Quiet professional workspace for sensitive real estate matters",
  },
  // hubs / special routes
  contact: {
    src: "/images/marketing/contact.jpg",
    alt: "Consultation space for Irvine to Las Vegas relocation planning",
  },
  about: {
    src: "/images/marketing/about.jpg",
    alt: "Professional setting for Dr. Gene Boyle relocation practice",
  },
  faq: {
    src: "/images/marketing/services.jpg",
    alt: "Planning desk for relocation questions and next steps",
  },
  buyers: {
    src: "/images/marketing/buyers.jpg",
    alt: "Las Vegas home interior for relocating buyers",
  },
  sellers: {
    src: "/images/marketing/sellers.jpg",
    alt: "Staged home interior prepared for sale",
  },
  listings: {
    src: "/images/marketing/listings.jpg",
    alt: "Las Vegas Valley homes from above at dusk",
  },
  "home-valuation": {
    src: "/images/marketing/valuation.jpg",
    alt: "Bright home interior used for valuation conversations",
  },
  "how-we-work": {
    src: "/images/marketing/how-we-work.jpg",
    alt: "Tools and consultation setting for how we work",
  },
  neighborhoods: {
    src: "/images/neighborhoods/summerlin.jpg",
    alt: "Las Vegas Valley neighborhood with Red Rock backdrop",
  },
  "55-plus-communities": {
    src: "/images/marketing/55-plus.jpg",
    alt: "Active-adult community homes and recreation amenities",
  },
};

const sectionImages: Record<string, GuideImage> = {
  approach: {
    src: "/images/sections/approach.jpg",
    alt: "Summerlin residential rooftops near Red Rock Canyon",
  },
  mission: {
    src: "/images/sections/mission.jpg",
    alt: "Las Vegas Valley neighborhoods at dusk",
  },
  areas: {
    src: "/images/sections/areas.jpg",
    alt: "Henderson residential community and desert mountains",
  },
  tools: {
    src: "/images/sections/tools.jpg",
    alt: "Relocation planning tools on a desk",
  },
  next: {
    src: "/images/sections/next.jpg",
    alt: "Welcoming Las Vegas home interior for next steps",
  },
};

const heroImages: Record<string, GuideImage> = {
  home: {
    src: "/images/hero/home.jpg",
    alt: "Bright modern Las Vegas Valley home with pool under clear desert sky",
  },
  "home-alt": {
    src: "/images/hero/home-alt.jpg",
    alt: "Desert mountain view over Las Vegas Valley homes",
  },
  relocation: {
    src: "/images/hero/relocation.jpg",
    alt: "Desert highway toward the Las Vegas Valley at dusk",
  },
};

export function getAreaImage(slug: string): GuideImage {
  return (
    neighborhoodImages[slug] ?? {
      src: "/images/neighborhoods/summerlin.jpg",
      alt: "Las Vegas Valley residential community",
    }
  );
}

export function getMarketingImage(key: string): GuideImage {
  return (
    marketingImages[key] ?? {
      src: "/images/marketing/services.jpg",
      alt: "Irvine to Las Vegas relocation planning",
    }
  );
}

export function getSectionImage(key: string): GuideImage {
  return (
    sectionImages[key] ?? {
      src: "/images/sections/approach.jpg",
      alt: "Las Vegas Valley real estate",
    }
  );
}

export function getHeroImage(key: string = "home"): GuideImage {
  return (
    heroImages[key] ?? {
      src: "/images/hero/home.jpg",
      alt: "Las Vegas Valley residential community",
    }
  );
}
