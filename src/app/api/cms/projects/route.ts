import { BACKEND_URL as BACKEND } from '@/lib/backend'

// Reads the backend response as JSON, falling back to a clear error if the
// backend is unreachable or returns a non-JSON body.
async function forward(res: Response) {
  const text = await res.text()
  try {
    return Response.json(JSON.parse(text), { status: res.status })
  } catch {
    return Response.json(
      { error: text || `Backend returned HTTP ${res.status}` },
      { status: res.status || 502 },
    )
  }
}

function unreachable(err: unknown) {
  const message = err instanceof Error ? err.message : 'Backend unreachable'
  return Response.json(
    { error: `Could not reach projects backend (${BACKEND}). Is it running? ${message}` },
    { status: 502 },
  )
}

/**
 * GET /api/cms/projects        — active projects (public)
 * GET /api/cms/projects?all=1  — all projects incl. hidden; the secret is added here server-side
 *
 * Any other query string (kind, featured, limit) is passed straight through.
 */
export async function GET(req: Request) {
  const incoming = new URL(req.url).searchParams
  const wantAll = incoming.get('all') === '1'
  const qs = incoming.toString()
  const target = `${BACKEND}/api/cms/projects${qs ? `?${qs}` : ''}`
  try {
    const res = await fetch(target, {
      cache: 'no-store',
      headers: wantAll ? { 'x-cms-secret': process.env.CMS_SECRET! } : undefined,
    })
    return forward(res)
  } catch (err) {
    return unreachable(err)
  }
}

/** POST /api/cms/projects — forward the multipart submission (with optional screenshot) */
export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const res = await fetch(`${BACKEND}/api/cms/projects`, {
      method: 'POST',
      headers: { 'x-cms-secret': process.env.CMS_SECRET! },
      body: formData,
    })
    return forward(res)
  } catch (err) {
    return unreachable(err)
  }
}

/** PATCH /api/cms/projects — forward a reorder ({ ids: [...] }) */
export async function PATCH(req: Request) {
  try {
    const res = await fetch(`${BACKEND}/api/cms/projects`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'x-cms-secret': process.env.CMS_SECRET! },
      body: await req.text(),
    })
    return forward(res)
  } catch (err) {
    return unreachable(err)
  }
}

export function OPTIONS() {
  return new Response(null, { status: 204 })
}
