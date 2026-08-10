import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import CalendlyWidget from "@/components/calendly/CalendlyWidget";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";
import EditorialVisualHero from "@/components/editorial/EditorialVisualHero";
import EditorialMediaBand from "@/components/editorial/EditorialMediaBand";
import { getMarketingImage, getSectionImage } from "@/lib/guides/media";
import {
  Search,
  Calendar,
  MessageCircle,
  Home,
  MapPin,
  BarChart3,
  Bot,
  Shield,
} from "lucide-react";
import { answerFirst } from "@/lib/market/august-2026";
import SchemaScript from "@/components/SchemaScript";
import { buildHubPageSchema } from "@/lib/seo/guide-schema";

export const metadata: Metadata = buildPageMetadata({
  title: "A Two-Market Real Estate Process | Irvine to Las Vegas | Dr. Gene Boyle",
  description: "Cross-state workflow from first call to closing: Irvine planning, Las Vegas tours, offers, and settlement with Dr. Gene Boyle and Dr. Jan Duffy. Call (702) 222-1964.",
  path: "/how-we-work",
  keywords: [
    "Irvine to Las Vegas relocation tools",
    "RealScout Las Vegas",
    "Calendly real estate consultation",
    "home valuation Las Vegas",
    "Dr Gene Boyle",
  ],
});

const howFaqs = [
  {
    question: "How do Gene Boyle and Jan Duffy coordinate a move?",
    answer: answerFirst.howWeWork,
  },
  {
    question: "Which tools are on this site?",
    answer:
      "RealScout MLS search, Calendly scheduling, home valuation intake, market report pages, Google Business details, AI chat for quick questions, and WebMCP agent tools.",
  },
  {
    question: "Do you rebuild RealScout ↔ Follow Up Boss sync?",
    answer:
      "No. RealScout’s native Follow Up Boss integration handles that. We use the platforms as designed.",
  },
] as const;

const pageSchemas = buildHubPageSchema({
  path: "/how-we-work",
  name: "A Two-Market Real Estate Process | Dr. Gene Boyle",
  description: answerFirst.howWeWork,
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "How we work", url: "/how-we-work" },
  ],
  faqs: [...howFaqs],
  serviceName: "Cross-state relocation process and tools",
});

const stack = [
  {
    id: "realscout",
    icon: Search,
    name: "RealScout MLS search",
    platform: "RealScout (native Follow Up Boss sync)",
    summary:
      "Search active Las Vegas Valley listings on-site. Saved searches and client activity sync through RealScout’s native Follow Up Boss integration — we do not rebuild that sync.",
    href: "/listings",
    cta: "Search listings",
  },
  {
    id: "calendly",
    icon: Calendar,
    name: "Calendly scheduling",
    platform: "Calendly",
    summary:
      "Book a consultation or showing without email ping-pong. Confirmations and calendar sync are handled by Calendly.",
    href: "#schedule",
    cta: "Jump to scheduler",
  },
  {
    id: "ai-assistant",
    icon: MessageCircle,
    name: "AI relocation assistant",
    platform: "Claude / OpenRouter via secure API routes",
    summary:
      "Use the chat button (bottom-right) for quick questions about process and areas. For pricing or deal specifics, call — AI does not replace licensed advice.",
    href: "/contact",
    cta: "Or contact us",
  },
  {
    id: "valuation",
    icon: Home,
    name: "Home valuation",
    platform: "On-site page + Calendly",
    summary:
      "Start a valuation conversation for a home you may sell before relocating. Live CMA work happens with your agent.",
    href: "/home-valuation",
    cta: "Start valuation",
  },
  {
    id: "gbp",
    icon: MapPin,
    name: "Google Business Profile",
    platform: "GBP + LocalBusiness schema",
    summary:
      "NAP, hours, map, and review links aligned with the Google Business Profile for local trust signals.",
    href: "/google-business",
    cta: "View GBP page",
  },
  {
    id: "market",
    icon: BarChart3,
    name: "Market reports",
    platform: "On-site market pages",
    summary:
      "Median price, inventory, and relocation-oriented market context for Las Vegas and Henderson.",
    href: "/market-report",
    cta: "Open market report",
  },
  {
    id: "webmcp",
    icon: Bot,
    name: "WebMCP agent tools",
    platform: "document.modelContext + @mcp-b/global",
    summary:
      "Supporting browsers and inspectors can call get_contact_info, schedule_consultation, search_homes, and list_service_areas. Manifest: /.well-known/webmcp.",
    href: "/.well-known/webmcp",
    cta: "View WebMCP manifest",
  },
  {
    id: "crm",
    icon: Shield,
    name: "CRM follow-up",
    platform: "Follow Up Boss (via native RealScout / Calendly integrations)",
    summary:
      "Lead follow-up runs in Follow Up Boss through native platform connections. This site does not duplicate RealScout↔FUB sync.",
    href: "/contact",
    cta: "Get on our radar",
  },
] as const;

