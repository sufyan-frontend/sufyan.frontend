import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async headers() {
    return [
      {
        // Security headers on every route. The CSP is deliberately minimal
        // (frame-ancestors/base-uri/object-src only) so it hardens against
        // clickjacking, base-URI hijacking, and object injection WITHOUT a
        // script-src rule that would break the inline JSON-LD and Clarity tags.
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'self'; base-uri 'self'; object-src 'none'" },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          { key: "Content-Type", value: "application/xml; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Older, thinner posts were superseded by newer versions and are noindexed.
      // 301 them to their replacements so links/crawlers don't dead-end.
      { source: "/blog/react-performance", destination: "/blog/react-performance-2026", permanent: true },
      { source: "/blog/nextjs-app-router-guide", destination: "/blog/nextjs-server-components-guide", permanent: true },
    ];
  },
};

export default nextConfig;
