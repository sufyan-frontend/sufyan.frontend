"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { getReviews, type Review } from "@/lib/reviews-api";
import { StarDisplay } from "./StarRating";

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

function hostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "Visit";
  }
}

function AvgSummary({ reviews }: { reviews: Review[] }) {
  const avg = reviews.reduce((s, r) => s + r.rating, 0) / Math.max(reviews.length, 1);
  return (
    <div className="flex items-center justify-center mb-10">
      <div className="inline-flex items-center gap-3 bg-card/70 border border-white/10 rounded-full pl-2 pr-5 py-2 backdrop-blur">
        <span className="inline-flex items-center justify-center h-9 px-3 rounded-full bg-amber-400/15 text-amber-400 font-bold text-sm">
          {avg.toFixed(1)}
        </span>
        <StarDisplay value={avg} size="sm" />
        <span className="text-surface/50 text-sm border-l border-white/10 pl-3">
          {reviews.length} review{reviews.length !== 1 ? "s" : ""}
        </span>
      </div>
    </div>
  );
}

function QuoteCard({ review }: { review: Review }) {
  return (
    <figure className="relative bg-linear-to-br from-card to-dark/60 border border-white/10 rounded-3xl px-6 py-10 sm:px-12 sm:py-12 text-center shadow-2xl shadow-black/30 overflow-hidden">
      {/* Glow accent */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />

      {/* Decorative quote mark */}
      <svg
        className="absolute top-5 left-5 w-12 h-12 text-primary/15"
        fill="currentColor"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>

      <div className="relative">
        <div className="flex justify-center mb-6">
          <StarDisplay value={review.rating} size="lg" />
        </div>

        <blockquote className="text-surface/90 text-lg sm:text-2xl leading-relaxed font-light max-w-2xl mx-auto">
          <p>&ldquo;{review.message}&rdquo;</p>
        </blockquote>

        <figcaption className="mt-8 flex items-center justify-center gap-3">
          {review.avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={review.avatar}
              alt={review.name}
              className="w-12 h-12 rounded-full object-cover shrink-0 ring-2 ring-primary/30 shadow-lg shadow-primary/20"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-dark font-bold shrink-0 shadow-lg shadow-primary/20">
              {initials(review.name) || "•"}
            </div>
          )}
          <div className="text-left">
            <strong className="text-surface font-semibold block leading-tight">{review.name}</strong>
            <span className="text-surface/50 text-sm">
              {review.company}
              {review.website && (
                <>
                  {" · "}
                  <a
                    href={review.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary/80 hover:text-primary hover:underline"
                  >
                    {hostname(review.website)}
                  </a>
                </>
              )}
            </span>
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

export default function ReviewsSlider() {
  const { data: reviews, isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: getReviews,
  });

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const list = useMemo(() => reviews ?? [], [reviews]);
  const count = list.length;

  useEffect(() => {
    if (index >= count && count > 0) setIndex(0);
  }, [count, index]);

  useEffect(() => {
    if (paused || count <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => clearInterval(t);
  }, [paused, count]);

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);
  const current = count ? list[Math.min(index, count - 1)] : null;

  return (
    <section id="reviews" className="relative py-20 bg-card/20 overflow-hidden scroll-mt-20" aria-labelledby="reviews-heading">
      {/* soft background grid */}
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" aria-hidden="true" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-primary font-mono text-sm mb-2">Feedback</p>
          <h2 id="reviews-heading" className="text-3xl sm:text-4xl font-bold text-surface">
            What Clients Say
          </h2>
        </div>

        {isLoading ? (
          <div className="animate-pulse bg-card border border-white/5 rounded-3xl px-8 py-12 space-y-4 max-w-2xl mx-auto">
            <div className="h-5 bg-white/5 rounded w-40 mx-auto" />
            <div className="h-4 bg-white/5 rounded w-full" />
            <div className="h-4 bg-white/5 rounded w-5/6 mx-auto" />
            <div className="h-11 w-11 bg-white/5 rounded-full mx-auto mt-6" />
          </div>
        ) : count === 0 ? (
          <div className="bg-linear-to-br from-card to-dark/60 border border-white/10 rounded-3xl px-6 py-14 text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.5a.56.56 0 011.04 0l2.12 4.9 5.3.46c.5.04.7.66.32 1l-4.02 3.5 1.2 5.2c.12.5-.42.89-.86.62L12 16.9l-4.6 2.78c-.44.27-.98-.12-.86-.62l1.2-5.2-4.02-3.5c-.38-.34-.18-.96.32-1l5.3-.46 2.12-4.9z" />
              </svg>
            </div>
            <p className="text-surface/60 max-w-md mx-auto mb-6">
              No reviews yet — be the first to share your experience working with me.
            </p>
            <Link
              href="/reviews/new"
              className="inline-flex items-center gap-2 bg-primary text-dark font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Write the First Review
            </Link>
          </div>
        ) : (
          <>
            <AvgSummary reviews={list} />

            <div
              className="relative"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {/* Arrows */}
              {count > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous review"
                    className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-card border border-white/10 text-surface/70 hover:text-primary hover:border-primary/40 hover:scale-105 flex items-center justify-center transition-all shadow-lg shadow-black/20"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next review"
                    className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-card border border-white/10 text-surface/70 hover:text-primary hover:border-primary/40 hover:scale-105 flex items-center justify-center transition-all shadow-lg shadow-black/20"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={current!.id}
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <QuoteCard review={current!} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            {count > 1 && (
              <div className="flex justify-center gap-2 mt-7">
                {list.map((r, i) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Go to review ${i + 1}`}
                    aria-current={i === index}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? "w-7 bg-primary" : "w-2 bg-white/15 hover:bg-white/30"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
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
                href="/reviews"
                className="inline-flex items-center gap-2 border border-primary/30 text-primary font-medium px-6 py-3 rounded-xl hover:bg-primary/10 transition-all"
              >
                View All Reviews
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
