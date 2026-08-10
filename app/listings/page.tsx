import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildHubPageSchema } from "@/lib/seo/guide-schema";
import SchemaScript from "@/components/SchemaScript";
import { agentInfo, siteConfig } from "@/lib/site-config";
import EditorialVisualHero from "@/components/editorial/EditorialVisualHero";
import EditorialMediaBand from "@/components/editorial/EditorialMediaBand";
import { getMarketingImage, getSectionImage } from "@/lib/guides/media";
import {
  answerFirst,
  buyerLeverageJuly,
  greenValleySnapshot,
  hendersonSnapshot,
  summerlinSnapshot,
  valleyAugust6,
} from "@/lib/market/august-2026";

export const metadata: Metadata = buildPageMetadata({
  title: "Las Vegas Homes for Sale by Price, Size, and Area | Dr. Gene Boyle",
  description: "Search Las Vegas MLS by price, square feet, and area. August 2026 inventory context with Dr. Gene Boyle. Call (702) 222-1964.",
  path: "/listings",
  keywords: [
    "Las Vegas homes for sale",
    "Henderson real estate",
    "MLS listings Las Vegas",
    "Summerlin homes",
    "Irvine to Las Vegas homes",
    "Dr Gene Boyle listings",
  ],
});

const popularSearches = [
  { name: "Summerlin homes", href: "/neighborhoods/summerlin", count: "1,200+" },
  { name: "Henderson properties", href: "/neighborhoods/henderson", count: "980+" },
  { name: "Green Valley", href: "/neighborhoods/green-valley", count: "450+" },
  { name: "The Ridges luxury", href: "/neighborhoods/the-ridges", count: "85+" },
  { name: "55+ communities", href: "/55-plus-communities", count: "320+" },
  { name: "New construction", href: "/new-construction", count: "600+" },
] as const;

const priceRanges = [
  { range: "Under $400K", description: "Condos, townhomes, entry inventory", count: "1,500+" },
  { range: "$400K – $600K", description: "Single-family homes, established streets", count: "2,100+" },
  { range: "$600K – $1M", description: "Larger homes, premium locations", count: "1,200+" },
  { range: "$1M – $2M", description: "Luxury homes, guard-gated communities", count: "450+" },
  { range: "$2M+", description: "Custom estates and high-amenity builds", count: "180+" },
] as const;

const neighborhoods = [
  {
    name: "Summerlin",
    description:
      "Master-planned west Valley villages — compare price band, square feet, amenities, and commute.",
    medianPrice: summerlinSnapshot.juneMedianSold,
    daysOnMarket: Number(summerlinSnapshot.juneMedianDom),
    href: "/neighborhoods/summerlin",
  },
  {
    name: "Henderson",
    description:
      "Green Valley, Inspirada, Anthem, and more — source-labeled medians differ by period.",
    medianPrice: hendersonSnapshot.localMedianSf,
    daysOnMarket: Number(hendersonSnapshot.localDom),
    href: "/neighborhoods/henderson",
  },
  {
    name: "Green Valley",
    description:
      "Mature Henderson streets; July 2026 SF median sold — inventory not stated in that source.",
    medianPrice: greenValleySnapshot.julyMedianSold,
    daysOnMarket: Number(greenValleySnapshot.medianDom),
    href: "/neighborhoods/green-valley",
  },
  {
    name: "Southern Highlands",
    description:
      "Guard-gated community with championship golf and mountain views — confirm current median on MLS.",
    medianPrice: "UNKNOWN",
    daysOnMarket: 0,
    href: "/neighborhoods/southern-highlands",
  },
  {
    name: "North Las Vegas",
    description:
      "Newer construction corridors and growing infrastructure — confirm current median on MLS.",
    medianPrice: "UNKNOWN",
    daysOnMarket: 0,
    href: "/neighborhoods/north-las-vegas",
  },
  {
    name: "Skye Canyon",
    description:
      "Newer master-planned community with modern floor plans — confirm current median on MLS.",
    medianPrice: "UNKNOWN",
    daysOnMarket: 0,
    href: "/neighborhoods/skye-canyon",
  },
] as const;

const buyingSteps = [
  {
    title: "Get pre-approved for financing",
    body: "A pre-approval clarifies budget and strengthens offers. We can introduce trusted local lenders — typically 1–3 days with documentation ready.",
  },
  {
    title: "Define priorities and search",
    body: "Square footage, commute, amenities, and price band drive the filter set. RealScout alerts keep new MLS matches in one loop.",
  },
  {
    title: "Tour and make an offer",
    body: "Tour in person or virtually. Craft competitive terms with contingencies that protect you through inspection and appraisal.",
  },
  {
    title: "Due diligence and inspections",
    body: "Coordinate inspections, review disclosures, and negotiate repairs or credits if issues surface.",
  },
  {
    title: "Close and get keys",
    body: "Typical closing runs 30–45 days from acceptance. Lenders, title, and escrow stay coordinated through settlement.",
  },
] as const;

