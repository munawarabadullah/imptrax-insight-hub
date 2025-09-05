
-- Ensure RLS is enabled on keep_alive
ALTER TABLE IF EXISTS public.keep_alive ENABLE ROW LEVEL SECURITY;

-- Create a read-only policy for health checks if it doesn't already exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'keep_alive'
      AND policyname = 'Enable public read'
  ) THEN
    EXECUTE 'CREATE POLICY "Enable public read"
             ON public.keep_alive
             FOR SELECT
             TO anon, authenticated
             USING (true)';
  END IF;
END
$$;

-- Make sure roles are allowed to attempt SELECT (RLS still applies)
REVOKE ALL ON TABLE public.keep_alive FROM anon, authenticated;
GRANT SELECT ON TABLE public.keep_alive TO anon, authenticated;
