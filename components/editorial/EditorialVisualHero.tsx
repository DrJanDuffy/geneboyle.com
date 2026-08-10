import Image from "next/image";
import Link from "next/link";
import { agentInfo } from "@/lib/site-config";
import type { GuideImage } from "@/lib/guides/media";
import RealScoutOfficeWidget from "@/components/realscout/RealScoutOfficeWidget";

type Cta = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "phone";
};

type EditorialVisualHeroProps = {
  image: GuideImage;
  kicker?: string;
  title: React.ReactNode;
  accent?: string;
  lede: string;
  ctas?: Cta[];
  breadcrumbs?: { label: string; href?: string }[];
  priority?: boolean;
};

export default function EditorialVisualHero({
  image,
  kicker,
  title,
  accent,
  lede,
  ctas,
  breadcrumbs,
  priority = true,
}: EditorialVisualHeroProps) {
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
    <>
      <section className="relative min-h-[85svh] flex flex-col justify-end overflow-hidden bg-ink text-paper">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          fetchPriority={priority ? "high" : "auto"}
          sizes="100vw"
          quality={60}
          className="object-cover object-center opacity-50"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/25"
          aria-hidden="true"
        />

        <div className="relative z-10 site-wrap pb-14 pt-28 md:pb-18 md:pt-36">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav
              aria-label="Breadcrumb"
              className="font-sans text-xs text-paper/55 mb-6"
            >
              {breadcrumbs.map((crumb, i) => (
                <span key={`${crumb.label}-${i}`}>
                  {i > 0 && " / "}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-paper">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-paper/80">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          {kicker && <p className="kicker text-paper/65 mb-4">{kicker}</p>}
          <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tight text-paper max-w-4xl">
            {title}
            {accent ? (
              <>
                {" "}
                <em className="italic text-accent-soft">{accent}</em>
              </>
            ) : null}
          </h1>
          <p className="mt-6 max-w-xl font-serif text-lg md:text-xl text-paper/80">
            {lede}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 font-sans text-sm">
            {resolvedCtas.map((cta) => {
              const className =
                cta.variant === "secondary"
                  ? "inline-flex justify-center border border-paper/35 text-paper px-5 py-3 hover:bg-paper/10 transition-colors"
                  : "inline-flex justify-center bg-paper text-ink px-5 py-3 hover:bg-accent-faint transition-colors";
              const isExternal =
                cta.href.startsWith("tel:") || cta.href.startsWith("mailto:");
              if (isExternal) {
                return (
                  <a
                    key={cta.href + cta.label}
                    href={cta.href}
                    className={className}
                  >
                    {cta.label}
                  </a>
                );
              }
              return (
                <Link
                  key={cta.href + cta.label}
                  href={cta.href}
                  className={className}
                >
                  {cta.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <RealScoutOfficeWidget />
    </>
  );
}
