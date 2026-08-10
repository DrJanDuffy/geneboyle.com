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
import EditorialFaq from "@/components/editorial/EditorialFaq";
import {
  generateAreaComparisonItemListSchema,
  getAreaComparisonRows,
} from "@/lib/seo/area-comparison";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateServiceSchema,
  generateWebPageSchema,
} from "@/lib/schema";

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
    question: "Should I start with Summerlin or Henderson for an Irvine-to-Las Vegas move?",
    answer:
      "For Irvine-to-Las Vegas relocators, start with Summerlin, Henderson, and Green Valley for inventory breadth, then refine by square footage, commute, amenities, and HOA costs. Tour both west Valley and Henderson if your brief is open.",
  },
  {
    question: "Are all Las Vegas neighborhood medians from the same report?",
    answer:
      "No — Las Vegas neighborhood medians on geneboyle.com are not one blended series. Summerlin, Henderson, and Green Valley use dated labeled series. Other areas show UNKNOWN until a verified local median is available — confirm on MLS.",
  },
  {
    question: "How does Dr. Gene Boyle compare Las Vegas areas for California relocators?",
    answer:
      "Dr. Gene Boyle compares Las Vegas areas by commute times, amenities, home format, square footage, HOA context, and source-dated price bands — not lifestyle slogans. Partner Dr. Jan Duffy covers Valley tours after the shortlist is set.",
  },
] as const;

const pageSchemas = combineSchemas(
  generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Neighborhoods", url: "/neighborhoods" },
  ]),
  generateWebPageSchema({
    name: "Compare Las Vegas Areas | Dr. Gene Boyle",
    description: answerFirst.neighborhoods,
    url: "/neighborhoods",
    dateModified: "2026-08-10",
  }),
  generateServiceSchema({
    name: "Las Vegas neighborhood comparison for relocators",
    description: answerFirst.neighborhoods,
    url: "/neighborhoods",
    areaServed: [
      "Las Vegas",
      "Henderson",
      "Summerlin",
      "Green Valley",
      "Irvine",
    ],
  }),
  generateFAQSchema([...neighborhoodFaqs]),
  generateAreaComparisonItemListSchema()
);

const comparisonRows = getAreaComparisonRows();

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
            { href: "#comparison-table", label: "Open comparison table", variant: "primary" },
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
          label="Compare"
          title="How do Summerlin, Henderson, and peer areas compare right now?"
        >
          <p className="max-w-prose text-lg leading-relaxed mb-8">
            Use this comparison table for Irvine-to-Las Vegas planning. Medians
            stay labeled by period; UNKNOWN means confirm on MLS — Dr. Gene Boyle
            does not invent figures.
          </p>
          <div
            id="comparison-table"
            className="overflow-x-auto border-t border-[var(--line)] scroll-mt-28"
          >
            <table className="w-full text-sm min-w-[720px]">
              <caption className="sr-only">
                Las Vegas area comparison for Irvine relocators: dated median,
                contained-in city, Strip drive, and focus
              </caption>
              <thead>
                <tr className="font-sans text-left text-ink">
                  <th className="py-3 pr-4 font-semibold">Area</th>
                  <th className="py-3 pr-4 font-semibold">Dated median</th>
                  <th className="py-3 pr-4 font-semibold">Contained in</th>
                  <th className="py-3 pr-4 font-semibold">Strip drive</th>
                  <th className="py-3 font-semibold">Focus</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.slug}
                    className="border-t border-[var(--line-soft)]"
                  >
                    <td className="py-3 pr-4">
                      <Link
                        href={row.href}
                        className="font-medium text-accent hover:underline underline-offset-4"
                      >
                        {row.name}
                      </Link>
                    </td>
                    <td className="py-3 pr-4">
                      <span className="text-ink">{row.medianLabel}</span>
                      <span className="block text-xs text-ink-muted mt-0.5">
                        {row.periodNote}
                      </span>
                    </td>
                    <td className="py-3 pr-4 text-ink-soft">{row.containedIn}</td>
                    <td className="py-3 pr-4 text-ink-soft">{row.stripDrive}</td>
                    <td className="py-3 text-ink-soft">{row.compareFocus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 font-sans text-xs text-ink-muted max-w-3xl">
            Last updated: August 2026 market ledger. Sold vs list series differ —
            see each area guide before you write an offer.
          </p>
        </EditorialSection>

        <EditorialSection
          index="02"
          label="Areas"
          title="Which Las Vegas area fits my budget and commute?"
          tone="muted"
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
          index="03"
          label="Method"
          title="How can I compare Las Vegas areas without subjective labels?"
        >
          <p className="max-w-prose text-lg leading-relaxed">
            Compare Las Vegas areas with commute times, amenities, home format,
            square footage, HOA context, and source-dated price bands. Skip
            “best” or lifestyle slogans — those do not help you choose a street
            when relocating from Irvine.
          </p>
        </EditorialSection>

        <EditorialFaq
          faqs={[...neighborhoodFaqs]}
          index="04"
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
