-- CRITICAL SECURITY FIXES
-- Phase 1: Fix Data Exposure Issues

-- 1. Secure contact_submissions table by removing dangerous public policies
DROP POLICY IF EXISTS "Allow anon select" ON public.contact_submissions;
DROP POLICY IF EXISTS "anon_users_read_access" ON public.contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated all" ON public.contact_submissions;
DROP POLICY IF EXISTS "authenticated_users_full_access" ON public.contact_submissions;

-- 2. Secure admin_users table policies 
DROP POLICY IF EXISTS "Admins can view their own data" ON public.admin_users;
DROP POLICY IF EXISTS "Admins can update their own data" ON public.admin_users;

-- Create proper admin policies that use actual user identification
CREATE POLICY "Admins can view their own data" ON public.admin_users
FOR SELECT
USING (auth.uid()::text = id::text);

CREATE POLICY "Admins can update their own data" ON public.admin_users  
FOR UPDATE
USING (auth.uid()::text = id::text);

-- 3. Enable RLS on keep_alive table (currently disabled)
ALTER TABLE public.keep_alive ENABLE ROW LEVEL SECURITY;

-- 4. Fix user_roles infinite recursion by consolidating policies
-- Drop all existing conflicting policies
DROP POLICY IF EXISTS "Admin can manage roles" ON public.user_roles;
DROP POLICY IF EXISTS "Executives can view all roles" ON public.user_roles;
DROP POLICY IF EXISTS "Executives can update non-Admin roles" ON public.user_roles;
DROP POLICY IF EXISTS "Directors can manage own data" ON public.user_roles;
DROP POLICY IF EXISTS "Users can view own role" ON public.user_roles;
DROP POLICY IF EXISTS "Authenticated read all roles" ON public.user_roles;
DROP POLICY IF EXISTS "Authenticated manage roles" ON public.user_roles;
DROP POLICY IF EXISTS "user_can_view_own_role" ON public.user_roles;
DROP POLICY IF EXISTS "authenticated_can_read_roles" ON public.user_roles;
DROP POLICY IF EXISTS "admin_can_manage_roles" ON public.user_roles;

-- Create clean, non-recursive policies for user_roles
-- Users can view their own role
CREATE POLICY "user_can_view_own_role_secure" ON public.user_roles
FOR SELECT
USING (auth.uid() = user_id);

-- Admins can manage all roles (using security definer function)
CREATE POLICY "admin_can_manage_all_roles" ON public.user_roles
FOR ALL
USING (is_admin_safe(auth.uid()))
WITH CHECK (is_admin_safe(auth.uid()));

-- 5. Clean up redundant contact_submissions policies and ensure proper hierarchy
-- Keep only essential policies for contact_submissions
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON public.contact_submissions;
DROP POLICY IF EXISTS "Only authenticated users can view submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Allow anon insert" ON public.contact_submissions;

-- Create clean contact_submissions policies
-- Anonymous users can only submit forms
CREATE POLICY "anon_can_submit_forms" ON public.contact_submissions
FOR INSERT
TO anon
WITH CHECK (true);

-- Authenticated users with Director+ level can view/manage leads  
CREATE POLICY "directors_can_manage_leads" ON public.contact_submissions
FOR ALL
TO authenticated
USING (has_permission('Director'::text, auth.uid()))
WITH CHECK (has_permission('Director'::text, auth.uid()));

-- Admin full access (keep existing)
-- This policy already exists and is properly configured