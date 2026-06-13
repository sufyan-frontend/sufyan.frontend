"use client";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { getPost, deletePost } from "@/lib/cms-api";
import { useAdminSidebar } from "../../_context";

function DeleteConfirm({ slug, onClose }: { slug: string; onClose: () => void }) {
  const router = useRouter();
  const qc = useQueryClient();
  const mut = useMutation({
    mutationFn: () => deletePost(slug),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["cms-posts"] });
      router.push("/admin");
    },
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-sm bg-card border border-white/10 rounded-2xl p-6 shadow-2xl">
        <div className="flex items-start gap-4 mb-5">
          <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
          <div>
            <h3 className="text-surface font-bold text-base mb-0.5">Delete Post</h3>
            <p className="text-surface/40 text-xs">This cannot be undone.</p>
          </div>
        </div>
        <p className="text-surface/60 text-sm mb-6">
          Delete{" "}
          <span className="text-surface font-mono font-medium bg-white/5 px-1.5 py-0.5 rounded">{slug}</span>?
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 text-sm border border-white/10 text-surface/50 hover:text-surface rounded-xl hover:bg-white/5 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => mut.mutate()}
            disabled={mut.isPending}
            className="flex-1 py-2.5 text-sm bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-colors disabled:opacity-60"
          >
            {mut.isPending ? "Deleting…" : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdminViewPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { toggle } = useAdminSidebar();
  const [showDelete, setShowDelete] = useState(false);

  const { data: post, isLoading, isError } = useQuery({
    queryKey: ["cms-post", slug],
    queryFn: () => getPost(slug),
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="p-8 animate-pulse">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="h-10 bg-white/5 rounded-xl w-32" />
          <div className="h-72 bg-card border border-white/5 rounded-2xl" />
        </div>
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <p className="text-surface/50 mb-4">Post not found.</p>
          <Link href="/admin" className="text-primary text-sm hover:underline">← Back to admin</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <header className="h-14 border-b border-white/5 bg-card/60 backdrop-blur-sm sticky top-0 z-20 flex items-center gap-3 px-4 sm:px-6 shrink-0">
        <button
          type="button"
          onClick={toggle}
          className="lg:hidden p-2 rounded-lg text-surface/40 hover:text-surface hover:bg-white/5 transition-colors"
          aria-label="Open sidebar"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <Link
          href="/admin"
          className="flex items-center gap-2 text-surface/40 hover:text-surface transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          All Posts
        </Link>
        <span className="text-white/10">|</span>
        <span className="text-surface/30 text-xs font-mono truncate max-w-50">/{slug}</span>

        <div className="ml-auto flex items-center gap-2">
          <Link
            href={`/admin/posts/${slug}/edit`}
            className="flex items-center gap-1.5 px-4 py-1.5 text-sm bg-primary/10 text-primary font-medium rounded-xl hover:bg-primary/20 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Edit
          </Link>
          <button
            type="button"
            onClick={() => setShowDelete(true)}
            className="flex items-center gap-1.5 px-4 py-1.5 text-sm bg-red-500/10 text-red-400 font-medium rounded-xl hover:bg-red-500/20 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Delete
          </button>
        </div>
      </header>

      {/* Body */}
      <main className="p-4 sm:p-8">
        <article className="max-w-3xl mx-auto">
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">{tag}</span>
              ))}
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl font-bold text-surface leading-tight mb-4">{post.title}</h1>

          <div className="flex items-center gap-3 text-surface/40 text-sm mb-10 pb-10 border-b border-white/5">
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </time>
          </div>

          {post.image && (
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-white/5 mb-10">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover object-top"
                onError={(e) => { (e.currentTarget.parentElement as HTMLElement).style.display = "none"; }}
              />
            </div>
          )}

          <div className="prose prose-invert prose-sm sm:prose max-w-none">
            <p className="text-surface/70 text-base leading-relaxed">{post.description}</p>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between flex-wrap gap-4">
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 text-surface/40 hover:text-surface text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to All Posts
            </Link>
            <Link
              href={`/admin/posts/${slug}/edit`}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary/20 transition-colors"
            >
              Edit Post
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </Link>
          </div>
        </article>
      </main>

      {showDelete && <DeleteConfirm slug={slug} onClose={() => setShowDelete(false)} />}
    </>
  );
}
