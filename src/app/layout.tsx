import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Muhammad Sufyan | Frontend Developer",
    template: "%s | Muhammad Sufyan",
  },
  description:
    "Muhammad Sufyan is a Frontend Developer with 1.5+ years of experience building React and Next.js applications. Based in Lahore, Pakistan. Open to work.",
  keywords: ["Frontend Developer", "React Developer", "Next.js Developer", "Lahore", "Pakistan", "Muhammad Sufyan"],
  authors: [{ name: "Muhammad Sufyan", url: "https://github.com/sufyan-frontend" }],
  creator: "Muhammad Sufyan",
  icons: { icon: "/favicon.png" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sufyan-frontend.vercel.app",
    title: "Muhammad Sufyan | Frontend Developer",
    description: "Frontend Developer building production-ready web apps with React & Next.js.",
    siteName: "Muhammad Sufyan",
    images: [{ url: "/profile.png", width: 500, height: 500, alt: "Muhammad Sufyan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Sufyan | Frontend Developer",
    description: "Frontend Developer building production-ready web apps with React & Next.js.",
    images: ["/profile.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-dark text-surface antialiased flex flex-col">
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
