import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// Called by Vercel Cron every 3 days to prevent Supabase free tier auto-pause.
// Vercel automatically sends Authorization: Bearer <CRON_SECRET> — no manual secret needed.
export async function GET() {
  const { error } = await supabase
    .from("survey_snapshots")
    .select("id")
    .limit(1);

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, pinged_at: new Date().toISOString() });
}
