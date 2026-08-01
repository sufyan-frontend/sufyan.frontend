# Implementation Roadmap

_Prepared: 2026-08-01 · 4 phases over 12 months · Effort assumes solo owner-operator_

Legend: 🔴 blocker · 🟠 high · 🟡 medium · 🟢 low · ✅ already done in prior audit

---

## Phase 0 — Prerequisite (Week 0–1) 🔴

**The domain migration gates the value of everything else. Do it first.**

- [ ] 🔴 Register custom domain (`muhammadsufyan.dev` / `sufyan.dev` / `sufyandev.com`)
- [ ] 🔴 Point domain at Vercel; set as primary; verify HTTPS
- [ ] 🔴 301 redirect **every** `sufyan-frontend.vercel.app/*` → `newdomain.com/*`
- [ ] 🔴 Update in code: `metadataBase`, all hardcoded `https://sufyan-frontend.vercel.app` (layout, sitemap, robots, all schema `@id`s, blog/posts pages)
- [ ] 🔴 Re-verify in Google Search Console + Bing Webmaster (new property); submit new sitemap
- [ ] 🟠 Use GSC "Change of Address" tool; keep old property to monitor migration
- [ ] 🟡 Update `sameAs` / profile links (GitHub, LinkedIn, Peerlist) to new domain

_Search for hardcoded URLs before migrating:_ `grep -rn "sufyan-frontend.vercel.app" src/`

---

## Phase 1 — Foundation (Weeks 1–4) 🟠

**Technical fixes + measurement + first money page.**

Measurement & config:
- [ ] 🟠 Add **GA4** (only Clarity exists); set contact-form submit + WhatsApp click as conversions
- [ ] 🟠 Confirm GSC receiving data; record **baseline** KPIs (fills the TBDs in SEO-STRATEGY §6)
- [ ] 🟡 Trim the 24-item `<meta keywords>` in `layout.tsx` to ~8 non-duplicate terms (or remove — Google ignores it; the near-dupes read as spam)

Fix what's broken:
- [ ] 🔴 Fix **reviews backend 500** (rotate GitHub token on `sufyan-backend` Vercel env) → unblocks Review schema
- [ ] 🟠 Add `Review` + `AggregateRating` schema to `/reviews` once data flows (★ rich results = big CTR win)

Schema & structure:
- [ ] 🟠 `ProfessionalService` + `OfferCatalog`/`Offer` (with `priceCurrency` PKR+USD) on `/services`
- [ ] 🟠 Build **`/hire/frontend-developer-lahore`** (Content #1) — the Pillar-1 money page
- [ ] 🟡 Per-page OG images (start with home, services, hire, top case study)

Already completed (prior audit) ✅:
- [x] ✅ Related-posts internal linking on `/blog/[slug]`
- [x] ✅ Sitemap no longer lists noindexed posts
- [x] ✅ `/admin` disallowed in robots
- [x] ✅ `/posts/[slug]` server-rendered + BlogPosting/Breadcrumb schema

---

## Phase 2 — Expansion (Weeks 5–12) 🟠

**Service pages, case studies, consolidation.**

- [ ] 🟠 Split `/services` into 5 individual Service pages (see SITE-STRUCTURE) — 800+ words each
- [ ] 🟠 Publish 3–4 **case studies** under `/work` with real metrics (Content #2, #4, #7)
- [ ] 🟠 **Consolidate doorway cluster** → `/about` + `/hire`; 301 the 4–5 retired posts; keep a redirect map in-repo
- [ ] 🟡 Decide `/posts` fate: make it the canonical blog CMS **or** noindex it (don't index two blog systems)
- [ ] 🟡 Internal-link pass: hub↔service↔case-study↔contact; breadcrumbs everywhere
- [ ] 🟢 Add author bio box component to blog/case-study template

---

## Phase 3 — Scale (Months 4–6 → weeks 13–24) 🟡

**Local depth, links, GEO.**

- [ ] 🟠 Off-page: create/optimize **Upwork, Fiverr, Peerlist, dev.to** profiles → link back (channel + citations)
- [ ] 🟠 Cross-post 2–3 best technical articles to dev.to/Hashnode with `rel=canonical` to your domain (reach + links)
- [ ] 🟡 2 winnable local/commercial posts (see Calendar Q2)
- [ ] 🟡 GEO optimization: quotable statements, consistent entity NAP across all directories; monitor ChatGPT/Perplexity/AI-Overviews for "frontend developer lahore" + your name
- [ ] 🟡 CWV audit via CrUX once traffic exists; fix any LCP/INP regressions
- [ ] 🟢 Consider LocalBusiness/ProfessionalService with `areaServed: Lahore` if pursuing local pack

---

## Phase 4 — Authority (Months 7–12) 🟡

**Thought leadership, links, compounding.**

- [ ] 🟠 Publish 1 **original-data** piece (PK frontend salaries / project pricing) — the primary link magnet
- [ ] 🟡 Outreach: PK dev communities, LinkedIn articles, podcast/guest appearances → referring domains
- [ ] 🟡 Refresh top-performing existing posts (dates, depth, internal links)
- [ ] 🟡 1 comparison piece (freelancer vs agency vs marketplace) → commercial intent
- [ ] 🟢 Quarterly prune: merge/noindex posts with zero impressions after 6 months
- [ ] 🟢 Repurpose case studies to LinkedIn for branded-search lift

---

## Dependencies

```
Phase 0 (domain) ──► everything (esp. link building in Phase 3)
Reviews token fix ──► Review/AggregateRating schema (Phase 1)
GA4 + GSC baseline ──► measuring all later phases
/services split ──► case-study cross-linking (Phase 2)
Doorway consolidation ──► clean crawl budget before scaling content
```

## What NOT to spend time on
- Ranking generic framework tutorials on a subdomain (or even the new domain, short-term).
- More personal-brand keyword-variant pages.
- Meta keywords micro-tuning (Google ignores it).
- Chasing marketplace head terms ("hire react developer") — go long-tail + local instead.

## Owner's one-line summary
**Buy the domain, fix reviews, build one hire page + a few metric-driven case studies, get ~10 real backlinks, and stop writing tutorials.** That sequence, in order, is 90% of the achievable upside.
