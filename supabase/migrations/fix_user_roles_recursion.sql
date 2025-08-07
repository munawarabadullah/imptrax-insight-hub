-- Fix infinite recursion in user_roles RLS policies
-- This migration removes the problematic policies and creates safer ones

-- Drop existing problematic policies
DROP POLICY IF EXISTS "Admins can view all roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can insert roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can update roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can view all change logs" ON public.lead_change_log;

-- Create safer policies that don't cause recursion
-- Allow users to view their own role (this one was fine)
-- Users can view their own role policy already exists and is safe

-- Create a simple policy for admins without recursion
-- We'll use a function that bypasses RLS for admin checks
CREATE OR REPLACE FUNCTION public.is_admin_bypass_rls(user_uuid UUID DEFAULT auth.uid())
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    -- Bypass RLS by using a direct query with security definer
    RETURN EXISTS (
        SELECT 1 
        FROM public.user_roles 
        WHERE user_id = user_uuid AND role = 'admin'
    );
END;
$$;

-- Grant execute permission on the new function
GRANT EXECUTE ON FUNCTION public.is_admin_bypass_rls(UUID) TO anon, authenticated;

-- Create new safe policies for user_roles
CREATE POLICY "Admins can view all roles safe" ON public.user_roles
    FOR SELECT USING (public.is_admin_bypass_rls());

CREATE POLICY "Admins can insert roles safe" ON public.user_roles
    FOR INSERT WITH CHECK (public.is_admin_bypass_rls());

CREATE POLICY "Admins can update roles safe" ON public.user_roles
    FOR UPDATE USING (public.is_admin_bypass_rls());

-- Create safe policy for lead_change_log
CREATE POLICY "Admins can view all change logs safe" ON public.lead_change_log
    FOR SELECT USING (public.is_admin_bypass_rls());

-- Update the get_user_role function to be safer
CREATE OR REPLACE FUNCTION public.get_user_role(user_uuid UUID DEFAULT auth.uid())
RETURNS VARCHAR(50)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    user_role VARCHAR(50);
BEGIN
    -- Use security definer to bypass RLS
    SELECT role INTO user_role
    FROM public.user_roles 
    WHERE user_id = user_uuid;
    
    -- Return 'user' as default if no role found
    RETURN COALESCE(user_role, 'user');
END;
$$;