# Site Structure & Information Architecture

_Prepared: 2026-08-01 · Applies quality gates from the programmatic-SEO audit_

## Current structure (as-is)

```
/                       Home (Person/Org/WebSite schema) ✅
/about                  About ✅
/projects               Portfolio grid (CollectionPage) ✅
/services               Services + pricing tiers ✅ (needs Service/Offer schema)
/cv                     CV / resume ✅
/book                   Booking ✅
/reviews                Testimonials ⚠️ (backend 500)
/reviews/new            Submit review
/contact                Contact ✅
/blog                   Blog index (54 posts) ⚠️ (doorway cluster + generic tutorials)
/blog/[slug]            Blog post (BlogPosting + Breadcrumb) ✅
/posts                  CMS post index
/posts/[slug]           CMS post — now SSR'd ✅ (thin: description-only)
/admin/*                CMS admin — now disallowed ✅
/privacy /terms         Legal ✅
```

## Target structure (to-be)

Move from a flat "portfolio + blog dump" toward an **agency IA** with clear service and proof hierarchies.

```
/
├── /services                         [hub — ProfessionalService + OfferCatalog]
│   ├── /services/frontend-development       [Service, 800+ words]
│   ├── /services/nextjs-development          [Service]
│   ├── /services/react-development           [Service]
│   ├── /services/business-websites           [Service]
│   └── /services/web-app-dashboards          [Service]
│
├── /hire                             [commercial landing — merges the "hire-" blog post]
│   └── /hire/frontend-developer-lahore       [local × service, the money page for Pillar 1]
│
├── /work  (rename/augment /projects) [CollectionPage]
│   ├── /work/ehya-education-platform         [Case study, 1000+ words, METRICS]
│   ├── /work/alif-laila-education-platform   [Case study]
│   ├── /work/fieldx-ai-platform              [Case study]
│   └── /work/classmate-portal                [Case study]
│
├── /about                            [Person/ProfilePage — absorb "who-is-muhammad-sufyan"]
├── /reviews                          [Review + AggregateRating schema once API fixed]
├── /blog                             [thought leadership — pruned + refocused]
├── /contact  /book                   [ContactPage + booking]
└── /privacy  /terms
```

## Key IA changes

1. **Split `/services` into individual service pages** (Service schema each). One page can't rank for five different service intents. Hub links down to each; each links to relevant case study + `/contact`.
2. **Add `/hire/frontend-developer-lahore`** — the single most valuable new page (local + commercial intent, Pillar 1). Absorbs and 301s the `hire-sufyan-frontend-developer` blog post.
3. **Promote projects → real case studies** under `/work`, each with the mandatory case-study anatomy (below). Link from the matching project-case-study blog posts (301 the thin ones in, or canonical).
4. **Consolidate the doorway cluster** into `/about` (identity) + `/hire/...` (commercial). 301: `who-is-muhammad-sufyan`, `muhammad-sufyan-github-projects`, `muhammad-sufyan-linkedin-profile`, `sufyan-frontend-developer-lahore-pakistan`, `sufyan-frontend-developer-portfolio-2026` → their best-fit survivor page.
5. **Decide `/posts` vs `/blog`.** Two blog systems is confusing and risks overlap. Either (a) make `/posts` the *only* editable blog and migrate, or (b) keep `/posts` internal and `noindex` it. Don't index both indefinitely.

## Case-study anatomy (mandatory for `/work/*`, min 1,000 words)

- Executive summary (2–3 sentences, quotable for GEO)
- Client / product background
- The challenge (specific problem)
- Approach & tech decisions (React/Next.js/Tailwind — *why*)
- Implementation highlights (with a screenshot or two)
- **Measurable results** — Lighthouse score, LCP/INP, users served, load-time before/after
- Testimonial quote (from `/reviews`)
- Services used + CTA to `/contact`
- `Article` + client `Organization` schema

## Internal linking rules

- **Hub & spoke:** `/services` hub ↔ each service page ↔ relevant case study ↔ `/contact`.
- Every case study links to 2–3 related case studies + the service that delivered it.
- Every blog post: 3–5 related posts (✅ implemented) + one contextual link to a service or case study where relevant.
- Breadcrumbs (BreadcrumbList schema) on all deep pages.
- Anchor text: descriptive and varied — avoid repeating exact-match "frontend developer lahore" on every link.

## URL rules (enforce at build)

- Lowercase, hyphenated, < 100 chars, no query params for primary content.
- Self-referencing canonical on every page.
- One canonical home for each topic — no `/services` **and** `/blog/*-services` competing.
- 301 (not 404) every retired/merged URL; keep a redirect map in the repo.

## Quality gates (from programmatic-SEO audit)

- ✅ Noindex any page without real content (already enforced on `/blog`).
- ✅ Keep noindexed URLs out of the sitemap (fixed).
- ⚠️ `/posts` pages are description-only (thin) — add a real body field or noindex.
- 🛑 No new page ships under 300 words of unique value or that fails the "would this be worth publishing if no similar page existed?" test.
