import Link from "next/link";
import type { Metadata } from "next";
import { siteUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "QR Studio Privacy Policy",
  description:
    "What the QR Studio Android app does and does not collect. It has no internet permission, so nothing can leave your phone.",
  alternates: { canonical: `${siteUrl}/privacy/qr-studio` },
};

const sections = [
  {
    title: "What QR Studio Collects",
    content: [
      "Nothing. QR Studio has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks for your name, email, phone number or location.",
      "The app does not request the INTERNET permission at all. It has no technical ability to send anything anywhere, and you can confirm this yourself in Android's app info screen under Permissions.",
    ],
  },
  {
    title: "What You Type Into a Code",
    content: [
      "A QR code is made from whatever you type — a link, a phone number, a Wi-Fi password, a contact card, a location. All of it is turned into a code on the phone itself, by maths running inside the app.",
      "None of it is uploaded, logged or kept anywhere outside the app. Nothing is stored between sessions except the single language you chose, which is saved so the app opens in it next time.",
      "A Wi-Fi password or a contact card placed into a code lives inside the picture that code makes. That picture stays on your phone until you choose to share or print it.",
    ],
  },
  {
    title: "Images You Save",
    content: [
      "Tapping SAVE writes a PNG into Pictures/QR Studio in your own gallery. Tapping SVG writes a vector file into Downloads. Both files belong to you; the app never reads them back and never sends them anywhere.",
      "Tapping SHARE hands the image to Android's own share sheet, and you pick the app it goes to. QR Studio does not choose a destination and does not keep a copy of what was shared.",
    ],
  },
  {
    title: "A Logo You Add",
    content: [
      "If you add a logo to the middle of a code, Android's own picker asks you to choose one picture. The app receives only that one picture, draws it into the code, and does nothing else with it. It cannot browse your gallery on its own.",
    ],
  },
  {
    title: "Permissions In Full",
    content: [
      "WRITE_EXTERNAL_STORAGE, on Android 9 and below only — to write a saved image into your gallery. On Android 10 and above no storage permission is used at all, because saving goes through Android's MediaStore.",
      "READ_EXTERNAL_STORAGE, on Android 9 and below only — so that a logo you pick from the gallery can be opened on those older versions.",
      "com.sufyan.qr.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION — a private, app-only permission the AndroidX libraries declare so that the app's own internal broadcasts cannot be received by other apps. It grants no access to anything on your phone.",
      "That is the complete list, checked against the released APK rather than the source. QR Studio does not request INTERNET, camera, microphone, contacts, location, phone or any other permission.",
      "The app cannot scan codes with the camera; it only creates them. That is why no camera permission is asked for.",
    ],
  },
  {
    title: "Children",
    content: [
      "QR Studio collects no data from anyone, including children, and contains no advertising, no in-app purchases and no external links.",
    ],
  },
  {
    title: "Changes",
    content: [
      "If a future version of QR Studio ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
    ],
  },
  {
    title: "Contact",
    content: [
      "For any privacy question about QR Studio, email sufyantechsolutions@gmail.com with the subject line: QR Studio Privacy.",
    ],
  },
];

export default function QrStudioPrivacyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <Link
            href="/apps/qr-studio"
            className="inline-flex items-center gap-1.5 text-xs text-surface/40 hover:text-primary transition-colors mb-8 font-mono"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to QR Studio
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-surface">QR Studio Privacy Policy</h1>
              <p className="text-surface/40 text-xs mt-0.5 font-mono">Last updated: September 2026</p>
            </div>
          </div>
          <p className="text-surface/55 text-sm leading-relaxed">
            QR Studio is an offline QR code maker for Android. It collects nothing, sends nothing
            and has no account — it does not even hold the permission that would let it reach the
            internet. This page sets out exactly what the app can and cannot do.
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
          This policy covers the QR Studio Android app only. The website itself is covered by the{" "}
          <Link href="/privacy" className="hover:text-primary transition-colors">
            site privacy policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
