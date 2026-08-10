import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import AreaGuidePage from "@/components/editorial/AreaGuidePage";
import { neighborhoodGuides } from "@/lib/guides/neighborhoods";
import { buildNeighborhoodGuideSchema } from "@/lib/seo/guide-schema";

const guide = neighborhoodGuides["north-las-vegas"];

export const metadata: Metadata = buildPageMetadata({
  title: guide.meta.title,
  description: guide.meta.description,
  path: "/neighborhoods/north-las-vegas",
  keywords: guide.meta.keywords,
});

const pageSchemas = buildNeighborhoodGuideSchema(guide, "/neighborhoods/north-las-vegas");

export default function Page() {
  return <AreaGuidePage guide={guide} schema={pageSchemas} />;
}
