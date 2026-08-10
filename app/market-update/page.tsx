import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["market-update"];

export const metadata: Metadata = buildPageMetadata({
  title: 'Las Vegas Market Update | Dr. Gene Boyle',
  description: 'Current Las Vegas housing market update for Irvine relocators. Call (702) 222-1964.',
  path: "/market-update",
});

export default function Page() {
  return <MarketingGuidePage guide={guide} guideKey="market-update" path="/market-update" />;
}
