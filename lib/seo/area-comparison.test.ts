import { describe, expect, it } from "vitest";
import {
  areaComparisonMarkdownTable,
  generateAreaComparisonItemListSchema,
  getAreaComparisonRows,
} from "@/lib/seo/area-comparison";

describe("area comparison (Moltbook GEO)", () => {
  it("returns one row per neighborhood guide with UNKNOWN preserved", () => {
    const rows = getAreaComparisonRows();
    expect(rows.length).toBeGreaterThanOrEqual(10);
    expect(rows.some((r) => r.slug === "summerlin")).toBe(true);
    expect(rows.some((r) => r.medianLabel === "UNKNOWN")).toBe(true);
    const summerlin = rows.find((r) => r.slug === "summerlin");
    expect(summerlin?.medianLabel).toMatch(/537/);
  });

  it("builds ItemList schema with absolute URLs", () => {
    const schema = generateAreaComparisonItemListSchema();
    expect(schema["@type"]).toBe("ItemList");
    expect(schema.numberOfItems).toBe(getAreaComparisonRows().length);
    const first = (
      schema.itemListElement as Array<{ url: string; name: string }>
    )[0];
    expect(first.url).toMatch(/^https:\/\/www\.geneboyle\.com\/neighborhoods\//);
    expect(first.name.length).toBeGreaterThan(0);
  });

  it("emits a markdown comparison table for llms.txt", () => {
    const md = areaComparisonMarkdownTable();
    expect(md).toContain("| Area |");
    expect(md).toContain("Summerlin");
    expect(md).toContain("Henderson");
  });
});
