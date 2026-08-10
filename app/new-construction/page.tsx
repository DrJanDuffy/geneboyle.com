import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["new-construction"];

export const metadata: Metadata = buildPageMetadata({
  title: 'New Construction Las Vegas | Dr. Gene Boyle',
  description: 'New construction homes in Las Vegas and Henderson. Call (702) 222-1964.',
  path: "/new-construction",
});

export default function Page() {
  return <MarketingGuidePage guide={guide} guideKey="new-construction" path="/new-construction" />;
}
