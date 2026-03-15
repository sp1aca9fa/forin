import { supabase } from "@/lib/supabase";
import Link from "next/link";
import WhyGoogleForms from "./WhyGoogleForms";

export const revalidate = 3600;

async function getLatestSnapshot() {
  const { data } = await supabase
    .from("survey_snapshots")
    .select("response_count, synced_at")
    .order("synced_at", { ascending: false })
    .limit(1)
    .single();
  return data;
}

interface SurveyItem {
  id: string;
  title: string;
  description: string;
  topics: string[];
  status: "active" | "coming_soon";
  formUrl?: string;
  dataPath?: string;
  responseCount?: number | null;
  updatedAt?: string | null;
}

export default async function SurveysPage() {
  const snapshot = await getLatestSnapshot();

  const surveys: SurveyItem[] = [
    {
      id: "employment-salary",
      title: "Employment & Salary Survey",
      description:
        "Salaries, visa types, industries, job search experience, and career satisfaction for foreign workers in Japan.",
      topics: ["Salary", "Employment", "Visa", "Job search", "Career"],
      status: "active",
      formUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSej1g5P-Pimd_wOTOm_HnJQjPprFXVsB5fGq3Tki5vN6k-1hg/viewform?usp=dialog",
      dataPath: "/data",
      responseCount: snapshot?.response_count ?? null,
      updatedAt: snapshot?.synced_at ?? null,
    },
    {
      id: "daily-life",
      title: "Daily Life Survey",
      description:
        "Housing costs, commute times, neighborhood preferences, access to services, and quality of life as a foreigner in Japan.",
      topics: ["Housing", "Commute", "Services", "Quality of life"],
      status: "coming_soon",
    },
    {
      id: "consumer-behavior",
      title: "Consumer Behavior Survey",
      description:
        "Spending habits, preferred services, shopping behavior, and unmet needs among Japan's foreign resident population.",
      topics: ["Spending", "Shopping", "Services", "Lifestyle"],
      status: "coming_soon",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          Surveys
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-2xl mb-2">
          Community-contributed surveys on life as a foreigner in Japan. Each
          survey covers a different aspect of the foreign resident experience.
          All responses are anonymous and collected through Google Forms.
        </p>
        <WhyGoogleForms />
      </div>

      <div className="flex flex-col gap-4">
        {surveys.map((survey) => (
          <SurveyRow key={survey.id} survey={survey} />
        ))}
      </div>

      {/* Suggest a survey */}
      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Don&apos;t see a topic that matters to you?
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Suggest a survey — we read every message.
          </p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 rounded-full border border-slate-300 dark:border-slate-600 px-5 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-slate-500 dark:hover:border-slate-400 transition-colors"
        >
          Get in touch →
        </Link>
      </div>
    </div>
  );
}

function SurveyRow({ survey }: { survey: SurveyItem }) {
  const syncDate = survey.updatedAt
    ? new Date(survey.updatedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  const isActive = survey.status === "active";

  return (
    <div
      className={`rounded-xl border px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4 ${
        isActive
          ? "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
          : "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 opacity-60"
      }`}
    >
      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
            {survey.title}
          </h2>
          {isActive ? (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400">
              Active
            </span>
          ) : (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
              Coming soon
            </span>
          )}
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-2.5">
          {survey.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {survey.topics.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      {isActive && (survey.responseCount != null || syncDate) && (
        <div className="text-sm text-slate-500 dark:text-slate-400 shrink-0 sm:text-right">
          {survey.responseCount != null && (
            <p className="font-medium text-slate-700 dark:text-slate-300">
              {survey.responseCount} responses
            </p>
          )}
          {syncDate && <p>Updated {syncDate}</p>}
        </div>
      )}

      {/* Actions */}
      {isActive && (
        <div className="flex gap-2 shrink-0">
          {survey.dataPath && (
            <Link
              href={survey.dataPath}
              className="text-sm px-4 py-2 rounded-full border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-slate-500 dark:hover:border-slate-400 transition-colors"
            >
              View data
            </Link>
          )}
          {survey.formUrl && (
            <a
              href={survey.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-300 transition-colors"
            >
              Take survey →
            </a>
          )}
        </div>
      )}
    </div>
  );
}
