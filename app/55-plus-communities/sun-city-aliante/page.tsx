import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import AreaGuidePage from "@/components/editorial/AreaGuidePage";
import { community55Guides } from "@/lib/guides/communities-55";
import { buildSeniorCommunityGuideSchema } from "@/lib/seo/guide-schema";

const guide = community55Guides["sun-city-aliante"];

export const metadata: Metadata = buildPageMetadata({
  title: guide.meta.title,
  description: guide.meta.description,
  path: "/55-plus-communities/sun-city-aliante",
  keywords: guide.meta.keywords,
});

const pageSchemas = buildSeniorCommunityGuideSchema(guide, "/55-plus-communities/sun-city-aliante");

export default function Page() {
  return <AreaGuidePage guide={guide} schema={pageSchemas} />;
}
