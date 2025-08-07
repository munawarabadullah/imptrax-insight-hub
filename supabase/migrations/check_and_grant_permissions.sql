-- Check current permissions for contact_submissions and lead_change_log tables
SELECT 
    grantee, 
    table_name, 
    privilege_type 
FROM information_schema.role_table_grants 
WHERE table_schema = 'public' 
    AND grantee IN ('anon', 'authenticated') 
    AND table_name IN ('contact_submissions', 'lead_change_log') 
ORDER BY table_name, grantee;

-- Grant permissions for contact_submissions table
GRANT SELECT, INSERT, UPDATE, DELETE ON contact_submissions TO authenticated;
GRANT SELECT ON contact_submissions TO anon;

-- Grant permissions for lead_change_log table
GRANT SELECT, INSERT, UPDATE, DELETE ON lead_change_log TO authenticated;
GRANT SELECT ON lead_change_log TO anon;

-- Verify permissions were granted
SELECT 
    grantee, 
    table_name, 
    privilege_type 
FROM information_schema.role_table_grants 
WHERE table_schema = 'public' 
    AND grantee IN ('anon', 'authenticated') 
    AND table_name IN ('contact_submissions', 'lead_change_log') 
ORDER BY table_name, grantee;