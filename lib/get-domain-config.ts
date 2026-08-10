import { getDomainConfig, type DomainConfig } from "./domain-config";
import { siteConfig } from "./site-config";

/**
 * Resolve domain config without reading request headers.
 * Using headers() forces dynamic rendering (no-store), which hurts TTFB/LCP
 * and blocks bfcache. This project ships for geneboyle.com via siteConfig.url;
 * override with NEXT_PUBLIC_SITE_HOST when needed.
 */
export function getPageDomainConfig(): DomainConfig {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_HOST?.trim();
  const host =
    fromEnv ||
    (() => {
      try {
        return new URL(siteConfig.url).hostname;
      } catch {
        return "geneboyle.com";
      }
    })();

  return getDomainConfig(host);
}
