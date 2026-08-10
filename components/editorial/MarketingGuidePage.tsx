import type { ReactNode } from "react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import SchemaScript from "@/components/SchemaScript";
import EditorialVisualHero from "@/components/editorial/EditorialVisualHero";
import EditorialMediaBand from "@/components/editorial/EditorialMediaBand";
import EditorialSection from "@/components/editorial/EditorialSection";
import EditorialStats from "@/components/editorial/EditorialStats";
import EditorialFaq from "@/components/editorial/EditorialFaq";
import EditorialCta from "@/components/editorial/EditorialCta";
import { siteConfig } from "@/lib/site-config";
import { getMarketingImage, getSectionImage } from "@/lib/guides/media";
import type { MarketingGuide } from "@/lib/guides/marketing-types";
import { buildMarketingGuideSchema } from "@/lib/seo/guide-schema";

type Props = {
  guide: MarketingGuide;
  guideKey: string;
  /** Canonical path beginning with `/` — required for FAQ + Breadcrumb JSON-LD. */
  path: string;
  /** Optional override; defaults to auto-built FAQPage + Breadcrumb + WebPage + Service. */
  schema?: ReactNode;
};

export default function MarketingGuidePage({
  guide,
  guideKey,
  path,
  schema,
}: Props) {
  let sectionNum = 1;
  const nextIndex = () => String(sectionNum++).padStart(2, "0");
  const heroImage = getMarketingImage(guideKey);
  const autoSchema = buildMarketingGuideSchema(guide, path);

  return (
    <>
      {schema ?? <SchemaScript schema={autoSchema} id={`${guideKey}-schema`} />}
      <Navbar />
      <main className="pb-16">
        <EditorialVisualHero
          image={heroImage}
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

        <EditorialMediaBand image={heroImage} caption={heroImage.alt} />

        {guide.sections.map((section, sectionIdx) => {
          const index = nextIndex();
          let block: ReactNode;
          switch (section.kind) {
            case "prose":
              block = (
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
              break;
            case "cards":
              block = (
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
              break;
            case "steps":
              block = (
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
              break;
            case "local":
              block = (
                <EditorialSection
                  key={section.title}
                  index={index}
                  label={section.label}
                  title={section.title}
                  tone={section.tone}
                >
                  <div className="grid lg:grid-cols-2 gap-10 border-t border-[var(--line)] pt-10">
                    <div>
                      <h3 className="font-sans text-sm font-semibold text-ink mb-3 uppercase tracking-[0.12em]">
                        Hours
                      </h3>
                      <ul className="space-y-2 text-sm text-ink-soft">
                        {section.hours.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                      <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 font-sans text-sm">
                        {section.actions.map((action) => (
                          <a
                            key={action.href}
                            href={action.href}
                            className="inline-flex justify-center border border-[var(--line)] px-4 py-2.5 text-ink hover:bg-ink hover:text-paper transition-colors"
                            target={
                              action.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              action.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {action.label}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="overflow-hidden border border-[var(--line-soft)] bg-paper-2 min-h-[280px]">
                      <iframe
                        title={section.mapTitle}
                        src={section.mapEmbedUrl}
                        className="w-full h-full min-h-[280px]"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </EditorialSection>
              );
              break;
            default: {
              const _exhaustive: never = section;
              throw new Error(
                `Unhandled marketing section kind: ${JSON.stringify(_exhaustive)}`
              );
            }
          }

          return (
            <div key={section.title}>
              {block}
              {sectionIdx === 0 ? (
                <EditorialMediaBand image={getSectionImage("approach")} />
              ) : null}
            </div>
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

      </main>
      <Footer />
    </>
  );
}
