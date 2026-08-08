import Link from "next/link";
import Image from "next/image";
import { person, heroStats, whatsappLink } from "@/lib/data";

// Static hero (no entrance animations) so above-the-fold content paints
// immediately instead of fading in after Framer Motion hydrates.
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl 2xl:max-w-360 mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-primary font-mono text-sm mb-4 tracking-wide">
              {person.name} — {person.role}
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-surface leading-[1.1] mb-6">
              Fast, dependable websites{" "}
              <span className="text-primary">built to be trusted</span>
            </h1>

            <p className="text-surface/65 text-lg leading-relaxed mb-8 max-w-lg">
              A React &amp; Next.js developer with 1.5+ years shipping production apps used by thousands.
              I help businesses worldwide launch high-performance, SEO-friendly websites that look premium,
              load fast, and generate real leads. Fully remote, across US, UK &amp; Gulf time zones.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-dark font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                Hire Me
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border border-primary/30 text-primary font-semibold px-6 py-3 rounded-xl hover:bg-primary/10 transition-all"
              >
                View Projects
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Muhammad Sufyan on WhatsApp"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#1ebe5b] transition-all hover:shadow-lg hover:shadow-[#25D366]/20"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.05 4.91A9.82 9.82 0 0012.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.73 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zM12.04 20.15a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24a8.2 8.2 0 015.83 2.42 8.2 8.2 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
                </svg>
                WhatsApp
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 max-w-lg">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-surface">{stat.value}</p>
                  <p className="text-surface/45 text-xs leading-tight mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-5">
              <a
                href={person.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-surface/40 hover:text-primary transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${person.email}&su=Project%20Inquiry`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="text-surface/40 hover:text-primary transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <span className="text-surface/30 text-sm">{person.location} · Remote worldwide</span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-primary to-accent blur-2xl opacity-20" aria-hidden="true" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 2xl:w-96 2xl:h-96 rounded-full border-2 border-primary/20 overflow-hidden">
                <Image
                  src="/profile.png"
                  alt="Muhammad Sufyan — Frontend Developer based in Lahore, Pakistan"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1536px) 320px, 384px"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-0 bg-card border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                <span className="text-surface text-xs sm:text-sm font-medium">Available worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
