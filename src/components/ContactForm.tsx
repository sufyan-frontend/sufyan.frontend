"use client";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";
// 
export default function ContactForm({ email }: { email: string }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, ownerEmail: email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send message.");
    }
  };

  const inputClass =
    "w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-surface text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-surface/30 disabled:opacity-50";

  const isLoading = status === "loading";

  if (status === "success") {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-surface mb-6">Send a Message</h2>
        <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-surface font-semibold text-lg">Message Sent!</p>
          <p className="text-surface/60 text-sm max-w-xs">
            Thanks for reaching out. I've sent a confirmation to your email and will get back to you soon.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-2 text-sm text-primary hover:underline"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <h2 className="text-xl font-semibold text-surface mb-6">Send a Message</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs text-surface/60 mb-1.5 uppercase tracking-wider">
            Your Name <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            disabled={isLoading}
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Muhammad Ali"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-xs text-surface/60 mb-1.5 uppercase tracking-wider">
            Your Email <span className="text-primary">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={isLoading}
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="ali@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs text-surface/60 mb-1.5 uppercase tracking-wider">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          disabled={isLoading}
          value={form.subject}
          onChange={handleChange}
          className={inputClass}
          placeholder="Project Inquiry"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs text-surface/60 mb-1.5 uppercase tracking-wider">
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          disabled={isLoading}
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
          placeholder="Tell me about your project or opportunity..."
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm bg-red-400/10 px-4 py-2 rounded-lg">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary text-dark font-semibold py-3 rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
