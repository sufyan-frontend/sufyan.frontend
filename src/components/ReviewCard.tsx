import { StarDisplay } from "./StarRating";
import type { Review } from "@/lib/reviews-api";

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
    return url;
  }
}

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="bg-card border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all h-full flex flex-col">
      <div className="flex items-center justify-between gap-3 mb-4">
        <StarDisplay value={review.rating} size="sm" />
        <svg className="w-7 h-7 text-primary/25 shrink-0" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>

      <blockquote className="text-surface/75 text-sm leading-relaxed flex-1">
        <p>{review.message}</p>
      </blockquote>

      <figcaption className="mt-5 pt-4 border-t border-white/5 flex items-center gap-3">
        {review.avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={review.avatar}
            alt={review.name}
            className="w-10 h-10 rounded-full object-cover shrink-0 ring-1 ring-white/10"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-primary/15 text-primary flex items-center justify-center font-semibold text-sm shrink-0">
            {initials(review.name) || "•"}
          </div>
        )}
        <div className="min-w-0">
          <strong className="text-surface text-sm font-semibold block truncate">{review.name}</strong>
          <span className="text-surface/50 text-xs block truncate">
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
    </figure>
  );
}
