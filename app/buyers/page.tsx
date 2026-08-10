import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone } from "lucide-react";
import type { Metadata } from "next";
import { agentInfo, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Home Buying Guide Las Vegas | Irvine Relocation | Dr. Gene Boyle",
  description:
    "Buy a home in Las Vegas with Irvine-to-Las Vegas relocation planning from Dr. Gene Boyle and Las Vegas partner Dr. Jan Duffy, BHHS Nevada Properties. Call (702) 222-1964.",
  keywords: [
    "buy home Las Vegas",
    "Las Vegas home buyer",
    "Irvine to Las Vegas relocation",
    "Henderson homes for sale",
    "California relocation Las Vegas",
    "Dr Gene Boyle buyer agent",
  ],
};

const buyerSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Buying Services Las Vegas",
  provider: {
    "@type": "RealEstateAgent",
    name: `${agentInfo.name} — BHHS Nevada Properties partner`,
    telephone: "+17022221964",
  },
  areaServed: "Las Vegas, Henderson, Summerlin, Clark County NV",
  serviceType: "Buyer Representation",
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buyerSchema) }}
      />
      <Navbar />
      <main className="pt-28 pb-16">
        <section className="site-wrap mb-16">
          <p className="index-tag mb-4">{siteConfig.fullName}</p>
          <h1 className="font-display text-4xl md:text-6xl text-ink max-w-3xl leading-tight mb-5">
            Buy in Las Vegas —{" "}
            <em className="italic text-accent">with a relocation plan</em>
          </h1>
          <p className="text-xl max-w-prose mb-8">
            Irvine-side planning with {agentInfo.name}; local tours and offers
            with partner {agentInfo.partnerAgent.name}. Call{" "}
            <a
              href={agentInfo.phoneTel}
              className="font-medium text-accent hover:underline"
            >
              {agentInfo.phoneFormatted}
            </a>
            .
          </p>
          <div className="flex flex-wrap gap-3 font-sans text-sm">
            <Link
              href="/listings"
              className="inline-flex bg-ink text-paper px-5 py-3 hover:bg-accent transition-colors"
            >
              Search homes
            </Link>
            <Link
              href="/contact#schedule"
              className="inline-flex border border-[var(--line)] text-ink px-5 py-3 hover:bg-ink hover:text-paper transition-colors"
            >
              Book a consult
            </Link>
          </div>
        </section>

        <section className="site-wrap mb-20">
          <p className="index-tag mb-4">
            <b>01</b> — The process
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-10 max-w-2xl">
            Five steps from search to keys
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
              Choose your entry point
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
        <RealScoutListings />

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
