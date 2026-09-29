import Link from "next/link";
import type { Metadata } from "next";
import { siteUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Moonling Privacy Policy",
  description:
    "What the Moonling baby tracker does and does not collect. No account, no ads, no tracking and no internet access; your baby's log stays on your device.",
  alternates: { canonical: `${siteUrl}/privacy/moonling` },
};

const sections = [
  {
    title: "What Moonling Collects",
    content: [
      "Nothing. Moonling has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. The developer never receives any data from it.",
      "The app has no internet permission at all, so it cannot send anything anywhere, even if it wanted to.",
    ],
  },
  {
    title: "What Stays On Your Device",
    content: [
      "Your baby's name, birthday and the log you keep (feeds, sleep, diapers, pumping, foods, growth measurements, health notes and notes), and your settings (units, clock, night mode, reminder), are kept in the app's own private storage on the device.",
      "Other apps cannot read it, it is not included in Android's cloud backup, and uninstalling the app deletes all of it. The only copies that ever leave the device are the PDF reports, spreadsheets and backup files you choose to save or share yourself, through the system file screen or share sheet.",
    ],
  },
  {
    title: "Permissions In Full",
    content: [
      "Notifications (POST_NOTIFICATIONS), used only for the optional feeding reminder. It is asked for only when you turn the reminder on, and only on Android versions that require it.",
      "Run at start-up (RECEIVE_BOOT_COMPLETED), used only to set the feeding reminder again after the device restarts.",
      "No other permissions: not internet, storage, camera, microphone, contacts, location or phone.",
    ],
  },
  {
    title: "Health Information",
    content: [
      "Moonling is a diary for parents, not a medical device, and gives no medical advice. Growth percentiles are worked out on the device from the WHO Child Growth Standards. Anything you record about your baby's health stays on your device unless you share a report yourself.",
    ],
  },
  {
    title: "Payments",
    content: [
      "Moonling is a paid app sold through the Amazon Appstore. Amazon handles the purchase; the app contains no in-app purchases and never sees any payment details.",
    ],
  },
  {
    title: "Children",
    content: [
      "Moonling is an app for parents and carers, not for children to use. It collects no data from anyone, and contains no advertising, no in-app purchases, no chat and no social features.",
    ],
  },
  {
    title: "Changes",
    content: [
      "If a future version of Moonling ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
    ],
  },
  {
    title: "Contact",
    content: [
      "For any privacy question about Moonling, email sufyantechsolutions@gmail.com with the subject line: Moonling Privacy.",
    ],
  },
];

export default function MoonlingPrivacyPage() {
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
              <h1 className="text-2xl sm:text-3xl font-bold text-surface">Moonling Privacy Policy</h1>
              <p className="text-surface/40 text-xs mt-0.5 font-mono">Last updated: September 2026</p>
            </div>
          </div>
          <p className="text-surface/55 text-sm leading-relaxed">
            Moonling is a baby tracker for feeding, sleep and diapers on Fire tablets. It has no account,
            no ads, no tracking and no internet access, and collects nothing. Your baby&apos;s log stays on the
            device. This page sets out exactly what the app can and cannot do.
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
          This policy covers the Moonling app only. The website itself is covered by the{" "}
          <Link href="/privacy" className="hover:text-primary transition-colors">
            site privacy policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
