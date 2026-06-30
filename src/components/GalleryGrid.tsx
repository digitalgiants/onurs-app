"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const galleryItems = [
  { src: "https://placekitten.com/800/600", thumb: "https://placekitten.com/400/300", caption: "Kitchen Cabinet Installation" },
  { src: "https://placekitten.com/801/600", thumb: "https://placekitten.com/401/300", caption: "Deck Restoration & Staining" },
  { src: "https://placekitten.com/802/600", thumb: "https://placekitten.com/402/300", caption: "Interior Painting — Living Room" },
  { src: "https://placekitten.com/803/600", thumb: "https://placekitten.com/403/300", caption: "Bathroom Plumbing Upgrade" },
  { src: "https://placekitten.com/804/600", thumb: "https://placekitten.com/404/300", caption: "Fence Installation — Cedar" },
  { src: "https://placekitten.com/805/600", thumb: "https://placekitten.com/405/300", caption: "Commercial Office Refresh" },
  { src: "https://placekitten.com/806/600", thumb: "https://placekitten.com/406/300", caption: "Exterior House Painting" },
  { src: "https://placekitten.com/807/600", thumb: "https://placekitten.com/407/300", caption: "Electrical Panel Upgrade" },
  { src: "https://placekitten.com/808/600", thumb: "https://placekitten.com/408/300", caption: "Custom Built-in Shelving" },
  { src: "https://placekitten.com/809/600", thumb: "https://placekitten.com/409/300", caption: "Pressure Washing — Driveway" },
  { src: "https://placekitten.com/810/600", thumb: "https://placekitten.com/410/300", caption: "Tile & Grout Repair" },
  { src: "https://placekitten.com/811/600", thumb: "https://placekitten.com/411/300", caption: "Pergola Construction" },
];

export function GalleryGrid() {
  const [selected, setSelected] = useState<number | null>(null);

  const prev = useCallback(() => {
    setSelected((s) => (s === null ? null : (s - 1 + galleryItems.length) % galleryItems.length));
  }, []);

  const next = useCallback(() => {
    setSelected((s) => (s === null ? null : (s + 1) % galleryItems.length));
  }, []);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, prev, next, close]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {galleryItems.map((item, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className="group relative overflow-hidden rounded-2xl bg-navy-100 dark:bg-navy-900 aspect-video cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            aria-label={`Open: ${item.caption}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.thumb}
              alt={item.caption}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/50 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8 drop-shadow" />
            </div>
            {/* Caption bar */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-navy-900/90 to-transparent px-4 py-3">
              <p className="text-sm font-medium text-white truncate">{item.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={close}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

            {/* Close */}
            <button
              onClick={close}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/10 hover:bg-white/20 p-2 text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 z-10 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 z-10 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <motion.div
              key={selected}
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-10 mx-4 max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={galleryItems[selected].src}
                alt={galleryItems[selected].caption}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              <div className="mt-3 flex items-center justify-between">
                <p className="text-sm font-medium text-white/90">
                  {galleryItems[selected].caption}
                </p>
                <p className="text-sm text-white/50">
                  {selected + 1} / {galleryItems.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
