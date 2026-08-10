"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface FAQ {
  question: string;
  answer: string;
}

export const defaultFaqs: FAQ[] = [
  {
    question: "What areas do you serve?",
    answer:
      "We specialize in Las Vegas and Henderson, Nevada, including Summerlin, Green Valley, and surrounding communities. Our expertise covers residential, luxury, and investment properties throughout Southern Nevada.",
  },
  {
    question: "How long does the home buying process take?",
    answer:
      "Typically, the home buying process takes 30-45 days from offer acceptance to closing. However, this can vary based on financing, inspections, and other factors. We'll guide you through each step to ensure a smooth transaction.",
  },
  {
    question: "Do you help with home valuations?",
    answer:
      "Yes! We provide free, no-obligation home valuations using current market data and comparable sales. This helps you understand your home's value whether you're considering selling or just curious about your investment.",
  },
  {
    question: "What makes you different from other real estate agents?",
    answer:
      "Serving Las Vegas since 2008 with 500+ successful transactions, we combine deep local market knowledge with personalized service. As part of Berkshire Hathaway HomeServices, we have access to extensive resources and technology to serve you better.",
  },
  {
    question: "Can you help with investment properties?",
    answer:
      "Absolutely! We specialize in investment real estate including rental properties, fix-and-flip opportunities, and commercial properties. We'll help you identify profitable opportunities and navigate the investment process.",
  },
  {
    question: "What are your fees?",
    answer:
      "For buyers, our services are typically free as commissions are paid by the seller. For sellers, we offer competitive commission structures. Contact us for a personalized consultation to discuss your specific situation.",
  },
];

interface FAQSectionProps {
  faqs?: FAQ[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function FAQSection({
  faqs = defaultFaqs,
  title = "Frequently asked questions",
  subtitle = "Straight answers for Irvine-to-Las Vegas relocators",
  className = "",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={`py-16 md:py-24 ${className}`}
      aria-labelledby="faq-section-heading"
    >
      <div className="site-wrap">
        <p className="index-tag mb-4">
          <b>FAQ</b> — Answers
        </p>
        <h2
          id="faq-section-heading"
          className="font-display text-3xl md:text-5xl text-ink max-w-2xl leading-tight mb-3"
        >
          {title}
        </h2>
        <p className="text-lg max-w-prose mb-10">{subtitle}</p>

        <div className="max-w-3xl border-t border-[var(--line)]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border-b border-[var(--line-soft)]"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 text-left flex justify-between items-start gap-4 hover:text-accent transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-base font-medium text-ink pr-2">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp
                      className="h-5 w-5 text-accent shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                  ) : (
                    <ChevronDown
                      className="h-5 w-5 text-ink-muted shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                  )}
                </button>
                {isOpen && (
                  <div className="pb-6 pr-8">
                    <p className="leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function getFAQSchemaData(faqs: FAQ[]) {
  return faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));
}
