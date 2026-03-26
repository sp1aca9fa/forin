# Forin / Japan Foreign Index (JFI)

A data platform aggregating information on foreign residents in Japan — employment, salary, daily life, and consumer behavior. Data comes from two complementary sources: community surveys and publicly available government and research datasets.

## Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js (React) on Vercel |
| Database | PostgreSQL via Supabase |
| Data collection | Google Forms → Google Sheets |
| Email | Resend |

## Data Architecture

Data comes from two layers, both stored in Supabase as the single source of truth:

**Survey data** — individual-level insights that public sources don't capture (personal salary, visa type, job search experience, satisfaction scores).

**Public data** — breadth and statistical context from government and research sources:
- e-Stat API (estat.go.jp)
- Immigration Services Agency (moj.go.jp)
- MHLW wage surveys
- JILPT research (jil.go.jp)
- Tokyodev annual developer survey
- Recruit Works Institute

### Survey pipeline

```
Google Forms → Private Sheet: Tab 1 (raw responses)
                                      ↓
               Private Sheet: Tab 2 (aggregated formulas — COUNTIF/AVERAGE only)
                                      ↓
               Public Sheet: Tab 1 (separate spreadsheet, pulls from Private Tab 2)
                                      ↓
               /api/sync-survey (daily cron)
                                      ↓
               Supabase → survey_snapshots table
                                      ↓
               React frontend
```

**Why two spreadsheets:** Google Sheets doesn't support making individual tabs public — sharing applies to the whole file. The private spreadsheet stays fully private (both tabs). A separate public spreadsheet pulls only the aggregated data from Private Tab 2.

The React frontend queries only Supabase — never Google Sheets directly.

## Pages

- `/` — Landing page with hero, problem statement, and survey CTA
- `/surveys` — Survey results dashboard (data from Supabase)
- `/about` — About the project
- `/contact` — Contact form

## API Routes

- `POST /api/sync-survey` — Reads Google Sheets Tab 2, writes to Supabase `survey_snapshots`
- `POST /api/contact` — Contact form handler (Resend)
- `GET /api/keep-alive` — Keeps Vercel Hobby deployment active

## Setup

### Prerequisites

- Node.js 19+
- A Supabase project
- A Google Sheets document (see `supabase/sheets-summary-formulas.tsv` for Tab 2 formula structure)
- A Resend account

### Environment Variables

Create a `.env.local` file:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Google Sheets
SHEET_ID=

# Sync auth
SYNC_SECRET=

# Email
RESEND_API_KEY=
CONTACT_EMAIL=
```

### Database

Apply the schema to your Supabase project:

```bash
# Via Supabase dashboard SQL editor, run:
supabase/schema.sql
```

### Run locally

```bash
npm install
npm run dev
```

### Deploy

Deployed on Vercel. The `vercel.json` configures two cron jobs:
- `/api/sync-survey` — daily at 9 AM UTC
- `/api/keep-alive` — every 3 days (prevents Supabase free tier auto-pause)
