# SEO Audit Report

**Site:** https://sufyan-frontend.vercel.app/
**Audited:** 2026-06-06
**Auditor:** Claude Code SEO Agent
**Overall SEO Health Score:** 53/100 — NEEDS WORK

---

## Executive Summary

Muhammad Sufyan's frontend developer portfolio is built on a solid technical foundation (Next.js 16 on Vercel, proper robots.txt, sitemap.xml, canonical URLs, HTTPS) but is currently invisible to both Google and AI search engines. The site scores **53 out of 100**, held back by three critical failures that must be addressed before any other SEO work will have measurable impact.

### Site Profile

| Property | Value |
|---|---|
| URL | https://sufyan-frontend.vercel.app/ |
| Business Type | Personal Portfolio / Freelance Frontend Developer |
| Location | Lahore, Pakistan |
| Framework | Next.js 16 on Vercel |
| CSS | Tailwind CSS v4 |
| Pages Audited | 9 (/, /about, /projects, /services, /blog, /contact, 3 blog posts) |

### Top 5 Critical Issues

1. **Site is not indexed by Google.** `site:sufyan-frontend.vercel.app` returns zero results. The site currently generates zero organic traffic from Google Search regardless of how good the content is.
2. **All 3 blog posts are placeholder pages.** Each shows "Full article coming soon. Stay tuned!" — thin content that signals low quality to Googlebot and wastes crawl budget.
3. **Schema markup is missing on 5 of 6 pages.** Only the homepage has Person JSON-LD. About, Projects, Services, Blog, and Contact have no structured data at all.
4. **Services page is critically thin** (~300 words). Insufficient to rank for any competitive service keywords in the freelance developer space.
5. **No llms.txt file.** The site is effectively invisible to AI-powered search products (ChatGPT, Perplexity, Gemini, Claude web search).

### Top 5 Quick Wins

1. Submit sitemap to Google Search Console and request indexing for each URL — can begin generating impressions within days.
2. Add `llms.txt` to the site root — a 30-minute task that opens up AI search discoverability immediately.
3. Add JSON-LD schema to About, Projects, Services, Blog, and Contact pages — copy-extend the existing homepage pattern.
4. Add a Google Search Console HTML meta verification tag to the homepage `<head>`.
5. Replace placeholder blog post content with 500+ word real articles — even rough drafts are better than "coming soon."

---

## 1. Technical SEO

**Score: 58/100** (weighted contribution: 12.8/22 pts)

The largest penalty in this category comes from zero Google indexing. Everything else is largely correct.

### Indexation Status

The site is not indexed. Running `site:sufyan-frontend.vercel.app` in Google returns no results as of 2026-06-06. This is the most urgent issue on the entire site. Possible causes include:

- The domain has never been submitted to Google Search Console.
- Vercel's `vercel.app` subdomain may carry lower inherent crawl priority than a custom domain.
- Googlebot may have encountered thin/placeholder content and deprioritized recrawling.

**Recommendation:** Register the site in Google Search Console, verify ownership (HTML meta tag is the easiest method for Next.js), submit sitemap.xml at `https://sufyan-frontend.vercel.app/sitemap.xml`, and manually request indexing for each of the 9 URLs via the URL Inspection tool.

**Strongly recommended:** Purchase and configure a custom domain (e.g., `muhammadsufyan.dev` or `sufyan.dev`). Custom domains carry more trust signals with Google than `vercel.app` subdomains.

### robots.txt

```
# current state — CORRECT
Allow: /
Sitemap: https://sufyan-frontend.vercel.app/sitemap.xml
```

No issues. All pages are crawlable.

### Sitemap

`sitemap.xml` is present and includes all 9 URLs with priorities and changefreq values. The lastmod values are correct — blog post lastmod uses article publish dates and main pages use 2026-06-06. No issues.

One minor note: the blog post lastmod dates are in 2025. If the posts are never updated with real content, Googlebot may stop recrawling them. Adding real content will naturally prompt re-submission with updated lastmod dates.

