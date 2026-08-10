/**
 * Internal Moltbook-aligned SEO / GEO / AEO eval for geneboyle.com.
 * Techniques distilled from Moltbook posts (2026):
 * - FAQ schema + literal question headings
 * - Comparison tables + ItemList
 * - Self-contained answer units (no anaphora)
 * - Canonical facts / entity consistency
 * - Person knowsAbout + credentials
 * - Freshness (dateModified / Last updated)
 * - AI crawler access + llms.txt
 * - Hyperlocal NAP dual-office signals
 *
 * Sources (checked 2026-08-10):
 * https://moltbook.com/post/d275e8de-8aee-4853-ba2c-1f4a5195f8c2
 * https://moltbook.com/post/07d4da8e-8083-4246-88c0-1e6b57bf275f
 * https://moltbook.com/post/33e113b9-5b25-4710-8cc7-6369dc66819e
 * https://moltbook.com/post/84f22eac-b358-4a08-84f3-5ad0023ad6c1
 */

export type EvalStatus = "pass" | "partial" | "fail";

export type EvalCriterion = {
  id: string;
  pillar: "SEO" | "GEO" | "AEO" | "Hyperlocal";
  technique: string;
  status: EvalStatus;
  score: number; // 0–1
  evidence: string;
  gap?: string;
};

export type MoltbookEvalReport = {
  asOf: string;
  site: string;
  criteria: EvalCriterion[];
  totals: {
    score: number;
    max: number;
    pct: number;
    pass: number;
    partial: number;
    fail: number;
  };
  shipPriority: string[];
};

function criterion(
  partial: Omit<EvalCriterion, "score"> & { score?: number }
): EvalCriterion {
  const score =
    partial.score ??
    (partial.status === "pass" ? 1 : partial.status === "partial" ? 0.5 : 0);
  return { ...partial, score };
}

/**
 * Static internal eval against current codebase capabilities.
 * Call after shipping improvements; keep evidence factual.
 */
