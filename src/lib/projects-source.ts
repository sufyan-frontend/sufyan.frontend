/**
 * Server-side source of truth for portfolio projects.
 *
 * Projects live in the backend's GitHub-backed store (projects/projects.json) and
 * are served by GET /api/cms/projects. The hardcoded arrays in data.ts are kept as
 * a build-time fallback: if the backend is down, rate-limited, or mid-deploy, the
 * pages still render the last-known-good list instead of an empty grid.
 *
 * Call these from Server Components only — they talk to the backend directly
 * rather than going through the /api/cms/projects proxy, which exists for the
 * browser (it is what injects CMS_SECRET for authenticated calls).
 */
import { BACKEND_URL } from './backend'
import { projects as localProjects, practiceProjects as localPractice } from './data'

export type ProjectKind = 'production' | 'practice'

export interface Project {
  id: string
  title: string
  description: string
  url: string
  image: string | null
  tags: string[]
  featured: boolean
  kind: ProjectKind
  order: number
  active: boolean
  date: string
}

/** Where a given render got its data — surfaced so pages can log/diagnose. */
export type ProjectsSource = 'api' | 'fallback'

// data.ts entries carry no kind/order/active/date — synthesise them so the
// fallback is shape-identical to an API response.
const FALLBACK_DATE = '2026-08-21T00:00:00.000Z'

function buildFallback(): Project[] {
  return [
    ...localProjects.map((p, i) => ({ ...p, kind: 'production' as const, order: i })),
    ...localPractice.map((p, i) => ({
      ...p,
      featured: false,
      kind: 'practice' as const,
      order: localProjects.length + i,
    })),
  ].map(p => ({
    id: p.id,
    title: p.title,
    description: p.description,
    url: p.url,
    image: p.image ?? null,
    tags: p.tags ?? [],
    featured: Boolean((p as { featured?: boolean }).featured),
    kind: p.kind,
    order: p.order,
    active: true,
    date: FALLBACK_DATE,
  }))
}

function isProject(value: unknown): value is Project {
  const p = value as Partial<Project>
  return Boolean(p && typeof p.id === 'string' && typeof p.title === 'string' && typeof p.url === 'string')
}

/**
 * Every active project, ordered. Revalidates every 5 minutes so an edit in the
 * admin panel shows up without a redeploy, while keeping pages statically fast
 * and well clear of GitHub's API rate limit.
 */
export async function getProjects(): Promise<{ projects: Project[]; source: ProjectsSource }> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/cms/projects`, {
      next: { revalidate: 300, tags: ['projects'] },
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    const list = Array.isArray(data?.projects) ? data.projects.filter(isProject) : []
    // An empty store almost certainly means a misconfigured backend rather than
    // "the portfolio is genuinely empty" — show the fallback instead of nothing.
    if (list.length === 0) throw new Error('backend returned no projects')
    return { projects: list, source: 'api' }
  } catch (err) {
    console.warn(
      `[projects] falling back to data.ts — ${err instanceof Error ? err.message : 'unknown error'}`,
    )
    return { projects: buildFallback(), source: 'fallback' }
  }
}

/** Client work only, ordered — the main grid on /projects. */
export async function getProductionProjects() {
  const { projects, source } = await getProjects()
  return { projects: projects.filter(p => p.kind === 'production'), source }
}

/** Practice builds only, ordered — the secondary grid on /projects. */
export async function getPracticeProjects() {
  const { projects, source } = await getProjects()
  return { projects: projects.filter(p => p.kind === 'practice'), source }
}

/** The home-page teaser: featured client work, capped at `limit`. */
export async function getFeaturedProjects(limit = 6) {
  const { projects, source } = await getProjects()
  return { projects: projects.filter(p => p.featured).slice(0, limit), source }
}

/**
 * Screenshots come from two places: files already in this app's public folder
 * (site-relative, e.g. "/porfolio%20image/ehya-pk.png") and uploads committed to
 * the data repo by the admin panel (absolute raw.githubusercontent URLs).
 * next/image handles both, but remote hosts must be allowed in next.config.ts.
 */
export function resolveProjectImage(image: string | null): string | null {
  if (!image) return null
  return image
}
