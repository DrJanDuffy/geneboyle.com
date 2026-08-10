/**
 * Hyperlocal area comparison rows for GEO / AEO (Moltbook: comparison tables).
 * Sourced from neighborhood guides — never invent medians.
 */

import { neighborhoodGuideList } from "@/lib/guides/neighborhoods";
import { siteConfig } from "@/lib/site-config";

export type AreaComparisonRow = {
  name: string;
  slug: string;
  href: string;
  medianLabel: string;
  periodNote: string;
  containedIn: string;
  stripDrive: string;
  compareFocus: string;
};

function stripDriveFromGuide(slug: string): string {
  const guide = neighborhoodGuideList.find((g) => g.slug === slug);
  const strip = guide?.commutes?.find((c) =>
    /strip/i.test(c.destination)
  );
  if (strip) return `${strip.drive} typical / ${strip.rush} rush`;
  return "Confirm for address";
}

/** Stable comparison set for relocators (fact-labeled; UNKNOWN preserved). */
export function getAreaComparisonRows(): AreaComparisonRow[] {
  return neighborhoodGuideList.map((guide) => {
    const median = guide.stats[0]?.value ?? "UNKNOWN";
    const periodNote = guide.statsTitle;
    return {
      name: guide.name,
      slug: guide.slug,
      href: `/neighborhoods/${guide.slug}`,
      medianLabel: median,
      periodNote,
      containedIn: guide.geo?.containedIn ?? "Las Vegas Valley",
      stripDrive: stripDriveFromGuide(guide.slug),
      compareFocus: guide.highlights[0]?.title ?? "Amenities & inventory",
    };
  });
}

/** Markdown table for llms.txt / agent consumption. */
export function areaComparisonMarkdownTable(): string {
  const rows = getAreaComparisonRows();
  const header =
    "| Area | Dated median / status | Contained in | Strip drive | Focus |\n| --- | --- | --- | --- | --- |";
  const body = rows
    .map(
      (r) =>
        `| ${r.name} | ${r.medianLabel} (${r.periodNote}) | ${r.containedIn} | ${r.stripDrive} | ${r.compareFocus} |`
    )
    .join("\n");
  return `${header}\n${body}`;
}

/** ItemList JSON-LD for the comparison table (Moltbook structured signal). */
export function generateAreaComparisonItemListSchema() {
  const rows = getAreaComparisonRows();
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Las Vegas area comparison for Irvine relocators",
    description:
      "Compare Summerlin, Henderson, Green Valley, and peer areas by dated median, location, and Strip commute — for Dr. Gene Boyle Irvine-to-Las Vegas planning.",
    numberOfItems: rows.length,
    itemListElement: rows.map((row, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: row.name,
      url: `${siteConfig.url}${row.href}`,
      description: `${row.name} dated median/status: ${row.medianLabel}. Contained in ${row.containedIn}. Strip drive: ${row.stripDrive}.`,
    })),
  };
}
