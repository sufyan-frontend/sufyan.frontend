"use client";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getReviews } from "@/lib/reviews-api";
import { StarDisplay } from "./StarRating";
import ReviewCard from "./ReviewCard";

function SkeletonCard() {
  return (
    <div className="bg-card border border-white/5 rounded-2xl p-6 animate-pulse">
      <div className="h-4 bg-white/5 rounded w-24 mb-4" />
      <div className="space-y-2">
        <div className="h-3 bg-white/5 rounded" />
        <div className="h-3 bg-white/5 rounded w-5/6" />
        <div className="h-3 bg-white/5 rounded w-2/3" />
      </div>
      <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/5" />
        <div className="space-y-1.5 flex-1">
          <div className="h-3 bg-white/5 rounded w-1/2" />
          <div className="h-2.5 bg-white/5 rounded w-1/3" />
        </div>
      </div>
    </div>
  );
}

export default function ReviewsPageClient() {
  const { data: reviews, isLoading, isError } = useQuery({
    queryKey: ["reviews"],
    queryFn: getReviews,
  });

  const list = reviews ?? [];
  const count = list.length;
  const avg = count ? list.reduce((s, r) => s + r.rating, 0) / count : 0;

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl 2xl:max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-primary font-mono text-sm mb-2">Testimonials</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-surface mb-4">Client Reviews</h1>
          <p className="text-surface/60 max-w-xl mx-auto">
            Honest feedback from the people and teams I&apos;ve built for. Worked with me? Add yours.
          </p>

          {/* Summary + CTAs */}
          {count > 0 && (
            <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-4 bg-card border border-white/5 rounded-2xl px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-surface leading-none">{avg.toFixed(1)}</span>
                <div className="text-left">
                  <StarDisplay value={avg} size="md" />
                  <p className="text-surface/50 text-xs mt-1">
                    Based on {count} review{count !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <Link
              href="/reviews/new"
              className="inline-flex items-center gap-2 bg-primary text-dark font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Write a Review
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 border border-primary/30 text-primary font-medium px-6 py-3 rounded-xl hover:bg-primary/10 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* Grid */}
        {isError ? (
          <p className="text-center text-surface/50 mt-10">
            Couldn&apos;t load reviews right now. Please try again later.
          </p>
        ) : isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : count === 0 ? (
          <div className="text-center mt-12 max-w-md mx-auto">
            <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.5a.56.56 0 011.04 0l2.12 4.9 5.3.46c.5.04.7.66.32 1l-4.02 3.5 1.2 5.2c.12.5-.42.89-.86.62L12 16.9l-4.6 2.78c-.44.27-.98-.12-.86-.62l1.2-5.2-4.02-3.5c-.38-.34-.18-.96.32-1l5.3-.46 2.12-4.9z" />
              </svg>
            </div>
            <p className="text-surface/60">
              No reviews yet. Be the first to share your experience working with me.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {list.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
