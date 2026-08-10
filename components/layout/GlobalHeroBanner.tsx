"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { GLOBAL_HERO } from "@/lib/global-hero";

/**
 * Compact full-width hero band in the root layout.
 * Skipped on the homepage so the page-level LCP hero is the only above-fold image.
 */
export default function GlobalHeroBanner() {
  const pathname = usePathname();
  const { src, alt, tagline, phoneDisplay, phoneTel } = GLOBAL_HERO;

  if (pathname === "/") {
    return null;
  }

  return (
    <aside
      className="relative w-full overflow-hidden border-b border-[var(--line)]"
      aria-label={tagline}
    >
      <div className="relative h-[160px] sm:h-[200px] md:h-[240px] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          quality={65}
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/45 to-ink/20"
          aria-hidden="true"
        />
        <div className="relative z-10 flex h-full items-end">
          <div className="site-wrap pb-5 md:pb-6">
            <p className="font-display text-lg sm:text-xl md:text-2xl text-paper [text-shadow:0_2px_12px_rgba(0,0,0,0.7)] max-w-3xl text-balance">
              {tagline}
            </p>
            {phoneDisplay && phoneTel && (
              <a
                href={phoneTel}
                className="mt-2 inline-block font-sans text-sm sm:text-base font-medium text-accent-faint hover:text-paper underline-offset-2 hover:underline [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]"
              >
                Call or text {phoneDisplay}
              </a>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
