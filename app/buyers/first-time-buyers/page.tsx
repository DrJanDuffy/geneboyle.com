import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["buyers-first-time"];

export const metadata: Metadata = buildPageMetadata({
  title: 'First-Time Buyers Las Vegas | Dr. Gene Boyle',
  description: 'First-time buyer guidance for Las Vegas. Call (702) 222-1964.',
  path: "/buyers/first-time-buyers",
});

export default function Page() {
  return <MarketingGuidePage guide={guide} guideKey="buyers-first-time" path="/buyers/first-time-buyers" />;
}
