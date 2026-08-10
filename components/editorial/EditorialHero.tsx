import Link from "next/link";
import { agentInfo } from "@/lib/site-config";

type Cta = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "phone";
};

type EditorialHeroProps = {
  kicker?: string;
  title: React.ReactNode;
  accent?: string;
  lede: string;
  ctas?: Cta[];
  breadcrumbs?: { label: string; href?: string }[];
};

export default function EditorialHero({
  kicker,
  title,
  accent,
  lede,
  ctas,
  breadcrumbs,
}: EditorialHeroProps) {
  const resolvedCtas: Cta[] =
    ctas ??
    ([
      { href: "/contact#schedule", label: "Book a consult", variant: "primary" },
      {
        href: agentInfo.phoneTel,
        label: `Call ${agentInfo.phoneFormatted}`,
        variant: "secondary",
      },
    ] as const);

  return (
    <section className="site-wrap mb-16">
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav
          aria-label="Breadcrumb"
          className="font-sans text-xs text-ink-muted mb-8"
        >
          {breadcrumbs.map((crumb, i) => (
            <span key={`${crumb.label}-${i}`}>
              {i > 0 && " / "}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-accent">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-ink">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      )}
      {kicker && <p className="index-tag mb-4">{kicker}</p>}
      <h1 className="font-display text-4xl md:text-6xl text-ink max-w-3xl leading-tight mb-5">
        {title}
        {accent ? (
          <>
            {" "}
            <em className="italic text-accent">{accent}</em>
          </>
        ) : null}
      </h1>
      <p className="text-xl max-w-prose mb-8">{lede}</p>
      <div className="flex flex-wrap gap-3 font-sans text-sm">
        {resolvedCtas.map((cta) => {
          const className =
            cta.variant === "secondary"
              ? "inline-flex border border-[var(--line)] text-ink px-5 py-3 hover:bg-ink hover:text-paper transition-colors"
              : "inline-flex bg-ink text-paper px-5 py-3 hover:bg-accent transition-colors";
          const isExternal =
            cta.href.startsWith("tel:") || cta.href.startsWith("mailto:");
          if (isExternal) {
            return (
              <a key={cta.href + cta.label} href={cta.href} className={className}>
                {cta.label}
              </a>
            );
          }
          return (
            <Link key={cta.href + cta.label} href={cta.href} className={className}>
              {cta.label}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