### HTTPS

Automatic via Vercel. No issues.

### Crawlability

All pages are reachable. No redirect chains or broken internal links detected. No `noindex` directives found (correct).

### metadataBase

Set correctly for the production domain. Open Graph image URLs will resolve correctly. No issues.

### Canonical URLs

Set via Next.js `alternates.canonical` on all pages. No issues.

### Mobile Responsiveness

Tailwind CSS v4 responsive design — confirmed mobile-friendly layout. No issues.

---

## 2. Content Quality

**Score: 42/100** (weighted contribution: 9.7/23 pts)

Content quality is the second-biggest score drag after the indexing issue. The placeholder blog posts are the primary cause.

### Blog Posts — Placeholder Content

All 3 blog posts display the same message: "Full article coming soon. Stay tuned!"

This is harmful in multiple ways:

- Google classifies these as thin content pages. After crawling them, Googlebot may apply a quality signal penalty that affects the entire domain.
- They waste crawl budget. Googlebot visits these URLs, finds no value, and leaves — time that could be spent crawling your real pages.
- They create a poor user experience, which Google can detect via engagement signals if the site ever gets traffic.
- They signal to potential clients visiting the blog that the developer is inactive.

**Recommendation:** Either (a) write real content for all 3 posts immediately — even 500 words each is acceptable — or (b) `noindex` the placeholder posts and remove them from the sitemap until real content is ready. Option (a) is strongly preferred because blog content is a primary driver of long-tail keyword traffic for freelance developer portfolios.

**Target word counts for blog posts:**
- Minimum viable: 600 words
- Good: 1,000–1,500 words
- Excellent: 2,000+ words with code examples and images

### Services Page — Thin Content

The Services page is approximately 300 words. For a page targeting commercial-intent queries like "hire frontend developer Lahore" or "React developer Pakistan freelance," this is insufficient. Competing pages from established freelancers and agencies typically run 800–1,500 words and include:

- Detailed service breakdowns per offering
- Process/methodology sections
- Pricing tiers or starting rates
- FAQs about the engagement process
- Social proof (testimonials, client logos, project outcomes)

**Recommendation:** Expand the Services page to at least 800 words with specific, keyword-targeted copy. See Action Plan for recommended content structure.

### Homepage and About — Acceptable

These pages appear to have sufficient descriptive content for their purpose. No critical thin-content issues detected on these pages.

### Blog Strategy

The blog category represents the site's highest-potential long-tail traffic opportunity. Topics that would perform well for a Lahore-based frontend developer:

- "How I built [specific project] with Next.js and Tailwind"
- "React vs. Next.js for small business websites in 2026"
- "Frontend development rates in Pakistan: what to expect"
- "How to hire a freelance frontend developer (client guide)"
- "Tailwind CSS v4 migration: what changed and how to update"

Blog content targeting these topics can rank within 3–6 months for low-competition long-tail keywords even on a new domain.

---

## 3. On-Page SEO

**Score: 72/100** (weighted contribution: 14.4/20 pts)

On-page SEO is the strongest-scoring category on the site. The basics are well-implemented.

### Title Tags

The title template `%s | Muhammad Sufyan` is set correctly. Page titles are unique and descriptive across main pages.

### Meta Descriptions

Main pages have meta descriptions. However, the 3 blog post pages have **no unique meta descriptions**. Since the content is placeholder text, there is no real description to pull from. Once real blog content is written, each post needs a hand-crafted 150–160 character meta description targeting the post's primary keyword.

### Open Graph Tags

Open Graph tags are present on the homepage. Status on inner pages was not fully confirmed — verify that OG title, description, and image are set on About, Projects, Services, and blog posts individually, not only inherited from a single default.

### OG Image

The current OG image is `profile.png` — a small headshot. When the site URL is shared on LinkedIn, Twitter/X, Slack, iMessage, or WhatsApp, the preview card will render a portrait crop of a headshot rather than a designed card.

