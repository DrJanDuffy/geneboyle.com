import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import ClientToolsSection from "@/components/sections/ClientToolsSection";
import FAQSection from "@/components/sections/FAQSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import EditorialMediaBand from "@/components/editorial/EditorialMediaBand";
import {
  getAreaImage,
  getHeroImage,
  getSectionImage,
} from "@/lib/guides/media";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import { getFaqsForDomain } from "@/lib/faq-config";
import { agentInfo, officeInfo } from "@/lib/site-config";

export const revalidate = 3600;

const FAQ_SECTION_COPY: Record<string, { title: string; subtitle: string }> = {
  community: {
    title: "Community relocation FAQ",
    subtitle: "Common questions before you choose a Las Vegas Valley area",
  },
  luxury: {
    title: "Luxury home FAQ",
    subtitle: "What relocating buyers ask about higher-end inventory",
  },
  "55plus": {
    title: "55+ community FAQ",
    subtitle: "What active-adult buyers ask before touring",
  },
  search: {
    title: "Home search FAQ",
    subtitle: "Straight answers for Irvine-to-Las Vegas movers",
  },
  lifestyle: {
    title: "Moving to Las Vegas FAQ",
    subtitle: "What relocating buyers ask most often",
  },
  investment: {
    title: "Investment property FAQ",
    subtitle: "Process and market context for investors",
  },
};

