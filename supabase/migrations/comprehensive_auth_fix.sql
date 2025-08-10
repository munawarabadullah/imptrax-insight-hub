-- Comprehensive Authentication Fix Migration
-- This migration addresses all authentication and RLS issues identified in the diagnostic plan
-- Created to resolve 6-hour authentication troubleshooting session

-- =============================================================================
-- STEP 1: Clean up all existing problematic RLS policies
-- =============================================================================

-- Drop all existing policies on user_roles that might cause recursion
DROP POLICY IF EXISTS "Users can view their own role" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can view all roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can manage all roles" ON public.user_roles;
DROP POLICY IF EXISTS "Users can update their own role" ON public.user_roles;
DROP POLICY IF EXISTS "Managers can manage own data" ON public.user_roles;
DROP POLICY IF EXISTS "Sales can manage own data" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can view all roles safe" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can insert roles safe" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can update roles safe" ON public.user_roles;
DROP POLICY IF EXISTS "Users can view own role simple" ON public.user_roles;
DROP POLICY IF EXISTS "Authenticated users can read roles" ON public.user_roles;

-- Drop existing functions that might cause issues
DROP FUNCTION IF EXISTS public.is_admin_bypass_rls(UUID);
DROP FUNCTION IF EXISTS public.get_user_role(UUID);

-- =============================================================================
-- STEP 2: Create clean, non-recursive functions
-- =============================================================================

-- Create a simple function to get user role without RLS recursion
CREATE OR REPLACE FUNCTION public.get_user_role_safe(user_uuid UUID DEFAULT auth.uid())
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = 'public'
AS $$
DECLARE
    user_role TEXT;
BEGIN
    -- Direct query with security definer to bypass RLS
    SELECT role INTO user_role
    FROM public.user_roles 
    WHERE user_id = user_uuid
    LIMIT 1;
    
    RETURN COALESCE(user_role, NULL);
END;
$$;

-- Create a simple admin check function
CREATE OR REPLACE FUNCTION public.is_admin_safe(user_uuid UUID DEFAULT auth.uid())
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = 'public'
AS $$
BEGIN
    -- Direct query with security definer to bypass RLS
    RETURN EXISTS (
        SELECT 1 
        FROM public.user_roles 
        WHERE user_id = user_uuid 
        AND role = 'Admin'
    );
END;
$$;

-- =============================================================================
-- STEP 3: Create simple, safe RLS policies
-- =============================================================================

-- Simple policy: Users can view their own role
DROP POLICY IF EXISTS "user_can_view_own_role" ON public.user_roles;
CREATE POLICY "user_can_view_own_role" ON public.user_roles
    FOR SELECT 
    TO authenticated
    USING (auth.uid() = user_id);

-- Simple policy: Allow all authenticated users to read roles (for role checking)
DROP POLICY IF EXISTS "authenticated_can_read_roles" ON public.user_roles;
CREATE POLICY "authenticated_can_read_roles" ON public.user_roles
    FOR SELECT 
    TO authenticated
    USING (true);

-- Admin policies using the safe function
DROP POLICY IF EXISTS "admin_can_manage_roles" ON public.user_roles;
CREATE POLICY "admin_can_manage_roles" ON public.user_roles
    FOR ALL 
    TO authenticated
    USING (public.is_admin_safe())
    WITH CHECK (public.is_admin_safe());

-- =============================================================================
-- STEP 4: Grant proper permissions to roles
-- =============================================================================

-- Grant permissions on user_roles table
GRANT SELECT ON public.user_roles TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_roles TO authenticated;

-- Grant permissions on contact_submissions table
GRANT SELECT ON public.contact_submissions TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.contact_submissions TO authenticated;

-- Grant permissions on admin_users table
GRANT SELECT ON public.admin_users TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.admin_users TO authenticated;

-- Grant permissions on lead_change_log table
GRANT SELECT ON public.lead_change_log TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.lead_change_log TO authenticated;

-- Grant execute permissions on functions
GRANT EXECUTE ON FUNCTION public.get_user_role_safe(UUID) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.is_admin_safe(UUID) TO anon, authenticated;

-- =============================================================================
-- STEP 5: Ensure admin user exists with correct role
-- =============================================================================

-- Check if admin user exists and create/update if needed
DO $$
DECLARE
    admin_user_id UUID;
    admin_exists BOOLEAN := FALSE;
BEGIN
    -- Check if admin@imptrax.com exists in auth.users
    SELECT id INTO admin_user_id
    FROM auth.users 
    WHERE email = 'admin@imptrax.com'
    LIMIT 1;
    
    IF admin_user_id IS NOT NULL THEN
        -- Admin user exists, ensure role is set correctly
        INSERT INTO public.user_roles (user_id, role, created_at, updated_at)
        VALUES (admin_user_id, 'Admin', NOW(), NOW())
        ON CONFLICT (user_id) 
        DO UPDATE SET 
            role = 'Admin',
            updated_at = NOW();
        
        RAISE NOTICE 'Admin user role updated for user_id: %', admin_user_id;
    ELSE
        RAISE NOTICE 'Admin user admin@imptrax.com not found in auth.users. Please create the user first.';
    END IF;
END
$$;

-- =============================================================================
-- STEP 6: Verification queries (for debugging)
-- =============================================================================

-- Check RLS policies
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd
FROM pg_policies 
WHERE tablename IN ('user_roles', 'contact_submissions', 'admin_users', 'lead_change_log')
ORDER BY tablename, policyname;

-- Check permissions
SELECT 
    grantee, 
    table_name, 
    privilege_type 
FROM information_schema.role_table_grants 
WHERE table_schema = 'public' 
    AND table_name IN ('user_roles', 'contact_submissions', 'admin_users', 'lead_change_log')
    AND grantee IN ('anon', 'authenticated') 
ORDER BY table_name, grantee;

-- Check admin user setup
SELECT 
    u.email,
    ur.role,
    ur.created_at as role_assigned_at
FROM auth.users u
LEFT JOIN public.user_roles ur ON u.id = ur.user_id
WHERE u.email = 'admin@imptrax.com';