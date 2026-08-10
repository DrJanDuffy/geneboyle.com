import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["sellers-relocation"];

export const metadata: Metadata = buildPageMetadata({
  title: 'Sell Before You Relocate | Dr. Gene Boyle',
  description: 'Sell in California before a Las Vegas move. Call (702) 222-1964.',
  path: "/sellers/relocation",
});

export default function Page() {
  return <MarketingGuidePage guide={guide} guideKey="sellers-relocation" path="/sellers/relocation" />;
}
