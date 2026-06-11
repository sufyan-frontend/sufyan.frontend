<div align="center">

<img src="public/profile.png" alt="Muhammad Sufyan" width="110" style="border-radius:50%" />

# Muhammad Sufyan — Frontend Developer Portfolio

**sufyanjutt · sufyanfrontend**

[![Live Site](https://img.shields.io/badge/Live%20Site-sufyan--frontend.vercel.app-7c3aed?style=for-the-badge&logo=vercel&logoColor=white)](https://sufyan-frontend.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-sufyan--frontend-0077b5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sufyan-frontend)
[![GitHub](https://img.shields.io/badge/GitHub-sufyan--frontend-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sufyan-frontend)

![Next.js](https://img.shields.io/badge/Next.js%2016-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React%2019-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%20v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on%20Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

---

## About

Production-grade personal portfolio for **Muhammad Sufyan**, a Frontend Developer from Lahore, Pakistan with 1.5+ years of experience building React and Next.js web applications. The site is built with the Next.js App Router, fully server-rendered, and tuned for Core Web Vitals, structured data, and AI crawler visibility.

- **53 blog articles** covering React, Next.js, Tailwind CSS, and frontend career guidance
- **10 live production projects** showcased with screenshots and live links
- **Contact form** with dual-email delivery (owner notification + sender confirmation) via Gmail SMTP
- **Full SEO stack**: JSON-LD schema, sitemap.xml, robots.txt, llms.txt, Google + Bing verification, Microsoft Clarity

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, React Compiler) |
| UI Library | [React 19](https://react.dev) |
| Language | [TypeScript 5](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Animations | [Framer Motion 12](https://www.framer.com/motion) |
| Email | [Nodemailer 8](https://nodemailer.com) + Gmail SMTP |
| Fonts | [Geist Sans & Geist Mono](https://vercel.com/font) via `next/font` |
| Analytics | [Microsoft Clarity](https://clarity.microsoft.com) |
| Hosting | [Vercel](https://vercel.com) |

---

## Features

- **App Router** with file-system routing, server components, and static generation
- **React Compiler** enabled for automatic memoisation
- **Per-page metadata** — unique `title`, `description`, `keywords`, OpenGraph, Twitter Card, and canonical URL on every route
- **Schema.org JSON-LD** — `Person`, `WebSite`, `ProfilePage`, `Organization`, `BlogPosting`, `CollectionPage`, `ContactPage`, `FAQPage`, `HowTo`, `Service`, and `BreadcrumbList`
- **Dynamic sitemap** at `/sitemap.xml` with priority and `changeFrequency` per route plus all 53 blog slugs
- **Robots.txt** allowing all major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.)
- **llms.txt** for LLM/AI search visibility
- **Google Search Console** + **Bing Webmaster Tools** verified
- **Skip-to-main-content** link and semantic HTML for accessibility
- **Scroll-reveal animations** via a shared `Reveal` component
- **Responsive** mobile-first design across all breakpoints
- **Contact form** with geo-location enrichment, loading/success/error states, and WhatsApp fallback CTA

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, featured projects, skills, experience, testimonials, FAQ |
| `/about` | Bio, profile image, technical skills, work timeline, certificates |
| `/projects` | 10 live production projects + practice projects grid |
| `/services` | 6 services, process steps, deliverables, client types |
| `/blog` | 53 article listing with tags and read-time |
| `/blog/[slug]` | Individual post with `BlogPosting` schema |
| `/contact` | Contact form with email, phone, and location info |
| `/privacy` | Privacy policy (no-index) |
| `/terms` | Terms & conditions (no-index) |
| `/sitemap.xml` | Auto-generated XML sitemap |
| `/robots.txt` | Auto-generated robots rules |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — metadata, schemas, Navbar, Footer
│   ├── page.tsx            # Home page
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── services/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── contact/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── robots.ts           # Dynamic robots.txt
│   └── api/contact/route.ts  # POST — nodemailer email handler
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ContactForm.tsx
│   └── Reveal.tsx          # Framer Motion scroll-reveal wrapper
└── lib/
    ├── data.ts             # Person, projects, skills, blog posts, testimonials
    └── blog-content.tsx    # JSX content map for blog slugs
public/
├── profile.png
├── favicon.png
├── Muhammad Sufyan.pdf     # CV download
├── llms.txt
├── site.webmanifest
├── porfolio image/         # Project screenshots
└── ehsas lab image/        # Certificate images
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- A Gmail account with an [App Password](https://support.google.com/accounts/answer/185833) (for the contact form)

### Installation

```bash
git clone https://github.com/sufyan-frontend/sufyan-frontend.git
cd sufyan-frontend
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
GMAIL_USER=your.email@gmail.com
GMAIL_APP_PASSWORD=xxxx_xxxx_xxxx_xxxx
```

> The contact form sends two emails per submission: one to the owner and one confirmation to the sender. Without these variables, the `/api/contact` route returns a 500.

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

---

## Deployment

The project is deployed on **Vercel** with zero configuration.

1. Push to GitHub
2. Import the repo in [vercel.com/new](https://vercel.com/new)
3. Add `GMAIL_USER` and `GMAIL_APP_PASSWORD` in **Project → Settings → Environment Variables**
4. Deploy

Every push to `main` triggers an automatic redeploy.

---

## SEO & Performance

| Signal | Implementation |
|---|---|
| Structured data | 10+ `@type` schemas via JSON-LD in layout + per-page |
| Sitemap | Dynamic `/sitemap.xml` covering all static routes + 53 blog slugs |
| Robots | `/robots.txt` with AI-crawler allowlist and `/api/` disallow |
| AI visibility | `llms.txt` at root for LLM/AI search indexing |
| Social preview | OpenGraph + Twitter Card on every page |
| Search console | Google Search Console + Bing Webmaster Tools verified |
| Analytics | Microsoft Clarity heatmaps & session recordings |
| Canonical URLs | Absolute canonical on every route |
| Fonts | `next/font` for zero-CLS font loading |

---

## Connect

**Muhammad Sufyan** — Frontend Developer, Lahore, Pakistan

- Portfolio: [sufyan-frontend.vercel.app](https://sufyan-frontend.vercel.app)
- Email: [sufyantechsolutions@gmail.com](mailto:sufyantechsolutions@gmail.com)
- LinkedIn: [linkedin.com/in/sufyan-frontend](https://www.linkedin.com/in/sufyan-frontend)
- GitHub: [github.com/sufyan-frontend](https://github.com/sufyan-frontend)
- WhatsApp: [+92 322 747 9636](https://wa.me/923227479636)
