/**
 * Dated Las Vegas Valley market ledger for SEO / GEO / AEO copy.
 * Do not blend series across sources without labeling period + definition.
 * Review monthly — next review: 2026-09-10.
 */

export const marketAsOf = "August 2026";

export const valleyAugust6 = {
  label: "Las Vegas Valley single-family snapshot (Aug 6, 2026 local report)",
  sourceNote:
    "Brenkus Team Las Vegas market report, August 6, 2026 — single-family unless noted.",
  medianSf: "$480,000",
  medianCondoTownhome: "$290,000",
  activeSfListings: "7,442",
  monthsSupply: "4.0",
  medianDom: "31",
  pendingSales: "2,150",
  closedSales: "2,587",
  closedBelowAskingPct: "57.5%",
} as const;

export const buyerLeverageJuly = {
  label: "Buyer-leverage scan (July month-end / Aug 9 analysis)",
  sourceNote:
    "August 9, 2026 analysis of July results and an August MLS scan — label property mix when citing.",
  monthsSupplyJuly: "3.6",
  priceCutShare: "43.4%",
  medianReduction: "$18,900",
  activeAllTypesScan: "11,878",
} as const;

export const summerlinSnapshot = {
  label: "Summerlin June / August village panel",
  sourceNote:
    "June sold median and inventory from local Summerlin snapshot; August village list-price panel is a separate series.",
  juneMedianSold: "$537,500",
  juneActiveSf: "1,465",
  juneMonthsSupply: "4.5",
  juneMedianDom: "35",
  junePpsf: "$327",
  augustActiveAllVillages: "1,240",
  augustMedianList: "$686,000",
} as const;

export const hendersonSnapshot = {
  label: "Henderson 2026 local report vs Redfin trailing period",
  sourceNote:
    "Local 2026 Henderson report and Redfin trailing three months ending May 2026 — show both only when labeled.",
  localMedianSf: "$540,000",
  localMonthsSupply: "2.3",
  localDom: "35",
  redfinMedian: "$490,000",
  redfinDom: "57",
} as const;

export const greenValleySnapshot = {
  label: "Green Valley July 2026 single-family report",
  sourceNote:
    "July 2026 Green Valley single-family report — inventory/months of supply not stated in source.",
  julyMedianSold: "$596,000",
  yoy: "+3.2%",
  medianDom: "28",
  homesSold: "61",
} as const;

