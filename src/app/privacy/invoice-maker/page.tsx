import Link from "next/link";
import type { Metadata } from "next";
import { siteUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Invoice Maker Privacy Policy",
  description:
    "What Invoice Maker does with your business data. Everything stays on your device, the app has no internet access, and a document or backup only leaves when you share it.",
  alternates: { canonical: `${siteUrl}/privacy/invoice-maker` },
};

const sections = [
  {
    title: "What Invoice Maker Collects",
    content: [
      "Nothing. Invoice Maker has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. The developer never receives any of your data.",
      "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it works fully offline.",
    ],
  },
  {
    title: "Your Business Data",
    content: [
      "Everything you type into the app stays on your device: your business name, address, tax number, logo and signature; your customers' names and contact details; your products, prices and tax rates; and every invoice, receipt, estimate and payment you record.",
      "It is stored in the app's private storage, where other apps cannot read it, and it is deleted when the app is uninstalled or when you choose Delete all data in Settings.",
      "If you have switched on your device's own backup (for example Android device backup), the operating system may include the app's data in that backup. That is controlled by your device settings, not by Invoice Maker.",
    ],
  },
  {
    title: "Customer Details You Enter",
    content: [
      "You may type in details about your own customers so they appear on your documents. You are responsible for having their permission to keep those details. Invoice Maker only stores them on your device and never sends them anywhere.",
    ],
  },
  {
    title: "When Something Leaves The Device",
    content: [
      "Only when you choose to. Share hands a PDF, or a backup file, to the app you pick (for example email, WhatsApp or Google Drive), and from then on that app's own privacy policy applies. Save PDF and Save a backup file write to a folder you choose. Print sends the document to your printer through the system print service.",
      "A backup file contains all of your business data, including customers and documents, in readable form. Keep it somewhere private.",
      "Invoice Maker never shares anything on its own.",
    ],
  },
  {
    title: "Files You Open",
    content: [
      "When you choose a logo, a signature image or a backup file to restore, the app reads it through the system file picker, which grants access to that one file only. Images are copied into the app's private storage; the original file is never changed.",
    ],
  },
  {
    title: "Payments",
    content: [
      "Invoice Maker is a paid app sold through the Amazon Appstore. Amazon handles the purchase; the app contains no in-app purchases and never sees any payment details. Payments you record inside the app are just notes about what your customers paid you.",
    ],
  },
  {
    title: "Permissions In Full",
    content: [
      "None that reach outside the app. The only permission in the app is one Android adds for its own internal use. There is no internet, storage, camera, contacts, location or phone permission.",
    ],
  },
  {
    title: "Children",
    content: [
      "Invoice Maker is a business tool for a general audience and is not directed at children. It collects no personal information from anyone.",
    ],
  },
  {
    title: "Changes",
    content: [
      "If a future version of Invoice Maker ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
    ],
  },
  {
    title: "Contact",
    content: [
      "For any privacy question about Invoice Maker, email sufyantechsolutions@gmail.com with the subject line: Invoice Maker Privacy.",
    ],
  },
];

export default function InvoiceMakerPrivacyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <Link
            href="/apps"
            className="inline-flex items-center gap-1.5 text-xs text-surface/40 hover:text-primary transition-colors mb-8 font-mono"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to apps
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-surface">Invoice Maker Privacy Policy</h1>
              <p className="text-surface/40 text-xs mt-0.5 font-mono">Last updated: September 2026</p>
            </div>
          </div>
          <p className="text-surface/55 text-sm leading-relaxed">
            Invoice Maker makes invoices, receipts and estimates on Fire tablets and Android. Your
            business data stays on the device, the app has no internet access, and a document or backup
            only leaves the device when you share it yourself. This page sets out exactly what the app
            can and cannot do.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {sections.map((section, i) => (
            <div key={section.title} className="bg-card border border-white/5 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary/50 font-mono text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-surface font-semibold text-base">{section.title}</h2>
              </div>
              <ul className="space-y-2.5">
                {section.content.map((point, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2.5 text-surface/55 text-sm leading-relaxed"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/40 shrink-0 mt-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-surface/30 text-xs text-center leading-relaxed">
          This policy covers the Invoice Maker app only. The website itself is covered by the{" "}
          <Link href="/privacy" className="hover:text-primary transition-colors">
            site privacy policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
