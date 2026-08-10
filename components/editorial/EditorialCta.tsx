import Link from "next/link";
import { Phone } from "lucide-react";
import { agentInfo } from "@/lib/site-config";

type EditorialCtaProps = {
  index?: string;
  title: string;
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export default function EditorialCta({
  index = "Next",
  title,
  body,
  primaryHref = "/contact#schedule",
  primaryLabel = "Schedule consultation",
}: EditorialCtaProps) {
  return (
    <section className="site-wrap mb-10">
      <div className="bg-ink text-paper py-14 px-6 md:px-12">
        <p className="index-tag text-paper/45 mb-4">
          <b className="text-paper/80">{index}</b> — Book the loop
        </p>
        <h2 className="font-display text-3xl md:text-4xl mb-4 max-w-2xl">
          {title}
        </h2>
        <p className="text-paper/75 mb-8 max-w-prose">{body}</p>
        <div className="flex flex-col sm:flex-row gap-3 font-sans text-sm">
          <Link
            href={primaryHref}
            className="inline-flex justify-center bg-paper text-ink px-5 py-3 hover:bg-accent-faint transition-colors"
          >
            {primaryLabel}
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
  );
}
