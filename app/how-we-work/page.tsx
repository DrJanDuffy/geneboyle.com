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
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4 mb-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-3">
            {siteConfig.fullName}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 max-w-3xl">
            How we work — tools on this site
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mb-8">
            Every major piece of the stack is available here for Irvine-to-Las
            Vegas relocation: MLS search, scheduling, AI answers, valuation,
            market data, and Google Business details. Call{" "}
            <a
              href={agentInfo.phoneTel}
              className="font-semibold text-blue-700 hover:underline"
            >
              {agentInfo.phoneFormatted}
            </a>
            .
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/listings"
              className="inline-flex bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-semibold"
            >
              Search homes
            </Link>
            <Link
              href="#schedule"
              className="inline-flex bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-md font-semibold"
            >
              Book a time
            </Link>
            <a
              href={agentInfo.phoneTel}
              className="inline-flex items-center gap-2 border border-slate-300 px-5 py-3 rounded-md font-semibold text-slate-800 hover:bg-slate-50"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {agentInfo.phoneFormatted}
            </a>
          </div>
        </section>

        <section className="container mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {stack.map(({ id, icon: Icon, name, platform, summary, href, cta }) => (
              <article
                key={id}
                id={id}
                className="scroll-mt-28 border-t border-slate-200 pt-8"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-1">{name}</h2>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500 mb-3">
                      {platform}
                    </p>
                    <p className="text-slate-600 mb-4">{summary}</p>
                    <Link
                      href={href}
                      className="text-sm font-semibold text-blue-700 hover:underline"
                    >
                      {cta}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="schedule" className="scroll-mt-28 bg-slate-50 py-16 mb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">
              Schedule with Calendly
            </h2>
            <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
              Choose a consultation slot. You will get Calendly’s confirmation
              email; follow-up continues in Follow Up Boss via native integrations.
            </p>
            <CalendlyWidget height="700px" />
          </div>
        </section>

        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">
            Featured listings (RealScout)
          </h2>
          <p className="text-slate-600 text-center mb-8">
            Live MLS data below. Attribution and MLS disclaimer appear with the
            widget.
          </p>
        </section>
        <RealScoutListings />

        <section className="container mx-auto px-4 mt-16 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Visit or call</h2>
          <p className="text-slate-600 mb-2">{officeInfo.address.full}</p>
          <p className="text-slate-600 mb-2">
            Las Vegas partner: {officeInfo.lasVegasOffice.full}
          </p>
          <p className="text-slate-600 mb-6">
            {agentInfo.name} · {agentInfo.licenseLabel} · Partner{" "}
            {agentInfo.partnerAgent.name} ({agentInfo.partnerAgent.license})
          </p>
          <Link
            href="/google-business"
            className="inline-flex text-blue-700 font-semibold hover:underline"
          >
            Google Business Profile details
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
