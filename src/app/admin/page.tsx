"use client";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getPosts, deletePost, type CmsPost } from "@/lib/cms-api";
import { useAdminSidebar } from "./_context";

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

/* ─── Admin Page ─────────────────────────────────────────────────────── */

export default function AdminPage() {
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
      {/* ── Navbar ── */}
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

        <h1 className="text-surface font-bold text-sm hidden sm:block">Posts</h1>

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
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-card border border-white/5 rounded-2xl overflow-hidden animate-pulse">
                <div className="h-44 bg-white/5" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-white/5 rounded w-1/3" />
                  <div className="h-5 bg-white/5 rounded w-3/4" />
                  <div className="h-3 bg-white/5 rounded" />
                  <div className="h-3 bg-white/5 rounded w-5/6" />
                </div>
              </div>
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
          <>
            {filtered.length === 0 ? (
              <p className="text-center py-16 text-surface/30 text-sm">
                No posts match &ldquo;{search}&rdquo;
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((post) => (
                  <div
                    key={post.slug}
                    className="bg-card border border-white/5 rounded-2xl overflow-hidden flex flex-col hover:border-white/10 transition-colors group"
                  >
                    {/* Cover */}
                    <div className="relative h-44 bg-white/3 overflow-hidden shrink-0">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            (e.currentTarget.parentElement as HTMLElement).classList.add("hidden");
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-10 h-10 text-white/5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                      {/* Action buttons overlay */}
                      <div className="absolute top-2.5 right-2.5 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link
                          href={`/admin/posts/${post.slug}`}
                          title="View"
                          className="w-7 h-7 flex items-center justify-center bg-dark/80 backdrop-blur-sm rounded-lg text-surface/60 hover:text-surface transition-colors"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </Link>
                        <button
                          type="button"
                          onClick={() => openEdit(post)}
                          title="Edit"
                          className="w-7 h-7 flex items-center justify-center bg-dark/80 backdrop-blur-sm rounded-lg text-surface/60 hover:text-primary transition-colors"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeleteSlug(post.slug)}
                          title="Delete"
                          className="w-7 h-7 flex items-center justify-center bg-dark/80 backdrop-blur-sm rounded-lg text-surface/60 hover:text-red-400 transition-colors"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-5 flex flex-col flex-1">
                      {/* Tags */}
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {post.tags.slice(0, 3).map((t) => (
                            <span key={t} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                              {t}
                            </span>
                          ))}
                          {post.tags.length > 3 && (
                            <span className="text-xs text-surface/20">+{post.tags.length - 3}</span>
                          )}
                        </div>
                      )}

                      {/* Title */}
                      <Link
                        href={`/admin/posts/${post.slug}`}
                        className="text-surface font-bold text-base leading-snug line-clamp-2 mb-2 hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>

                      {/* Description */}
                      <p className="text-surface/40 text-xs leading-relaxed line-clamp-2 flex-1 mb-4">
                        {post.description}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-white/5">
                        <div className="flex items-center gap-1.5 text-surface/30 text-xs">
                          <span>{post.author}</span>
                          <span>·</span>
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString("en-GB", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })}
                          </time>
                        </div>

                        <div className="flex items-center gap-0.5">
                          <Link
                            href={`/admin/posts/${post.slug}`}
                            title="View"
                            className="p-1.5 rounded-lg text-surface/20 hover:text-surface hover:bg-white/5 transition-colors"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </Link>
                          <button
                            type="button"
                            onClick={() => openEdit(post)}
                            title="Edit"
                            className="p-1.5 rounded-lg text-surface/20 hover:text-primary hover:bg-primary/10 transition-colors"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button
                            type="button"
                            onClick={() => setDeleteSlug(post.slug)}
                            title="Delete"
                            className="p-1.5 rounded-lg text-surface/20 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <p className="text-surface/20 text-xs mt-6">
              {filtered.length} of {posts.length} post{posts.length !== 1 ? "s" : ""}
            </p>
          </>
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
