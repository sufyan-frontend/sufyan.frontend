import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data";
import { blogContent } from "@/lib/blog-content";

const base = "https://sufyan-frontend.vercel.app";

// A blog post is indexable only when it has full content. `seo-fundamentals`
// is served by its own dedicated route (not the [slug] map) but is indexable.
// This mirrors the noindex logic in blog/[slug]/page.tsx so the sitemap never
// advertises a URL that the page itself marks noindex.
const isIndexable = (slug: string) => slug in blogContent || slug === "seo-fundamentals";

const routes: Array<{
  path: string;
  freq: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
  lastMod?: string;
}> = [
  { path: "/",         freq: "monthly", priority: 1.0, lastMod: "2026-06-09" },
  { path: "/about",    freq: "monthly", priority: 0.9, lastMod: "2026-06-09" },
  { path: "/projects", freq: "monthly", priority: 0.9, lastMod: "2026-06-09" },
  { path: "/cv",       freq: "monthly", priority: 0.8, lastMod: "2026-06-25" },
  { path: "/book",     freq: "monthly", priority: 0.7, lastMod: "2026-06-26" },
  { path: "/services", freq: "monthly", priority: 0.8, lastMod: "2026-06-11" },
  { path: "/reviews",  freq: "weekly",  priority: 0.7, lastMod: "2026-07-04" },
  { path: "/blog",     freq: "weekly",  priority: 0.7, lastMod: "2026-06-09" },
  { path: "/contact",  freq: "yearly",  priority: 0.6 },
  { path: "/privacy",  freq: "yearly",  priority: 0.3 },
  { path: "/terms",    freq: "yearly",  priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = routes.map(({ path, freq, priority, lastMod }) => ({
    url: `${base}${path}`,
    lastModified: lastMod ? new Date(lastMod) : now,
    changeFrequency: freq,
    priority,
  }));

  const blogRoutes = blogPosts
    .filter((post) => isIndexable(post.slug))
    .map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    }));

  return [...staticRoutes, ...blogRoutes];
}