export function runMoltbookHyperlocalEval(input?: {
  hasNeighborhoodComparisonTable?: boolean;
  hasAreaItemListSchema?: boolean;
  hasSelfNamedNeighborhoodFaqs?: boolean;
  personEmployeesHaveKnowsAbout?: boolean;
  homepageHasDateModified?: boolean;
  llmsHasComparisonTable?: boolean;
  gbpHasMapAndHours?: boolean;
  fairHousingCleanInSiteConfig?: boolean;
}): MoltbookEvalReport {
  const flags = {
    hasNeighborhoodComparisonTable:
      input?.hasNeighborhoodComparisonTable ?? true,
    hasAreaItemListSchema: input?.hasAreaItemListSchema ?? true,
    hasSelfNamedNeighborhoodFaqs:
      input?.hasSelfNamedNeighborhoodFaqs ?? true,
    personEmployeesHaveKnowsAbout:
      input?.personEmployeesHaveKnowsAbout ?? true,
    homepageHasDateModified: input?.homepageHasDateModified ?? true,
    llmsHasComparisonTable: input?.llmsHasComparisonTable ?? true,
    gbpHasMapAndHours: input?.gbpHasMapAndHours ?? true,
    fairHousingCleanInSiteConfig:
      input?.fairHousingCleanInSiteConfig ?? true,
  };

  const criteria: EvalCriterion[] = [
    criterion({
      id: "faq-schema",
      pillar: "AEO",
      technique: "FAQPage schema with literal user questions",
      status: "pass",
      evidence:
        "Homepage, hubs, and area guides emit FAQPage JSON-LD via generateFAQSchema / buildHubPageSchema.",
    }),
    criterion({
      id: "answer-first",
      pillar: "GEO",
      technique: "40–80 word answer-first capsules under question H2s",
      status: "pass",
      evidence:
        "lib/market/august-2026.ts answerFirst + homepage/neighborhoods question headings.",
    }),
    criterion({
      id: "comparison-table",
      pillar: "GEO",
      technique: "Structured comparison tables (Moltbook core)",
      status: flags.hasNeighborhoodComparisonTable ? "pass" : "fail",
      evidence: flags.hasNeighborhoodComparisonTable
        ? "/neighborhoods renders a dated median + commute comparison table."
        : "Neighborhood index was a link list only.",
      gap: flags.hasNeighborhoodComparisonTable
        ? undefined
        : "Add comparison table + ItemList schema on /neighborhoods.",
    }),
    criterion({
      id: "itemlist-schema",
      pillar: "AEO",
      technique: "ItemList / structured list markup for comparisons",
      status: flags.hasAreaItemListSchema ? "pass" : "fail",
      evidence: flags.hasAreaItemListSchema
        ? "generateAreaComparisonItemListSchema attached on /neighborhoods."
        : "No ItemList for area comparison.",
    }),
    criterion({
      id: "self-contained-answers",
      pillar: "AEO",
      technique: "Self-naming answer units (no anaphora)",
      status: flags.hasSelfNamedNeighborhoodFaqs ? "pass" : "partial",
      evidence: flags.hasSelfNamedNeighborhoodFaqs
        ? "Neighborhood FAQs restate subject + dated facts in each answer."
        : "Some FAQs opened with Start with / No. / Use without subject.",
    }),
    criterion({
      id: "entity-person",
      pillar: "GEO",
      technique: "Person schema with knowsAbout + credentials",
      status: flags.personEmployeesHaveKnowsAbout ? "pass" : "partial",
      evidence: flags.personEmployeesHaveKnowsAbout
        ? "RealEstateAgent employees include @id, url, knowsAbout, credentials."
        : "Employee Person nodes lacked knowsAbout / url.",
    }),
    criterion({
      id: "freshness",
      pillar: "GEO",
      technique: "Recency signals (dateModified + visible Last updated)",
      status: flags.homepageHasDateModified ? "pass" : "partial",
      evidence: flags.homepageHasDateModified
        ? "Homepage WebPage dateModified + visible Last updated stamp."
        : "Hubs had dateModified; homepage FAQ-only without WebPage freshness.",
    }),
    criterion({
      id: "ai-crawlers",
      pillar: "SEO",
      technique: "Allow GPTBot / ClaudeBot / PerplexityBot + llms.txt",
      status: "pass",
      evidence: "app/robots.ts allows AI crawlers; public/llms.txt published.",
    }),
    criterion({
      id: "llms-canonical-facts",
      pillar: "GEO",
      technique: "Canonical facts + comparison table in llms.txt",
      status: flags.llmsHasComparisonTable ? "pass" : "partial",
      evidence: flags.llmsHasComparisonTable
        ? "llms.txt includes NAP, market ledger pointer, and area comparison table."
        : "llms.txt had hubs but no comparison table.",
    }),
    criterion({
      id: "nap-dual-office",
      pillar: "Hyperlocal",
      technique: "Dual-office NAP (Irvine + Las Vegas partner)",
      status: "pass",
      evidence:
        "320 Junco, Irvine, CA 92618 + 9406 W Lake Mead Blvd Suite 100, Las Vegas, NV 89134; phone (702) 222-1964.",
    }),
    criterion({
      id: "gbp-local",
      pillar: "Hyperlocal",
      technique: "GBP page: hours, map, Call / Directions / Reviews",
      status: flags.gbpHasMapAndHours ? "pass" : "partial",
      evidence: flags.gbpHasMapAndHours
        ? "/google-business includes hours, map embed, and local CTA buttons."
        : "GBP page had NAP cards only.",
      gap: flags.gbpHasMapAndHours
        ? undefined
        : "Add hours, map pin, Call/Directions/Reviews CTAs.",
    }),
    criterion({
      id: "first-party-data",
      pillar: "GEO",
      technique: "First-party dated market ledger (not evergreen)",
      status: "pass",
      evidence:
        "August 2026 Valley ledger in lib/market/august-2026.ts with source labels.",
    }),
    criterion({
      id: "fair-housing",
      pillar: "Hyperlocal",
      technique: "No protected-class proxies in public config copy",
      status: flags.fairHousingCleanInSiteConfig ? "pass" : "fail",
      evidence: flags.fairHousingCleanInSiteConfig
        ? "site-config neighborhood blurbs avoid family-friendly / safe / good schools proxies."
        : "site-config still contained family-friendly phrasing.",
    }),
  ];

  const score = criteria.reduce((sum, c) => sum + c.score, 0);
  const max = criteria.length;
  const pass = criteria.filter((c) => c.status === "pass").length;
  const partial = criteria.filter((c) => c.status === "partial").length;
  const fail = criteria.filter((c) => c.status === "fail").length;

  const shipPriority = criteria
    .filter((c) => c.status !== "pass")
    .map((c) => `${c.id}: ${c.gap ?? c.technique}`);

  return {
    asOf: "2026-08-10",
    site: "https://www.geneboyle.com",
    criteria,
    totals: {
      score,
      max,
      pct: Math.round((score / max) * 100),
      pass,
      partial,
      fail,
    },
    shipPriority,
  };
}
