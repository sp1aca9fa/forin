-- Run this in the Supabase SQL editor to set up the database schema.

-- Aggregated stats synced from Google Sheets Tab 2
CREATE TABLE survey_snapshots (
  id             uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  survey_id      text NOT NULL,          -- e.g. 'employment_2026_q1'
  synced_at      timestamptz DEFAULT now(),
  response_count integer,
  data           jsonb NOT NULL          -- all aggregated stats as a flexible blob
);

-- Stats from government and external public sources
CREATE TABLE public_data (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  source      text NOT NULL,             -- 'estat', 'mhlw', 'immigration_agency', etc.
  category    text NOT NULL,             -- 'salary', 'employment', 'population', etc.
  year        integer,
  label       text NOT NULL,
  value       numeric,
  unit        text,
  metadata    jsonb,
  imported_at timestamptz DEFAULT now()
);

-- Row Level Security
ALTER TABLE survey_snapshots ENABLE ROW LEVEL SECURITY;
ALTER TABLE public_data ENABLE ROW LEVEL SECURITY;

-- Anyone can read; only the service role can write
CREATE POLICY "Public read access" ON survey_snapshots
  FOR SELECT USING (true);

CREATE POLICY "Public read access" ON public_data
  FOR SELECT USING (true);

-- INSERT/UPDATE/DELETE are restricted to service role by default when RLS is enabled
-- and no matching policy exists for those operations.
