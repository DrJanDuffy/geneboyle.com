import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import CalendlyWidget from "@/components/calendly/CalendlyWidget";
import { Phone } from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { agentInfo, siteConfig } from "@/lib/site-config";
import EditorialVisualHero from "@/components/editorial/EditorialVisualHero";
import EditorialMediaBand from "@/components/editorial/EditorialMediaBand";
import { getMarketingImage, getSectionImage } from "@/lib/guides/media";
import { answerFirst } from "@/lib/market/august-2026";
import SchemaScript from "@/components/SchemaScript";
import { buildHubPageSchema } from "@/lib/seo/guide-schema";

export const metadata: Metadata = buildPageMetadata({
  title: "What Is Your Las Vegas Home Worth in August 2026? | Dr. Gene Boyle",
  description: "Request a pricing conversation using August 2026 comps — not a single online estimate. Call (702) 222-1964. Partner support from Dr. Jan Duffy, BHHS Nevada Properties.",
  path: "/home-valuation",
  keywords: [
    "home valuation Las Vegas",
    "what is my home worth Las Vegas",
    "free home value estimate",
    "CMA Las Vegas",
    "Irvine home sale before relocation",
    "Dr Gene Boyle valuation",
  ],
});

const valuationFaqs = [
  {
    question: "How accurate are online home value estimates like Zillow's Zestimate?",
    answer:
      "Online estimates can be off by a wide band. They cannot account for upgrades, condition, views, or lot characteristics. A professional CMA uses local comps.",
  },
  {
    question: "What factors affect my Las Vegas home's value?",
    answer:
      "Location and amenities, square footage, lot size, beds/baths, age, upgrades, pool, views, HOA fees, and current competing inventory. Confirm with comps for the address.",
  },
  {
    question: "How long does a home valuation take?",
    answer:
      "A comprehensive market analysis is typically available within 24-48 hours of receiving property facts and timing.",
  },
  {
    question: "Is a home valuation the same as an appraisal?",
    answer:
      "No. A CMA is an agent estimate based on market data. An appraisal is a formal lender valuation by a licensed appraiser.",
  },
] as const;

const pageSchemas = buildHubPageSchema({
  path: "/home-valuation",
  name: "What Is Your Las Vegas Home Worth | Dr. Gene Boyle",
  description: answerFirst.valuation,
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Home valuation", url: "/home-valuation" },
  ],
  faqs: [...valuationFaqs],
  serviceName: "Home valuation / CMA conversation",
});

const factors = [
  {
    title: "Location & amenities",
    body: "Neighborhood, commute options, HOA amenities, and proximity to parks or golf can shift comps by a wide band — Summerlin often prices above valley averages for similar square footage.",
  },
  {
    title: "Size & layout",
    body: "Square footage, bedroom/bath count, and functional floor plans matter. Open concepts and primary suites on the main level often command premiums.",
  },
  {
    title: "Upgrades & condition",
    body: "Kitchen, baths, flooring, roof, HVAC, and overall maintenance show up in buyer offers more reliably than automated estimates suggest.",
  },
  {
    title: "Outdoor living",
    body: "Pools, covered patios, and usable lot shape are major Las Vegas differentiators that AVMs underweight.",
  },
  {
    title: "Views & position",
    body: "Mountain, golf, or Strip views and lot position (corner, cul-de-sac) adjust value beyond raw living area.",
  },
  {
    title: "Market timing",
    body: "Active competition, days on market, and inventory months set the pricing strategy — not a single Zestimate number.",
  },
] as const;

const steps = [
  {
    title: "Book a valuation conversation",
    body: "Use Calendly below or call. Share the address, upgrades, and your relocation timeline.",
  },
  {
    title: "We pull live comps",
    body: "Recent sales, active listings, and expired inventory inform a price band — not a single magic number.",
  },
  {
    title: "Walk the strategy",
    body: "We explain the data, list-vs-wait tradeoffs, and how a California sale can sequence with a Las Vegas purchase.",
  },
] as const;

const faqs = [
  {
    q: "How accurate are online home value estimates?",
    a: "AVMs can miss 5–15%+ because they cannot see upgrades, condition, views, or lot nuances. A CMA grounded in MLS comps is the better planning input.",
  },
  {
    q: "How long does a valuation take?",
    a: "Typically 24–48 hours after we have the property details and your goals.",
  },
  {
    q: "Do you need to walk the home?",
    a: "An initial range can start from records and what you share. A brief walk-through improves accuracy for upgrades and condition — no heavy staging required.",
  },
  {
    q: "Is a CMA the same as an appraisal?",
    a: "No. A CMA guides listing strategy; a lender appraisal is a separate formal valuation for financing.",
  },
] as const;

