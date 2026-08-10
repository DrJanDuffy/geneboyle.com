import type { Metadata } from "next";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["google-business"];

export const metadata: Metadata = {
  title: 'Google Business Profile | Dr. Gene Boyle',
  description: 'NAP, hours, map, and reviews for Dr. Gene Boyle. Call (702) 222-1964.',
};

export default function Page() {
  return <MarketingGuidePage guide={guide} guideKey="google-business" />;
}
