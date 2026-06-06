import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { projects, practiceProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse the portfolio of Muhammad Sufyan — education platforms, corporate websites, and web apps built with React and Next.js.",
  alternates: { canonical: "https://sufyan-frontend.vercel.app/projects" },
};

export default function Projects() {
  return (
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
    </div>
  );
}
