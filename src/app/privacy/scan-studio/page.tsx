import Link from "next/link";
import type { Metadata } from "next";
import { siteUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Scan Studio Privacy Policy",
  description:
    "What the Scan Studio document scanner does and does not collect. It asks for no permissions and has no internet access; your scans stay on your device unless you share them.",
  alternates: { canonical: `${siteUrl}/privacy/scan-studio` },
};

const sections = [
  {
    title: "What Scan Studio Collects",
    content: [
      "Nothing. Scan Studio has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks for your name, email, phone number or location, and the developer never receives any data from it.",
      "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it works fully offline.",
    ],
  },
  {
    title: "Your Scans And Your Signature",
    content: [
      "The photos you scan, the finished pages, your documents' names and the signature you draw are stored only in the app's own private storage on your device. Other apps cannot read them.",
      "They are not uploaded anywhere and are excluded from Android's cloud backup. Deleting a document removes its pages; deleting the signature in Settings removes it; uninstalling the app deletes everything.",
    ],
  },
  {
    title: "When A Document Leaves Your Device",
    content: [
      "Only when you choose to. Share PDF hands the file to the app you pick in the Android share sheet (for example email, a messaging app or a cloud drive), and Save PDF writes it to the place you pick. From then on, that app or place handles the file under its own privacy policy.",
      "Scan Studio itself never sends a document anywhere on its own.",
    ],
  },
  {
    title: "Permissions In Full",
    content: [
      "None. The released app requests no Android permissions whatsoever: not internet, storage, camera, microphone, contacts, location or phone.",
      "To take a photo, Scan Studio opens your device's own camera app, which already holds the camera permission; the photo comes back to Scan Studio only. Photos from your gallery are opened through the system photo picker, which gives the app only the pictures you choose.",
    ],
  },
  {
    title: "Payments",
    content: [
      "Scan Studio is a paid app sold through the Amazon Appstore. Amazon handles the purchase; the app contains no in-app purchases or subscriptions and never sees any payment details.",
    ],
  },
  {
    title: "Children",
    content: [
      "Scan Studio is a productivity tool meant for teenagers and adults. It collects no data from anyone, including children, and contains no advertising, no chat and no links out of the app.",
    ],
  },
  {
    title: "Changes",
    content: [
      "If a future version of Scan Studio ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
    ],
  },
  {
    title: "Contact",
    content: [
      "For any privacy question about Scan Studio, email sufyantechsolutions@gmail.com with the subject line: Scan Studio Privacy.",
    ],
  },
];

export default function ScanStudioPrivacyPage() {
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
              <h1 className="text-2xl sm:text-3xl font-bold text-surface">Scan Studio Privacy Policy</h1>
              <p className="text-surface/40 text-xs mt-0.5 font-mono">Last updated: September 2026</p>
            </div>
          </div>
          <p className="text-surface/55 text-sm leading-relaxed">
            Scan Studio is a PDF document scanner for Fire tablets. It asks for no permissions at all,
            has no internet access, and collects nothing. Your scans and your signature stay on the
            device until you choose to share or save a PDF. This page sets out exactly what the app
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
          This policy covers the Scan Studio app only. The website itself is covered by the{" "}
          <Link href="/privacy" className="hover:text-primary transition-colors">
            site privacy policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
