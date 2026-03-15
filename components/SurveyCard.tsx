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
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Employment & Salary Survey
        </h2>
        <p className="text-sm text-slate-500 mt-0.5">
          {response_count ?? 0} responses · updated {syncDate}
        </p>
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
