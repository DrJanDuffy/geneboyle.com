import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import MarketingGuidePage from "@/components/editorial/MarketingGuidePage";
import { marketingGuides } from "@/lib/guides/marketing-pages";

const guide = marketingGuides["google-business"];

export const metadata: Metadata = buildPageMetadata({
  title: "Google Business Profile | NAP, Hours & Map | Dr. Gene Boyle",
  description:
    "Dr. Gene Boyle NAP, hours, map pin, Call/Directions/Reviews — Irvine 320 Junco and Las Vegas partner 9406 W Lake Mead Blvd. Call (702) 222-1964.",
  path: "/google-business",
  keywords: [
    "Dr Gene Boyle Google Business",
    "Irvine to Las Vegas realtor NAP",
    "BHHS Nevada Properties Lake Mead",
  ],
});

export default function Page() {
  return <MarketingGuidePage guide={guide} guideKey="google-business" path="/google-business" />;
}
