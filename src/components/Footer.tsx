import Link from "next/link";
import Image from "next/image";
import { person } from "@/lib/data";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 relative overflow-hidden">
      {/* top accent gradient */}
      <div className="h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 group mb-5">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden ring-1 ring-white/10 group-hover:ring-primary/40 transition-all">
                <Image src="/favicon.png" alt="Muhammad Sufyan logo" fill className="object-cover" sizes="44px" />
              </div>
              <div className="leading-none">
                <span className="text-surface font-bold text-base block mb-0.5">Muhammad Sufyan</span>
                <span className="text-primary font-mono text-xs">Frontend Developer</span>
              </div>
            </Link>

            <p className="text-surface/55 text-sm leading-relaxed max-w-xs mb-5">
              Building fast, responsive, production-ready web applications with React &amp; Next.js. Based in Lahore, Pakistan.
            </p>

            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1.5 mb-5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
              <span className="text-green-400 text-xs font-medium">Available for work</span>
            </div>

            <div className="flex gap-3">
              <a
                href={person.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/5 text-surface/50 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/5 text-surface/50 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={`mailto:${person.email}`}
                aria-label="Send email"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/5 text-surface/50 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h2 className="text-surface font-semibold mb-5 text-xs uppercase tracking-widest text-surface/40">Quick Links</h2>
            <ul className="space-y-2.5" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-surface/55 hover:text-primary text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary/30 rounded-full group-hover:bg-primary transition-colors shrink-0" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-surface font-semibold mb-5 text-xs uppercase tracking-widest text-surface/40">Get In Touch</h2>
            <ul className="space-y-3 text-sm" role="list">
              <li>
                <a href={`mailto:${person.email}`} className="text-surface/55 hover:text-primary transition-colors flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-primary/50 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {person.email}
                </a>
              </li>
              <li>
                <a href={`tel:${person.phone}`} className="text-surface/55 hover:text-primary transition-colors flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-primary/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {person.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-surface/55">
                <svg className="w-4 h-4 text-primary/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {person.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-surface/35 text-xs">
            &copy; 2026 Muhammad Sufyan. All rights reserved.
          </p>
          <p className="text-surface/25 text-xs">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
