import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["luxury-homes"];

export const metadata: Metadata = buildPageMetadata({
  title: 'Luxury Homes Las Vegas | Dr. Gene Boyle',
  description: 'Luxury Las Vegas homes for relocators. Call (702) 222-1964.',
  path: "/luxury-homes",
});

export default function Page() {
  return <MarketingGuidePage guide={guide} guideKey="luxury-homes" path="/luxury-homes" />;
}
