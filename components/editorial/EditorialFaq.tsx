type Faq = {
  question: string;
  answer: string;
};

type EditorialFaqProps = {
  faqs: Faq[];
  index?: string;
  title?: string;
};

export default function EditorialFaq({
  faqs,
  index = "FAQ",
  title = "Questions",
}: EditorialFaqProps) {
  return (
    <section className="site-wrap mb-16">
      <p className="index-tag mb-4">
        <b>{index}</b> — Answers
      </p>
      <h2 className="font-display text-3xl text-ink mb-8">{title}</h2>
      <div className="max-w-3xl border-t border-[var(--line)]">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="border-b border-[var(--line-soft)] py-6"
          >
            <h3 className="font-sans text-base font-semibold text-ink mb-2">
              {faq.question}
            </h3>
            <p className="leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
