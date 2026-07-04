"use client";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { getPosts } from "@/lib/cms-api";
import { SidebarCtx } from "./_context";

const ADMIN_PASSWORD = "sufyandev123";

/* ─── Auth Gate ──────────────────────────────────────────────────────── */

function AuthGate({ onAuth }: { onAuth: () => void }) {
  const [val, setVal] = useState("");
  const [error, setError] = useState(false);
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
          <p className="text-surface/40 text-sm text-center mb-7">Enter your password to continue</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (val === ADMIN_PASSWORD) {
                sessionStorage.setItem("cms-authed", "1");
                setError(false);
                onAuth();
              } else {
                setError(true);
                setVal("");
              }
            }}
            className="space-y-4"
          >
            <div>
              <input
                type="password"
                placeholder="Password"
                value={val}
                onChange={(e) => { setVal(e.target.value); setError(false); }}
                className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-surface placeholder-surface/30 text-sm focus:outline-none transition-colors ${
                  error ? "border-red-500/60 focus:border-red-500" : "border-white/10 focus:border-primary/50"
                }`}
                autoFocus
              />
              {error && (
                <p className="text-red-400 text-xs mt-2">Incorrect password. Try again.</p>
              )}
            </div>
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
  const router = useRouter();
  const [isAuthed, setIsAuthed] = useState<boolean | undefined>(undefined);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setIsAuthed(sessionStorage.getItem("cms-authed") === "1");
  }, []);

  const { data: posts = [] } = useQuery({
    queryKey: ["cms-posts"],
    queryFn: getPosts,
    enabled: isAuthed === true,
  });

  const logout = () => {
    sessionStorage.removeItem("cms-authed");
    router.push("/");
  };

  if (isAuthed === undefined) return null;
  if (!isAuthed) {
    return <AuthGate onAuth={() => setIsAuthed(true)} />;
  }

  const isDashboard = pathname === "/admin";
  const isPosts = pathname.startsWith("/admin/posts");
  const isReviews = pathname.startsWith("/admin/reviews");

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

        {/* ── Sidebar (static on lg left side, fixed overlay on mobile) ── */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-60 bg-card border-r border-white/5 flex flex-col transition-transform duration-200 lg:static lg:inset-auto lg:z-auto lg:translate-x-0 lg:shrink-0 ${
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

            {/* Reviews */}
            <Link
              href="/admin/reviews"
              onClick={() => setSidebarOpen(false)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isReviews
                  ? "bg-primary/10 text-primary"
                  : "text-surface/50 hover:text-surface hover:bg-white/5"
              }`}
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.05 10.8c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              Reviews
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
