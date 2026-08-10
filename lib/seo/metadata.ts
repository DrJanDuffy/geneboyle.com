import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo/site-url";

type PageMetaInput = {
  title: string;
  description: string;
  /** Site path beginning with `/` (e.g. `/relocation`). */
  path: string;
  keywords?: string[];
};

/**
 * Build page metadata with a full absolute canonical URL.
 * Per Google Search Central guidance for vibe-coded / JS sites:
 * use complete https:// canonicals, not relative paths.
 * @see https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
 */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetaInput): Metadata {
  const canonical = absoluteUrl(path);
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
