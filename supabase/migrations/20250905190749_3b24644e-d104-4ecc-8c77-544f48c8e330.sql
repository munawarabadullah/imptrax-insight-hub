-- Tighten access on lead_change_log: remove broad authenticated SELECT access
-- and ensure privileged access policy is present

-- Ensure RLS is enabled (idempotent)
ALTER TABLE IF EXISTS public.lead_change_log ENABLE ROW LEVEL SECURITY;

-- Drop the overly broad policy if it exists
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'lead_change_log'
      AND policyname = 'Authenticated users can view change logs'
  ) THEN
    EXECUTE 'DROP POLICY "Authenticated users can view change logs" ON public.lead_change_log';
  END IF;
END
$$;

-- Ensure the privileged roles policy exists (Director+)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'lead_change_log'
      AND policyname = 'Privileged roles can view lead history'
  ) THEN
    EXECUTE 'CREATE POLICY "Privileged roles can view lead history"
             ON public.lead_change_log
             FOR SELECT
             USING (has_permission(''Director'', auth.uid()))';
  END IF;
END
$$;