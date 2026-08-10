import { readFileSync } from "fs";
import path from "path";
import { describe, expect, it } from "vitest";
import { generateRealEstateAgentSchema } from "@/lib/schema";
import { runMoltbookHyperlocalEval } from "@/lib/seo/moltbook-eval";
import { neighborhoods } from "@/lib/site-config";

const root = path.resolve(__dirname, "../..");

function fileContains(rel: string, needle: string | RegExp): boolean {
  const text = readFileSync(path.join(root, rel), "utf8");
  return typeof needle === "string" ? text.includes(needle) : needle.test(text);
}

describe("Moltbook hyperlocal GEO/AEO eval", () => {
  const flags = {
    hasNeighborhoodComparisonTable: fileContains(
      "app/neighborhoods/page.tsx",
      "comparison-table"
    ),
    hasAreaItemListSchema: fileContains(
      "app/neighborhoods/page.tsx",
      "generateAreaComparisonItemListSchema"
    ),
    hasSelfNamedNeighborhoodFaqs: fileContains(
      "app/neighborhoods/page.tsx",
      "Irvine-to-Las Vegas relocators"
    ),
    personEmployeesHaveKnowsAbout: (() => {
      const schema = generateRealEstateAgentSchema();
      const employees = schema.employee as Array<{ knowsAbout?: string[] }>;
      return employees.every(
        (e) => Array.isArray(e.knowsAbout) && e.knowsAbout.length > 0
      );
    })(),
    homepageHasDateModified: fileContains(
      "app/page.tsx",
      'dateModified: "2026-08-10"'
    ),
    llmsHasComparisonTable: fileContains(
      "public/llms.txt",
      "| Area | Dated median"
    ),
    gbpHasMapAndHours: fileContains(
      "lib/guides/marketing-pages.ts",
      'kind: "local"'
    ),
    fairHousingCleanInSiteConfig: !neighborhoods.some((n) =>
      /family-friendly|safe neighborhood|good schools|low crime/i.test(
        `${n.description} ${n.highlights.join(" ")}`
      )
    ),
  };

  it("scores at least 90% after shipped Moltbook improvements", () => {
    const report = runMoltbookHyperlocalEval(flags);
    expect(report.totals.pct).toBeGreaterThanOrEqual(90);
    expect(report.totals.fail).toBe(0);
    expect(report.shipPriority).toEqual([]);
  });

  it("keeps dual-office NAP and AI crawler access as hard passes", () => {
    const report = runMoltbookHyperlocalEval(flags);
    const nap = report.criteria.find((c) => c.id === "nap-dual-office");
    const crawlers = report.criteria.find((c) => c.id === "ai-crawlers");
    expect(nap?.status).toBe("pass");
    expect(crawlers?.status).toBe("pass");
  });
});