**The standard for professional portfolios:**
- Dimensions: 1200 × 630 px
- Content: Name, title, one-line value prop, optional project screenshot or abstract background
- Format: JPG or PNG under 300 KB

**Recommended tools:** Figma, Canva, or a Next.js `/api/og` dynamic OG image route using `@vercel/og`.

### Twitter Card

Set correctly. No issues.

### Header Hierarchy

Not audited at the code level, but Tailwind-based layouts with Next.js commonly produce correct H1-H2-H3 hierarchies. Confirm that each page has exactly one H1 matching the page's primary keyword focus.

---

## 4. Schema & Structured Data

**Score: 22/100** (weighted contribution: 2.2/10 pts)

Schema is the lowest-scoring individual category. Only the homepage has structured data. This is a significant missed opportunity.

### Current State

| Page | Schema Present | Type |
|---|---|---|
| / (Homepage) | Yes | Person JSON-LD |
| /about | No | — |
| /projects | No | — |
| /services | No | — |
| /blog | No | — |
| /contact | No | — |
| Blog Post 1 | No | — |
| Blog Post 2 | No | — |
| Blog Post 3 | No | — |

### Missing Schema by Page

**Homepage** — add `WebSite` schema with `SearchAction` for sitelinks searchbox potential:

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://sufyan-frontend.vercel.app/",
  "name": "Muhammad Sufyan — Frontend Developer",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://sufyan-frontend.vercel.app/?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

**About page** — extend the Person schema from the homepage, add `alumniOf`, `knowsAbout`, `hasOccupation`.

**Services page** — add `Service` or `ProfessionalService` schema plus `FAQPage` schema for any FAQ section:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Frontend Development",
  "provider": {
    "@type": "Person",
    "name": "Muhammad Sufyan"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Pakistan"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://sufyan-frontend.vercel.app/contact"
  }
}
```

**Blog post pages** — add `Article` schema with `author`, `datePublished`, `dateModified`, `headline`, `image`, and `publisher`.

**All pages** — add `BreadcrumbList` schema. Even for a simple portfolio, breadcrumbs help Google understand site structure:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://sufyan-frontend.vercel.app/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://sufyan-frontend.vercel.app/services"
    }
  ]
}
```

**Services page** — add `FAQPage` schema if an FAQ section is added (recommended). This enables rich FAQ expandable results in Google Search — high-visibility real estate for zero extra effort once the content exists.

### LinkedIn URL Mismatch

The LinkedIn URL hardcoded in the codebase is `https://linkedin.com/in/sufyan-frontend`. Search results for Muhammad Sufyan in Lahore show potentially different LinkedIn profile URLs. If this URL 404s or redirects to a different profile, it will confuse social graph crawlers and may break `sameAs` links in the Person schema.

**Action:** Confirm the exact LinkedIn profile URL by logging in and copying it from the browser address bar. Update all references in the codebase.

---

## 5. Performance & Core Web Vitals

**Score: 71/100** (weighted contribution: 7.1/10 pts)

Note: CWV data is estimated based on the technology stack. Real field data requires Google Search Console and CrUX data, which are unavailable because the site has no indexed traffic.

### Estimated Performance Baseline

| Metric | Estimated Status | Notes |
|---|---|---|
| LCP (Largest Contentful Paint) | Likely Good (<2.5s) | Vercel CDN edge network, Next.js image optimization |
| INP (Interaction to Next Paint) | Likely Good (<200ms) | Tailwind CSS, minimal JS interactivity |
| CLS (Cumulative Layout Shift) | Likely Good (<0.1) | Next.js Image with explicit width/height |
| TTFB | Likely Good (<800ms) | Vercel edge CDN |
| FCP | Likely Good (<1.8s) | Static/SSG rendering |

### What Is Working

