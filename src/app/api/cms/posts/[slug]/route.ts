const BACKEND = 'https://sufyan-backend.vercel.app'

export async function GET(req: Request, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params
  const res = await fetch(`${BACKEND}/api/cms/posts/${slug}`, { cache: 'no-store' })
  const data = await res.json()
  return Response.json(data, { status: res.status })
}

export async function PUT(req: Request, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params
  // Parse incoming FormData and re-forward — fetch sets Content-Type + boundary automatically
  const formData = await req.formData()
  const res = await fetch(`${BACKEND}/api/cms/posts/${slug}`, {
    method: 'PUT',
    headers: { 'x-cms-secret': process.env.CMS_SECRET! },
    body: formData,
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