export default function HomeValuationPage() {
  return (
    <>
      <SchemaScript schema={pageSchemas} id="home-valuation-schema" />
      <Navbar />
      <main className="pb-16">
        <EditorialVisualHero
          image={getMarketingImage("home-valuation")}
          kicker={siteConfig.fullName}
          title="What Is Your Las Vegas Home Worth —"
          accent="in August 2026?"
          lede={answerFirst.valuation}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Sellers", href: "/sellers" },
            { label: "Home valuation" },
          ]}
          ctas={[
            { href: "#schedule", label: "Request my valuation", variant: "primary" },
            {
              href: agentInfo.phoneTel,
              label: `Call ${agentInfo.phoneFormatted}`,
              variant: "secondary",
            },
          ]}
        />

        <EditorialMediaBand image={getSectionImage("areas")} />

        <section className="site-wrap mb-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7" id="schedule">
              <p className="index-tag mb-3">
                <b>01</b> — Calendly
              </p>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-3">
                What information do you need for a valuation?
              </h2>
              <p className="mb-8 max-w-prose">
                No obligation. Confirmations come from Calendly.
              </p>
              <CalendlyWidget url="showing" height="650px" />
            </div>

            <div className="lg:col-span-5 space-y-10">
              <div>
                <p className="index-tag mb-3">
                  <b>02</b> — Why a CMA
                </p>
                <h2 className="font-display text-2xl text-ink mb-4">
                  Algorithms miss the loop
                </h2>
                <p className="leading-relaxed mb-4">
                  Online estimators can be off by 10% or more — tens of thousands
                  on a typical Valley home. A Comparative Market Analysis uses
                  live MLS comps, active competition, and feature adjustments.
                </p>
                <ul className="space-y-3 font-sans text-sm text-ink-soft">
                  {[
                    "Pricing grounded in actual market data",
                    "Adjustments for upgrades and condition",
                    "Buyer demand and days-on-market context",
                    "Neighborhood-specific comps",
                    "No pressure to list",
                  ].map((item) => (
                    <li key={item} className="border-t border-[var(--line-soft)] pt-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-[var(--line)] pt-8">
                <p className="index-tag mb-4">January 2026 snapshot</p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    ["$450K", "Median price"],
                    ["+4.2%", "YoY"],
                    ["28 days", "Avg DOM"],
                    ["2.1 mo", "Inventory"],
                  ].map(([stat, label]) => (
                    <div key={label}>
                      <div className="font-display text-2xl text-accent">
                        {stat}
                      </div>
                      <div className="font-sans text-xs text-ink-muted uppercase tracking-wider">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={agentInfo.phoneTel}
                className="inline-flex items-center gap-2 font-sans text-sm font-medium text-accent hover:underline underline-offset-4"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Prefer to talk? {agentInfo.phoneFormatted}
              </a>
            </div>
          </div>
        </section>

        <section className="bg-paper-2 py-16 mb-20">
          <div className="site-wrap">
            <p className="index-tag mb-4">
              <b>03</b> — Value drivers
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-10 max-w-2xl">
              What moves the number
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 border-t border-[var(--line-soft)] pt-12">
              {factors.map((f) => (
                <article key={f.title}>
                  <h3 className="font-sans text-base font-semibold text-ink mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed">{f.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="site-wrap mb-20">
          <p className="index-tag mb-4">
            <b>04</b> — Process
          </p>
          <h2 className="font-display text-3xl text-ink mb-10">
            Three steps to a price band
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

        <section className="site-wrap mb-20">
          <p className="index-tag mb-4">
            <b>05</b> — FAQ
          </p>
          <h2 className="font-display text-3xl text-ink mb-8">
            Valuation questions
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

        <section className="site-wrap mb-10">
          <div className="bg-ink text-paper py-14 px-6 md:px-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Get the number that plans the move
            </h2>
            <p className="text-paper/75 mb-8 max-w-prose">
              Book Calendly or call {agentInfo.phoneFormatted}. Partner{" "}
              {agentInfo.partnerAgent.name} ({agentInfo.partnerAgent.license}).
            </p>
            <div className="flex flex-col sm:flex-row gap-3 font-sans text-sm">
              <a
                href="#schedule"
                className="inline-flex justify-center bg-paper text-ink px-5 py-3 hover:bg-accent-faint transition-colors"
              >
                Schedule valuation
              </a>
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
