"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-dark/70 backdrop-blur-md border-b border-white/5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-17">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 ">
              <Image
                src="/favicon.png"
                alt="Muhammad Sufyan logo"
                fill
                className="object-fit"
                sizes="36px"
                priority
              />
            </div>
            <div className="leading-none">
              <span className="text-surface font-bold text-sm block">Muhammad Sufyan</span>
              <span className="text-primary font-mono text-xs">Frontend Developer</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-0.5" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-surface/60 hover:text-surface hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hire Me CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-dark font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-primary/90 transition-all hover:shadow-md hover:shadow-primary/25"
          >
            Hire Me
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open ? "true" : "false"}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-surface/70 hover:text-surface hover:bg-white/5 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-white/5 bg-dark/95 backdrop-blur-xl">
          <ul className="px-4 py-3 space-y-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-surface/70 hover:text-surface hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex justify-center mt-2 bg-primary text-dark font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
