import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { headers } from "next/headers";
import { getDomainConfig } from "@/lib/domain-config";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import GlobalHeroBanner from "@/components/layout/GlobalHeroBanner";

export async function generateMetadata(): Promise<Metadata> {
  const domain = headers().get("x-domain") || "";
  const config = getDomainConfig(domain);
  const isGeneBoyle =
    config.domain === "geneboyle.com" ||
    domain.replace(/^www\./, "").toLowerCase().includes("geneboyle.com");
  const title = isGeneBoyle
    ? `${config.neighborhood} | Dr. Gene Boyle | BHHS Nevada partner`
    : `${config.neighborhood} | Dr. Jan Duffy, REALTOR® | BHHS Nevada`;
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
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <GlobalHeroBanner />
        {children}
        <Analytics />
        <Script
          src="https://em.realscout.com/dist/rs-loading.js"
          strategy="lazyOnload"
        />
        <Script id="widget-tracker" strategy="lazyOnload">{
          `(function(w,i,d,g,e,t){w[\"WidgetTrackerObject\"]=g;(w[g]=w[g]||function(){(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e=\"script\"),(t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;e.parentNode.insertBefore(t,e);})(window,\"https://widgetbe.com/agent\",document,\"widgetTracker\");window.widgetTracker(\"create\",\"WT-XQHVYQWW\");window.widgetTracker(\"send\",\"pageview\");`
        }</Script>
      </body>
    </html>
  );
}
