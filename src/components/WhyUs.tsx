import { BadgeCheck, Clock3, HeartHandshake, DollarSign, Star, Users } from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Licensed & Insured",
    desc: "All technicians are fully licensed, bonded, and insured so you're always protected.",
  },
  {
    icon: Clock3,
    title: "Punctual Every Time",
    desc: "We show up on time, every time. Your schedule matters — and we respect it.",
  },
  {
    icon: HeartHandshake,
    title: "Satisfaction Guaranteed",
    desc: "Not happy? We'll fix it free. Our work isn't done until you're 100% satisfied.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    desc: "Upfront quotes with no hidden fees. You always know what you're paying before work begins.",
  },
  {
    icon: Star,
    title: "Top-Rated Service",
    desc: "500+ five-star reviews across Google, Yelp, and Angi. Houston trusts us — and we earn it daily.",
  },
  {
    icon: Users,
    title: "Commercial & Residential",
    desc: "From single-family homes to large commercial properties — we have the team and tools for any scale.",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 sm:py-28 bg-navy-900 dark:bg-navy-950 relative overflow-hidden">
      {/* Subtle diagonal stripe */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-400">
            Why Choose Us
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            The Houston Pro Difference
          </h2>
          <p className="mt-4 text-lg text-navy-200 max-w-2xl mx-auto">
            We don&apos;t just fix things — we build lasting trust with every job.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 rounded-2xl bg-navy-800/60 border border-navy-700 p-6"
            >
              <div className="shrink-0 h-10 w-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <Icon className="h-5 w-5 text-orange-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">{title}</h3>
                <p className="text-sm text-navy-200 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
