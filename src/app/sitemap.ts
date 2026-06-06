import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data";

const siteUrl = "https://sufyan-frontend.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about", "/projects", "/services", "/blog", "/contact"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));

  const posts = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "never" as const,
    priority: 0.6,
  }));

  return [...routes, ...posts];
}
