import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import CalendlyWidget from "@/components/calendly/CalendlyWidget";
import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";
import EditorialVisualHero from "@/components/editorial/EditorialVisualHero";
import EditorialMediaBand from "@/components/editorial/EditorialMediaBand";
import { getMarketingImage, getSectionImage } from "@/lib/guides/media";
import { answerFirst } from "@/lib/market/august-2026";
import SchemaScript from "@/components/SchemaScript";
import { buildHubPageSchema } from "@/lib/seo/guide-schema";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Dr. Gene Boyle | Irvine to Las Vegas Relocation",
  description: "Contact Dr. Gene Boyle for Irvine to Las Vegas relocation. Schedule on Calendly, get directions, or call (702) 222-1964. Partner support from Dr. Jan Duffy, BHHS Nevada Properties.",
  path: "/contact",
  keywords: [
    "contact Gene Boyle",
    "Irvine to Las Vegas relocation contact",
    "Calendly real estate consultation",
    "Las Vegas realtor contact",
    "schedule real estate appointment",
  ],
});

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "RealEstateAgent",
    name: agentInfo.name,
    telephone: "+17022221964",
    email: agentInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: officeInfo.address.street,
      addressLocality: officeInfo.address.city,
      addressRegion: officeInfo.address.state,
      postalCode: officeInfo.address.zip,
      addressCountry: "US",
    },
  },
};

const areas = [
  "Las Vegas",
  "Henderson",
  "Summerlin",
  "Green Valley",
  "North Las Vegas",
  "Southern Highlands",
  "Skye Canyon",
  "Centennial Hills",
  "The Ridges",
  "Inspirada",
  "Mountains Edge",
  "Spring Valley",
] as const;

const faqs = [
  {
    q: "What should I expect during my first consultation?",
    a: "A no-pressure conversation about your relocation timeline, budget, and target areas. We map Irvine sell timing against Las Vegas buy windows and answer process questions.",
  },
  {
    q: "Do I need to be pre-approved before scheduling a showing?",
    a: "A pre-approval strengthens offers, but it is not required for an initial consult. We can introduce trusted local lenders when you are ready.",
  },
  {
    q: "How quickly can you respond to inquiries?",
    a: "Calls, texts, and emails typically get a reply within 2 hours during 9am–6pm. For urgent matters, call or text (702) 222-1964.",
  },
  {
    q: "Do you charge for consultations?",
    a: "No. Initial consultations are free and without obligation.",
  },
] as const;

const pageSchemas = buildHubPageSchema({
  path: "/contact",
  name: "Contact Dr. Gene Boyle | Irvine to Las Vegas Relocation",
  description: answerFirst.contact,
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ],
  faqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
  serviceName: "Irvine to Las Vegas relocation consultation",
});

