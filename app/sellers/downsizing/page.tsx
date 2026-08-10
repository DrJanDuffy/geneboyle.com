import type { Metadata } from "next";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["sellers-downsizing"];

export const metadata: Metadata = {
  title: 'Downsizing Sellers | Dr. Gene Boyle',
  description: 'Downsizing guidance for relocating sellers. Call (702) 222-1964.',
};

export default function Page() {
  return <MarketingGuidePage guide={guide} />;
}