/** Short answer-first blurbs for hub pages (40–80 words). */
export const answerFirst = {
  home: `Moving from Irvine to Las Vegas is easier when one plan connects the California sale, Nevada purchase, financing, tours, and closing dates. ${valleyAugust6.label}: ${valleyAugust6.medianSf} single-family median, ${valleyAugust6.monthsSupply} months of supply, and ${valleyAugust6.medianDom} median days on market.`,

  relocation: `California-to-Nevada relocation starts with a decision map: sell first, buy first, or coordinate both. Document price band, square footage, commute, amenities, financing, and travel schedule, then connect Irvine planning with Las Vegas tours. Local coverage cites California as a major 2025 in-migration source — use that as context, not a promise.`,

  buyers: `In August 2026, a local scan found ${buyerLeverageJuly.monthsSupplyJuly} months of supply at July month-end, ${buyerLeverageJuly.priceCutShare} of active listings with price cuts, and a median reduction of ${buyerLeverageJuly.medianReduction}. That supports careful comparison and targeted negotiation — not an assumption every seller will discount.`,

  sellers: `Pricing should reflect the current competing set, not a stale peak. The August 6 Valley report places the single-family median at ${valleyAugust6.medianSf} and says ${valleyAugust6.closedBelowAskingPct} of completed sales closed below asking. Review active competition, recent comps, likely days on market, concessions, and net proceeds before launch.`,

  listings: `Use listings as a searchable inventory layer. The August 6 report counted ${valleyAugust6.activeSfListings} active single-family listings; a separate August scan counted ${buyerLeverageJuly.activeAllTypesScan} across single-family, condo, and townhome. Filter by price, square feet, area, amenities, and price reductions — and label property type.`,

  neighborhoods: `Compare areas by commute, amenities, home format, square footage, HOA context, and price band — not subjective labels. Current snapshots: Summerlin June median sold ${summerlinSnapshot.juneMedianSold}; Henderson local report ${hendersonSnapshot.localMedianSf}; Green Valley July single-family ${greenValleySnapshot.julyMedianSold}. Keep each figure tied to its date and definition.`,

  howWeWork: `One cross-state workflow: discovery call, Irvine-side timing and sale planning, Las Vegas area and home search, tours, offer strategy, inspections, appraisal, and closing coordination. Dr. Gene Boyle plans the California side; Dr. Jan Duffy covers Valley tours and closing with BHHS Nevada Properties.`,

  faq: `Current Valley context (Aug 6, 2026 report): ${valleyAugust6.medianSf} single-family median, ${valleyAugust6.monthsSupply} months of supply, ${valleyAugust6.medianDom} median days on market. Strategy still depends on your property, financing, and timing — answers below stay conditional.`,

  valuation: `A useful valuation starts with property facts and a comparison set: address, beds, baths, square feet, lot, age, upgrades, HOA, occupancy, timing, and whether you are also buying in Nevada. The August report notes ${valleyAugust6.closedBelowAskingPct} of completed Valley sales closed below asking. An estimate is not a listing-price recommendation.`,

  marketReport: `Dated August 6, 2026 Valley report: ${valleyAugust6.medianSf} single-family median, ${valleyAugust6.medianCondoTownhome} condo/townhome median, ${valleyAugust6.activeSfListings} active single-family listings, ${valleyAugust6.monthsSupply} months of supply, ${valleyAugust6.medianDom} median days on market, ${valleyAugust6.pendingSales} pending and ${valleyAugust6.closedSales} closed sales. Pair with source-labeled submarket panels.`,

  contact: `Tell us whether you are buying, selling, relocating, or seeking a second home — plus current city, target area, price band, approximate square feet, timing, and preferred call method. We respond with a clear next step for the Irvine-to-Las Vegas loop.`,

  about: `Dr. Gene Boyle (California DRE #02282581) plans Irvine and Orange County exits. Dr. Jan Duffy (S.0197614.LLC) covers Las Vegas Valley tours, offers, and closing with Berkshire Hathaway HomeServices Nevada Properties. One client phone number for the loop: (702) 222-1964.`,

  fiftyFive: `Compare 55+ communities by eligibility rules, home formats, amenities, HOA questions, and resale process — not lifestyle slogans. Confirm age-residency requirements, fee schedules, and listing rules for Sun City Summerlin, Sun City Anthem, Trilogy, and peer communities before you tour.`,

  services: `Irvine-to-Las Vegas services cover sell timing on the California side, Valley buyer representation, listing strategy, 55+ comparisons, and closing coordination with BHHS Nevada Properties. One client phone number keeps the loop clear: (702) 222-1964.`,

  luxury: `Luxury searches filter by lot, view, finishes, guard-gated access, and square footage — not metro medians alone. Compare The Ridges, MacDonald Highlands, and Southern Highlands product with live MLS comps before you stretch on list price.`,

  newConstruction: `Builder reps work for the builder. Independent buyer representation protects upgrades, incentives, contingencies, and appraisal gaps on new construction in Las Vegas and Henderson. Confirm lot premiums and HOA documents before reservation.`,

  investment: `Investment math needs rent comps, HOA rental rules, vacancy assumptions, and hold period — not a single cap-rate headline. Pull current MLS rents and governing docs for each candidate address before you underwrite.`,

  marketUpdate: `Use dated Valley figures, not evergreen claims. ${valleyAugust6.label}: ${valleyAugust6.medianSf} single-family median, ${valleyAugust6.activeSfListings} active SF listings, ${valleyAugust6.monthsSupply} months of supply, ${valleyAugust6.medianDom} median days on market. See /market-report for labeled submarket panels.`,
} as const;
