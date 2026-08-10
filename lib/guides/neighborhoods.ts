import type { AreaGuide } from "@/lib/guides/types";
import { agentInfo } from "@/lib/site-config";

const partnerLine = `Las Vegas partner ${agentInfo.partnerAgent.name} (${agentInfo.partnerAgent.license}) with BHHS Nevada Properties.`;

function crumbs(name: string, slug: string) {
  return [
    { label: "Home", href: "/" },
    { label: "Neighborhoods", href: "/neighborhoods" },
    { label: name },
  ] as const;
}

export const neighborhoodGuides: Record<string, AreaGuide> = {
  summerlin: {
    slug: "summerlin",
    name: "Summerlin",
    title: "Summerlin homes —",
    accent: "master-planned Valley living",
    lede: `Red Rock views, 150+ parks, and a wide inventory band for Irvine relocators. Planning with ${agentInfo.name}; ${partnerLine}`,
    breadcrumbs: [...crumbs("Summerlin", "summerlin")],
    statsTitle: "Summerlin market | January 2026",
    stats: [
      { value: "$625K", label: "Median price" },
      { value: "22", label: "Avg DOM" },
      { value: "342", label: "Active listings" },
      { value: "+6.8%", label: "YoY" },
    ],
    overviewTitle: "Why relocators shortlist Summerlin",
    overview: [
      "Summerlin spans roughly 22,500 acres on the western rim of the Las Vegas Valley, developed by The Howard Hughes Corporation since 1990. Distinct villages offer condos through custom estates with Red Rock Canyon minutes away.",
      "Expect 150+ parks, 150+ miles of trails, multiple golf courses, and Downtown Summerlin retail. Commute to the Strip is often 15–25 minutes outside peak traffic.",
      "Median pricing sits above valley averages for similar square footage — still a common value comparison for Orange County movers facing California coastal prices and state income tax.",
    ],
    highlights: [
      {
        title: "Red Rock access",
        body: "Trail connections and a short drive to Red Rock Canyon for hiking and scenic loops without leaving the west side.",
      },
      {
        title: "Village variety",
        body: "From The Paseos to Red Rock Country Club and The Ridges — filter by square footage, HOA amenity level, and price band.",
      },
      {
        title: "Retail & care",
        body: "Downtown Summerlin, Boca Park, Tivoli Village, and Summerlin Hospital keep daily errands and specialty care close.",
      },
      {
        title: "School options nearby",
        body: "Clark County School District campuses and private options such as The Meadows School and Bishop Gorman are commonly reviewed by relocators — verify current boundaries and programs for your address.",
      },
    ],
    detailsTitle: "Schools & amenities (verify for your address)",
    details: [
      {
        title: "Elementary / K–8 examples",
        items: [
          "William R. Lummis Elementary",
          "Marion Earl Elementary",
          "Helen Smith Elementary",
          "John C. Vanderburg Elementary",
        ],
      },
      {
        title: "Secondary examples",
        items: [
          "Palo Verde High School",
          "West Career & Technical Academy",
          "Del E. Webb Middle School",
          "Sig Rogich Middle School",
        ],
      },
      {
        title: "Private options",
        items: [
          "Bishop Gorman High School",
          "The Meadows School (K–12)",
          "Faith Lutheran Middle & High",
          "Pinecrest Academy",
        ],
      },
    ],
    commutes: [
      { destination: "Downtown Las Vegas", distance: "12 mi", drive: "18 min", rush: "25–35 min" },
      { destination: "Las Vegas Strip", distance: "10 mi", drive: "15 min", rush: "25–40 min" },
      { destination: "Harry Reid Airport (LAS)", distance: "15 mi", drive: "20 min", rush: "30–45 min" },
      { destination: "Henderson", distance: "22 mi", drive: "28 min", rush: "40–55 min" },
      { destination: "Red Rock Canyon", distance: "5 mi", drive: "10 min", rush: "10–15 min" },
    ],
    faqs: [
      {
        question: "What is the current median home price in Summerlin?",
        answer:
          "As of January 2026, about $625,000 median, with luxury product in The Ridges and other guard-gated villages often above $2M.",
      },
      {
        question: "How long do homes stay on the market?",
        answer:
          "Recent averages near 22 days on market — faster than the broader Valley average near 28 days. Pricing strategy still drives outcomes.",
      },
      {
        question: "Who helps with Summerlin tours?",
        answer: `${agentInfo.name} plans the Irvine side; ${agentInfo.partnerAgent.name} covers Valley showings and offers. Call ${agentInfo.phoneFormatted}.`,
      },
    ],
    ctaTitle: "Tour Summerlin with a relocation plan",
    ctaBody: `Map sell/buy timing, then book Valley tours. Call ${agentInfo.phoneFormatted}.`,
    meta: {
      title: "Summerlin Homes for Sale | Irvine to Las Vegas | Dr. Gene Boyle",
      description:
        "Explore Summerlin real estate with Dr. Gene Boyle and partner Dr. Jan Duffy, BHHS Nevada Properties. Median ~$625K. Call (702) 222-1964.",
      keywords: [
        "Summerlin homes for sale",
        "Summerlin Las Vegas real estate",
        "Irvine to Summerlin relocation",
        "Dr Gene Boyle Summerlin",
      ],
    },
    geo: {
      latitude: 36.1672,
      longitude: -115.331,
      containedIn: "Las Vegas",
      description:
        "Master-planned community in Las Vegas with Red Rock Canyon views, parks, trails, and homes from mid-market to luxury estates.",
    },
  },

  henderson: {
    slug: "henderson",
    name: "Henderson",
    title: "Henderson homes —",
    accent: "Nevada’s second city",
    lede: `Green Valley, Inspirada, Anthem, and Lake Las Vegas inventory for relocators comparing square footage and commute. ${partnerLine}`,
    breadcrumbs: [...crumbs("Henderson", "henderson")],
    statsTitle: "Henderson market | January 2026",
    stats: [
      { value: "$485K", label: "Median price" },
      { value: "24", label: "Avg DOM" },
      { value: "1,280", label: "Active listings" },
      { value: "+5.1%", label: "YoY" },
    ],
    overviewTitle: "Henderson at a glance",
    overview: [
      "Henderson is Nevada’s second-largest city with a broad mix of single-family homes, townhomes, and golf-adjacent communities southeast of the Strip.",
      "Relocators often compare Green Valley’s mature streets, Inspirada’s newer plans, and Anthem / Lake Las Vegas for amenity packages and HOA costs.",
      "Airport and Henderson Executive Airport access, plus shopping at The District and Green Valley Ranch, keep daily logistics practical.",
    ],
    highlights: [
      {
        title: "Inventory breadth",
        body: "Wider price bands than west-side luxury villages — useful when comparing Orange County equity to Valley buying power.",
      },
      {
        title: "Golf & trails",
        body: "Multiple courses and trail networks; confirm HOA amenity fees against the floor plan you want.",
      },
      {
        title: "Commute options",
        body: "I-215 and surface arterials connect to the Strip, airport, and Summerlin — rush-hour buffers matter for planning.",
      },
      {
        title: "Nearby campuses",
        body: "Clark County School District and private options serve Henderson addresses — verify boundaries for your parcel.",
      },
    ],
    detailsTitle: "Areas inside Henderson",
    details: [
      {
        title: "Often toured",
        items: ["Green Valley", "Inspirada", "Anthem", "Lake Las Vegas", "MacDonald Highlands"],
      },
      {
        title: "Lifestyle filters",
        items: ["Golf communities", "Guard-gated enclaves", "Newer construction", "Mature landscaping"],
      },
      {
        title: "Daily amenities",
        items: ["The District at Green Valley Ranch", "Lake Mead recreation access", "Multiple medical campuses"],
      },
    ],
    commutes: [
      { destination: "Las Vegas Strip", distance: "13 mi", drive: "20 min", rush: "30–45 min" },
      { destination: "Harry Reid Airport (LAS)", distance: "8 mi", drive: "15 min", rush: "20–35 min" },
      { destination: "Downtown Las Vegas", distance: "16 mi", drive: "22 min", rush: "35–50 min" },
      { destination: "Summerlin", distance: "22 mi", drive: "28 min", rush: "40–55 min" },
    ],
    faqs: [
      {
        question: "How does Henderson pricing compare to Summerlin?",
        answer:
          "January 2026 medians: Henderson roughly $485K vs Summerlin ~$625K. Product mix and HOA amenities drive the gap more than city limits alone.",
      },
      {
        question: "Is Henderson good for California relocators?",
        answer:
          "Many Irvine movers compare tax, square footage, and commute. We map those numbers to specific streets — not general slogans.",
      },
      {
        question: "Who shows Henderson homes?",
        answer: `${agentInfo.partnerAgent.name} covers local tours; ${agentInfo.name} coordinates California-side timing. ${agentInfo.phoneFormatted}.`,
      },
    ],
    ctaTitle: "Build a Henderson shortlist",
    ctaBody: `Filter by price, square footage, and commute — then tour. Call ${agentInfo.phoneFormatted}.`,
    meta: {
      title: "Henderson Homes for Sale | Irvine Relocation | Dr. Gene Boyle",
      description:
        "Henderson Nevada real estate for Irvine relocators with Dr. Gene Boyle and Dr. Jan Duffy, BHHS Nevada Properties. Call (702) 222-1964.",
      keywords: ["Henderson homes for sale", "Henderson NV real estate", "Green Valley homes", "Irvine to Henderson"],
    },
    geo: {
      latitude: 36.0395,
      longitude: -114.9817,
      containedIn: "Clark County",
      description: "Henderson, Nevada residential communities including Green Valley, Inspirada, and Anthem.",
    },
  },

  "green-valley": {
    slug: "green-valley",
    name: "Green Valley",
    title: "Green Valley —",
    accent: "mature Henderson streets",
    lede: "Golf, The District retail, and mid-size single-family stock in Henderson for relocators who want established landscaping.",
    breadcrumbs: [...crumbs("Green Valley", "green-valley")],
    statsTitle: "Green Valley context | January 2026",
    stats: [
      { value: "$520K", label: "Median price" },
      { value: "26", label: "Avg DOM" },
      { value: "+4.8%", label: "YoY" },
      { value: "Henderson", label: "City" },
    ],
    overviewTitle: "Green Valley overview",
    overview: [
      "Green Valley is a long-developed Henderson community with mature trees, golf courses, and walkable retail at The District.",
      "Inventory skews to existing single-family homes and townhomes rather than brand-new tracts — useful when you want larger lots or finished landscaping.",
    ],
    highlights: [
      { title: "The District", body: "Shopping, dining, and events at Green Valley Ranch’s mixed-use core." },
      { title: "Golf access", body: "Multiple courses and practice facilities within short drives." },
      { title: "Trail network", body: "Walking paths connect parks and neighborhood centers." },
      { title: "Airport proximity", body: "Often shorter airport drives than far west Summerlin addresses." },
    ],
    faqs: [
      {
        question: "How does Green Valley differ from Inspirada?",
        answer:
          "Green Valley is more mature with established landscaping; Inspirada skews newer floor plans and resort-style amenity packages. Compare HOA fees and square footage side by side.",
      },
      {
        question: "Who can tour Green Valley?",
        answer: `Call ${agentInfo.phoneFormatted}. ${agentInfo.partnerAgent.name} handles Valley showings.`,
      },
    ],
    ctaTitle: "Tour Green Valley inventory",
    ctaBody: `Schedule a consult to align Irvine sale timing with Henderson tours. ${agentInfo.phoneFormatted}.`,
    meta: {
      title: "Green Valley Homes | Henderson NV | Dr. Gene Boyle",
      description:
        "Green Valley Henderson homes for Irvine-to-Las Vegas relocators. Call (702) 222-1964.",
      keywords: ["Green Valley Henderson homes", "Green Valley real estate", "Henderson NV"],
    },
    geo: {
      latitude: 36.035,
      longitude: -115.075,
      containedIn: "Henderson",
      description: "Green Valley community in Henderson, Nevada.",
    },
  },

  "the-ridges": {
    slug: "the-ridges",
    name: "The Ridges",
    title: "The Ridges —",
    accent: "guard-gated Summerlin luxury",
    lede: "Custom estates, golf, and elevated views inside Summerlin for higher-end relocators.",
    breadcrumbs: [...crumbs("The Ridges", "the-ridges")],
    statsTitle: "The Ridges context | January 2026",
    stats: [
      { value: "$2.5M", label: "Median price" },
      { value: "45+", label: "Avg DOM band" },
      { value: "Guard-gated", label: "Access" },
      { value: "Summerlin", label: "Master plan" },
    ],
    overviewTitle: "Luxury product in The Ridges",
    overview: [
      "The Ridges is a guard-gated Summerlin enclave known for custom and semi-custom estates, golf adjacency, and view lots.",
      "Expect longer marketing timelines than mid-market Summerlin villages and a heavier emphasis on lot position, finishes, and view corridors.",
    ],
    highlights: [
      { title: "Custom estates", body: "Architecture and finishes vary widely — comps must match lot and build quality." },
      { title: "Golf & views", body: "Bear’s Best adjacency and Strip or mountain view premiums show up in pricing." },
      { title: "Privacy", body: "Guard-gated access and larger lots versus typical Summerlin tracts." },
      { title: "Partner coverage", body: `${agentInfo.partnerAgent.name} coordinates showings and offer strategy on the ground.` },
    ],
    faqs: [
      {
        question: "Is The Ridges only new custom?",
        answer:
          "Mix of custom and resale luxury. Condition, lot, and view drive price more than year built alone.",
      },
      {
        question: "How do I start a Ridges search?",
        answer: `Call ${agentInfo.phoneFormatted} or book Calendly. We set price band, lot preferences, and tour windows.`,
      },
    ],
    ctaTitle: "Start a Ridges search",
    ctaBody: `Higher-end inventory needs a tighter filter set. Call ${agentInfo.phoneFormatted}.`,
    meta: {
      title: "The Ridges Luxury Homes | Summerlin | Dr. Gene Boyle",
      description:
        "The Ridges Summerlin luxury homes with Dr. Gene Boyle and Dr. Jan Duffy. Call (702) 222-1964.",
      keywords: ["The Ridges Summerlin", "luxury homes Las Vegas", "guard-gated Summerlin"],
    },
    geo: {
      latitude: 36.145,
      longitude: -115.345,
      containedIn: "Summerlin",
      description: "The Ridges guard-gated luxury community in Summerlin, Las Vegas.",
    },
  },

  "southern-highlands": {
    slug: "southern-highlands",
    name: "Southern Highlands",
    title: "Southern Highlands —",
    accent: "golf and mountain views",
    lede: "Master-planned south Valley community with championship golf and a higher median price band.",
    breadcrumbs: [...crumbs("Southern Highlands", "southern-highlands")],
    statsTitle: "Southern Highlands | January 2026",
    stats: [
      { value: "$750K", label: "Median price" },
      { value: "32", label: "Avg DOM" },
      { value: "+7.2%", label: "YoY" },
      { value: "Golf", label: "Amenity focus" },
    ],
    overviewTitle: "Southern Highlands overview",
    overview: [
      "Southern Highlands sits in the southern Las Vegas Valley with guard-gated pockets, golf, and mountain views.",
      "Relocators often compare it to Summerlin for amenity level at a different commute geometry to the airport and Strip.",
    ],
    highlights: [
      { title: "Championship golf", body: "Golf is a primary amenity filter — confirm membership/HOA structures." },
      { title: "Guard-gated options", body: "Multiple enclaves with controlled access and larger lots." },
      { title: "Mountain views", body: "View premiums vary by street — tour in person when possible." },
      { title: "South Valley access", body: "Different commute profile than west-side Summerlin." },
    ],
    faqs: [
      {
        question: "How does Southern Highlands compare to Summerlin?",
        answer:
          "Both offer planned amenities and higher price bands. Compare commute, HOA, golf access, and specific comps rather than community brand alone.",
      },
    ],
    ctaTitle: "Tour Southern Highlands",
    ctaBody: `Call ${agentInfo.phoneFormatted} to align price band and tour dates.`,
    meta: {
      title: "Southern Highlands Homes | Las Vegas | Dr. Gene Boyle",
      description: "Southern Highlands Las Vegas homes for relocators. Call (702) 222-1964.",
      keywords: ["Southern Highlands homes", "Southern Highlands Las Vegas"],
    },
    geo: {
      latitude: 35.98,
      longitude: -115.2,
      containedIn: "Las Vegas",
      description: "Southern Highlands master-planned community in Las Vegas.",
    },
  },

  "north-las-vegas": {
    slug: "north-las-vegas",
    name: "North Las Vegas",
    title: "North Las Vegas —",
    accent: "newer construction corridors",
    lede: "Lower median price points and newer tracts for relocators prioritizing square footage per dollar.",
    breadcrumbs: [...crumbs("North Las Vegas", "north-las-vegas")],
    statsTitle: "North Las Vegas | January 2026",
    stats: [
      { value: "$385K", label: "Median price" },
      { value: "18", label: "Avg DOM" },
      { value: "+3.2%", label: "YoY" },
      { value: "New builds", label: "Common filter" },
    ],
    overviewTitle: "North Las Vegas overview",
    overview: [
      "North Las Vegas has seen substantial new construction with modern floor plans and growing retail infrastructure.",
      "Useful when California equity needs to stretch toward larger square footage or single-story layouts.",
    ],
    highlights: [
      { title: "New construction", body: "Builder inventory and incentives change — we verify current phases." },
      { title: "Price entry", body: "Lower median than Summerlin/Henderson core — confirm HOA and tax details." },
      { title: "Growth corridors", body: "Infrastructure and retail continue to expand; tour traffic patterns at commute hours." },
      { title: "Skye Canyon adjacency", body: "Often compared with Skye Canyon for northwest master-planned living." },
    ],
    faqs: [
      {
        question: "Is North Las Vegas only new builds?",
        answer:
          "No — mix of new and resale. New construction is a common filter but not the only inventory.",
      },
    ],
    ctaTitle: "Compare North Las Vegas options",
    ctaBody: `Call ${agentInfo.phoneFormatted} to set square-footage and budget filters.`,
    meta: {
      title: "North Las Vegas Homes | Dr. Gene Boyle",
      description: "North Las Vegas homes and new construction for relocators. Call (702) 222-1964.",
      keywords: ["North Las Vegas homes", "North Las Vegas new construction"],
    },
    geo: {
      latitude: 36.1989,
      longitude: -115.1175,
      containedIn: "Clark County",
      description: "North Las Vegas residential communities and new construction.",
    },
  },

  "skye-canyon": {
    slug: "skye-canyon",
    name: "Skye Canyon",
    title: "Skye Canyon —",
    accent: "northwest master plan",
    lede: "Newer master-planned community with modern floor plans and mountain-access recreation nearby.",
    breadcrumbs: [...crumbs("Skye Canyon", "skye-canyon")],
    statsTitle: "Skye Canyon | January 2026",
    stats: [
      { value: "$550K", label: "Median price" },
      { value: "20", label: "Avg DOM" },
      { value: "+5.5%", label: "YoY" },
      { value: "NW LV", label: "Location" },
    ],
    overviewTitle: "Skye Canyon overview",
    overview: [
      "Skye Canyon is a newer northwest Las Vegas master plan with parks, trails, and contemporary floor plans.",
      "Often compared with Centennial Hills and North Las Vegas new construction for relocators wanting modern layouts.",
    ],
    highlights: [
      { title: "Modern plans", body: "Open concepts and newer systems versus 1990s product." },
      { title: "Recreation", body: "Parks and trail amenities inside the plan; mountain access nearby." },
      { title: "Builder mix", body: "Multiple builders — compare warranties, lots, and elevation premiums." },
      { title: "Commute check", body: "Northwest location — verify drive times to your workplace or airport pattern." },
    ],
    faqs: [
      {
        question: "Is Skye Canyon finished building out?",
        answer:
          "Phases continue to release. Ask for current inventory versus resale when you tour.",
      },
    ],
    ctaTitle: "Tour Skye Canyon",
    ctaBody: `Book a consult at ${agentInfo.phoneFormatted}.`,
    meta: {
      title: "Skye Canyon Homes | Las Vegas | Dr. Gene Boyle",
      description: "Skye Canyon Las Vegas homes for Irvine relocators. Call (702) 222-1964.",
      keywords: ["Skye Canyon homes", "Skye Canyon Las Vegas"],
    },
    geo: {
      latitude: 36.28,
      longitude: -115.32,
      containedIn: "Las Vegas",
      description: "Skye Canyon master-planned community in northwest Las Vegas.",
    },
  },

  "centennial-hills": {
    slug: "centennial-hills",
    name: "Centennial Hills",
    title: "Centennial Hills —",
    accent: "northwest parks and retail",
    lede: "Northwest Las Vegas community with mountain proximity, parks, and shopping corridors.",
    breadcrumbs: [...crumbs("Centennial Hills", "centennial-hills")],
    statsTitle: "Centennial Hills | January 2026",
    stats: [
      { value: "$495K", label: "Median price" },
      { value: "23", label: "Avg DOM" },
      { value: "+4.5%", label: "YoY" },
      { value: "NW LV", label: "Location" },
    ],
    overviewTitle: "Centennial Hills overview",
    overview: [
      "Centennial Hills offers a mix of single-family homes near parks, medical, and retail on the northwest side.",
      "Often paired with Skye Canyon tours when relocators want northwest options without committing to one master plan.",
    ],
    highlights: [
      { title: "Mountain proximity", body: "Access toward recreational areas north and west of the Valley." },
      { title: "Retail corridors", body: "Everyday shopping and services along major arterials." },
      { title: "Housing mix", body: "Resale and newer product across several price bands." },
      { title: "Medical access", body: "Multiple clinics and hospital options on the northwest side." },
    ],
    faqs: [
      {
        question: "Centennial Hills vs Skye Canyon?",
        answer:
          "Skye Canyon is a newer branded master plan; Centennial Hills is a broader northwest area with mixed product. Tour both if northwest is your target.",
      },
    ],
    ctaTitle: "Shortlist Centennial Hills",
    ctaBody: `Call ${agentInfo.phoneFormatted} to set filters and tour windows.`,
    meta: {
      title: "Centennial Hills Homes | Las Vegas | Dr. Gene Boyle",
      description: "Centennial Hills Las Vegas homes. Call (702) 222-1964.",
      keywords: ["Centennial Hills homes", "Centennial Hills Las Vegas"],
    },
    geo: {
      latitude: 36.27,
      longitude: -115.28,
      containedIn: "Las Vegas",
      description: "Centennial Hills community in northwest Las Vegas.",
    },
  },

  inspirada: {
    slug: "inspirada",
    name: "Inspirada",
    title: "Inspirada —",
    accent: "Henderson resort-style plan",
    lede: "Henderson master-planned community with resort pools, trails, and newer construction.",
    breadcrumbs: [...crumbs("Inspirada", "inspirada")],
    statsTitle: "Inspirada | January 2026",
    stats: [
      { value: "$525K", label: "Median price" },
      { value: "21", label: "Avg DOM" },
      { value: "+5.0%", label: "YoY" },
      { value: "Henderson", label: "City" },
    ],
    overviewTitle: "Inspirada overview",
    overview: [
      "Inspirada is a Henderson master plan known for resort-style amenity centers, trails, and relatively new housing stock.",
      "Compare HOA amenity fees against Green Valley resale when deciding between newer finishes and mature lots.",
    ],
    highlights: [
      { title: "Resort amenities", body: "Pools and community centers are a primary draw — confirm fee schedules." },
      { title: "Trails", body: "Walking paths woven through villages." },
      { title: "Newer construction", body: "Modern elevations and systems versus older Henderson product." },
      { title: "Henderson services", body: "City services and south-Valley commute geometry." },
    ],
    faqs: [
      {
        question: "Are HOA fees higher in Inspirada?",
        answer:
          "Amenity-rich plans often carry higher HOAs than basic maintenance districts. We review documents before you offer.",
      },
    ],
    ctaTitle: "Tour Inspirada",
    ctaBody: `Call ${agentInfo.phoneFormatted}.`,
    meta: {
      title: "Inspirada Homes | Henderson | Dr. Gene Boyle",
      description: "Inspirada Henderson homes for relocators. Call (702) 222-1964.",
      keywords: ["Inspirada homes", "Inspirada Henderson"],
    },
    geo: {
      latitude: 35.96,
      longitude: -115.12,
      containedIn: "Henderson",
      description: "Inspirada master-planned community in Henderson, Nevada.",
    },
  },

  "mountains-edge": {
    slug: "mountains-edge",
    name: "Mountains Edge",
    title: "Mountains Edge —",
    accent: "southwest Valley living",
    lede: "Southwest Las Vegas community with mountain backdrop and a mix of single-family inventory.",
    breadcrumbs: [...crumbs("Mountains Edge", "mountains-edge")],
    statsTitle: "Mountains Edge | January 2026",
    stats: [
      { value: "$465K", label: "Median price" },
      { value: "25", label: "Avg DOM" },
      { value: "+4.0%", label: "YoY" },
      { value: "SW LV", label: "Location" },
    ],
    overviewTitle: "Mountains Edge overview",
    overview: [
      "Mountains Edge sits in the southwest Valley with mountain views and a range of single-family homes.",
      "Often compared with Southern Highlands for south/southwest geography at different price bands.",
    ],
    highlights: [
      { title: "Mountain backdrop", body: "Views and outdoor access shape lot premiums." },
      { title: "Housing mix", body: "Resale inventory across several builders and eras." },
      { title: "Southwest access", body: "Different Strip/airport geometry than Summerlin." },
      { title: "Value comparison", body: "Often used when relocators want more square footage per dollar than west-side luxury villages." },
    ],
    faqs: [
      {
        question: "Mountains Edge vs Southern Highlands?",
        answer:
          "Southern Highlands skews higher amenity/golf positioning and median price. Mountains Edge is often a broader value band — tour both if southwest is preferred.",
      },
    ],
    ctaTitle: "Explore Mountains Edge",
    ctaBody: `Call ${agentInfo.phoneFormatted} to plan tours.`,
    meta: {
      title: "Mountains Edge Homes | Las Vegas | Dr. Gene Boyle",
      description: "Mountains Edge Las Vegas homes. Call (702) 222-1964.",
      keywords: ["Mountains Edge homes", "Mountains Edge Las Vegas"],
    },
    geo: {
      latitude: 36.0,
      longitude: -115.27,
      containedIn: "Las Vegas",
      description: "Mountains Edge community in southwest Las Vegas.",
    },
  },
};

export const neighborhoodGuideList = Object.values(neighborhoodGuides);
