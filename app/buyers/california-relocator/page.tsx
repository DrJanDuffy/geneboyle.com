import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["buyers-california-relocator"];

export const metadata: Metadata = buildPageMetadata({
  title: 'California Relocator Buyer Guide | Dr. Gene Boyle',
  description: 'California to Las Vegas buyer guide. Call (702) 222-1964.',
  path: "/buyers/california-relocator",
});

export default function Page() {
  return <MarketingGuidePage guide={guide} guideKey="buyers-california-relocator" path="/buyers/california-relocator" />;
}
