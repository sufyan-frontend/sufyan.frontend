import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms of use for this personal portfolio website.",
  alternates: { canonical: "https://sufyan-frontend.vercel.app/terms" },
  robots: { index: false },
};

const sections = [
  {
    title: "About This Site",
    content: [
      "This is the personal portfolio website of Muhammad Sufyan, a Frontend Developer based in Lahore, Pakistan. The site exists to showcase work, share experience, and allow visitors to get in touch.",
      "By browsing this site or submitting the contact form, you agree to these terms.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "All written content, UI design, and original code on this site is the work of Muhammad Sufyan and is protected under applicable copyright law.",
      "You may not copy, reproduce, or redistribute content from this site for commercial purposes without written permission. Personal reference or sharing a link is fine.",
      "Third-party project names, logos, or brand assets referenced on this site remain the property of their respective owners.",
    ],
  },
  {
    title: "Contact Form Use",
    content: [
      "The contact form is provided for genuine professional inquiries — job opportunities, freelance projects, collaborations, and similar purposes.",
      "Do not use the form to submit spam, unsolicited advertising, or harmful content. Such submissions will be ignored and the IP may be blocked.",
    ],
  },
  {
    title: "No Warranties",
    content: [
      "This site is provided as-is. While reasonable care is taken to keep information accurate, no guarantee is made about the completeness or current accuracy of any content.",
      "Project links and live demos may become unavailable over time as hosting arrangements change.",
    ],
  },
  {
    title: "External Links",
    content: [
      "Links to GitHub repos, live projects, LinkedIn, or other external sites are provided for convenience. We are not responsible for the content or practices of those sites.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "Muhammad Sufyan is not liable for any loss or damage arising from use of this site or reliance on information found here. This is a portfolio — not a legal or professional advisory service.",
    ],
  },
  {
    title: "Changes to These Terms",
    content: [
      "These terms may be updated occasionally. The Last Updated date at the top of this page will reflect any changes. Continued use of the site after an update constitutes acceptance.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These terms are governed by the laws of Pakistan. Any disputes arising from use of this site will be subject to the jurisdiction of courts in Lahore, Pakistan.",
    ],
  },
  {
    title: "Contact",
    content: [
      "Questions about these terms? Email sufyantechsolutions@gmail.com with the subject line: Terms Question.",
    ],
  },
];

export default function TermsPage() {
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
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-surface">Terms &amp; Conditions</h1>
              <p className="text-surface/40 text-xs mt-0.5 font-mono">Last updated: June 2026</p>
            </div>
          </div>
          <p className="text-surface/55 text-sm leading-relaxed">
            These are the terms of use for this personal portfolio website. They are intentionally concise — this is not a legal document for a product or service, just a personal site.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {sections.map((section, i) => (
            <div key={section.title} className="bg-card border border-white/5 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-accent/50 font-mono text-xs">0{i + 1}</span>
                <h2 className="text-surface font-semibold text-base">{section.title}</h2>
              </div>
              <ul className="space-y-2.5">
                {section.content.map((point, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-surface/55 text-sm leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-accent/40 shrink-0 mt-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Links to other legal pages */}
        <div className="mt-8 bg-card border border-white/5 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-surface/45 text-sm">Also read our Privacy Policy for details on data handling.</p>
          <Link
            href="/privacy"
            className="text-primary text-sm font-medium hover:underline underline-offset-2 shrink-0"
          >
            Privacy Policy →
          </Link>
        </div>

        <p className="mt-8 text-surface/30 text-xs text-center leading-relaxed">
          These terms apply only to sufyan-frontend.vercel.app.
        </p>
      </div>
    </div>
  );
}