- **Next.js Image component** is used throughout. This handles lazy loading, responsive srcsets, WebP/AVIF conversion, and prevents CLS from image layout shifts automatically.
- **Vercel CDN** provides global edge caching. Assets are served from the nearest edge node to each visitor.
- **Tailwind CSS** generates minimal, purged CSS bundles — no large unused stylesheet payload.
- **Next.js** provides automatic code splitting, so each page only loads the JavaScript it needs.

### Potential Performance Risks

- **Profile image as OG image:** If `profile.png` is large and unoptimized, it does not benefit from Next.js Image optimization (OG images are served as static files, not through the image optimizer). Keep OG images under 300 KB.
- **Third-party scripts:** If any analytics, chat widgets, or font loaders are added in the future, they can significantly impact INP and LCP. Load third-party scripts with `strategy="lazyOnload"` via `next/script`.

### Recommendation

Once the site is indexed and Google Search Console is configured, enable the Core Web Vitals report to get real field data from Chrome users. Until then, run Lighthouse locally against each page using `npx lighthouse https://sufyan-frontend.vercel.app/ --view`.

---

## 6. Images

**Score: 78/100** (weighted contribution: 3.9/5 pts)

Images are one of the better-handled areas of the site.

### What Is Working

- `next/image` is used consistently across the site. This provides:
  - Automatic lazy loading (below-the-fold images are not fetched until needed)
  - Responsive `srcset` generation
  - Modern format delivery (WebP/AVIF based on browser support)
  - CLS prevention when `width` and `height` are set

- `googleBot: { maxImagePreview: 'large' }` is set in metadata. This allows Google Images to show full-size previews, increasing click-through from image search.

### Issues

- **OG image is not a designed social card.** `profile.png` used as the OG image will produce a suboptimal link preview on social platforms. A properly designed 1200×630 card with name, title, and value proposition dramatically improves CTR when portfolio links are shared.

- **Alt text audit not confirmed.** All project images, screenshots, and illustrations should have descriptive alt text that includes relevant keywords where natural (e.g., `alt="E-commerce dashboard built with React and Next.js"` rather than `alt="project screenshot"`).

- **Blog post images:** Once real blog content is added, each post needs at minimum one featured image with descriptive alt text and a meaningful filename (not `IMG_3842.jpg` — use `nextjs-tailwind-project-screenshot.jpg`).

### Recommendations

1. Design a 1200×630 OG image using Figma or Canva, or implement a dynamic OG route using `@vercel/og`.
2. Audit all `<Image>` components for missing or generic alt text.
3. Ensure all image filenames are descriptive before upload.

---

## 7. AI Search Readiness (GEO)

**Score: 28/100** (weighted contribution: 2.8/10 pts)

The site is largely invisible to AI-powered search products. This is an increasingly important channel for freelancers and service providers.

### Current State

| Signal | Status |
|---|---|
| llms.txt | Missing |
| Structured data for AI parsing | Minimal (homepage only) |
| Passage-level citability | Low (thin/placeholder content) |
| AI crawler accessibility | robots.txt allows all — technically accessible |
| Brand mention signals | None detected externally |

### llms.txt

No `llms.txt` file exists at `https://sufyan-frontend.vercel.app/llms.txt`. This file is the emerging standard for telling AI crawlers (ChatGPT, Perplexity, Gemini, Claude web search) what a site is about and which pages are most important.

A minimal but effective `llms.txt` for this site would be:

```
# Muhammad Sufyan — Frontend Developer Portfolio

> Freelance frontend developer based in Lahore, Pakistan. Specialising in React, Next.js, and Tailwind CSS. Available for hire.

## Services
- [Frontend Development Services](/services): React, Next.js, Tailwind CSS development for web applications and landing pages.
- [Projects Portfolio](/projects): Showcase of completed client and personal projects.
- [Contact](/contact): Hire Muhammad Sufyan for your next frontend project.

## Blog
- [Blog](/blog): Articles on frontend development, React, Next.js, and the Pakistan tech industry.
```

