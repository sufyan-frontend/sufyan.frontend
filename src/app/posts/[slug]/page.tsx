"use client";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { getPost } from "@/lib/cms-api";

const BASE = "https://sufyan-backend.vercel.app";

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading, isError } = useQuery({
    queryKey: ["cms-post", slug],
    queryFn: () => getPost(slug),
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-pulse">
        <div className="h-4 bg-white/5 rounded w-24 mb-8" />
        <div className="h-10 bg-white/5 rounded w-3/4 mb-4" />
        <div className="h-4 bg-white/5 rounded w-1/3 mb-8" />
        <div className="h-72 bg-white/5 rounded-2xl mb-8" />
        <div className="space-y-3">
          <div className="h-4 bg-white/5 rounded" />
          <div className="h-4 bg-white/5 rounded w-5/6" />
          <div className="h-4 bg-white/5 rounded w-4/6" />
        </div>
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-surface font-bold text-2xl mb-3">Post not found</h1>
        <p className="text-surface/40 text-sm mb-8">
          The post you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link href="/posts" className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Posts
        </Link>
      </div>
    );
  }

  

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Back */}
      <Link
        href="/posts"
        className="inline-flex items-center gap-2 text-surface/40 hover:text-surface text-sm transition-colors mb-10"
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
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.currentTarget.parentElement as HTMLElement).style.display = "none";
            }}
          />
        </div>
      )}

      {/* Description / body */}
      <div className="prose prose-invert prose-sm sm:prose max-w-none">
        <p className="text-surface/70 text-base leading-relaxed">{post.description}</p>
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
