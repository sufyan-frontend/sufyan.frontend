import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /quotation (+ its exported PDF) is a client-facing document, not public content
        disallow: ["/api/", "/admin/", "/admin", "/quotation", "/quotation.pdf"],
      },
      // Allow major AI crawlers to index this site
      { userAgent: "GPTBot",        allow: "/" },
      { userAgent: "ChatGPT-User",  allow: "/" },
      { userAgent: "anthropic-ai",  allow: "/" },
      { userAgent: "ClaudeBot",     allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Applebot",      allow: "/" },
      { userAgent: "CCBot",         allow: "/" },
      { userAgent: "Googlebot",     allow: "/" },
    ],
    sitemap: "https://sufyan-frontend.vercel.app/sitemap.xml",
    // LLM-friendly index — AI crawlers and LLMs should read this file
    // https://sufyan-frontend.vercel.app/llms.txt
  };
}
