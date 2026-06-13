const BACKEND = 'https://sufyan-backend.vercel.app'

export async function GET() {
  const res = await fetch(`${BACKEND}/api/cms/posts`, { cache: 'no-store' })
  const data = await res.json()
  return Response.json(data, { status: res.status })
}

export async function POST(req: Request) {
  const body = await req.arrayBuffer()
  const contentType = req.headers.get('content-type') ?? 'application/json'
  const res = await fetch(`${BACKEND}/api/cms/posts`, {
    method: 'POST',
    headers: { 'x-cms-secret': process.env.CMS_SECRET!, 'content-type': contentType },
    body,
  })
  const data = await res.json()
  return Response.json(data, { status: res.status })
}

export function OPTIONS() {
  return new Response(null, { status: 204 })
}
