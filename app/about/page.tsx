import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Link from "next/link";
import { Phone } from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";
import EditorialVisualHero from "@/components/editorial/EditorialVisualHero";
import EditorialMediaBand from "@/components/editorial/EditorialMediaBand";
import ReviewsSection from "@/components/sections/ReviewsSection";
import { getMarketingImage, getSectionImage } from "@/lib/guides/media";
import { answerFirst } from "@/lib/market/august-2026";
import SchemaScript from "@/components/SchemaScript";
import { buildHubPageSchema } from "@/lib/seo/guide-schema";

export const metadata: Metadata = buildPageMetadata({
  title: "Meet Dr. Gene Boyle and Dr. Jan Duffy | Irvine to Las Vegas",
  description: "Meet Dr. Gene Boyle (California DRE #02282581) and Las Vegas partner Dr. Jan Duffy (S.0197614.LLC), BHHS Nevada Properties. Call (702) 222-1964.",
  path: "/about",
  keywords: [
    "Dr Gene Boyle",
    "Irvine to Las Vegas relocation",
    "California DRE 02282581",
    "Las Vegas relocation realtor",
    "BHHS Nevada Properties partner",
  ],
});

const aboutFaqs = [
  {
    question: "Who is Dr. Gene Boyle?",
    answer: answerFirst.about,
  },
  {
    question: "Who handles Las Vegas tours?",
    answer: `${agentInfo.partnerAgent.name} (${agentInfo.partnerAgent.license}) covers Valley tours, offers, and closing with Berkshire Hathaway HomeServices Nevada Properties.`,
  },
  {
    question: "What phone number should clients use?",
    answer: `Client CTA is ${agentInfo.phoneFormatted}. Email ${agentInfo.email}.`,
  },
] as const;

const pageSchemas = buildHubPageSchema({
  path: "/about",
  name: "Meet Dr. Gene Boyle and Dr. Jan Duffy | Irvine to Las Vegas",
  description: answerFirst.about,
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ],
  faqs: [...aboutFaqs],
  serviceName: "Irvine to Las Vegas relocation partnership",
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: agentInfo.name,
  jobTitle: agentInfo.title,
  description: siteConfig.description,
  telephone: "+17022221964",
  email: agentInfo.email,
  url: `${siteConfig.url}/about`,
  address: {
    "@type": "PostalAddress",
    streetAddress: officeInfo.address.street,
    addressLocality: officeInfo.address.city,
    addressRegion: officeInfo.address.state,
    postalCode: officeInfo.address.zip,
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Real Estate License",
    credentialNumber: agentInfo.licenseLabel,
  },
  knowsAbout: [
    "Irvine to Las Vegas relocation",
    "Las Vegas real estate",
    "Henderson properties",
    "Summerlin homes",
    "California relocation",
  ],
};

const focus = [
  {
    title: "California-side planning",
    body: "Sell timing, equity math, and move logistics from Irvine and Orange County before you buy in Nevada.",
  },
  {
    title: "Las Vegas partner coverage",
    body: `${agentInfo.partnerAgent.name} (${agentInfo.partnerAgent.license}) handles Valley tours, offers, and closing with BHHS Nevada Properties.`,
  },
  {
    title: "One client phone number",
    body: `Every CTA on this site uses ${agentInfo.phoneFormatted} — no swapped lines.`,
  },
  {
    title: "Native platform stack",
    body: "RealScout MLS, Calendly, and Follow Up Boss via native integrations — we do not rebuild sync that already works.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <SchemaScript schema={pageSchemas} id="about-hub-schema" />
      <Navbar />
      <main className="pb-16">
        <EditorialVisualHero
          image={getMarketingImage("about")}
          kicker={siteConfig.brandName}
          title="Meet Dr. Gene Boyle —"
          accent="and Dr. Jan Duffy"
          lede={answerFirst.about}
          ctas={[
            {
              href: "/contact#schedule",
              label: "Meet the team and start a conversation",
              variant: "primary",
            },
            {
              href: agentInfo.phoneTel,
              label: `Call ${agentInfo.phoneFormatted}`,
              variant: "secondary",
            },
          ]}
        />

        <EditorialMediaBand image={getSectionImage("areas")} />

        <section className="site-wrap mb-20">
          <p className="index-tag mb-4">
            <b>01</b> — Who
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-4">
            Who is Dr. Gene Boyle?
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mb-10">
            {agentInfo.name} ({agentInfo.licenseLabel}) plans Irvine and Orange
            County exits from {officeInfo.address.full} — sell timing, equity
            math, and move logistics before you buy in Nevada.
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-4">
            Who is Dr. Jan Duffy?
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl">
            {agentInfo.partnerAgent.name} ({agentInfo.partnerAgent.license})
            covers Las Vegas Valley tours, offers, and closing with Berkshire
            Hathaway HomeServices Nevada Properties at{" "}
            {officeInfo.lasVegasOffice.full}.
          </p>
        </section>

        <section className="bg-paper-2 py-16 mb-20">
          <div className="site-wrap">
            <p className="index-tag mb-4">
              <b>02</b> — Partnership
            </p>
            <h2 className="font-display text-3xl text-ink mb-10">
              How does the partnership support a relocation?
            </h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 border-t border-[var(--line-soft)] pt-12">
              {focus.map((item) => (
                <article key={item.title}>
                  <h3 className="font-sans text-base font-semibold text-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed">{item.body}</p>
                </article>
              ))}
            </div>
            <Link
              href="/how-we-work"
              className="inline-flex mt-10 font-sans text-sm font-medium text-accent hover:underline underline-offset-4"
            >
              See every tool on this site →
            </Link>
          </div>
        </section>

        <section className="site-wrap mb-20">
          <p className="index-tag mb-4">
            <b>03</b> — NAP
          </p>
          <h2 className="font-display text-3xl text-ink mb-6">Where do we work?</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
            <div>
              <h3 className="font-sans text-sm font-semibold text-ink mb-2">
                Planning address
              </h3>
              <p>{officeInfo.address.full}</p>
            </div>
            <div>
              <h3 className="font-sans text-sm font-semibold text-ink mb-2">
                Las Vegas partner office
              </h3>
              <p>{officeInfo.lasVegasOffice.full}</p>
            </div>
          </div>
          <p className="mt-8 font-sans text-sm text-ink-muted">
            {agentInfo.name} · {agentInfo.licenseLabel} · Partner{" "}
            {agentInfo.partnerAgent.name} ({agentInfo.partnerAgent.license})
          </p>
          <div className="mt-6 flex flex-wrap gap-4 font-sans text-sm">
            <Link
              href="/google-business"
              className="text-accent font-medium hover:underline underline-offset-4"
            >
              Google Business Profile
            </Link>
            <Link
              href="/contact"
              className="text-ink-soft hover:text-accent hover:underline underline-offset-4"
            >
              Contact & map
            </Link>
          </div>
        </section>

        <ReviewsSection />

        <section className="site-wrap mt-16">
          <div className="bg-ink text-paper py-14 px-6 md:px-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Ready for the first conversation?
            </h2>
            <p className="text-paper/75 mb-8 max-w-prose">
              Book Calendly or call {agentInfo.phoneFormatted}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 font-sans text-sm">
              <Link
                href="/contact#schedule"
                className="inline-flex justify-center bg-paper text-ink px-5 py-3 hover:bg-accent-faint transition-colors"
              >
                Schedule
              </Link>
              <a
                href={agentInfo.phoneTel}
                className="inline-flex justify-center items-center gap-2 border border-paper/30 text-paper px-5 py-3 hover:bg-paper/10 transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {agentInfo.phoneFormatted}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
