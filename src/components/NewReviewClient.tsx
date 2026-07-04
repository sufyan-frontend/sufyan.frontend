"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getReviews, type Review } from "@/lib/reviews-api";
import { StarDisplay } from "./StarRating";
import ReviewForm from "./ReviewForm";

const trustPoints = [
  { title: "Takes under a minute", desc: "A rating and a couple of sentences is all it takes." },
  { title: "Helps future clients", desc: "Honest feedback helps others decide with confidence." },
  { title: "Published instantly", desc: "Your review appears on the site right after you submit." },
];

export default function NewReviewClient() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data: reviews } = useQuery({ queryKey: ["reviews"], queryFn: getReviews });

  const list = reviews ?? [];
  const count = list.length;
  const avg = count ? list.reduce((s, r) => s + r.rating, 0) / count : 0;

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-surface/40 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-surface transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/reviews" className="hover:text-surface transition-colors">Reviews</Link>
          <span className="mx-2">/</span>
          <span className="text-surface/70">Write a Review</span>
        </nav>

        <div className="grid lg:grid-cols-[0.85fr_1fr] gap-6 lg:gap-10 items-start">
          {/* Left — intro panel */}
          <aside className="relative bg-linear-to-br from-card to-dark/60 border border-white/10 rounded-3xl p-7 sm:p-9 overflow-hidden lg:sticky lg:top-24">
            <div className="pointer-events-none absolute -top-24 -right-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />
            <div className="relative">
              <p className="text-primary font-mono text-sm mb-2">Testimonial</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-surface leading-tight mb-4">
                Share your experience
              </h1>
              <p className="text-surface/60 leading-relaxed mb-7">
                Worked with me on a project? I&apos;d love to hear how it went. Your words help other
                businesses know what to expect.
              </p>

              {count > 0 && (
                <div className="flex items-center gap-3 bg-dark/40 border border-white/10 rounded-2xl px-4 py-3 mb-7">
                  <span className="text-3xl font-bold text-surface leading-none">{avg.toFixed(1)}</span>
                  <div>
                    <StarDisplay value={avg} size="sm" />
                    <p className="text-surface/50 text-xs mt-1">
                      from {count} client review{count !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
              )}

              <ul className="space-y-4">
                {trustPoints.map((p) => (
                  <li key={p.title} className="flex items-start gap-3">
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-surface font-medium text-sm">{p.title}</p>
                      <p className="text-surface/50 text-xs leading-relaxed">{p.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Right — form card */}
          <div className="bg-card border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/20">
            <h2 className="text-surface font-bold text-xl mb-1">Write a Review</h2>
            <p className="text-surface/50 text-sm mb-6">
              Fields marked <span className="text-primary">*</span> are required.
            </p>
            <ReviewForm
              cancelLabel="Back to reviews"
              onCancel={() => router.push("/reviews")}
              onSuccess={(review: Review) => {
                queryClient.setQueryData<Review[]>(["reviews"], (old) =>
                  old ? [review, ...old] : [review]
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
