import type { Metadata } from "next";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["buyers-first-time"];

export const metadata: Metadata = {
  title: 'First-Time Buyers Las Vegas | Dr. Gene Boyle',
  description: 'First-time buyer guidance for Las Vegas. Call (702) 222-1964.',
};

export default function Page() {
  return <MarketingGuidePage guide={guide} />;
}
