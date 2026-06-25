import type { Metadata } from "next";
import Image from "next/image";
import PrintButton from "@/components/cv/PrintButton";

const SITE = "https://sufyan-frontend.vercel.app";
const CV_URL = `${SITE}/cv`;
const cvDescription =
  "Online CV / resume of Muhammad Sufyan — Frontend Developer from Lahore, Pakistan with 1.5+ years building production-ready React & Next.js applications. View experience, technical skills, projects, certifications, and contact details, or download the CV as a one-page PDF.";

export const metadata: Metadata = {
  title: { absolute: "CV — Muhammad Sufyan | Frontend Developer (React & Next.js)" },
  description: cvDescription,
  keywords: [
    "Muhammad Sufyan CV",
    "Muhammad Sufyan resume",
    "Frontend Developer CV",
    "Frontend Developer resume Pakistan",
    "React Developer resume",
    "Next.js Developer CV",
    "Sufyan frontend resume",
    "hire frontend developer Lahore",
    "React Next.js developer Lahore",
    "download developer CV PDF",
  ],
  authors: [{ name: "Muhammad Sufyan", url: SITE }],
  creator: "Muhammad Sufyan",
  publisher: "Muhammad Sufyan",
  alternates: { canonical: CV_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    firstName: "Muhammad",
    lastName: "Sufyan",
    username: "sufyanfrontend",
    url: CV_URL,
    siteName: "Muhammad Sufyan — Frontend Developer",
    title: "CV — Muhammad Sufyan | Frontend Developer (React & Next.js)",
    description: cvDescription,
    locale: "en_US",
    images: [{ url: "/profile.png", width: 400, height: 400, alt: "Muhammad Sufyan — Frontend Developer in Lahore, Pakistan" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sufyanfrontend",
    creator: "@sufyanfrontend",
    title: "CV — Muhammad Sufyan | Frontend Developer",
    description: cvDescription,
    images: ["/profile.png"],
  },
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
  <I {...p}><path d="M7 17 17 7" /><path d="M7 7h10v10" /></I>
);

/* ------------------------------- content ------------------------------- */
const phoneDisplay = "+92 322 747 9636";
const phoneRaw = "+923227479636";
const email = "sufyantechsolutions@gmail.com";

const skillGroups = [
  { label: "Languages", items: ["HTML5", "CSS3", "JavaScript", "TypeScript"] },
  { label: "Frameworks & Libraries", items: ["React.js", "Next.js", "React Native", "Redux"] },
  { label: "Styling", items: ["Tailwind CSS", "Bootstrap"] },
  { label: "Tools & Platforms", items: ["Git & GitHub", "Vercel", "Netlify", "REST APIs"] },
  { label: "Practices", items: ["Responsive", "Performance", "Reusable Components"] },
];

const skillBadges = [
  { name: "HTML5", color: "#e34f26" },
  { name: "CSS3", color: "#1572b6" },
  { name: "JavaScript", color: "#e6b800" },
  { name: "React.js", color: "#0ea5b7" },
  { name: "Next.js", color: "#0f172a" },
  { name: "Tailwind", color: "#0ea5e9" },
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
  { name: "English", level: "Professional", dots: 4 },
  { name: "Urdu", level: "Native", dots: 5 },
];
const certifications = ["Best Instructor Certificate — Ehsas Lab (2024)", "Frontend Development — Self-paced & Online Courses"];

/* ----------------------- structured data (JSON-LD) ----------------------- */
const cvSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${CV_URL}#profilepage`,
      url: CV_URL,
      name: "CV — Muhammad Sufyan | Frontend Developer",
      description: cvDescription,
      inLanguage: "en",
      dateModified: "2026-06-25",
      isPartOf: { "@type": "WebSite", url: SITE, name: "Muhammad Sufyan — Frontend Developer" },
      primaryImageOfPage: { "@type": "ImageObject", url: `${SITE}/profile.png`, width: 400, height: 400 },
      mainEntity: { "@id": `${SITE}/#person` },
      significantLink: projects.map((p) => p.url),
      breadcrumb: { "@id": `${CV_URL}#breadcrumb` },
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#person`,
      name: "Muhammad Sufyan",
      alternateName: ["sufyanjutt", "sufyanfrontend", "Sufyan Frontend"],
      jobTitle: "Frontend Developer",
      description:
        "Frontend Developer from Lahore, Pakistan with 1.5+ years of experience building responsive, production-ready React and Next.js web applications for education platforms, software companies, and business solutions.",
      url: SITE,
      mainEntityOfPage: CV_URL,
      image: { "@type": "ImageObject", url: `${SITE}/profile.png`, width: 400, height: 400 },
      email: `mailto:${email}`,
      telephone: phoneRaw,
      address: { "@type": "PostalAddress", addressLocality: "Lahore", addressRegion: "Punjab", addressCountry: "PK" },
      nationality: { "@type": "Country", name: "Pakistan" },
      knowsLanguage: languages.map((l) => l.name),
      knowsAbout: Array.from(new Set(skillGroups.flatMap((g) => g.items))),
      hasOccupation: {
        "@type": "Occupation",
        name: "Frontend Developer",
        occupationLocation: { "@type": "City", name: "Lahore" },
        skills: skillGroups.flatMap((g) => g.items).join(", "),
        description: experience.points.join(" "),
      },
      worksFor: {
        "@type": "Organization",
        name: experience.company,
        address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
      },
      alumniOf: { "@type": "Organization", name: "Ehsas Lab", url: "https://ehsaslab.com" },
      award: "Best Instructor Certificate — Ehsas Lab 2024",
      sameAs: [
        "https://github.com/sufyan-frontend",
        "https://www.linkedin.com/in/sufyan-frontend",
        "https://peerlist.io/sufyan",
        SITE,
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${CV_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "CV", item: CV_URL },
      ],
    },
  ],
};

