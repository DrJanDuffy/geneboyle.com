import type { Metadata } from "next";
import AreaGuidePage from "@/components/editorial/AreaGuidePage";
import { neighborhoodGuides } from "@/lib/guides/neighborhoods";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateNeighborhoodSchema,
  combineSchemas,
} from "@/lib/schema";

const guide = neighborhoodGuides["green-valley"];

export const metadata: Metadata = {
  title: guide.meta.title,
  description: guide.meta.description,
  keywords: guide.meta.keywords,
};

const pageSchemas = combineSchemas(
  generateBreadcrumbSchema(
    guide.breadcrumbs.map((c) => ({
      name: c.label,
      url: c.href ?? `/neighborhoods/green-valley`,
    }))
  ),
  generateNeighborhoodSchema({
    name: guide.name,
    slug: guide.slug,
    description: guide.geo?.description ?? guide.lede,
    latitude: guide.geo?.latitude ?? 36.17,
    longitude: guide.geo?.longitude ?? -115.14,
    containedIn: guide.geo?.containedIn ?? "Las Vegas",
  }),
  generateFAQSchema(guide.faqs)
);

export default function Page() {
  return <AreaGuidePage guide={guide} schema={pageSchemas} />;
}
