import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["security-policy"];

export const metadata: Metadata = buildPageMetadata({
  title: 'Security Policy | geneboyle.com',
  description: 'Website security policy for geneboyle.com.',
  path: "/security-policy",
});

export default function Page() {
  return <MarketingGuidePage guide={guide} guideKey="security-policy" path="/security-policy" />;
}
