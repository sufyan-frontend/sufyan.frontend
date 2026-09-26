import Link from "next/link";
import type { Metadata } from "next";
import { siteUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Masterpiece Jigsaw Privacy Policy",
  description:
    "What the Masterpiece Jigsaw app does and does not collect. It asks for no permissions and has no internet access, so nothing can leave your TV or tablet.",
  alternates: { canonical: `${siteUrl}/privacy/masterpiece-jigsaw` },
};

const sections = [
  {
    title: "What Masterpiece Jigsaw Collects",
    content: [
      "Nothing. Masterpiece Jigsaw has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks for your name, email, phone number or location, and the developer never receives any data from it.",
      "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it plays fully offline.",
    ],
  },
  {
    title: "What Stays On Your Device",
    content: [
      "To remember your progress, the app keeps a few things in its own private storage on the device: which pictures you have finished, with your best time for each size, the puzzles you have started and where each piece is, and your settings (ghost picture, easy snapping, timer, slideshow speed, music and sound effects).",
      "None of this identifies you. Other apps cannot read it, it is not included in Android's cloud backup, and uninstalling the app deletes all of it. Reset progress in Settings deletes your finished pictures and puzzles in progress too.",
    ],
  },
  {
    title: "Permissions In Full",
    content: [
      "None. The released app requests no Android permissions whatsoever: not internet, storage, camera, microphone, contacts, location or phone.",
      "The pictures, the music and the sound effects are files bundled inside the app, and every jigsaw piece is cut and drawn on the device. None of this needs a permission.",
    ],
  },
  {
    title: "Payments",
    content: [
      "Masterpiece Jigsaw is a paid app sold through the Amazon Appstore. Amazon handles the purchase; the app contains no in-app purchases and never sees any payment details.",
    ],
  },
  {
    title: "Children",
    content: [
      "Masterpiece Jigsaw is suitable for all ages and collects no data from anyone, including children. It contains no advertising, no in-app purchases, no chat, no online play and no links out of the app.",
    ],
  },
  {
    title: "Pictures",
    content: [
      "The artworks come from the Open Access collections of The Metropolitan Museum of Art and The Cleveland Museum of Art (CC0), and the photographs from NASA and the US National Park Service (public domain). They are stored inside the app; nothing is downloaded while you play.",
    ],
  },
  {
    title: "Changes",
    content: [
      "If a future version of Masterpiece Jigsaw ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
    ],
  },
  {
    title: "Contact",
    content: [
      "For any privacy question about Masterpiece Jigsaw, email sufyantechsolutions@gmail.com with the subject line: Masterpiece Jigsaw Privacy.",
    ],
  },
];

export default function MasterpieceJigsawPrivacyPage() {
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
              <h1 className="text-2xl sm:text-3xl font-bold text-surface">Masterpiece Jigsaw Privacy Policy</h1>
              <p className="text-surface/40 text-xs mt-0.5 font-mono">Last updated: September 2026</p>
            </div>
          </div>
          <p className="text-surface/55 text-sm leading-relaxed">
            Masterpiece Jigsaw is a collection of jigsaw puzzles of great art and nature photographs for Fire TV
            and Fire tablets. It asks for no permissions at all, has no internet access, and collects nothing. Your
            finished pictures and puzzles in progress stay on the device. This page sets out exactly what the app can and cannot do.
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
          This policy covers the Masterpiece Jigsaw app only. The website itself is covered by the{" "}
          <Link href="/privacy" className="hover:text-primary transition-colors">
            site privacy policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
