"use client";
import { useRef, useEffect } from "react";

export default function SkillBar({ level }: { level: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.style.setProperty("--skill-level", `${level}%`);
  }, [level]);

  return (
    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
      <div
        ref={ref}
        className="h-full rounded-full bg-linear-to-r from-primary to-accent skill-bar"
      />
    </div>
  );
}
