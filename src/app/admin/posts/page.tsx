"use client";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getPosts, deletePost, type CmsPost } from "@/lib/cms-api";
import { useAdminSidebar } from "../_context";

/* ─── Toast ──────────────────────────────────────────────────────────── */

function Toast({ msg, type }: { msg: string; type: "success" | "error" }) {
  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl shadow-2xl text-sm font-medium animate-in slide-in-from-bottom-2 ${
        type === "success" ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
      }`}
    >
      {type === "success" ? (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}
      {msg}
    </div>
  );
}

/* ─── Delete Confirm ─────────────────────────────────────────────────── */

function DeleteConfirm({
  slug,
  onClose,
  onToast,
}: {
  slug: string;
  onClose: () => void;
  onToast: (msg: string, type: "success" | "error") => void;
}) {
  const qc = useQueryClient();
  const mut = useMutation({
    mutationFn: () => deletePost(slug),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["cms-posts"] });
      onToast("Post deleted.", "success");
      onClose();
    },
    onError: (e: Error) => {
      onToast(e.message || "Failed to delete post.", "error");
      onClose();
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
          <span className="text-surface font-mono font-medium bg-white/5 px-1.5 py-0.5 rounded">
            {slug}
          </span>
          ?
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

/* ─── Posts Page ─────────────────────────────────────────────────────── */

export default function PostsAdminPage() {
  const router = useRouter();
  const { toggle } = useAdminSidebar();
  const [deleteSlug, setDeleteSlug] = useState<string | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);
  const [search, setSearch] = useState("");

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["cms-posts"],
    queryFn: getPosts,
  });

  const showToast = (msg: string, type: "success" | "error" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  const openAdd = () => router.push("/admin/posts/new");
  const openEdit = (p: CmsPost) => router.push(`/admin/posts/${p.slug}/edit`);

  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const filtered = search.trim()
    ? sorted.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.slug.toLowerCase().includes(search.toLowerCase()) ||
          p.author.toLowerCase().includes(search.toLowerCase())
      )
    : sorted;

  return (
    <>
      {/* ── Header ── */}
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

        <h1 className="text-surface font-bold text-sm hidden sm:block">All Posts</h1>

        <div className="flex items-center gap-2 ml-auto">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-1.5">
            <svg className="w-3.5 h-3.5 text-surface/30 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-surface text-xs placeholder-surface/20 focus:outline-none w-28 sm:w-36"
            />
          </div>

          <button
            type="button"
            onClick={openAdd}
            className="flex items-center gap-1.5 bg-primary text-dark text-sm font-semibold px-4 py-2 rounded-xl hover:bg-primary/90 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span className="hidden sm:inline">New Post</span>
          </button>
        </div>
      </header>

      {/* ── Main ── */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        {isLoading ? (
          <div className="space-y-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-14 bg-card border border-white/5 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-32">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-surface font-bold text-xl mb-2">No posts yet</h2>
            <p className="text-surface/40 text-sm mb-7">Create your first post to get started.</p>
            <button
              type="button"
              onClick={openAdd}
              className="inline-flex items-center gap-2 bg-primary text-dark font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create First Post
            </button>
          </div>
        ) : (
          <div className="bg-card border border-white/5 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-left text-xs text-surface/30 font-semibold uppercase tracking-wider px-5 py-4 w-10">#</th>
                    <th className="text-left text-xs text-surface/30 font-semibold uppercase tracking-wider px-5 py-4">Post</th>
                    <th className="text-left text-xs text-surface/30 font-semibold uppercase tracking-wider px-5 py-4 hidden md:table-cell">Author</th>
                    <th className="text-left text-xs text-surface/30 font-semibold uppercase tracking-wider px-5 py-4 hidden lg:table-cell">Date</th>
                    <th className="text-left text-xs text-surface/30 font-semibold uppercase tracking-wider px-5 py-4 hidden xl:table-cell">Tags</th>
                    <th className="text-right text-xs text-surface/30 font-semibold uppercase tracking-wider px-5 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center py-12 text-surface/30 text-sm">
                        No posts match &ldquo;{search}&rdquo;
                      </td>
                    </tr>
                  ) : (
                    filtered.map((post, i) => (
                      <tr key={post.slug} className="hover:bg-white/[0.015] transition-colors group">
                        <td className="px-5 py-4 text-surface/20 text-xs font-mono">{i + 1}</td>

                        <td className="px-5 py-4">
                          <div className="font-semibold text-surface text-sm leading-tight">{post.title}</div>
                          <div className="text-surface/30 text-xs font-mono mt-0.5 truncate max-w-[200px]">/{post.slug}</div>
                        </td>

                        <td className="px-5 py-4 hidden md:table-cell text-surface/50 text-sm">{post.author}</td>

                        <td className="px-5 py-4 hidden lg:table-cell text-surface/40 text-xs font-mono whitespace-nowrap">
                          {new Date(post.date).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </td>

                        <td className="px-5 py-4 hidden xl:table-cell">
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 3).map((t) => (
                              <span key={t} className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded-md">{t}</span>
                            ))}
                            {post.tags.length > 3 && (
                              <span className="text-xs text-surface/20">+{post.tags.length - 3}</span>
                            )}
                          </div>
                        </td>

                        <td className="px-5 py-4">
                          <div className="flex items-center justify-end gap-0.5">
                            <Link
                              href={`/admin/posts/${post.slug}`}
                              title="View post"
                              className="p-2 rounded-lg text-surface/20 hover:text-surface hover:bg-white/5 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </Link>
                            <button
                              type="button"
                              onClick={() => openEdit(post)}
                              title="Edit post"
                              className="p-2 rounded-lg text-surface/20 hover:text-primary hover:bg-primary/10 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              onClick={() => setDeleteSlug(post.slug)}
                              title="Delete post"
                              className="p-2 rounded-lg text-surface/20 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="px-5 py-3 border-t border-white/5 flex items-center justify-between">
              <p className="text-surface/30 text-xs">
                {filtered.length} of {posts.length} post{posts.length !== 1 ? "s" : ""}
              </p>
              <button
                type="button"
                onClick={openAdd}
                className="inline-flex items-center gap-1.5 text-primary text-xs font-medium hover:underline"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add post
              </button>
            </div>
          </div>
        )}
      </main>

      {deleteSlug && (
        <DeleteConfirm
          slug={deleteSlug}
          onClose={() => setDeleteSlug(null)}
          onToast={showToast}
        />
      )}

      {toast && <Toast msg={toast.msg} type={toast.type} />}
    </>
  );
}
