import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Square, MapPin, Calendar } from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { agentInfo } from "@/lib/site-config";
import RealScoutOfficeWidget from "@/components/realscout/RealScoutOfficeWidget";

async function getProperty(id: string) {
  return {
    id,
    name: "Modern home in Summerlin",
    location: "Summerlin, Las Vegas, NV",
    price: "$850,000",
    image: "/images/marketing/listings.jpg",
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 3200,
    yearBuilt: 2018,
    description:
      "Open floor plan, updated kitchen, and usable backyard. Approximately 3,200 sq ft. Confirm current MLS status and disclosures before touring.",
  };
}

type PropertyPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const { id } = await params;
  const property = await getProperty(id);
  return buildPageMetadata({
    title: `${property.name} | Las Vegas Homes | Dr. Gene Boyle`,
    description: `${property.location} — ${property.price}. Call (702) 222-1964 for a private tour.`,
    path: `/listings/${id}`,
  });
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params;
  const property = await getProperty(id);

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="site-wrap">
          <nav className="font-sans text-xs text-ink-muted mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-accent">
              Home
            </Link>
            {" / "}
            <Link href="/listings" className="hover:text-accent">
              Listings
            </Link>
            {" / "}
            <span className="text-ink">{property.name}</span>
          </nav>

          <p className="index-tag mb-4">MLS detail · Placeholder</p>
          <h1 className="font-display text-4xl md:text-5xl text-ink max-w-3xl leading-tight mb-3">
            {property.name}
          </h1>
          <p className="flex items-center gap-2 text-ink-soft mb-4">
            <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
            {property.location}
          </p>
          <p className="font-display text-3xl text-accent mb-10">{property.price}</p>

          <div className="relative h-64 md:h-[28rem] overflow-hidden mb-12 bg-paper-2">
            <Image
              src={property.image}
              alt={`${property.name} in ${property.location}`}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>

        <RealScoutOfficeWidget />

        <div className="site-wrap">
          <div className="grid md:grid-cols-12 gap-12 mb-16 mt-16">
            <div className="md:col-span-7">
              <p className="index-tag mb-3">
                <b>01</b> — Overview
              </p>
              <p className="text-lg leading-relaxed mb-8">{property.description}</p>
              <p className="text-sm text-ink-muted">
                Live inventory is best searched via RealScout on the listings page.
                This detail route is a layout placeholder until wired to MLS IDs.
              </p>
            </div>
            <div className="md:col-span-5">
              <p className="index-tag mb-3">
                <b>02</b> — Specs
              </p>
              <ul className="border-t border-[var(--line)]">
                {[
                  [Bed, `${property.bedrooms} bedrooms`],
                  [Bath, `${property.bathrooms} bathrooms`],
                  [Square, `${property.squareFeet.toLocaleString()} sq ft`],
                  [Calendar, `Built ${property.yearBuilt}`],
                ].map(([Icon, label]) => {
                  const IconComp = Icon as typeof Bed;
                  return (
                    <li
                      key={String(label)}
                      className="flex items-center gap-3 border-b border-[var(--line-soft)] py-4 text-sm"
                    >
                      <IconComp className="h-4 w-4 text-accent" aria-hidden="true" />
                      {label as string}
                    </li>
                  );
                })}
              </ul>
              <div className="mt-8 flex flex-col gap-3 font-sans text-sm">
                <a
                  href={agentInfo.phoneTel}
                  className="inline-flex justify-center bg-ink text-paper px-5 py-3 hover:bg-accent transition-colors"
                >
                  Call {agentInfo.phoneFormatted}
                </a>
                <Link
                  href="/contact#schedule"
                  className="inline-flex justify-center border border-[var(--line)] px-5 py-3 hover:bg-ink hover:text-paper transition-colors"
                >
                  Schedule a tour
                </Link>
                <Link
                  href="/listings"
                  className="inline-flex justify-center text-accent font-medium hover:underline underline-offset-4 py-2"
                >
                  Back to live MLS search →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
