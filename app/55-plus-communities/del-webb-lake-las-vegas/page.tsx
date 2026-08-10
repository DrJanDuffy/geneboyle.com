import type { Metadata } from "next";
import AreaGuidePage from "@/components/editorial/AreaGuidePage";
import { community55Guides } from "@/lib/guides/communities-55";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  combineSchemas,
  generateWebPageSchema,
} from "@/lib/schema";

const guide = community55Guides["del-webb-lake-las-vegas"];

export const metadata: Metadata = {
  title: guide.meta.title,
  description: guide.meta.description,
  keywords: guide.meta.keywords,
};

const pageSchemas = combineSchemas(
  generateBreadcrumbSchema(
    guide.breadcrumbs.map((c) => ({
      name: c.label,
      url: c.href ?? `/55-plus-communities/del-webb-lake-las-vegas`,
    }))
  ),
  generateWebPageSchema({
    name: guide.meta.title,
    description: guide.meta.description,
    url: `/55-plus-communities/del-webb-lake-las-vegas`,
    dateModified: "2026-08-10",
  }),
  generateFAQSchema(guide.faqs)
);

export default function Page() {
  return <AreaGuidePage guide={guide} schema={pageSchemas} />;
}