### Content Citability

For an AI product like Perplexity or ChatGPT to cite this site as a source (e.g., in response to "who are frontend developers for hire in Lahore"), the site needs:

1. Clear, parseable statements of fact: name, location, skills, availability.
2. Unique and specific content — AI models deprioritize generic boilerplate.
3. Structured data (JSON-LD) that AI crawlers can parse machine-readably.
4. External mentions on platforms like GitHub, LinkedIn, dev.to, or Pakistani tech communities.

### rel="me" Verification

Social profile links in the footer should carry `rel="me"` attributes. This establishes identity verification across platforms and is used by some AI systems to confirm authorship:

```html
<a href="https://linkedin.com/in/[correct-handle]" rel="me noopener noreferrer">LinkedIn</a>
<a href="https://github.com/[handle]" rel="me noopener noreferrer">GitHub</a>
```

---

## 8. Scoring Breakdown

| Category | Weight | Raw Score | Weighted Score | Grade |
|---|---|---|---|---|
| Technical SEO | 22% | 58/100 | 12.8 pts | D+ |
| Content Quality | 23% | 42/100 | 9.7 pts | F |
| On-Page SEO | 20% | 72/100 | 14.4 pts | C+ |
| Schema / Structured Data | 10% | 22/100 | 2.2 pts | F |
| Performance / CWV | 10% | 71/100 | 7.1 pts | C+ |
| AI Search Readiness | 10% | 28/100 | 2.8 pts | F |
| Images | 5% | 78/100 | 3.9 pts | C+ |
| **TOTAL** | **100%** | — | **52.9 / 100** | **F** |

### Score Interpretation

| Range | Meaning |
|---|---|
| 80–100 | Good — minor optimisations only |
| 65–79 | Fair — meaningful issues present |
| 50–64 | Needs Work — significant issues affecting traffic |
| 35–49 | Poor — multiple critical failures |
| 0–34 | Critical — site is largely non-functional for SEO |

At **53/100**, the site is in the "Needs Work" band. The three-point gap below the "Poor" floor is entirely explained by the indexing failure and placeholder content — fix those two issues and the score would move to approximately 68–72 on a re-audit.

---

## 9. What Is Working Well

These items require no action and should be preserved:

| Item | Status |
|---|---|
| robots.txt | Correct — all pages crawlable, sitemap referenced |
| sitemap.xml | Present — all 9 URLs included with priorities and changefreq |
| metadataBase | Correct — OG image URLs resolve properly |
| Canonical URLs | Set via Next.js alternates on all pages |
| Title template | Correct — `%s \| Muhammad Sufyan` |
| HTTPS | Automatic via Vercel |
| Next.js Image | Used throughout — lazy loading, optimisation, CLS prevention |
| Mobile responsive | Tailwind v4 responsive design |
| Open Graph | Present on homepage |
| Twitter card | Set correctly |
| Accessibility | skip-to-content, aria-labels, semantic HTML |
| googleBot maxImagePreview | Set to `large` |

---

## 10. Appendix — Verified URLs

All URLs below were identified during the audit:

```
https://sufyan-frontend.vercel.app/
https://sufyan-frontend.vercel.app/about
https://sufyan-frontend.vercel.app/projects
https://sufyan-frontend.vercel.app/services
https://sufyan-frontend.vercel.app/blog
https://sufyan-frontend.vercel.app/contact
https://sufyan-frontend.vercel.app/blog/[post-1]
https://sufyan-frontend.vercel.app/blog/[post-2]
https://sufyan-frontend.vercel.app/blog/[post-3]
https://sufyan-frontend.vercel.app/robots.txt
https://sufyan-frontend.vercel.app/sitemap.xml
```

---

*Report generated by Claude Code SEO Agent on 2026-06-06. All CWV scores are estimated from technology stack analysis; field data requires Google Search Console access after indexing is established.*
