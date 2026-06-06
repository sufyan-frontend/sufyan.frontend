import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles and insights by Muhammad Sufyan on React, Next.js, Tailwind CSS, and modern frontend development.",
  alternates: { canonical: "https://sufyan-frontend.vercel.app/blog" },
};

export default function Blog() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Writing</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-surface mb-4">Blog</h1>
            <p className="text-surface/60 max-w-xl mx-auto">
              Thoughts, tutorials, and insights about frontend development, React, and the modern web.
            </p>
          </div>
        </Reveal>

        <div className="space-y-6">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.1}>
              <article className="bg-card border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all group">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                  <span className="text-surface/40 text-xs ml-auto">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    {" · "}{post.readTime} read
                  </span>
                </div>
                <h2 className="text-surface font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-surface/60 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
