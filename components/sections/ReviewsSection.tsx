"use client";

import { Star } from "lucide-react";
import Image from "next/image";

export interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image?: string;
  date?: string;
}

export const defaultReviews: Review[] = [
  {
    id: 1,
    name: "Tom Sanders",
    location: "Las Vegas, NV",
    rating: 5,
    text: "Dr. Duffy made our home buying experience seamless. Her knowledge of the Las Vegas market is unmatched, and she guided us through every step with professionalism and care.",
    image: "/images/reviews/review-1.jpg",
    date: "2025-11-15",
  },
  {
    id: 2,
    name: "Vitor Palmer",
    location: "Henderson, NV",
    rating: 5,
    text: "We couldn't be happier with our new home! The entire process was smooth, and Dr. Duffy's attention to detail and negotiation skills saved us thousands. Highly recommend!",
    image: "/images/reviews/review-2.jpg",
    date: "2025-10-22",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Summerlin, NV",
    rating: 5,
    text: "As first-time homebuyers, we were nervous about the process. Dr. Duffy patiently explained everything and helped us find the perfect home in our budget. Thank you!",
    image: "/images/reviews/review-3.jpg",
    date: "2025-09-08",
  },
];

export const aggregateRating = {
  ratingValue: 4.9,
  reviewCount: 500,
  bestRating: 5,
  worstRating: 1,
};

interface ReviewsSectionProps {
  reviews?: Review[];
  title?: string;
  subtitle?: string;
  googleReviewsUrl?: string;
  className?: string;
}

export default function ReviewsSection({
  reviews = defaultReviews,
  title = "What clients say",
  subtitle = "Recent feedback from buyers and relocators we supported in the Valley",
  googleReviewsUrl = "https://g.page/r/heyberkshire/review",
  className = "",
}: ReviewsSectionProps) {
  return (
    <section
      className={`py-16 md:py-24 bg-paper-2 ${className}`}
      aria-labelledby="reviews-section-heading"
    >
      <div className="site-wrap">
        <p className="index-tag mb-4">
          <b>Reviews</b> — Trust
        </p>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
          <div className="lg:col-span-5">
            <h2
              id="reviews-section-heading"
              className="font-display text-3xl md:text-4xl text-ink leading-tight"
            >
              {title}
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed mb-4">{subtitle}</p>
            <div className="flex items-center gap-2 font-sans text-sm">
              <div className="flex" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(aggregateRating.ratingValue)
                        ? "text-accent fill-accent"
                        : "text-ink-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="font-medium text-ink">
                {aggregateRating.ratingValue}
              </span>
              <span className="text-ink-muted">
                ({aggregateRating.reviewCount}+ reviews)
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12 border-t border-[var(--line)] pt-12">
          {reviews.map((review) => (
            <article
              key={review.id}
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 overflow-hidden shrink-0 bg-paper">
                  {review.image ? (
                    <Image
                      src={review.image}
                      alt={`${review.name}, ${review.location}`}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-sans text-sm text-ink-muted">
                      {review.name[0]}
                    </div>
                  )}
                </div>
                <div>
                  <h3
                    className="font-sans text-sm font-semibold text-ink"
                    itemProp="author"
                  >
                    {review.name}
                  </h3>
                  <p className="font-sans text-xs text-ink-muted">
                    {review.location}
                  </p>
                </div>
              </div>

              <div
                className="flex items-center gap-0.5 mb-3"
                itemProp="reviewRating"
                itemScope
                itemType="https://schema.org/Rating"
              >
                <meta
                  itemProp="ratingValue"
                  content={review.rating.toString()}
                />
                <meta itemProp="bestRating" content="5" />
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3.5 w-3.5 ${
                      i < review.rating
                        ? "text-accent fill-accent"
                        : "text-ink-muted"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="leading-relaxed" itemProp="reviewBody">
                {review.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-medium text-accent hover:underline underline-offset-4"
          >
            Read more reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}

export function getReviewSchemaData(reviews: Review[]) {
  return reviews.map((review) => ({
    author: review.name,
    rating: review.rating,
    text: review.text,
    date: review.date,
  }));
}
