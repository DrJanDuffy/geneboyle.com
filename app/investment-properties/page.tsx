import type { Metadata } from "next";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["investment-properties"];

export const metadata: Metadata = {
  title: 'Investment Properties Las Vegas | Dr. Gene Boyle',
  description: 'Las Vegas investment property guidance. Call (702) 222-1964.',
};

export default function Page() {
  return <MarketingGuidePage guide={guide} guideKey="investment-properties" />;
}
