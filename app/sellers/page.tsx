import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Link from "next/link";
import { Phone } from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildHubPageSchema } from "@/lib/seo/guide-schema";
import SchemaScript from "@/components/SchemaScript";
import { agentInfo, siteConfig } from "@/lib/site-config";
import EditorialVisualHero from "@/components/editorial/EditorialVisualHero";
import EditorialMediaBand from "@/components/editorial/EditorialMediaBand";
import { getMarketingImage, getSectionImage } from "@/lib/guides/media";
import { answerFirst, valleyAugust6 } from "@/lib/market/august-2026";

export const metadata: Metadata = buildPageMetadata({
  title: "Sell Your Las Vegas Home with Evidence | Dr. Gene Boyle",
  description: "August 2026 seller guide: comps, days on market, and listing strategy for Irvine-to-Las Vegas moves with Dr. Gene Boyle and Dr. Jan Duffy. Call (702) 222-1964.",
  path: "/sellers",
  keywords: [
    "sell home Las Vegas",
    "sell home Irvine before relocation",
    "Las Vegas listing agent",
    "home valuation Las Vegas",
    "Dr Gene Boyle seller",
  ],
});

const sellerFaqs = [
  {
    question: "How should I price a Las Vegas listing in August 2026?",
    answer: answerFirst.sellers,
  },
  {
    question: "Should I sell in Irvine before I buy in Las Vegas?",
    answer:
      "Sell-first, buy-first, and coordinated dual closes each have trade-offs. We map contingencies, temporary housing, and equity timing before you list.",
  },
  {
    question: "Where do I start a valuation?",
    answer:
      "Use the home valuation page or call (702) 222-1964 with address, beds, baths, square feet, upgrades, and timing.",
  },
] as const;

const pageSchemas = buildHubPageSchema({
  path: "/sellers",
  name: "Sell Your Las Vegas Home with Evidence | Dr. Gene Boyle",
  description: answerFirst.sellers,
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Sellers", url: "/sellers" },
  ],
  faqs: [...sellerFaqs],
  serviceName: "Home selling services — Irvine and Las Vegas",
});

const benefits = [
  {
    title: "Pricing that matches the move",
    body: "A CMA timed to your Irvine sell / Las Vegas buy window — not a generic online estimate.",
  },
  {
    title: "Marketing that reaches buyers",
    body: "MLS exposure, professional media, and network reach through Berkshire Hathaway HomeServices channels.",
  },
  {
    title: "Offer management",
    body: "Negotiate price, contingencies, and close dates so the California sale supports the Nevada purchase.",
  },
  {
    title: "Partner coverage in Nevada",
    body: `When the next home is in Las Vegas, ${agentInfo.partnerAgent.name} handles local logistics while Gene stays on the California side.`,
  },
] as const;

const paths = [
  {
    title: "Home valuation",
    body: "Start with a free price-band conversation.",
    href: "/home-valuation",
  },
  {
    title: "Relocation sellers",
    body: "Sequence the sale with a cross-state purchase.",
    href: "/sellers/relocation",
  },
  {
    title: "Move-up sellers",
    body: "Sell and buy in the same market without two blind spots.",
    href: "/sellers/move-up",
  },
  {
    title: "Downsizing",
    body: "Right-size square footage and HOA costs with a clear timeline.",
    href: "/sellers/downsizing",
  },
] as const;

const steps = [
  {
    title: "Valuation and prep",
    body: "Comps, price band, and a punch list for photos and showings.",
  },
  {
    title: "Launch on MLS",
    body: "Go live with media, remarks, and syndication that match buyer search behavior.",
  },
  {
    title: "Showings and offers",
    body: "Feedback loops, negotiation, and contingency strategy.",
  },
  {
    title: "Close and handoff",
    body: "Escrow coordination — then start the Las Vegas buy loop if that is next.",
  },
] as const;

