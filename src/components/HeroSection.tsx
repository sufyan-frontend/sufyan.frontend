"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { person } from "@/lib/data";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <motion.p {...fade(0.1)} className="text-primary font-mono text-sm mb-4 tracking-wide">
              Hi, I&apos;m
            </motion.p>

            <motion.h1 {...fade(0.2)} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-surface leading-tight mb-3">
              {person.name}
            </motion.h1>

            <motion.p {...fade(0.3)} className="text-2xl sm:text-3xl font-medium mb-6" style={{ color: "#38BDF8" }}>
              {person.role}
            </motion.p>

            <motion.p {...fade(0.4)} className="text-surface/65 text-lg leading-relaxed mb-8 max-w-lg">
              {person.bio}
            </motion.p>

            <motion.div {...fade(0.5)} className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-primary text-dark font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                View My Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-primary/30 text-primary font-semibold px-6 py-3 rounded-xl hover:bg-primary/10 transition-all"
              >
                Contact Me
              </Link>
            </motion.div>

            <motion.div {...fade(0.6)} className="flex items-center gap-5">
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
              <span className="text-surface/30 text-sm">{person.location}</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-primary to-accent blur-2xl opacity-20" aria-hidden="true" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-primary/20 overflow-hidden">
                <Image
                  src="/profile.png"
                  alt="Muhammad Sufyan — Frontend Developer based in Lahore, Pakistan"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 256px, 320px"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-0 bg-card border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                <span className="text-surface text-xs sm:text-sm font-medium">Open to work</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