export default function Home() {
  const config = getPageDomainConfig();
  const faqs = getFaqsForDomain(config.pageType, config.domain);
  const faqCopy =
    FAQ_SECTION_COPY[config.pageType] ?? FAQ_SECTION_COPY.search;
  const faqTitle =
    config.pageType === "community" || config.pageType === "55plus"
      ? `${config.neighborhood} FAQ`
      : faqCopy.title;
  const homeHero = getHeroImage("home");

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: `Dr. Gene Boyle - ${config.neighborhood}`,
    url: "https://www.geneboyle.com",
    telephone: "+17022221964",
    address: {
      "@type": "PostalAddress",
      streetAddress: officeInfo.address.street,
      addressLocality: officeInfo.address.city,
      addressRegion: officeInfo.address.state,
      postalCode: officeInfo.address.zip,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        {/* Hero — Discovery Loop composition: brand + one line + one CTA + full-bleed image */}
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
          {/* Bottom-only scrim so photography stays bright; text remains readable */}
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

            <div className="mt-14 flex justify-center sm:justify-start">
              <a
                href="#approach"
                className="font-sans text-[0.65rem] uppercase tracking-[0.28em] text-paper/55 animate-scroll-pulse"
              >
                Scroll
              </a>
            </div>
          </div>
        </section>

        {/* Problem frame — DL “bottlenecked” pattern */}
        <section className="py-20 md:py-28">
          <div className="site-wrap max-w-3xl">
            <h2 className="font-display text-3xl md:text-5xl text-ink leading-tight reveal">
              Cross-state moves are{" "}
              <em className="italic text-accent">bottlenecked</em>.
            </h2>
            <p className="mt-6 text-lg md:text-xl leading-relaxed reveal reveal-delay-1">
              Selling in Orange County, buying in the Las Vegas Valley, timing
              school calendars, and touring inventory are still run as sequential
              human loops. We compress that loop with one California planner and
              one Las Vegas partner team.
            </p>
          </div>
        </section>

        <EditorialMediaBand image={getSectionImage("approach")} />

        <hr className="editorial-rule site-wrap" />

        {/* 01 Approach */}
        <section id="approach" className="scroll-mt-28 py-16 md:py-24">
          <div className="site-wrap">
            <p className="index-tag mb-6">
              <b>01</b> — The Approach
            </p>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-5">
                <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight">
                  Automating the{" "}
                  <em className="italic text-accent">relocation loop</em>.
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed">
                <p>
                  Dr. Gene Boyle ({agentInfo.licenseLabel}) runs the California
                  side from {officeInfo.address.full}. Dr. Jan Duffy (
                  {agentInfo.partnerAgent.license}) and BHHS Nevada Properties
                  cover Las Vegas showings, offers, and closing logistics.
                </p>
                <p>
                  On this site you get live MLS search (RealScout), Calendly
                  booking, AI answers for quick questions, and market context —
                  without rebuilding native CRM sync.
                </p>
                <Link
                  href="/how-we-work"
                  className="inline-flex font-sans text-sm font-medium text-accent hover:text-accent-soft underline-offset-4 hover:underline"
                >
                  See every tool on this site →
                </Link>
              </div>
            </div>

            <div className="mt-14 grid md:grid-cols-3 gap-10 border-t border-[var(--line-soft)] pt-12">
              {[
                {
                  title: "Start with the search",
                  body: "RealScout listings and saved searches keep inventory in one loop.",
                },
                {
                  title: "Act as your first customer",
                  body: "We use the same Calendly + CRM path we recommend to clients.",
                },
                {
                  title: "Close the loop in Nevada",
                  body: "Local partner coverage for tours, negotiations, and settlement.",
                },
              ].map((step) => (
                <div key={step.title}>
                  <h3 className="font-sans text-base font-semibold text-ink mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <EditorialMediaBand image={getSectionImage("areas")} />

        {/* Search band */}
        <section className="bg-ink text-paper py-16 md:py-20">
          <div className="site-wrap text-center">
            <p className="kicker text-paper/50 mb-4">Live MLS</p>
            <h2 className="font-display text-3xl md:text-4xl mb-8">
              Search the Valley.
            </h2>
            <div className="flex justify-center">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<realscout-simple-search agent-encoded-id="${config.realscoutAgentId}"></realscout-simple-search>`,
                }}
              />
            </div>
          </div>
        </section>

        <RealScoutListings />

        {/* 02 Mission */}
        <section id="mission" className="scroll-mt-28 py-20 md:py-28 bg-paper-2">
          <div className="site-wrap max-w-4xl">
            <p className="index-tag mb-6">
              <b>02</b> — Mission
            </p>
            <p className="font-display text-2xl md:text-4xl leading-snug text-ink">
              Our mission is straightforward: help Irvine and Orange County
              households relocate to Las Vegas with fewer handoffs, clearer
              timelines, and a single phone number —{" "}
              <a
                href={agentInfo.phoneTel}
                className="text-accent italic hover:text-accent-soft"
              >
                {agentInfo.phoneFormatted}
              </a>
              .
            </p>
          </div>
        </section>

        <EditorialMediaBand image={getSectionImage("mission")} />

        <ClientToolsSection />

        <EditorialMediaBand image={getSectionImage("tools")} />

        {/* 03 Areas */}
        <section id="areas" className="scroll-mt-28 py-16 md:py-24">
          <div className="site-wrap">
            <p className="index-tag mb-6">
              <b>03</b> — Areas
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-4 max-w-2xl">
              Where relocators look first.
            </h2>
            <p className="max-w-prose text-lg mb-10">
              Explore neighborhood pages for Summerlin, Henderson, and more —
              then tour with the Las Vegas partner team.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10">
              {[
                ["summerlin", "Summerlin"],
                ["henderson", "Henderson"],
                ["green-valley", "Green Valley"],
                ["the-ridges", "The Ridges"],
                ["skye-canyon", "Skye Canyon"],
                ["inspirada", "Inspirada"],
              ].map(([slug, label]) => {
                const image = getAreaImage(slug);
                return (
                  <Link
                    key={slug}
                    href={`/neighborhoods/${slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-ink mb-3">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        quality={55}
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <span className="font-sans text-sm text-ink group-hover:text-accent underline-offset-4 group-hover:underline">
                      {label}
                    </span>
                  </Link>
                );
              })}
            </div>
            <Link
              href="/neighborhoods"
              className="font-sans text-sm text-accent font-medium hover:underline underline-offset-4"
            >
              All areas →
            </Link>
          </div>
        </section>

        <ReviewsSection />
        <FAQSection faqs={faqs} title={faqTitle} subtitle={faqCopy.subtitle} />

        <EditorialMediaBand image={getSectionImage("next")} />

        {/* 04 Next */}
        <section
          id="next"
          className="scroll-mt-28 py-20 md:py-28 bg-ink text-paper"
        >
          <div className="site-wrap max-w-3xl">
            <p className="index-tag text-paper/45 mb-6">
              <b className="text-paper/80">04</b> — What&apos;s next
            </p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6">
              Book the first loop.
            </h2>
            <p className="text-lg text-paper/75 mb-10 max-w-prose">
              Pick a Calendly slot or call. We will map sell/buy timing, target
              areas, and your first Las Vegas tour window.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact#schedule"
                className="inline-flex justify-center bg-paper text-ink font-sans text-sm font-medium px-5 py-3 hover:bg-accent-faint transition-colors"
              >
                Schedule on Calendly
              </Link>
              <Link
                href="/home-valuation"
                className="inline-flex justify-center border border-paper/30 text-paper font-sans text-sm font-medium px-5 py-3 hover:bg-paper/10 transition-colors"
              >
                Start a home valuation
              </Link>
            </div>
            <p className="mt-10 font-sans text-xs text-paper/45">
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
