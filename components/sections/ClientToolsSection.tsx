import Link from "next/link";
import {
  Search,
  Calendar,
  MessageCircle,
  Home,
  MapPin,
  BarChart3,
  Bot,
} from "lucide-react";

const tools = [
  {
    icon: Search,
    title: "Live MLS search",
    description:
      "Browse Las Vegas Valley listings with RealScout — saved searches and alerts sync to your agent.",
    href: "/listings",
    cta: "Search homes",
  },
  {
    icon: Calendar,
    title: "Book a consultation",
    description:
      "Pick a time on Calendly for an Irvine-to-Las Vegas relocation call or showing.",
    href: "/contact#schedule",
    cta: "Schedule now",
  },
  {
    icon: Home,
    title: "Home valuation",
    description:
      "Start a valuation conversation for a property you are selling or leaving behind in California.",
    href: "/home-valuation",
    cta: "Get valuation",
  },
  {
    icon: MessageCircle,
    title: "AI relocation assistant",
    description:
      "Ask quick questions about areas, process, and next steps — then book a call when you are ready.",
    href: "/how-we-work#ai-assistant",
    cta: "How it works",
  },
  {
    icon: MapPin,
    title: "Office & Google profile",
    description:
      "NAP, hours, map, and reviews aligned with the Google Business Profile.",
    href: "/google-business",
    cta: "View profile",
  },
  {
    icon: BarChart3,
    title: "Market reports",
    description:
      "Median prices, inventory, and relocation-focused market context for Las Vegas and Henderson.",
    href: "/market-report",
    cta: "Read report",
  },
] as const;

export default function ClientToolsSection() {
  return (
    <section className="py-16 md:py-20 bg-slate-50" aria-labelledby="client-tools-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-2">
            On this site
          </p>
          <h2
            id="client-tools-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Everything you need to plan the move
          </h2>
          <p className="text-lg text-slate-600">
            RealScout listings, Calendly scheduling, AI answers, valuations, and
            local market data — connected to Dr. Gene Boyle and Las Vegas partner
            Dr. Jan Duffy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tools.map(({ icon: Icon, title, description, href, cta }) => (
            <div key={title} className="flex flex-col">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-600 flex-1 mb-4">{description}</p>
              <Link
                href={href}
                className="text-sm font-semibold text-blue-700 hover:text-blue-800 underline-offset-2 hover:underline"
              >
                {cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-slate-600">
          <Bot className="h-5 w-5 text-slate-500" aria-hidden="true" />
          <p className="text-center">
            Browser agents can use WebMCP tools on this site for contact, scheduling,
            and search.{" "}
            <Link
              href="/how-we-work#webmcp"
              className="font-semibold text-blue-700 hover:underline"
            >
              See agent tools
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
