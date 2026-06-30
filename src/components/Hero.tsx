import Link from "next/link";
import { ArrowRight, Star, Shield, Clock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 dark:bg-navy-950">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Orange accent glow */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm text-orange-300 mb-6">
            <Star className="h-3.5 w-3.5 fill-orange-400 text-orange-400" />
            Houston&apos;s #1 Rated Handyman Service
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Every Fix.{" "}
            <span className="text-orange-400">Every Project.</span>
            <br />
            Done Right.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-navy-200 max-w-2xl leading-relaxed">
            From minor repairs to major renovations — Houston Pro Handyman serves
            commercial and residential customers across Greater Houston with
            licensed, insured, and expert craftsmanship.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-orange-600 transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 rounded-lg border border-navy-600 bg-navy-800/60 px-6 py-3.5 text-base font-semibold text-white hover:bg-navy-700 transition-colors"
            >
              View Services
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-navy-200 text-sm">
              <Shield className="h-4 w-4 text-orange-400" />
              Licensed &amp; Insured
            </div>
            <div className="flex items-center gap-2 text-navy-200 text-sm">
              <Clock className="h-4 w-4 text-orange-400" />
              Same-Day Availability
            </div>
            <div className="flex items-center gap-2 text-navy-200 text-sm">
              <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
              500+ 5-Star Reviews
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 fill-page"
        >
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
