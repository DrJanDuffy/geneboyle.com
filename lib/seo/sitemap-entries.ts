import type { MetadataRoute } from "next";
import { neighborhoodGuideList } from "@/lib/guides/neighborhoods";
import { community55List } from "@/lib/guides/communities-55";
import { absoluteUrl } from "@/lib/seo/site-url";

type Entry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const staticEntries: Entry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.9 },
  { path: "/listings", changeFrequency: "daily", priority: 0.9 },
  { path: "/how-we-work", changeFrequency: "monthly", priority: 0.9 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.8 },
  { path: "/buyers", changeFrequency: "monthly", priority: 0.8 },
  { path: "/sellers", changeFrequency: "monthly", priority: 0.8 },
  { path: "/home-valuation", changeFrequency: "monthly", priority: 0.8 },
  { path: "/neighborhoods", changeFrequency: "weekly", priority: 0.8 },
  { path: "/55-plus-communities", changeFrequency: "monthly", priority: 0.8 },
  { path: "/google-business", changeFrequency: "monthly", priority: 0.9 },
  // Marketing guide routes (keys match app/ folders)
  { path: "/services", changeFrequency: "monthly", priority: 0.7 },
  { path: "/relocation", changeFrequency: "monthly", priority: 0.8 },
  { path: "/market-report", changeFrequency: "weekly", priority: 0.9 },
  { path: "/market-update", changeFrequency: "weekly", priority: 0.9 },
  { path: "/market-insights", changeFrequency: "monthly", priority: 0.9 },
  { path: "/luxury-homes", changeFrequency: "weekly", priority: 0.8 },
  { path: "/new-construction", changeFrequency: "weekly", priority: 0.8 },
  { path: "/investment-properties", changeFrequency: "weekly", priority: 0.8 },
  { path: "/why-berkshire-hathaway", changeFrequency: "monthly", priority: 0.9 },
  { path: "/security-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/buyers/california-relocator", changeFrequency: "monthly", priority: 0.8 },
  { path: "/buyers/first-time-buyers", changeFrequency: "monthly", priority: 0.8 },
  { path: "/buyers/luxury-homes-las-vegas", changeFrequency: "monthly", priority: 0.8 },
  { path: "/sellers/move-up", changeFrequency: "monthly", priority: 0.8 },
  { path: "/sellers/downsizing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/sellers/divorce-probate", changeFrequency: "monthly", priority: 0.7 },
  { path: "/sellers/relocation", changeFrequency: "monthly", priority: 0.8 },
];

/** Build the full public sitemap for Google Search Console. */
export function buildSitemapEntries(
  lastModified: Date = new Date()
): MetadataRoute.Sitemap {
  const paths = new Set<string>(staticEntries.map((e) => e.path));

  for (const n of neighborhoodGuideList) {
    paths.add(`/neighborhoods/${n.slug}`);
  }
  for (const c of community55List) {
    paths.add(`/55-plus-communities/${c.slug}`);
  }

  const priorityByPath = new Map(
    staticEntries.map((e) => [e.path, e] as const)
  );

  return Array.from(paths)
    .sort((a, b) => a.localeCompare(b))
    .map((path) => {
      const meta = priorityByPath.get(path);
      const isNeighborhood = path.startsWith("/neighborhoods/");
      const is55 = path.startsWith("/55-plus-communities/");
      return {
        url: absoluteUrl(path),
        lastModified,
        changeFrequency:
          meta?.changeFrequency ??
          (isNeighborhood || is55 ? "weekly" : "monthly"),
        priority:
          meta?.priority ?? (isNeighborhood || is55 ? 0.75 : 0.6),
      };
    });
}
