import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="bg-orange-500 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Ready to Get Started?
        </h2>
        <p className="mt-4 text-lg text-orange-100 max-w-xl mx-auto">
          Whether it&apos;s a quick fix or a full renovation — we&apos;re ready to help.
          Get your free estimate today.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact#quote"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-orange-600 hover:bg-orange-50 transition-colors shadow"
          >
            Request a Free Quote
            <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href="tel:+17135550100"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white/60 px-6 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
          >
            <Phone className="h-5 w-5" />
            (713) 555-0100
          </a>
        </div>
      </div>
    </section>
  );
}
