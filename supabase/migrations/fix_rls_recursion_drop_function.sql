-- Drop existing function and fix RLS recursion
-- This migration drops the existing function and recreates everything cleanly

-- Drop existing function first
DROP FUNCTION IF EXISTS public.get_user_role(UUID);
DROP FUNCTION IF EXISTS public.is_admin_bypass_rls(UUID);

-- Drop all existing policies on user_roles
DROP POLICY IF EXISTS "Users can view their own role" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can view all roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can manage all roles" ON public.user_roles;
DROP POLICY IF EXISTS "Users can update their own role" ON public.user_roles;
DROP POLICY IF EXISTS "Managers can manage own data" ON public.user_roles;
DROP POLICY IF EXISTS "Sales can manage own data" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can view all roles safe" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can insert roles safe" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can update roles safe" ON public.user_roles;

-- Create a simple, non-recursive policy that allows users to view their own role
CREATE POLICY "Users can view own role simple" ON public.user_roles
    FOR SELECT USING (auth.uid() = user_id);

-- Create a simple policy for authenticated users to read all roles (no recursion)
CREATE POLICY "Authenticated users can read all roles" ON public.user_roles
    FOR SELECT TO authenticated USING (true);

-- Grant basic permissions to authenticated role
GRANT SELECT ON public.user_roles TO authenticated;
GRANT INSERT, UPDATE ON public.user_roles TO authenticated;

-- Create a simple get_user_role function without recursion
CREATE OR REPLACE FUNCTION public.get_user_role(user_uuid UUID DEFAULT auth.uid())
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    user_role TEXT;
BEGIN
    -- Direct query without RLS to avoid recursion
    SELECT role INTO user_role
    FROM public.user_roles 
    WHERE user_id = user_uuid
    LIMIT 1;
    
    RETURN user_role;
END;
$$;

-- Grant execute permission on the function
GRANT EXECUTE ON FUNCTION public.get_user_role(UUID) TO anon, authenticated;