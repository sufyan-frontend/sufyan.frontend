import type { Metadata } from "next";
import ReviewsPageClient from "@/components/ReviewsPageClient";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials — Muhammad Sufyan",
  description:
    "Read verified client reviews and testimonials for Muhammad Sufyan (sufyanjutt / sufyanfrontend), a Frontend Developer from Lahore, Pakistan. Worked with me? Leave your own review.",
  keywords: [
    "Muhammad Sufyan reviews", "sufyanjutt testimonials", "sufyanfrontend reviews",
    "Frontend Developer reviews Pakistan", "React developer testimonials Lahore",
    "hire frontend developer reviews", "Muhammad Sufyan client feedback",
  ],
  alternates: { canonical: "https://sufyan-frontend.vercel.app/reviews" },
  openGraph: {
    title: "Client Reviews & Testimonials — Muhammad Sufyan",
    description:
      "Verified client reviews for Muhammad Sufyan — Frontend Developer building React & Next.js apps in Lahore, Pakistan.",
    url: "https://sufyan-frontend.vercel.app/reviews",
    images: [{ url: "https://sufyan-frontend.vercel.app/profile.png", width: 1200, height: 630, alt: "Muhammad Sufyan — Client Reviews" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sufyan-frontend.vercel.app/" },
    { "@type": "ListItem", position: 2, name: "Reviews", item: "https://sufyan-frontend.vercel.app/reviews" },
  ],
};

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ReviewsPageClient />
    </>
  );
}
