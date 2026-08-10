import type { Metadata } from "next";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["market-insights"];

export const metadata: Metadata = {
  title: 'Las Vegas Market Insights | Dr. Gene Boyle',
  description: 'Market insights for Irvine to Las Vegas relocation. Call (702) 222-1964.',
};

export default function Page() {
  return <MarketingGuidePage guide={guide} guideKey="market-insights" />;
}
