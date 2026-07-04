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
    { error: `Could not reach reviews backend (${BACKEND}). Is it running? ${message}` },
    { status: 502 },
  )
}

/**
 * GET /api/cms/reviews        — active reviews (public)
 * GET /api/cms/reviews?all=1  — all reviews; the secret is added here server-side
 */
export async function GET(req: Request) {
  const wantAll = new URL(req.url).searchParams.get('all') === '1'
  const target = `${BACKEND}/api/cms/reviews${wantAll ? '?all=1' : ''}`
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

/** POST /api/cms/reviews — forward the multipart submission (with optional photo) */
export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const res = await fetch(`${BACKEND}/api/cms/reviews`, {
      method: 'POST',
      body: formData,
    })
    return forward(res)
  } catch (err) {
    return unreachable(err)
  }
}

export function OPTIONS() {
  return new Response(null, { status: 204 })
}
