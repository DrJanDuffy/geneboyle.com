/**
 * Shared JSON-LD builders for marketing guides, area guides, and hubs.
 * Keeps FAQPage + BreadcrumbList + WebPage consistent for SEO / GEO / AEO.
 */

import type { AreaGuide } from "@/lib/guides/types";
import type { MarketingGuide } from "@/lib/guides/marketing-types";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateNeighborhoodSchema,
  generateSeniorCommunitySchema,
  generateServiceSchema,
  generateWebPageSchema,
  type FAQItem,
} from "@/lib/schema";

const DATE_MODIFIED = "2026-08-10";

export function buildMarketingGuideSchema(
  guide: MarketingGuide,
  path: string
): Record<string, unknown> {
  const crumbs = (guide.breadcrumbs ?? [{ label: "Home", href: "/" }]).map(
    (c, i, arr) => ({
      name: c.label,
      url: c.href ?? (i === arr.length - 1 ? path : "/"),
    })
  );

  const schemas: Record<string, unknown>[] = [
    generateBreadcrumbSchema(crumbs),
    generateWebPageSchema({
      name: `${guide.title}${guide.accent ? ` ${guide.accent}` : ""}`.trim(),
      description: guide.lede,
      url: path,
      dateModified: DATE_MODIFIED,
    }),
    generateServiceSchema({
      name: `${guide.title}${guide.accent ? ` ${guide.accent}` : ""}`.trim(),
      description: guide.lede,
      url: path,
      areaServed: [
        "Las Vegas",
        "Henderson",
        "Summerlin",
        "Irvine",
        "Orange County",
      ],
    }),
  ];

  if (guide.faqs && guide.faqs.length > 0) {
    schemas.push(generateFAQSchema(guide.faqs));
  }

  return combineSchemas(...schemas);
}

export function buildNeighborhoodGuideSchema(
  guide: AreaGuide,
  path: string
): Record<string, unknown> {
  const crumbs = guide.breadcrumbs.map((c, i, arr) => ({
    name: c.label,
    url: c.href ?? (i === arr.length - 1 ? path : "/"),
  }));

  return combineSchemas(
    generateBreadcrumbSchema(crumbs),
    generateWebPageSchema({
      name: guide.meta.title,
      description: guide.meta.description,
      url: path,
      dateModified: DATE_MODIFIED,
    }),
    generateNeighborhoodSchema({
      name: guide.name,
      slug: guide.slug,
      description: guide.geo?.description ?? guide.lede,
      latitude: guide.geo?.latitude,
      longitude: guide.geo?.longitude,
      containedIn: guide.geo?.containedIn,
    }),
    generateFAQSchema(guide.faqs)
  );
}

export function buildSeniorCommunityGuideSchema(
  guide: AreaGuide,
  path: string
): Record<string, unknown> {
  const crumbs = guide.breadcrumbs.map((c, i, arr) => ({
    name: c.label,
    url: c.href ?? (i === arr.length - 1 ? path : "/"),
  }));
  const locality =
    guide.geo?.containedIn ||
    (guide.name.toLowerCase().includes("summerlin")
      ? "Las Vegas"
      : guide.name.toLowerCase().includes("aliante")
        ? "North Las Vegas"
        : "Henderson");

  return combineSchemas(
    generateBreadcrumbSchema(crumbs),
    generateWebPageSchema({
      name: guide.meta.title,
      description: guide.meta.description,
      url: path,
      dateModified: DATE_MODIFIED,
    }),
    generateSeniorCommunitySchema({
      name: guide.name,
      description: guide.lede,
      priceRange: "UNKNOWN — confirm on MLS",
      numberOfHomes: 0,
      amenities: guide.highlights.map((h) => ({
        name: h.title,
        description: h.body,
      })),
      latitude: guide.geo?.latitude,
      longitude: guide.geo?.longitude,
      ageRestriction: "55+",
      addressLocality: locality,
    }),
    generateFAQSchema(guide.faqs)
  );
}

export function buildHubPageSchema(input: {
  path: string;
  name: string;
  description: string;
  breadcrumbs: { name: string; url: string }[];
  faqs?: FAQItem[];
  serviceName?: string;
}): Record<string, unknown> {
  const schemas: Record<string, unknown>[] = [
    generateBreadcrumbSchema(input.breadcrumbs),
    generateWebPageSchema({
      name: input.name,
      description: input.description,
      url: input.path,
      dateModified: DATE_MODIFIED,
    }),
  ];

  if (input.serviceName) {
    schemas.push(
      generateServiceSchema({
        name: input.serviceName,
        description: input.description,
        url: input.path,
      })
    );
  }

  if (input.faqs && input.faqs.length > 0) {
    schemas.push(generateFAQSchema(input.faqs));
  }

  return combineSchemas(...schemas);
}
