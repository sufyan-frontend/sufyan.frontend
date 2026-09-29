import Link from "next/link";
import type { Metadata } from "next";
import { siteUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hearth Privacy Policy",
  description:
    "What the Hearth recipe app does and does not collect. No account, no ads, no tracking; your recipes stay on your device, and it only goes online to import a recipe you ask for.",
  alternates: { canonical: `${siteUrl}/privacy/hearth` },
};

const sections = [
  {
    title: "What Hearth Collects",
    content: [
      "Nothing. Hearth has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks for your name, email, phone number or location, and the developer never receives any data from it.",
    ],
  },
  {
    title: "What Stays On Your Device",
    content: [
      "Your recipes, the photos you add, your meal plan, your shopping list and your settings (measurements, theme, text size, keep-screen-on) are kept in the app's own private storage on the device.",
      "Other apps cannot read it, it is not included in Android's cloud backup, and uninstalling the app deletes all of it. The only copies that ever leave the device are the backup files, recipes and shopping lists you choose to save or share yourself, through the system file screen or share sheet.",
    ],
  },
  {
    title: "Importing Recipes From The Web",
    content: [
      "Hearth goes online only when you ask it to import a recipe: you paste a web address, or share a page to Hearth from your browser. The app then downloads that one page, reads the recipe from it and downloads the recipe's photo. It connects directly to that website; nothing passes through any server of the developer's.",
      "Like any browser, this request reaches the website you chose, which can see your device's IP address. Hearth sends no cookies, no identifiers and nothing about you or your other recipes. If you never use Import, Hearth never goes online.",
    ],
  },
  {
    title: "Permissions In Full",
    content: [
      "INTERNET, used only for importing a recipe from a web address you give it, as described above.",
      "No other permissions: not storage, camera, microphone, contacts, location or phone. Photos are chosen through the system photo picker or taken with the system camera app, which hand the app only the one picture you pick.",
    ],
  },
  {
    title: "Payments",
    content: [
      "Hearth is a paid app sold through the Amazon Appstore. Amazon handles the purchase; the app contains no in-app purchases and never sees any payment details.",
    ],
  },
  {
    title: "Children",
    content: [
      "Hearth is a kitchen tool for all ages and collects no data from anyone, including children. It contains no advertising, no in-app purchases, no chat and no social features.",
    ],
  },
  {
    title: "Pictures",
    content: [
      "The photos of the 24 starter recipes are CC0 or public-domain images, stored inside the app.",
    ],
  },
  {
    title: "Changes",
    content: [
      "If a future version of Hearth ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
    ],
  },
  {
    title: "Contact",
    content: [
      "For any privacy question about Hearth, email sufyantechsolutions@gmail.com with the subject line: Hearth Privacy.",
    ],
  },
];

export default function HearthPrivacyPage() {
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
              <h1 className="text-2xl sm:text-3xl font-bold text-surface">Hearth Privacy Policy</h1>
              <p className="text-surface/40 text-xs mt-0.5 font-mono">Last updated: September 2026</p>
            </div>
          </div>
          <p className="text-surface/55 text-sm leading-relaxed">
            Hearth is a recipe keeper, meal planner and shopping list for Fire tablets. It has no account,
            no ads and no tracking, and collects nothing. Your recipes stay on the device, and the app only goes
            online to import a recipe from a web page you choose. This page sets out exactly what the app can and cannot do.
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
          This policy covers the Hearth app only. The website itself is covered by the{" "}
          <Link href="/privacy" className="hover:text-primary transition-colors">
            site privacy policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
