"use client";
import { useEffect, useState } from "react";

/**
 * Detects whether the visitor is in Pakistan (show PKR) or international (show USD).
 * Uses the browser timezone/locale — no network call, no permission prompt.
 * Defaults to Pakistan (intl = false) on first render to avoid layout shift for local traffic,
 * then corrects on the client. Visitors can override with the toggle.
 */
export function useRegion() {
  const [intl, setIntl] = useState(false);

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      const lang = (navigator.language || "").toLowerCase();
      const isPakistan = tz === "Asia/Karachi" || lang.endsWith("-pk");
      if (!isPakistan) setIntl(true);
    } catch {
      /* keep default */
    }
  }, []);

  return { intl, setIntl };
}

export function CurrencyToggle({
  intl,
  setIntl,
}: {
  intl: boolean;
  setIntl: (v: boolean) => void;
}) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-card p-1 text-xs font-medium">
      <button
        type="button"
        onClick={() => setIntl(false)}
        aria-pressed={!intl}
        className={`px-3 py-1.5 rounded-full transition-colors ${
          !intl ? "bg-primary text-dark" : "text-surface/60 hover:text-surface"
        }`}
      >
        🇵🇰 PKR
      </button>
      <button
        type="button"
        onClick={() => setIntl(true)}
        aria-pressed={intl}
        className={`px-3 py-1.5 rounded-full transition-colors ${
          intl ? "bg-primary text-dark" : "text-surface/60 hover:text-surface"
        }`}
      >
        🌍 USD
      </button>
    </div>
  );
}
