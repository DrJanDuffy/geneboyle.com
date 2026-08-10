import Link from "next/link";

const tools = [
  {
    n: "01",
    title: "Live MLS search",
    description:
      "Browse Las Vegas Valley listings with RealScout — alerts sync through native CRM integrations.",
    href: "/listings",
    cta: "Search homes",
  },
  {
    n: "02",
    title: "Book a consultation",
    description:
      "Pick a time on Calendly for an Irvine-to-Las Vegas relocation call or showing.",
    href: "/contact#schedule",
    cta: "Schedule now",
  },
  {
    n: "03",
    title: "Home valuation",
    description:
      "Start a valuation conversation for a property you may sell before relocating.",
    href: "/home-valuation",
    cta: "Get valuation",
  },
  {
    n: "04",
    title: "AI relocation assistant",
    description:
      "Ask quick process questions via the chat button — then book a call when you are ready.",
    href: "/how-we-work#ai-assistant",
    cta: "How it works",
  },
  {
    n: "05",
    title: "Google Business Profile",
    description:
      "NAP, hours, map, and review links aligned with the Google Business Profile.",
    href: "/google-business",
    cta: "View profile",
  },
  {
    n: "06",
    title: "Market reports",
    description:
      "Median prices, inventory, and relocation-focused context for Las Vegas and Henderson.",
    href: "/market-report",
    cta: "Read report",
  },
] as const;

export default function ClientToolsSection() {
  return (
    <section
      id="tools"
      className="scroll-mt-28 py-16 md:py-24"
      aria-labelledby="client-tools-heading"
    >
      <div className="site-wrap">
        <p className="index-tag mb-6">
          <b>On this site</b> — Tools
        </p>
        <h2
          id="client-tools-heading"
          className="font-display text-3xl md:text-4xl text-ink max-w-2xl leading-tight mb-4"
        >
          Everything you need to plan the move.
        </h2>
        <p className="max-w-prose text-lg mb-12">
          RealScout, Calendly, AI answers, valuations, and market data —
          connected to Dr. Gene Boyle and Las Vegas partner Dr. Jan Duffy.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 border-t border-[var(--line-soft)] pt-12">
          {tools.map(({ n, title, description, href, cta }) => (
            <article key={title}>
              <p className="font-sans text-xs text-ink-muted mb-3">{n}</p>
              <h3 className="font-sans text-base font-semibold text-ink mb-2">
                {title}
              </h3>
              <p className="text-sm leading-relaxed mb-4">{description}</p>
              <Link
                href={href}
                className="font-sans text-sm font-medium text-accent hover:text-accent-soft underline-offset-4 hover:underline"
              >
                {cta}
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-14 font-sans text-sm text-ink-muted">
          Browser agents can use WebMCP tools for contact, scheduling, and search.{" "}
          <Link
            href="/how-we-work#webmcp"
            className="text-accent font-medium hover:underline underline-offset-4"
          >
            See agent tools
          </Link>
        </p>
      </div>
    </section>
  );
}
