import { BACKEND_URL as BACKEND } from '@/lib/backend'

async function forward(res: Response) {
  const text = await res.text()
  try {
    return Response.json(JSON.parse(text), { status: res.status })
  } catch {
    return Response.json({ error: text || `HTTP ${res.status}` }, { status: res.status || 502 })
  }
}

function unreachable(err: unknown) {
  const message = err instanceof Error ? err.message : 'Backend unreachable'
  return Response.json(
    { error: `Could not reach reviews backend (${BACKEND}). Is it running? ${message}` },
    { status: 502 },
  )
}

/** PATCH /api/cms/reviews/:id — edit / activate (adds secret server-side) */
export async function PATCH(req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params
  const body = await req.text()
  try {
    const res = await fetch(`${BACKEND}/api/cms/reviews/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'x-cms-secret': process.env.CMS_SECRET! },
      body,
    })
    return forward(res)
  } catch (err) {
    return unreachable(err)
  }
}

/** DELETE /api/cms/reviews/:id — delete (adds secret server-side) */
export async function DELETE(req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params
  try {
    const res = await fetch(`${BACKEND}/api/cms/reviews/${id}`, {
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
