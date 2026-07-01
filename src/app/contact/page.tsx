import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact Us | Houston Pro Handyman",
  description: "Get in touch with Houston Pro Handyman or request a free quote.",
};

const contactInfo = [
  { icon: Phone, label: "Phone", value: "(713) 555-0100", href: "tel:+17135550100" },
  { icon: Mail, label: "Email", value: "hello@houstonprohandyman.com", href: "mailto:hello@houstonprohandyman.com" },
  { icon: MapPin, label: "Service Area", value: "Greater Houston, TX & Surrounding Areas", href: undefined },
  { icon: Clock, label: "Hours", value: "Mon–Fri 7am–6pm · Sat 8am–4pm", href: undefined },
];

export default function ContactPage() {
  return (
    <div className="bg-page">
      {/* Page header */}
      <div className="bg-navy-900 dark:bg-navy-950 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-400">
            Get in Touch
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-white">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-navy-200 max-w-2xl mx-auto">
            Ready to get started? Send us a message or request a free quote
            below. We typically respond within a few hours.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Contact info strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contactInfo.map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="rounded-2xl bg-surface border border-border p-5 flex items-start gap-4"
            >
              <div className="shrink-0 h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <Icon className="h-5 w-5 text-orange-500" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">{label}</p>
                {href ? (
                  <a href={href} className="text-sm font-medium text-text-primary hover:text-orange-500 transition-colors break-all">
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-text-primary">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Two-column forms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* General contact */}
          <div id="contact" className="rounded-2xl bg-surface border border-border p-6 sm:p-8">
            <h2 className="text-xl font-bold text-text-primary mb-1">Send Us a Message</h2>
            <p className="text-sm text-text-secondary mb-6">
              Questions, feedback, or just saying hello — we&apos;d love to hear from you.
            </p>
            <ContactForm />
          </div>

          {/* Quote request */}
          <div id="quote" className="rounded-2xl bg-navy-900 dark:bg-navy-950 border border-navy-800 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-1">Request a Free Quote</h2>
            <p className="text-sm text-navy-200 mb-6">
              Tell us about your project and we&apos;ll get back to you with a
              no-obligation estimate — usually within 24 hours.
            </p>
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}
