import type { MetadataRoute } from "next";
import { absoluteUrl, getSiteOrigin } from "@/lib/seo/site-url";

/**
 * robots.txt for Google Search Console + AI crawlers.
 * Sitemap URL must be absolute for GSC to read it reliably.
 */
export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteOrigin();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/monitoring/", "/gsc-verify/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/monitoring/", "/gsc-verify/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
      // AI / answer-engine crawlers (GEO / AEO)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteUrl,
  };
}
