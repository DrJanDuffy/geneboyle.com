import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import EditorialVisualHero from "@/components/editorial/EditorialVisualHero";
import EditorialMediaBand from "@/components/editorial/EditorialMediaBand";
import EditorialSection from "@/components/editorial/EditorialSection";
import EditorialCta from "@/components/editorial/EditorialCta";
import { neighborhoodGuideList } from "@/lib/guides/neighborhoods";
import { getMarketingImage, getSectionImage } from "@/lib/guides/media";
import { agentInfo, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Las Vegas Neighborhoods | Irvine Relocation | Dr. Gene Boyle",
  description:
    "Explore Las Vegas and Henderson neighborhoods for Irvine-to-Las Vegas relocation with Dr. Gene Boyle and partner Dr. Jan Duffy. Call (702) 222-1964.",
  keywords: [
    "Las Vegas neighborhoods",
    "Henderson communities",
    "Summerlin real estate",
    "Irvine to Las Vegas neighborhoods",
  ],
};

export default function NeighborhoodsIndexPage() {
  return (
    <>
      <Navbar />
      <main className="pb-16">
        <EditorialVisualHero
          image={getMarketingImage("neighborhoods")}
          kicker={siteConfig.fullName}
          title="Neighborhoods —"
          accent="where relocators look first"
          lede={`Summerlin, Henderson, Green Valley, The Ridges, and more. Filter by square footage, commute, amenities, and price — not protected-class proxies. Call ${agentInfo.phoneFormatted}.`}
          ctas={[
            { href: "/listings", label: "Search homes", variant: "primary" },
            {
              href: agentInfo.phoneTel,
              label: `Call ${agentInfo.phoneFormatted}`,
              variant: "secondary",
            },
          ]}
        />

        <EditorialMediaBand image={getSectionImage("areas")} />

        <EditorialSection index="01" label="Areas" title="Valley shortlist">
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

        <EditorialCta
          title="Pick two areas, then tour"
          body="We sequence Irvine sell timing with Las Vegas showings — one phone number for the loop."
        />

        <RealScoutListings />
      </main>
      <Footer />
    </>
  );
}
