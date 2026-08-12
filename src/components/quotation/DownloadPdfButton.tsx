"use client";

/**
 * Floating "Download PDF" control for the standalone quotation page.
 * `print:hidden` keeps it off the exported document.
 */
export default function DownloadPdfButton() {
  return (
    <div className="qt-screen-only print:hidden fixed right-4 bottom-5 z-50 flex items-center gap-2 sm:top-5 sm:right-5 sm:bottom-auto">
      <button
        type="button"
        onClick={() => window.print()}
        className="bg-primary text-dark inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold shadow-lg shadow-sky-500/30 transition-colors hover:bg-[#0ea5e9] focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-900 focus:outline-none"
        aria-label="Download quotation as PDF"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 9V2h12v7" />
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <rect x="6" y="14" width="12" height="8" rx="1" />
        </svg>
        Download PDF
      </button>
    </div>
  );
}
