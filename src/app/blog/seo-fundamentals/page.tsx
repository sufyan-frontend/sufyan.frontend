import type { Metadata } from "next";
import SeoGuide from "./SeoGuide";
import { FAQS, LESSONS } from "./content";

const URL = "https://sufyan-frontend.vercel.app/blog/seo-fundamentals";
const TITLE = "SEO Fundamentals for Beginners — The Complete Visual Guide";
const DESCRIPTION =
  "A free, beginner-friendly visual guide to SEO fundamentals: crawling, indexing, ranking, keywords, on-page, technical, off-page, local SEO, AEO and GEO — with diagrams, examples, quizzes and a completion certificate.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "SEO fundamentals", "SEO for beginners", "learn SEO", "SEO basics guide",
    "how search engines work", "crawling indexing ranking", "on-page SEO",
    "technical SEO", "off-page SEO", "local SEO", "AEO", "GEO",
    "search engine optimization tutorial", "free SEO course",
    "Muhammad Sufyan", "sufyanjutt", "sufyanfrontend",
  ],
  authors: [{ name: "Muhammad Sufyan", url: "https://sufyan-frontend.vercel.app" }],
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    publishedTime: "2026-06-27",
    authors: ["Muhammad Sufyan"],
    images: [{ url: "https://sufyan-frontend.vercel.app/profile.png", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://sufyan-frontend.vercel.app/profile.png"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": URL,
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-06-27",
  dateModified: "2026-06-27",
  inLanguage: "en",
  url: URL,
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  image: { "@type": "ImageObject", url: "https://sufyan-frontend.vercel.app/profile.png", width: 1200, height: 630 },
  articleSection: [...new Set(LESSONS.map((l) => l.tag))],
  author: {
    "@type": "Person",
    "@id": "https://sufyan-frontend.vercel.app/#person",
    name: "Muhammad Sufyan",
    url: "https://sufyan-frontend.vercel.app",
  },
  publisher: {
    "@type": "Organization",
    name: "Muhammad Sufyan — Frontend Developer",
    url: "https://sufyan-frontend.vercel.app",
    logo: { "@type": "ImageObject", url: "https://sufyan-frontend.vercel.app/favicon.png", width: 192, height: 192 },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${URL}#faq`,
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sufyan-frontend.vercel.app/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://sufyan-frontend.vercel.app/blog" },
    { "@type": "ListItem", position: 3, name: "SEO Fundamentals for Beginners", item: URL },
  ],
};

export default function SeoFundamentalsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SeoGuide />
    </>
  );
}
