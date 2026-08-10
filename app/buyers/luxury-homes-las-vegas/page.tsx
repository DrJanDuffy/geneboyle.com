import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["buyers-luxury"];

export const metadata: Metadata = buildPageMetadata({
  title: 'Luxury Home Buyers Las Vegas | Dr. Gene Boyle',
  description: 'Luxury buyer guidance in Las Vegas. Call (702) 222-1964.',
  path: "/buyers/luxury-homes-las-vegas",
});

export default function Page() {
  return <MarketingGuidePage guide={guide} guideKey="buyers-luxury" path="/buyers/luxury-homes-las-vegas" />;
}
