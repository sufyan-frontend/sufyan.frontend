"use client";
import type { Metadata } from "next";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { getPosts } from "@/lib/cms-api";
import { SidebarCtx } from "./_context";

/* ─── Auth Gate ──────────────────────────────────────────────────────── */

function AuthGate({ onAuth }: { onAuth: (secret: string) => void }) {
  const [val, setVal] = useState("");
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="bg-card border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center justify-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
          <h1 className="text-surface text-xl font-bold text-center mb-1">CMS Admin</h1>
          <p className="text-surface/40 text-sm text-center mb-7">Enter your CMS secret to continue</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!val.trim()) return;
              sessionStorage.setItem("cms-secret", val.trim());
              onAuth(val.trim());
            }}
            className="space-y-4"
          >
            <input
              type="password"
              placeholder="Secret key"
              value={val}
              onChange={(e) => setVal(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-surface placeholder-surface/30 text-sm focus:outline-none focus:border-primary/50 transition-colors"
              autoFocus
            />
            <button
              type="submit"
              className="w-full bg-primary text-dark font-semibold py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm"
            >
              Enter Admin
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ─── Layout ─────────────────────────────────────────────────────────── */

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isAuthed, setIsAuthed] = useState<boolean | undefined>(undefined);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const s = sessionStorage.getItem("cms-secret") ?? process.env.NEXT_PUBLIC_CMS_SECRET ?? "";
    if (s) sessionStorage.setItem("cms-secret", s);
    setIsAuthed(!!s);
  }, []);

  const { data: posts = [] } = useQuery({
    queryKey: ["cms-posts"],
    queryFn: getPosts,
    enabled: isAuthed === true,
  });

  const logout = () => {
    sessionStorage.removeItem("cms-secret");
    setIsAuthed(false);
  };

  if (isAuthed === undefined) return null;
  if (!isAuthed) {
    return <AuthGate onAuth={() => setIsAuthed(true)} />;
  }

  const isDashboard = pathname === "/admin";
  const isPosts = pathname.startsWith("/admin/posts");

  return (
    <SidebarCtx.Provider value={{ toggle: () => setSidebarOpen((o) => !o) }}>
      <div className="min-h-screen bg-dark flex">

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* ── Sidebar ── */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-60 bg-card border-r border-white/5 flex flex-col transition-transform duration-200 lg:static lg:translate-x-0 lg:z-auto ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Brand */}
          <div className="h-14 flex items-center gap-3 px-5 border-b border-white/5 shrink-0">
            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <span className="text-surface font-bold text-sm tracking-tight">CMS Admin</span>
          </div>

          {/* Nav */}
          <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
            <p className="text-surface/20 text-[10px] font-semibold uppercase tracking-widest px-3 pt-2 pb-1.5">
              Overview
            </p>

            {/* Dashboard */}
            <Link
              href="/admin"
              onClick={() => setSidebarOpen(false)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isDashboard
                  ? "bg-primary/10 text-primary"
                  : "text-surface/50 hover:text-surface hover:bg-white/5"
              }`}
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Dashboard
            </Link>

            <p className="text-surface/20 text-[10px] font-semibold uppercase tracking-widest px-3 pt-3 pb-1.5">
              Content
            </p>

            {/* Posts */}
            <Link
              href="/admin/posts"
              onClick={() => setSidebarOpen(false)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isPosts
                  ? "bg-primary/10 text-primary"
                  : "text-surface/50 hover:text-surface hover:bg-white/5"
              }`}
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Posts
              {posts.length > 0 && (
                <span className="ml-auto text-xs bg-primary/20 text-primary px-1.5 py-0.5 rounded-full font-mono leading-none">
                  {posts.length}
                </span>
              )}
            </Link>
          </nav>

          {/* Footer */}
          <div className="p-3 border-t border-white/5 space-y-1 shrink-0">
            <Link
              href="/posts"
              target="_blank"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-surface/40 hover:text-surface hover:bg-white/5 transition-colors text-sm"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Site
            </Link>
            <button
              type="button"
              onClick={logout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-surface/40 hover:text-red-400 hover:bg-red-500/5 transition-colors text-sm"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </aside>

        {/* ── Main content area ── */}
        <div className="flex-1 flex flex-col min-w-0">
          {children}
        </div>

      </div>
    </SidebarCtx.Provider>
  );
}
