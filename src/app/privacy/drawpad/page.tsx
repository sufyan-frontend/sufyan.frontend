import Link from "next/link";
import type { Metadata } from "next";
import { siteUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "DrawPad Privacy Policy",
  description:
    "What the DrawPad Android app does and does not collect. Nothing leaves your phone.",
  alternates: { canonical: `${siteUrl}/privacy/drawpad` },
};

const sections = [
  {
    title: "What DrawPad Collects",
    content: [
      "Nothing. DrawPad has no accounts, no sign-in, no analytics, no advertising and no crash reporting. It does not ask for your name, email, phone number or location, and it has no way to send anything anywhere.",
      "The app does not request the INTERNET permission at all, so it cannot transmit data even if it wanted to.",
    ],
  },
  {
    title: "Your Drawings",
    content: [
      "Everything you draw stays in the app's memory on your own phone. Drawings are not uploaded, backed up or shared.",
      "When you tap Save, DrawPad writes a PNG into Pictures/DrawPad in your own gallery. That file belongs to you and DrawPad never reads it back or sends it anywhere.",
    ],
  },
  {
    title: "Photos You Add",
    content: [
      "If you use the Image button, Android's own picker asks you to choose one photo. DrawPad receives only the photo you picked, uses it on the canvas, and nothing else. It cannot browse your gallery and it never copies your photos anywhere.",
    ],
  },
  {
    title: "Display Over Other Apps",
    content: [
      'To draw on the screen, DrawPad needs Android’s "Display over other apps" permission. This permission only lets the app place its own transparent canvas on top of the screen. It does not let DrawPad see, read or capture what is underneath.',
    ],
  },
  {
    title: "The Accessibility Service",
    content: [
      "DrawPad includes an optional accessibility service, and it exists for exactly one technical reason: only an accessibility service is allowed to place a window above the status bar and the notification shade. Without it the drawing disappears whenever the shade is pulled down.",
      'The service is declared with canRetrieveWindowContent="false". It cannot read the text, contents or structure of any screen, and it does not. It receives no window content, performs no actions on your behalf, and sends nothing anywhere.',
      "It also lets the volume keys act as shortcuts while the overlay is running. It never records what you type.",
      "The service is entirely optional. DrawPad works without it; you simply cannot draw over the notification shade.",
    ],
  },
  {
    title: "Permissions In Full",
    content: [
      "SYSTEM_ALERT_WINDOW — to place the drawing canvas over the screen.",
      "FOREGROUND_SERVICE, FOREGROUND_SERVICE_SPECIAL_USE and POST_NOTIFICATIONS — to show the ongoing notification Android requires while the overlay is running, so you can always stop it.",
      "WRITE_EXTERNAL_STORAGE, on Android 9 and below only — to save a PNG into your gallery. On Android 10 and above no storage permission is used at all.",
      "That is the complete list. In particular DrawPad does not request INTERNET, camera, microphone, contacts, location or phone permissions.",
      "The optional accessibility service is bound by Android itself through BIND_ACCESSIBILITY_SERVICE; it is enabled only if you turn it on in Settings, and can be turned off there at any time.",
    ],
  },
  {
    title: "Children",
    content: [
      "DrawPad collects no data from anyone, including children, and contains no advertising or external links.",
    ],
  },
  {
    title: "Changes",
    content: [
      "If a future version of DrawPad ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
    ],
  },
  {
    title: "Contact",
    content: [
      "For any privacy question about DrawPad, email sufyantechsolutions@gmail.com with the subject line: DrawPad Privacy.",
    ],
  },
];

export default function DrawPadPrivacyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <Link
            href="/apps/drawpad"
            className="inline-flex items-center gap-1.5 text-xs text-surface/40 hover:text-primary transition-colors mb-8 font-mono"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to DrawPad
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-surface">DrawPad Privacy Policy</h1>
              <p className="text-surface/40 text-xs mt-0.5 font-mono">Last updated: September 2026</p>
            </div>
          </div>
          <p className="text-surface/55 text-sm leading-relaxed">
            DrawPad is an offline drawing app for Android. It collects nothing, sends nothing and
            has no account. This page sets out exactly what the app can and cannot do, including
            why it asks for the permissions it asks for.
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
          This policy covers the DrawPad Android app only. The website itself is covered by the{" "}
          <Link href="/privacy" className="hover:text-primary transition-colors">
            site privacy policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
