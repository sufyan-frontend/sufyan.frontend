import Link from "next/link";
import Image from "next/image";
import { person, heroStats } from "@/lib/data";

// Static hero (no entrance animations) so above-the-fold content paints
// immediately instead of fading in after Framer Motion hydrates.
export default function HeroSection() {
  return (
    <section className="relative pt-12 overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl 2xl:max-w-360 mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            {/* Name and role are already in the header, so the pill only carries
                what the header does not say: availability and reach. */}
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card/60 px-3 py-1 text-xs text-surface/70 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" aria-hidden="true" />
              Available for new projects · Remote worldwide
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface leading-[1.15] text-balance mb-4 max-w-lg">
              Fast, dependable websites{" "}
              <span className="text-primary">built to be trusted</span>
            </h1>

            <p className="text-surface/60 text-base leading-relaxed mb-7 max-w-md">
              React &amp; Next.js developer building high-performance, SEO-friendly
              sites that load fast and generate real leads.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-dark font-semibold px-6 py-3 rounded-xl transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
              >
                Hire Me
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 border border-primary/30 text-primary font-semibold px-6 py-3 rounded-xl transition-all hover:bg-primary/10 hover:border-primary/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
              >
                View Projects
              </Link>
            </div>

            <div className="border-t border-white/10 pt-5 max-w-md flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
              <div className="flex items-center gap-5 sm:gap-6">
                {heroStats.slice(0, 3).map((stat) => (
                  <div key={stat.label}>
                    <p className="text-lg font-bold text-surface leading-none">{stat.value}</p>
                    <p className="text-surface/40 text-[11px] leading-tight mt-1">{stat.shortLabel}</p>
                  </div>
                ))}
              </div>

              {/* WhatsApp is intentionally absent here — FloatingActions already
                  renders a persistent WhatsApp button on every page. */}
              <div className="flex items-center gap-4">
                <a
                  href={person.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-surface/40 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${person.email}&su=Project%20Inquiry`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  className="text-surface/40 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-primary to-accent blur-2xl opacity-20" aria-hidden="true" />
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 2xl:w-72 2xl:h-72 rounded-full border-2 border-primary/20 overflow-hidden">
                <Image
                  src="/profile.png"
                  alt="Muhammad Sufyan — Frontend Developer based in Lahore, Pakistan"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 208px, (max-width: 1536px) 256px, 288px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
