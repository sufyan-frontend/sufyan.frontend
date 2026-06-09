import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data";

const base = "https://sufyan-frontend.vercel.app";

const routes: Array<{
  path: string;
  freq: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
  lastMod?: string;
}> = [
  { path: "/",         freq: "monthly", priority: 1.0, lastMod: "2026-06-09" },
  { path: "/about",    freq: "monthly", priority: 0.9, lastMod: "2026-06-09" },
  { path: "/projects", freq: "monthly", priority: 0.9, lastMod: "2026-06-09" },
  { path: "/services", freq: "monthly", priority: 0.8, lastMod: "2025-05-01" },
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
    alternates: {
      languages: { "en-PK": `${base}${path}` },
    },
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
    alternates: {
      languages: { "en-PK": `${base}/blog/${post.slug}` },
    },
  }));

  return [...staticRoutes, ...blogRoutes];
}
