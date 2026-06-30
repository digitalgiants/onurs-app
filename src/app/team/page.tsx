import type { Metadata } from "next";
import { Mail, Phone, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team | Houston Pro Handyman",
  description: "Meet the skilled professionals behind Houston Pro Handyman.",
};

const team = [
  {
    name: "Marco Rivera",
    title: "Lead Technician & Co-founder",
    avatar: "https://placekitten.com/400/400",
    bio: "With over 18 years in the trades, Marco leads every major project with precision and pride. He holds licenses in both plumbing and electrical, and is the heart of Houston Pro Handyman.",
    specialties: ["Plumbing", "Electrical", "Project Management"],
    phone: "(713) 555-0101",
    email: "marco@houstonprohandyman.com",
  },
  {
    name: "Angela Torres",
    title: "Operations Manager & Co-founder",
    avatar: "https://placekitten.com/401/400",
    bio: "Angela keeps everything running smoothly — from scheduling and customer communication to quality control. Her background in construction management ensures every job meets the highest standard.",
    specialties: ["Operations", "Client Relations", "Quality Control"],
    phone: "(713) 555-0102",
    email: "angela@houstonprohandyman.com",
  },
  {
    name: "Derek Johnson",
    title: "Master Carpenter",
    avatar: "https://placekitten.com/402/400",
    bio: "Derek has 12 years of finish carpentry experience ranging from custom cabinetry to full deck builds. His meticulous attention to detail makes every project look custom and polished.",
    specialties: ["Carpentry", "Decks & Fencing", "Interior Trim"],
    phone: "(713) 555-0103",
    email: "derek@houstonprohandyman.com",
  },
  {
    name: "Sarah Kim",
    title: "Painting & Restoration Specialist",
    avatar: "https://placekitten.com/403/400",
    bio: "Sarah brings an artist's eye to every painting and restoration job. Interior, exterior, commercial — she matches colors perfectly and leaves surfaces flawless every time.",
    specialties: ["Interior Painting", "Exterior Painting", "Drywall Repair"],
    phone: "(713) 555-0104",
    email: "sarah@houstonprohandyman.com",
  },
];

export default function TeamPage() {
  return (
    <div className="bg-page">
      {/* Page header */}
      <div className="bg-navy-900 dark:bg-navy-950 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-400">
            The People Behind the Work
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-white">
            Meet Our Team
          </h1>
          <p className="mt-4 text-lg text-navy-200 max-w-2xl mx-auto">
            Experienced, licensed, and passionate professionals who take pride
            in every job — big or small.
          </p>
        </div>
      </div>

      {/* Team grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group rounded-2xl bg-surface border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Photo */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-navy-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Orange accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500" />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-text-primary">{member.name}</h2>
                <p className="text-sm font-medium text-orange-500 mt-0.5">{member.title}</p>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{member.bio}</p>

                {/* Specialties */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {member.specialties.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-1 rounded-full bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-600 dark:text-orange-400"
                    >
                      <Wrench className="h-3 w-3" />
                      {s}
                    </span>
                  ))}
                </div>

                {/* Contact */}
                <div className="mt-5 pt-5 border-t border-border flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${member.phone.replace(/\D/g, "")}`}
                    className="flex items-center gap-2 text-sm text-text-secondary hover:text-orange-500 transition-colors"
                  >
                    <Phone className="h-4 w-4 text-orange-400" />
                    {member.phone}
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-sm text-text-secondary hover:text-orange-500 transition-colors"
                  >
                    <Mail className="h-4 w-4 text-orange-400" />
                    {member.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join the team CTA */}
        <div className="mt-16 rounded-2xl bg-navy-900 dark:bg-navy-950 p-8 sm:p-10 text-center border border-navy-800">
          <h3 className="text-2xl font-bold text-white">Want to Join Our Team?</h3>
          <p className="mt-3 text-navy-200 max-w-md mx-auto">
            We&apos;re always looking for skilled, reliable tradespeople to grow with us.
            Send us your info and let&apos;s talk.
          </p>
          <a
            href="mailto:careers@houstonprohandyman.com"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white hover:bg-orange-600 transition-colors"
          >
            <Mail className="h-5 w-5" />
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}
