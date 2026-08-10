import { agentInfo } from "@/lib/site-config";
import { getRealScoutAgentEncodedId } from "@/lib/realscout/agent-id";

type RealScoutOfficeWidgetProps = {
  /** Minimum list price in USD. Defaults to 600000. */
  priceMin?: number;
  className?: string;
  title?: string;
  lede?: string;
};

/**
 * RealScout office listings — homes at or above the price floor.
 * Script loads once from root layout (`em.realscout.com`).
 */
export default function RealScoutOfficeWidget({
  priceMin = 600_000,
  className = "",
  title = "Homes above $600,000",
  lede = `Live Las Vegas Valley inventory from Dr. Jan Duffy’s BHHS Nevada office — filter and tour with ${agentInfo.name}. Call ${agentInfo.phoneFormatted}.`,
}: RealScoutOfficeWidgetProps) {
  const agentEncodedId = getRealScoutAgentEncodedId();

  return (
    <section
      className={`border-b border-[var(--line-soft)] bg-paper-2/40 py-14 md:py-16 ${className}`}
      aria-label={title}
    >
      <div className="site-wrap">
        <p className="index-tag mb-3">
          <b>MLS</b> — Office listings
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-3 max-w-2xl">
          {title}
        </h2>
        <p className="max-w-prose text-ink-soft mb-8">{lede}</p>
        <div
          className="realscout-wrapper w-full"
          dangerouslySetInnerHTML={{
            __html: `<realscout-office-listings
              agent-encoded-id="${agentEncodedId}"
              sort-order="NEWEST"
              listing-status="For Sale"
              property-types=",SFR,MF,TC"
              price-min="${priceMin}"
            ></realscout-office-listings>`,
          }}
        />
      </div>
    </section>
  );
}
