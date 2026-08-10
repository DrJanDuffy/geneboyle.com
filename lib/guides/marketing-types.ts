export type MarketingCta = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "phone";
};

export type MarketingSection =
  | {
      kind: "prose";
      label?: string;
      title: string;
      paragraphs: string[];
      tone?: "default" | "muted" | "ink";
    }
  | {
      kind: "cards";
      label?: string;
      title: string;
      items: { title: string; body: string; href?: string }[];
      tone?: "default" | "muted" | "ink";
    }
  | {
      kind: "steps";
      label?: string;
      title: string;
      steps: { title: string; body: string }[];
      tone?: "default" | "muted" | "ink";
    };

export type MarketingGuide = {
  kicker?: string;
  title: string;
  accent?: string;
  lede: string;
  breadcrumbs?: { label: string; href?: string }[];
  ctas?: MarketingCta[];
  statsTitle?: string;
  stats?: { value: string; label: string }[];
  sections: MarketingSection[];
  faqs?: { question: string; answer: string }[];
  faqTitle?: string;
  ctaTitle: string;
  ctaBody: string;
  ctaHref?: string;
  ctaLabel?: string;
  showListings?: boolean;
};
