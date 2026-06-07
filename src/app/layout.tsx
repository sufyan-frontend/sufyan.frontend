import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
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
    "Frontend Developer Pakistan",
    "React Developer Lahore",
    "Next.js Developer Pakistan",
    "Muhammad Sufyan",
    "Web Developer Lahore",
    "React.js Developer",
    "Next.js Developer",
    "JavaScript Developer Pakistan",
    "Hire Frontend Developer",
    "Tailwind CSS Developer",
    "Portfolio Muhammad Sufyan",
    "Frontend Development Lahore",
    "Education Platform Developer",
    "Web Development Pakistan",
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
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Sufyan — Frontend Developer in Lahore, Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Sufyan | Frontend Developer in Lahore, Pakistan",
    description:
      "Frontend Developer building production-ready React & Next.js apps. Based in Lahore, Pakistan. Open to work.",
    images: ["/profile.png"],
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
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Muhammad Sufyan — Frontend Developer",
  url: "https://sufyan-frontend.vercel.app",
  description: "Portfolio of Muhammad Sufyan, a Frontend Developer from Lahore, Pakistan specialising in React and Next.js.",
  author: {
    "@type": "Person",
    name: "Muhammad Sufyan",
    jobTitle: "Frontend Developer",
    image: "https://sufyan-frontend.vercel.app/profile.png",
    address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://sufyan-frontend.vercel.app/projects",
    "query-input": "required name=search_term_string",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Sufyan",
  url: "https://sufyan-frontend.vercel.app",
  image: "https://sufyan-frontend.vercel.app/profile.png",
  jobTitle: "Frontend Developer",
  description: "Frontend Developer with 1.5+ years building React & Next.js apps. Based in Lahore, Pakistan.",
  email: "sufyantechsolutions@gmail.com",
  telephone: "+923438640594",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  sameAs: [
    "https://github.com/sufyan-frontend",
    "https://www.linkedin.com/in/sufyan-frontend",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-dark text-surface antialiased flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-primary focus:text-dark focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