/* ----------------------------- sub-components ---------------------------- */
function SidebarHeading({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <h2 className="mb-3.5 flex items-center gap-2.5 text-[12.5px] font-bold uppercase tracking-[0.16em] text-white">
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-[#7cc4ff] ring-1 ring-white/15">{icon}</span>
      {children}
    </h2>
  );
}

function SectionHeading({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="mb-3.5 flex items-center gap-3">
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white shadow-sm"
        style={{ background: "linear-gradient(135deg,#3b82f6,#2563eb)" }}
      >
        {icon}
      </span>
      <h2 className="text-[15px] font-extrabold uppercase tracking-[0.12em] text-[#1e293b]">{children}</h2>
      <span className="ml-1 h-[3px] flex-1 rounded-full bg-gradient-to-r from-blue-200 to-transparent" />
    </div>
  );
}

/* --------------------------------- page --------------------------------- */
export default function CvPage() {
  const iconSm = "h-4 w-4";
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 px-3 py-6 text-slate-800 print:block print:min-h-0 print:bg-white print:p-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cvSchema) }}
      />
      <PrintButton />

      {/* Print/PDF rules: force exact colours (sidebar gradient, chips, badges),
          keep the two-column layout, full-bleed A4, and avoid splitting sections. */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media print {
              @page { size: A4 portrait; margin: 0; }
              html, body { background: #ffffff !important; margin: 0 !important; }
              body * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
              }
              /* Scale the whole sheet to fit a single A4 page (measured: natural
                 height needs ~0.64 zoom). Width 1240px × 0.64 ≈ 794px = A4 width,
                 columns kept at the on-screen 300:580 ratio so proportions match,
                 and zoom reflows height in Chromium so pagination stays correct. */
              #cv-sheet {
                width: 1240px !important;
                max-width: 1240px !important;
                zoom: 0.64;
                grid-template-columns: 34.0909% 65.9091% !important;
                box-shadow: none !important;
              }
              #cv-sheet a { text-decoration: none !important; }
            }
          `,
        }}
      />

      <article
        id="cv-sheet"
        className="mx-auto grid max-w-[880px] grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-[0_25px_70px_-15px_rgba(15,23,42,0.45)] ring-1 ring-black/5 md:grid-cols-[300px_1fr] print:max-w-none print:rounded-none print:shadow-none print:ring-0"
        style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" }}
      >
        {/* ---------------------------- SIDEBAR ---------------------------- */}
        <aside
          className="relative overflow-hidden px-6 py-8 text-slate-100"
          style={{ background: "linear-gradient(160deg,#22344a 0%,#1a2a3c 45%,#13202e 100%)" }}
        >
          {/* decorative glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#2563eb]/20 blur-3xl print:hidden" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-20 -left-12 h-52 w-52 rounded-full bg-[#7cc4ff]/10 blur-3xl print:hidden" aria-hidden="true" />

          <div className="relative">
            {/* photo */}
            <div className="mx-auto mb-6 w-fit">
              <div className="rounded-full bg-gradient-to-tr from-[#2563eb] via-[#38bdf8] to-[#7cc4ff] p-[3px] shadow-xl shadow-blue-900/40">
                <div className="overflow-hidden rounded-full bg-[#13202e] p-1">
                  <Image
                    src="/profile.png"
                    alt="Muhammad Sufyan — Frontend Developer"
                    width={180}
                    height={180}
                    priority
                    className="h-32 w-32 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

            <section className="mb-6">
              <SidebarHeading icon={<UserIcon className={iconSm} />}>Contact</SidebarHeading>
              <ul className="space-y-3 text-[12.5px] leading-snug text-slate-200">
                {[
                  { icon: <PhoneIcon className="h-3.5 w-3.5" />, text: phoneDisplay, href: `tel:${phoneRaw}` },
                  { icon: <MailIcon className="h-3.5 w-3.5" />, text: email, href: `mailto:${email}` },
                  { icon: <LinkedinIcon className="h-3.5 w-3.5" />, text: "linkedin.com/in/sufyan-frontend", href: "https://www.linkedin.com/in/sufyan-frontend" },
                  { icon: <GithubIcon className="h-3.5 w-3.5" />, text: "github.com/sufyan-frontend", href: "https://github.com/sufyan-frontend" },
                  { icon: <PinIcon className="h-3.5 w-3.5" />, text: "Lahore, Pakistan", href: undefined },
                ].map((c, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#7cc4ff] ring-1 ring-white/10">{c.icon}</span>
                    {c.href ? <a href={c.href} className="break-all transition-colors hover:text-white">{c.text}</a> : <span className="break-all">{c.text}</span>}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-6">
              <SidebarHeading icon={<CodeIcon className={iconSm} />}>Technical Skills</SidebarHeading>
              <div className="space-y-3.5">
                {skillGroups.map((g) => (
                  <div key={g.label}>
                    <p className="mb-1.5 text-[10.5px] font-semibold uppercase tracking-wider text-[#7cc4ff]">{g.label}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {g.items.map((it) => (
                        <span key={it} className="rounded-md bg-white/10 px-2 py-1 text-[11px] font-medium text-slate-100 ring-1 ring-white/10">{it}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-6">
              <SidebarHeading icon={<GlobeIcon className={iconSm} />}>Languages</SidebarHeading>
              <ul className="space-y-2.5 text-[12.5px] text-slate-200">
                {languages.map((l) => (
                  <li key={l.name}>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="font-medium">{l.name}</span>
                      <span className="text-[11px] text-[#7cc4ff]">{l.level}</span>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={`h-1.5 flex-1 rounded-full ${i < l.dots ? "bg-[#7cc4ff]" : "bg-white/15"}`} />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <SidebarHeading icon={<CertIcon className={iconSm} />}>Certifications</SidebarHeading>
              <ul className="space-y-2.5 text-[12.5px] leading-snug text-slate-200">
                {certifications.map((c) => (
                  <li key={c} className="flex items-start gap-2"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#7cc4ff]" />{c}</li>
                ))}
              </ul>
            </section>
          </div>
        </aside>

        {/* ----------------------------- MAIN ----------------------------- */}
        <div className="relative px-7 py-7">
          {/* name header */}
          <header className="relative pb-5">
            <span className="absolute left-0 top-1 hidden h-14 w-1.5 rounded-full bg-gradient-to-b from-[#3b82f6] to-[#2563eb] sm:block" aria-hidden="true" />
            <div className="sm:pl-5">
              <h1 className="text-[2rem] font-extrabold uppercase leading-none tracking-[0.05em] text-[#1e293b] sm:text-[2.5rem]">
                Muhammad <span className="text-[#2563eb]">Sufyan</span>
              </h1>
              <p className="mt-2 text-[12.5px] font-semibold uppercase tracking-[0.28em] text-[#2563eb]">Frontend Developer · React &amp; Next.js</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  { icon: <PhoneIcon className="h-3.5 w-3.5" />, text: phoneDisplay },
                  { icon: <MailIcon className="h-3.5 w-3.5" />, text: email },
                  { icon: <PinIcon className="h-3.5 w-3.5" />, text: "Lahore, Pakistan" },
                ].map((c, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-[12px] font-medium text-slate-600">
                    <span className="text-[#2563eb]">{c.icon}</span>{c.text}
                  </span>
                ))}
              </div>
            </div>
          </header>

          <div className="h-px w-full bg-gradient-to-r from-blue-200 via-slate-200 to-transparent" />

          {/* profile */}
          <section className="mt-6">
            <SectionHeading icon={<UserIcon className={iconSm} />}>Profile</SectionHeading>
            <p className="rounded-xl bg-slate-50 p-4 text-[13px] leading-relaxed text-slate-600 ring-1 ring-slate-100">
              Frontend Developer with 1.5+ years of experience building responsive, scalable, and
              production-ready web applications using React and Next.js. Experienced in developing
              real-world platforms for education, software companies, and business solutions. Strong
              focus on UI/UX, performance, and clean, reusable code — currently shipping multiple
              deployed production projects including education portals, company websites, and
              SaaS-style platforms.
            </p>
          </section>

          {/* experience */}
          <section className="mt-5">
            <SectionHeading icon={<BriefcaseIcon className={iconSm} />}>Work Experience</SectionHeading>
            <div className="relative pl-6">
              <span className="absolute left-[7px] top-2 h-[calc(100%-0.5rem)] w-px bg-slate-200" aria-hidden="true" />
              <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#2563eb] shadow ring-2 ring-blue-200" aria-hidden="true" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="text-[14.5px] font-bold text-[#1e293b]">{experience.role}</h3>
                <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[11.5px] font-semibold text-[#2563eb]">{experience.period}</span>
              </div>
              <p className="text-[12.5px] font-medium text-slate-500">{experience.company} · {experience.location}</p>
              <ul className="mt-2.5 space-y-1.5">
                {experience.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-[12.5px] leading-relaxed text-slate-600">
                    <Check className="mt-[3px] h-3.5 w-3.5 shrink-0 text-[#2563eb]" />{p}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* skills summary */}
          <section className="mt-5">
            <SectionHeading icon={<CodeIcon className={iconSm} />}>Technical Skills Summary</SectionHeading>
            <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4">
              {skillBadges.map((s) => (
                <div key={s.name} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-2 shadow-sm transition-shadow hover:shadow-md">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[11px] font-bold text-white" style={{ backgroundColor: s.color }}>{s.name.charAt(0)}</span>
                  <span className="truncate text-[11.5px] font-medium text-slate-700">{s.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* projects */}
          <section className="mt-5">
            <SectionHeading icon={<FolderIcon className={iconSm} />}>Projects</SectionHeading>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {projects.map((p) => (
                <a
                  key={p.url}
                  href={p.url}
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-3.5 pl-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                >
                  <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#3b82f6] to-[#2563eb]" aria-hidden="true" />
                  <div className="flex items-center gap-1.5 text-[13px] font-bold text-[#1e293b] group-hover:text-[#2563eb]">
                    {p.title}
                    <LinkIcon className="h-3 w-3 text-[#2563eb] opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="mt-1 text-[12px] leading-relaxed text-slate-600">{p.desc}</p>
                </a>
              ))}
            </div>
          </section>

          {/* achievements */}
          <section className="mt-5">
            <SectionHeading icon={<TrophyIcon className={iconSm} />}>Achievements</SectionHeading>
            <ul className="grid gap-2 sm:grid-cols-2">
              {achievements.map((a) => (
                <li key={a} className="flex items-start gap-2 rounded-lg bg-slate-50 px-3 py-2 text-[12.5px] leading-relaxed text-slate-600 ring-1 ring-slate-100">
                  <TrophyIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#f59e0b]" />{a}
                </li>
              ))}
            </ul>
          </section>

          {/* interests + strengths */}
          <section className="mt-5 grid gap-6 sm:grid-cols-2">
            <div>
              <SectionHeading icon={<HeartIcon className={iconSm} />}>Interests</SectionHeading>
              <div className="flex flex-wrap gap-2">
                {interests.map((i) => (
                  <span key={i} className="rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-1 text-[12px] font-medium text-[#2563eb] ring-1 ring-blue-100">{i}</span>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading icon={<StarIcon className={iconSm} />}>Strengths</SectionHeading>
              <ul className="grid grid-cols-1 gap-1.5">
                {strengths.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-[12.5px] text-slate-600">
                    <StarIcon className="h-3.5 w-3.5 shrink-0 text-[#f59e0b]" />{s}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <p className="mt-7 rounded-xl bg-gradient-to-r from-[#22344a] to-[#13202e] px-5 py-3 text-center text-[12.5px] font-medium italic tracking-wide text-slate-100">
            &ldquo;Always eager to learn, build, and grow.&rdquo;
          </p>
        </div>
      </article>
    </div>
  );
}
