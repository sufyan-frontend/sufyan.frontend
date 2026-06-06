import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data";

const base = "https://sufyan-frontend.vercel.app";

const routes: Array<{ path: string; freq: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }> = [
  { path: "/",         freq: "monthly", priority: 1.0 },
  { path: "/about",    freq: "monthly", priority: 0.9 },
  { path: "/projects", freq: "monthly", priority: 0.9 },
  { path: "/services", freq: "monthly", priority: 0.8 },
  { path: "/blog",     freq: "weekly",  priority: 0.7 },
  { path: "/contact",  freq: "yearly",  priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = routes.map(({ path, freq, priority }) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-06-06"),
    changeFrequency: freq,
    priority,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "never" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
