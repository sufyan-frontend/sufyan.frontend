"use client";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm({ email }: { email: string }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [showModal, setShowModal] = useState(false);

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
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setShowModal(true);
      setForm({ name: "", email: "", phone: "", address: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send message.");
    }
  };

  const inputClass =
    "w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-surface text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-surface/30 disabled:opacity-50";

  const isLoading = status === "loading";

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-dark border border-white/10 rounded-2xl p-8 max-w-sm w-full shadow-2xl text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="space-y-2">
              <p className="text-surface font-semibold text-lg">Message Sent!</p>
              <p className="text-surface/60 text-sm">
                Thanks for reaching out. A confirmation email has been sent to your inbox.
              </p>
            </div>
            <div className="flex items-start gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-xl px-4 py-3 text-left">
              <span className="text-yellow-400 text-base mt-0.5">⚠</span>
              <p className="text-yellow-300/80 text-xs leading-relaxed">
                Don&apos;t see it? Check your <strong className="text-yellow-300">spam or junk folder</strong> and mark it as &quot;Not Spam&quot;.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button
                type="button"
                onClick={() => { setShowModal(false); setStatus("idle"); }}
                className="flex-1 border border-white/10 text-surface/70 text-sm font-medium py-2.5 rounded-xl hover:bg-white/5 transition-colors"
              >
                Cancel
              </button>
              <a
                href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#spam"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { setShowModal(false); setStatus("idle"); }}
                className="flex-1 bg-primary text-dark text-sm font-semibold py-2.5 rounded-xl hover:bg-primary/90 transition-colors text-center"
              >
                View Confirmation
              </a>
            </div>
          </div>
        </div>
      )}
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          <label htmlFor="phone" className="block text-xs text-surface/60 mb-1.5 uppercase tracking-wider">
            Phone <span className="text-surface/40 normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            disabled={isLoading}
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="+92 300 1234567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="address" className="block text-xs text-surface/60 mb-1.5 uppercase tracking-wider">
          Address <span className="text-surface/40 normal-case tracking-normal">(optional)</span>
        </label>
        <input
          id="address"
          name="address"
          type="text"
          autoComplete="street-address"
          disabled={isLoading}
          value={form.address}
          onChange={handleChange}
          className={inputClass}
          placeholder="123 Main St, Lahore, Pakistan"
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
    </>
  );
}
