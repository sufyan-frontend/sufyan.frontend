const BACKEND = 'https://sufyan-backend.vercel.app'

/** GET /api/cms/posts/:slug — fetch single post (no secret needed) */
export async function GET(req: Request, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params
  const res = await fetch(`${BACKEND}/api/cms/posts/${slug}`, { cache: 'no-store' })
  const data = await res.json()
  return Response.json(data, { status: res.status })
}

/** PUT /api/cms/posts/:slug — update post (secret added server-side) */
export async function PUT(req: Request, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params
  const formData = await req.formData()
  const res = await fetch(`${BACKEND}/api/cms/posts/${slug}`, {
    method: 'PUT',
    headers: { 'x-cms-secret': process.env.CMS_SECRET! },
    body: formData,
  })
  const data = await res.json()
  return Response.json(data, { status: res.status })
}

/** DELETE /api/cms/posts/:slug — delete post (secret added server-side) */
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