const faqs = [
  {
    q: "How competitive is the Las Vegas housing market in August 2026?",
    a: `About ${valleyAugust6.monthsSupply} months of single-family supply and ${valleyAugust6.activeSfListings} active SF listings in the Aug 6 report — more balanced than peak years. ${buyerLeverageJuly.priceCutShare} of active listings showed price cuts in the July/August scan. Pre-approval and local representation still help on well-priced homes.`,
  },
  {
    q: "What’s the best time of year to buy a home in Las Vegas?",
    a: "Inventory typically peaks March–May; competition is often lower November–January. Choose based on whether you need selection or negotiating room.",
  },
  {
    q: "How much do I need for a down payment in Las Vegas?",
    a: "FHA often 3.5%, conventional typically 3–20%, VA 0% for eligible veterans. Nevada also offers assistance programs — lenders can map options to your file.",
  },
  {
    q: "Are Las Vegas HOA fees expensive?",
    a: "Fees range from roughly $25/month for basic maintenance to $400+/month for high-amenity guard-gated communities. Most standard neighborhoods fall between $50–$150/month.",
  },
] as const;

const pageSchemas = buildHubPageSchema({
  path: "/listings",
  name: "Las Vegas Homes for Sale | Dr. Gene Boyle",
  description: answerFirst.listings,
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Listings", url: "/listings" },
  ],
  faqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
  serviceName: "Las Vegas MLS home search",
});

