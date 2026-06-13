"use client";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createPost, type CmsPost } from "@/lib/cms-api";

type FormState = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string;
  image: string;
};

const todayStr = () => new Date().toISOString().split("T")[0];

const toSlug = (s: string) =>
  s
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

const formToPost = (f: FormState): CmsPost => ({
  slug: f.slug,
  title: f.title,
  description: f.description,
  date: f.date,
  author: f.author,
  tags: f.tags.split(",").map((t) => t.trim()).filter(Boolean),
  image: f.image || `images/${f.slug}.png`,
});

export default function NewPostPage() {
  const router = useRouter();
  const [secret, setSecret] = useState("");
  const [ready, setReady] = useState(false);
  const [slugManual, setSlugManual] = useState(false);
  const [form, setForm] = useState<FormState>({
    slug: "",
    title: "",
    description: "",
    date: todayStr(),
    author: "Muhammad Sufyan",
    tags: "",
    image: "",
  });

  useEffect(() => {
    const s =
      sessionStorage.getItem("cms-secret") ??
      process.env.NEXT_PUBLIC_CMS_SECRET ??
      "";
    if (!s) {
      router.replace("/admin");
      return;
    }
    setSecret(s);
    setReady(true);
  }, [router]);

  const mut = useMutation({
    mutationFn: (data: CmsPost) => createPost(data, secret),
    onSuccess: () => router.push("/admin"),
  });

  const handleTitle = (title: string) => {
    const newSlug = slugManual ? form.slug : toSlug(title);
    setForm((f) => ({
      ...f,
      title,
      slug: newSlug,
      image:
        f.image && f.image !== `images/${f.slug}.png`
          ? f.image
          : `images/${newSlug}.png`,
    }));
  };

  const handleSlug = (slug: string) => {
    setSlugManual(true);
    setForm((f) => ({
      ...f,
      slug,
      image:
        f.image && f.image !== `images/${f.slug}.png`
          ? f.image
          : `images/${slug}.png`,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mut.mutate(formToPost(form));
  };

  const tagArr = form.tags
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  if (!ready) return null;

  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <header className="h-14 border-b border-white/5 bg-card/60 backdrop-blur-sm sticky top-0 z-20 flex items-center gap-3 px-4 sm:px-6">
        <Link
          href="/admin"
          className="flex items-center gap-2 text-surface/40 hover:text-surface transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </Link>
        <span className="text-white/10">|</span>
        <h1 className="text-surface font-bold text-sm">New Post</h1>
      </header>

      {/* Body */}
      <main className="p-4 sm:p-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-white/10 rounded-2xl overflow-hidden">
            <div className="flex items-center gap-3 px-6 py-5 border-b border-white/5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h2 className="text-surface font-bold text-base">Create Post</h2>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label className="block text-surface/50 text-xs font-semibold uppercase tracking-wider mb-1.5">
                  Title <span className="text-red-400">*</span>
                </label>
                <input
                  required
                  value={form.title}
                  onChange={(e) => handleTitle(e.target.value)}
                  placeholder="Post title"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-surface text-sm placeholder-surface/20 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-surface/50 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Slug <span className="text-red-400">*</span>
                  </label>
                  <input
                    required
                    value={form.slug}
                    onChange={(e) => handleSlug(e.target.value)}
                    placeholder="post-slug"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-surface text-sm placeholder-surface/20 focus:outline-none focus:border-primary/50 transition-colors font-mono"
                  />
                </div>
                <div>
                  <label className="block text-surface/50 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Image Path
                  </label>
                  <input
                    value={form.image}
                    onChange={(e) => setForm((f) => ({ ...f, image: e.target.value }))}
                    placeholder="images/slug.png"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-surface text-sm placeholder-surface/20 focus:outline-none focus:border-primary/50 transition-colors font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-surface/50 text-xs font-semibold uppercase tracking-wider mb-1.5">
                  Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={form.description}
                  onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                  placeholder="Short description of the post..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-surface text-sm placeholder-surface/20 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-surface/50 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Author <span className="text-red-400">*</span>
                  </label>
                  <input
                    required
                    value={form.author}
                    onChange={(e) => setForm((f) => ({ ...f, author: e.target.value }))}
                    placeholder="Author name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-surface text-sm placeholder-surface/20 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-surface/50 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Date <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    title="Post date"
                    value={form.date}
                    onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-surface text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-surface/50 text-xs font-semibold uppercase tracking-wider mb-1.5">
                  Tags{" "}
                  <span className="normal-case text-surface/30 font-normal">(comma-separated)</span>
                </label>
                <input
                  value={form.tags}
                  onChange={(e) => setForm((f) => ({ ...f, tags: e.target.value }))}
                  placeholder="react, nextjs, tailwind"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-surface text-sm placeholder-surface/20 focus:outline-none focus:border-primary/50 transition-colors"
                />
                {tagArr.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {tagArr.map((t) => (
                      <span key={t} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {mut.isError && (
                <p className="text-red-400 text-sm">
                  {(mut.error as Error)?.message || "Failed to create post."}
                </p>
              )}

              <div className="flex items-center justify-end gap-3 pt-2 border-t border-white/5">
                <Link
                  href="/admin"
                  className="px-5 py-2.5 text-sm text-surface/50 hover:text-surface border border-white/10 rounded-xl hover:bg-white/5 transition-colors"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  disabled={mut.isPending}
                  className="flex items-center gap-2 px-6 py-2.5 text-sm bg-primary text-dark font-semibold rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-60"
                >
                  {mut.isPending && (
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  )}
                  Create Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
