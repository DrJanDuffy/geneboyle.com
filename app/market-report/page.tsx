import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["market-report"];

export const metadata: Metadata = buildPageMetadata({
  title: 'Las Vegas Housing Market Report: August 2026 | Dr. Gene Boyle',
  description: 'August 2026 Las Vegas Valley market report: median prices, inventory, months of supply, and submarket panels. Call (702) 222-1964.',
  path: "/market-report",
});

export default function Page() {
  return <MarketingGuidePage guide={guide} guideKey="market-report" path="/market-report" />;
}
