// Calls go through the local proxy route (/api/cms/reviews).

export type Review = {
  id: string;
  name: string;
  rating: number; // 1–5
  company: string;
  message: string;
  website: string | null;
  avatar: string | null;
  active: boolean;
  date: string;
};

export type ReviewInput = {
  name: string;
  rating: number;
  company: string;
  message: string;
  website?: string;
};

export type ReviewPatch = Partial<{
  name: string;
  rating: number;
  company: string;
  message: string;
  website: string | null;
  active: boolean;
}>;

async function readJson(res: Response) {
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json?.error || `Something went wrong (HTTP ${res.status})`);
  return json;
}

/** Public — active reviews only. */
export const getReviews = (): Promise<Review[]> =>
  fetch("/api/cms/reviews", { cache: "no-store" })
    .then((res) => readJson(res))
    .then((d) => d.reviews ?? []);

/** Admin — all reviews incl. hidden (secret added by the proxy). */
export const getAllReviews = (): Promise<Review[]> =>
  fetch("/api/cms/reviews?all=1", { cache: "no-store" })
    .then((res) => readJson(res))
    .then((d) => d.reviews ?? []);

/** Public submit — supports an optional profile photo. */
export const createReview = async (data: ReviewInput, photo?: File | null): Promise<Review> => {
  const fd = new FormData();
  fd.append("name", data.name);
  fd.append("rating", String(data.rating));
  fd.append("company", data.company);
  fd.append("message", data.message);
  if (data.website) fd.append("website", data.website);
  if (photo) fd.append("image", photo);

  const res = await fetch("/api/cms/reviews", { method: "POST", body: fd });
  return (await readJson(res)).review as Review;
};

/** Admin — edit fields / toggle active. */
export const updateReview = async (id: string, patch: ReviewPatch): Promise<Review> => {
  const res = await fetch(`/api/cms/reviews/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patch),
  });
  return (await readJson(res)).review as Review;
};

/** Admin — permanently delete. */
export const deleteReview = async (id: string): Promise<void> => {
  const res = await fetch(`/api/cms/reviews/${id}`, { method: "DELETE" });
  await readJson(res);
};
