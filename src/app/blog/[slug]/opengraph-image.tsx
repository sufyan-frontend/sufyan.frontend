import { ImageResponse } from "next/og";
import { blogPosts } from "@/lib/data";

// Per-post social preview: the article title on a branded card, so every blog
// share shows unique, relevant art instead of the same profile photo.
export const alt = "Muhammad Sufyan — Frontend Development Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  const title = post?.title ?? "Frontend Development Blog";
  const tags = post?.tags ?? [];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #0F172A 0%, #111C2E 100%)",
          color: "#E2E8F0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#38BDF8", fontSize: 26, letterSpacing: 1 }}>
          Muhammad Sufyan · Frontend Blog
        </div>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 60 ? 56 : 68,
            fontWeight: 700,
            lineHeight: 1.15,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", gap: 12, fontSize: 24, color: "#94A3B8" }}>
          {tags.slice(0, 3).map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                border: "1px solid #334155",
                borderRadius: 999,
                padding: "6px 18px",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
