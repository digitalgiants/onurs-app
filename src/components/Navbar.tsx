"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, Wrench, Phone } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-shadow ${
        scrolled
          ? "bg-navy-900/95 backdrop-blur-md shadow-lg"
          : "bg-navy-900"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-orange-500">
              <Image
                src="https://placekitten.com/48/48"
                alt="Logo"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="leading-tight">
              <span className="block text-base font-bold text-white">
                Houston Pro
              </span>
              <span className="block text-xs text-orange-400 uppercase tracking-widest">
                Handyman
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-navy-200 hover:text-white hover:bg-navy-800 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a
              href="tel:+17135550100"
              className="hidden sm:flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-navy-200 hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">(713) 555-0100</span>
            </a>

            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
            >
              <Wrench className="h-4 w-4" />
              Get a Quote
            </Link>

            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-md p-2 text-navy-200 hover:text-white hover:bg-navy-800 transition-colors"
              aria-label="Toggle theme"
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )
              ) : (
                <div className="h-5 w-5" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden rounded-md p-2 text-navy-200 hover:text-white hover:bg-navy-800 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="md:hidden border-t border-navy-800 pb-3 pt-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm font-medium text-navy-200 hover:text-white hover:bg-navy-800 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-navy-800 pt-2 flex flex-col gap-2">
              <a
                href="tel:+17135550100"
                className="flex items-center gap-2 px-3 py-2 text-sm text-navy-200"
              >
                <Phone className="h-4 w-4" />
                (713) 555-0100
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mx-3 rounded-md bg-orange-500 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
