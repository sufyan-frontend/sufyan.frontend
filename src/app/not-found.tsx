import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center relative overflow-hidden pt-20">

      {/* Background glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-primary/4 rounded-full blur-2xl pointer-events-none" />

      {/* Dot grid overlay */}
      <div className="dot-grid absolute inset-0 pointer-events-none opacity-20" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-2xl mx-auto">

        {/* 404 giant number */}
        <div className="relative inline-block mb-2 select-none">
          <span className="text-[9rem] sm:text-[13rem] font-black leading-none bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent">
            404
          </span>
          {/* glow behind number */}
          <span className="absolute inset-0 text-[9rem] sm:text-[13rem] font-black leading-none text-primary/10 blur-3xl">
            404
          </span>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <span className="font-mono text-xs uppercase tracking-widest text-primary/50">
            Page Not Found
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        {/* Heading & description */}
        <h1 className="text-2xl sm:text-3xl font-bold text-surface mb-3">
          You&apos;ve wandered off the map.
        </h1>
        <p className="text-surface/50 text-sm sm:text-base leading-relaxed mb-10 max-w-sm mx-auto">
          This page doesn&apos;t exist, was moved, or the URL might be wrong. Let&apos;s get you back.
        </p>

        {/* Terminal box */}
        <div className="bg-card border border-white/5 rounded-xl p-5 mb-10 text-left font-mono text-xs sm:text-sm max-w-md mx-auto shadow-xl">
          <div className="flex items-center gap-1.5 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-2 text-surface/25 text-xs tracking-wider">terminal</span>
          </div>
          <p className="text-surface/40">
            <span className="text-primary/70">~ </span>
            <span className="text-surface/55">GET</span>
            <span className="text-accent/70"> /this-page</span>
          </p>
          <p className="text-red-400/60 mt-1 pl-3">
            ✖ 404 Not Found
          </p>
          <p className="text-surface/40 mt-3">
            <span className="text-primary/70">~ </span>
            <span className="text-surface/55">suggest</span>
            <span className="text-green-400/60"> redirect('/')</span>
          </p>
          <p className="text-green-400/50 mt-1 pl-3 flex items-center gap-1">
            ✔ Ready to go home
            <span className="inline-block w-2 h-4 bg-primary/60 animate-pulse ml-0.5 rounded-sm" />
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary text-dark font-semibold px-8 py-3 rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-white/10 bg-white/[0.03] text-surface/65 font-medium px-8 py-3 rounded-xl hover:bg-white/5 hover:text-surface hover:border-white/20 transition-all hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Me
          </Link>
        </div>

        {/* Bottom hint */}
        <p className="mt-10 mb-16 text-surface/25 text-xs">
          Lost? Try{" "}
          <Link href="/projects" className="text-primary/50 hover:text-primary transition-colors underline underline-offset-2">
            Projects
          </Link>
          {" "}or{" "}
          <Link href="/about" className="text-primary/50 hover:text-primary transition-colors underline underline-offset-2">
            About
          </Link>
        </p>
      </div>
    </div>
  );
}
