const BASE = "https://sufyan-backend.vercel.app";

export type CmsPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  image: string;
};

async function req<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, { ...init, cache: "no-store" });
  if (!res.ok) {
    const text = await res.text().catch(() => res.statusText);
    throw new Error(text || `HTTP ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export const getPosts = (): Promise<CmsPost[]> =>
  req<{ posts: CmsPost[] }>("/api/cms/posts").then((d) => d.posts);

export const getPost = (slug: string): Promise<CmsPost> =>
  req<{ post: CmsPost } | CmsPost>(`/api/cms/posts/${slug}`).then((d) =>
    "post" in (d as object) ? (d as { post: CmsPost }).post : (d as CmsPost)
  );

export const createPost = (data: CmsPost, secret: string): Promise<CmsPost> =>
  req<CmsPost>("/api/cms/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-cms-secret": secret },
    body: JSON.stringify(data),
  });

export const updatePost = (
  slug: string,
  data: Partial<CmsPost>,
  secret: string
): Promise<CmsPost> =>
  req<CmsPost>(`/api/cms/posts/${slug}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", "x-cms-secret": secret },
    body: JSON.stringify(data),
  });

export const deletePost = (slug: string, secret: string): Promise<unknown> =>
  req<unknown>(`/api/cms/posts/${slug}`, {
    method: "DELETE",
    headers: { "x-cms-secret": secret },
  });
