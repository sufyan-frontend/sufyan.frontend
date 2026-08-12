"use client";

/**
 * Floating "Download PDF" control for the standalone quotation page.
 * `print:hidden` keeps it off the exported document. It only moves to the
 * top-right once the viewport is wide enough to clear the A4 sheet (794px).
 */
export default function DownloadPdfButton() {
  return (
    <div className="qt-screen-only print:hidden fixed right-4 bottom-5 z-50 flex items-center gap-2 xl:top-5 xl:right-5 xl:bottom-auto">
      <button
        type="button"
        onClick={() => window.print()}
        className="bg-primary text-dark inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold shadow-lg shadow-sky-500/30 transition-colors hover:bg-[#0ea5e9] focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-900 focus:outline-none sm:px-4 sm:py-2.5 sm:text-sm"
        aria-label="Download quotation as PDF"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 9V2h12v7" />
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <rect x="6" y="14" width="12" height="8" rx="1" />
        </svg>
        <span className="hidden sm:inline">Download PDF</span>
        <span className="sm:hidden">PDF</span>
      </button>
    </div>
  );
}
