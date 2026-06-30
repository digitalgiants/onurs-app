import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Houston Pro Handyman",
  description: "Browse photos of our completed handyman projects across Houston.",
};

export default function GalleryPage() {
  return (
    <div className="bg-page">
      {/* Page header */}
      <div className="bg-navy-900 dark:bg-navy-950 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-400">
            Our Work
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-white">
            Project Gallery
          </h1>
          <p className="mt-4 text-lg text-navy-200 max-w-2xl mx-auto">
            A look at some of the projects we&apos;ve completed for Houston
            homeowners and businesses. Click any image to view full size.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <GalleryGrid />
      </div>
    </div>
  );
}
