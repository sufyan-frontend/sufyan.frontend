import Link from "next/link";
import Image from "next/image";
import { heroStats } from "@/lib/data";
import TechLogos from "./TechLogos";

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

            {/* Each line is its own block, so the headline is exactly two lines
                at every width — no reflow to a third line, no orphaned word. */}
            <h1 className="text-3xl sm:text-5xl font-bold text-surface leading-[1.1] tracking-tight mb-5">
              <span className="block">Fast websites</span>
              <span className="block text-primary">that earn trust</span>
            </h1>

            <p className="text-surface/60 text-base leading-relaxed mb-8 max-w-sm">
              React &amp; Next.js developer building high-performance, SEO-friendly
              sites that turn visitors into leads.
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

            {/* Social links live in the footer and on /contact — the hero keeps
                only the proof numbers so the CTAs stay the last thing read. */}
            <div className="border-t border-white/10 pt-6 mb-8 max-w-md flex items-center">
              {heroStats.slice(0, 3).map((stat, i) => (
                <div
                  key={stat.label}
                  className={
                    i === 0
                      ? "pr-6 sm:pr-8"
                      : "px-6 sm:px-8 border-l border-white/10"
                  }
                >
                  <p className="text-2xl font-bold text-primary leading-none">{stat.value}</p>
                  <p className="text-surface/45 text-xs leading-tight mt-2">{stat.shortLabel}</p>
                </div>
              ))}
            </div>

            <TechLogos />
          </div>

          {/* Portrait card with two offset outline frames behind it and dot
              grids at opposite corners, so the column reads as a composition
              rather than a lone image. Everything here is decorative. */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 sm:w-80 lg:w-88">
              <div
                className="absolute -inset-10 bg-primary/15 blur-3xl rounded-full"
                aria-hidden="true"
              />
              <div
                className="absolute -top-6 -right-6 bottom-16 left-16 rounded-3xl border border-primary/25 hidden sm:block"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-6 -left-6 top-28 right-28 rounded-3xl border border-white/8 hidden sm:block"
                aria-hidden="true"
              />
              <div className="absolute -top-10 -right-10 w-28 h-20 hidden lg:block dot-grid-tight" aria-hidden="true" />
              <div className="absolute -bottom-12 right-4 w-32 h-16 hidden lg:block dot-grid-tight" aria-hidden="true" />

              <div className="relative rounded-3xl p-px bg-linear-to-b from-primary/60 via-white/10 to-primary/30">
                <div className="relative aspect-4/5 rounded-3xl overflow-hidden bg-card">
                  <Image
                    src="/profile.png"
                    alt="Muhammad Sufyan — Frontend Developer based in Lahore, Pakistan"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 352px"
                  />
                </div>

                <div className="absolute -bottom-4 -left-4 sm:-left-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-card/90 backdrop-blur px-4 py-3 shadow-xl">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary shrink-0">
                    <svg className="w-5 h-5 text-dark" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M13 2L4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5z" />
                    </svg>
                  </span>
                  <span className="leading-tight">
                    <span className="block text-surface text-sm font-semibold">Performance Focused</span>
                    <span className="block text-surface/50 text-xs mt-0.5">Speed · SEO · Security</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
