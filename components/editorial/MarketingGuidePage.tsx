import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import EditorialHero from "@/components/editorial/EditorialHero";
import EditorialSection from "@/components/editorial/EditorialSection";
import EditorialStats from "@/components/editorial/EditorialStats";
import EditorialFaq from "@/components/editorial/EditorialFaq";
import EditorialCta from "@/components/editorial/EditorialCta";
import { siteConfig } from "@/lib/site-config";
import type { MarketingGuide } from "@/lib/guides/marketing-types";

type Props = {
  guide: MarketingGuide;
  schema?: React.ReactNode;
};

export default function MarketingGuidePage({ guide, schema }: Props) {
  let sectionNum = 1;
  const nextIndex = () => String(sectionNum++).padStart(2, "0");

  return (
    <>
      {schema}
      <Navbar />
      <main className="pt-28 pb-16">
        <EditorialHero
          kicker={guide.kicker ?? siteConfig.fullName}
          breadcrumbs={guide.breadcrumbs}
          title={guide.title}
          accent={guide.accent}
          lede={guide.lede}
          ctas={guide.ctas}
        />

        {guide.stats && guide.stats.length > 0 && (
          <EditorialSection
            index={nextIndex()}
            label="Snapshot"
            title={guide.statsTitle ?? "At a glance"}
          >
            <EditorialStats stats={guide.stats} />
          </EditorialSection>
        )}

        {guide.sections.map((section) => {
          const index = nextIndex();
          if (section.kind === "prose") {
            return (
              <EditorialSection
                key={section.title}
                index={index}
                label={section.label}
                title={section.title}
                tone={section.tone}
              >
                <div className="max-w-prose space-y-5 text-lg leading-relaxed">
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              </EditorialSection>
            );
          }
          if (section.kind === "cards") {
            return (
              <EditorialSection
                key={section.title}
                index={index}
                label={section.label}
                title={section.title}
                tone={section.tone}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 border-t border-[var(--line-soft)] pt-12">
                  {section.items.map((item) => (
                    <article key={item.title}>
                      <h3 className="font-sans text-base font-semibold text-ink mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed">{item.body}</p>
                      {item.href && (
                        <a
                          href={item.href}
                          className="inline-flex mt-3 font-sans text-sm font-medium text-accent hover:underline underline-offset-4"
                        >
                          Open →
                        </a>
                      )}
                    </article>
                  ))}
                </div>
              </EditorialSection>
            );
          }
          return (
            <EditorialSection
              key={section.title}
              index={index}
              label={section.label}
              title={section.title}
              tone={section.tone}
            >
              <div className="max-w-3xl border-t border-[var(--line)]">
                {section.steps.map((step, i) => (
                  <div
                    key={step.title}
                    className="border-b border-[var(--line-soft)] py-6"
                  >
                    <p className="index-tag mb-2">
                      <b>{String(i + 1).padStart(2, "0")}</b>
                    </p>
                    <h3 className="font-sans text-base font-semibold text-ink mb-2">
                      {step.title}
                    </h3>
                    <p className="leading-relaxed">{step.body}</p>
                  </div>
                ))}
              </div>
            </EditorialSection>
          );
        })}

        {guide.faqs && guide.faqs.length > 0 && (
          <EditorialFaq
            faqs={guide.faqs}
            index={nextIndex()}
            title={guide.faqTitle ?? "Questions"}
          />
        )}

        <EditorialCta
          index={nextIndex()}
          title={guide.ctaTitle}
          body={guide.ctaBody}
          primaryHref={guide.ctaHref}
          primaryLabel={guide.ctaLabel}
        />

        {guide.showListings !== false && <RealScoutListings />}
      </main>
      <Footer />
    </>
  );
}
