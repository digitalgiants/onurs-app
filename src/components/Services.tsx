import { Wrench, Zap, Droplets, PaintBucket, Hammer, TreePine, Wind, Home } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Plumbing",
    desc: "Leak repairs, fixture installation, drain cleaning, water heater service, and emergency plumbing for homes and businesses.",
  },
  {
    icon: Zap,
    title: "Electrical",
    desc: "Outlet installation, panel inspections, lighting upgrades, ceiling fans, and safe electrical repairs by licensed pros.",
  },
  {
    icon: Hammer,
    title: "Carpentry",
    desc: "Custom shelving, door and window trim, deck repairs, fence installation, and finish carpentry for any space.",
  },
  {
    icon: PaintBucket,
    title: "Painting",
    desc: "Interior and exterior painting, staining, drywall patching, and texture matching with premium paints.",
  },
  {
    icon: Wrench,
    title: "General Repairs",
    desc: "Furniture assembly, appliance hookups, caulking, weatherstripping, and any home repair you need handled fast.",
  },
  {
    icon: Wind,
    title: "Pressure Washing",
    desc: "Driveways, sidewalks, decks, siding, and commercial exteriors cleaned to a like-new finish.",
  },
  {
    icon: TreePine,
    title: "Landscaping Prep",
    desc: "Gutter cleaning, yard cleanup, irrigation repairs, and seasonal prep to keep your property looking great.",
  },
  {
    icon: Home,
    title: "Commercial Services",
    desc: "Tenant improvements, office maintenance, common area upkeep, and rapid-response repairs for property managers.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-page">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            What We Do
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-text-primary">
            Services We Offer
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            One call handles it all. We cover the full range of handyman and
            maintenance services for Houston homes and businesses.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl bg-surface border border-border p-6 hover:border-orange-500/40 hover:shadow-lg transition-all duration-200"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                <Icon className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-base font-semibold text-text-primary mb-2">{title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
