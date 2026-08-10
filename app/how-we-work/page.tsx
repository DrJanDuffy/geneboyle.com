import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import CalendlyWidget from "@/components/calendly/CalendlyWidget";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";
import {
  Search,
  Calendar,
  MessageCircle,
  Home,
  MapPin,
  BarChart3,
  Bot,
  Shield,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How We Work | Tools for Irvine to Las Vegas Relocation | Dr. Gene Boyle",
  description:
    "Use RealScout MLS search, Calendly scheduling, AI relocation chat, home valuation, market reports, and Google Business details on geneboyle.com. Call (702) 222-1964.",
  keywords: [
    "Irvine to Las Vegas relocation tools",
    "RealScout Las Vegas",
    "Calendly real estate consultation",
    "home valuation Las Vegas",
    "Dr Gene Boyle",
  ],
};

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
      <Navbar />
      <main className="pt-28 pb-16">
        <section className="site-wrap mb-16">
          <p className="index-tag mb-4">{siteConfig.fullName}</p>
          <h1 className="font-display text-4xl md:text-6xl text-ink max-w-3xl leading-tight mb-5">
            How we work —{" "}
            <em className="italic text-accent">tools on this site</em>
          </h1>
          <p className="text-xl max-w-prose mb-8">
            MLS search, Calendly, AI answers, valuation, market data, and Google
            Business details for Irvine-to-Las Vegas relocation. Call{" "}
            <a
              href={agentInfo.phoneTel}
              className="font-medium text-accent hover:underline"
            >
              {agentInfo.phoneFormatted}
            </a>
            .
          </p>
          <div className="flex flex-wrap gap-3 font-sans text-sm">
            <Link
              href="/listings"
              className="inline-flex bg-ink text-paper px-5 py-3 hover:bg-accent transition-colors"
            >
              Search homes
            </Link>
            <Link
              href="#schedule"
              className="inline-flex border border-[var(--line)] text-ink px-5 py-3 hover:bg-ink hover:text-paper transition-colors"
            >
              Book a time
            </Link>
            <a
              href={agentInfo.phoneTel}
              className="inline-flex items-center gap-2 text-accent font-medium px-2 py-3"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {agentInfo.phoneFormatted}
            </a>
          </div>
        </section>

        <section className="site-wrap mb-20">
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
        <RealScoutListings />

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
