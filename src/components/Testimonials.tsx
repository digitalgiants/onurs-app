import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sandra M.",
    role: "Homeowner, The Woodlands",
    avatar: "https://placekitten.com/80/80",
    rating: 5,
    text: "Absolutely fantastic service! They fixed my leaking faucet, patched up some drywall, and even hung some shelves — all in one visit. Couldn't be happier with the results.",
  },
  {
    name: "James T.",
    role: "Property Manager, Midtown",
    avatar: "https://placekitten.com/81/80",
    rating: 5,
    text: "I manage a 40-unit apartment complex and Houston Pro Handyman is my go-to for maintenance. Fast, reliable, and the pricing is always fair. My tenants love them.",
  },
  {
    name: "Lisa R.",
    role: "Small Business Owner, Sugar Land",
    avatar: "https://placekitten.com/82/80",
    rating: 5,
    text: "Called on a Friday about an electrical issue at my salon. They came out Saturday morning, fixed it completely, and were incredibly professional. Will use them for everything.",
  },
  {
    name: "Carlos V.",
    role: "Homeowner, Katy",
    avatar: "https://placekitten.com/83/80",
    rating: 5,
    text: "The deck repair they did for us is stunning. On time, clean work, and they left the yard cleaner than when they arrived. That attention to detail is hard to find.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-surface-raised">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Customer Reviews
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-text-primary">
            What Houston Says About Us
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto">
            Don&apos;t take our word for it — hear from the neighbors and businesses
            we&apos;ve served.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-surface border border-border p-6 flex flex-col gap-4"
            >
              <Stars count={t.rating} />
              <blockquote className="text-text-secondary leading-relaxed text-sm flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover border-2 border-orange-500/30"
                />
                <div>
                  <p className="text-sm font-semibold text-text-primary">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
