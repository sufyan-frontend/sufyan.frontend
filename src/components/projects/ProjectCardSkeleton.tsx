/**
 * Loading placeholder for ProjectCard.
 *
 * This mirrors ProjectCard's DOM structure element for element — same wrapper
 * classes, same p-6 padding, same image box, same margins — and replaces only the
 * text with bars sized to the exact line-box each piece of type occupies. Nothing
 * moves when the real cards stream in.
 *
 * Line-box heights, derived from the type scale ProjectCard uses:
 *   title  text-lg                 → line-height 1.75rem  (28px)
 *   body   text-sm leading-relaxed → 0.875rem × 1.625     (22.75px)
 *   tag    text-xs + py-1          → 1rem + 2×4px         (24px)
 *   link   text-sm                 → line-height 1.25rem  (20px)
 *
 * Keep these in step with ProjectCard if its type scale ever changes.
 */

const LINE = {
  title: "1.75rem",
  body: "1.421875rem",
  tag: "1.5rem",
  link: "1.25rem",
} as const;

/** A shimmer bar centred in a line box of the given height, like a line of text. */
function Bar({ line, width, className = "" }: { line: string; width: string; className?: string }) {
  return (
    <span className="flex items-center" style={{ height: line }}>
      <span className={`block rounded bg-white/7 ${className}`} style={{ width, height: "0.65em" }} />
    </span>
  );
}

/**
 * Description lines to reserve, by grid position.
 *
 * Measured against the live cards: the top row runs ~8.4 description lines
 * (the longest write-ups sort first) and later rows settle around 5.4 then 4.
 * The top row is the one on screen while the data streams in, so it is the one
 * worth matching — reserving its height is what keeps the visible area still.
 */
function linesForIndex(index: number): number {
  return index < 3 ? 8 : 5;
}

export interface ProjectCardSkeletonProps {
  /** Must match the imageClass passed to ProjectCard on the same grid. */
  imageClass?: string;
  /** Rendered where the real badge sits, so the image box looks the same. */
  badge?: "featured" | "practice" | "none";
  /** Description lines to reserve. */
  lines?: number;
}

export default function ProjectCardSkeleton({
  imageClass = "h-52",
  badge = "none",
  lines = 8,
}: ProjectCardSkeletonProps) {
  return (
    <article
      className="bg-card border border-white/5 rounded-2xl overflow-hidden h-full flex flex-col animate-pulse"
      aria-hidden="true"
    >
      <div className={`relative ${imageClass} overflow-hidden bg-dark`}>
        <div className="absolute inset-0 bg-white/4" />
        {badge === "featured" && (
          <span className="absolute top-3 right-3 h-6 w-20 rounded-full bg-white/7" />
        )}
        {badge === "practice" && (
          <span className="absolute top-3 left-3 h-6 w-20 rounded-full bg-white/7" />
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* h3 — text-lg mb-2 */}
        <div className="mb-2">
          <Bar line={LINE.title} width="70%" />
        </div>

        {/* p — text-sm leading-relaxed mb-4 flex-1 */}
        <div className="mb-4 flex-1">
          {Array.from({ length: lines }).map((_, i) => (
            <Bar key={i} line={LINE.body} width={i === lines - 1 ? "55%" : "100%"} />
          ))}
        </div>

        {/* tags — flex flex-wrap gap-2 mb-4, pills are text-xs px-2 py-1 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {["4rem", "5.5rem", "4.5rem"].map((w) => (
            <span
              key={w}
              className="rounded-full bg-white/7"
              style={{ width: w, height: LINE.tag }}
            />
          ))}
        </div>

        {/* link — text-sm, bar plus the 1rem icon and its gap-2 */}
        <div className="flex items-center gap-2">
          <Bar line={LINE.link} width="7rem" />
          <span className="w-4 h-4 rounded bg-white/7" />
        </div>
      </div>
    </article>
  );
}

/** A full grid of skeletons using the same grid classes as the real grids. */
export function ProjectsGridSkeleton({
  count = 6,
  imageClass = "h-52",
  badge = "none",
}: ProjectCardSkeletonProps & { count?: number }) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      role="status"
      aria-label="Loading projects"
    >
      {Array.from({ length: count }).map((_, i) => (
        <ProjectCardSkeleton key={i} imageClass={imageClass} badge={badge} lines={linesForIndex(i)} />
      ))}
      <span className="sr-only">Loading projects…</span>
    </div>
  );
}
