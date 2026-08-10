import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["why-berkshire-hathaway"];

export const metadata: Metadata = buildPageMetadata({
  title: 'Why Berkshire Hathaway HomeServices | Dr. Gene Boyle',
  description: 'Why work with BHHS Nevada Properties partner coverage. Call (702) 222-1964.',
  path: "/why-berkshire-hathaway",
});

export default function Page() {
  return <MarketingGuidePage guide={guide} guideKey="why-berkshire-hathaway" path="/why-berkshire-hathaway" />;
}
