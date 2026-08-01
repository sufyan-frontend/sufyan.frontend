import { ImageResponse } from "next/og";

// Site-wide default social preview image (replaces the reused profile.png).
// Cascades to every route that doesn't define its own opengraph-image.
export const alt = "Muhammad Sufyan — Frontend Developer in Lahore, Pakistan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0F172A 0%, #111C2E 100%)",
          color: "#E2E8F0",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#38BDF8",
            fontSize: 28,
            letterSpacing: 2,
            marginBottom: 24,
          }}
        >
          REACT · NEXT.JS · LAHORE, PAKISTAN
        </div>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 700, lineHeight: 1.1 }}>
          Muhammad Sufyan
        </div>
        <div style={{ display: "flex", fontSize: 46, color: "#94A3B8", marginTop: 16 }}>
          Frontend Developer
        </div>
        <div style={{ display: "flex", marginTop: 56, fontSize: 26, color: "#64748B" }}>
          sufyan-frontend.vercel.app
        </div>
      </div>
    ),
    { ...size },
  );
}
