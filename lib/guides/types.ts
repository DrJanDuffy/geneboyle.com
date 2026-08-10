export type AreaGuide = {
  slug: string;
  name: string;
  title: string;
  accent?: string;
  lede: string;
  breadcrumbs: { label: string; href?: string }[];
  statsTitle: string;
  stats: { value: string; label: string }[];
  overviewTitle: string;
  overview: string[];
  highlights: { title: string; body: string }[];
  detailsTitle?: string;
  details?: { title: string; items: string[] }[];
  commutes?: {
    destination: string;
    distance: string;
    drive: string;
    rush: string;
  }[];
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaBody: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  geo?: {
    latitude: number;
    longitude: number;
    containedIn?: string;
    description: string;
  };
};
