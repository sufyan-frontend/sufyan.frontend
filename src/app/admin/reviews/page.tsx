"use client";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAllReviews,
  updateReview,
  deleteReview,
  type Review,
  type ReviewPatch,
} from "@/lib/reviews-api";
import { StarDisplay, StarInput } from "@/components/StarRating";
import { useAdminSidebar } from "../_context";

/* ─── Toast ──────────────────────────────────────────────────────────── */
function Toast({ msg, type }: { msg: string; type: "success" | "error" }) {
  return (
    <div
      className={`fixed bottom-6 right-6 z-[60] flex items-center gap-2.5 px-4 py-3 rounded-xl shadow-2xl text-sm font-medium ${
        type === "success" ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
      }`}
    >
      {msg}
    </div>
  );
}

/* ─── Edit Modal ─────────────────────────────────────────────────────── */
function EditModal({
  review,
  onClose,
  onToast,
}: {
  review: Review;
  onClose: () => void;
  onToast: (msg: string, type?: "success" | "error") => void;
}) {
  const qc = useQueryClient();
  const [name, setName] = useState(review.name);
  const [company, setCompany] = useState(review.company);
  const [rating, setRating] = useState(review.rating);
  const [message, setMessage] = useState(review.message);
  const [website, setWebsite] = useState(review.website ?? "");

  const mut = useMutation({
    mutationFn: (patch: ReviewPatch) => updateReview(review.id, patch),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-reviews"] });
      qc.invalidateQueries({ queryKey: ["reviews"] });
      onToast("Review updated.");
      onClose();
    },
    onError: (e: Error) => onToast(e.message || "Update failed.", "error"),
  });

  const input =
    "w-full bg-dark/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-surface placeholder:text-surface/35 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20";
  const label = "block text-sm font-medium text-surface/80 mb-1.5";

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 overflow-y-auto">
      <div className="fixed inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg my-8 bg-card border border-white/10 rounded-2xl shadow-2xl">
        <div className="flex items-center justify-between p-6 pb-4 border-b border-white/5">
          <h3 className="text-surface font-bold text-lg">Edit Review</h3>
          <button onClick={onClose} aria-label="Close" className="p-2 -mr-1 rounded-lg text-surface/50 hover:text-surface hover:bg-white/5">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 pt-5 space-y-4">
          <div>
            <label className={label}>Rating</label>
            <StarInput value={rating} onChange={setRating} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={label}>Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className={input} maxLength={80} />
            </div>
            <div>
              <label className={label}>Company</label>
              <input value={company} onChange={(e) => setCompany(e.target.value)} className={input} maxLength={100} />
            </div>
          </div>
          <div>
            <label className={label}>Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} maxLength={1000} className={`${input} resize-y`} />
          </div>
          <div>
            <label className={label}>Website</label>
            <input value={website} onChange={(e) => setWebsite(e.target.value)} className={input} placeholder="optional" maxLength={200} />
          </div>
        </div>
        <div className="flex gap-3 p-6 pt-2">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 text-sm border border-white/10 text-surface/60 hover:text-surface rounded-xl hover:bg-white/5"
          >
            Cancel
          </button>
          <button
            onClick={() => mut.mutate({ name, company, rating, message, website })}
            disabled={mut.isPending}
            className="flex-1 py-2.5 text-sm bg-primary text-dark font-semibold rounded-xl hover:bg-primary/90 disabled:opacity-60"
          >
            {mut.isPending ? "Saving…" : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Delete Confirm ─────────────────────────────────────────────────── */
function DeleteConfirm({
  review,
  onClose,
  onToast,
}: {
  review: Review;
  onClose: () => void;
  onToast: (msg: string, type?: "success" | "error") => void;
}) {
  const qc = useQueryClient();
  const mut = useMutation({
    mutationFn: () => deleteReview(review.id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-reviews"] });
      qc.invalidateQueries({ queryKey: ["reviews"] });
      onToast("Review deleted.");
      onClose();
    },
    onError: (e: Error) => { onToast(e.message || "Delete failed.", "error"); onClose(); },
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-sm bg-card border border-white/10 rounded-2xl p-6 shadow-2xl">
        <h3 className="text-surface font-bold text-base mb-1.5">Delete review?</h3>
        <p className="text-surface/60 text-sm mb-6">
          This permanently removes {review.name}&apos;s review and photo. This cannot be undone.
        </p>
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 py-2.5 text-sm border border-white/10 text-surface/60 hover:text-surface rounded-xl hover:bg-white/5">
            Cancel
          </button>
          <button
            onClick={() => mut.mutate()}
            disabled={mut.isPending}
            className="flex-1 py-2.5 text-sm bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 disabled:opacity-60"
          >
            {mut.isPending ? "Deleting…" : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Review Row ─────────────────────────────────────────────────────── */
function ReviewRow({
  review,
  onEdit,
  onDelete,
  onToast,
}: {
  review: Review;
  onEdit: () => void;
  onDelete: () => void;
  onToast: (msg: string, type?: "success" | "error") => void;
}) {
  const qc = useQueryClient();
  const toggle = useMutation({
    mutationFn: () => updateReview(review.id, { active: !review.active }),
    onMutate: async () => {
      // optimistic toggle
      qc.setQueryData<Review[]>(["admin-reviews"], (old) =>
        old?.map((r) => (r.id === review.id ? { ...r, active: !r.active } : r))
      );
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-reviews"] });
      qc.invalidateQueries({ queryKey: ["reviews"] });
      onToast(review.active ? "Review hidden." : "Review published.");
    },
    onError: (e: Error) => {
      qc.invalidateQueries({ queryKey: ["admin-reviews"] });
      onToast(e.message || "Failed.", "error");
    },
  });

  return (
    <div
      className={`bg-card border rounded-2xl p-5 flex gap-4 transition-colors ${
        review.active ? "border-white/5" : "border-amber-500/20 opacity-70"
      }`}
    >
      {/* Avatar */}
      {review.avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={review.avatar} alt={review.name} className="w-11 h-11 rounded-full object-cover shrink-0 ring-1 ring-white/10" />
      ) : (
        <div className="w-11 h-11 rounded-full bg-primary/15 text-primary flex items-center justify-center font-semibold text-sm shrink-0">
          {review.name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]?.toUpperCase()).join("") || "•"}
        </div>
      )}

      <div className="flex-1 min-w-0">
        <div className="flex items-center flex-wrap gap-2 mb-1">
          <strong className="text-surface text-sm font-semibold">{review.name}</strong>
          <span className="text-surface/40 text-xs">· {review.company}</span>
          {!review.active && (
            <span className="text-[10px] font-semibold uppercase tracking-wide bg-amber-500/15 text-amber-400 px-2 py-0.5 rounded-full">
              Hidden
            </span>
          )}
        </div>
        <div className="mb-2"><StarDisplay value={review.rating} size="sm" /></div>
        <p className="text-surface/60 text-sm leading-relaxed line-clamp-3">{review.message}</p>
        <div className="flex items-center gap-3 mt-2 text-xs text-surface/30">
          <time dateTime={review.date}>
            {review.date ? new Date(review.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : ""}
          </time>
          {review.website && (
            <a href={review.website} target="_blank" rel="noopener noreferrer" className="text-primary/70 hover:text-primary hover:underline truncate">
              {review.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </a>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col items-end gap-1.5 shrink-0">
        <button
          onClick={() => toggle.mutate()}
          disabled={toggle.isPending}
          title={review.active ? "Hide from site" : "Publish to site"}
          className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg transition-colors disabled:opacity-50 ${
            review.active
              ? "text-emerald-400 hover:bg-emerald-500/10"
              : "text-amber-400 hover:bg-amber-500/10"
          }`}
        >
          {review.active ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88L3 3m6.878 6.878L21 21" />
            </svg>
          )}
          {review.active ? "Visible" : "Hidden"}
        </button>
        <div className="flex items-center gap-0.5">
          <button onClick={onEdit} title="Edit" className="p-1.5 rounded-lg text-surface/30 hover:text-primary hover:bg-primary/10 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button onClick={onDelete} title="Delete" className="p-1.5 rounded-lg text-surface/30 hover:text-red-400 hover:bg-red-500/10 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────── */
export default function AdminReviewsPage() {
  const { toggle } = useAdminSidebar();
  const [editing, setEditing] = useState<Review | null>(null);
  const [deleting, setDeleting] = useState<Review | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);
  const [filter, setFilter] = useState<"all" | "visible" | "hidden">("all");

  const { data: reviews = [], isLoading, isError, error } = useQuery({
    queryKey: ["admin-reviews"],
    queryFn: getAllReviews,
  });

  const showToast = (msg: string, type: "success" | "error" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3200);
  };

  const visibleCount = reviews.filter((r) => r.active).length;
  const filtered = reviews.filter((r) =>
    filter === "all" ? true : filter === "visible" ? r.active : !r.active
  );

  return (
    <>
      {/* Header */}
      <header className="h-14 border-b border-white/5 bg-card/60 backdrop-blur-sm sticky top-0 z-20 flex items-center gap-3 px-4 sm:px-6 shrink-0">
        <button
          type="button"
          onClick={toggle}
          className="lg:hidden p-2 rounded-lg text-surface/40 hover:text-surface hover:bg-white/5"
          aria-label="Open sidebar"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-surface font-bold text-sm">Reviews</h1>
        {reviews.length > 0 && (
          <span className="text-xs text-surface/40">
            {visibleCount} visible · {reviews.length - visibleCount} hidden
          </span>
        )}
        <div className="ml-auto flex items-center gap-1 bg-white/5 border border-white/10 rounded-xl p-0.5">
          {(["all", "visible", "hidden"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-xs px-3 py-1.5 rounded-lg capitalize transition-colors ${
                filter === f ? "bg-primary text-dark font-semibold" : "text-surface/50 hover:text-surface"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        {isError ? (
          <div className="text-center py-24 text-red-400 text-sm">
            {(error as Error)?.message || "Failed to load reviews."}
          </div>
        ) : isLoading ? (
          <div className="space-y-4 max-w-3xl">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-card border border-white/5 rounded-2xl p-5 flex gap-4 animate-pulse">
                <div className="w-11 h-11 rounded-full bg-white/5 shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-3 bg-white/5 rounded w-1/3" />
                  <div className="h-3 bg-white/5 rounded w-24" />
                  <div className="h-3 bg-white/5 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-28">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.05 10.8c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h2 className="text-surface font-bold text-xl mb-2">No reviews yet</h2>
            <p className="text-surface/40 text-sm">Client reviews submitted on the site will appear here.</p>
          </div>
        ) : (
          <div className="space-y-4 max-w-3xl">
            {filtered.length === 0 ? (
              <p className="text-center py-16 text-surface/30 text-sm">No {filter} reviews.</p>
            ) : (
              filtered.map((r) => (
                <ReviewRow
                  key={r.id}
                  review={r}
                  onEdit={() => setEditing(r)}
                  onDelete={() => setDeleting(r)}
                  onToast={showToast}
                />
              ))
            )}
          </div>
        )}
      </main>

      {editing && <EditModal review={editing} onClose={() => setEditing(null)} onToast={showToast} />}
      {deleting && <DeleteConfirm review={deleting} onClose={() => setDeleting(null)} onToast={showToast} />}
      {toast && <Toast msg={toast.msg} type={toast.type} />}
    </>
  );
}
