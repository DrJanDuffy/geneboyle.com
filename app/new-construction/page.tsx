import type { Metadata } from "next";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["new-construction"];

export const metadata: Metadata = {
  title: 'New Construction Las Vegas | Dr. Gene Boyle',
  description: 'New construction homes in Las Vegas and Henderson. Call (702) 222-1964.',
};

export default function Page() {
  return <MarketingGuidePage guide={guide} />;
}
