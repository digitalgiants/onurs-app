"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FileText, CheckCircle } from "lucide-react";

const services = [
  "Plumbing",
  "Electrical",
  "Carpentry",
  "Painting",
  "General Repairs",
  "Pressure Washing",
  "Landscaping Prep",
  "Commercial Services",
  "Other",
];

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Phone number required"),
  service: z.string().min(1, "Please select a service"),
  description: z.string().min(15, "Please describe your project in more detail"),
  preferredDate: z.string().optional(),
  propertyType: z.enum(["residential", "commercial"]),
});

type FormData = z.infer<typeof schema>;

const inputCls =
  "w-full rounded-lg border border-navy-700 bg-navy-800 px-4 py-3 text-sm text-white placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition";
const labelCls = "block text-sm font-medium text-navy-200 mb-1.5";
const errorCls = "mt-1 text-xs text-orange-400";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { propertyType: "residential" },
  });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <CheckCircle className="h-12 w-12 text-green-400" />
        <h3 className="text-lg font-semibold text-white">Quote Request Received!</h3>
        <p className="text-sm text-navy-200 max-w-xs">
          We&apos;ll review your project details and send you a free estimate within 24
          hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Property type toggle */}
      <div>
        <label className={labelCls}>Property Type *</label>
        <div className="flex rounded-lg overflow-hidden border border-navy-700">
          {(["residential", "commercial"] as const).map((type) => (
            <label
              key={type}
              className="flex-1 relative cursor-pointer"
            >
              <input
                {...register("propertyType")}
                type="radio"
                value={type}
                className="sr-only peer"
              />
              <span className="block text-center py-2.5 text-sm font-medium text-navy-300 peer-checked:bg-orange-500 peer-checked:text-white transition-colors capitalize">
                {type}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Full Name *</label>
          <input {...register("name")} type="text" placeholder="Jane Smith" className={inputCls} />
          {errors.name && <p className={errorCls}>{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelCls}>Phone *</label>
          <input {...register("phone")} type="tel" placeholder="(713) 555-0000" className={inputCls} />
          {errors.phone && <p className={errorCls}>{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelCls}>Email Address *</label>
        <input {...register("email")} type="email" placeholder="jane@example.com" className={inputCls} />
        {errors.email && <p className={errorCls}>{errors.email.message}</p>}
      </div>

      <div>
        <label className={labelCls}>Service Needed *</label>
        <select {...register("service")} className={inputCls}>
          <option value="">Select a service…</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.service && <p className={errorCls}>{errors.service.message}</p>}
      </div>

      <div>
        <label className={labelCls}>Preferred Date (optional)</label>
        <input {...register("preferredDate")} type="date" className={inputCls} />
      </div>

      <div>
        <label className={labelCls}>Project Description *</label>
        <textarea
          {...register("description")}
          rows={4}
          placeholder="Describe what you need done — be as detailed as possible so we can give you an accurate quote."
          className={inputCls + " resize-none"}
        />
        {errors.description && <p className={errorCls}>{errors.description.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            Submitting…
          </>
        ) : (
          <>
            <FileText className="h-4 w-4" />
            Request Free Quote
          </>
        )}
      </button>
    </form>
  );
}
