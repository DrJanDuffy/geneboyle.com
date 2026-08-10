import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["sellers-move-up"];

export const metadata: Metadata = buildPageMetadata({
  title: 'Move-Up Sellers | Dr. Gene Boyle',
  description: 'Move-up seller strategy. Call (702) 222-1964.',
  path: "/sellers/move-up",
});

export default function Page() {
  return <MarketingGuidePage guide={guide} guideKey="sellers-move-up" path="/sellers/move-up" />;
}
