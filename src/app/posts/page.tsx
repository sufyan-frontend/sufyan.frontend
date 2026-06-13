"use client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import { getPosts, type CmsPost } from "@/lib/cms-api";

function SkeletonCard() {
  return (
    <div className="bg-card border border-white/5 rounded-2xl overflow-hidden animate-pulse">
      <div className="h-48 bg-white/5" />
      <div className="p-6 space-y-3">
        <div className="h-3 bg-white/5 rounded w-1/4" />
        <div className="h-5 bg-white/5 rounded w-3/4" />
        <div className="h-3 bg-white/5 rounded" />
        <div className="h-3 bg-white/5 rounded w-5/6" />
        <div className="flex gap-2 pt-1">
          <div className="h-5 w-12 bg-white/5 rounded-full" />
          <div className="h-5 w-16 bg-white/5 rounded-full" />
        </div>
      </div>
    </div>
  );
}

function PostCard({ post }: { post: CmsPost }) {
  return (
    <article className="bg-card border border-white/5 rounded-2xl overflow-hidden group hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col h-full">
      {post.image && (
      <div className="relative h-48 bg-white/5 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.currentTarget.parentElement as HTMLElement).style.display = "none";
          }}
        />
      </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs text-surface/40 mb-3">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
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
        <h2 className="text-surface font-bold text-lg mb-2 line-clamp-2 leading-snug group-hover:text-primary transition-colors">
          {post.title}
        </h2>
        <p className="text-surface/60 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
          {post.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/posts/${post.slug}`}
          className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline"
        >
          Read Post
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

export default function PostsPage() {
  const { data: posts = [], isLoading, isError } = useQuery({
    queryKey: ["cms-posts"],
    queryFn: getPosts,
  });

  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = [...new Set(posts.flatMap((p) => p.tags))].sort();
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const filtered = activeTag ? sorted.filter((p) => p.tags.includes(activeTag)) : sorted;

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-mono text-sm mb-3">Updates</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-surface mb-4">Posts</h1>
          <p className="text-surface/60 text-lg max-w-xl">
            Thoughts, tutorials, and updates on frontend development.
          </p>
        </div>
      </section>

      {/* Tag filter */}
      {!isLoading && allTags.length > 0 && (
        <section className="py-6 border-b border-white/5 sticky top-16 bg-dark/90 backdrop-blur-sm z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveTag(null)}
              className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                !activeTag
                  ? "bg-primary text-dark"
                  : "bg-white/5 text-surface/60 hover:bg-white/10 hover:text-surface"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                  activeTag === tag
                    ? "bg-primary text-dark"
                    : "bg-white/5 text-surface/60 hover:bg-white/10 hover:text-surface"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
            </div>
          ) : isError ? (
            <div className="text-center py-24">
              <p className="text-surface/40 text-sm">Failed to load posts. Please try again later.</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-surface/40 text-sm">No posts found.</p>
              {activeTag && (
                <button
                  onClick={() => setActiveTag(null)}
                  className="mt-3 text-primary text-sm hover:underline"
                >
                  Clear filter
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
