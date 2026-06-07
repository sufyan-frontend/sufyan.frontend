import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Reveal from "@/components/Reveal";
import { projects, skills, experience, testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Muhammad Sufyan | Frontend Developer in Lahore",
  description:
    "Muhammad Sufyan — Frontend Developer with 1.5+ years building React & Next.js apps. Based in Lahore, Pakistan. Open to work.",
  alternates: { canonical: "https://sufyan-frontend.vercel.app" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Sufyan",
  jobTitle: "Frontend Developer",
  email: "sufyantechsolutions@gmail.com",
  telephone: "+923438640594",
  url: "https://sufyan-frontend.vercel.app",
  address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
  sameAs: ["https://github.com/sufyan-frontend", "https://www.linkedin.com/in/sufyan-frontend"],
  knowsAbout: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "Frontend Development"],
};

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection />

      {/* Featured Projects */}
      <section className="py-24 bg-card/30" aria-labelledby="projects-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-primary font-mono text-sm mb-2">Portfolio</p>
              <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold text-surface mb-4">
                Featured Projects
              </h2>
              <p className="text-surface/60 max-w-xl mx-auto">
                Production-ready applications built for education, corporate, and software clients.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.1}>
                <article className="bg-card border border-white/5 rounded-2xl overflow-hidden group hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-dark">
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-surface font-semibold text-lg mb-2">{project.title}</h3>
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
                      Visit Live
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border border-primary/30 text-primary font-medium px-6 py-3 rounded-xl hover:bg-primary/10 transition-all"
              >
                View All Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24" aria-labelledby="skills-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-primary font-mono text-sm mb-2">Expertise</p>
              <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold text-surface">
                Technical Skills
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <Reveal key={skill.name} delay={i * 0.04}>
                <div className="bg-card border border-white/5 rounded-xl p-4 text-center hover:border-primary/20 transition-all group">
                  <p className="text-surface group-hover:text-primary transition-colors font-medium text-sm mb-2">
                    {skill.name}
                  </p>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-primary to-accent"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24" aria-labelledby="experience-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-primary font-mono text-sm mb-2">Career</p>
              <h2 id="experience-heading" className="text-3xl sm:text-4xl font-bold text-surface">
                Work Experience
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experience.map((job, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className="bg-card border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 h-full flex flex-col">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="text-xs font-mono bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {job.period}
                    </span>
                    <span className="text-surface/40 text-xs">{job.location}</span>
                  </div>
                  <h3 className="text-surface font-bold text-lg mb-1">{job.role}</h3>
                  {job.url ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 mb-4"
                    >
                      {job.company}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <p className="text-primary text-sm font-medium mb-4">{job.company}</p>
                  )}
                  <ul className="space-y-2 flex-1">
                    {job.highlights.slice(0, 4).map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-surface/60 text-sm">
                        <span className="text-primary mt-0.5 shrink-0" aria-hidden="true">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25}>
            <div className="text-center mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-primary/30 text-primary font-medium px-6 py-3 rounded-xl hover:bg-primary/10 transition-all"
              >
                View Full Experience
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card/30" aria-labelledby="testimonials-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-primary font-mono text-sm mb-2">Feedback</p>
              <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold text-surface">
                What People Say
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <figure className="bg-card border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all h-full flex flex-col">
                  <svg className="w-8 h-8 text-primary/30 mb-4 flex-shrink-0" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <blockquote className="text-surface/70 text-sm leading-relaxed flex-1">
                    <p>{t.text}</p>
                  </blockquote>
                  <figcaption className="mt-4 pt-4 border-t border-white/5">
                    <strong className="text-surface text-sm font-semibold block">{t.name}</strong>
                    <span className="text-surface/50 text-xs">
                      {t.role}, {t.company}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-primary font-mono text-sm mb-4">Let&apos;s Collaborate</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-surface mb-6">
              Ready to build something great?
            </h2>
            <p className="text-surface/60 text-lg mb-8 leading-relaxed">
              I&apos;m open to new opportunities — whether you have a project in mind or just want to say hi, my inbox is open.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-dark font-semibold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 text-lg"
            >
              Get In Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
