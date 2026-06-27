"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LESSONS, FAQS, type Lesson, type Visual } from "./content";

const STORAGE_KEY = "seo-academy-progress";
const TOTAL = LESSONS.length;

/* ------------------------------------------------------------------ */
/*  Visual renderers                                                   */
/* ------------------------------------------------------------------ */

function VisualBlock({ visual }: { visual: Visual }) {
  return (
    <div className="rounded-2xl bg-dark/40 border border-white/10 p-5 sm:p-6">
      <p className="text-xs font-bold uppercase tracking-wider text-surface/40 mb-4">{visual.title}</p>
      {renderVisual(visual)}
    </div>
  );
}

function renderVisual(v: Visual) {
  switch (v.type) {
    case "funnel":
      return (
        <div className="space-y-2">
          {v.steps.map((s, i) => (
            <div
              key={s}
              className="mx-auto rounded-xl bg-gradient-to-r from-brand-600/80 to-fuchsia-600/80 text-white text-sm font-medium py-2.5 px-4 text-center"
              style={{ width: `${100 - i * 12}%` }}
            >
              {s}
            </div>
          ))}
        </div>
      );
    case "bars":
      return (
        <div className="space-y-3">
          {v.bars.map(([label, pct]) => (
            <div key={label}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-surface/80">{label}</span>
                <span className="text-surface/50 tabular-nums">{pct}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-fuchsia-500" style={{ width: `${pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      );
    case "timeline":
      return (
        <ol className="relative border-l border-white/10 ml-2 space-y-5">
          {v.items.map(([year, text]) => (
            <li key={year} className="ml-5">
              <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-brand-500 to-fuchsia-500" />
              <p className="text-sm font-bold text-brand-300">{year}</p>
              <p className="text-sm text-surface/70">{text}</p>
            </li>
          ))}
        </ol>
      );
    case "flow":
      return (
        <div className="flex flex-col sm:flex-row items-stretch gap-3">
          {v.nodes.map(([icon, title, desc], i) => (
            <div key={title} className="flex flex-col sm:flex-row items-center gap-3 flex-1">
              <div className="flex-1 w-full rounded-xl bg-card border border-white/10 p-4 text-center">
                <div className="text-2xl mb-1">{icon}</div>
                <p className="font-semibold text-surface text-sm">{title}</p>
                <p className="text-xs text-surface/50 mt-1">{desc}</p>
              </div>
              {i < v.nodes.length - 1 && <span className="text-brand-400 text-xl rotate-90 sm:rotate-0">→</span>}
            </div>
          ))}
        </div>
      );
    case "grid4":
      return (
        <div className="grid sm:grid-cols-2 gap-3">
          {v.cards.map(([icon, title, desc, ex]) => (
            <div key={title} className="rounded-xl bg-card border border-white/10 p-4">
              <div className="text-2xl mb-1">{icon}</div>
              <p className="font-semibold text-surface text-sm">{title}</p>
              <p className="text-xs text-surface/50">{desc}</p>
              <p className="mt-2 text-xs font-mono text-brand-300">{ex}</p>
            </div>
          ))}
        </div>
      );
    case "compare":
      return (
        <div className="grid sm:grid-cols-2 gap-3">
          {[v.left, v.right].map((col) => (
            <div key={col.title} className="rounded-xl bg-card border border-white/10 p-4">
              <p className="font-semibold text-surface mb-3">{col.title}</p>
              <ul className="space-y-1.5">
                {col.items.map((it) => (
                  <li key={it} className="text-sm text-surface/70 flex gap-2">
                    <span className="text-brand-400">•</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    case "serp":
      return (
        <div className="space-y-2.5">
          <div className="rounded-lg bg-card border border-white/10 p-3">
            <span className="text-[10px] font-bold uppercase tracking-wide text-amber-400">Ad · Sponsored</span>
            <p className="text-sm text-brand-300 mt-0.5">example.com — Top paid result</p>
          </div>
          <div className="rounded-lg bg-gradient-to-r from-brand-600/20 to-fuchsia-600/20 border border-brand-500/30 p-3">
            <span className="text-[10px] font-bold uppercase tracking-wide text-brand-300">Featured snippet · Position 0</span>
            <p className="text-sm text-surface/80 mt-0.5">A concise answer box pulled from a ranking page</p>
          </div>
          <div className="rounded-lg bg-card border border-white/10 p-3">
            <span className="text-[10px] font-bold uppercase tracking-wide text-fuchsia-300">People Also Ask</span>
            <p className="text-sm text-surface/70 mt-0.5">Related questions users also search</p>
          </div>
          {["1st organic result", "2nd organic result", "3rd organic result"].map((t) => (
            <div key={t} className="rounded-lg bg-card border border-white/10 p-3">
              <p className="text-sm text-brand-300">{t}</p>
              <p className="text-xs text-surface/40">example.com › page</p>
            </div>
          ))}
        </div>
      );
    case "pyramid":
      return (
        <div className="space-y-2">
          {v.rows.map(([label, ex, note], i) => (
            <div
              key={label}
              className="mx-auto rounded-xl bg-gradient-to-r from-brand-600/70 to-fuchsia-600/70 p-3 text-center"
              style={{ width: `${60 + i * 20}%` }}
            >
              <p className="text-sm font-bold text-white">
                {label} · <span className="font-mono">{ex}</span>
              </p>
              <p className="text-[11px] text-white/80">{note}</p>
            </div>
          ))}
        </div>
      );
    case "checklist":
      return (
        <div className="grid sm:grid-cols-2 gap-2">
          {v.items.map((it) => (
            <div key={it} className="flex items-center gap-2.5 rounded-lg bg-card border border-white/10 px-3 py-2">
              <span className="grid place-items-center w-5 h-5 rounded-md bg-emerald-500/15 text-emerald-400 text-xs shrink-0">✓</span>
              <span className="text-sm text-surface/75">{it}</span>
            </div>
          ))}
        </div>
      );
  }
}

/* ------------------------------------------------------------------ */
/*  Quiz                                                               */
/* ------------------------------------------------------------------ */

function Quiz({ lesson, onPass }: { lesson: Lesson; onPass: () => void }) {
  const [picked, setPicked] = useState<number | null>(null);
  const { quiz } = lesson;

  const choose = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === quiz.answer) onPass();
  };

  return (
    <div className="rounded-2xl bg-dark/40 border border-white/10 p-5 sm:p-6">
      <p className="text-xs font-bold uppercase tracking-wider text-fuchsia-300 mb-3">📝 Quick Quiz</p>
      <p className="font-semibold text-surface mb-4">{quiz.q}</p>
      <div className="grid sm:grid-cols-2 gap-2">
        {quiz.options.map((opt, i) => {
          const isAnswer = i === quiz.answer;
          const isPicked = i === picked;
          let cls = "border-white/10 bg-card hover:border-brand-500/40";
          if (picked !== null) {
            if (isAnswer) cls = "border-emerald-500/60 bg-emerald-500/10 text-emerald-300";
            else if (isPicked) cls = "border-red-500/60 bg-red-500/10 text-red-300";
            else cls = "border-white/10 bg-card opacity-60";
          }
          return (
            <button
              key={opt}
              type="button"
              onClick={() => choose(i)}
              disabled={picked !== null}
              className={`text-left text-sm rounded-xl border px-4 py-3 transition ${cls} disabled:cursor-default`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <p className={`mt-4 text-sm ${picked === quiz.answer ? "text-emerald-300" : "text-amber-300"}`}>
          {picked === quiz.answer ? "✅ Correct! " : "❌ Not quite. "}
          {quiz.explain}
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Lesson card                                                        */
/* ------------------------------------------------------------------ */

function LessonCard({
  lesson,
  done,
  onComplete,
  onToggle,
}: {
  lesson: Lesson;
  done: boolean;
  onComplete: () => void;
  onToggle: () => void;
}) {
  return (
    <section id={lesson.id} className="scroll-mt-24 reveal">
      <article className="rounded-3xl bg-card border border-white/10 p-6 sm:p-8 space-y-6">
        <header className="flex items-start gap-4">
          <span className="grid place-items-center w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-brand-500 to-fuchsia-600 text-2xl shadow-lg">
            {lesson.icon}
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-300">Lesson {lesson.n}</span>
              <span className="text-xs bg-white/5 text-surface/50 px-2 py-0.5 rounded-full">{lesson.tag}</span>
              {done && <span className="text-xs bg-emerald-500/15 text-emerald-300 px-2 py-0.5 rounded-full">✓ Completed</span>}
            </div>
            <h2 className="mt-1 text-2xl sm:text-3xl font-black text-surface">{lesson.title}</h2>
          </div>
        </header>

        <p className="text-surface/75 leading-relaxed" dangerouslySetInnerHTML={{ __html: lesson.definition }} />

        <div className="rounded-2xl bg-brand-500/5 border border-brand-500/20 p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-300 mb-2">💡 Real-world example</p>
          <p className="text-surface/75 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: lesson.example }} />
        </div>

        <VisualBlock visual={lesson.visual} />

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-red-500/5 border border-red-500/15 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-red-300 mb-3">⚠️ Common mistakes</p>
            <ul className="space-y-2">
              {lesson.mistakes.map((m) => (
                <li key={m} className="text-sm text-surface/70 flex gap-2">
                  <span className="text-red-400 shrink-0">✕</span>
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-emerald-500/5 border border-emerald-500/15 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-3">✅ Best practices</p>
            <ul className="space-y-2">
              {lesson.best.map((b) => (
                <li key={b} className="text-sm text-surface/70 flex gap-2">
                  <span className="text-emerald-400 shrink-0">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <details className="group rounded-2xl bg-dark/40 border border-white/10 p-5">
          <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-surface">
            <span>🎤 Interview questions</span>
            <span className="text-brand-400 transition group-open:rotate-45 text-xl leading-none">+</span>
          </summary>
          <div className="mt-4 space-y-3">
            {lesson.interview.map((qa) => (
              <div key={qa.q}>
                <p className="text-sm font-semibold text-brand-200">Q: {qa.q}</p>
                <p className="text-sm text-surface/65 mt-0.5">A: {qa.a}</p>
              </div>
            ))}
          </div>
        </details>

        <Quiz lesson={lesson} onPass={onComplete} />

        <div className="rounded-2xl bg-gradient-to-r from-brand-600/15 to-fuchsia-600/15 border border-brand-500/20 p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-fuchsia-300 mb-1">🧠 In a nutshell</p>
          <p className="text-surface/80 text-sm leading-relaxed">{lesson.summary}</p>
        </div>

        <button
          type="button"
          onClick={onToggle}
          className={`w-full sm:w-auto px-5 py-2.5 rounded-xl font-semibold text-sm transition ${
            done
              ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
              : "bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white glow hover:scale-[1.02] active:scale-95"
          }`}
        >
          {done ? "✓ Marked complete — click to undo" : "Mark this lesson complete"}
        </button>
      </article>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Main guide                                                         */
/* ------------------------------------------------------------------ */

export default function SeoGuide() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [name, setName] = useState("");
  const [hydrated, setHydrated] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [activeId, setActiveId] = useState<string>(LESSONS[0].id);
  const [mobileToc, setMobileToc] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pct = Math.round((completed.size / TOTAL) * 100);
  const unlocked = completed.size === TOTAL;

  /* ---- load saved progress ---- */
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw) as { completed?: string[]; name?: string };
        if (Array.isArray(data.completed)) setCompleted(new Set(data.completed));
        if (typeof data.name === "string") setName(data.name);
      }
    } catch {
      /* ignore corrupt storage */
    }
    setHydrated(true);
  }, []);

  /* ---- persist ---- */
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ completed: [...completed], name }));
    } catch {
      /* storage may be unavailable */
    }
  }, [completed, name, hydrated]);

  /* ---- toast helper ---- */
  const showToast = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2400);
  }, []);

  useEffect(() => () => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
  }, []);

  /* ---- mark complete (idempotent, from quiz) ---- */
  const markComplete = useCallback(
    (id: string) => {
      setCompleted((prev) => {
        if (prev.has(id)) return prev;
        const next = new Set(prev);
        next.add(id);
        showToast(`Lesson complete! ${next.size}/${TOTAL} done 🎉`);
        return next;
      });
    },
    [showToast],
  );

  /* ---- toggle complete (manual button) ---- */
  const toggleComplete = useCallback((id: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  /* ---- scroll progress + back-to-top ---- */
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setScrollPct(max > 0 ? (h.scrollTop / max) * 100 : 0);
      setShowTop(h.scrollTop > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---- reveal-on-scroll + active TOC section ---- */
  useEffect(() => {
    const revealObs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            revealObs.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

    const activeObs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && e.target.id) setActiveId(e.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    LESSONS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) activeObs.observe(el);
    });

    return () => {
      revealObs.disconnect();
      activeObs.disconnect();
    };
  }, []);

  const handlePrint = () => {
    if (!unlocked) {
      showToast("Complete 100% of the course first 🔒");
      return;
    }
    if (!name.trim()) {
      showToast("Enter your name for the certificate ✍️");
      return;
    }
    window.print();
  };

  const reset = () => {
    setCompleted(new Set());
    showToast("Progress reset.");
  };

  const certDate = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  const TocList = ({ onClick }: { onClick?: () => void }) => (
    <nav className="space-y-0.5 text-sm">
      {LESSONS.map((l) => (
        <a
          key={l.id}
          href={`#${l.id}`}
          onClick={onClick}
          className={`flex items-center gap-2 rounded-lg px-3 py-1.5 transition ${
            activeId === l.id
              ? "bg-brand-500/10 text-brand-300 font-semibold"
              : "text-surface/55 hover:text-surface hover:bg-white/5"
          }`}
        >
          <span className="text-xs w-5 shrink-0">{completed.has(l.id) ? "✅" : l.icon}</span>
          <span className="truncate">{l.title}</span>
        </a>
      ))}
    </nav>
  );

  return (
    <div>
      {/* print-only styles: isolate the certificate */}
      <style
        dangerouslySetInnerHTML={{
          __html: `@media print {
            body * { visibility: hidden !important; }
            #seo-certificate, #seo-certificate * { visibility: visible !important; }
            #seo-certificate { position: fixed; inset: 0; margin: auto; width: 92%; height: max-content; box-shadow: none !important; }
            @page { size: landscape; margin: 1cm; }
          }`,
        }}
      />

      {/* reading progress */}
      <div className="fixed top-0 left-0 h-1 z-[60] bg-gradient-to-r from-brand-500 via-fuchsia-500 to-pink-500" style={{ width: `${scrollPct}%` }} />

      {/* ===== HERO ===== */}
      <section id="top" className="relative pt-28 sm:pt-32 pb-16 overflow-hidden grid-bg">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" aria-hidden />
        <div className="absolute top-10 -right-32 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl" aria-hidden />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-surface/50 hover:text-brand-300 text-sm mb-6 transition">
            ← Back to Blog
          </Link>
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-card border border-white/10 animate-floaty">
              🚀 Beginner Friendly · 17 Lessons · 100% Free
            </span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] text-surface">
            Master <span className="gradient-text">SEO Fundamentals</span>
            <br className="hidden sm:block" /> from Zero to Confident
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-surface/60">
            Learn how search engines really work — explained in plain English with diagrams, real examples, quizzes, and
            interview questions. No jargon. No fluff.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#what-is-seo" className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white font-semibold glow hover:scale-[1.03] active:scale-95 transition">
              Start Learning →
            </a>
            <a href="#certificate" className="px-7 py-3.5 rounded-xl bg-card border border-white/10 text-surface font-semibold hover:border-brand-500/40 transition">
              🏆 Get Your Certificate
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[["17", "Core Topics"], ["17", "Quizzes"], ["50+", "Examples"], ["∞", "Lifetime Access"]].map(([n, label]) => (
              <div key={label} className="reveal rounded-2xl bg-card border border-white/10 p-4">
                <div className="text-3xl font-black gradient-text">{n}</div>
                <div className="text-xs mt-1 text-surface/50">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LAYOUT ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:flex lg:gap-10 pb-20">
        {/* sidebar */}
        <aside className="lg:w-72 lg:shrink-0">
          <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
            <div className="rounded-2xl bg-card border border-white/10 p-5">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-bold uppercase tracking-wider text-surface/50">Contents</h2>
                <span className="text-xs font-bold text-brand-300 tabular-nums">{pct}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10 mb-4 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-brand-500 to-fuchsia-500 transition-all duration-500" style={{ width: `${pct}%` }} />
              </div>
              <TocList />
            </div>
          </div>
        </aside>

        {/* mobile TOC trigger */}
        <button
          type="button"
          onClick={() => setMobileToc(true)}
          className="lg:hidden fixed bottom-6 left-6 z-40 px-4 py-3 rounded-full bg-card border border-white/10 text-sm font-semibold text-surface shadow-xl"
        >
          ☰ Contents · {pct}%
        </button>

        {/* mobile drawer */}
        {mobileToc && (
          <div className="fixed inset-0 z-[70] lg:hidden">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileToc(false)} aria-hidden />
            <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-card border-r border-white/10 p-5 overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-lg text-surface">Contents</h2>
                <button type="button" onClick={() => setMobileToc(false)} className="w-9 h-9 grid place-items-center rounded-lg hover:bg-white/10 text-surface">✕</button>
              </div>
              <TocList onClick={() => setMobileToc(false)} />
            </div>
          </div>
        )}

        {/* lessons */}
        <main className="flex-1 min-w-0 space-y-6 pt-2">
          {LESSONS.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              done={completed.has(lesson.id)}
              onComplete={() => markComplete(lesson.id)}
              onToggle={() => toggleComplete(lesson.id)}
            />
          ))}
        </main>
      </div>

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-16 border-y border-white/10 bg-card/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 reveal">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-300">Got Questions?</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-surface">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-card border border-white/10 p-5">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-surface">
                  <span>{f.q}</span>
                  <span className="text-brand-400 transition group-open:rotate-45 text-xl leading-none shrink-0">+</span>
                </summary>
                <p className="mt-3 text-sm text-surface/65 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATE ===== */}
      <section id="certificate" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 reveal">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-300">You Made It!</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-surface">Claim Your Completion Certificate</h2>
            <p className="mt-3 text-surface/60">Finish all lessons &amp; quizzes to unlock your personalized certificate.</p>
          </div>

          <div className="mb-8 rounded-2xl bg-card border border-white/10 p-6">
            <div className="flex items-center justify-between text-sm font-semibold mb-2 text-surface">
              <span>Course Progress</span>
              <span className="tabular-nums text-brand-300">{pct}%</span>
            </div>
            <div className="h-3 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-brand-500 via-fuchsia-500 to-pink-500 transition-all duration-700" style={{ width: `${pct}%` }} />
            </div>
            <p className="mt-3 text-sm text-surface/50">
              {unlocked ? "🎉 All lessons complete — your certificate is unlocked!" : `${completed.size} of ${TOTAL} lessons complete. Pass each quiz or mark lessons complete to reach 100%.`}
            </p>
          </div>

          <div id="seo-certificate" className="relative rounded-3xl p-1 bg-gradient-to-br from-brand-500 via-fuchsia-500 to-pink-500 reveal">
            <div className="rounded-[22px] bg-dark p-8 sm:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
              <div className="relative">
                <div className="text-5xl mb-3">🏆</div>
                <p className="uppercase tracking-[0.3em] text-xs font-bold text-surface/40">Certificate of Completion</p>
                <h3 className="mt-4 text-2xl sm:text-3xl font-black text-surface">SEO Fundamentals for Beginners</h3>
                <p className="mt-6 text-sm text-surface/50">This certifies that</p>
                <p className="mt-1 text-3xl font-black gradient-text break-words">{name.trim() || "Your Name"}</p>
                <p className="mt-6 max-w-md mx-auto text-sm text-surface/50">
                  has successfully completed all 17 lessons covering search engines, keywords, on-page, technical, off-page,
                  local SEO, AEO and GEO.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                  <div>
                    <p className="font-bold text-surface">{unlocked ? certDate : "—"}</p>
                    <p className="text-xs text-surface/40 uppercase tracking-wider">Date</p>
                  </div>
                  <div>
                    <p className="font-bold italic text-xl gradient-text">Muhammad Sufyan</p>
                    <p className="text-xs text-surface/40 uppercase tracking-wider">Issued By</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3 items-end">
            <div>
              <label htmlFor="nameInput" className="block text-sm font-semibold mb-1.5 text-surface">Enter your name for the certificate</label>
              <input
                id="nameInput"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Johnson"
                className="w-full px-4 py-3 rounded-xl bg-card border border-white/10 text-surface placeholder:text-surface/30 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition"
              />
            </div>
            <button
              type="button"
              onClick={handlePrint}
              disabled={!unlocked || !name.trim()}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white font-semibold glow hover:scale-[1.03] active:scale-95 transition disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              🖨️ Print / Save PDF
            </button>
          </div>
          {!unlocked && (
            <p className="mt-3 text-center text-sm text-amber-400">🔒 Complete 100% of the course to enable downloading.</p>
          )}

          <div className="mt-10 text-center">
            <button type="button" onClick={reset} className="text-sm text-surface/40 hover:text-red-400 underline underline-offset-2 transition">
              Reset my progress
            </button>
          </div>
        </div>
      </section>

      {/* back to top */}
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 grid place-items-center w-12 h-12 rounded-full bg-brand-600 text-white shadow-xl transition hover:bg-brand-700 ${
          showTop ? "opacity-100" : "opacity-0 pointer-events-none translate-y-4"
        }`}
      >
        ↑
      </button>

      {/* toast */}
      <div
        className={`fixed bottom-24 left-1/2 -translate-x-1/2 z-[80] px-5 py-3 rounded-xl bg-dark border border-white/10 text-surface text-sm font-medium shadow-2xl transition ${
          toast ? "opacity-100" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        role="status"
        aria-live="polite"
      >
        {toast}
      </div>
    </div>
  );
}
