import type { Metadata } from "next";
import DownloadPdfButton from "@/components/quotation/DownloadPdfButton";
import QuotationDocument from "@/components/quotation/QuotationDocument";
import { brand, quotationMeta } from "@/lib/quotation-data";

export const metadata: Metadata = {
  title: { absolute: `${quotationMeta.title} — ${brand.name}` },
  description:
    "Official website development quotation — frontend, SEO, backend APIs, and complete package pricing, with free management and hosting benefits included.",
  robots: { index: false, follow: false }, // client-facing document, kept out of search
};

/**
 * Standalone, print-ready quotation. Renders two exact A4 sheets; the browser's
 * print dialog (or `npm run pdf:quotation`) exports them 1:1 with no scaling.
 * All content comes from `src/lib/quotation-data.ts`.
 */
export default function QuotationPage() {
  return (
    <div
      className="qt-backdrop min-h-screen w-full px-3 py-8"
      style={{ background: "linear-gradient(to bottom right, #cbd5e1, #94a3b8)" }}
    >
      <DownloadPdfButton />
      <QuotationDocument />
    </div>
  );
}
