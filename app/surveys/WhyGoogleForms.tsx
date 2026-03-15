"use client";

import { useState } from "react";

export default function WhyGoogleForms() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="text-xs text-slate-400 underline decoration-dotted hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
      >
        Why Google Forms?
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-6 z-20 w-72 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 shadow-lg text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            <p className="font-medium text-slate-800 dark:text-slate-200 mb-1">
              Data is collected via Google Forms
            </p>
            <p>
              Google Forms offers a familiar, trusted interface where
              respondents know their data is handled by Google — not a startup
              they&apos;ve never heard of. This reduces friction and increases
              honest responses, especially for sensitive questions like salary.
            </p>
            <p className="mt-2">
              Raw responses are never stored on Forin servers. Only aggregated,
              anonymized statistics (averages, counts) are published here.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="mt-3 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            >
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
}
