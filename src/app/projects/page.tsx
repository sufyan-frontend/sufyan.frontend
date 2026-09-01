import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/projects/ProjectCard";
import { ProjectsGridSkeleton } from "@/components/projects/ProjectCardSkeleton";
import {
  getProductionProjects,
  getPracticeProjects,
  getProjects,
  type Project,
} from "@/lib/projects-source";

const SITE = "https://sufyan-frontend.vercel.app";
const PAGE = `${SITE}/projects`;

/**
 * Counts come from the live store so the copy can never drift from what the page
 * renders. getProjects() falls back to data.ts when the backend is unreachable,
 * so metadata generation never fails the build.
 */
export async function generateMetadata(): Promise<Metadata> {
  const { projects } = await getProjects();
  const n = projects.filter((p) => p.kind === "production").length;
  return {
    title: { absolute: "Projects — Muhammad Sufyan Portfolio" },
    description: `Portfolio of Muhammad Sufyan (sufyanjutt / sufyanfrontend) — ${n} live production projects: education platforms, corporate sites, healthcare and care-home sites, AI interfaces, and web apps built with React & Next.js.`,
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
      "Shifa Care Home website", "care home website developer", "healthcare website Next.js",
    ],
    alternates: { canonical: PAGE },
    openGraph: {
      title: "Projects — Muhammad Sufyan (sufyanjutt) Portfolio",
      description: `${n} live production projects by sufyanjutt — education platforms, corporate sites, care-home & AI interfaces built with React & Next.js.`,
      url: PAGE,
      images: [{ url: `${SITE}/profile.png`, width: 1200, height: 630, alt: "Muhammad Sufyan — Projects Portfolio" }],
    },
  };
}

const projectsBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "Projects", item: PAGE },
  ],
};

/** CollectionPage + ItemList, built from whatever the store actually returned. */
function buildSchemas(production: Project[]) {
  const webPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": PAGE,
    url: PAGE,
    name: "Projects — Muhammad Sufyan (sufyanjutt) Frontend Developer Portfolio",
    description: `${production.length} live production projects by Muhammad Sufyan (sufyanjutt / sufyanfrontend) — education platforms, AI interfaces, corporate sites, care-home websites, and admin dashboards built with React.js and Next.js.`,
    isPartOf: { "@id": SITE },
    author: { "@id": `${SITE}/#person` },
  };
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Muhammad Sufyan Frontend Developer Projects",
    description:
      "Production projects built by Muhammad Sufyan (sufyanjutt / sufyanfrontend) — a Frontend Developer from Lahore, Pakistan.",
    url: PAGE,
    numberOfItems: production.length,
    itemListElement: production.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      url: p.url,
    })),
  };
  return { webPage, itemList };
}

/* ---------------------------- streamed grids ---------------------------- */

async function ProductionGrid() {
  const { projects } = await getProductionProjects();
  const { webPage, itemList } = buildSchemas(projects);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.07}>
            <ProjectCard project={project} tone="primary" badge="featured" priority={i < 3} />
          </Reveal>
        ))}
      </div>
    </>
  );
}

async function PracticeGrid() {
  const { projects } = await getPracticeProjects();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <Reveal key={project.id} delay={i * 0.07}>
          <ProjectCard project={project} tone="accent" badge="practice" />
        </Reveal>
      ))}
    </div>
  );
}

/* --------------------------------- page --------------------------------- */

export default function Projects() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsBreadcrumbSchema) }} />
    <div className="pt-24 pb-20">
      <div className="max-w-6xl 2xl:max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Portfolio</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-surface mb-4">My Projects</h1>
            <p className="text-surface/60 max-w-xl mx-auto">
              Production-ready applications built for real users — education management systems to corporate landing pages.
            </p>
          </div>
        </Reveal>

        <Suspense fallback={<ProjectsGridSkeleton count={6} imageClass="h-52" badge="featured" />}>
          <ProductionGrid />
        </Suspense>
      </div>

      {/* Practice Projects */}
      <div className="max-w-6xl 2xl:max-w-360 mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <Reveal>
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-white/5" aria-hidden="true" />
            <div className="text-center">
              <p className="text-primary font-mono text-xs mb-1">Learning &amp; Practice</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-surface">Practice Websites</h2>
            </div>
            <div className="flex-1 h-px bg-white/5" aria-hidden="true" />
          </div>
        </Reveal>

        <Suspense fallback={<ProjectsGridSkeleton count={3} imageClass="h-52" badge="practice" />}>
          <PracticeGrid />
        </Suspense>
      </div>

      {/* Hire CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <Reveal>
          <div className="bg-card border border-primary/10 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold text-surface mb-3">Want a Website Like These?</h2>
            <p className="text-surface/60 text-sm max-w-md mx-auto mb-6">
              Muhammad Sufyan is available for new React and Next.js projects. Education platforms, corporate sites, dashboards — delivered production-ready.
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { href: "/", label: "Home", desc: "Portfolio overview" },
              { href: "/about", label: "About", desc: "My background" },
              { href: "/services", label: "Services", desc: "What I offer" },
              { href: "/apps", label: "Apps", desc: "Free Android apps" },
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
