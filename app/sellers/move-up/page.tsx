import type { Metadata } from "next";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["sellers-move-up"];

export const metadata: Metadata = {
  title: 'Move-Up Sellers | Dr. Gene Boyle',
  description: 'Move-up seller strategy. Call (702) 222-1964.',
};

export default function Page() {
  return <MarketingGuidePage guide={guide} />;
}
