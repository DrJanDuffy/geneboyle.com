import type { Metadata } from "next";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["security-policy"];

export const metadata: Metadata = {
  title: 'Security Policy | geneboyle.com',
  description: 'Website security policy for geneboyle.com.',
};

export default function Page() {
  return <MarketingGuidePage guide={guide} />;
}