export default function ListingsPage() {
  return (
    <>
      <SchemaScript schema={pageSchemas} id="listings-hub-schema" />
      <Navbar />
      <main className="pb-16">
        <EditorialVisualHero
          image={getMarketingImage("listings")}
          kicker={siteConfig.fullName}
          title="Las Vegas Homes for Sale —"
          accent="by price, size, and area"
          lede={answerFirst.listings}
          ctas={[
            { href: "#mls", label: "Save a search or request a tour", variant: "primary" },
            {
              href: agentInfo.phoneTel,
              label: `Call ${agentInfo.phoneFormatted}`,
              variant: "secondary",
            },
          ]}
        />

        <EditorialMediaBand image={getSectionImage("areas")} />

        <section className="site-wrap mb-20" id="mls">
          <p className="index-tag mb-4">
            <b>01</b> — Popular searches
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-3 max-w-2xl">
            Start where relocators look first
          </h2>
          <p className="max-w-prose mb-10">
            Filter by community, then refine with RealScout for beds, baths, and
            square footage.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0 border-t border-[var(--line)]">
            {popularSearches.map((search) => (
              <Link
                key={search.name}
                href={search.href}
                className="group flex justify-between items-center border-b border-[var(--line-soft)] py-5 hover:text-accent transition-colors"
              >
                <div>
                  <h3 className="font-sans text-sm font-semibold text-ink group-hover:text-accent">
                    {search.name}
                  </h3>
                  <span className="font-sans text-xs text-ink-muted">
                    {search.count} listings
                  </span>
                </div>
                <ArrowRight
                  className="h-4 w-4 text-ink-muted group-hover:text-accent"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-paper-2 py-16 mb-20">
          <div className="site-wrap">
            <p className="index-tag mb-4">
              <b>02</b> — Price bands
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-3">
              Las Vegas home price guide
            </h2>
            <p className="max-w-prose mb-10">
              Southern Nevada often prices below coastal California. Figures
              below are January 2026 market context — confirm live comps before
              you offer.
            </p>
            <div className="border-t border-[var(--line)]">
              {priceRanges.map((price) => (
                <div
                  key={price.range}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--line-soft)] py-5"
                >
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-ink">
                      {price.range}
                    </h3>
                    <p className="text-sm">{price.description}</p>
                  </div>
                  <span className="font-sans text-sm font-medium text-accent">
                    {price.count} homes
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="site-wrap mb-20">
          <p className="index-tag mb-4">
            <b>03</b> — Areas
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-3 max-w-2xl">
            Neighborhood snapshots
          </h2>
          <p className="max-w-prose mb-10">
            Median price and days on market help set expectations. Tour with the
            Las Vegas partner team for floor plans and lot specifics.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 border-t border-[var(--line-soft)] pt-12">
            {neighborhoods.map((n) => (
              <article key={n.name}>
                <h3 className="font-display text-xl text-ink mb-2">
                  <Link
                    href={n.href}
                    className="hover:text-accent transition-colors"
                  >
                    {n.name}
                  </Link>
                </h3>
                <p className="text-sm leading-relaxed mb-4">{n.description}</p>
                <p className="font-sans text-xs text-ink-muted">
                  {n.medianPrice === "UNKNOWN"
                    ? "Median UNKNOWN — confirm on MLS"
                    : `Median ${n.medianPrice} · DOM ${n.daysOnMarket} days`}
                </p>
              </article>
            ))}
          </div>
          <Link
            href="/neighborhoods"
            className="inline-flex mt-10 font-sans text-sm font-medium text-accent hover:underline underline-offset-4"
          >
            Explore all neighborhoods →
          </Link>
        </section>

        <section className="bg-ink text-paper py-16 mb-20">
          <div className="site-wrap">
            <p className="index-tag text-paper/45 mb-4">
              <b className="text-paper/80">04</b> — Why an agent
            </p>
            <h2 className="font-display text-3xl md:text-4xl mb-6 max-w-2xl">
              Representation that closes the loop
            </h2>
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
              {[
                {
                  t: "Off-market awareness",
                  b: "Network visibility beyond public MLS for early opportunities.",
                },
                {
                  t: "Offer strategy",
                  b: "Price, contingencies, and timing tuned to current Valley norms.",
                },
                {
                  t: "Local logistics",
                  b: "Partner coverage for tours, inspections, and Nevada closing steps.",
                },
                {
                  t: "Buyer cost path",
                  b: "Buyer representation is typically seller-paid — confirm for your deal.",
                },
              ].map((item) => (
                <div key={item.t}>
                  <h3 className="font-sans text-sm font-semibold mb-2">
                    {item.t}
                  </h3>
                  <p className="text-paper/70 text-sm leading-relaxed">
                    {item.b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="site-wrap mb-20">
          <p className="index-tag mb-4">
            <b>05</b> — Market snapshot
          </p>
          <h2 className="font-display text-3xl text-ink mb-8">
            January 2026 context
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[var(--line)] pt-10">
            {[
              ["$450K", "Median home price"],
              ["28", "Avg days on market"],
              ["4,850", "Active listings"],
              ["+4.2%", "Year-over-year"],
            ].map(([stat, label]) => (
              <div key={label}>
                <div className="font-display text-3xl text-accent mb-1">
                  {stat}
                </div>
                <div className="font-sans text-xs text-ink-muted uppercase tracking-wider">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="site-wrap mb-20">
          <p className="index-tag mb-4">
            <b>06</b> — Process
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-10 max-w-2xl">
            The home buying loop
          </h2>
          <div className="max-w-3xl border-t border-[var(--line)]">
            {buyingSteps.map((step, i) => (
              <div
                key={step.title}
                className="border-b border-[var(--line-soft)] py-6"
              >
                <p className="index-tag mb-2">
                  <b>{String(i + 1).padStart(2, "0")}</b>
                </p>
                <h3 className="font-sans text-base font-semibold text-ink mb-2">
                  {step.title}
                </h3>
                <p className="leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="site-wrap mb-20">
          <p className="index-tag mb-4">
            <b>07</b> — FAQ
          </p>
          <h2 className="font-display text-3xl text-ink mb-8">
            Buying questions
          </h2>
          <div className="max-w-3xl border-t border-[var(--line)]">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="border-b border-[var(--line-soft)] py-6"
              >
                <h3 className="font-sans text-base font-semibold text-ink mb-2">
                  {faq.q}
                </h3>
                <p className="leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="site-wrap">
          <div className="bg-ink text-paper py-14 px-6 md:px-12">
            <p className="index-tag text-paper/45 mb-4">
              <b className="text-paper/80">Next</b> — Book the first loop
            </p>
            <h2 className="font-display text-3xl md:text-4xl mb-4 max-w-2xl">
              Ready to search with a plan?
            </h2>
            <p className="text-paper/75 mb-8 max-w-prose">
              Call {agentInfo.phoneFormatted} or schedule on Calendly. Partner
              support from {agentInfo.partnerAgent.name} (
              {agentInfo.partnerAgent.license}).
            </p>
            <div className="flex flex-col sm:flex-row gap-3 font-sans text-sm">
              <a
                href={agentInfo.phoneTel}
                className="inline-flex justify-center items-center gap-2 bg-paper text-ink px-5 py-3 hover:bg-accent-faint transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {agentInfo.phoneFormatted}
              </a>
              <Link
                href="/contact#schedule"
                className="inline-flex justify-center border border-paper/30 text-paper px-5 py-3 hover:bg-paper/10 transition-colors"
              >
                Schedule consultation
              </Link>
            </div>
          </div>
        </section>

        <p className="text-center font-sans text-xs text-ink-muted mt-10">
          Last updated: August 2026
        </p>
      </main>
      <Footer />
    </>
  );
}
