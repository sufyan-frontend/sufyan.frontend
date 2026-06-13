const BACKEND = 'https://sufyan-backend.vercel.app'

export async function GET(req: Request, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params
  const res = await fetch(`${BACKEND}/api/cms/posts/${slug}`, { cache: 'no-store' })
  const data = await res.json()
  return Response.json(data, { status: res.status })
}

export async function PUT(req: Request, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params
  const body = await req.arrayBuffer()
  const contentType = req.headers.get('content-type') ?? 'application/json'
  const res = await fetch(`${BACKEND}/api/cms/posts/${slug}`, {
    method: 'PUT',
    headers: { 'x-cms-secret': process.env.CMS_SECRET!, 'content-type': contentType },
    body,
  })
  const data = await res.json()
  return Response.json(data, { status: res.status })
}

export async function DELETE(req: Request, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params
  const res = await fetch(`${BACKEND}/api/cms/posts/${slug}`, {
    method: 'DELETE',
    headers: { 'x-cms-secret': process.env.CMS_SECRET! },
  })
  const data = await res.json()
  return Response.json(data, { status: res.status })
}

export function OPTIONS() {
  return new Response(null, { status: 204 })
}
