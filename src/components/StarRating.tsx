"use client";
import { useState } from "react";

function StarIcon({ filled, className }: { filled: boolean; className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.5a.56.56 0 011.04 0l2.12 4.9 5.3.46c.5.04.7.66.32 1l-4.02 3.5 1.2 5.2c.12.5-.42.89-.86.62L12 16.9l-4.6 2.78c-.44.27-.98-.12-.86-.62l1.2-5.2-4.02-3.5c-.38-.34-.18-.96.32-1l5.3-.46 2.12-4.9z"
      />
    </svg>
  );
}

/** Read-only star display. */
export function StarDisplay({
  value,
  size = "sm",
}: {
  value: number;
  size?: "sm" | "md" | "lg";
}) {
  const px = size === "lg" ? "w-6 h-6" : size === "md" ? "w-5 h-5" : "w-4 h-4";
  return (
    <div
      className="inline-flex items-center gap-0.5 text-amber-400"
      role="img"
      aria-label={`Rated ${value} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <StarIcon
          key={n}
          filled={n <= Math.round(value)}
          className={`${px} ${n <= Math.round(value) ? "text-amber-400" : "text-surface/25"}`}
        />
      ))}
    </div>
  );
}

/** Interactive star input for the review form. */
export function StarInput({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const [hover, setHover] = useState(0);
  const active = hover || value;
  const labels = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"];

  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="flex items-center gap-1"
        onMouseLeave={() => setHover(0)}
        role="radiogroup"
        aria-label="Star rating"
      >
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            role="radio"
            aria-checked={value === n}
            aria-label={`${n} star${n > 1 ? "s" : ""}`}
            onClick={() => onChange(n)}
            onMouseEnter={() => setHover(n)}
            className="p-0.5 rounded transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            <StarIcon
              filled={n <= active}
              className={`w-8 h-8 transition-colors ${
                n <= active ? "text-amber-400" : "text-surface/25"
              }`}
            />
          </button>
        ))}
      </div>
      <span className="text-xs text-surface/50 h-4">
        {active ? labels[active] : "Tap a star to rate"}
      </span>
    </div>
  );
}
