import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { getHeroImage } from "@/lib/guides/media";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import { agentInfo, officeInfo } from "@/lib/site-config";
import { answerFirst, marketAsOf, valleyAugust6 } from "@/lib/market/august-2026";
import { buildPageMetadata } from "@/lib/seo/metadata";
import SchemaScript from "@/components/SchemaScript";
import { generateFAQSchema } from "@/lib/schema";
import RealScoutOfficeWidget from "@/components/realscout/RealScoutOfficeWidget";

export const revalidate = 3600;

export const metadata: Metadata = buildPageMetadata({
  title:
    "Irvine to Las Vegas Relocation | Dr. Gene Boyle | BHHS Nevada partner",
  description:
    "Sell in Irvine and buy in Las Vegas with one coordinated timeline. Dr. Gene Boyle with partner Dr. Jan Duffy, BHHS Nevada Properties. Call (702) 222-1964.",
  path: "/",
  keywords: [
    "Irvine to Las Vegas relocation",
    "Dr Gene Boyle",
    "Las Vegas realtor",
    "California to Nevada move",
  ],
});

/**
 * Homepage = brand hub for SEO / GEO / AEO.
 * Brand stays the H1; section H2s are question-style with answer-first blurbs.
 * Deep content lives on topical child pages.
 */
const sections = [
  {
    id: "involve",
    h2: "What does an Irvine-to-Las Vegas move involve?",
    body: answerFirst.home,
    href: "/relocation",
    cta: "Open relocation plan →",
  },
  {
    id: "coordinate",
    h2: "How do Gene Boyle and Jan Duffy coordinate your move?",
    body: answerFirst.howWeWork,
    href: "/how-we-work",
    cta: "See how we work →",
  },
  {
    id: "areas",
    h2: "Which Las Vegas homes and areas fit your brief?",
    body: answerFirst.neighborhoods,
    href: "/neighborhoods",
    cta: "Compare areas →",
  },
  {
    id: "next",
    h2: "What should you do next?",
    body: answerFirst.contact,
    href: "/contact#schedule",
    cta: "Book a cross-state planning call →",
  },
] as const;

const topicHub = [
  { href: "/relocation", label: "Relocation" },
  { href: "/buyers", label: "Buyers" },
  { href: "/sellers", label: "Sellers" },
  { href: "/listings", label: "Homes" },
  { href: "/neighborhoods", label: "Areas" },
  { href: "/market-report", label: "Market report" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
] as const;

export default function Home() {
  const config = getPageDomainConfig();
  const homeHero = getHeroImage("home");

  const homeFaqSchema = generateFAQSchema(
    sections.map((s) => ({ question: s.h2, answer: s.body }))
  );

  return (
    <>
      <SchemaScript schema={homeFaqSchema} id="home-faq-schema" />
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
              Move from Irvine to Las Vegas with a local plan
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
                href="/contact#schedule"
                className="inline-flex justify-center bg-paper text-ink font-sans text-sm font-medium px-5 py-3 hover:bg-accent-faint transition-colors"
              >
                Book a planning call
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

        <RealScoutOfficeWidget />

        <section className="py-12 md:py-14 border-b border-[var(--line-soft)]">
          <div className="site-wrap">
            <p className="index-tag mb-4">
              <b>{marketAsOf}</b> — Valley benchmark
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { value: valleyAugust6.medianSf, label: "SF median" },
                { value: valleyAugust6.monthsSupply, label: "Months supply" },
                { value: valleyAugust6.medianDom, label: "Median DOM" },
                { value: valleyAugust6.activeSfListings, label: "Active SF listings" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl md:text-3xl text-ink">
                    {stat.value}
                  </p>
                  <p className="font-sans text-xs text-ink-muted mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 font-sans text-xs text-ink-muted max-w-3xl">
              {valleyAugust6.sourceNote} Not evergreen — verify before offers.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20" aria-labelledby="answers-heading">
          <div className="site-wrap">
            <h2
              id="answers-heading"
              className="sr-only"
            >
              Irvine to Las Vegas relocation answers
            </h2>
            <div className="space-y-14 md:space-y-16 max-w-3xl">
              {sections.map((section) => (
                <article key={section.id} id={section.id}>
                  <h2 className="font-display text-2xl md:text-3xl text-ink leading-tight">
                    {section.h2}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed">{section.body}</p>
                  <Link
                    href={section.href}
                    className="inline-flex mt-4 font-sans text-sm font-medium text-accent hover:underline underline-offset-4"
                  >
                    {section.cta}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-20" aria-labelledby="topic-hub-heading">
          <div className="site-wrap">
            <h2
              id="topic-hub-heading"
              className="font-display text-2xl md:text-3xl text-ink mb-6"
            >
              Explore topic pages
            </h2>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 font-sans text-sm">
              {topicHub.map((topic) => (
                <li key={topic.href}>
                  <Link
                    href={topic.href}
                    className="text-ink-soft hover:text-accent underline-offset-4 hover:underline"
                  >
                    {topic.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-ink text-paper py-16 md:py-20">
          <div className="site-wrap max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">
              Book a cross-state planning call
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
                href="/market-report"
                className="inline-flex justify-center border border-paper/30 text-paper font-sans text-sm font-medium px-5 py-3 hover:bg-paper/10 transition-colors"
              >
                Read {marketAsOf} market report
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
