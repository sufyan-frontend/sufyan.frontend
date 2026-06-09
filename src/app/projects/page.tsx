import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { projects, practiceProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects — Muhammad Sufyan (sufyanjutt) Portfolio",
  description:
    "Portfolio of Muhammad Sufyan (sufyanjutt / sufyanfrontend) — 9 live production projects: education platforms, corporate sites, AI interfaces, and web apps built with React & Next.js.",
  keywords: [
    "Muhammad Sufyan projects", "sufyanjutt portfolio", "sufyanfrontend projects",
    "React Next.js portfolio Pakistan", "Frontend Developer portfolio Lahore",
    "Alif Laila education platform", "Ehya Education website", "FieldX AI frontend",
    "Muhammad Sufyan portfolio 2026", "sufyan jutt projects", "sufyan-frontend projects",
    "aliflaila.app developer", "ehya.com.pk developer", "fieldxai.com frontend",
    "tillshoptechnologies.com developer", "sufyan frontend dashboard", "Muhammad Sufyan live websites",
    "React developer portfolio 2026", "Next.js production projects Pakistan", "frontend developer works Lahore",
    "Muhammad Sufyan github projects", "sufyan developer portfolio", "web developer portfolio Pakistan",
    "education platform React developer", "admin dashboard Next.js Pakistan",
  ],
  alternates: { canonical: "https://sufyan-frontend.vercel.app/projects" },
  openGraph: {
    title: "Projects — Muhammad Sufyan (sufyanjutt) Portfolio",
    description: "9 live production projects by sufyanjutt — education platforms, corporate sites & AI interfaces built with React & Next.js.",
    url: "https://sufyan-frontend.vercel.app/projects",
    images: [{ url: "https://sufyan-frontend.vercel.app/profile.png", width: 1200, height: 630, alt: "Muhammad Sufyan — Projects Portfolio" }],
  },
};

const projectsWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://sufyan-frontend.vercel.app/projects",
  url: "https://sufyan-frontend.vercel.app/projects",
  name: "Projects — Muhammad Sufyan (sufyanjutt) Frontend Developer Portfolio",
  description: "10 live production projects by Muhammad Sufyan (sufyanjutt / sufyanfrontend) — education platforms, AI interfaces, corporate sites, and admin dashboards built with React.js and Next.js.",
  dateModified: "2026-06-09",
  isPartOf: { "@id": "https://sufyan-frontend.vercel.app" },
  author: { "@id": "https://sufyan-frontend.vercel.app/#person" },
};

const projectsItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Muhammad Sufyan Frontend Developer Projects",
  description: "Production projects built by Muhammad Sufyan (sufyanjutt / sufyanfrontend) — a Frontend Developer from Lahore, Pakistan.",
  url: "https://sufyan-frontend.vercel.app/projects",
  numberOfItems: 10,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Sufyan Frontend Dashboard", url: "https://sufyan-frontend-dashboard.vercel.app/" },
    { "@type": "ListItem", position: 2, name: "Alif Laila Education Platform", url: "https://aliflaila.app/" },
    { "@type": "ListItem", position: 3, name: "Ehya Education Platform", url: "https://www.ehya.com.pk/" },
    { "@type": "ListItem", position: 4, name: "Classmate Portal", url: "https://classmate.ehya.com.pk/" },
    { "@type": "ListItem", position: 5, name: "TillShop Technologies", url: "https://www.tillshoptechnologies.com/" },
    { "@type": "ListItem", position: 6, name: "FieldX AI", url: "https://fieldxai.com/" },
    { "@type": "ListItem", position: 7, name: "Faizan Noor ul Quran", url: "http://faizan-noor-ul-quran-s.vercel.app/" },
    { "@type": "ListItem", position: 8, name: "ANP Engineering Website", url: "https://www.anpengineerings.com/" },
    { "@type": "ListItem", position: 9, name: "Soft Ehya", url: "http://soft.ehya.com.pk/" },
    { "@type": "ListItem", position: 10, name: "Ehsas Next App", url: "https://ehsasnext.vercel.app/" },
  ],
};

const projectsBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sufyan-frontend.vercel.app/" },
    { "@type": "ListItem", position: 2, name: "Projects", item: "https://sufyan-frontend.vercel.app/projects" },
  ],
};

export default function Projects() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsItemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsBreadcrumbSchema) }} />
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Portfolio</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-surface mb-4">My Projects</h1>
            <p className="text-surface/60 max-w-xl mx-auto">
              Production-ready applications built for real users — education management systems to corporate landing pages.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.07}>
              <article className="bg-card border border-white/5 rounded-2xl overflow-hidden group hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 h-full flex flex-col">
                <div className="relative h-52 overflow-hidden bg-dark">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  {project.featured && (
                    <span className="absolute top-3 right-3 bg-accent text-dark text-xs font-bold px-2.5 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-surface font-semibold text-lg mb-2">{project.title}</h2>
                  <p className="text-surface/60 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                  >
                    Visit Live Site
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Practice Projects */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <Reveal>
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-white/5" aria-hidden="true" />
            <div className="text-center">
              <p className="text-primary font-mono text-xs mb-1">Learning & Practice</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-surface">Practice Websites</h2>
            </div>
            <div className="flex-1 h-px bg-white/5" aria-hidden="true" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.07}>
              <article className="bg-card border border-white/5 rounded-2xl overflow-hidden group hover:border-accent/20 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 h-full flex flex-col">
                <div className="relative h-52 overflow-hidden bg-dark">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-accent/20 text-accent text-xs font-semibold px-2.5 py-1 rounded-full border border-accent/20">
                    Practice
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-surface font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-surface/60 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:underline"
                  >
                    Visit Live Site
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Hire CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <Reveal>
          <div className="bg-card border border-primary/10 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold text-surface mb-3">Want a Website Like These?</h2>
            <p className="text-surface/60 text-sm max-w-md mx-auto mb-6">
              Muhammad Sufyan (sufyanjutt) is available for new React and Next.js projects. Education platforms, corporate sites, dashboards — delivered production-ready.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-dark font-semibold px-8 py-3 rounded-xl hover:bg-primary/90 transition-all"
            >
              Hire Muhammad Sufyan
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Explore More */}
      <section className="py-14 border-t border-white/5 mt-16" aria-label="Explore more">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-primary font-mono text-xs text-center uppercase tracking-widest mb-2">Explore More</p>
            <h2 className="text-xl font-bold text-surface text-center mb-8">More From Muhammad Sufyan</h2>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              { href: "/", label: "Home", desc: "Portfolio overview" },
              { href: "/about", label: "About", desc: "My background" },
              { href: "/services", label: "Services", desc: "What I offer" },
              { href: "/blog", label: "Blog", desc: "53 dev articles" },
              { href: "/contact", label: "Contact", desc: "Hire me" },
            ].map(({ href, label, desc }) => (
              <Reveal key={href}>
                <Link
                  href={href}
                  className="bg-card border border-white/5 rounded-xl p-4 hover:border-primary/20 transition-all group text-center block"
                >
                  <p className="text-surface font-semibold text-sm group-hover:text-primary transition-colors">{label}</p>
                  <p className="text-surface/40 text-xs mt-1">{desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
