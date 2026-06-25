import type { Metadata } from "next";
import Image from "next/image";
import PrintButton from "@/components/cv/PrintButton";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Curriculum Vitae of Muhammad Sufyan — Frontend Developer (React & Next.js) from Lahore, Pakistan with 1.5+ years of production experience.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://sufyan-frontend.vercel.app/cv" },
};

/* ----------------------------- inline icons ----------------------------- */
type IconProps = { className?: string };
const I = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);
const PhoneIcon = (p: IconProps) => (
  <I {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></I>
);
const MailIcon = (p: IconProps) => (
  <I {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></I>
);
const PinIcon = (p: IconProps) => (
  <I {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></I>
);
const LinkedinIcon = (p: IconProps) => (
  <I {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-9h4v1.5" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></I>
);
const GithubIcon = (p: IconProps) => (
  <I {...p}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></I>
);
const UserIcon = (p: IconProps) => (
  <I {...p}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></I>
);
const CapIcon = (p: IconProps) => (
  <I {...p}><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5" /></I>
);
const CodeIcon = (p: IconProps) => (
  <I {...p}><path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" /></I>
);
const GlobeIcon = (p: IconProps) => (
  <I {...p}><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" /></I>
);
const CertIcon = (p: IconProps) => (
  <I {...p}><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></I>
);
const BriefcaseIcon = (p: IconProps) => (
  <I {...p}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></I>
);
const FolderIcon = (p: IconProps) => (
  <I {...p}><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /></I>
);
const TrophyIcon = (p: IconProps) => (
  <I {...p}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></I>
);
const HeartIcon = (p: IconProps) => (
  <I {...p}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></I>
);
const StarIcon = (p: IconProps) => (
  <I {...p}><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" /></I>
);
const Check = (p: IconProps) => (
  <I {...p}><path d="M20 6 9 17l-5-5" /></I>
);
const LinkIcon = (p: IconProps) => (
  <I {...p}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></I>
);

/* ------------------------------- content ------------------------------- */
const phoneDisplay = "+92 322 747 9636";
const phoneRaw = "+923227479636";
const email = "sufyantechsolutions@gmail.com";

const skillGroups = [
  { label: "Languages", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"] },
  { label: "Frameworks & Libraries", items: ["React.js", "Next.js", "React Native", "Vue.js", "Redux"] },
  { label: "Styling", items: ["Tailwind CSS", "Bootstrap"] },
  { label: "Tools & Platforms", items: ["Git & GitHub", "Vercel", "Netlify", "REST APIs"] },
  { label: "Practices", items: ["Responsive Design", "Performance", "Reusable Components"] },
];

const skillBadges = [
  { name: "HTML5", color: "#e34f26" },
  { name: "CSS3", color: "#1572b6" },
  { name: "JavaScript", color: "#f7df1e" },
  { name: "React.js", color: "#61dafb" },
  { name: "Next.js", color: "#0f172a" },
  { name: "Tailwind", color: "#38bdf8" },
  { name: "Bootstrap", color: "#7952b3" },
  { name: "Redux", color: "#764abc" },
  { name: "REST API", color: "#10b981" },
  { name: "Git", color: "#f05032" },
  { name: "Vercel", color: "#0f172a" },
  { name: "TypeScript", color: "#3178c6" },
];

const experience = {
  role: "Frontend Developer (Intern → Junior)",
  company: "Ehya Education",
  location: "Lahore, Pakistan",
  period: "2023 – Present · 1.5+ Years",
  points: [
    "Developed and maintained multiple production education platforms used by real students and faculty.",
    "Converted UI/UX designs into responsive React & Next.js applications with pixel-accurate layouts.",
    "Integrated REST APIs and handled dynamic data rendering across dashboards and portals.",
    "Fixed UI/UX issues and improved page performance and Core Web Vitals.",
    "Collaborated closely with backend and design teams to ship features end to end.",
  ],
};

const projects = [
  { title: "Alif Laila Education Platform", url: "https://aliflaila.app/", desc: "Full education management UI with role-based dashboards and structured, reusable components." },
  { title: "Ehya Education Platform", url: "https://www.ehya.com.pk/", desc: "Complete institutional web platform with responsive UI and modern frontend architecture." },
  { title: "Classmate Portal", url: "https://classmate.ehya.com.pk/", desc: "Student/teacher interface system with a clean, dashboard-based UI design." },
  { title: "TillShop Technologies", url: "https://www.tillshoptechnologies.com/", desc: "Corporate software-house website with a modern landing page and service sections." },
  { title: "Ehsas Next App", url: "https://ehsasnext.vercel.app/", desc: "React-based deployed application with an optimized, component-driven UI." },
  { title: "ANP Engineerings", url: "https://www.anpengineerings.com/", desc: "Business website with a professional corporate layout and responsive design." },
];

const achievements = [
  "Best Instructor Certificate — Ehsas Lab (2024).",
  "Delivered 6+ production web platforms used by real users.",
  "Improved UI performance and Core Web Vitals across live pages.",
  "Continuously upgrading skills through self-learning and real projects.",
];

const strengths = ["Quick Learner", "Problem Solver", "Clean & Reusable Code", "Responsive Design", "Team Collaboration", "Detail Oriented"];
const interests = ["Coding", "Web Development", "UI / UX Design", "Open Source", "Continuous Learning"];
const languages = [
  { name: "English", level: "Professional" },
  { name: "Urdu", level: "Native" },
];
const certifications = ["Best Instructor Certificate — Ehsas Lab (2024)", "Frontend Development — Self-paced & Online Courses"];

/* ----------------------------- sub-components ---------------------------- */
function SidebarHeading({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <h2 className="mb-3 flex items-center gap-2 border-b border-white/15 pb-2 text-[13px] font-bold uppercase tracking-[0.14em] text-[#7cc4ff]">
      <span className="text-[#7cc4ff]">{icon}</span>
      {children}
    </h2>
  );
}

function SectionHeading({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#2563eb] text-white">{icon}</span>
      <h2 className="text-[15px] font-extrabold uppercase tracking-[0.1em] text-[#1e293b]">{children}</h2>
      <span className="ml-1 h-px flex-1 bg-slate-200" />
    </div>
  );
}

/* --------------------------------- page --------------------------------- */
export default function CvPage() {
  const iconSm = "h-4 w-4";
  return (
    <div className="min-h-screen w-full bg-slate-300 px-3 py-8 text-slate-800 print:bg-white print:p-0">
      <PrintButton />

      <article
        className="mx-auto grid max-w-[860px] grid-cols-1 overflow-hidden rounded-xl bg-white shadow-2xl md:grid-cols-[290px_1fr] print:max-w-none print:rounded-none print:shadow-none"
        style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" }}
      >
        {/* ---------------------------- SIDEBAR ---------------------------- */}
        <aside
          className="px-6 py-8 text-slate-100"
          style={{ background: "linear-gradient(180deg,#1f2d40 0%,#16222f 100%)" }}
        >
          <div className="mx-auto mb-6 h-36 w-36 overflow-hidden rounded-full ring-4 ring-white/20">
            <Image
              src="/profile.png"
              alt="Muhammad Sufyan — Frontend Developer"
              width={180}
              height={180}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          <section className="mb-7">
            <SidebarHeading icon={<UserIcon className={iconSm} />}>Contact</SidebarHeading>
            <ul className="space-y-3 text-[12.5px] leading-snug text-slate-200">
              <li className="flex items-start gap-2.5"><PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#7cc4ff]" /><a href={`tel:${phoneRaw}`} className="break-all hover:text-white">{phoneDisplay}</a></li>
              <li className="flex items-start gap-2.5"><MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#7cc4ff]" /><a href={`mailto:${email}`} className="break-all hover:text-white">{email}</a></li>
              <li className="flex items-start gap-2.5"><LinkedinIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#7cc4ff]" /><a href="https://www.linkedin.com/in/sufyan-frontend" className="break-all hover:text-white">linkedin.com/in/sufyan-frontend</a></li>
              <li className="flex items-start gap-2.5"><GithubIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#7cc4ff]" /><a href="https://github.com/sufyan-frontend" className="break-all hover:text-white">github.com/sufyan-frontend</a></li>
              <li className="flex items-start gap-2.5"><PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#7cc4ff]" />Lahore, Pakistan</li>
            </ul>
          </section>

          <section className="mb-7">
            <SidebarHeading icon={<CodeIcon className={iconSm} />}>Technical Skills</SidebarHeading>
            <div className="space-y-3">
              {skillGroups.map((g) => (
                <div key={g.label}>
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-[#7cc4ff]/80">{g.label}</p>
                  <p className="text-[12.5px] leading-relaxed text-slate-200">{g.items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-7">
            <SidebarHeading icon={<GlobeIcon className={iconSm} />}>Languages</SidebarHeading>
            <ul className="space-y-2 text-[12.5px] text-slate-200">
              {languages.map((l) => (
                <li key={l.name} className="flex items-center justify-between">
                  <span>{l.name}</span>
                  <span className="text-[#7cc4ff]">{l.level}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <SidebarHeading icon={<CertIcon className={iconSm} />}>Certifications</SidebarHeading>
            <ul className="space-y-2 text-[12.5px] leading-snug text-slate-200">
              {certifications.map((c) => (
                <li key={c} className="flex items-start gap-2"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#7cc4ff]" />{c}</li>
              ))}
            </ul>
          </section>
        </aside>

        {/* ----------------------------- MAIN ----------------------------- */}
        <main className="px-7 py-8">
          {/* name header */}
          <header className="border-b border-slate-200 pb-5">
            <h1 className="text-3xl font-extrabold uppercase tracking-[0.06em] text-[#1e293b] sm:text-4xl">Muhammad Sufyan</h1>
            <p className="mt-1.5 text-[13px] font-semibold uppercase tracking-[0.22em] text-[#2563eb]">Frontend Developer · React &amp; Next.js</p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-[12.5px] text-slate-600">
              <span className="inline-flex items-center gap-1.5"><PhoneIcon className="h-3.5 w-3.5 text-[#2563eb]" />{phoneDisplay}</span>
              <span className="inline-flex items-center gap-1.5"><MailIcon className="h-3.5 w-3.5 text-[#2563eb]" />{email}</span>
              <span className="inline-flex items-center gap-1.5"><PinIcon className="h-3.5 w-3.5 text-[#2563eb]" />Lahore, Pakistan</span>
            </div>
          </header>

          {/* profile */}
          <section className="mt-6">
            <SectionHeading icon={<UserIcon className={iconSm} />}>Profile</SectionHeading>
            <p className="text-[13px] leading-relaxed text-slate-600">
              Frontend Developer with 1.5+ years of experience building responsive, scalable, and
              production-ready web applications using React and Next.js. Experienced in developing
              real-world platforms for education, software companies, and business solutions. Strong
              focus on UI/UX, performance, and clean, reusable code. Currently working on multiple
              deployed production projects, including education portals, company websites, and
              SaaS-style platforms.
            </p>
          </section>

          {/* experience */}
          <section className="mt-6">
            <SectionHeading icon={<BriefcaseIcon className={iconSm} />}>Work Experience</SectionHeading>
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 className="text-[14px] font-bold text-[#1e293b]">{experience.role}</h3>
              <span className="text-[12px] font-semibold text-[#2563eb]">{experience.period}</span>
            </div>
            <p className="text-[12.5px] font-medium text-slate-500">{experience.company} · {experience.location}</p>
            <ul className="mt-2 space-y-1.5">
              {experience.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-[12.5px] leading-relaxed text-slate-600">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563eb]" />{p}
                </li>
              ))}
            </ul>
          </section>

          {/* skills summary */}
          <section className="mt-6">
            <SectionHeading icon={<CodeIcon className={iconSm} />}>Technical Skills Summary</SectionHeading>
            <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4">
              {skillBadges.map((s) => (
                <div key={s.name} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[11px] font-bold text-white" style={{ backgroundColor: s.color }}>{s.name.charAt(0)}</span>
                  <span className="truncate text-[11.5px] font-medium text-slate-700">{s.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* projects */}
          <section className="mt-6">
            <SectionHeading icon={<FolderIcon className={iconSm} />}>Projects</SectionHeading>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {projects.map((p) => (
                <div key={p.url} className="rounded-lg border border-slate-200 p-3">
                  <a href={p.url} className="flex items-center gap-1.5 text-[13px] font-bold text-[#1e293b] hover:text-[#2563eb]">
                    {p.title}
                    <LinkIcon className="h-3 w-3 text-[#2563eb]" />
                  </a>
                  <p className="mt-1 text-[12px] leading-relaxed text-slate-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* achievements */}
          <section className="mt-6">
            <SectionHeading icon={<TrophyIcon className={iconSm} />}>Achievements</SectionHeading>
            <ul className="space-y-1.5">
              {achievements.map((a) => (
                <li key={a} className="flex items-start gap-2 text-[12.5px] leading-relaxed text-slate-600">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2563eb]" />{a}
                </li>
              ))}
            </ul>
          </section>

          {/* interests + strengths */}
          <section className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <SectionHeading icon={<HeartIcon className={iconSm} />}>Interests</SectionHeading>
              <div className="flex flex-wrap gap-2">
                {interests.map((i) => (
                  <span key={i} className="rounded-full bg-blue-50 px-3 py-1 text-[12px] font-medium text-[#2563eb]">{i}</span>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading icon={<StarIcon className={iconSm} />}>Personal Strengths</SectionHeading>
              <ul className="grid grid-cols-1 gap-1.5">
                {strengths.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-[12.5px] text-slate-600">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563eb]" />{s}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <p className="mt-8 border-t border-slate-200 pt-4 text-center text-[12.5px] italic text-slate-500">
            &ldquo;Always eager to learn, build, and grow.&rdquo;
          </p>
        </main>
      </article>
    </div>
  );
}
