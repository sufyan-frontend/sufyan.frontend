// Calls go through local proxy routes (/api/cms/posts) — secret is added server-side.
async function req<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(path, { ...init, cache: "no-store" });
  if (!res.ok) {
    const text = await res.text().catch(() => res.statusText);
    throw new Error(text || `HTTP ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export type CmsPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  image: string | null;
};

export type CmsPostInput = Omit<CmsPost, "image">;

export const getPosts = (): Promise<CmsPost[]> =>
  req<{ posts: CmsPost[] }>("/api/cms/posts").then((d) => d.posts);

export const getPost = (slug: string): Promise<CmsPost> =>
  req<{ post: CmsPost } | CmsPost>(`/api/cms/posts/${slug}`).then((d) =>
    "post" in (d as object) ? (d as { post: CmsPost }).post : (d as CmsPost)
  );

function buildFormData(data: CmsPostInput, image?: File): FormData {
  const fd = new FormData();
  fd.append("title", data.title);
  fd.append("description", data.description);
  fd.append("author", data.author);
  fd.append("content", "");
  data.tags.forEach((t) => fd.append("tags", t));
  if (image) fd.append("image", image);
  return fd;
}

export const createPost = (data: CmsPostInput, image?: File): Promise<CmsPost> =>
  req<CmsPost>("/api/cms/posts", {
    method: "POST",
    body: buildFormData(data, image),
  });

export const updatePost = (
  slug: string,
  data: CmsPostInput,
  image?: File
): Promise<CmsPost> =>
  req<CmsPost>(`/api/cms/posts/${slug}`, {
    method: "PUT",
    body: buildFormData(data, image),
  });

export const deletePost = (slug: string): Promise<unknown> =>
  req<unknown>(`/api/cms/posts/${slug}`, { method: "DELETE" });
