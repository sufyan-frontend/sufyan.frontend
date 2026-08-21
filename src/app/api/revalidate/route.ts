import { revalidateTag } from 'next/cache'

/**
 * On-demand cache invalidation for content that lives in the backend store.
 *
 * Project pages fetch with `next: { revalidate: 300, tags: ['projects'] }`, so an
 * edit in the admin panel would otherwise take up to 5 minutes to appear. The
 * backend pings this route after every write to flush that tag immediately.
 *
 *   POST /api/revalidate
 *   headers: x-cms-secret: <CMS_SECRET>
 *   body:    { "tag": "projects" }
 *
 * Authenticated with the same CMS_SECRET both apps already share — no new config.
 *
 * Next 16 requires a second argument on revalidateTag. `{ expire: 0 }` expires the
 * entry outright so the very next request refetches — the read-your-own-writes
 * behaviour an admin panel needs. `profile: "max"` would instead serve the stale
 * copy once more, meaning an edit would not show until the second page view.
 * (`updateTag` gives the same immediate semantics but only works inside Server
 * Actions, not Route Handlers.)
 */
const ALLOWED_TAGS = new Set(['projects'])

export async function POST(req: Request) {
  if (req.headers.get('x-cms-secret') !== process.env.CMS_SECRET) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let tag: unknown
  try {
    tag = (await req.json())?.tag
  } catch {
    return Response.json({ error: 'Body must be JSON' }, { status: 400 })
  }

  if (typeof tag !== 'string' || !ALLOWED_TAGS.has(tag)) {
    return Response.json(
      { error: `"tag" must be one of: ${[...ALLOWED_TAGS].join(', ')}` },
      { status: 400 },
    )
  }

  revalidateTag(tag, { expire: 0 })
  return Response.json({ revalidated: tag })
}
