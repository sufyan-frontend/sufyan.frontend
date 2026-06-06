"use client";
import { useState } from "react";

export default function ContactForm({ email }: { email: string }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || "Portfolio Inquiry");
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-surface text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-surface/30";

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
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
          placeholder="Tell me about your project or opportunity..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-dark font-semibold py-3 rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
      >
        Send Message
      </button>
    </form>
  );
}
