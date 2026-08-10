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
    title: "Summerlin Homes —",
    accent: "villages, amenities, and August 2026 data",
    lede: `Compare village, price band, square feet, amenities, and commute — not subjective labels. Planning with ${agentInfo.name}; ${partnerLine}`,
    breadcrumbs: [...crumbs("Summerlin", "summerlin")],
    statsTitle: "Summerlin market | June 2026 sold snapshot",
    stats: [
      { value: "$537.5K", label: "Median sold (Jun)" },
      { value: "35", label: "Median DOM" },
      { value: "1,465", label: "Active SF" },
      { value: "4.5", label: "Months supply" },
    ],
    overviewTitle: "What does Summerlin cost right now?",
    overview: [
      "June 2026 Summerlin snapshot: about $537,500 median sold price, 1,465 active single-family listings, roughly 4.5 months of supply, 35 median days, and about $327 per square foot.",
      "An August update for all five villages shows about 1,240 active listings at a $686,000 median list price — a separate list-price series, not the June sold median. Label period and definition before you decide.",
      "Summerlin spans roughly 22,500 acres on the western rim with villages from condos through custom estates, 150+ parks, trail miles, golf, and Downtown Summerlin retail. Strip commute is often 15–25 minutes outside peak traffic.",
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
          "June 2026 sold snapshot: about $537,500 median. An August village panel shows a higher median list price (~$686,000) — sold and list are different series. Luxury product in The Ridges and other guard-gated villages often runs well above the median.",
      },
      {
        question: "How much inventory is available in Summerlin?",
        answer:
          "June snapshot: about 1,465 active single-family listings and roughly 4.5 months of supply. August village panel: about 1,240 active listings across five villages. We confirm live MLS before you tour.",
      },
      {
        question: "Who helps with Summerlin tours?",
        answer: `${agentInfo.name} plans the Irvine side; ${agentInfo.partnerAgent.name} covers Valley showings and offers. Call ${agentInfo.phoneFormatted}.`,
      },
    ],
    ctaTitle: "See Summerlin homes by village",
    ctaBody: `Map sell/buy timing, then book Valley tours. Call ${agentInfo.phoneFormatted}.`,
    meta: {
      title: "Summerlin Homes for Sale | Irvine to Las Vegas | Dr. Gene Boyle",
      description:
        "Summerlin homes, villages, and June–August 2026 market data with Dr. Gene Boyle and partner Dr. Jan Duffy. Call (702) 222-1964.",
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
    title: "Henderson Homes —",
    accent: "price, commute, and amenities",
    lede: `Compare Green Valley, Inspirada, Anthem, and Lake Las Vegas by square footage, commute, HOA, and price — with source-labeled market panels. ${partnerLine}`,
    breadcrumbs: [...crumbs("Henderson", "henderson")],
    statsTitle: "Henderson market | 2026 local report (labeled)",
    stats: [
      { value: "$540K", label: "Local SF median" },
      { value: "35", label: "Local DOM" },
      { value: "2.3", label: "Months supply" },
      { value: "$490K", label: "Redfin trail. median" },
    ],
    overviewTitle: "What is the current Henderson housing market?",
    overview: [
      "Henderson needs a source-labeled panel because datasets differ by period. A local 2026 report states about a $540,000 single-family median, roughly 2.3 months of supply, and 35 days on market.",
      "Redfin’s trailing three months ending May 2026 report about $490,000 and 57 days. Show both only when clearly labeled — then compare price, size, commute, and amenities for the homes you will actually tour.",
      "Henderson mixes single-family, townhomes, and golf-adjacent communities southeast of the Strip. Relocators often shortlist Green Valley, Inspirada, Anthem, and Lake Las Vegas for floor plans and HOA amenity packages.",
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
          "Labeled 2026 snapshots: Henderson local report ~$540K SF median; Summerlin June sold median ~$537.5K with a separate August list-price panel higher. Product mix, village, and HOA amenities drive gaps more than city limits alone — we pull live comps for your shortlist.",
      },
      {
        question: "How much time do buyers have to compare homes?",
        answer:
          "Local Henderson reporting near 35 days and Redfin’s trailing period near 57 days both point to more comparison time than peak years — still property-specific. Confirm with current MLS before you write.",
      },
      {
        question: "Who shows Henderson homes?",
        answer: `${agentInfo.partnerAgent.name} covers local tours; ${agentInfo.name} coordinates California-side timing. ${agentInfo.phoneFormatted}.`,
      },
    ],
    ctaTitle: "Compare Henderson homes",
    ctaBody: `Filter by price, square footage, and commute — then tour. Call ${agentInfo.phoneFormatted}.`,
    meta: {
      title: "Henderson Homes for Sale | Irvine Relocation | Dr. Gene Boyle",
      description:
        "Henderson homes by price, commute, and amenities with dated 2026 market panels. Dr. Gene Boyle and Dr. Jan Duffy. Call (702) 222-1964.",
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
    title: "Green Valley Homes —",
    accent: "amenities, commute, and market data",
    lede: "July 2026 single-family report plus live listings — compare size, price band, and commute without inventing inventory figures the source did not publish.",
    breadcrumbs: [...crumbs("Green Valley", "green-valley")],
    statsTitle: "Green Valley | July 2026 single-family report",
    stats: [
      { value: "$596K", label: "Median sold" },
      { value: "28", label: "Median DOM" },
      { value: "+3.2%", label: "YoY" },
      { value: "61", label: "Homes sold" },
    ],
    overviewTitle: "What is the Green Valley median price?",
    overview: [
      "Green Valley’s July 2026 single-family report shows a $596,000 median sold price, up 3.2% year over year, 28 median days on market, and 61 homes sold.",
      "That source does not state active inventory or months of supply — this page does not invent them. We layer live MLS listings for current selection.",
      "Green Valley is a long-developed Henderson community with mature landscaping, golf, and The District retail. Compare Green Valley Ranch and nearby Inspirada using the same property type and period definitions.",
    ],
    highlights: [
      { title: "The District", body: "Shopping, dining, and events at Green Valley Ranch’s mixed-use core." },
      { title: "Golf access", body: "Multiple courses and practice facilities within short drives." },
      { title: "Trail network", body: "Walking paths connect parks and neighborhood centers." },
      { title: "Airport proximity", body: "Often shorter airport drives than far west Summerlin addresses." },
    ],
    faqs: [
      {
        question: "How does Green Valley differ from Green Valley Ranch?",
        answer:
          "Green Valley is the broader mature Henderson area; Green Valley Ranch refers to the resort/casino and adjacent mixed-use District. Compare specific streets, HOA docs, and square footage rather than the brand name alone.",
      },
      {
        question: "Who can tour Green Valley?",
        answer: `Call ${agentInfo.phoneFormatted}. ${agentInfo.partnerAgent.name} handles Valley showings.`,
      },
    ],
    ctaTitle: "See Green Valley homes",
    ctaBody: `Schedule a consult to align Irvine sale timing with Henderson tours. ${agentInfo.phoneFormatted}.`,
    meta: {
      title: "Green Valley Homes | Henderson NV | Dr. Gene Boyle",
      description:
        "Green Valley Henderson homes with July 2026 market data for Irvine-to-Las Vegas relocators. Call (702) 222-1964.",
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
    statsTitle: "The Ridges context | confirm medians on MLS",
    stats: [
      { value: "UNKNOWN", label: "Median — confirm MLS" },
      { value: "Guard-gated", label: "Access" },
      { value: "Custom/estate", label: "Typical product" },
      { value: "Summerlin", label: "Master plan" },
    ],
    overviewTitle: "What should luxury buyers compare in The Ridges?",
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
    statsTitle: "Southern Highlands | confirm medians on MLS",
    stats: [
      { value: "UNKNOWN", label: "Median — confirm MLS" },
      { value: "Golf", label: "Amenity focus" },
      { value: "South Valley", label: "Commute geometry" },
      { value: "Guard-gated options", label: "Access mix" },
    ],
    overviewTitle: "How does Southern Highlands compare for relocators?",
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
    statsTitle: "North Las Vegas | confirm medians on MLS",
    stats: [
      { value: "UNKNOWN", label: "Median — confirm MLS" },
      { value: "Newer tracts", label: "Inventory mix" },
      { value: "I-215 / US-95", label: "Commute corridors" },
      { value: "Value band", label: "Typical relocator filter" },
    ],
    overviewTitle: "What should relocators compare in North Las Vegas?",
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
    statsTitle: "Skye Canyon | confirm medians on MLS",
    stats: [
      { value: "UNKNOWN", label: "Median — confirm MLS" },
      { value: "Master-planned", label: "Community type" },
      { value: "NW Valley", label: "Location" },
      { value: "Parks / trails", label: "Amenity focus" },
    ],
    overviewTitle: "What defines Skye Canyon for California relocators?",
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
    statsTitle: "Centennial Hills | confirm medians on MLS",
    stats: [
      { value: "UNKNOWN", label: "Median — confirm MLS" },
      { value: "NW Valley", label: "Location" },
      { value: "Larger lots", label: "Common filter" },
      { value: "Retail corridors", label: "Daily needs" },
    ],
    overviewTitle: "What should buyers compare in Centennial Hills?",
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
    statsTitle: "Inspirada | confirm medians on MLS",
    stats: [
      { value: "UNKNOWN", label: "Median — confirm MLS" },
      { value: "Henderson", label: "City" },
      { value: "Newer product", label: "Inventory mix" },
      { value: "Town center", label: "Amenity focus" },
    ],
    overviewTitle: "What makes Inspirada different for relocators?",
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
    statsTitle: "Mountains Edge | confirm medians on MLS",
    stats: [
      { value: "UNKNOWN", label: "Median — confirm MLS" },
      { value: "SW Valley", label: "Location" },
      { value: "Master-planned", label: "Community type" },
      { value: "Mountain proximity", label: "Setting" },
    ],
    overviewTitle: "What should relocators know about Mountains Edge?",
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
