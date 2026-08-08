import type { Metadata } from "next";
import { Inter, Sora, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ConditionalShell from "@/components/ConditionalShell";
import { QueryProvider } from "@/providers/QueryProvider";

// Body: Inter (clean, highly legible). Headings: Sora (geometric display).
// Mono: Geist Mono (kept for eyebrow labels and code).
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"], weight: ["500", "600", "700", "800"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sufyan-frontend.vercel.app"),
  title: {
    default: "Muhammad Sufyan | Frontend Developer in Lahore, Pakistan",
    template: "%s | Muhammad Sufyan",
  },
  description:
    "Muhammad Sufyan is a Frontend Developer from Lahore, Pakistan with 1.5+ years of experience building fast, responsive, and production-ready React and Next.js web applications.",
  keywords: [
    "Muhammad Sufyan",
    "Sufyan Frontend Developer",
    "Frontend Developer Lahore",
    "React Developer Pakistan",
    "Next.js Developer Pakistan",
    "Hire Frontend Developer Pakistan",
    "Freelance Web Developer Lahore",
    "Tailwind CSS Developer",
    "Education Platform Developer",
  ],
  authors: [{ name: "Muhammad Sufyan", url: "https://sufyan-frontend.vercel.app" }],
  creator: "Muhammad Sufyan",
  publisher: "Muhammad Sufyan",
  formatDetection: { email: false, telephone: false },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sufyan-frontend.vercel.app",
    title: "Muhammad Sufyan | Frontend Developer in Lahore, Pakistan",
    description:
      "Frontend Developer with 1.5+ years building production-ready React & Next.js apps. Based in Lahore, Pakistan. Open to work.",
    siteName: "Muhammad Sufyan — Frontend Developer",
    // OG image is supplied site-wide by app/opengraph-image.tsx (generated, 1200×630).
  },
  twitter: {
    card: "summary_large_image",
    creator: "@sufyanfrontend",
    site: "@sufyanfrontend",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sufyan-frontend.vercel.app",
  },
  verification: {
    google: "google129327d0e5fe8cad",
    other: {
      "msvalidate.01": "021818FF49D5FB671A22DF411453FD4C",
    },
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Muhammad Sufyan — Frontend Developer",
  url: "https://sufyan-frontend.vercel.app",
  description: "Portfolio of Muhammad Sufyan, a Frontend Developer from Lahore, Pakistan specialising in React and Next.js.",
  hasPart: [
    { "@type": "WebPage", "@id": "https://sufyan-frontend.vercel.app/", name: "Home", url: "https://sufyan-frontend.vercel.app/" },
    { "@type": "AboutPage", "@id": "https://sufyan-frontend.vercel.app/about", name: "About Muhammad Sufyan", url: "https://sufyan-frontend.vercel.app/about" },
    { "@type": "CollectionPage", "@id": "https://sufyan-frontend.vercel.app/projects", name: "Projects Portfolio", url: "https://sufyan-frontend.vercel.app/projects" },
    { "@type": "ProfilePage", "@id": "https://sufyan-frontend.vercel.app/cv", name: "CV — Muhammad Sufyan", url: "https://sufyan-frontend.vercel.app/cv" },
    { "@type": "WebPage", "@id": "https://sufyan-frontend.vercel.app/services", name: "Frontend Development Services", url: "https://sufyan-frontend.vercel.app/services" },
    { "@type": "Blog", "@id": "https://sufyan-frontend.vercel.app/blog", name: "Frontend Development Blog", url: "https://sufyan-frontend.vercel.app/blog" },
    { "@type": "ContactPage", "@id": "https://sufyan-frontend.vercel.app/contact", name: "Contact Muhammad Sufyan", url: "https://sufyan-frontend.vercel.app/contact" },
  ],
  author: {
    "@type": "Person",
    "@id": "https://sufyan-frontend.vercel.app/#person",
    name: "Muhammad Sufyan",
    jobTitle: "Frontend Developer",
    image: "https://sufyan-frontend.vercel.app/profile.png",
    address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://sufyan-frontend.vercel.app/#person",
  name: "Muhammad Sufyan",
  alternateName: ["sufyanjutt", "sufyanfrontend", "Sufyan Frontend", "Muhammad Sufyan Frontend Developer"],
  url: "https://sufyan-frontend.vercel.app",
  image: {
    "@type": "ImageObject",
    url: "https://sufyan-frontend.vercel.app/profile.png",
    width: 400,
    height: 400,
  },
  jobTitle: "Frontend Developer",
  description: "Muhammad Sufyan is a Frontend Developer from Lahore, Pakistan with 1.5+ years of experience building production-ready React.js and Next.js web applications for education platforms, corporate websites, and SaaS products.",
  email: "sufyantechsolutions@gmail.com",
  telephone: "+923227479636",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
    postalCode: "54000",
  },
  nationality: { "@type": "Country", name: "Pakistan" },
  knowsLanguage: ["English", "Urdu"],
  knowsAbout: [
    "React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS",
    "Frontend Development", "Web Development", "REST API Integration",
    "Responsive Design", "UI/UX Implementation", "Vercel Deployment",
    "Core Web Vitals", "SEO Optimization", "Performance Optimization",
    "Education Platform Development", "Dashboard Development",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Frontend Developer",
    occupationLocation: { "@type": "City", name: "Lahore" },
    skills: "React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, REST APIs, Git, Vercel",
  },
  worksFor: {
    "@type": "Organization",
    name: "Ehya Education",
    url: "https://www.ehya.com.pk",
    address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
  },
  alumniOf: {
    "@type": "Organization",
    name: "Ehsas Lab",
    url: "https://ehsaslab.com",
  },
  award: "Best Instructor Certificate — Ehsas Lab 2024",
  sameAs: [
    "https://github.com/sufyan-frontend",
    "https://www.linkedin.com/in/sufyan-frontend",
    "https://sufyan-frontend.vercel.app",
    "https://peerlist.io/sufyan",
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.ehya.com.pk/#organization",
  name: "Ehya Education",
  url: "https://www.ehya.com.pk",
  description: "Ehya Education is an education technology company based in Lahore, Pakistan, providing digital learning platforms and management systems for students and faculty.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  employee: {
    "@type": "Person",
    "@id": "https://sufyan-frontend.vercel.app/#person",
    name: "Muhammad Sufyan",
    jobTitle: "Frontend Developer",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-dark text-surface antialiased flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "x593j8mgdo");`}
        </Script>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-primary focus:text-dark focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>
        <QueryProvider>
          <ConditionalShell>{children}</ConditionalShell>
        </QueryProvider>
      </body>
    </html>
  );
}
