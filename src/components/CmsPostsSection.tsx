"use client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { getPosts, type CmsPost } from "@/lib/cms-api";

const BASE = "https://sufyan-backend.vercel.app";

function SkeletonCard() {
  return (
    <div className="bg-card border border-white/5 rounded-2xl overflow-hidden animate-pulse">
      <div className="h-44 bg-white/5" />
      <div className="p-5 space-y-3">
        <div className="h-3 bg-white/5 rounded w-1/3" />
        <div className="h-5 bg-white/5 rounded w-3/4" />
        <div className="h-3 bg-white/5 rounded" />
        <div className="h-3 bg-white/5 rounded w-5/6" />
      </div>
    </div>
  );
}

function PostCard({ post }: { post: CmsPost }) {
  const img = post.image.startsWith("http") ? post.image : `${BASE}/${post.image}`;
  return (
    <article className="bg-card border border-white/5 rounded-2xl overflow-hidden group hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col h-full">
      <div className="relative h-44 bg-white/5 overflow-hidden">
        <img
          src={"https://sufyan-backend.vercel.app/" + post.image}
          alt={post.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.currentTarget.parentElement as HTMLElement).style.display = "none";
          }}
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs text-surface/40 mb-2.5">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </time>
          {post.author && (
            <>
              <span aria-hidden="true">·</span>
              <span>{post.author}</span>
            </>
          )}
        </div>
        <h3 className="text-surface font-semibold text-base mb-2 line-clamp-2 leading-snug">
          {post.title}
        </h3>
        <p className="text-surface/60 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {post.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/posts/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline"
        >
          Read More
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

export default function CmsPostsSection() {
  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ["cms-posts"],
    queryFn: getPosts,
  });

  if (isError) return null;
  if (!isLoading && (!posts || posts.length === 0)) return null;

  const latest = [...(posts ?? [])]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <section className="py-24" aria-labelledby="cms-posts-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">Updates</p>
          <h2 id="cms-posts-heading" className="text-3xl sm:text-4xl font-bold text-surface mb-4">
            Latest Posts
          </h2>
          <p className="text-surface/60 max-w-xl mx-auto">
            Thoughts, tutorials, and updates from my work in frontend development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
            : latest.map((post) => <PostCard key={post.slug} post={post} />)}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/posts"
            className="inline-flex items-center gap-2 border border-primary/30 text-primary font-medium px-6 py-3 rounded-xl hover:bg-primary/10 transition-all"
          >
            View All Posts
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
