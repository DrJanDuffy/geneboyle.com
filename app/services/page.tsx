import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["services"];

export const metadata: Metadata = buildPageMetadata({
  title: 'Services | Irvine to Las Vegas Relocation | Dr. Gene Boyle',
  description: 'Relocation real estate services with Dr. Gene Boyle and partner Dr. Jan Duffy, BHHS Nevada Properties. Call (702) 222-1964.',
  path: "/services",
});

export default function Page() {
  return <MarketingGuidePage guide={guide} guideKey="services" path="/services" />;
}
