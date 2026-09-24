import Link from "next/link";
import type { Metadata } from "next";
import { siteUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Voice Studio Privacy Policy",
  description:
    "What the Voice Studio voice changer does with your recordings. Everything is processed on the device, the app has no internet access, and a clip only leaves when you share it.",
  alternates: { canonical: `${siteUrl}/privacy/voice-studio` },
};

const sections = [
  {
    title: "What Voice Studio Collects",
    content: [
      "Nothing. Voice Studio has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks for a name, email, age or location.",
      "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it works fully offline.",
    ],
  },
  {
    title: "Your Recordings",
    content: [
      "The microphone is used only while you are recording, after you tap the record button, and only while the app is on screen. Recording stops as soon as the app leaves the screen.",
      "Every voice effect is applied on the device itself. Recordings are never uploaded, analysed by a server, or used to train anything.",
      "Clips you save are kept in the app's own storage on the device. They are excluded from Android and Amazon cloud backups, and they are deleted when the app is uninstalled. You can delete any clip at any time from My clips.",
    ],
  },
  {
    title: "When A Clip Leaves The Device",
    content: [
      "Only when you choose to. Tapping Share hands the clip to the app you pick (for example email or a messaging app), and from then on that app's own privacy policy applies. Save to Music folder copies the clip to the device's shared Music/Voice Studio folder, where other apps on the same device can see it.",
      "Voice Studio never shares anything on its own.",
    ],
  },
  {
    title: "Audio Files You Open",
    content: [
      "If you open an existing audio file, the app reads it through the system file picker, which grants access to that one file only. The file is read once to apply a voice and is never changed or copied anywhere else.",
    ],
  },
  {
    title: "Permissions In Full",
    content: [
      "Microphone (RECORD_AUDIO): to record your voice, only while you are recording.",
      "Storage (WRITE_EXTERNAL_STORAGE), on Android 9 and older only: used solely for Save to Music folder. Newer versions of Android need no storage permission for this.",
      "There are no other permissions: not internet, camera, contacts, location or phone.",
    ],
  },
  {
    title: "Settings Kept On The Device",
    content: [
      "The app remembers the voice you last chose, whether background-noise clean-up is on, and any custom voices you create (their names and slider positions). These stay in the app's private storage and are removed when the app is uninstalled.",
    ],
  },
  {
    title: "Children",
    content: [
      "Voice Studio is a general-audience app and is not directed at children. It collects no personal information from anyone, so there is nothing to disclose, review or delete.",
    ],
  },
  {
    title: "Changes",
    content: [
      "If a future version of Voice Studio ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
    ],
  },
  {
    title: "Contact",
    content: [
      "For any privacy question about Voice Studio, email sufyantechsolutions@gmail.com with the subject line: Voice Studio Privacy.",
    ],
  },
];

export default function VoiceStudioPrivacyPage() {
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
              <h1 className="text-2xl sm:text-3xl font-bold text-surface">Voice Studio Privacy Policy</h1>
              <p className="text-surface/40 text-xs mt-0.5 font-mono">Last updated: September 2026</p>
            </div>
          </div>
          <p className="text-surface/55 text-sm leading-relaxed">
            Voice Studio changes your voice on Fire tablets and Android. Your recordings are processed
            on the device, the app has no internet access, and a clip only leaves the device when you
            share it yourself. This page sets out exactly what the app can and cannot do.
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
          This policy covers the Voice Studio app only. The website itself is covered by the{" "}
          <Link href="/privacy" className="hover:text-primary transition-colors">
            site privacy policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
