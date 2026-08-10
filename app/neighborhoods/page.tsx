import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import EditorialVisualHero from "@/components/editorial/EditorialVisualHero";
import EditorialMediaBand from "@/components/editorial/EditorialMediaBand";
import EditorialSection from "@/components/editorial/EditorialSection";
import EditorialCta from "@/components/editorial/EditorialCta";
import { neighborhoodGuideList } from "@/lib/guides/neighborhoods";
import { getMarketingImage, getSectionImage } from "@/lib/guides/media";
import { agentInfo, siteConfig } from "@/lib/site-config";
import { answerFirst } from "@/lib/market/august-2026";
import SchemaScript from "@/components/SchemaScript";
import { buildHubPageSchema } from "@/lib/seo/guide-schema";
import EditorialFaq from "@/components/editorial/EditorialFaq";

export const metadata: Metadata = buildPageMetadata({
  title: "Compare Las Vegas Areas by Amenities, Commute, and Home Type | Dr. Gene Boyle",
  description: "Compare Summerlin, Henderson, Green Valley, and more by commute, amenities, square footage, and dated price bands. Call (702) 222-1964.",
  path: "/neighborhoods",
  keywords: [
    "Las Vegas neighborhoods",
    "Henderson communities",
    "Summerlin real estate",
    "Irvine to Las Vegas neighborhoods",
  ],
});

const neighborhoodFaqs = [
  {
    question: "Which Las Vegas area fits my budget and commute?",
    answer: answerFirst.neighborhoods,
  },
  {
    question: "Should I start with Summerlin or Henderson?",
    answer:
      "Start with Summerlin, Henderson, and Green Valley for inventory breadth, then refine by square footage, commute, amenities, and HOA costs. Tour both west Valley and Henderson if your brief is open.",
  },
  {
    question: "Are all neighborhood medians from the same report?",
    answer:
      "No. Summerlin, Henderson, and Green Valley use dated labeled series. Other areas show UNKNOWN until a verified local median is available — confirm on MLS.",
  },
] as const;

const pageSchemas = buildHubPageSchema({
  path: "/neighborhoods",
  name: "Compare Las Vegas Areas | Dr. Gene Boyle",
  description: answerFirst.neighborhoods,
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Neighborhoods", url: "/neighborhoods" },
  ],
  faqs: [...neighborhoodFaqs],
  serviceName: "Las Vegas neighborhood comparison for relocators",
});

export default function NeighborhoodsIndexPage() {
  return (
    <>
      <SchemaScript schema={pageSchemas} id="neighborhoods-index-schema" />
      <Navbar />
      <main className="pb-16">
        <EditorialVisualHero
          image={getMarketingImage("neighborhoods")}
          kicker={siteConfig.fullName}
          title="Compare Las Vegas Areas —"
          accent="by amenities, commute, and home type"
          lede={answerFirst.neighborhoods}
          ctas={[
            { href: "/neighborhoods/summerlin", label: "Compare three areas", variant: "primary" },
            {
              href: agentInfo.phoneTel,
              label: `Call ${agentInfo.phoneFormatted}`,
              variant: "secondary",
            },
          ]}
        />

        <EditorialMediaBand image={getSectionImage("areas")} />

        <EditorialSection
          index="01"
          label="Areas"
          title="Which Las Vegas area fits my budget and commute?"
        >
          <div className="border-t border-[var(--line)]">
            {neighborhoodGuideList.map((n, i) => (
              <Link
                key={n.slug}
                href={`/neighborhoods/${n.slug}`}
                className="group grid md:grid-cols-12 gap-4 border-b border-[var(--line-soft)] py-6 hover:bg-paper-2/60 transition-colors -mx-2 px-2"
              >
                <div className="md:col-span-1 index-tag pt-1">
                  <b>{String(i + 1).padStart(2, "0")}</b>
                </div>
                <div className="md:col-span-4">
                  <h2 className="font-display text-2xl text-ink group-hover:text-accent transition-colors">
                    {n.name}
                  </h2>
                  <p className="font-sans text-xs text-ink-muted mt-1">
                    Median {n.stats[0]?.value}
                  </p>
                </div>
                <p className="md:col-span-7 text-sm leading-relaxed text-ink-soft">
                  {n.lede}
                </p>
              </Link>
            ))}
          </div>
        </EditorialSection>

        <EditorialSection
          index="02"
          label="Method"
          title="How can I compare areas without subjective labels?"
          tone="muted"
        >
          <p className="max-w-prose text-lg leading-relaxed">
            Use commute times, amenities, home format, square footage, HOA
            context, and source-dated price bands. Skip “best” or lifestyle
            slogans — those do not help you choose a street.
          </p>
        </EditorialSection>

        <EditorialFaq
          faqs={[...neighborhoodFaqs]}
          index="03"
          title="Neighborhood questions"
        />

        <EditorialCta
          title="Compare three areas, then tour"
          body="We sequence Irvine sell timing with Las Vegas showings — one phone number for the loop."
        />
      </main>
      <Footer />
    </>
  );
}
