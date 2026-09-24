import Link from "next/link";
import type { Metadata } from "next";
import { siteUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Alif Bay Privacy Policy",
  description:
    "What the Alif Bay Arabic alphabet app for children does and does not collect. It has no internet access and asks for no permissions, so nothing can leave the tablet.",
  alternates: { canonical: `${siteUrl}/privacy/alif-bay` },
};

const sections = [
  {
    title: "What Alif Bay Collects",
    content: [
      "Nothing. Alif Bay has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks a child or a parent for a name, age, email, photo, voice or location.",
      "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it works with the tablet fully offline.",
    ],
  },
  {
    title: "What Stays On The Tablet",
    content: [
      "To show a child's progress, the app remembers which letters have been opened and how many stars have been earned in the matching game. It also remembers two settings: the colour theme and the voice.",
      "That is the complete list. There are no names, ages, device identifiers or timestamps. The data lives in the app's own private storage, is excluded from Android and Amazon backups and device transfer, and is deleted when the app is uninstalled. The Settings screen also has a button that resets the progress.",
    ],
  },
  {
    title: "Permissions In Full",
    content: [
      "None. The app declares no Android permissions: not internet, storage, camera, microphone, contacts, location or phone. The recordings, pictures and font are bundled inside the app.",
    ],
  },
  {
    title: "Children",
    content: [
      "Alif Bay is made for young children and follows Amazon's Child-Directed App Policy and the US Children's Online Privacy Protection Act (COPPA). Because it collects no personal information at all, there is nothing to disclose, consent to, review or delete.",
      "The app contains no advertising, no in-app purchases, no chat, no web browser and no links out of the app, so a child cannot be sent anywhere or asked to buy anything. Resetting progress is behind a simple parental gate.",
    ],
  },
  {
    title: "Changes",
    content: [
      "If a future version of Alif Bay ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
    ],
  },
  {
    title: "Contact",
    content: [
      "For any privacy question about Alif Bay, email sufyantechsolutions@gmail.com with the subject line: Alif Bay Privacy.",
    ],
  },
];

export default function AlifBayPrivacyPage() {
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
              <h1 className="text-2xl sm:text-3xl font-bold text-surface">Alif Bay Privacy Policy</h1>
              <p className="text-surface/40 text-xs mt-0.5 font-mono">Last updated: September 2026</p>
            </div>
          </div>
          <p className="text-surface/55 text-sm leading-relaxed">
            Alif Bay teaches young children the 28 letters of the Arabic alphabet on Fire tablets
            and Android. It collects nothing, sends nothing and has no account, and it does not ask
            for a single Android permission. This page sets out exactly what the app can and cannot do.
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
          This policy covers the Alif Bay app only. The website itself is covered by the{" "}
          <Link href="/privacy" className="hover:text-primary transition-colors">
            site privacy policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
