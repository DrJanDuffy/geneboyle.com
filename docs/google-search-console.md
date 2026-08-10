# Google Search Console — geneboyle.com

Prepare and connect the production site so Google can crawl, verify ownership, and ingest the sitemap.

## Already in the codebase

| Asset | URL / location |
| --- | --- |
| Sitemap | `https://www.geneboyle.com/sitemap.xml` (`app/sitemap.ts`) |
| Robots | `https://www.geneboyle.com/robots.txt` (`app/robots.ts`) |
| Canonical host | `www.geneboyle.com` (301 from apex in `next.config.js`) |
| Indexing meta | `robots: index, follow` + `googleBot` in `app/layout.tsx` |
| Verification | Env-driven meta tag and optional HTML file rewrite |

## 1. Add the property in Search Console

1. Open [Google Search Console](https://search.google.com/search-console).
2. Add property:
   - **URL-prefix (recommended first):** `https://www.geneboyle.com`
   - Optional later: **Domain** property `geneboyle.com` (covers www + apex via DNS TXT).
3. Prefer the **www** prefix — it matches the site’s permanent redirect and `metadataBase`.

## 2. Verify ownership (pick one)

### A. HTML meta tag (fastest with Vercel)

1. In GSC choose **HTML tag**.
2. Copy the `content` value only (long token).
3. In Vercel → Project → Settings → Environment Variables (Production):
   - `GOOGLE_SITE_VERIFICATION` = that token
   - `NEXT_PUBLIC_SITE_URL` = `https://www.geneboyle.com`
4. Redeploy Production.
5. View source on the homepage and confirm:
   `<meta name="google-site-verification" content="…">`
6. Click **Verify** in GSC.

### B. HTML file

1. In GSC choose **HTML file** and note the filename + file body.
2. Set Production env:
   - `GOOGLE_SITE_VERIFICATION_FILE=googleXXXX.html`
   - `GOOGLE_SITE_VERIFICATION_CONTENT=<exact body from Google>`
3. Redeploy, then open `https://www.geneboyle.com/googleXXXX.html`.
4. Click **Verify** in GSC.

### C. DNS TXT (Domain property)

1. Add the TXT record Google shows at your DNS host (Cloudflare DNS-only / gray cloud).
2. Do not orange-cloud proxy if it conflicts with Vercel SSL.
3. Verify the Domain property in GSC.

See also: [Verify your site ownership](https://support.google.com/webmasters/answer/9008080).

## 3. Submit the sitemap

1. GSC → **Sitemaps**.
2. Submit: `sitemap.xml` (or full `https://www.geneboyle.com/sitemap.xml`).
3. Confirm status becomes **Success** (can take minutes to days).
4. Cross-check publicly:
   - `https://www.geneboyle.com/robots.txt` lists the sitemap
   - `https://www.geneboyle.com/sitemap.xml` returns URL entries

## 4. Post-verify checklist

- [ ] **URL Inspection** on `/`, `/relocation`, `/listings`, `/neighborhoods/summerlin`
- [ ] Request indexing for the homepage after a major content deploy (sparingly)
- [ ] **Settings → users** — add anyone who needs access
- [ ] Link **Google Analytics** / **Vercel Analytics** if used for performance context
- [ ] Confirm NAP on site matches Google Business Profile
- [ ] Watch **Page indexing** and **Experience** reports for the first 2–4 weeks

## 5. Env reference

Copy from `.env.gsc.example` into Vercel Production (never commit real tokens).

```bash
GOOGLE_SITE_VERIFICATION=…
NEXT_PUBLIC_SITE_URL=https://www.geneboyle.com
# optional HTML-file method:
# GOOGLE_SITE_VERIFICATION_FILE=googleXXXX.html
# GOOGLE_SITE_VERIFICATION_CONTENT=…
```

## Notes

- Apex `geneboyle.com` 301s to `www` — submit/inspect the www URLs.
- `/api/`, `/admin/`, `/monitoring/`, `/gsc-verify/` are disallowed in `robots.txt`.
- Do not block `Googlebot` or `Google-Extended` if you want Search + AI surfaces.
- Cloudflare: keep the Vercel hostname DNS-only (gray cloud) to avoid SSL conflicts.
- Per-page **absolute** canonicals (`https://www.geneboyle.com/…`) via `lib/seo/metadata.ts` — not a single root `/` canonical.

## 6. Search Central updates to use after verify (2026)

Aligned with [What’s new on Google Search Central](https://developers.google.com/search/docs/appearance/whats-new) as of July–August 2026:

| Feature | Why it matters for this site | Action |
| --- | --- | --- |
| [Platform properties](https://developers.google.com/search/blog/2026/07/search-console-social-video-platforms) (global) | Track how Instagram, TikTok, X, YouTube posts perform in Search / Discover / News | After www property works, add platform properties for any active Gene Boyle / Jan Duffy social or YouTube channels |
| [Social & video performance guide](https://developers.google.com/search/docs/appearance/social-video) | Guidance for creators publishing off-site | Prefer first-hand relocation stories with clear titles; link back to canonical site URLs |
| [Generative AI performance reports](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) in Search Console | See how pages appear in AI surfaces | Enable / review Gen AI reports in GSC once available on the property |
| Search Profiles / Gen AI controls (Q2 ’26 Search News) | Manage how site content is used in generative experiences | Review new Search Console controls after verify; do not block Googlebot unless intentional |
| SEO for vibe-coded websites (Search Central YouTube, Apr 2026) | JS-built sites need real value, full canonicals, render testing, GSC | Done in codebase: absolute canonicals, sitemap, robots, deferred third-party JS (Calendly). Still: verify property + URL Inspection on key pages |
| Internal search / Indexing Report (Search Off the Record, Jul 2026) | Faceted/search URLs can waste crawl | Keep `robots.txt` disallow on `/api/` etc.; avoid indexing thin filter URLs |

### Upcoming event (optional)

- **Search Central Deep Dive Europe 2026** — Barcelona, Sep 30–Oct 2, 2026 ([announcement](https://developers.google.com/search/blog/2026/07/search-central-deep-dive-europe-barcelona)).

### Podcast / crawl hygiene reminders

- Don’t leave internal site-search result pages crawlable at scale.
- Indexing report “Excluded” rows are often intentional — inspect before panicking.
- Markdown / `llms.txt` is optional; unique, useful HTML pages still matter more for Search.
