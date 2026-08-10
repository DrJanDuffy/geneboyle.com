import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <h3 className="font-bold text-xl mb-4">{siteConfig.fullName}</h3>
            <p className="text-slate-300 mb-4 text-sm">
              Irvine to Las Vegas relocation planning with Las Vegas partner{" "}
              {agentInfo.partnerAgent.name}, Berkshire Hathaway HomeServices
              Nevada Properties.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/listings"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Search homes (RealScout)
                </Link>
              </li>
              <li>
                <Link
                  href="/how-we-work"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  How we work
                </Link>
              </li>
              <li>
                <Link
                  href="/home-valuation"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Home valuation
                </Link>
              </li>
              <li>
                <Link
                  href="/neighborhoods"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Neighborhoods
                </Link>
              </li>
              <li>
                <Link
                  href="/market-report"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Market report
                </Link>
              </li>
              <li>
                <Link
                  href="/google-business"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Google Business Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Contact / schedule
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/buyers"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Home buying
                </Link>
              </li>
              <li>
                <Link
                  href="/buyers/california-relocator"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  California relocators
                </Link>
              </li>
              <li>
                <Link
                  href="/sellers"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Home selling
                </Link>
              </li>
              <li>
                <Link
                  href="/relocation"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Relocation
                </Link>
              </li>
              <li>
                <Link
                  href="/luxury-homes"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Luxury homes
                </Link>
              </li>
              <li>
                <Link
                  href="/55-plus-communities"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  55+ communities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">
                  {officeInfo.address.full}
                  <br />
                  <span className="text-slate-400">
                    LV partner: {officeInfo.lasVegasOffice.full}
                  </span>
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <Link
                  href={agentInfo.phoneTel}
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                  aria-label={`Call ${agentInfo.name} at ${agentInfo.phoneFormatted}`}
                >
                  {agentInfo.phoneFormatted}
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <Link
                  href={`mailto:${agentInfo.email}`}
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  {agentInfo.email}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} {siteConfig.fullName}. Partner brokerage: Berkshire
              Hathaway HomeServices Nevada Properties.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/faq"
                className="text-slate-400 hover:text-white transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/how-we-work"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Tools
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-4 text-center">
            {agentInfo.name} · {agentInfo.licenseLabel} · Partner{" "}
            {agentInfo.partnerAgent.name} ({agentInfo.partnerAgent.license})
          </p>
        </div>
      </div>
    </footer>
  );
}
