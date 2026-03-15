import { supabase } from "@/lib/supabase";
import SurveyCard from "@/components/SurveyCard";
import Link from "next/link";

// Revalidate every hour so data stays reasonably fresh without hammering Supabase
export const revalidate = 3600;

async function getLatestSnapshot() {
  const { data, error } = await supabase
    .from("survey_snapshots")
    .select("*")
    .order("synced_at", { ascending: false })
    .limit(1)
    .single();

  if (error) {
    // No rows or connection issue — return null for empty state
    return null;
  }
  return data;
}

export default async function DataPage() {
  const snapshot = await getLatestSnapshot();

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Survey data</h1>
        <p className="text-slate-500 text-sm">
          Aggregated from community responses. No individual data is stored or
          published.
        </p>
      </div>

      {snapshot ? (
        <div className="flex flex-col gap-6">
          <SurveyCard snapshot={snapshot} />
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
      <p className="text-slate-500 mb-2">No data synced yet.</p>
      <p className="text-sm text-slate-400 mb-6">
        Once the first survey sync runs, aggregated stats will appear here.
      </p>
      <Link
        href="/"
        className="text-sm text-slate-600 underline decoration-dotted hover:text-slate-900"
      >
        ← Back to home
      </Link>
    </div>
  );
}
