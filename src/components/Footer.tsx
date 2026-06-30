import Link from "next/link";
import { Wrench, Phone, Mail, MapPin, Globe, Share2, Rss } from "lucide-react";

const services = [
  "Plumbing Repairs",
  "Electrical Work",
  "Carpentry",
  "Painting",
  "General Repairs",
  "Pressure Washing",
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Our Team", href: "/team" },
  { label: "Contact Us", href: "/contact" },
  { label: "Get a Quote", href: "/contact#quote" },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="h-6 w-6 text-orange-500" />
              <div>
                <span className="block font-bold text-white text-lg leading-tight">Houston Pro</span>
                <span className="block text-xs text-orange-400 uppercase tracking-widest">Handyman</span>
              </div>
            </div>
            <p className="text-sm text-navy-200 leading-relaxed mb-4">
              Houston&apos;s trusted handyman service for commercial and residential
              customers. Licensed, insured, and ready to help.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="text-navy-400 hover:text-orange-400 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-navy-400 hover:text-orange-400 transition-colors">
                <Share2 className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter/X" className="text-navy-400 hover:text-orange-400 transition-colors">
                <Rss className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/#services"
                    className="text-sm text-navy-200 hover:text-orange-400 transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-navy-200 hover:text-orange-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-orange-400 mt-0.5 shrink-0" />
                <a href="tel:+17135550100" className="text-sm hover:text-orange-400 transition-colors">
                  (713) 555-0100
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-orange-400 mt-0.5 shrink-0" />
                <a href="mailto:hello@houstonprohandyman.com" className="text-sm hover:text-orange-400 transition-colors break-all">
                  hello@houstonprohandyman.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-orange-400 mt-0.5 shrink-0" />
                <span className="text-sm">Houston, TX &amp; surrounding areas</span>
              </li>
            </ul>
            <div className="mt-4 rounded-md bg-navy-900/60 px-3 py-2">
              <p className="text-xs text-navy-200 font-medium">Business Hours</p>
              <p className="text-xs text-navy-400 mt-0.5">Mon–Fri: 7am – 6pm</p>
              <p className="text-xs text-navy-400">Sat: 8am – 4pm</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-navy-900 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-navy-400">
            &copy; {new Date().getFullYear()} Houston Pro Handyman. All rights reserved.
          </p>
          <p className="text-xs text-navy-400">
            Licensed &amp; Insured · Serving Greater Houston, TX
          </p>
        </div>
      </div>
    </footer>
  );
}
