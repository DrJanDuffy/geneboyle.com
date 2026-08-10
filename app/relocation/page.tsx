import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["relocation"];

export const metadata: Metadata = buildPageMetadata({
  title: 'Irvine to Las Vegas Relocation Planned Around Your Timeline | Dr. Gene Boyle',
  description: 'Sell in Irvine and buy in Las Vegas with one timeline — August 2026 market context and local partner handoff. Call (702) 222-1964.',
  path: "/relocation",
});

export default function Page() {
  return <MarketingGuidePage guide={guide} guideKey="relocation" path="/relocation" />;
}
