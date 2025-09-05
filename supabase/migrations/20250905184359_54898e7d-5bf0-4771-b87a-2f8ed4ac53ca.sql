-- Harden admin_users RLS and privileges
ALTER TABLE IF EXISTS public.admin_users ENABLE ROW LEVEL SECURITY;

-- Remove any permissive/legacy policies
DROP POLICY IF EXISTS "Admins can view their own data" ON public.admin_users;
DROP POLICY IF EXISTS "Admins can update their own data" ON public.admin_users;
DROP POLICY IF EXISTS "Allow authenticated all" ON public.admin_users;
DROP POLICY IF EXISTS "authenticated_users_full_access" ON public.admin_users;
DROP POLICY IF EXISTS "Enable public read" ON public.admin_users;

-- Recreate least-privilege policies scoped to authenticated only
CREATE POLICY "Admins can view their own data"
ON public.admin_users
FOR SELECT
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Admins can update their own data"
ON public.admin_users
FOR UPDATE
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- Tighten table grants: deny anon entirely; allow only SELECT/UPDATE for authenticated (RLS still enforced)
REVOKE ALL ON TABLE public.admin_users FROM anon, authenticated;
GRANT SELECT, UPDATE ON public.admin_users TO authenticated;