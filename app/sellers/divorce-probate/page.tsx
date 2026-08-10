import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["sellers-divorce-probate"];

export const metadata: Metadata = buildPageMetadata({
  title: 'Divorce & Probate Sales | Dr. Gene Boyle',
  description: 'Divorce and probate real estate coordination. Call (702) 222-1964.',
  path: "/sellers/divorce-probate",
});

export default function Page() {
  return <MarketingGuidePage guide={guide} guideKey="sellers-divorce-probate" path="/sellers/divorce-probate" />;
}
