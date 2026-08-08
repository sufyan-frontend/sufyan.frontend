import { siTailwindcss, siMongodb, siVercel, siFirebase } from "simple-icons";

// Brand path data comes from `simple-icons` so the marks are the real logos
// rather than hand-drawn approximations. This renders inside a server
// component, so none of the icon data reaches the client bundle.
// Vercel's brand hex is #000000, which is invisible on a dark background, so
// it gets an explicit light override.
const LOGOS = [
  { icon: siVercel, label: "Vercel", color: "#FFFFFF" },
  { icon: siTailwindcss, label: "Tailwind CSS", color: `#${siTailwindcss.hex}` },
  { icon: siMongodb, label: "MongoDB", color: `#${siMongodb.hex}` },
  { icon: siFirebase, label: "Firebase", color: `#${siFirebase.hex}` },
];

export default function TechLogos() {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      <span className="text-surface/35 text-xs whitespace-nowrap">Trusted by</span>
      {LOGOS.map(({ icon, label, color }) => (
        <span key={label} className="inline-flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 shrink-0"
            fill={color}
            aria-hidden="true"
          >
            <path d={icon.path} />
          </svg>
          <span className="text-surface/60 text-xs font-medium whitespace-nowrap">
            {label}
          </span>
        </span>
      ))}
    </div>
  );
}
