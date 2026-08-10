"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/relocation", label: "Relocation" },
  { href: "/listings", label: "Homes" },
  { href: "/neighborhoods", label: "Areas" },
  { href: "/how-we-work", label: "How we work" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-[var(--line)] bg-paper/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="site-wrap flex items-center justify-between gap-4 py-4 md:py-5">
        <Link href="/" className="group min-w-0" onClick={() => setOpen(false)}>
          <span className="font-display text-xl md:text-2xl text-ink tracking-tight block leading-none">
            Dr. Gene Boyle
          </span>
          <span className="kicker mt-1 block text-[0.58rem] md:text-[0.62rem]">
            Irvine → Las Vegas
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-7 font-sans text-sm text-ink-soft">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact#schedule"
            className="rounded-sm border border-[var(--line)] px-3.5 py-2 text-ink hover:bg-ink hover:text-paper transition-colors"
          >
            Book a call
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden text-ink p-1"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--line)] bg-paper">
          <div className="site-wrap flex flex-col gap-1 py-4 font-sans">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2.5 text-ink-soft hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact#schedule"
              className="mt-2 inline-flex w-fit rounded-sm border border-[var(--line)] px-3.5 py-2 text-ink"
              onClick={() => setOpen(false)}
            >
              Book a call
            </Link>
            <a href="tel:+17022221964" className="py-2.5 text-accent font-medium">
              (702) 222-1964
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
