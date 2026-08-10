import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import SchemaScript from "@/components/SchemaScript";
import EditorialHero from "@/components/editorial/EditorialHero";
import EditorialSection from "@/components/editorial/EditorialSection";
import EditorialStats from "@/components/editorial/EditorialStats";
import EditorialFaq from "@/components/editorial/EditorialFaq";
import EditorialCta from "@/components/editorial/EditorialCta";
import { agentInfo, siteConfig } from "@/lib/site-config";
import type { AreaGuide } from "@/lib/guides/types";

type AreaGuidePageProps = {
  guide: AreaGuide;
  schema?: Record<string, unknown>;
};

export default function AreaGuidePage({ guide, schema }: AreaGuidePageProps) {
  return (
    <>
      {schema ? (
        <SchemaScript
          schema={schema}
          id={`${guide.slug}-schema`}
        />
      ) : null}
      <Navbar />
      <main className="pt-28 pb-16">
        <EditorialHero
          kicker={siteConfig.fullName}
          breadcrumbs={guide.breadcrumbs}
          title={guide.title}
          accent={guide.accent}
          lede={guide.lede}
          ctas={[
            { href: "/listings", label: "Search homes", variant: "primary" },
            {
              href: agentInfo.phoneTel,
              label: `Call ${agentInfo.phoneFormatted}`,
              variant: "secondary",
            },
          ]}
        />

        {guide.stats.length > 0 && (
          <EditorialSection index="01" label="Market" title={guide.statsTitle}>
            <EditorialStats stats={guide.stats} />
          </EditorialSection>
        )}

        <EditorialSection
          index="02"
          label="Overview"
          title={guide.overviewTitle}
          tone="muted"
        >
          <div className="max-w-prose space-y-5 text-lg leading-relaxed">
            {guide.overview.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>
        </EditorialSection>

        {guide.highlights.length > 0 && (
          <EditorialSection
            index="03"
            label="Highlights"
            title="What relocators notice first"
          >
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 border-t border-[var(--line-soft)] pt-12">
              {guide.highlights.map((h) => (
                <article key={h.title}>
                  <h3 className="font-sans text-base font-semibold text-ink mb-2">
                    {h.title}
                  </h3>
                  <p className="leading-relaxed">{h.body}</p>
                </article>
              ))}
            </div>
          </EditorialSection>
        )}

        {guide.details && guide.details.length > 0 && (
          <EditorialSection index="04" label="Details" title={guide.detailsTitle}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 border-t border-[var(--line-soft)] pt-12">
              {guide.details.map((d) => (
                <article key={d.title}>
                  <h3 className="font-sans text-sm font-semibold text-ink mb-3">
                    {d.title}
                  </h3>
                  <ul className="space-y-2 text-sm text-ink-soft">
                    {d.items.map((item) => (
                      <li
                        key={item}
                        className="border-t border-[var(--line-soft)] pt-2"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </EditorialSection>
        )}

        {guide.commutes && guide.commutes.length > 0 && (
          <EditorialSection
            index="05"
            label="Commute"
            title="Drive times"
            tone="muted"
          >
            <div className="overflow-x-auto border-t border-[var(--line)]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="font-sans text-left text-ink">
                    <th className="py-3 pr-4 font-semibold">Destination</th>
                    <th className="py-3 pr-4 font-semibold">Distance</th>
                    <th className="py-3 pr-4 font-semibold">Drive</th>
                    <th className="py-3 font-semibold">Rush hour</th>
                  </tr>
                </thead>
                <tbody>
                  {guide.commutes.map((row) => (
                    <tr
                      key={row.destination}
                      className="border-t border-[var(--line-soft)]"
                    >
                      <td className="py-3 pr-4">{row.destination}</td>
                      <td className="py-3 pr-4">{row.distance}</td>
                      <td className="py-3 pr-4">{row.drive}</td>
                      <td className="py-3">{row.rush}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </EditorialSection>
        )}

        {guide.faqs.length > 0 && (
          <EditorialFaq
            faqs={guide.faqs}
            index="06"
            title={`${guide.name} questions`}
          />
        )}

        <EditorialCta
          title={guide.ctaTitle}
          body={guide.ctaBody}
          primaryHref="/contact#schedule"
          primaryLabel="Schedule a tour plan"
        />

        <section className="site-wrap mb-8 text-center">
          <p className="index-tag mb-3">Live MLS</p>
          <h2 className="font-display text-2xl text-ink mb-2">
            Featured listings
          </h2>
          <p className="max-w-prose mx-auto mb-6 text-sm">
            Attribution and MLS disclaimer appear with the widget.
          </p>
        </section>
        <RealScoutListings />
      </main>
      <Footer />
    </>
  );
}
