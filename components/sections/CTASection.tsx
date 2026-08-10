import Link from "next/link";
import { agentInfo } from "@/lib/site-config";

type CTASectionProps = {
  title?: string;
  body?: string;
};

export default function CTASection({
  title = "Book the first loop",
  body = `Schedule on Calendly or call ${agentInfo.phoneFormatted}.`,
}: CTASectionProps) {
  return (
    <section className="site-wrap py-16">
      <div className="bg-ink text-paper py-14 px-6 md:px-12">
        <p className="index-tag text-paper/45 mb-4">
          <b className="text-paper/80">Next</b> — What&apos;s next
        </p>
        <h2 className="font-display text-3xl md:text-4xl mb-4">{title}</h2>
        <p className="text-paper/75 mb-8 max-w-prose">{body}</p>
        <div className="flex flex-col sm:flex-row gap-3 font-sans text-sm">
          <Link
            href="/contact#schedule"
            className="inline-flex justify-center bg-paper text-ink px-5 py-3 hover:bg-accent-faint transition-colors"
          >
            Schedule consultation
          </Link>
          <a
            href={agentInfo.phoneTel}
            className="inline-flex justify-center border border-paper/30 text-paper px-5 py-3 hover:bg-paper/10 transition-colors"
          >
            Call {agentInfo.phoneFormatted}
          </a>
        </div>
      </div>
    </section>
  );
}
