import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import { blogContent } from "@/lib/blog-content";

const hasContent = (slug: string) => slug in blogContent;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      ...post.tags,
      "Muhammad Sufyan", "sufyanjutt", "sufyanfrontend",
      "Frontend Developer Pakistan", "React Next.js tutorial",
    ],
    authors: [{ name: "Muhammad Sufyan", url: "https://sufyan-frontend.vercel.app" }],
    alternates: { canonical: `https://sufyan-frontend.vercel.app/blog/${post.slug}` },
    robots: hasContent(post.slug) ? undefined : { index: false, follow: false },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `https://sufyan-frontend.vercel.app/blog/${post.slug}`,
      publishedTime: post.date,
      authors: ["Muhammad Sufyan"],
      tags: post.tags,
      images: [{ url: "https://sufyan-frontend.vercel.app/profile.png", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["https://sufyan-frontend.vercel.app/profile.png"],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://sufyan-frontend.vercel.app/blog/${post.slug}`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    inLanguage: "en-PK",
    url: `https://sufyan-frontend.vercel.app/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sufyan-frontend.vercel.app/blog/${post.slug}`,
    },
    image: {
      "@type": "ImageObject",
      url: "https://sufyan-frontend.vercel.app/profile.png",
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Person",
      "@id": "https://sufyan-frontend.vercel.app/#person",
      name: "Muhammad Sufyan",
      url: "https://sufyan-frontend.vercel.app",
      sameAs: ["https://github.com/sufyan-frontend", "https://www.linkedin.com/in/sufyan-frontend"],
    },
    publisher: {
      "@type": "Organization",
      name: "Muhammad Sufyan — Frontend Developer",
      url: "https://sufyan-frontend.vercel.app",
      logo: {
        "@type": "ImageObject",
        url: "https://sufyan-frontend.vercel.app/favicon.png",
        width: 192,
        height: 192,
      },
    },
    isPartOf: {
      "@type": "Blog",
      "@id": "https://sufyan-frontend.vercel.app/blog",
      name: "Muhammad Sufyan — Frontend Development Blog",
      url: "https://sufyan-frontend.vercel.app/blog",
    },
    keywords: post.tags.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sufyan-frontend.vercel.app/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://sufyan-frontend.vercel.app/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://sufyan-frontend.vercel.app/blog/${post.slug}` },
    ],
  };

  return (
    <div className="pt-24 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-surface/60 hover:text-primary text-sm mb-10 transition-colors"
        >
          <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          Back to Blog
        </Link>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-surface mb-4">{post.title}</h1>

        <div className="flex items-center gap-4 text-surface/50 text-sm mb-10 pb-8 border-b border-white/5">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span aria-hidden="true">·</span>
          <span>{post.readTime} read</span>
        </div>

        <p className="text-surface/70 text-lg leading-relaxed mb-8">{post.excerpt}</p>

        {blogContent[post.slug] && (
          <div className="prose-custom">{blogContent[post.slug]}</div>
        )}
      </div>
    </div>
  );
}
