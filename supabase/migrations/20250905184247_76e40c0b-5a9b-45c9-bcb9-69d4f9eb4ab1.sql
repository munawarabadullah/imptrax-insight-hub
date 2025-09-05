-- Secure admin_users table to prevent exposure of credentials
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_tables WHERE schemaname='public' AND tablename='admin_users'
  ) THEN
    RAISE NOTICE 'Table public.admin_users does not exist, skipping hardening.';
  ELSE
    -- Ensure RLS is enabled
    EXECUTE 'ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY';

    -- Drop any existing broad or legacy policies
    EXECUTE 'DROP POLICY IF EXISTS "Admins can view their own data" ON public.admin_users';
    EXECUTE 'DROP POLICY IF EXISTS "Admins can update their own data" ON public.admin_users';
    EXECUTE 'DROP POLICY IF EXISTS "Allow authenticated all" ON public.admin_users';
    EXECUTE 'DROP POLICY IF EXISTS "authenticated_users_full_access" ON public.admin_users';
    EXECUTE 'DROP POLICY IF EXISTS "Enable public read" ON public.admin_users';

    -- Recreate least-privilege policies scoped to authenticated users only
    EXECUTE $$
      CREATE POLICY "Admins can view their own data"
      ON public.admin_users
      FOR SELECT
      TO authenticated
      USING (auth.uid() = id);
    $$;

    EXECUTE $$
      CREATE POLICY "Admins can update their own data"
      ON public.admin_users
      FOR UPDATE
      TO authenticated
      USING (auth.uid() = id)
      WITH CHECK (auth.uid() = id);
    $$;

    -- Tighten grants: deny anon entirely; allow only SELECT/UPDATE for authenticated (still governed by RLS)
    REVOKE ALL ON TABLE public.admin_users FROM anon, authenticated;
    GRANT SELECT, UPDATE ON public.admin_users TO authenticated;
  END IF;
END $$;