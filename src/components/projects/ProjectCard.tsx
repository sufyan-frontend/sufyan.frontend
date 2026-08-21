import Image from "next/image";
import type { Project } from "@/lib/projects-source";

/**
 * Production cards use the primary (sky) accent, practice cards the violet one.
 * Keep these two objects in sync with ProjectCardSkeleton so the loading state
 * and the loaded state are the same shape and colour.
 */
const TONE = {
  primary: {
    hoverBorder: "hover:border-primary/20",
    hoverShadow: "hover:shadow-primary/5",
    tag: "bg-primary/10 text-primary",
    link: "text-primary",
  },
  accent: {
    hoverBorder: "hover:border-accent/20",
    hoverShadow: "hover:shadow-accent/5",
    tag: "bg-accent/10 text-accent",
    link: "text-accent",
  },
} as const;

export type ProjectTone = keyof typeof TONE;

export interface ProjectCardProps {
  project: Project;
  tone?: ProjectTone;
  /** Image box height — h-52 on /projects, h-48 in the home teaser. */
  imageClass?: string;
  /** "featured" shows the gold pill top-right, "practice" the violet pill top-left. */
  badge?: "featured" | "practice" | "none";
  priority?: boolean;
  /** The home teaser says "Visit Live"; /projects says "Visit Live Site". */
  linkLabel?: string;
}

export default function ProjectCard({
  project,
  tone = "primary",
  imageClass = "h-52",
  badge = "none",
  priority = false,
  linkLabel = "Visit Live Site",
}: ProjectCardProps) {
  const t = TONE[tone];
  return (
    <article
      className={`bg-card border border-white/5 rounded-2xl overflow-hidden group ${t.hoverBorder} transition-all duration-300 hover:shadow-xl ${t.hoverShadow} h-full flex flex-col`}
    >
      <div className={`relative ${imageClass} overflow-hidden bg-dark`}>
        {project.image && (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            {...(priority ? { priority: true } : { loading: "lazy" as const })}
          />
        )}
        {badge === "featured" && project.featured && (
          <span className="absolute top-3 right-3 bg-accent text-dark text-xs font-bold px-2.5 py-1 rounded-full">
            Featured
          </span>
        )}
        {badge === "practice" && (
          <span className="absolute top-3 left-3 bg-accent/20 text-accent text-xs font-semibold px-2.5 py-1 rounded-full border border-accent/20">
            Practice
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-surface font-semibold text-lg mb-2">{project.title}</h3>
        <p className="text-surface/60 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className={`text-xs ${t.tag} px-2 py-1 rounded-full`}>
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.title} live website`}
          title={`Visit ${project.title} live website`}
          className={`inline-flex items-center gap-2 ${t.link} text-sm font-medium hover:underline`}
        >
          {linkLabel}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}
