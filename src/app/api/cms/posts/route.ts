const BACKEND = 'https://sufyan-backend.vercel.app'

/** GET /api/cms/posts — fetch all posts (no secret needed) */
export async function GET() {
  const res = await fetch(`${BACKEND}/api/cms/posts`, { cache: 'no-store' })
  const data = await res.json()
  return Response.json(data, { status: res.status })
}

/** POST /api/cms/posts — create post (secret added server-side, never in browser) */
export async function POST(req: Request) {
  const formData = await req.formData()
  const res = await fetch(`${BACKEND}/api/cms/posts`, {
    method: 'POST',
    headers: { 'x-cms-secret': process.env.CMS_SECRET! },
    body: formData,
  })
  const data = await res.json()
  return Response.json(data, { status: res.status })
}

export function OPTIONS() {
  return new Response(null, { status: 204 })
}
