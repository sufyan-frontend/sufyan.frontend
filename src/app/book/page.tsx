import type { Metadata } from "next";
import BookPortfolio from "@/components/book/BookPortfolio";

const SITE = "https://sufyan-frontend.vercel.app";

export const metadata: Metadata = {
  title: { absolute: "3D Book Portfolio — Muhammad Sufyan | Frontend Developer" },
  description:
    "An interactive 3D flip-book portfolio of Muhammad Sufyan — Frontend Developer (React & Next.js) from Lahore, Pakistan. Open the book to explore his profile, skills, projects, experience, services, and contact details.",
  keywords: [
    "Muhammad Sufyan portfolio",
    "3D book portfolio",
    "interactive portfolio",
    "Frontend Developer portfolio",
    "React Next.js developer Pakistan",
    "Sufyan frontend",
  ],
  alternates: { canonical: `${SITE}/book` },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: `${SITE}/book`,
    siteName: "Muhammad Sufyan — Frontend Developer",
    title: "3D Book Portfolio — Muhammad Sufyan | Frontend Developer",
    description:
      "Flip through Muhammad Sufyan's interactive 3D book portfolio — profile, skills, projects, experience, and contact.",
    images: [{ url: "/profile.png", width: 400, height: 400, alt: "Muhammad Sufyan — Frontend Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@sufyanfrontend",
    title: "3D Book Portfolio — Muhammad Sufyan",
    description: "Interactive 3D flip-book portfolio of a React & Next.js developer from Lahore, Pakistan.",
    images: ["/profile.png"],
  },
};

export default function BookPage() {
  return <BookPortfolio />;
}
