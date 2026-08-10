import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import EditorialHero from "@/components/editorial/EditorialHero";
import EditorialSection from "@/components/editorial/EditorialSection";
import EditorialFaq from "@/components/editorial/EditorialFaq";
import EditorialCta from "@/components/editorial/EditorialCta";
import { community55List } from "@/lib/guides/communities-55";
import { agentInfo, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "55+ Communities Las Vegas | Irvine Relocation | Dr. Gene Boyle",
  description:
    "Compare Sun City Summerlin, Trilogy, Sun City Anthem, and more active-adult communities with Dr. Gene Boyle. Call (702) 222-1964.",
  keywords: [
    "55+ communities Las Vegas",
    "Sun City Summerlin",
    "active adult Henderson",
    "Del Webb Las Vegas",
  ],
};

const faqs = [
  {
    question: "What does 55+ mean?",
    answer:
      "These communities typically require at least one occupant to meet an age qualification (commonly 55+). Always verify current HOA rules before offering.",
  },
  {
    question: "Can I buy if I am under 55?",
    answer:
      "Purchase and occupancy rules differ by community. Some restrict permanent under-age occupancy. We review governing documents with you.",
  },
  {
    question: "Sun City vs Trilogy?",
    answer:
      "Sun City communities are often larger resale Del Webb plans; Trilogy skews newer/resort-styled Shea product. Tour both if west Valley 55+ is the target.",
  },
];

export default function FiftyFivePlusIndexPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16">
        <EditorialHero
          kicker={siteConfig.fullName}
          title="55+ communities —"
          accent="active adult loops"
          lede={`Compare amenities, HOA fees, single-story inventory, and commute — then tour with partner ${agentInfo.partnerAgent.name}. Call ${agentInfo.phoneFormatted}.`}
        />

        <EditorialSection index="01" label="Communities" title="Active-adult shortlist">
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
          title="How we compare 55+ options"
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
          title="Shortlist two communities"
          body="Book Calendly or call — we will map tours across Summerlin and Henderson 55+ options."
        />
        <RealScoutListings />
      </main>
      <Footer />
    </>
  );
}
