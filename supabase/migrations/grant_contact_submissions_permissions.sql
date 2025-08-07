-- Grant permissions for contact_submissions table to authenticated users
-- This migration ensures that authenticated users can read, insert, update, and delete from contact_submissions

-- First, let's check current permissions
SELECT 
    grantee, 
    table_name, 
    privilege_type 
FROM information_schema.role_table_grants 
WHERE table_schema = 'public' 
    AND table_name = 'contact_submissions' 
    AND grantee IN ('anon', 'authenticated')
ORDER BY table_name, grantee;

-- Grant full permissions to authenticated role
GRANT ALL PRIVILEGES ON contact_submissions TO authenticated;

-- Grant read permissions to anon role (for public access if needed)
GRANT SELECT ON contact_submissions TO anon;

-- Check permissions after granting
SELECT 
    grantee, 
    table_name, 
    privilege_type 
FROM information_schema.role_table_grants 
WHERE table_schema = 'public' 
    AND table_name = 'contact_submissions' 
    AND grantee IN ('anon', 'authenticated')
ORDER BY table_name, grantee;

-- Also check if there are any RLS policies
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies 
WHERE schemaname = 'public' 
    AND tablename = 'contact_submissions';

-- Create a simple RLS policy that allows authenticated users full access
-- First drop any existing policies
DROP POLICY IF EXISTS "authenticated_users_full_access" ON contact_submissions;

-- Create new policy for authenticated users
CREATE POLICY "authenticated_users_full_access" 
ON contact_submissions 
FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

-- Create policy for anon users (read-only)
DROP POLICY IF EXISTS "anon_users_read_access" ON contact_submissions;

CREATE POLICY "anon_users_read_access" 
ON contact_submissions 
FOR SELECT 
TO anon 
USING (true);

-- Verify the policies were created
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies 
WHERE schemaname = 'public' 
    AND tablename = 'contact_submissions';