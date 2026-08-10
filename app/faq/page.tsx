import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Link from "next/link";
import { Phone } from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import SchemaScript from "@/components/SchemaScript";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
  combineSchemas,
} from "@/lib/schema";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";
import EditorialVisualHero from "@/components/editorial/EditorialVisualHero";
import EditorialMediaBand from "@/components/editorial/EditorialMediaBand";
import { getMarketingImage, getSectionImage } from "@/lib/guides/media";
import { answerFirst, valleyAugust6 } from "@/lib/market/august-2026";

export const metadata: Metadata = buildPageMetadata({
  title: "Irvine-to-Las Vegas Relocation Questions Answered | Dr. Gene Boyle",
  description: "FAQ for Irvine to Las Vegas relocation: prices, sell-first vs buy-first, timelines, and neighborhood comparison with Dr. Gene Boyle and Dr. Jan Duffy.",
  path: "/faq",
  keywords: [
    "Irvine to Las Vegas FAQ",
    "Las Vegas real estate questions",
    "buying a home Las Vegas",
    "relocation FAQ",
    "Dr Gene Boyle FAQ",
  ],
});

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "FAQ", url: "/faq" },
];

const faqCategories = [
  {
    title: "About this practice",
    faqs: [
      {
        q: "Who is Dr. Gene Boyle?",
        a: `${agentInfo.name} (${agentInfo.licenseLabel}) helps clients plan moves from Irvine and Orange County to Las Vegas. Las Vegas partner ${agentInfo.partnerAgent.name} (${agentInfo.partnerAgent.license}) covers Valley tours and closing with Berkshire Hathaway HomeServices Nevada Properties.`,
      },
      {
        q: "Why Berkshire Hathaway HomeServices?",
        a: "BHHS Nevada Properties provides local market coverage and a national referral network. We use the brand’s platforms — we do not rebuild native RealScout ↔ Follow Up Boss sync.",
      },
      {
        q: "What areas do you serve?",
        a: "California planning from Irvine; Las Vegas Valley buying and selling including Summerlin, Henderson, Green Valley, North Las Vegas, Southern Highlands, Skye Canyon, Centennial Hills, and The Ridges.",
      },
      {
        q: "What phone number should I use?",
        a: `Client CTA is ${agentInfo.phoneFormatted}. Email ${agentInfo.email}.`,
      },
    ],
  },
  {
    title: "Buying a home in Las Vegas",
    faqs: [
      {
        q: "How long does the home buying process take?",
        a: "Typically 30–45 days from offer acceptance to closing. Cash purchases can close in as little as 7–14 days. Timeline depends on financing, inspections, and contingencies.",
      },
      {
        q: "Do I need a pre-approval before looking at homes?",
        a: "A pre-approval letter strengthens offers and clarifies budget. We can introduce trusted local lenders when you are ready.",
      },
      {
        q: "How much do I need for a down payment?",
        a: "FHA often 3.5%, conventional typically 3–20%, VA may be 0% for eligible veterans. Lenders map programs to your file.",
      },
      {
        q: "Is now a good time to buy in Las Vegas?",
        a: `August 6, 2026 Valley report: about ${valleyAugust6.monthsSupply} months of single-family supply, ${valleyAugust6.medianDom} median days on market, and ${valleyAugust6.medianSf} SF median. More selection than the peak years — strategy still depends on the competing set for your shortlist.`,
      },
    ],
  },
  {
    title: "Selling before you relocate",
    faqs: [
      {
        q: "What is my home worth?",
        a: "Start a free valuation conversation. We use MLS comps and feature adjustments — not a single online estimate.",
      },
      {
        q: "How long will it take to sell?",
        a: `August 6, 2026 Valley report: about ${valleyAugust6.medianDom} median days on market; ${valleyAugust6.closedBelowAskingPct} of completed sales closed below asking. Pricing strategy matters more than waiting for a perfect month.`,
      },
      {
        q: "How do you market a listing?",
        a: "MLS syndication, professional media, and BHHS network exposure. Prep checklists focus on decluttering, repairs, and photography ROI.",
      },
    ],
  },
  {
    title: "Relocating from Irvine",
    faqs: [
      {
        q: "How do you coordinate a cross-state move?",
        a: "Gene runs California-side sell timing; Jan’s team covers Las Vegas tours and offers. One client phone number keeps the loop clear.",
      },
      {
        q: "Which areas should I tour first?",
        a: "Start with Summerlin, Henderson, and Green Valley for inventory breadth, then refine by square footage, commute, amenities, and HOA costs.",
      },
      {
        q: "How does cost of living compare?",
        a: "Nevada has no state income tax. Housing often prices below coastal California for similar square footage — confirm with live comps for your targets.",
      },
    ],
  },
  {
    title: "Working with us",
    faqs: [
      {
        q: "How do I schedule a consultation?",
        a: "Use Calendly on the contact page or call/text the CTA number. Confirmations come from Calendly.",
      },
      {
        q: "Where are the offices?",
        a: `Planning: ${officeInfo.address.full}. Las Vegas partner office: ${officeInfo.lasVegasOffice.full}.`,
      },
      {
        q: "What tools are on this site?",
        a: "RealScout MLS search, Calendly, AI chat for quick questions, home valuation, market reports, Google Business details, and WebMCP agent tools. See How we work.",
      },
    ],
  },
] as const;

