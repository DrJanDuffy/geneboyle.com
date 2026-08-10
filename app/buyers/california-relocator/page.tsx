import type { Metadata } from "next";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["buyers-california-relocator"];

export const metadata: Metadata = {
  title: 'California Relocator Buyer Guide | Dr. Gene Boyle',
  description: 'California to Las Vegas buyer guide. Call (702) 222-1964.',
};

export default function Page() {
  return <MarketingGuidePage guide={guide} guideKey="buyers-california-relocator" />;
}
