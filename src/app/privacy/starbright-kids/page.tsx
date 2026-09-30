import Link from "next/link";
import type { Metadata } from "next";
import { siteUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Starbright Kids Privacy Policy",
  description:
    "What the Starbright Kids learning app (English, Math and toddler games) does and does not collect. It has no internet access, no ads and no in-app purchases, so nothing can leave the device.",
  alternates: { canonical: `${siteUrl}/privacy/starbright-kids` },
};

const sections = [
  {
    title: "What Starbright Kids Collects",
    content: [
      "Nothing. Starbright Kids has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks a child for a name, age, email, photo, voice or location.",
      "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it works fully offline on Fire tablets, Fire TV and Android devices.",
    ],
  },
  {
    title: "What Stays On The Device",
    content: [
      "To show progress and rewards, the app remembers for each child: the stars earned in each activity, how many times each activity was played and how many tries it took (for the parents' progress report), the number level reached in the math games, the sticker book, and the chosen animal friend, hat and glasses.",
      "For the family it remembers the child profiles, the settings a parent chose (music, voice and the daily play-time limit) and the minutes played today. A profile has a picture and, only if a parent types one in the parents' area, a first name or nickname.",
      "That is the complete list. There are no device identifiers and no history of when or where the app was used. The data lives in the app's own private storage, is excluded from Android and Amazon backups and device transfer, and is deleted when the app is uninstalled. A parent can remove a child's profile, with all its stars and stickers, at any time in the parents' area.",
    ],
  },
  {
    title: "Permissions In Full",
    content: [
      "None that a user is asked for. The app declares no Android permissions: not internet, storage, camera, microphone, contacts, location or phone. Every voice recording, picture, sound and font is bundled inside the app.",
    ],
  },
  {
    title: "Children",
    content: [
      "Starbright Kids is made for children aged 2 to 7 and follows Amazon's Child-Directed App Policy and the US Children's Online Privacy Protection Act (COPPA). Because it collects no personal information and sends nothing off the device, there is nothing to disclose, consent to, review or delete.",
      "The app is bought once and contains no advertising, no in-app purchases, no subscriptions, no chat, no web browser and no links out of the app, so a child cannot be sent anywhere or asked to buy anything. The parents' area is behind a parental gate.",
    ],
  },
  {
    title: "Changes",
    content: [
      "If a future version of Starbright Kids ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
    ],
  },
  {
    title: "Contact",
    content: [
      "For any privacy question about Starbright Kids, email sufyantechsolutions@gmail.com with the subject line: Starbright Kids Privacy.",
    ],
  },
];

export default function StarbrightKidsPrivacyPage() {
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
              <h1 className="text-2xl sm:text-3xl font-bold text-surface">Starbright Kids Privacy Policy</h1>
              <p className="text-surface/40 text-xs mt-0.5 font-mono">Last updated: September 2026</p>
            </div>
          </div>
          <p className="text-surface/55 text-sm leading-relaxed">
            Starbright Kids teaches children aged 2 to 7 English, math and early skills on Fire
            tablets, Fire TV and Android. It collects nothing, sends nothing and has no account, ads
            or in-app purchases. This page sets out exactly what the app can and cannot do.
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
          This policy covers the Starbright Kids app only. The website itself is covered by the{" "}
          <Link href="/privacy" className="hover:text-primary transition-colors">
            site privacy policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
