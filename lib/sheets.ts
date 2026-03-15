export interface SheetsSummary {
  response_count: number;
  data: Record<string, unknown>;
}

/**
 * Fetches aggregated stats from the public Summary tab of the Google Sheet.
 * No API key required — works as long as the spreadsheet is set to
 * "Anyone with the link can view". Raw responses are never fetched.
 */
export async function fetchSheetsSummary(): Promise<SheetsSummary> {
  const sheetId = process.env.SHEET_ID;
  if (!sheetId) throw new Error("SHEET_ID must be set");

  // Public CSV export — no API key needed for view-only sheets
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=Summary`;

  const res = await fetch(url, { next: { revalidate: 0 } });
  if (!res.ok) {
    throw new Error(`Google Sheets fetch error: ${res.status} ${res.statusText}`);
  }

  const csv = await res.text();

  // Parse key-value CSV: each row is "key","value"
  const parsed: Record<string, unknown> = {};
  let responseCount = 0;

  for (const line of csv.split("\n")) {
    // Strip surrounding quotes and split on first comma
    const match = line.match(/^"?([^",]+)"?,(.+)$/);
    if (!match) continue;
    const key = match[1].trim();
    const raw = match[2].replace(/^"|"$/g, "").trim();
    const numeric = Number(raw);
    parsed[key] = isNaN(numeric) || raw === "" ? raw : numeric;
    if (key === "response_count") {
      responseCount = Number(raw) || 0;
    }
  }

  return { response_count: responseCount, data: parsed };
}
