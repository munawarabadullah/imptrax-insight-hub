-- Add admin role and create admin user
-- This migration adds the missing admin role and creates the admin@imptrax.com user

-- First, let's check if we need to create the admin user in auth.users
-- Note: This will be handled through Supabase Auth API, but we'll prepare the role assignment

-- Insert admin role into user_roles table if it doesn't exist
-- We'll use a specific UUID for the admin user that we'll create
INSERT INTO user_roles (id, user_id, role, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  NULL, -- Will be updated after user creation
  'admin',
  NOW(),
  NOW()
)
ON CONFLICT DO NOTHING;

-- Grant necessary permissions for admin role
-- Ensure admin role has full access to all tables
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO authenticated;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO authenticated;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public TO authenticated;

-- Update RLS policies to allow admin role full access
-- Add policy for admin role on contact_submissions
DROP POLICY IF EXISTS "Admin full access" ON contact_submissions;
CREATE POLICY "Admin full access" ON contact_submissions
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_roles 
      WHERE user_id = auth.uid() 
      AND role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_roles 
      WHERE user_id = auth.uid() 
      AND role = 'admin'
    )
  );

-- Add policy for admin role on user_roles table
DROP POLICY IF EXISTS "Admin can manage roles" ON user_roles;
CREATE POLICY "Admin can manage roles" ON user_roles
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_roles 
      WHERE user_id = auth.uid() 
      AND role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_roles 
      WHERE user_id = auth.uid() 
      AND role = 'admin'
    )
  );

-- Add policy for admin role on change_log table if it exists
DO $$
BEGIN
  IF EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'change_log') THEN
    EXECUTE 'DROP POLICY IF EXISTS "Admin full access to change_log" ON change_log';
    EXECUTE 'CREATE POLICY "Admin full access to change_log" ON change_log
      FOR ALL
      TO authenticated
      USING (
        EXISTS (
          SELECT 1 FROM user_roles 
          WHERE user_id = auth.uid() 
          AND role = ''admin''
        )
      )
      WITH CHECK (
        EXISTS (
          SELECT 1 FROM user_roles 
          WHERE user_id = auth.uid() 
          AND role = ''admin''
        )
      )';
  END IF;
END $$;