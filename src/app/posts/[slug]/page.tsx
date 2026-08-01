import Link from "next/link";
import { notFound } from "next/navigation";
import type { CmsPost } from "@/lib/cms-api";

const SITE_URL = "https://sufyan-frontend.vercel.app";
const BACKEND = "https://sufyan-backend.vercel.app";

// Fetches a CMS post server-side so the body is in the initial HTML (crawlable).
// A genuine 404 → notFound() (hard 404). Any other failure (backend down, 500,
// network) throws so Next renders a 500 error page instead of a soft-404 that
// would deindex a page that actually exists.
async function fetchPost(slug: string): Promise<CmsPost | null> {
  const res = await fetch(`${BACKEND}/api/cms/posts/${slug}`, { cache: "no-store" });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to load post "${slug}" (${res.status})`);
  const data = await res.json();
  return "post" in data ? (data.post as CmsPost) : (data as CmsPost);
}

type Props = { params: Promise<{ slug: string }> };

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await fetchPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/posts/${post.slug}`;
  const image = post.image ?? `${SITE_URL}/profile.png`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": url,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    inLanguage: "en-PK",
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: { "@type": "ImageObject", url: image, width: 1200, height: 630 },
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Muhammad Sufyan — Frontend Developer",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.png`,
        width: 192,
        height: 192,
      },
    },
    ...(post.tags.length > 0 && { keywords: post.tags.join(", ") }),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Posts", item: `${SITE_URL}/posts` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Back */}
      <Link
        href="/posts"
        className="inline-flex items-center mt-4 gap-2 text-surface/40 hover:text-surface text-sm transition-colors mb-10"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        All Posts
      </Link>

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-surface leading-tight mb-4">
        {post.title}
      </h1>

      {/* Meta */}
      <div className="flex items-center gap-3 text-surface/40 text-sm mb-10 pb-10 border-b border-white/5">
        <span>{post.author}</span>
        <span aria-hidden="true">·</span>
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </div>

      {/* Cover image */}
      {post.image && (
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-white/5 mb-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.image} alt={post.title} className="w-full h-full object-cover object-top" />
        </div>
      )}

      {/* Description / body */}
      <div className="prose prose-invert prose-sm sm:prose max-w-none">
        <p className="text-surface/70 text-base leading-relaxed whitespace-pre-line">{post.description}</p>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between flex-wrap gap-4">
        <Link
          href="/posts"
          className="inline-flex items-center gap-2 text-surface/40 hover:text-surface text-sm transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Posts
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary/20 transition-colors"
        >
          Get in touch
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
