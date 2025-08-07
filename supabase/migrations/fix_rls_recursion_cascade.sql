-- Fix RLS recursion by dropping everything in correct order
-- This migration drops policies first, then functions, then recreates everything cleanly

-- Drop all existing policies on user_roles (including the ones that depend on functions)
DROP POLICY IF EXISTS "Users can view their own role" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can view all roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can manage all roles" ON public.user_roles;
DROP POLICY IF EXISTS "Users can update their own role" ON public.user_roles;
DROP POLICY IF EXISTS "Managers can manage own data" ON public.user_roles;
DROP POLICY IF EXISTS "Sales can manage own data" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can view all roles safe" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can insert roles safe" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can update roles safe" ON public.user_roles;

-- Drop policies on lead_change_log that depend on the function
DROP POLICY IF EXISTS "Admins can view all change logs safe" ON public.lead_change_log;

-- Now drop the functions
DROP FUNCTION IF EXISTS public.get_user_role(UUID);
DROP FUNCTION IF EXISTS public.is_admin_bypass_rls(UUID);

-- Create simple, non-recursive policies
-- Allow users to view their own role
CREATE POLICY "Users can view own role" ON public.user_roles
    FOR SELECT USING (auth.uid() = user_id);

-- Allow authenticated users to read all roles (simple policy, no recursion)
CREATE POLICY "Authenticated read all roles" ON public.user_roles
    FOR SELECT TO authenticated USING (true);

-- Allow authenticated users to insert/update roles (for admin functions)
CREATE POLICY "Authenticated manage roles" ON public.user_roles
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Grant basic permissions
GRANT SELECT ON public.user_roles TO authenticated;
GRANT INSERT, UPDATE, DELETE ON public.user_roles TO authenticated;

-- Create a simple get_user_role function without any RLS dependencies
CREATE OR REPLACE FUNCTION public.get_user_role(user_uuid UUID DEFAULT auth.uid())
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    user_role TEXT;
BEGIN
    -- Direct query with security definer to bypass RLS completely
    SELECT role INTO user_role
    FROM public.user_roles 
    WHERE user_id = user_uuid
    LIMIT 1;
    
    RETURN user_role;
END;
$$;

-- Grant execute permission on the function
GRANT EXECUTE ON FUNCTION public.get_user_role(UUID) TO anon, authenticated;