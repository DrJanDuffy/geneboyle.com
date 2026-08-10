import Link from "next/link";

export default function FeaturedProperties() {
  return (
    <section className="py-16 md:py-24 bg-paper-2">
      <div className="site-wrap text-center">
        <p className="index-tag mb-4">Live MLS</p>
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-4">
          Search the Valley
        </h2>
        <p className="max-w-prose mx-auto mb-8">
          Use the live RealScout listings experience for current inventory,
          attribution, and MLS disclaimer.
        </p>
        <Link
          href="/listings"
          className="inline-flex font-sans text-sm font-medium bg-ink text-paper px-5 py-3 hover:bg-accent transition-colors"
        >
          Open listings
        </Link>
      </div>
    </section>
  );
}
