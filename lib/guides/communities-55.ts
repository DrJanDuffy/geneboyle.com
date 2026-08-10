import type { AreaGuide } from "@/lib/guides/types";
import { agentInfo } from "@/lib/site-config";

function crumbs(name: string) {
  return [
    { label: "Home", href: "/" },
    { label: "55+ Communities", href: "/55-plus-communities" },
    { label: name },
  ] as const;
}

const baseCta = `Call ${agentInfo.phoneFormatted}. Partner ${agentInfo.partnerAgent.name} covers Valley tours.`;

export const community55Guides: Record<string, AreaGuide> = {
  "sun-city-summerlin": {
    slug: "sun-city-summerlin",
    name: "Sun City Summerlin",
    title: "Sun City Summerlin —",
    accent: "active adult west Valley",
    lede: `Del Webb active-adult community in Summerlin with golf, recreation centers, and single-story inventory. ${baseCta}`,
    breadcrumbs: [...crumbs("Sun City Summerlin")],
    statsTitle: "Community snapshot",
    stats: [
      { value: "55+", label: "Age-qualified" },
      { value: "Golf", label: "On-site" },
      { value: "Summerlin", label: "Location" },
      { value: "Resale", label: "Primary inventory" },
    ],
    overviewTitle: "What age rules and amenities define Sun City Summerlin?",
    overview: [
      "Sun City Summerlin is a large Del Webb active-adult community on the west side with multiple recreation centers and golf.",
      "Inventory is primarily resale single-story homes — useful for relocators prioritizing single-level living and HOA amenity packages.",
    ],
    highlights: [
      { title: "Recreation centers", body: "Multiple clubhouses and activity programming typical of Del Webb plans." },
      { title: "Golf", body: "On-site golf is a primary amenity filter — confirm membership structures." },
      { title: "Single-story stock", body: "Many homes are single-level; verify floor plans when touring." },
      { title: "Summerlin access", body: "West Valley location near Red Rock and Downtown Summerlin retail." },
    ],
    faqs: [
      {
        question: "What does 55+ mean here?",
        answer:
          "At least one occupant typically must meet the community’s age qualification (commonly 55+). Review HOA documents for current rules before offering.",
      },
      {
        question: "Can under-55 buyers purchase?",
        answer:
          "Rules vary and often restrict permanent occupancy. We review governing documents with you — do not assume exceptions.",
      },

      {
        question: "How do I compare HOA fees without guessing?",
        answer:
          "Request current HOA documents and a fee schedule for the specific address. Amenity packages and special assessments vary by village — do not rely on a community-wide average.",
      },
    ],
    ctaTitle: "Tour Sun City Summerlin",
    ctaBody: baseCta,
    meta: {
      title: "Sun City Summerlin Homes | 55+ | Dr. Gene Boyle",
      description:
        "Sun City Summerlin active-adult homes for relocators. Call (702) 222-1964.",
      keywords: ["Sun City Summerlin", "55+ Summerlin", "Del Webb Las Vegas"],
    },
  },
  "trilogy-summerlin": {
    slug: "trilogy-summerlin",
    name: "Trilogy at Summerlin",
    title: "Trilogy at Summerlin —",
    accent: "Shea active adult",
    lede: `Shea Homes active-adult community with resort-style amenities in the Summerlin area. ${baseCta}`,
    breadcrumbs: [...crumbs("Trilogy at Summerlin")],
    statsTitle: "Community snapshot",
    stats: [
      { value: "55+", label: "Age-qualified" },
      { value: "Shea", label: "Builder" },
      { value: "Resort", label: "Amenity style" },
      { value: "Summerlin", label: "Area" },
    ],
    overviewTitle: "How does Trilogy at Summerlin compare with Sun City?",
    overview: [
      "Trilogy at Summerlin emphasizes resort-style amenities and newer active-adult floor plans compared with older Del Webb resale product.",
      "Compare HOA fees, lock-and-leave suitability, and square footage against Sun City Summerlin when both are on your shortlist.",
    ],
    highlights: [
      { title: "Resort amenities", body: "Pools, fitness, and social programming are central to the offer." },
      { title: "Newer plans", body: "Contemporary layouts versus older active-adult stock." },
      { title: "Location", body: "West Valley — verify commute and airport patterns for your schedule." },
      { title: "HOA review", body: "Amenity-rich communities need a careful fee and rule review before offer." },
    ],
    faqs: [
      {
        question: "Trilogy vs Sun City Summerlin?",
        answer:
          "Trilogy often skews newer/resort-styled; Sun City is larger and more resale-heavy. Tour both if 55+ west Valley is the target.",
      },

      {
        question: "How do I compare HOA fees without guessing?",
        answer:
          "Request current HOA documents and a fee schedule for the specific address. Amenity packages and special assessments vary by village — do not rely on a community-wide average.",
      },
    ],
    ctaTitle: "Tour Trilogy at Summerlin",
    ctaBody: baseCta,
    meta: {
      title: "Trilogy at Summerlin | 55+ Homes | Dr. Gene Boyle",
      description: "Trilogy at Summerlin active-adult homes. Call (702) 222-1964.",
      keywords: ["Trilogy Summerlin", "Shea 55+ Las Vegas"],
    },
  },
  "sun-city-anthem": {
    slug: "sun-city-anthem",
    name: "Sun City Anthem",
    title: "Sun City Anthem —",
    accent: "Henderson active adult",
    lede: `Large Del Webb community in Henderson’s Anthem area with golf and recreation. ${baseCta}`,
    breadcrumbs: [...crumbs("Sun City Anthem")],
    statsTitle: "Community snapshot",
    stats: [
      { value: "55+", label: "Age-qualified" },
      { value: "Henderson", label: "City" },
      { value: "Golf", label: "On-site" },
      { value: "Del Webb", label: "Brand" },
    ],
    overviewTitle: "What should relocators compare at Sun City Anthem?",
    overview: [
      "Sun City Anthem is a major active-adult community in Henderson with golf, recreation centers, and extensive resale inventory.",
      "Often compared with Solera and Del Webb Lake Las Vegas for south-Valley 55+ options.",
    ],
    highlights: [
      { title: "Scale", body: "Large community with multiple amenity nodes." },
      { title: "Henderson location", body: "South-Valley commute geometry versus Summerlin 55+." },
      { title: "Golf & rec", body: "Confirm which amenities are included vs membership." },
      { title: "Resale market", body: "Wide condition and upgrade range — comps must match finishes." },
    ],
    faqs: [
      {
        question: "Is Sun City Anthem only single-story?",
        answer:
          "Many homes are single-story, but verify the specific floor plan. Do not assume every listing is single-level.",
      },

      {
        question: "How do I compare HOA fees without guessing?",
        answer:
          "Request current HOA documents and a fee schedule for the specific address. Amenity packages and special assessments vary by village — do not rely on a community-wide average.",
      },
    ],
    ctaTitle: "Tour Sun City Anthem",
    ctaBody: baseCta,
    meta: {
      title: "Sun City Anthem Homes | Henderson 55+ | Dr. Gene Boyle",
      description: "Sun City Anthem Henderson active-adult homes. Call (702) 222-1964.",
      keywords: ["Sun City Anthem", "55+ Henderson", "Del Webb Anthem"],
    },
  },
  "sun-city-aliante": {
    slug: "sun-city-aliante",
    name: "Sun City Aliante",
    title: "Sun City Aliante —",
    accent: "north Valley active adult",
    lede: `Del Webb active-adult community in North Las Vegas near Aliante. ${baseCta}`,
    breadcrumbs: [...crumbs("Sun City Aliante")],
    statsTitle: "Community snapshot",
    stats: [
      { value: "55+", label: "Age-qualified" },
      { value: "N. Las Vegas", label: "City" },
      { value: "Del Webb", label: "Brand" },
      { value: "Resale", label: "Inventory" },
    ],
    overviewTitle: "What defines Sun City Aliante for 55+ buyers?",
    overview: [
      "Sun City Aliante offers active-adult living in North Las Vegas with recreation amenities and generally lower price bands than Summerlin 55+ product.",
      "Compare airport and Strip drive times if you travel frequently.",
    ],
    highlights: [
      { title: "Value band", body: "Often lower entry than west-side 55+ communities." },
      { title: "Recreation", body: "Clubhouse and activity programming typical of Del Webb." },
      { title: "North Valley", body: "Different commute profile — tour at your usual travel hours." },
      { title: "Resale focus", body: "Condition varies; inspections matter." },
    ],
    faqs: [
      {
        question: "How does Aliante compare to Summerlin 55+?",
        answer:
          "Location and price band differ most. Match amenities and commute to your routine rather than brand name alone.",
      },

      {
        question: "How do I compare HOA fees without guessing?",
        answer:
          "Request current HOA documents and a fee schedule for the specific address. Amenity packages and special assessments vary by village — do not rely on a community-wide average.",
      },
    ],
    ctaTitle: "Tour Sun City Aliante",
    ctaBody: baseCta,
    meta: {
      title: "Sun City Aliante | 55+ Homes | Dr. Gene Boyle",
      description: "Sun City Aliante active-adult homes. Call (702) 222-1964.",
      keywords: ["Sun City Aliante", "55+ North Las Vegas"],
    },
  },
  "solera-anthem": {
    slug: "solera-anthem",
    name: "Solera at Anthem",
    title: "Solera at Anthem —",
    accent: "Henderson 55+",
    lede: `Active-adult community in the Anthem area of Henderson. ${baseCta}`,
    breadcrumbs: [...crumbs("Solera at Anthem")],
    statsTitle: "Community snapshot",
    stats: [
      { value: "55+", label: "Age-qualified" },
      { value: "Henderson", label: "City" },
      { value: "Anthem", label: "Area" },
      { value: "Resale", label: "Inventory" },
    ],
    overviewTitle: "What should buyers know about Solera at Anthem?",
    overview: [
      "Solera at Anthem is an active-adult community often compared with Sun City Anthem for Henderson 55+ living at a different amenity and price mix.",
    ],
    highlights: [
      { title: "Henderson Anthem area", body: "South-Valley location near other Anthem communities." },
      { title: "Amenity package", body: "Review HOA documents for pools, fitness, and age rules." },
      { title: "Home styles", body: "Confirm single-story availability for your must-have list." },
      { title: "Comparables", body: "We price against nearby 55+ comps, not Valley averages alone." },
    ],
    faqs: [
      {
        question: "Solera vs Sun City Anthem?",
        answer:
          "Different amenity scale and inventory mix. Tour both if Henderson 55+ is the target.",
      },

      {
        question: "How do I compare HOA fees without guessing?",
        answer:
          "Request current HOA documents and a fee schedule for the specific address. Amenity packages and special assessments vary by village — do not rely on a community-wide average.",
      },
    ],
    ctaTitle: "Tour Solera at Anthem",
    ctaBody: baseCta,
    meta: {
      title: "Solera at Anthem | 55+ Henderson | Dr. Gene Boyle",
      description: "Solera at Anthem active-adult homes. Call (702) 222-1964.",
      keywords: ["Solera Anthem", "55+ Henderson"],
    },
  },
  "del-webb-lake-las-vegas": {
    slug: "del-webb-lake-las-vegas",
    name: "Del Webb at Lake Las Vegas",
    title: "Del Webb Lake Las Vegas —",
    accent: "lake-adjacent active adult",
    lede: `Active-adult living near Lake Las Vegas in Henderson. ${baseCta}`,
    breadcrumbs: [...crumbs("Del Webb Lake Las Vegas")],
    statsTitle: "Community snapshot",
    stats: [
      { value: "55+", label: "Age-qualified" },
      { value: "Lake LV", label: "Area" },
      { value: "Henderson", label: "City" },
      { value: "Del Webb", label: "Brand" },
    ],
    overviewTitle: "What should 55+ buyers compare at Del Webb at Lake Las Vegas?",
    overview: [
      "This Del Webb community sits near Lake Las Vegas with active-adult amenities and a distinct setting from west-side Summerlin 55+ options.",
    ],
    highlights: [
      { title: "Lake setting", body: "Proximity to Lake Las Vegas recreation and retail." },
      { title: "Active-adult amenities", body: "Club and activity programming — confirm fees." },
      { title: "Henderson logistics", body: "South-Valley airport access is often convenient." },
      { title: "Inventory", body: "Resale condition varies; tour interiors before offering." },
    ],
    faqs: [
      {
        question: "Is this inside the Lake Las Vegas gates?",
        answer:
          "Access and gate rules depend on the specific parcel and association. We verify before showings.",
      },

      {
        question: "How do I compare HOA fees without guessing?",
        answer:
          "Request current HOA documents and a fee schedule for the specific address. Amenity packages and special assessments vary by village — do not rely on a community-wide average.",
      },
    ],
    ctaTitle: "Tour Del Webb Lake Las Vegas",
    ctaBody: baseCta,
    meta: {
      title: "Del Webb Lake Las Vegas | 55+ | Dr. Gene Boyle",
      description: "Del Webb at Lake Las Vegas active-adult homes. Call (702) 222-1964.",
      keywords: ["Del Webb Lake Las Vegas", "55+ Lake Las Vegas"],
    },
  },
  "heritage-stonebridge": {
    slug: "heritage-stonebridge",
    name: "Heritage at Stonebridge",
    title: "Heritage at Stonebridge —",
    accent: "newer 55+ option",
    lede: `Newer active-adult community option for relocators comparing modern floor plans. ${baseCta}`,
    breadcrumbs: [...crumbs("Heritage at Stonebridge")],
    statsTitle: "Community snapshot",
    stats: [
      { value: "55+", label: "Age-qualified" },
      { value: "Newer", label: "Product mix" },
      { value: "Valley", label: "Location" },
      { value: "HOA", label: "Amenity review" },
    ],
    overviewTitle: "What should relocators compare at Heritage Stonebridge?",
    overview: [
      "Heritage at Stonebridge is part of the Valley’s newer active-adult inventory set. Compare amenities, fees, and drive times against Sun City and Trilogy options.",
    ],
    highlights: [
      { title: "Newer plans", body: "Contemporary layouts and systems." },
      { title: "Amenity check", body: "Resort features vary — document review before offer." },
      { title: "Relocator fit", body: "Useful when single-story and lock-and-leave matter." },
      { title: "Compare loop", body: "We tour against Summerlin and Henderson 55+ comps in one plan." },
    ],
    faqs: [
      {
        question: "Is Heritage still selling new?",
        answer:
          "Availability changes by phase. We check current builder and resale inventory when you are ready to tour.",
      },

      {
        question: "How do I compare HOA fees without guessing?",
        answer:
          "Request current HOA documents and a fee schedule for the specific address. Amenity packages and special assessments vary by village — do not rely on a community-wide average.",
      },
    ],
    ctaTitle: "Tour Heritage at Stonebridge",
    ctaBody: baseCta,
    meta: {
      title: "Heritage at Stonebridge | 55+ | Dr. Gene Boyle",
      description: "Heritage at Stonebridge active-adult homes. Call (702) 222-1964.",
      keywords: ["Heritage Stonebridge", "55+ Las Vegas"],
    },
  },
};

export const community55List = Object.values(community55Guides);
