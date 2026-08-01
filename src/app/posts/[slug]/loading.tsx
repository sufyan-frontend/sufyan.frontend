// Streamed while the server fetches the CMS post (see page.tsx). Mirrors the
// article layout so navigation from /posts doesn't flash an empty screen.
export default function Loading() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-pulse">
      <div className="h-4 bg-white/5 rounded w-24 mb-8" />
      <div className="h-10 bg-white/5 rounded w-3/4 mb-4" />
      <div className="h-4 bg-white/5 rounded w-1/3 mb-8" />
      <div className="h-72 bg-white/5 rounded-2xl mb-8" />
      <div className="space-y-3">
        <div className="h-4 bg-white/5 rounded" />
        <div className="h-4 bg-white/5 rounded w-5/6" />
        <div className="h-4 bg-white/5 rounded w-4/6" />
      </div>
    </div>
  );
}
