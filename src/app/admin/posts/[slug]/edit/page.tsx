"use client";
import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { getPost, updatePost, type CmsPost, type CmsPostInput } from "@/lib/cms-api";

type FormState = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string;
};

const toSlug = (s: string) =>
  s
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

const postToForm = (p: CmsPost): FormState => ({
  slug: p.slug,
  title: p.title,
  description: p.description,
  date: p.date,
  author: p.author,
  tags: p.tags.join(", "),
});

const formToPost = (f: FormState): CmsPostInput => ({
  slug: f.slug,
  title: f.title,
  description: f.description,
  date: f.date,
  author: f.author,
  tags: f.tags.split(",").map((t) => t.trim()).filter(Boolean),
});

export default function EditPostPage() {
  const router = useRouter();
  const { slug } = useParams<{ slug: string }>();
  const [secret, setSecret] = useState("");
  const [ready, setReady] = useState(false);
  const [slugManual, setSlugManual] = useState(true);
  const [form, setForm] = useState<FormState | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

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

  const { data: post, isLoading, isError } = useQuery({
    queryKey: ["cms-post", slug],
    queryFn: () => getPost(slug),
    enabled: ready && !!slug,
  });

  useEffect(() => {
    if (post && !form) setForm(postToForm(post));
  }, [post, form]);

  const mut = useMutation({
    mutationFn: (data: CmsPostInput) => updatePost(slug, data, imageFile ?? undefined),
    onSuccess: () => router.push("/admin"),
  });

  const handleTitle = (title: string) => {
    const newSlug = slugManual ? form!.slug : toSlug(title);
    setForm((f) => f ? { ...f, title, slug: newSlug } : f);
  };

  const handleSlug = (s: string) => {
    setSlugManual(true);
    setForm((f) => f ? { ...f, slug: s } : f);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setImageFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form) return;
    mut.mutate(formToPost(form));
  };

  const tagArr = form
    ? form.tags.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  if (!ready || isLoading) {
    return (
      <div className="min-h-screen bg-dark p-8">
        <div className="max-w-2xl mx-auto space-y-4 animate-pulse">
          <div className="h-10 bg-white/5 rounded-xl w-32" />
          <div className="h-64 bg-card border border-white/5 rounded-2xl" />
        </div>
      </div>
    );
  }

  if (isError || !form) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-center">
          <p className="text-surface/50 mb-4">Post not found.</p>
          <Link href="/admin" className="text-primary text-sm hover:underline">
            ← Back to admin
          </Link>
        </div>
      </div>
    );
  }

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
        <h1 className="text-surface font-bold text-sm">Edit Post</h1>
        <span className="text-surface/30 text-xs font-mono ml-1">/{slug}</span>
      </header>

      {/* Body */}
      <main className="p-4 sm:p-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-white/10 rounded-2xl overflow-hidden">
            <div className="flex items-center gap-3 px-6 py-5 border-b border-white/5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h2 className="text-surface font-bold text-base">Edit Post</h2>
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
                  Cover Image{" "}
                  <span className="normal-case text-surface/30 font-normal">(leave empty to keep current)</span>
                </label>
                <div className="flex gap-3 items-start">
                  <label className="flex-1 cursor-pointer border border-dashed border-white/20 rounded-xl px-4 py-3 text-center hover:border-primary/50 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="sr-only"
                    />
                    <span className="text-surface/40 text-sm">
                      {imageFile ? imageFile.name : "Click to replace image"}
                    </span>
                  </label>
                  {(imagePreview ?? post?.image) && (
                    <img
                      src={imagePreview ?? post!.image!}
                      alt="Preview"
                      className="w-16 h-16 object-cover rounded-xl border border-white/10 shrink-0"
                    />
                  )}
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
                  onChange={(e) => setForm((f) => f ? { ...f, description: e.target.value } : f)}
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
                    onChange={(e) => setForm((f) => f ? { ...f, author: e.target.value } : f)}
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
                    onChange={(e) => setForm((f) => f ? { ...f, date: e.target.value } : f)}
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
                  onChange={(e) => setForm((f) => f ? { ...f, tags: e.target.value } : f)}
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
                  {(mut.error as Error)?.message || "Failed to update post."}
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
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
