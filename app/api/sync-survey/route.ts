import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase";
import { fetchSheetsSummary } from "@/lib/sheets";

export async function POST(req: NextRequest) {
  // Verify the sync secret to prevent unauthorized triggers
  const authHeader = req.headers.get("authorization");
  const secret = process.env.SYNC_SECRET;

  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const summary = await fetchSheetsSummary();
    const supabase = createServiceClient();

    const { data, error } = await supabase
      .from("survey_snapshots")
      .insert({
        survey_id: "employment_2026_q1",
        response_count: summary.response_count,
        data: summary.data,
      })
      .select("id, synced_at, response_count")
      .single();

    if (error) throw error;

    return NextResponse.json({
      synced_at: data.synced_at,
      response_count: data.response_count,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// Also support GET for Vercel cron (sends Authorization header) and manual browser triggers (?secret=)
export async function GET(req: NextRequest) {
  const secret = process.env.SYNC_SECRET;
  const authHeader = req.headers.get("authorization");
  const { searchParams } = new URL(req.url);
  const queryToken = searchParams.get("secret");

  const validHeader = secret && authHeader === `Bearer ${secret}`;
  const validQuery = secret && queryToken === secret;

  if (!validHeader && !validQuery) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Reuse POST logic
  return POST(
    new NextRequest(req.url, {
      method: "POST",
      headers: { authorization: `Bearer ${secret}` },
    })
  );
}
