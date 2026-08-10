import type { Metadata } from "next";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["market-report"];

export const metadata: Metadata = {
  title: 'Las Vegas Market Report | Dr. Gene Boyle',
  description: 'Las Vegas and Henderson market context for relocators. Call (702) 222-1964.',
};

export default function Page() {
  return <MarketingGuidePage guide={guide} guideKey="market-report" />;
}