const allFaqs = faqCategories.flatMap((category) =>
  category.faqs.map((faq) => ({
    question: faq.q,
    answer: faq.a,
  }))
);

const pageSchemas = combineSchemas(
  generateBreadcrumbSchema(breadcrumbs),
  generateWebPageSchema({
    name: `Frequently Asked Questions | ${siteConfig.fullName}`,
    description:
      "FAQ about Irvine to Las Vegas relocation, buying, selling, and working with Dr. Gene Boyle and BHHS Nevada Properties.",
    url: "/faq",
    dateModified: "2026-08-10",
  }),
  generateFAQSchema(allFaqs)
);

export default function FAQPage() {
  return (
    <>
      <SchemaScript schema={pageSchemas} id="faq-page-schema" />
      <Navbar />
      <main className="pb-16">
        <EditorialVisualHero
          image={getMarketingImage("faq")}
          kicker={siteConfig.fullName}
          title="Irvine-to-Las Vegas —"
          accent="questions answered"
          lede={answerFirst.faq}
          ctas={[
            { href: "/contact", label: "Ask a relocation question", variant: "primary" },
            {
              href: agentInfo.phoneTel,
              label: `Call ${agentInfo.phoneFormatted}`,
              variant: "secondary",
            },
          ]}
        />

        <EditorialMediaBand image={getSectionImage("areas")} />

        <div className="site-wrap space-y-16 mb-20">
          {faqCategories.map((category, catIndex) => (
            <section key={category.title}>
              <p className="index-tag mb-4">
                <b>{String(catIndex + 1).padStart(2, "0")}</b> — {category.title}
              </p>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-6">
                {category.title}
              </h2>
              <div className="max-w-3xl border-t border-[var(--line)]">
                {category.faqs.map((faq) => (
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
          ))}
        </div>

        <section className="site-wrap mb-10">
          <div className="bg-ink text-paper py-14 px-6 md:px-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Still have questions?
            </h2>
            <p className="text-paper/75 mb-8 max-w-prose">
              Call {agentInfo.phoneFormatted} or book Calendly. Partner{" "}
              {agentInfo.partnerAgent.name} ({agentInfo.partnerAgent.license}).
            </p>
            <div className="flex flex-col sm:flex-row gap-3 font-sans text-sm">
              <a
                href={agentInfo.phoneTel}
                className="inline-flex justify-center items-center gap-2 bg-paper text-ink px-5 py-3 hover:bg-accent-faint transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {agentInfo.phoneFormatted}
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

        <p className="text-center font-sans text-xs text-ink-muted mb-8">
          Last updated: August 2026
        </p>
      </main>
      <Footer />
    </>
  );
}
