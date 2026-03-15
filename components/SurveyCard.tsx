"use client";

import { useState } from "react";
import DataPoint from "./DataPoint";

interface SurveySnapshot {
  survey_id: string;
  synced_at: string;
  response_count: number | null;
  data: Record<string, unknown>;
}

interface SurveyCardProps {
  snapshot: SurveySnapshot;
}

export default function SurveyCard({ snapshot }: SurveyCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const { data, response_count, synced_at } = snapshot;

  const syncDate = new Date(synced_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  function getStr(key: string): string {
    const v = data[key];
    return v != null ? String(v) : "—";
  }

  function getNum(key: string): string {
    const v = Number(data[key]);
    return isNaN(v) ? "—" : v.toLocaleString();
  }

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm">
      {/* Card header */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Employment & Salary Survey
          </h2>
          <p className="text-sm text-slate-500 mt-0.5">
            {response_count ?? 0} responses · updated {syncDate}
          </p>
        </div>

        {/* "Why Google Forms?" tooltip trigger */}
        <div className="relative">
          <button
            onClick={() => setShowTooltip(!showTooltip)}
            className="text-xs text-slate-400 underline decoration-dotted hover:text-slate-600 transition-colors"
          >
            Why Google Forms?
          </button>
          {showTooltip && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowTooltip(false)}
              />
              {/* Tooltip */}
              <div className="absolute right-0 top-6 z-20 w-72 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 shadow-lg text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                <p className="font-medium text-slate-800 dark:text-slate-200 mb-1">
                  Data is collected via Google Forms
                </p>
                <p>
                  Google Forms offers a familiar, trusted interface where respondents
                  know their data is handled by Google — not a startup they&apos;ve
                  never heard of. This reduces friction and increases honest responses,
                  especially for sensitive questions like salary.
                </p>
                <p className="mt-2">
                  Raw responses are never stored on Forin servers. Only aggregated,
                  anonymized statistics (averages, counts) are published here.
                </p>
                <button
                  onClick={() => setShowTooltip(false)}
                  className="mt-3 text-xs text-slate-400 hover:text-slate-600"
                >
                  Close
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Data points grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        <DataPoint
          label="Total responses"
          value={(response_count ?? 0).toLocaleString()}
        />
        <DataPoint
          label="Currently employed"
          value={getStr("pct_employed")}
          unit="%"
          note="of respondents"
        />
        <DataPoint
          label="Most common income range"
          value={getStr("top_income_range")}
          note="gross, JPY/year · optional question"
        />
        <DataPoint
          label="Top industry"
          value={getStr("top_industry")}
        />
        <DataPoint
          label="Most common time in Japan"
          value={getStr("top_time_in_japan")}
        />
        <DataPoint
          label="Salary satisfaction"
          value={getStr("avg_salary_satisfaction")}
          unit="/ 10"
          note="1–10 scale"
        />
      </div>
    </div>
  );
}
