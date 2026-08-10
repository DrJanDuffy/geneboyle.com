import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["market-insights"];

export const metadata: Metadata = buildPageMetadata({
  title: 'Las Vegas Market Insights | Dr. Gene Boyle',
  description: 'Market insights for Irvine to Las Vegas relocation. Call (702) 222-1964.',
  path: "/market-insights",
});

export default function Page() {
  return <MarketingGuidePage guide={guide} guideKey="market-insights" path="/market-insights" />;
}
