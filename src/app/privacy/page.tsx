import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How this portfolio site collects and uses your information.",
  alternates: { canonical: "https://sufyan-frontend.vercel.app/privacy" },
  robots: { index: false },
};

const sections = [
  {
    title: "Information We Collect",
    content: [
      "When you submit the contact form, we collect the following: your name, email address, phone number (optional), address (optional), subject, and message.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "Your contact details are used solely to respond to your inquiry. We do not use your information for marketing, advertising, or any purpose beyond that single conversation.",
    ],
  },
  {
    title: "Data Storage",
    content: [
      "This site does not operate a database. When you submit the form, your data is delivered by email to the site owner and a confirmation is sent to your email address. No data is stored on a server beyond the duration of that transaction.",
      "Email messages are stored in the owner's Gmail inbox and are subject to Google's privacy policy.",
    ],
  },
  {
    title: "Cookies & Tracking",
    content: [
      "This site does not use cookies, analytics trackers, or any third-party tracking scripts. No data about your browsing behaviour on this site is collected or shared.",
    ],
  },
  {
    title: "Third-Party Services",
    content: [
      "Vercel — this site is hosted on Vercel. Vercel may log basic request metadata (IP, user-agent) as part of normal server operation. See Vercel's privacy policy for details.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "You may contact us at any time to request deletion of any message you have sent via the contact form. We will delete the corresponding email from our inbox within 7 days of your request.",
    ],
  },
  {
    title: "Contact",
    content: [
      "For any privacy-related questions, email sufyantechsolutions@gmail.com with the subject line: Privacy Request.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-surface/40 hover:text-primary transition-colors mb-8 font-mono">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-surface">Privacy Policy</h1>
              <p className="text-surface/40 text-xs mt-0.5 font-mono">Last updated: June 2026</p>
            </div>
          </div>
          <p className="text-surface/55 text-sm leading-relaxed">
            This policy explains what information is collected when you visit or use the contact form on this portfolio site, and how it is handled. This is a personal portfolio — not a product or service — so the scope is intentionally simple.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {sections.map((section, i) => (
            <div key={section.title} className="bg-card border border-white/5 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary/50 font-mono text-xs">0{i + 1}</span>
                <h2 className="text-surface font-semibold text-base">{section.title}</h2>
              </div>
              <ul className="space-y-2.5">
                {section.content.map((point, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-surface/55 text-sm leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-primary/40 shrink-0 mt-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-10 text-surface/30 text-xs text-center leading-relaxed">
          This policy applies only to sufyan-frontend.vercel.app. External links on this site lead to third-party pages with their own policies.
        </p>
      </div>
    </div>
  );
}
