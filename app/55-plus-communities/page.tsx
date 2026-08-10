import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import EditorialVisualHero from "@/components/editorial/EditorialVisualHero";
import EditorialMediaBand from "@/components/editorial/EditorialMediaBand";
import EditorialSection from "@/components/editorial/EditorialSection";
import EditorialFaq from "@/components/editorial/EditorialFaq";
import EditorialCta from "@/components/editorial/EditorialCta";
import { community55List } from "@/lib/guides/communities-55";
import { getMarketingImage, getSectionImage } from "@/lib/guides/media";
import { agentInfo, siteConfig } from "@/lib/site-config";
import { answerFirst } from "@/lib/market/august-2026";
import SchemaScript from "@/components/SchemaScript";
import { buildHubPageSchema } from "@/lib/seo/guide-schema";

export const metadata: Metadata = buildPageMetadata({
  title: "55+ Communities in Las Vegas and Henderson | Dr. Gene Boyle",
  description: "Compare Sun City Summerlin, Trilogy, Sun City Anthem, and more by eligibility, amenities, HOA, and home format. Call (702) 222-1964.",
  path: "/55-plus-communities",
  keywords: [
    "55+ communities Las Vegas",
    "Sun City Summerlin",
    "active adult Henderson",
    "Del Webb Las Vegas",
  ],
});

const faqs = [
  {
    question: "What age and residency rules apply?",
    answer:
      "These communities typically require at least one occupant to meet an age qualification (commonly 55+). Always verify current HOA rules before offering.",
  },
  {
    question: "Can I buy if I am under 55?",
    answer:
      "Purchase and occupancy rules differ by community. Some restrict permanent under-age occupancy. We review governing documents with you.",
  },
  {
    question: "How do prices, HOA dues, and resale rules compare?",
    answer:
      "Sun City communities are often larger resale Del Webb plans; Trilogy skews newer/resort-styled Shea product. Compare fee schedules, amenity access, and resale process side by side before you tour.",
  },
];

const pageSchemas = buildHubPageSchema({
  path: "/55-plus-communities",
  name: "55+ Communities in Las Vegas and Henderson | Dr. Gene Boyle",
  description: answerFirst.fiftyFive,
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "55+ Communities", url: "/55-plus-communities" },
  ],
  faqs,
  serviceName: "55+ community comparison for relocators",
});

export default function FiftyFivePlusIndexPage() {
  return (
    <>
      <SchemaScript schema={pageSchemas} id="fifty-five-index-schema" />
      <Navbar />
      <main className="pb-16">
        <EditorialVisualHero
          image={getMarketingImage("55-plus-communities")}
          kicker={siteConfig.fullName}
          title="55+ Communities —"
          accent="in Las Vegas and Henderson"
          lede={answerFirst.fiftyFive}
        />

        <EditorialMediaBand image={getSectionImage("areas")} />

        <EditorialSection
          index="01"
          label="Communities"
          title="Which 55+ communities are in Summerlin and Henderson?"
        >
          <div className="border-t border-[var(--line)]">
            {community55List.map((c, i) => (
              <Link
                key={c.slug}
                href={`/55-plus-communities/${c.slug}`}
                className="group grid md:grid-cols-12 gap-4 border-b border-[var(--line-soft)] py-6 -mx-2 px-2 hover:bg-paper-2/60 transition-colors"
              >
                <div className="md:col-span-1 index-tag pt-1">
                  <b>{String(i + 1).padStart(2, "0")}</b>
                </div>
                <div className="md:col-span-4">
                  <h2 className="font-display text-2xl text-ink group-hover:text-accent">
                    {c.name}
                  </h2>
                </div>
                <p className="md:col-span-7 text-sm leading-relaxed">{c.lede}</p>
              </Link>
            ))}
          </div>
        </EditorialSection>

        <EditorialSection
          index="02"
          label="Process"
          title="Which amenities and home formats are available?"
          tone="muted"
        >
          <div className="grid md:grid-cols-3 gap-10 border-t border-[var(--line-soft)] pt-12">
            {[
              {
                t: "Amenities vs fees",
                b: "Resort packages cost more monthly — we line-item what you will use.",
              },
              {
                t: "Floor plans",
                b: "Single-story, casita, and golf-adjacent lots are filters, not slogans.",
              },
              {
                t: "Relocation timing",
                b: "Sequence the Irvine sale with Nevada occupancy rules and close dates.",
              },
            ].map((item) => (
              <article key={item.t}>
                <h3 className="font-sans text-base font-semibold text-ink mb-2">
                  {item.t}
                </h3>
                <p className="text-sm leading-relaxed">{item.b}</p>
              </article>
            ))}
          </div>
        </EditorialSection>

        <EditorialFaq faqs={faqs} index="03" title="55+ questions" />
        <EditorialCta
          title="Compare 55+ communities"
          body="Book Calendly or call — we will map tours across Summerlin and Henderson 55+ options."
        />
      </main>
      <Footer />
    </>
  );
}
