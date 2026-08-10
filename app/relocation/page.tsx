import type { Metadata } from "next";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["relocation"];

export const metadata: Metadata = {
  title: 'Irvine to Las Vegas Relocation | Dr. Gene Boyle',
  description: 'Plan an Irvine to Las Vegas move with Dr. Gene Boyle. Call (702) 222-1964.',
};

export default function Page() {
  return <MarketingGuidePage guide={guide} guideKey="relocation" />;
}
