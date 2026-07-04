"use client";
import { useRef, useState } from "react";
import { createReview, type Review } from "@/lib/reviews-api";
import { StarInput } from "./StarRating";

const inputClass =
  "w-full bg-dark/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-surface placeholder:text-surface/35 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-colors";
const labelClass = "block text-sm font-medium text-surface/80 mb-1.5";

const MAX_PHOTO_MB = 3;

export default function ReviewForm({
  onSuccess,
  onCancel,
  cancelLabel = "Cancel",
}: {
  onSuccess?: (review: Review) => void;
  onCancel?: () => void;
  cancelLabel?: string;
}) {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  function handlePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setError(null);
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Please choose an image file.");
      return;
    }
    if (file.size > MAX_PHOTO_MB * 1024 * 1024) {
      setError(`Photo must be under ${MAX_PHOTO_MB} MB.`);
      return;
    }
    setPhoto(file);
    const reader = new FileReader();
    reader.onload = () => setPhotoPreview(reader.result as string);
    reader.readAsDataURL(file);
  }

  function removePhoto() {
    setPhoto(null);
    setPhotoPreview(null);
    if (fileRef.current) fileRef.current.value = "";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (rating < 1) return setError("Please select a star rating.");
    if (!name.trim()) return setError("Please enter your name.");
    if (!company.trim()) return setError("Please enter your company.");
    if (!message.trim()) return setError("Please describe your experience.");

    setSubmitting(true);
    try {
      const review = await createReview(
        {
          name: name.trim(),
          rating,
          company: company.trim(),
          message: message.trim(),
          website: website.trim() || undefined,
        },
        photo,
      );
      setDone(true);
      onSuccess?.(review);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit review.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="text-center py-8 px-4">
        <div className="mx-auto w-14 h-14 rounded-full bg-primary/15 text-primary flex items-center justify-center mb-4">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-surface font-semibold text-lg mb-1.5">Thank you!</h3>
        <p className="text-surface/60 text-sm max-w-sm mx-auto">
          Your review has been published. I really appreciate you taking the time to share it.
        </p>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="mt-6 inline-flex items-center gap-2 bg-primary text-dark font-semibold px-6 py-2.5 rounded-xl hover:bg-primary/90 transition-all text-sm"
          >
            Done
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-300 text-sm rounded-xl px-4 py-3">
          {error}
        </div>
      )}

      {/* Photo + Rating row */}
      <div className="flex items-center gap-4">
        <div>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={handlePhoto}
            className="sr-only"
            id="rv-photo"
            aria-label="Upload your profile photo"
            title="Upload your profile photo"
          />
          {photoPreview ? (
            <div className="relative w-16 h-16 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photoPreview}
                alt="Your photo preview"
                className="w-16 h-16 rounded-full object-cover border-2 border-primary/40"
              />
              <button
                type="button"
                onClick={removePhoto}
                aria-label="Remove photo"
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ) : (
            <label
              htmlFor="rv-photo"
              className="w-16 h-16 shrink-0 rounded-full border-2 border-dashed border-white/15 hover:border-primary/40 flex flex-col items-center justify-center cursor-pointer text-surface/40 hover:text-primary transition-colors"
              title="Add your photo (optional)"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </label>
          )}
        </div>
        <div className="flex-1">
          <label className={labelClass}>
            Your rating <span className="text-primary">*</span>
          </label>
          <StarInput value={rating} onChange={setRating} />
        </div>
      </div>
      <p className="text-xs text-surface/40 -mt-3">Profile photo is optional (max {MAX_PHOTO_MB} MB).</p>

      {/* Name + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="rv-name" className={labelClass}>
            Your name <span className="text-primary">*</span>
          </label>
          <input
            id="rv-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Ali Hassan"
            maxLength={80}
            className={inputClass}
            required
          />
        </div>
        <div>
          <label htmlFor="rv-company" className={labelClass}>
            Company <span className="text-primary">*</span>
          </label>
          <input
            id="rv-company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="e.g. Ehya Education"
            maxLength={100}
            className={inputClass}
            required
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="rv-message" className={labelClass}>
          Describe your project & experience <span className="text-primary">*</span>
        </label>
        <textarea
          id="rv-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What did I build for you, and how was it working together?"
          rows={4}
          maxLength={1000}
          className={`${inputClass} resize-y`}
          required
        />
        <p className="text-right text-xs text-surface/35 mt-1">{message.length}/1000</p>
      </div>

      {/* Website (optional) */}
      <div>
        <label htmlFor="rv-website" className={labelClass}>
          Website / project link <span className="text-surface/40 font-normal">(optional)</span>
        </label>
        <input
          id="rv-website"
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="e.g. yourcompany.com"
          maxLength={200}
          className={inputClass}
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 pt-1">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center gap-2 bg-primary text-dark font-semibold px-6 py-2.5 rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        >
          {submitting ? "Submitting…" : "Submit Review"}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="text-surface/60 hover:text-surface text-sm font-medium px-4 py-2.5 transition-colors"
          >
            {cancelLabel}
          </button>
        )}
      </div>
    </form>
  );
}
