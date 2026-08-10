import { siteConfig } from "@/lib/site-config";

/** Canonical production origin (no trailing slash). Prefer www. */
export function getSiteOrigin(): string {
  const fromEnv =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.NEXT_PUBLIC_SITE_HOST?.trim();

  if (fromEnv) {
    const withProtocol = fromEnv.startsWith("http")
      ? fromEnv
      : `https://${fromEnv}`;
    try {
      const url = new URL(withProtocol);
      // Prefer www for geneboyle.com to match redirects + GSC property
      if (url.hostname === "geneboyle.com") {
        url.hostname = "www.geneboyle.com";
      }
      return url.origin.replace(/\/$/, "");
    } catch {
      // fall through
    }
  }

  return siteConfig.url.replace(/\/$/, "");
}

export function absoluteUrl(path: string = "/"): string {
  const origin = getSiteOrigin();
  if (!path || path === "/") return origin;
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}
