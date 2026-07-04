import type { Metadata } from "next";
import NewReviewClient from "@/components/NewReviewClient";

export const metadata: Metadata = {
  title: "Write a Review — Muhammad Sufyan",
  description:
    "Share your experience working with Muhammad Sufyan (sufyanjutt / sufyanfrontend), a Frontend Developer from Lahore, Pakistan. Leave a star rating, your feedback, and an optional photo.",
  alternates: { canonical: "https://sufyan-frontend.vercel.app/reviews/new" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Write a Review — Muhammad Sufyan",
    description: "Worked with me? Share your experience — it takes under a minute.",
    url: "https://sufyan-frontend.vercel.app/reviews/new",
  },
};

export default function WriteReviewPage() {
  return <NewReviewClient />;
}
