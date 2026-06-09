import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog — Muhammad Sufyan (sufyanjutt) | React & Next.js Articles",
  description:
    "Frontend development articles by Muhammad Sufyan (sufyanjutt) — tutorials on React, Next.js App Router, Tailwind CSS, and performance optimisation.",
  keywords: [
    "Muhammad Sufyan blog", "sufyanjutt blog", "React tutorials Pakistan",
    "Next.js App Router guide", "Tailwind CSS tips", "React performance 2025",
    "frontend development articles", "sufyanfrontend blog", "sufyan developer articles",
    "React Next.js tutorials 2026", "Muhammad Sufyan tutorials", "frontend developer blog Pakistan",
    "web development blog Lahore", "React hooks tutorial", "Next.js Server Components guide",
    "TypeScript React tutorial", "Tailwind CSS guide 2026", "frontend developer career Pakistan",
    "React developer blog 2026", "Next.js tutorial beginner", "Muhammad Sufyan writing",
    "sufyan jutt blog articles", "JavaScript tutorial Pakistan", "Next.js SEO tutorial",
    "frontend development Lahore blog",
  ],
  alternates: { canonical: "https://sufyan-frontend.vercel.app/blog" },
  openGraph: {
    title: "Blog by sufyanjutt — React, Next.js & Frontend Dev",
    description: "Tutorials and insights on React, Next.js, Tailwind CSS and modern web development by Muhammad Sufyan.",
    url: "https://sufyan-frontend.vercel.app/blog",
    images: [{ url: "https://sufyan-frontend.vercel.app/profile.png", width: 400, height: 400, alt: "Muhammad Sufyan — Blog" }],
  },
};

const blogWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://sufyan-frontend.vercel.app/blog",
  url: "https://sufyan-frontend.vercel.app/blog",
  name: "Muhammad Sufyan Blog — Frontend Development Articles",
  description: "53 articles by Muhammad Sufyan (sufyanjutt / sufyanfrontend) covering React.js, Next.js, Tailwind CSS, frontend career guidance for Pakistan developers, and personal brand building.",
  dateModified: "2026-06-09",
  inLanguage: "en-PK",
  isPartOf: { "@id": "https://sufyan-frontend.vercel.app" },
  author: { "@id": "https://sufyan-frontend.vercel.app/#person" },
};

const blogCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://sufyan-frontend.vercel.app/blog",
  name: "Muhammad Sufyan — Frontend Development Blog",
  description: "53 articles by Muhammad Sufyan (sufyanjutt / sufyanfrontend) on React.js, Next.js, Tailwind CSS, frontend career tips, and web development in Pakistan.",
  url: "https://sufyan-frontend.vercel.app/blog",
  author: {
    "@type": "Person",
    name: "Muhammad Sufyan",
    url: "https://sufyan-frontend.vercel.app",
    alternateName: ["sufyanjutt", "sufyanfrontend"],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sufyan-frontend.vercel.app/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://sufyan-frontend.vercel.app/blog" },
    ],
  },
};

export default function Blog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionSchema) }} />
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

    {/* Explore More */}
    <section className="py-14 border-t border-white/5" aria-label="Explore more">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-primary font-mono text-xs text-center uppercase tracking-widest mb-2">Explore More</p>
        <h2 className="text-xl font-bold text-surface text-center mb-8">More From Muhammad Sufyan</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {[
            { href: "/", label: "Home", desc: "Portfolio overview" },
            { href: "/about", label: "About", desc: "My background" },
            { href: "/projects", label: "Projects", desc: "10 live productions" },
            { href: "/services", label: "Services", desc: "What I offer" },
            { href: "/contact", label: "Contact", desc: "Hire me" },
          ].map(({ href, label, desc }) => (
            <Link key={href} href={href} className="bg-card border border-white/5 rounded-xl p-4 hover:border-primary/20 transition-all group text-center block">
              <p className="text-surface font-semibold text-sm group-hover:text-primary transition-colors">{label}</p>
              <p className="text-surface/40 text-xs mt-1">{desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
