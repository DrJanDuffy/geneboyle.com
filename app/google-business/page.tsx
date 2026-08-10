import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["google-business"];

export const metadata: Metadata = buildPageMetadata({
  title: 'Google Business Profile | Dr. Gene Boyle',
  description: 'NAP, hours, map, and reviews for Dr. Gene Boyle. Call (702) 222-1964.',
  path: "/google-business",
});

export default function Page() {
  return <MarketingGuidePage guide={guide} guideKey="google-business" path="/google-business" />;
}