export default function ContactPage() {
  return (
    <>
      <SchemaScript schema={contactSchema} id="contact-page-type-schema" />
      <SchemaScript schema={pageSchemas} id="contact-page-schema" />
      <Navbar />
      <main className="pb-16">
        <EditorialVisualHero
          image={getMarketingImage("contact")}
          kicker={siteConfig.fullName}
          title="Plan Your Irvine-to-Las Vegas —"
          accent="move"
          lede={answerFirst.contact}
          ctas={[
            { href: "#schedule", label: "Book a call", variant: "primary" },
            {
              href: agentInfo.phoneTel,
              label: `Call ${agentInfo.phoneFormatted}`,
              variant: "secondary",
            },
          ]}
        />

        <EditorialMediaBand image={getSectionImage("areas")} />

        <section className="site-wrap mb-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5 space-y-8">
              <div>
                <p className="index-tag mb-3">
                  <b>01</b> — Intake
                </p>
                <h2 className="font-display text-2xl text-ink mb-4">
                  What should I include in my first message?
                </h2>
                <p className="leading-relaxed mb-6">
                  Buying, selling, relocating, or second home; current city;
                  target area; price band; approximate square feet; timing; and
                  preferred call method. {agentInfo.name} (
                  {agentInfo.licenseLabel}) coordinates with Las Vegas partner{" "}
                  {agentInfo.partnerAgent.name} ({agentInfo.partnerAgent.license}
                  ).
                </p>
              </div>

              <div className="space-y-6 border-t border-[var(--line-soft)] pt-8">
                <div className="flex items-start gap-4">
                  <Phone
                    className="h-5 w-5 text-accent mt-1 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-ink mb-1">
                      Phone (call or text)
                    </h3>
                    <a
                      href={agentInfo.phoneTel}
                      className="font-display text-2xl text-accent hover:text-accent-soft"
                    >
                      {agentInfo.phoneFormatted}
                    </a>
                    <p className="text-sm mt-1">Available 7 days, 9am–6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail
                    className="h-5 w-5 text-accent mt-1 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-ink mb-1">
                      Email
                    </h3>
                    <a
                      href={`mailto:${agentInfo.email}`}
                      className="text-accent hover:underline font-medium"
                    >
                      {agentInfo.email}
                    </a>
                    <p className="text-sm mt-1">Typical reply within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin
                    className="h-5 w-5 text-accent mt-1 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-ink mb-1">
                      Addresses
                    </h3>
                    <address className="not-italic leading-relaxed">
                      <span className="block mb-2">
                        Planning: {officeInfo.address.full}
                      </span>
                      <span className="block">
                        Las Vegas partner office:{" "}
                        {officeInfo.lasVegasOffice.full}
                      </span>
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock
                    className="h-5 w-5 text-accent mt-1 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-ink mb-1">
                      Hours
                    </h3>
                    <p className="leading-relaxed">
                      Monday–Friday: 9:00 AM – 6:00 PM
                      <br />
                      Saturday–Sunday: 10:00 AM – 4:00 PM
                    </p>
                    <p className="text-sm mt-1">
                      Appointments available outside these hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-[var(--line)] p-5">
                <iframe
                  src="https://maps.google.com/maps?q=9406+W+Lake+Mead+Blvd+Suite+100,+Las+Vegas,+NV+89134&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Berkshire Hathaway HomeServices Nevada Properties — Las Vegas office"
                  className="w-full"
                />
                <div className="flex flex-wrap gap-4 mt-4 font-sans text-sm">
                  <a
                    href="https://www.google.com/maps/dir//9406+W+Lake+Mead+Blvd+Suite+100,+Las+Vegas,+NV+89134"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-medium hover:underline underline-offset-4"
                  >
                    Get directions
                  </a>
                  <a
                    href="https://maps.google.com/?q=Berkshire+Hathaway+HomeServices+Nevada+Properties+9406+W+Lake+Mead+Blvd+Las+Vegas+NV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-soft hover:text-accent hover:underline underline-offset-4"
                  >
                    View on Google Maps
                  </a>
                  <Link
                    href="/google-business"
                    className="text-ink-soft hover:text-accent hover:underline underline-offset-4"
                  >
                    View Google reviews
                  </Link>
                </div>
              </div>

              <p className="font-sans text-sm text-ink-muted">
                {agentInfo.name} · {agentInfo.licenseLabel}
                <br />
                Partner {agentInfo.partnerAgent.name} (
                {agentInfo.partnerAgent.license}) · BHHS Nevada Properties
              </p>
            </div>

            <div className="lg:col-span-7" id="schedule">
              <p className="index-tag mb-3">
                <b>02</b> — Calendly
              </p>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-3">
                Schedule a consultation
              </h2>
              <p className="mb-8 max-w-prose">
                Book a phone consult, property showing, or in-person meeting.
                Confirmations come from Calendly; follow-up continues in Follow
                Up Boss via native integrations.
              </p>
              <CalendlyWidget height="640px" />
            </div>
          </div>
        </section>

        <section className="bg-paper-2 py-16 mb-16">
          <div className="site-wrap">
            <p className="index-tag mb-4">
              <b>03</b> — Areas
            </p>
            <h2 className="font-display text-3xl text-ink mb-3 max-w-2xl">
              Where we help relocators look
            </h2>
            <p className="max-w-prose mb-8">
              Las Vegas Valley coverage with local partner tours. Square footage,
              amenities, and commute times guide recommendations — not protected-class
              proxies.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 font-sans text-sm">
              {areas.map((area) => (
                <span key={area} className="text-ink-soft">
                  {area}
                </span>
              ))}
              <Link
                href="/neighborhoods"
                className="text-accent font-medium hover:underline underline-offset-4"
              >
                All areas →
              </Link>
            </div>
          </div>
        </section>

        <section className="site-wrap mb-16">
          <p className="index-tag mb-4">
            <b>04</b> — FAQ
          </p>
          <h2 className="font-display text-3xl text-ink mb-8">
            Before you book
          </h2>
          <div className="max-w-3xl border-t border-[var(--line)]">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="border-b border-[var(--line-soft)] py-6"
              >
                <h3 className="font-sans text-base font-semibold text-ink mb-2">
                  {faq.q}
                </h3>
                <p className="leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="site-wrap mb-10">
          <div className="bg-ink text-paper py-12 px-6 md:px-12">
            <h2 className="font-display text-2xl md:text-3xl mb-4">
              Prefer a direct line?
            </h2>
            <p className="text-paper/75 mb-8 max-w-prose">
              Call, text, or email — same number as every CTA on this site.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 font-sans text-sm">
              <a
                href={agentInfo.phoneTel}
                className="inline-flex justify-center items-center gap-2 bg-paper text-ink px-5 py-3 hover:bg-accent-faint transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {agentInfo.phoneFormatted}
              </a>
              <a
                href={`mailto:${agentInfo.email}`}
                className="inline-flex justify-center items-center gap-2 border border-paper/30 text-paper px-5 py-3 hover:bg-paper/10 transition-colors"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {agentInfo.email}
              </a>
            </div>
          </div>
        </section>

        <p className="text-center font-sans text-xs text-ink-muted mb-8">
          Last updated: August 2026
        </p>
      </main>
      <Footer />
    </>
  );
}
