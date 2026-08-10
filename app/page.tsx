import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { getHeroImage } from "@/lib/guides/media";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";

export const revalidate = 3600;

/**
 * Homepage is a short brand hub for SEO / GEO / AEO:
 * entity declaration + one answer + topic-cluster links.
 * Long-form content lives on dedicated topical pages.
 */
const topicHub = [
  {
    href: "/relocation",
    label: "Relocation",
    answer:
      "Plan an Irvine or Orange County sale alongside a Las Vegas Valley purchase with one California planner and one Nevada partner team.",
  },
  {
    href: "/how-we-work",
    label: "How we work",
    answer:
      "Use RealScout MLS search, Calendly booking, valuation intake, and market pages — without rebuilding native CRM sync.",
  },
  {
    href: "/neighborhoods",
    label: "Areas",
    answer:
      "Compare Summerlin, Henderson, Green Valley, The Ridges, and other Valley communities before you tour.",
  },
  {
    href: "/listings",
    label: "Homes",
    answer:
      "Search live Las Vegas Valley MLS inventory with RealScout on the listings page.",
  },
  {
    href: "/buyers",
    label: "Buyers",
    answer:
      "Buyer paths for California relocators, first-time buyers, and luxury purchasers.",
  },
  {
    href: "/sellers",
    label: "Sellers",
    answer:
      "Seller paths for relocation sales, downsizing, move-up, and sensitive timelines.",
  },
  {
    href: "/faq",
    label: "FAQ",
    answer:
      "Direct answers to buying, selling, and Irvine-to-Las Vegas relocation questions.",
  },
  {
    href: "/about",
    label: "About",
    answer:
      "Meet Dr. Gene Boyle, California DRE credentials, and Las Vegas partner Dr. Jan Duffy.",
  },
] as const;

export default function Home() {
  const config = getPageDomainConfig();
  const homeHero = getHeroImage("home");

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${siteConfig.url}/#organization`,
    name: `Dr. Gene Boyle - ${config.neighborhood}`,
    url: siteConfig.url,
    telephone: "+17022221964",
    email: agentInfo.email,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: officeInfo.address.street,
      addressLocality: officeInfo.address.city,
      addressRegion: officeInfo.address.state,
      postalCode: officeInfo.address.zip,
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
    },
    knowsAbout: [
      "Irvine to Las Vegas relocation",
      "Las Vegas real estate",
      "Henderson homes",
      "Summerlin homes",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.fullName,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, websiteSchema]),
        }}
      />
      <Navbar />
      <main>
        <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-ink text-paper">
          <Image
            src={homeHero.src}
            alt={homeHero.alt}
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={70}
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent"
            aria-hidden="true"
          />

          <div className="relative z-10 site-wrap pb-16 pt-32 md:pb-20 md:pt-40">
            <p className="kicker text-paper/70 animate-fade-in">
              Continuous relocation planning
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] tracking-tight text-paper animate-fade-up">
              Dr. Gene
              <br />
              <em className="not-italic text-accent-soft">Boyle</em>
            </h1>
            <p className="mt-6 max-w-xl font-serif text-lg md:text-xl text-paper/80 animate-fade-up reveal-delay-1">
              {config.heroSubheadline ||
                "Irvine to Las Vegas relocation — California-side planning with Las Vegas partner Dr. Jan Duffy."}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center animate-fade-up reveal-delay-2">
              <Link
                href="/listings"
                className="inline-flex justify-center bg-paper text-ink font-sans text-sm font-medium px-5 py-3 hover:bg-accent-faint transition-colors"
              >
                Search Las Vegas homes
              </Link>
              <a
                href={agentInfo.phoneTel}
                className="inline-flex justify-center border border-paper/35 text-paper font-sans text-sm font-medium px-5 py-3 hover:bg-paper/10 transition-colors"
              >
                Call {agentInfo.phoneFormatted}
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="site-wrap max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight">
              One loop for a cross-state move.
            </h2>
            <p className="mt-5 text-lg leading-relaxed">
              Selling in Orange County and buying in the Las Vegas Valley should
              not run as disconnected handoffs. {agentInfo.name} (
              {agentInfo.licenseLabel}) plans the California side from{" "}
              {officeInfo.address.city}; {agentInfo.partnerAgent.name} (
              {agentInfo.partnerAgent.license}) covers Valley tours and closing
              with Berkshire Hathaway HomeServices Nevada Properties.
            </p>
          </div>
        </section>

        <section className="pb-16 md:pb-24" aria-labelledby="topic-hub-heading">
          <div className="site-wrap">
            <p className="index-tag mb-4">
              <b>Explore</b> — Topic pages
            </p>
            <h2
              id="topic-hub-heading"
              className="font-display text-3xl md:text-4xl text-ink mb-3 max-w-2xl"
            >
              Shorter pages, clearer answers.
            </h2>
            <p className="max-w-prose text-lg mb-10">
              Deep content lives on dedicated routes for search, answer engines,
              and AI citations — open the page that matches your question.
            </p>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 border-t border-[var(--line-soft)] pt-12">
              {topicHub.map((topic) => (
                <article key={topic.href}>
                  <h3 className="font-sans text-base font-semibold text-ink mb-2">
                    <Link
                      href={topic.href}
                      className="hover:text-accent underline-offset-4 hover:underline"
                    >
                      {topic.label}
                    </Link>
                  </h3>
                  <p className="leading-relaxed text-ink-soft">{topic.answer}</p>
                  <Link
                    href={topic.href}
                    className="inline-flex mt-3 font-sans text-sm font-medium text-accent hover:underline underline-offset-4"
                  >
                    Open {topic.label.toLowerCase()} →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink text-paper py-16 md:py-20">
          <div className="site-wrap max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">
              Book the first conversation.
            </h2>
            <p className="text-lg text-paper/75 mb-8 max-w-prose">
              Schedule on Calendly or call {agentInfo.phoneFormatted}. We map
              sell/buy timing, target areas, and your first Las Vegas tour
              window.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/contact#schedule"
                className="inline-flex justify-center bg-paper text-ink font-sans text-sm font-medium px-5 py-3 hover:bg-accent-faint transition-colors"
              >
                Schedule on Calendly
              </Link>
              <Link
                href="/faq"
                className="inline-flex justify-center border border-paper/30 text-paper font-sans text-sm font-medium px-5 py-3 hover:bg-paper/10 transition-colors"
              >
                Read the FAQ
              </Link>
            </div>
            <p className="font-sans text-sm text-paper/60">
              {officeInfo.address.full}
            </p>
            <p className="mt-1 font-sans text-xs text-paper/45">
              {agentInfo.name} · {agentInfo.licenseLabel} · Partner{" "}
              {agentInfo.partnerAgent.name} ({agentInfo.partnerAgent.license})
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
