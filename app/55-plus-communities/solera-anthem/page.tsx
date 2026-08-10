import type { Metadata } from "next";
import AreaGuidePage from "@/components/editorial/AreaGuidePage";
import { community55Guides } from "@/lib/guides/communities-55";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  combineSchemas,
  generateWebPageSchema,
} from "@/lib/schema";

const guide = community55Guides["solera-anthem"];

export const metadata: Metadata = {
  title: guide.meta.title,
  description: guide.meta.description,
  keywords: guide.meta.keywords,
};

const pageSchemas = combineSchemas(
  generateBreadcrumbSchema(
    guide.breadcrumbs.map((c) => ({
      name: c.label,
      url: c.href ?? `/55-plus-communities/solera-anthem`,
    }))
  ),
  generateWebPageSchema({
    name: guide.meta.title,
    description: guide.meta.description,
    url: `/55-plus-communities/solera-anthem`,
    dateModified: "2026-08-10",
  }),
  generateFAQSchema(guide.faqs)
);

export default function Page() {
  return <AreaGuidePage guide={guide} schema={pageSchemas} />;
}
