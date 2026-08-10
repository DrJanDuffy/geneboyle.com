import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["sellers-downsizing"];

export const metadata: Metadata = buildPageMetadata({
  title: 'Downsizing Sellers | Dr. Gene Boyle',
  description: 'Downsizing guidance for relocating sellers. Call (702) 222-1964.',
  path: "/sellers/downsizing",
});

export default function Page() {
  return <MarketingGuidePage guide={guide} guideKey="sellers-downsizing" path="/sellers/downsizing" />;
}
