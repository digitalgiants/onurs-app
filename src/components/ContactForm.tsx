"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const inputCls =
  "w-full rounded-lg border border-border bg-surface-raised px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition";
const labelCls = "block text-sm font-medium text-text-secondary mb-1.5";
const errorCls = "mt-1 text-xs text-red-500";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <CheckCircle className="h-12 w-12 text-green-500" />
        <h3 className="text-lg font-semibold text-text-primary">Message Sent!</h3>
        <p className="text-sm text-text-secondary max-w-xs">
          Thanks for reaching out. We&apos;ll get back to you within a few hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <label className={labelCls}>Full Name *</label>
        <input {...register("name")} type="text" placeholder="Jane Smith" className={inputCls} />
        {errors.name && <p className={errorCls}>{errors.name.message}</p>}
      </div>

      <div>
        <label className={labelCls}>Email Address *</label>
        <input {...register("email")} type="email" placeholder="jane@example.com" className={inputCls} />
        {errors.email && <p className={errorCls}>{errors.email.message}</p>}
      </div>

      <div>
        <label className={labelCls}>Phone Number (optional)</label>
        <input {...register("phone")} type="tel" placeholder="(713) 555-0000" className={inputCls} />
      </div>

      <div>
        <label className={labelCls}>Message *</label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="How can we help you?"
          className={inputCls + " resize-none"}
        />
        {errors.message && <p className={errorCls}>{errors.message.message}</p>}
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
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
