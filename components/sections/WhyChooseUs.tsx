const reasons = [
  {
    title: "California + Nevada coverage",
    body: "One planner on the Irvine side and a Las Vegas partner team for tours and closing.",
  },
  {
    title: "Native platforms",
    body: "RealScout, Calendly, and Follow Up Boss — without rebuilding sync that already works.",
  },
  {
    title: "One client phone number",
    body: "(702) 222-1964 on every CTA — no swapped lines.",
  },
] as const;

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24">
      <div className="site-wrap">
        <p className="index-tag mb-4">
          <b>Why</b> — This practice
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-10 max-w-2xl">
          Relocation without extra handoffs
        </h2>
        <div className="grid md:grid-cols-3 gap-10 border-t border-[var(--line-soft)] pt-12">
          {reasons.map((r) => (
            <article key={r.title}>
              <h3 className="font-sans text-base font-semibold text-ink mb-2">
                {r.title}
              </h3>
              <p className="text-sm leading-relaxed">{r.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
