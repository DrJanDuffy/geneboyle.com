import { NextResponse } from "next/server";

/**
 * Serves Google Search Console HTML-file verification when configured.
 * Rewritten from `/google*.html` in next.config.js (avoids /api Python rewrite).
 *
 * Env:
 *   GOOGLE_SITE_VERIFICATION_FILE=googleXXXXXXXX.html
 *   GOOGLE_SITE_VERIFICATION_CONTENT=<exact body from Google>
 */
export async function GET(
  _request: Request,
  context: { params: Promise<{ file: string }> }
) {
  const { file } = await context.params;
  const expected = process.env.GOOGLE_SITE_VERIFICATION_FILE?.trim();
  const content = process.env.GOOGLE_SITE_VERIFICATION_CONTENT?.trim();

  if (!expected || !content) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const normalized = file.endsWith(".html") ? file : `${file}.html`;
  if (normalized !== expected && file !== expected) {
    return new NextResponse("Not Found", { status: 404 });
  }

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      "X-Robots-Tag": "noindex",
    },
  });
}
