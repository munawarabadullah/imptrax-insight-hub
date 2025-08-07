-- Check current RLS policies on contact_submissions table
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
WHERE tablename = 'contact_submissions';

-- Check current permissions for anon and authenticated roles
SELECT 
    grantee, 
    table_name, 
    privilege_type 
FROM information_schema.role_table_grants 
WHERE table_schema = 'public' 
    AND table_name = 'contact_submissions'
    AND grantee IN ('anon', 'authenticated') 
ORDER BY table_name, grantee;

-- Check if there are any RLS policies that might be blocking access
SELECT 
    c.relname as table_name,
    c.relrowsecurity as rls_enabled,
    c.relforcerowsecurity as rls_forced
FROM pg_class c
JOIN pg_namespace n ON c.relnamespace = n.oid
WHERE n.nspname = 'public' 
    AND c.relname = 'contact_submissions';

-- Test if we can grant permissions (this will show what's missing)
-- Note: These GRANT statements might fail if permissions already exist
GRANT SELECT ON contact_submissions TO anon;
GRANT ALL PRIVILEGES ON contact_submissions TO authenticated;

-- Verify the grants were applied
SELECT 
    grantee, 
    table_name, 
    privilege_type 
FROM information_schema.role_table_grants 
WHERE table_schema = 'public' 
    AND table_name = 'contact_submissions'
    AND grantee IN ('anon', 'authenticated') 
ORDER BY table_name, grantee;