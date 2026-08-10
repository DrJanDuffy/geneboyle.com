import Link from "next/link";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] bg-paper-2">
      <div className="site-wrap py-14 md:py-16">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-5">
            <p className="font-display text-2xl text-ink tracking-tight">
              {siteConfig.fullName}
            </p>
            <p className="kicker mt-2">Continuous relocation planning</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Irvine to Las Vegas with Las Vegas partner{" "}
              {agentInfo.partnerAgent.name}, Berkshire Hathaway HomeServices
              Nevada Properties.
            </p>
          </div>

          <div className="md:col-span-3 font-sans text-sm">
            <p className="text-ink-muted uppercase tracking-[0.14em] text-xs mb-4">
              Explore
            </p>
            <ul className="space-y-2.5 text-ink-soft">
              <li>
                <Link href="/relocation" className="hover:text-ink">
                  Relocation
                </Link>
              </li>
              <li>
                <Link href="/listings" className="hover:text-ink">
                  Homes
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods" className="hover:text-ink">
                  Areas
                </Link>
              </li>
              <li>
                <Link href="/buyers" className="hover:text-ink">
                  Buyers
                </Link>
              </li>
              <li>
                <Link href="/sellers" className="hover:text-ink">
                  Sellers
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="hover:text-ink">
                  How we work
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-ink">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/home-valuation" className="hover:text-ink">
                  Valuation
                </Link>
              </li>
              <li>
                <Link href="/contact#schedule" className="hover:text-ink">
                  Book a call
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 font-sans text-sm">
            <p className="text-ink-muted uppercase tracking-[0.14em] text-xs mb-4">
              Contact
            </p>
            <p className="text-ink-soft leading-relaxed">
              {officeInfo.address.full}
              <br />
              <span className="text-ink-muted">
                LV: {officeInfo.lasVegasOffice.full}
              </span>
            </p>
            <p className="mt-4">
              <a
                href={agentInfo.phoneTel}
                className="text-accent font-medium hover:text-accent-soft"
              >
                {agentInfo.phoneFormatted}
              </a>
            </p>
            <p className="mt-2">
              <a
                href={`mailto:${agentInfo.email}`}
                className="text-ink-soft hover:text-ink"
              >
                {agentInfo.email}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--line-soft)] flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-sans text-xs text-ink-muted">
          <p>
            © {currentYear} {siteConfig.fullName}. Partner: BHHS Nevada
            Properties.
          </p>
          <p>
            {agentInfo.licenseLabel} · Partner {agentInfo.partnerAgent.name} (
            {agentInfo.partnerAgent.license})
          </p>
        </div>
      </div>
    </footer>
  );
}
