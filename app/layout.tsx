import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { getDomainConfig } from "@/lib/domain-config";
import { siteConfig } from "@/lib/site-config";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import GlobalHeroBanner from "@/components/layout/GlobalHeroBanner";
import WebMCPProvider from "@/components/webmcp/WebMCPProvider";
import AIChatWidget from "@/components/chat/AIChatWidget";

function resolveHost(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_HOST?.trim();
  if (fromEnv) return fromEnv;
  try {
    return new URL(siteConfig.url).hostname;
  } catch {
    return "geneboyle.com";
  }
}

export function generateMetadata(): Metadata {
  const domain = resolveHost();
  const config = getDomainConfig(domain);
  const isGeneBoyle =
    config.domain === "geneboyle.com" ||
    domain
      .replace(/^www\./, "")
      .toLowerCase()
      .includes("geneboyle.com");
  const title = isGeneBoyle
    ? `${config.neighborhood} | Dr. Gene Boyle | BHHS Nevada partner`
    : `${config.neighborhood} | Dr. Jan Duffy, REALTOR® | BHHS Nevada`;
  const siteName = isGeneBoyle
    ? "Dr. Gene Boyle | geneboyle.com"
    : "Dr. Jan Duffy | Berkshire Hathaway HomeServices Nevada Properties";
  const ogImage = {
    url: "/og-image.jpg",
    width: 1200,
    height: 630,
    alt: isGeneBoyle
      ? "Irvine to Las Vegas relocation with Dr. Gene Boyle"
      : "Las Vegas real estate with Dr. Jan Duffy",
  };
  return {
    metadataBase: new URL("https://www.geneboyle.com"),
    title,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.heroHeadline,
      description: config.description,
      type: "website",
      url: "https://www.geneboyle.com",
      siteName,
      locale: "en_US",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: config.heroHeadline,
      description: config.description,
      images: [ogImage.url],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <GlobalHeroBanner />
        {children}
        <WebMCPProvider />
        <AIChatWidget />
        <Analytics />
        {/* Calendly — required for inline widgets on /contact, /home-valuation, /how-we-work */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
        {/* RealScout — load once, after hydration so it does not block LCP */}
        <Script
          src="https://em.realscout.com/dist/rs-loading.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
