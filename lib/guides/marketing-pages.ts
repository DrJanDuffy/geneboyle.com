import type { MarketingGuide } from "@/lib/guides/marketing-types";
import { agentInfo, siteConfig } from "@/lib/site-config";
import {
  answerFirst,
  summerlinSnapshot,
  hendersonSnapshot,
  valleyAugust6,
} from "@/lib/market/august-2026";

const phoneCta = {
  href: agentInfo.phoneTel,
  label: `Call ${agentInfo.phoneFormatted}`,
  variant: "phone" as const,
};

const contactCta = {
  href: "/contact",
  label: "Start a plan",
  variant: "primary" as const,
};

const partnerLine = `Las Vegas partner ${agentInfo.partnerAgent.name} (${agentInfo.partnerAgent.license}), BHHS Nevada Properties.`;

function crumbs(...trail: { label: string; href?: string }[]) {
  return [{ label: "Home", href: "/" }, ...trail];
}

export const marketingGuides = {
  services: {
    kicker: siteConfig.fullName,
    title: "Real estate services —",
    accent: "Irvine planning, Las Vegas execution",
    lede: answerFirst.services,
    ctas: [phoneCta, contactCta],
    sections: [
      {
        kind: "cards",
        label: "Core offer",
        title: "What we handle end to end",
        items: [
          {
            title: "Buying",
            body: "MLS search, offer strategy, inspection coordination, and closing support across Las Vegas, Henderson, and Summerlin.",
            href: "/buyers",
          },
          {
            title: "Selling",
            body: "Pricing, prep, marketing, and negotiation — timed to your purchase when you are relocating or moving up.",
            href: "/sellers",
          },
          {
            title: "Relocation",
            body: "Sell/buy sequencing, temporary housing notes, and Valley tour days with a clear Irvine-side plan.",
            href: "/relocation",
          },
          {
            title: "Luxury & new build",
            body: "Guard-gated inventory, custom estates, and builder representation so you are not negotiating alone.",
            href: "/luxury-homes",
          },
          {
            title: "Investment",
            body: "Rent comps, HOA/insurance filters, and hold vs. flip framing before you wire earnest money.",
            href: "/investment-properties",
          },
          {
            title: "Market intel",
            body: "Median prices, days on market, and inventory context for offers and list price decisions.",
            href: "/market-report",
          },
        ],
      },
      {
        kind: "steps",
        label: "How it works",
        title: "A simple path from first call to keys",
        steps: [
          {
            title: "Intake",
            body: `Share timeline, budget band, and must-have square footage. Call ${agentInfo.phoneFormatted}.`,
          },
          {
            title: "Shortlist",
            body: `${agentInfo.name} frames the California side; ${agentInfo.partnerAgent.name} maps Valley tours.`,
          },
          {
            title: "Offer & close",
            body: "Negotiation, contingencies, and walkthroughs — one coordinated team through funding.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Who do I work with day to day?",
        answer: `${agentInfo.name} (${agentInfo.licenseLabel}) leads relocation planning. ${agentInfo.partnerAgent.name} covers Las Vegas showings and local closings with BHHS Nevada Properties.`,
      },
      {
        question: "Do buyers pay a commission?",
        answer:
          "Buyer representation is typically paid by the seller under the listing agreement — we confirm compensation terms in writing before you tour under representation.",
      },
    ],
    ctaTitle: "Talk through your next move",
    ctaBody: `Call ${agentInfo.phoneFormatted} or send a note — we will map services to your timeline.`,
    ctaHref: "/contact",
    ctaLabel: "Contact us",
  },

  relocation: {
    kicker: siteConfig.fullName,
    title: "Irvine to Las Vegas Relocation —",
    accent: "planned around your timeline",
    lede: answerFirst.relocation,
    breadcrumbs: crumbs({ label: "Relocation" }),
    ctas: [
      phoneCta,
      { href: "/contact#schedule", label: "Build my move plan", variant: "secondary" },
    ],
    statsTitle: "August 2026 Valley context",
    stats: [
      { value: "$480K", label: "SF median (Aug 6)" },
      { value: "4.0", label: "Months supply" },
      { value: "31", label: "Median DOM" },
      { value: "0%", label: "NV state income tax" },
    ],
    sections: [
      {
        kind: "prose",
        label: "01 — Answer",
        title: "How do I move from California to Nevada?",
        paragraphs: [
          "Document the target price band, square-footage needs, commute, preferred amenities, financing, and travel schedule, then connect Irvine planning with Las Vegas tours.",
          `Local articles describe California as a major origin market into Clark County — use migration as context, not a guaranteed lead volume. Call ${agentInfo.phoneFormatted} to map your sequence.`,
        ],
      },
      {
        kind: "prose",
        label: "02 — Dual contracts",
        title: "Can I sell in Irvine and buy in Las Vegas?",
        paragraphs: [
          `Yes — with a clear order of operations. ${agentInfo.name} keeps the California exit timeline honest while ${agentInfo.partnerAgent.name} runs Valley tours and offers so inspection windows and funding do not collide.`,
          "Bridge financing, HELOC, or cash can support buy-first strategies; we model cash-flow risk before you write an offer.",
        ],
      },
      {
        kind: "prose",
        label: "03 — Budget",
        title: "What should I budget for a Las Vegas home?",
        paragraphs: [
          "August 6, 2026 Valley report: about $480,000 single-family median and $290,000 condo/townhome median, with 4.0 months of supply and 31 median days on market.",
          "Submarkets diverge — Summerlin, Henderson, and Green Valley medians differ by period and definition — so we price your shortlist with live comps, not a valley-wide slogan.",
        ],
      },
      {
        kind: "steps",
        label: "04 — Handoff",
        title: "How does the local handoff work?",
        steps: [
          {
            title: "Discovery",
            body: "Budget, villages (Summerlin, Henderson, northwest corridors), and temporary housing needs.",
          },
          {
            title: "California exit",
            body: "List timing, contingencies, and bridge options so you are not forced into a panic purchase.",
          },
          {
            title: "Nevada shortlist",
            body: `Tour blocks with ${agentInfo.partnerAgent.name} — compare floor plans, HOA docs, and recent comps.`,
          },
          {
            title: "Close & settle",
            body: "Utilities, movers, and walkthroughs coordinated so keys and California funding line up.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can we buy in Las Vegas before selling in Irvine?",
        answer:
          "Sometimes — via bridge financing, HELOC, or cash. We model the cash-flow risk before you write an offer.",
      },
      {
        question: "How many tour days should we plan?",
        answer: `Most relocators need one or two focused days with ${agentInfo.partnerAgent.name}. Call ${agentInfo.phoneFormatted} to schedule.`,
      },
    ],
    ctaTitle: "Build my move plan",
    ctaBody: `Call ${agentInfo.phoneFormatted}. We will sequence California and Nevada so neither side drifts.`,
    ctaHref: "/contact",
    ctaLabel: "Start relocation plan",
  },

  "market-report": {
    kicker: siteConfig.fullName,
    title: "Las Vegas Housing Market Report —",
    accent: "August 2026",
    lede: answerFirst.marketReport,
    breadcrumbs: crumbs({ label: "Market report" }),
    ctas: [
      phoneCta,
      { href: "/contact", label: "Request an interpretation", variant: "secondary" },
    ],
    statsTitle: "Valley at a glance | Aug 6, 2026 report",
    stats: [
      { value: "$480K", label: "SF median" },
      { value: "$290K", label: "Condo/TH median" },
      { value: "7,442", label: "Active SF listings" },
      { value: "4.0", label: "Months supply" },
    ],
    sections: [
      {
        kind: "prose",
        label: "01 — Prices",
        title: "What happened to Las Vegas prices in August 2026?",
        paragraphs: [
          "The August 6, 2026 local report states a $480,000 single-family median, $290,000 condo/townhome median, 31 median days on market, 2,150 pending sales, and 2,587 closed sales.",
          "Treat these as a dated headline benchmark. Sold price and list price are different series — we confirm definition before you act on a number.",
        ],
      },
      {
        kind: "prose",
        label: "02 — Inventory",
        title: "How much inventory and supply are available?",
        paragraphs: [
          "Same August 6 report: 7,442 active single-family listings and about 4.0 months of supply. A separate August MLS scan counted 11,878 listings across single-family, condominium, and townhome inventory — label property type when you cite either figure.",
          "More selection does not mean every seller must discount; well-presented, accurately priced homes still move.",
        ],
      },
      {
        kind: "prose",
        label: "03 — Negotiation",
        title: "Do buyers have negotiating leverage?",
        paragraphs: [
          "An August 9 analysis of July results reported about 3.6 months of supply at July month-end, 43.4% of active listings with price cuts, and a median reduction of $18,900.",
          "The August 6 report also notes 57.5% of completed sales closed below asking. Use that for careful comparison — not a blanket assumption every listing will cut price.",
        ],
      },
      {
        kind: "cards",
        label: "04 — Submarkets",
        title: "What changed in Henderson, Summerlin, and Green Valley?",
        items: [
          {
            title: "Summerlin",
            body: "June snapshot: ~$537,500 median sold, ~1,465 active SF, ~4.5 months supply, 35 median days. August village panel is a separate list-price series (~$686K median list).",
            href: "/neighborhoods/summerlin",
          },
          {
            title: "Henderson",
            body: "Local 2026 report: ~$540,000 SF median, ~2.3 months supply, 35 days. Redfin trailing period ending May 2026: ~$490,000 and 57 days — label both if shown together.",
            href: "/neighborhoods/henderson",
          },
          {
            title: "Green Valley",
            body: "July 2026 SF report: ~$596,000 median sold (+3.2% YoY), 28 median DOM, 61 homes sold. Source did not state active inventory — do not invent it.",
            href: "/neighborhoods/green-valley",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is it a buyer’s or seller’s market in August 2026?",
        answer:
          "More balanced than the peak years: roughly 4 months of supply and widespread price reductions on active inventory, while clean, well-priced homes still sell. Strategy depends on the competing set for your address.",
      },
      {
        question: "How often is this updated?",
        answer: `We refresh the public snapshot monthly and pull live MLS for your address. Call ${agentInfo.phoneFormatted} for a property-specific read.`,
      },
    ],
    ctaTitle: "Get the next report or request an interpretation",
    ctaBody: `Call ${agentInfo.phoneFormatted} — we will pull comps for your buy or sell target.`,
    ctaHref: "/contact",
    ctaLabel: "Request analysis",
  },

  "market-update": {
    kicker: siteConfig.fullName,
    title: "Market update —",
    accent: "what changed this cycle",
    lede: answerFirst.marketUpdate,
    breadcrumbs: crumbs({ label: "Market update" }),
    ctas: [phoneCta, { href: "/market-report", label: "Full report", variant: "secondary" }],
    statsTitle: "August 6, 2026 Valley single-family signals",
    stats: [
      { value: valleyAugust6.medianSf, label: "SF median" },
      { value: valleyAugust6.activeSfListings, label: "Active SF listings" },
      { value: valleyAugust6.monthsSupply, label: "Months of supply" },
      { value: valleyAugust6.medianDom, label: "Median DOM" },
    ],
    sections: [
      {
        kind: "prose",
        label: "This cycle",
        title: "Inventory is up; urgency is selective",
        paragraphs: [
          `The August 6, 2026 Valley report counted ${valleyAugust6.activeSfListings} active single-family listings and ${valleyAugust6.monthsSupply} months of supply. That does not mean every seller must cut — list price must match the last 60–90 days of closes in the same product type.`,
          `California relocators remain a steady demand slice, especially in Summerlin and Henderson square-footage bands that undercut coastal California for comparable interior space. Call ${agentInfo.phoneFormatted} to align your timing.`,
        ],
      },
      {
        kind: "cards",
        label: "Action items",
        title: "Use the update, don’t just read it",
        items: [
          {
            title: "Buyers",
            body: "Ask for DOM and price-cut history on every tour home before writing.",
          },
          {
            title: "Sellers",
            body: "Launch at a defensible price; the cost of a stale listing often exceeds a day-one adjustment.",
          },
          {
            title: "Relocators",
            body: "Lock your California sale path before stretching on a Nevada list that needs multiple cuts.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should I wait for rates to drop?",
        answer:
          "Rate moves and price moves can offset each other. We model payment vs. purchase price for your loan program — waiting is a strategy only if the math holds.",
      },
      {
        question: "Where can I see deeper stats?",
        answer: "See the full market report page, or ask for a ZIP-level pull for your shortlist.",
      },
    ],
    ctaTitle: "Translate this into a decision",
    ctaBody: `Call ${agentInfo.phoneFormatted} — buy, sell, or dual-market timing.`,
    ctaHref: "/contact",
    ctaLabel: "Talk strategy",
  },

  "market-insights": {
    kicker: siteConfig.fullName,
    title: "Market insights —",
    accent: "patterns behind the headlines",
    lede: answerFirst.marketReport,
    breadcrumbs: crumbs({ label: "Market insights" }),
    ctas: [phoneCta, { href: "/market-report", label: "Full report", variant: "secondary" }],
    statsTitle: "Labeled submarket snapshots (not one metro average)",
    stats: [
      { value: summerlinSnapshot.juneMedianSold, label: "Summerlin June sold median" },
      { value: hendersonSnapshot.localMedianSf, label: "Henderson local SF median" },
      { value: valleyAugust6.medianSf, label: "Valley SF median (Aug 6)" },
      { value: "MLS", label: "Luxury — confirm comps" },
    ],
    sections: [
      {
        kind: "prose",
        label: "Insight",
        title: "Square footage and taxes drive the relocator math",
        paragraphs: [
          "Orange County buyers often compare total monthly cost and interior square footage, not headline medians alone. Nevada’s lack of state income tax and lower typical price-per-foot in many Valley products is the structural story — not a seasonal blip.",
          "Within the Valley, village-level HOA amenity packages and commute to Harry Reid Airport or employment corridors usually decide the shortlist more than metro-wide averages.",
        ],
      },
      {
        kind: "cards",
        label: "Lenses",
        title: "Three ways to cut the data",
        items: [
          {
            title: "Primary residence",
            body: "Prioritize floor plan, HOA rules, and commute — then stress-test payment under rate scenarios.",
          },
          {
            title: "Investment hold",
            body: "Underwrite rent comps, insurance, and HOA rental caps before chasing appreciation narratives.",
          },
          {
            title: "Luxury exit",
            body: "Buyer pools are thinner; marketing reach and accurate $/sq ft matter more than open-house volume.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Which areas are California buyers targeting?",
        answer:
          "Summerlin, Henderson master plans, and select northwest corridors show up most often — driven by square footage and amenity packages, not slogans.",
      },
      {
        question: "Who interprets this for my deal?",
        answer: `${agentInfo.name} frames the dual-market plan; ${agentInfo.partnerAgent.name} applies local comps. Call ${agentInfo.phoneFormatted}.`,
      },
    ],
    ctaTitle: "Apply insights to your address",
    ctaBody: `Call ${agentInfo.phoneFormatted} for a shortlist or list-price working session.`,
    ctaHref: "/contact",
    ctaLabel: "Book a consult",
  },

  "google-business": {
    kicker: siteConfig.fullName,
    title: "Find us —",
    accent: "NAP and how to reach the team",
    lede: `${agentInfo.name} · ${agentInfo.licenseLabel}. Phone ${agentInfo.phoneFormatted}. Email ${agentInfo.email}.`,
    breadcrumbs: crumbs({ label: "Google Business / NAP" }),
    ctas: [phoneCta, { href: `mailto:${agentInfo.email}`, label: "Email", variant: "secondary" }],
    sections: [
      {
        kind: "cards",
        label: "NAP",
        title: "Name, address, phone — keep these consistent",
        items: [
          {
            title: "Planning office (Irvine)",
            body: "320 Junco, Irvine, CA 92618 — relocation planning with Dr. Gene Boyle.",
          },
          {
            title: "Las Vegas partner office",
            body: "9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134 — BHHS Nevada Properties.",
          },
          {
            title: "Phone & email",
            body: `${agentInfo.phoneFormatted} · ${agentInfo.email}`,
          },
        ],
      },
      {
        kind: "prose",
        label: "Who you’ll meet",
        title: "One phone number, two market specialists",
        paragraphs: [
          `${agentInfo.name} leads Irvine-to-Las Vegas relocation planning (${agentInfo.licenseLabel}). ${partnerLine}`,
          "Use the same NAP everywhere — Google Business Profile, directories, and this site — so searchers land on the correct phone and offices.",
        ],
      },
      {
        kind: "steps",
        label: "Next step",
        title: "From search to appointment",
        steps: [
          { title: "Call or email", body: `Reach us at ${agentInfo.phoneFormatted} or ${agentInfo.email}.` },
          { title: "Share goals", body: "Buy, sell, dual move, investment, or luxury — we route you to the right workflow." },
          { title: "Tour or valuation", body: `${agentInfo.partnerAgent.name} schedules Valley time; California planning stays with ${agentInfo.name}.` },
        ],
      },
    ],
    faqs: [
      {
        question: "Which address should I put in my GPS for meetings?",
        answer:
          "Confirm when you book. Irvine planning: 320 Junco, Irvine, CA 92618. Las Vegas partner office: 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134.",
      },
      {
        question: "Is this the Google Business listing for reviews?",
        answer: `Yes — keep Name, Address, and Phone identical to this page. Call ${agentInfo.phoneFormatted} if something looks wrong online.`,
      },
    ],
    ctaTitle: "Save the NAP, then call",
    ctaBody: `${agentInfo.phoneFormatted} · ${agentInfo.email}`,
    ctaHref: agentInfo.phoneTel,
    ctaLabel: `Call ${agentInfo.phoneFormatted}`,
  },

  "luxury-homes": {
    kicker: siteConfig.fullName,
    title: "Luxury homes —",
    accent: "discretion and accurate $/sq ft",
    lede: answerFirst.luxury,
    breadcrumbs: crumbs({ label: "Luxury homes" }),
    ctas: [phoneCta, { href: "/buyers/luxury-homes-las-vegas", label: "Luxury buyer guide", variant: "secondary" }],
    statsTitle: "Luxury band",
    stats: [
      { value: "$1.2M", label: "Median" },
      { value: "890", label: "Active approx." },
      { value: "45", label: "Avg DOM" },
      { value: "$385", label: "$/sq ft" },
    ],
    sections: [
      {
        kind: "prose",
        label: "Approach",
        title: "Luxury is a process, not a brochure",
        paragraphs: [
          "Above $1M, buyer pools shrink and every showing is a qualification event. We emphasize comparable closed sales, view corridors, lot utility, and upgrade quality — not inflated list narratives.",
          `${agentInfo.partnerAgent.name} runs discreet Valley tours; ${agentInfo.name} coordinates out-of-state buyers relocating from Irvine and coastal California.`,
        ],
      },
      {
        kind: "cards",
        label: "Focus areas",
        title: "Where luxury inventory concentrates",
        items: [
          { title: "The Ridges", body: "Guard-gated Summerlin estates; custom architecture and golf adjacency.", href: "/neighborhoods/the-ridges" },
          { title: "Southern Highlands", body: "Golf-oriented luxury with mountain views and larger lots.", href: "/neighborhoods/southern-highlands" },
          { title: "Henderson upslope", body: "MacDonald Highlands and Anthem-adjacent product — verify HOA and view premiums." },
        ],
      },
    ],
    faqs: [
      {
        question: "How long do luxury homes take to sell?",
        answer:
          "Often 45+ days when priced to comps. Overpricing extends that quickly; we recommend a day-one strategy tied to recent closes.",
      },
      {
        question: "Can you represent me on a private listing?",
        answer: `Yes — call ${agentInfo.phoneFormatted}. Off-market paths still need clear terms and due diligence.`,
      },
    ],
    ctaTitle: "Start a discreet search or listing",
    ctaBody: `Call ${agentInfo.phoneFormatted}.`,
    ctaHref: "/contact",
    ctaLabel: "Private consult",
  },

  "investment-properties": {
    kicker: siteConfig.fullName,
    title: "Investment properties —",
    accent: "underwrite before you tour",
    lede: answerFirst.investment,
    breadcrumbs: crumbs({ label: "Investment properties" }),
    ctas: [phoneCta, contactCta],
    sections: [
      {
        kind: "prose",
        label: "Discipline",
        title: "Yield first, narrative second",
        paragraphs: [
          "We start with rent comps, insurance quotes, HOA rental caps, and realistic vacancy — then look at appreciation. Flashy corridors without rental demand fail the hold test.",
          `${agentInfo.name} helps out-of-state investors coordinate remote closings; ${agentInfo.partnerAgent.name} validates local product and property condition.`,
        ],
      },
      {
        kind: "steps",
        label: "Workflow",
        title: "Investment diligence path",
        steps: [
          { title: "Criteria", body: "Cash vs. financed, target cap rate, and max renovation appetite." },
          { title: "Filter", body: "ZIP and product type screens; reject HOAs that block your rental plan." },
          { title: "Tour & offer", body: "Inspection-heavy offers; negotiate credits against actual repair scopes." },
        ],
      },
      {
        kind: "cards",
        label: "Product types",
        title: "Common investor lanes",
        items: [
          { title: "Long-term rental", body: "Single-family and townhome stock near employment corridors." },
          { title: "Value-add", body: "Cosmetic updates where comps support post-reno rent and resale." },
          { title: "1031 / exchange", body: "Timeline-sensitive purchases — start identification early." },
        ],
      },
    ],
    faqs: [
      {
        question: "Do you manage rentals?",
        answer:
          "We focus on acquisition and disposition. We can introduce property managers; management is a separate engagement.",
      },
      {
        question: "Can I buy sight-unseen?",
        answer: `${agentInfo.partnerAgent.name} can tour with video and inspection advocacy. Call ${agentInfo.phoneFormatted} to set protocol.`,
      },
    ],
    ctaTitle: "Run numbers on a target ZIP",
    ctaBody: `Call ${agentInfo.phoneFormatted} with your criteria.`,
    ctaHref: "/contact",
    ctaLabel: "Investor intake",
  },

  "new-construction": {
    kicker: siteConfig.fullName,
    title: "New construction —",
    accent: "your advocate opposite the builder",
    lede: answerFirst.newConstruction,
    breadcrumbs: crumbs({ label: "New construction" }),
    ctas: [phoneCta, contactCta],
    sections: [
      {
        kind: "prose",
        label: "Why representation",
        title: "Negotiate options, incentives, and punch lists",
        paragraphs: [
          "Sales centers are skilled at selling elevations and design-center packages. An independent agent reviews incentives, lot premiums, closing-cost credits, and contract addenda before you sign.",
          "Northwest Las Vegas, Henderson master plans, and Summerlin villages all have active builder inventory — compare structural warranties and HOA budgets, not just model-home finishes.",
        ],
      },
      {
        kind: "steps",
        label: "Process",
        title: "From model home to keys",
        steps: [
          { title: "Register correctly", body: "Have us register you with the builder so representation is recognized." },
          { title: "Compare incentives", body: "Rate buydowns vs. price cuts vs. design credits — pick what matches your hold period." },
          { title: "Inspections", body: "Pre-drywall and final walkthroughs catch issues marketing photos never show." },
        ],
      },
      {
        kind: "cards",
        label: "Watch-outs",
        title: "New-build pitfalls we flag",
        items: [
          { title: "Lot premiums", body: "Views and corners add cost — verify against resale comps." },
          { title: "HOA phase fees", body: "Amenity phases can change assessments as the community builds out." },
          { title: "Completion dates", body: "Build a buffer if you are selling California housing on a tight close." },
        ],
      },
    ],
    faqs: [
      {
        question: "Does buyer representation cost extra with a builder?",
        answer:
          "Often the builder already allocates co-op compensation. We confirm in writing before you commit to a lot.",
      },
      {
        question: "Can you help if I already visited a sales office?",
        answer: `Sometimes — call ${agentInfo.phoneFormatted} immediately. Registration rules are time-sensitive.`,
      },
    ],
    ctaTitle: "Register before you fall for the model",
    ctaBody: `Call ${agentInfo.phoneFormatted} so representation is in place.`,
    ctaHref: "/contact",
    ctaLabel: "New-build consult",
  },

  "why-berkshire-hathaway": {
    kicker: siteConfig.fullName,
    title: "Why Berkshire Hathaway —",
    accent: "brand strength, local execution",
    lede: `${siteConfig.brandName} backs Valley closings while ${agentInfo.name} plans the Irvine side. Call ${agentInfo.phoneFormatted}.`,
    breadcrumbs: crumbs({ label: "Why Berkshire Hathaway" }),
    ctas: [phoneCta, { href: "/about", label: "About the team", variant: "secondary" }],
    sections: [
      {
        kind: "prose",
        label: "Brand",
        title: "Stability you can explain to a relocating spouse",
        paragraphs: [
          "Berkshire Hathaway HomeServices is associated with Berkshire Hathaway Inc. — a name clients recognize when they are wiring earnest money across state lines. Ethics standards and a large referral network support out-of-area moves.",
          `Your day-to-day team is still local: ${agentInfo.name} for California relocation planning, ${agentInfo.partnerAgent.name} for Las Vegas execution under BHHS Nevada Properties.`,
        ],
      },
      {
        kind: "cards",
        label: "Practical upsides",
        title: "What the affiliation changes for you",
        items: [
          { title: "Trust signal", body: "Recognizable brand when interviewing agents from out of state." },
          { title: "Marketing reach", body: "Listing tools and referral paths beyond a single ZIP code." },
          { title: "Process rigor", body: "Compliance and transaction support behind the individual agent." },
        ],
      },
    ],
    faqs: [
      {
        question: "Is Dr. Gene Boyle a Nevada broker?",
        answer: `${agentInfo.name} is ${agentInfo.licenseLabel}. Las Vegas transactions run with ${agentInfo.partnerAgent.name} and BHHS Nevada Properties.`,
      },
      {
        question: "How do I start?",
        answer: `Call ${agentInfo.phoneFormatted} or use the contact form — we will route buy, sell, or dual-market work.`,
      },
    ],
    ctaTitle: "Work with a known brand and a named team",
    ctaBody: `Call ${agentInfo.phoneFormatted}.`,
    ctaHref: "/contact",
    ctaLabel: "Get started",
  },

  "security-policy": {
    kicker: siteConfig.fullName,
    title: "Security policy —",
    accent: "responsible disclosure",
    lede: `How we handle vulnerability reports for ${siteConfig.url.replace("https://", "")}. Contact ${agentInfo.email} or ${agentInfo.phoneFormatted}.`,
    breadcrumbs: crumbs({ label: "Security policy" }),
    showListings: false,
    ctas: [
      { href: `mailto:${agentInfo.email}`, label: "Email security contact", variant: "primary" },
      phoneCta,
    ],
    sections: [
      {
        kind: "prose",
        label: "Commitment",
        title: "We take reports seriously",
        paragraphs: [
          `${siteConfig.fullName} and partners at ${siteConfig.brandName} aim to protect client data and site integrity. If you find a security issue, tell us privately before public disclosure.`,
          "Please do not access other users’ data, disrupt service, or exfiltrate information while testing. Stick to proving the issue with minimal impact.",
        ],
        tone: "muted",
      },
      {
        kind: "prose",
        label: "How to report",
        title: "What to include",
        paragraphs: [
          `Email ${agentInfo.email} with a clear description, steps to reproduce, potential impact, and your contact information. Phone: ${agentInfo.phoneFormatted}.`,
          "We aim to acknowledge valid reports within a few business days and will work with you on remediation timing before any coordinated disclosure.",
        ],
      },
      {
        kind: "prose",
        label: "Scope notes",
        title: "Out of scope",
        paragraphs: [
          `Social engineering of staff, physical attacks, spam, and automated scanners that degrade availability are not authorized. Third-party services (MLS widgets, analytics, scheduling) should be reported to those vendors when the issue is entirely on their side — CC us if ${siteConfig.name} users are affected.`,
        ],
        tone: "ink",
      },
    ],
    faqs: [
      {
        question: "Is there a bug bounty?",
        answer:
          "There is no formal paid bounty program at this time. We still appreciate responsible reports and will credit researchers when appropriate.",
      },
      {
        question: "Where else can I reach you?",
        answer: `${agentInfo.phoneFormatted} · ${agentInfo.email}`,
      },
    ],
    ctaTitle: "Report a vulnerability",
    ctaBody: `Email ${agentInfo.email} or call ${agentInfo.phoneFormatted}.`,
    ctaHref: `mailto:${agentInfo.email}`,
    ctaLabel: "Email us",
  },

  "buyers-california-relocator": {
    kicker: siteConfig.fullName,
    title: "California relocator buyers —",
    accent: "Orange County math, Valley homes",
    lede: `Compare square footage, taxes, and commute — then tour with a plan. ${agentInfo.name}; ${partnerLine}`,
    breadcrumbs: crumbs({ label: "Buyers", href: "/buyers" }, { label: "California relocator" }),
    ctas: [phoneCta, { href: "/relocation", label: "Relocation overview", variant: "secondary" }],
    statsTitle: "Relocator benchmarks",
    stats: [
      { value: "$450K", label: "LV median" },
      { value: summerlinSnapshot.juneMedianSold, label: "Summerlin June sold median" },
      { value: "0%", label: "NV state income tax" },
      { value: "28", label: "Avg DOM" },
    ],
    sections: [
      {
        kind: "prose",
        label: "Buyer brief",
        title: "Translate Irvine expectations to Valley product",
        paragraphs: [
          "Most California relocators care about interior square footage, HOA amenity level, and drive time to Harry Reid Airport or employment hubs. We name campuses when relevant (for example Palo Verde High School or The Meadows School) as location facts — you verify boundaries and programs for any address.",
          `${agentInfo.name} sequences the California sale; ${agentInfo.partnerAgent.name} runs Las Vegas offers and inspections.`,
        ],
      },
      {
        kind: "steps",
        label: "Path",
        title: "Relocator purchase steps",
        steps: [
          { title: "Pre-approval", body: "Know your payment ceiling under current rates before touring." },
          { title: "Village shortlist", body: "Summerlin, Henderson, or northwest — filter by sq ft and HOA rules." },
          { title: "Tour block", body: "One or two intensive days beats scattered weekends." },
          { title: "Offer", body: "Use DOM and comps; keep California contingency timing realistic." },
        ],
      },
    ],
    faqs: [
      {
        question: "Should I buy before I sell in California?",
        answer:
          "Only with a clear capital plan. We model bridge, rent-back, and sequential close options before you write.",
      },
      {
        question: "Who shows me houses?",
        answer: `${agentInfo.partnerAgent.name} in the Valley. Call ${agentInfo.phoneFormatted} to schedule.`,
      },
    ],
    ctaTitle: "Plan the dual-state purchase",
    ctaBody: `Call ${agentInfo.phoneFormatted}.`,
    ctaHref: "/contact",
    ctaLabel: "Buyer intake",
  },

  "buyers-first-time": {
    kicker: siteConfig.fullName,
    title: "First-time buyers —",
    accent: "clear steps, no jargon fog",
    lede: `From pre-approval to keys with a named team. ${agentInfo.name}; ${partnerLine}`,
    breadcrumbs: crumbs({ label: "Buyers", href: "/buyers" }, { label: "First-time buyers" }),
    ctas: [phoneCta, contactCta],
    sections: [
      {
        kind: "steps",
        label: "Basics",
        title: "First purchase in four stages",
        steps: [
          { title: "Money", body: "Pre-approval, down-payment source, and monthly payment comfort zone." },
          { title: "Search", body: "Filter by square footage, HOA dues, and commute — ignore hype labels." },
          { title: "Offer", body: "Price, contingencies, and timelines explained in plain English before you sign." },
          { title: "Close", body: "Inspection repairs, appraisal, and final walkthrough with a checklist." },
        ],
      },
      {
        kind: "prose",
        label: "Support",
        title: "You get advocacy, not pressure",
        paragraphs: [
          `We introduce lenders and inspectors; you choose. ${agentInfo.partnerAgent.name} covers Valley logistics. Call ${agentInfo.phoneFormatted} when you are ready to start — even if you are 6–12 months out.`,
        ],
      },
      {
        kind: "cards",
        label: "Common questions",
        title: "What first-time buyers ask us",
        items: [
          { title: "Down payment", body: "Programs vary (including low-down options). Lender quotes beat internet averages." },
          { title: "Closing costs", body: "Budget for title, escrow, and prepaid items — we estimate early." },
          { title: "Resale vs new", body: "Resale can close faster; new builds need registration and punch-list discipline." },
        ],
      },
    ],
    faqs: [
      {
        question: "How long does a first purchase take?",
        answer:
          "Often 30–45 days after an accepted offer with financing. Searching beforehand can take weeks to months depending on criteria.",
      },
      {
        question: "Do I need perfect credit?",
        answer: `Not perfect — but knowing your score and debt ratios early avoids wasted tours. Call ${agentInfo.phoneFormatted} for a lender intro.`,
      },
    ],
    ctaTitle: "Start as a first-time buyer",
    ctaBody: `Call ${agentInfo.phoneFormatted}.`,
    ctaHref: "/contact",
    ctaLabel: "Get guidance",
  },

  "buyers-luxury": {
    kicker: siteConfig.fullName,
    title: "Luxury buyers —",
    accent: "qualified access and sharp comps",
    lede: `Estates and guard-gated product with discreet tours. ${agentInfo.name}; ${partnerLine}`,
    breadcrumbs: crumbs({ label: "Buyers", href: "/buyers" }, { label: "Luxury buyers" }),
    ctas: [phoneCta, { href: "/luxury-homes", label: "Luxury overview", variant: "secondary" }],
    statsTitle: "Luxury context",
    stats: [
      { value: "$1.2M", label: "Median" },
      { value: "45", label: "Avg DOM" },
      { value: "$385", label: "$/sq ft" },
      { value: "890", label: "Active approx." },
    ],
    sections: [
      {
        kind: "prose",
        label: "Buyer standard",
        title: "Proof over staging",
        paragraphs: [
          "We verify view premiums, remodel quality, and lot usability against closed sales. Proof-of-funds or strong pre-underwriting letters matter before private showings.",
          `Out-of-state luxury buyers work with ${agentInfo.name} on timing and wire logistics; ${agentInfo.partnerAgent.name} executes local diligence.`,
        ],
      },
      {
        kind: "cards",
        label: "Shortlist lenses",
        title: "How we filter luxury inventory",
        items: [
          { title: "Architecture & lot", body: "Single-story vs. multi-level, usable yard, and privacy from corridors." },
          { title: "HOA & golf", body: "Membership structures and amenity fees can rival a second mortgage payment." },
          { title: "Resale liquidity", body: "Unusual floor plans need a realistic exit thesis even if you plan to hold." },
        ],
      },
    ],
    faqs: [
      {
        question: "Can you access coming-soon or off-market homes?",
        answer: `Sometimes through the BHHS network and local relationships. Call ${agentInfo.phoneFormatted} with your criteria.`,
      },
      {
        question: "Do you coordinate design or contractors post-close?",
        answer: "We can introduce vetted pros; project management is scoped separately if needed.",
      },
    ],
    ctaTitle: "Define the luxury brief",
    ctaBody: `Call ${agentInfo.phoneFormatted}.`,
    ctaHref: "/contact",
    ctaLabel: "Private buyer consult",
  },

  "sellers-relocation": {
    kicker: siteConfig.fullName,
    title: "Selling to relocate —",
    accent: "exit California, land in Nevada",
    lede: `Align list date, contingencies, and Las Vegas purchase. ${agentInfo.name}; ${partnerLine}`,
    breadcrumbs: crumbs({ label: "Sellers", href: "/sellers" }, { label: "Relocation sellers" }),
    ctas: [phoneCta, { href: "/relocation", label: "Relocation hub", variant: "secondary" }],
    sections: [
      {
        kind: "prose",
        label: "Coordination",
        title: "Two closings, one calendar",
        paragraphs: [
          "Relocation sellers lose money when the California listing is mispriced or the Nevada purchase is rushed. We set a list strategy that matches your target move month and keep offer terms flexible enough to bridge both sides.",
          `${agentInfo.partnerAgent.name} can advance the Las Vegas search while your Irvine-area sale (or other California exit) progresses under ${agentInfo.name}'s planning.`,
        ],
      },
      {
        kind: "steps",
        label: "Seller path",
        title: "Relocation listing sequence",
        steps: [
          { title: "Valuation", body: "Comps and net sheet before you commit to a Nevada budget." },
          { title: "Prep", body: "High-ROI fixes only — avoid remodeling into a move deadline." },
          { title: "Launch", body: "Price to the last 60 days of closes; adjust early if traffic is thin." },
          { title: "Pair the purchase", body: "Rent-back, bridge, or sequential close options selected before you accept." },
        ],
      },
    ],
    faqs: [
      {
        question: "Can buyers request a long escrow while I find a Las Vegas home?",
        answer:
          "Yes — negotiable. We structure timelines so you are not homeless between states or double-paying forever.",
      },
      {
        question: "Who lists my California home?",
        answer: `Discuss with ${agentInfo.name} at ${agentInfo.phoneFormatted} — licensing and co-broker arrangements depend on your property’s location.`,
      },
    ],
    ctaTitle: "Time your sale to your move",
    ctaBody: `Call ${agentInfo.phoneFormatted}.`,
    ctaHref: "/contact",
    ctaLabel: "Seller relocation plan",
  },

  "sellers-downsizing": {
    kicker: siteConfig.fullName,
    title: "Downsizing sellers —",
    accent: "right-size the next chapter",
    lede: `Sell excess square footage, then buy a simpler footprint — including 55+ options. ${partnerLine}`,
    breadcrumbs: crumbs({ label: "Sellers", href: "/sellers" }, { label: "Downsizing" }),
    ctas: [phoneCta, { href: "/55-plus-communities", label: "55+ communities", variant: "secondary" }],
    sections: [
      {
        kind: "prose",
        label: "Mindset",
        title: "Price the exit; design the landing",
        paragraphs: [
          "Downsizing fails when sellers over-improve a large home they are leaving, or underestimate HOA and amenity fees in the next community. We net-sheet the sale and compare single-story, patio, and age-qualified inventory by true monthly cost.",
          `Call ${agentInfo.phoneFormatted} — ${agentInfo.name} and ${agentInfo.partnerAgent.name} will map sale proceeds to a realistic purchase band.`,
        ],
      },
      {
        kind: "cards",
        label: "Next-home filters",
        title: "What downsizers usually optimize",
        items: [
          { title: "Single-story", body: "Fewer stairs; verify actual living square footage vs. marketed totals." },
          { title: "Lock-and-leave", body: "HOA exterior care and security features for travel seasons." },
          { title: "55+ amenities", body: "Golf, clubs, and social calendars — read governing docs for age rules." },
        ],
      },
      {
        kind: "steps",
        label: "Process",
        title: "Downsize without chaos",
        steps: [
          { title: "Declutter plan", body: "Stage for sale while deciding what moves — start early." },
          { title: "List smart", body: "Price to comps; large homes can sit if tagged to yesterday’s peak." },
          { title: "Buy smaller", body: "Tour target product before accepting so proceeds and timing match." },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we rent after selling?",
        answer:
          "A short lease can reduce pressure if inventory is thin in your target community. We help you weigh carrying costs.",
      },
      {
        question: "Are 55+ communities required for downsizing?",
        answer: "No — many buyers choose mixed-age patio homes. 55+ is optional when age qualification fits your household.",
      },
    ],
    ctaTitle: "Net sheet your downsize",
    ctaBody: `Call ${agentInfo.phoneFormatted}.`,
    ctaHref: "/contact",
    ctaLabel: "Downsizing consult",
  },

  "sellers-move-up": {
    kicker: siteConfig.fullName,
    title: "Move-up sellers —",
    accent: "sell the starter, buy the stretch",
    lede: `Equity, contingencies, and tour timing so you do not miss the next home. ${agentInfo.name}; ${partnerLine}`,
    breadcrumbs: crumbs({ label: "Sellers", href: "/sellers" }, { label: "Move-up" }),
    ctas: [phoneCta, contactCta],
    sections: [
      {
        kind: "prose",
        label: "Strategy",
        title: "Make equity usable without gambling",
        paragraphs: [
          "Move-up sellers need a credible list price and a purchase strategy that sellers of the next home will accept — often a sale contingency, rent-back, or bridge product. We show the net sheet before you fall in love with a larger floor plan.",
          `Valley move-ups (for example Henderson to Summerlin, or more square footage in the same city) are coordinated by ${agentInfo.partnerAgent.name}. Cross-state move-ups include ${agentInfo.name}.`,
        ],
      },
      {
        kind: "steps",
        label: "Sequence",
        title: "Move-up without gaps",
        steps: [
          { title: "Equity check", body: "Current value, loan payoff, and improvement ROI." },
          { title: "List readiness", body: "Photos, minor repairs, and pricing vs. active competition." },
          { title: "Parallel search", body: "Tour the next band while your home is live — know the tradeoffs." },
          { title: "Linked close", body: "Negotiate dates so movers load once." },
        ],
      },
    ],
    faqs: [
      {
        question: "Will sellers accept an offer contingent on my sale?",
        answer:
          "In a balanced market, often yes if your home is listed and priced correctly. We package proof of equity and listing status.",
      },
      {
        question: "How do I reach you?",
        answer: `Call ${agentInfo.phoneFormatted}.`,
      },
    ],
    ctaTitle: "Map the move-up",
    ctaBody: `Call ${agentInfo.phoneFormatted} for a net sheet and purchase band.`,
    ctaHref: "/contact",
    ctaLabel: "Move-up plan",
  },

  "sellers-divorce-probate": {
    kicker: siteConfig.fullName,
    title: "Divorce & probate sales —",
    accent: "process, paperwork, and patience",
    lede: `Clear communication and documentation-heavy closings. ${agentInfo.name}; ${partnerLine}`,
    breadcrumbs: crumbs({ label: "Sellers", href: "/sellers" }, { label: "Divorce & probate" }),
    ctas: [phoneCta, contactCta],
    sections: [
      {
        kind: "prose",
        label: "Tone",
        title: "We prioritize clarity over speed theater",
        paragraphs: [
          "Divorce and probate sales often involve attorneys, court timelines, and multiple decision-makers. We keep showings, offers, and repair negotiations documented so every party sees the same facts.",
          `Call ${agentInfo.phoneFormatted}. ${agentInfo.partnerAgent.name} handles Valley listing logistics; ${agentInfo.name} helps when a California–Nevada relocation or dual-state estate is in play.`,
        ],
      },
      {
        kind: "cards",
        label: "What we coordinate",
        title: "Practical support alongside your counsel",
        items: [
          { title: "Access", body: "Lockboxes, occupancy schedules, and respectful showing windows." },
          { title: "Pricing", body: "Defensible comps when parties disagree on value." },
          { title: "Offers", body: "Side-by-side comparisons of net, timing, and contingency risk." },
          { title: "Closing", body: "Title requirements, court orders, and payoff letters tracked to the day." },
        ],
      },
      {
        kind: "steps",
        label: "Path",
        title: "Typical flow",
        steps: [
          { title: "Authority", body: "Confirm who can list and sign — we do not bypass your attorneys." },
          { title: "Condition", body: "Agree on repair vs. credit strategy before launch." },
          { title: "Market", body: "Launch with shared reporting cadence for all stakeholders." },
        ],
      },
    ],
    faqs: [
      {
        question: "Do you give legal advice?",
        answer:
          "No. We coordinate the real estate transaction and work with your divorce or probate counsel on required documents.",
      },
      {
        question: "Can one spouse or heir delay everything?",
        answer: `Process rules vary. We surface blockers early. Call ${agentInfo.phoneFormatted} to discuss your situation confidentially.`,
      },
    ],
    ctaTitle: "Confidential seller consult",
    ctaBody: `Call ${agentInfo.phoneFormatted} or email ${agentInfo.email}.`,
    ctaHref: agentInfo.phoneTel,
    ctaLabel: `Call ${agentInfo.phoneFormatted}`,
  },
} satisfies Record<string, MarketingGuide>;

export type MarketingGuideKey = keyof typeof marketingGuides;
