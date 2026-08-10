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
import { answerFirst, buyerLeverageJuly } from "@/lib/market/august-2026";

export const metadata: Metadata = buildPageMetadata({
  title: "Buy a Las Vegas Home with a Clear Plan | Dr. Gene Boyle",
  description: "August 2026 Las Vegas buyer guide: negotiating room, price bands, and Irvine-to-Las Vegas relocation planning with Dr. Gene Boyle and Dr. Jan Duffy. Call (702) 222-1964.",
  path: "/buyers",
  keywords: [
    "buy home Las Vegas",
    "Las Vegas home buyer",
    "Irvine to Las Vegas relocation",
    "Henderson homes for sale",
    "California relocation Las Vegas",
    "Dr Gene Boyle buyer agent",
  ],
});

const buyerFaqs = [
  {
    question: "Is now a good time to buy in Las Vegas?",
    answer: answerFirst.buyers,
  },
  {
    question: "How do Irvine relocators start a Las Vegas search?",
    answer:
      "Document price band, square footage, commute, amenities, financing, and travel schedule, then sequence the California sale with Valley tours. Call (702) 222-1964.",
  },
  {
    question: "Do I need a pre-approval before touring?",
    answer:
      "A pre-approval strengthens offers and clarifies budget. It is not required for an initial consult.",
  },
] as const;

const pageSchemas = buildHubPageSchema({
  path: "/buyers",
  name: "Buy a Las Vegas Home with a Clear Plan | Dr. Gene Boyle",
  description: answerFirst.buyers,
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Buyers", url: "/buyers" },
  ],
  faqs: [...buyerFaqs],
  serviceName: "Home buying services — Las Vegas Valley",
});

const buyingSteps = [
  {
    title: "Get pre-approved for financing",
    body: "Know your budget before touring. We introduce trusted local lenders for FHA, VA, conventional, and assistance programs.",
  },
  {
    title: "Define priorities and search",
    body: "Square footage, commute, amenities, and price band set the RealScout filters. Alerts keep new MLS matches in one loop.",
  },
  {
    title: "Tour and make an offer",
    body: "Tour inventory with the Las Vegas partner team. Offers balance competitiveness with contingencies that protect you.",
  },
  {
    title: "Due diligence and inspections",
    body: "Coordinate inspections, review disclosures, and negotiate repairs or credits when issues arise.",
  },
  {
    title: "Close and get keys",
    body: "Typical closing runs 30–45 days from acceptance. Lenders, title, and escrow stay coordinated through settlement.",
  },
] as const;

const paths = [
  {
    title: "California relocators",
    body: "Sequence the Irvine sale with a Las Vegas purchase — timing, bridge options, and tour windows.",
    href: "/buyers/california-relocator",
  },
  {
    title: "First-time buyers",
    body: "Pre-approval, down-payment paths, and a clear inspection checklist without jargon overload.",
    href: "/buyers/first-time-buyers",
  },
  {
    title: "Luxury inventory",
    body: "Higher-end searches in The Ridges, Southern Highlands, and custom Summerlin product.",
    href: "/buyers/luxury-homes-las-vegas",
  },
] as const;

export default function BuyersPage() {
  return (
    <>
      <SchemaScript schema={pageSchemas} id="buyers-hub-schema" />
      <Navbar />
      <main className="pb-16">
        <EditorialVisualHero
          image={getMarketingImage("buyers")}
          kicker={siteConfig.fullName}
          title="Buy a Las Vegas Home —"
          accent="with a clear plan"
          lede={answerFirst.buyers}
          ctas={[
            { href: "/contact", label: "Send my home criteria", variant: "primary" },
            { href: "/listings", label: "Search homes", variant: "secondary" },
          ]}
        />

        <EditorialMediaBand image={getSectionImage("approach")} />

        <section className="site-wrap mb-20">
          <p className="index-tag mb-4">
            <b>01</b> — August 2026
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-4 max-w-2xl">
            How much do Las Vegas homes cost in August 2026?
          </h2>
          <p className="max-w-prose text-lg mb-10 leading-relaxed">
            Valley single-family median near $480,000 (Aug 6 report) with about
            4.0 months of supply. Submarkets differ — Summerlin, Henderson, and
            Green Valley each need their own dated panel before you write.
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-ink mb-4 max-w-2xl">
            Where do buyers have negotiating room?
          </h2>
          <p className="max-w-prose text-lg mb-10 leading-relaxed">
            July/August scan: {buyerLeverageJuly.monthsSupplyJuly} months supply
            at July month-end, {buyerLeverageJuly.priceCutShare} of active
            listings with price cuts, median reduction{" "}
            {buyerLeverageJuly.medianReduction}. Match homes by price, square
            feet, commute, amenities, HOA, and condition.
          </p>
          <p className="index-tag mb-4">
            <b>02</b> — Process
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-10 max-w-2xl">
            What happens after an offer?
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

        <section className="bg-paper-2 py-16 mb-20">
          <div className="site-wrap">
            <p className="index-tag mb-4">
              <b>02</b> — Paths
            </p>
            <h2 className="font-display text-3xl text-ink mb-10">
              How do I compare homes by size, price, and commute?
            </h2>
            <div className="grid md:grid-cols-3 gap-10 border-t border-[var(--line-soft)] pt-12">
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
                    Learn more →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="site-wrap mb-16 text-center">
          <p className="index-tag mb-3">Live MLS</p>
          <h2 className="font-display text-3xl text-ink mb-3">
            Featured listings
          </h2>
          <p className="max-w-prose mx-auto mb-8">
            Attribution and MLS disclaimer appear with the widget.
          </p>
        </section>

        <section className="site-wrap mt-16">
          <div className="bg-ink text-paper py-14 px-6 md:px-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Start the buyer loop
            </h2>
            <p className="text-paper/75 mb-8 max-w-prose">
              Schedule on Calendly or call {agentInfo.phoneFormatted}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 font-sans text-sm">
              <Link
                href="/contact#schedule"
                className="inline-flex justify-center bg-paper text-ink px-5 py-3 hover:bg-accent-faint transition-colors"
              >
                Schedule consultation
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
