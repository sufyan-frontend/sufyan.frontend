/**
 * Base URL of the CMS/reviews backend, used by the server-side proxy routes.
 *
 *   npm run dev        → http://localhost:3001   (local backend)
 *   npm run dev:prod   → production backend
 *   (build / start)    → production backend (fallback)
 *
 * Set via the BACKEND_URL env var (see package.json scripts).
 */
export const BACKEND_URL =
  process.env.BACKEND_URL?.replace(/\/$/, '') || 'https://sufyan-backend.vercel.app'
