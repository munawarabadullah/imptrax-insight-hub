-- Check existing users in admin_users and user_roles tables
SELECT 'admin_users' as table_name, count(*) as count FROM admin_users
UNION ALL
SELECT 'user_roles' as table_name, count(*) as count FROM user_roles;

-- Show actual data
SELECT 'ADMIN_USERS_DATA:' as info;
SELECT id, email, name, role, is_active, created_at FROM admin_users;

SELECT 'USER_ROLES_DATA:' as info;
SELECT id, user_id, role, created_at FROM user_roles;

-- Check if there are any Supabase auth users
SELECT 'AUTH_USERS_COUNT:' as info;
SELECT count(*) as auth_users_count FROM auth.users;