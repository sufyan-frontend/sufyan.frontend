import { BACKEND_URL as BACKEND } from '@/lib/backend'

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

/** GET /api/cms/projects/:id — a single project (public) */
export async function GET(_req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params
  try {
    return forward(await fetch(`${BACKEND}/api/cms/projects/${id}`, { cache: 'no-store' }))
  } catch (err) {
    return unreachable(err)
  }
}

/**
 * PUT /api/cms/projects/:id — forward an edit; the secret is added here server-side.
 * Accepts either multipart/form-data (with an optional screenshot) or JSON.
 */
export async function PUT(req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params
  const contentType = req.headers.get('content-type') ?? ''
  try {
    const isJson = contentType.includes('application/json')
    const res = await fetch(`${BACKEND}/api/cms/projects/${id}`, {
      method: 'PUT',
      headers: {
        'x-cms-secret': process.env.CMS_SECRET!,
        ...(isJson && { 'Content-Type': 'application/json' }),
      },
      body: isJson ? await req.text() : await req.formData(),
    })
    return forward(res)
  } catch (err) {
    return unreachable(err)
  }
}

/** DELETE /api/cms/projects/:id — forward a delete; the secret is added here server-side. */
export async function DELETE(_req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params
  try {
    const res = await fetch(`${BACKEND}/api/cms/projects/${id}`, {
      method: 'DELETE',
      headers: { 'x-cms-secret': process.env.CMS_SECRET! },
    })
    return forward(res)
  } catch (err) {
    return unreachable(err)
  }
}

export function OPTIONS() {
  return new Response(null, { status: 204 })
}
