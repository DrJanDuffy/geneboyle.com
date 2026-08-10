import Link from "next/link";
import { agentInfo, siteConfig } from "@/lib/site-config";

type HeroSectionProps = {
  title?: string;
  accent?: string;
  lede?: string;
};

export default function HeroSection({
  title = "Dr. Gene Boyle",
  accent = "continuous relocation planning",
  lede = "Irvine to Las Vegas — California-side planning with Las Vegas partner Dr. Jan Duffy.",
}: HeroSectionProps) {
  return (
    <section className="site-wrap py-20 md:py-28">
      <p className="index-tag mb-4">{siteConfig.fullName}</p>
      <h1 className="font-display text-4xl md:text-6xl text-ink max-w-3xl leading-tight mb-5">
        {title} — <em className="italic text-accent">{accent}</em>
      </h1>
      <p className="text-xl max-w-prose mb-8">{lede}</p>
      <div className="flex flex-wrap gap-3 font-sans text-sm">
        <Link
          href="/listings"
          className="inline-flex bg-ink text-paper px-5 py-3 hover:bg-accent transition-colors"
        >
          Search homes
        </Link>
        <a
          href={agentInfo.phoneTel}
          className="inline-flex border border-[var(--line)] text-ink px-5 py-3 hover:bg-ink hover:text-paper transition-colors"
        >
          Call {agentInfo.phoneFormatted}
        </a>
      </div>
    </section>
  );
}
