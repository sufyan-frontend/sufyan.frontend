import type { Metadata } from "next";
import ReviewsPageClient from "@/components/ReviewsPageClient";

const SITE_URL = "https://sufyan-frontend.vercel.app";
const BACKEND = "https://sufyan-backend.vercel.app";

type ActiveReview = {
  id: string;
  name: string;
  rating: number;
  company: string;
  message: string;
  date: string;
};

// Fetched server-side so real ratings land in the initial HTML as structured data.
// Never throws — if the reviews backend is unavailable, we simply omit the review
// schema rather than breaking the page (the client component still renders).
async function fetchActiveReviews(): Promise<ActiveReview[]> {
  try {
    const res = await fetch(`${BACKEND}/api/cms/reviews`, { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data?.reviews) ? (data.reviews as ActiveReview[]) : [];
  } catch {
    return [];
  }
}

export const metadata: Metadata = {
  title: { absolute: "Client Reviews — Muhammad Sufyan" },
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

export default async function ReviewsPage() {
  const reviews = await fetchActiveReviews();
  const count = reviews.length;
  const avg = count ? reviews.reduce((s, r) => s + Number(r.rating || 0), 0) / count : 0;

  // AggregateRating + individual Reviews for the service business, matching the
  // ratings visible on the page. Only emitted when real reviews exist.
  const reviewSchema =
    count > 0
      ? {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": `${SITE_URL}/#service`,
          name: "Muhammad Sufyan — Frontend Development Services",
          url: `${SITE_URL}/services`,
          image: `${SITE_URL}/profile.png`,
          provider: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "Muhammad Sufyan" },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: Number(avg.toFixed(1)),
            reviewCount: count,
            bestRating: 5,
            worstRating: 1,
          },
          review: reviews.slice(0, 20).map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.name },
            datePublished: r.date,
            reviewBody: r.message,
            ...(r.company && { publisher: { "@type": "Organization", name: r.company } }),
            reviewRating: {
              "@type": "Rating",
              ratingValue: Number(r.rating),
              bestRating: 5,
              worstRating: 1,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {reviewSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
      )}
      <ReviewsPageClient />
    </>
  );
}