export default function HowWeWorkPage() {
  return (
    <>
      <SchemaScript schema={pageSchemas} id="how-we-work-schema" />
      <Navbar />
      <main className="pb-16">
        <EditorialVisualHero
          image={getMarketingImage("how-we-work")}
          kicker={siteConfig.fullName}
          title="A Two-Market Process —"
          accent="for California-to-Nevada moves"
          lede={answerFirst.howWeWork}
          ctas={[
            { href: "#schedule", label: "See the process and book a call", variant: "primary" },
            { href: "/listings", label: "Search homes", variant: "secondary" },
          ]}
        />

        <EditorialMediaBand image={getSectionImage("areas")} />

        <section className="site-wrap mb-20">
          <p className="index-tag mb-4">
            <b>00</b> — Workflow
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-4 max-w-2xl">
            What happens from the first call to closing?
          </h2>
          <p className="max-w-prose text-lg mb-10">
            Discovery call → Irvine-side timing and sale planning → Las Vegas
            area and home search → tours → offer strategy → inspections →
            appraisal → closing coordination. Each stage has an owner, next
            step, and deliverable.
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-ink mb-6 max-w-2xl">
            How do Irvine and Las Vegas partners coordinate?
          </h2>
          <div className="grid md:grid-cols-3 gap-10 border-t border-[var(--line-soft)] pt-12">
            {[
              {
                title: "California owner",
                body: `${agentInfo.name} (${agentInfo.licenseLabel}) from ${officeInfo.address.full}.`,
              },
              {
                title: "Nevada owner",
                body: `${agentInfo.partnerAgent.name} (${agentInfo.partnerAgent.license}) — tours, offers, settlement.`,
              },
              {
                title: "Shared timeline",
                body: "One phone number and one checklist so sell/buy dates do not drift.",
              },
            ].map((step) => (
              <div key={step.title}>
                <h3 className="font-sans text-base font-semibold text-ink mb-2">
                  {step.title}
                </h3>
                <p className="leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="site-wrap mb-20">
          <p className="index-tag mb-6">
            <b>01</b> — Tools on this site
          </p>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
            {stack.map(({ id, icon: Icon, name, platform, summary, href, cta }, i) => (
              <article
                key={id}
                id={id}
                className="scroll-mt-28 border-t border-[var(--line-soft)] pt-8"
              >
                <p className="index-tag mb-3">
                  <b>{String(i + 1).padStart(2, "0")}</b> — {platform}
                </p>
                <div className="flex items-start gap-3 mb-3">
                  <Icon className="h-5 w-5 text-accent mt-1 shrink-0" aria-hidden="true" />
                  <h2 className="font-display text-2xl text-ink">{name}</h2>
                </div>
                <p className="mb-4 leading-relaxed">{summary}</p>
                <Link
                  href={href}
                  className="font-sans text-sm font-medium text-accent hover:underline underline-offset-4"
                >
                  {cta}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="schedule" className="scroll-mt-28 bg-paper-2 py-16 mb-16">
          <div className="site-wrap max-w-4xl">
            <p className="index-tag text-center mb-4">Calendly</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-3 text-center">
              Schedule a consultation
            </h2>
            <p className="text-center max-w-prose mx-auto mb-8">
              Choose a slot. Confirmations come from Calendly; follow-up continues
              in Follow Up Boss via native integrations.
            </p>
            <CalendlyWidget height="700px" />
          </div>
        </section>

        <section className="site-wrap mb-10 text-center">
          <p className="index-tag mb-3">RealScout</p>
          <h2 className="font-display text-3xl text-ink mb-3">
            Featured listings
          </h2>
          <p className="max-w-prose mx-auto mb-8">
            Live MLS data below. Attribution and MLS disclaimer appear with the
            widget.
          </p>
        </section>

        <section className="site-wrap mt-16 text-center">
          <h2 className="font-display text-2xl text-ink mb-3">Visit or call</h2>
          <p className="mb-2">{officeInfo.address.full}</p>
          <p className="mb-2">
            Las Vegas partner: {officeInfo.lasVegasOffice.full}
          </p>
          <p className="mb-6 text-sm">
            {agentInfo.name} · {agentInfo.licenseLabel} · Partner{" "}
            {agentInfo.partnerAgent.name} ({agentInfo.partnerAgent.license})
          </p>
          <Link
            href="/google-business"
            className="font-sans text-sm font-medium text-accent hover:underline underline-offset-4"
          >
            Google Business Profile details
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