export default function SellersPage() {
  return (
    <>
      <SchemaScript schema={pageSchemas} id="sellers-hub-schema" />
      <Navbar />
      <main className="pb-16">
        <EditorialVisualHero
          image={getMarketingImage("sellers")}
          kicker={siteConfig.fullName}
          title="Sell Your Las Vegas Home —"
          accent="with evidence, not guesswork"
          lede={answerFirst.sellers}
          ctas={[
            { href: "/home-valuation", label: "Request a pricing review", variant: "primary" },
            { href: "/contact#schedule", label: "Book a consult", variant: "secondary" },
          ]}
        />

        <EditorialMediaBand image={getSectionImage("areas")} />

        <section className="site-wrap mb-20">
          <p className="index-tag mb-4">
            <b>01</b> — Pricing
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-4 max-w-2xl">
            What is my home worth in today&apos;s market?
          </h2>
          <p className="max-w-prose text-lg mb-10 leading-relaxed">
            Start with the competing set: recent closed sales, active
            competition, and condition. Valley single-family median{" "}
            {valleyAugust6.medianSf} (Aug 6 report);{" "}
            {valleyAugust6.closedBelowAskingPct} of completed sales closed below
            asking — your net-proceeds range should reflect that reality.
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-ink mb-4 max-w-2xl">
            How long may a well-priced home take to sell?
          </h2>
          <p className="max-w-prose text-lg mb-10 leading-relaxed">
            Valley median days on market sit near {valleyAugust6.medianDom} in
            the August 6 report — your address still depends on price, condition,
            and competition. Well-priced homes move; overpriced listings absorb
            the longer DOM.
          </p>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 border-t border-[var(--line-soft)] pt-12">
            {benefits.map((b) => (
              <article key={b.title}>
                <h3 className="font-sans text-base font-semibold text-ink mb-2">
                  {b.title}
                </h3>
                <p className="leading-relaxed">{b.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-paper-2 py-16 mb-20">
          <div className="site-wrap">
            <p className="index-tag mb-4">
              <b>02</b> — Paths
            </p>
            <h2 className="font-display text-3xl text-ink mb-10">
              Which improvements matter before listing?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-[var(--line-soft)] pt-12">
              {paths.map((path) => (
                <article key={path.title}>
                  <h3 className="font-display text-xl text-ink mb-2">
                    {path.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4">{path.body}</p>
                  <Link
                    href={path.href}
                    className="font-sans text-sm font-medium text-accent hover:underline underline-offset-4"
                  >
                    Open →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="site-wrap mb-20">
          <p className="index-tag mb-4">
            <b>03</b> — Process
          </p>
          <h2 className="font-display text-3xl text-ink mb-10">
            From valuation to close
          </h2>
          <div className="max-w-3xl border-t border-[var(--line)]">
            {steps.map((step, i) => (
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

        <section className="site-wrap mb-16 text-center">
          <p className="index-tag mb-3">Live MLS</p>
          <h2 className="font-display text-3xl text-ink mb-3">
            Market context
          </h2>
          <p className="max-w-prose mx-auto mb-8">
            Browse active inventory while we price your sale against current
            comps.
          </p>
        </section>

        <section className="site-wrap mt-16">
          <div className="bg-ink text-paper py-14 px-6 md:px-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Price the sale that funds the move
            </h2>
            <p className="text-paper/75 mb-8 max-w-prose">
              Call {agentInfo.phoneFormatted} or schedule on Calendly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 font-sans text-sm">
              <Link
                href="/home-valuation"
                className="inline-flex justify-center bg-paper text-ink px-5 py-3 hover:bg-accent-faint transition-colors"
              >
                Free valuation
              </Link>
              <a
                href={agentInfo.phoneTel}
                className="inline-flex justify-center items-center gap-2 border border-paper/30 text-paper px-5 py-3 hover:bg-paper/10 transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {agentInfo.phoneFormatted}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
