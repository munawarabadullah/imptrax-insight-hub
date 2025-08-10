-- Migration: Update Role System
-- Description: Replace existing roles with new 5-tier role system
-- Date: 2025-08-07

-- First, clear all existing role assignments
DELETE FROM user_roles;

-- Create the new role system with the admin user
-- Note: We'll use the existing admin user ID from the backup
INSERT INTO user_roles (user_id, role, created_at, updated_at) VALUES
-- Admin role - technical with highest permissions (read, write, delete, configure)
('f555b812-8e4a-4268-87f4-8f4da1f7f25b', 'Admin', NOW(), NOW());

-- Note: Other roles (Executive, Director, Manager, Sales) will be created as needed
-- when users are assigned to them. The role definitions are:
--
-- Admin: Technical role with highest permissions (read, write, delete, configure)
-- Executive: Non-technical with highest visibility (read, write, delete)
-- Director: Non-technical with limited visibility (read, write, delete only own data)
-- Manager: Non-technical with limited visibility (read, write only own data at group level)
-- Sales: Non-technical with limited visibility (read, write only own data and associated data)

-- Update the default role value to be more restrictive
ALTER TABLE user_roles ALTER COLUMN role SET DEFAULT 'Sales';

-- Add a check constraint to ensure only valid roles are used
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'valid_roles_check' AND conrelid = 'user_roles'::regclass) THEN
        ALTER TABLE user_roles ADD CONSTRAINT valid_roles_check CHECK (role IN ('Admin', 'Executive', 'Director', 'Manager', 'Sales'));
    END IF;
END $$;

-- Create or replace RLS policies for the new role system

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view their own role" ON user_roles;
DROP POLICY IF EXISTS "Admins can manage all roles" ON user_roles;
DROP POLICY IF EXISTS "Users can update their own role" ON user_roles;

-- Policy 1: Users can view their own role
CREATE POLICY "Users can view their own role" ON user_roles
FOR SELECT USING (auth.uid() = user_id);

-- Policy 2: Admins can manage all roles (full CRUD)
CREATE POLICY "Admins can manage all roles" ON user_roles
FOR ALL USING (
  EXISTS (
    SELECT 1 FROM user_roles ur 
    WHERE ur.user_id = auth.uid() 
    AND ur.role = 'Admin'
  )
);

-- Policy 3: Executives can view all roles but only update non-Admin roles
DROP POLICY IF EXISTS "Executives can view all roles" ON user_roles;
CREATE POLICY "Executives can view all roles" ON user_roles
FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM user_roles ur 
    WHERE ur.user_id = auth.uid() 
    AND ur.role IN ('Admin', 'Executive')
  )
);

DROP POLICY IF EXISTS "Executives can update non-Admin roles" ON user_roles;
CREATE POLICY "Executives can update non-Admin roles" ON user_roles
FOR UPDATE USING (
  EXISTS (
    SELECT 1 FROM user_roles ur 
    WHERE ur.user_id = auth.uid() 
    AND ur.role = 'Executive'
  )
  AND role != 'Admin'
);

-- Policy 4: Directors can only view and manage their own data
CREATE POLICY "Directors can manage own data" ON user_roles
FOR ALL USING (
  auth.uid() = user_id 
  AND EXISTS (
    SELECT 1 FROM user_roles ur 
    WHERE ur.user_id = auth.uid() 
    AND ur.role = 'Director'
  )
);

-- Policy 5: Managers can only view and manage their own data (read-only for others in group)
CREATE POLICY "Managers can manage own data" ON user_roles
FOR ALL USING (
  auth.uid() = user_id 
  AND EXISTS (
    SELECT 1 FROM user_roles ur 
    WHERE ur.user_id = auth.uid() 
    AND ur.role = 'Manager'
  )
);

-- Policy 6: Sales can only view and manage their own data
CREATE POLICY "Sales can manage own data" ON user_roles
FOR ALL USING (
  auth.uid() = user_id 
  AND EXISTS (
    SELECT 1 FROM user_roles ur 
    WHERE ur.user_id = auth.uid() 
    AND ur.role = 'Sales'
  )
);

-- Grant necessary permissions to anon and authenticated roles
GRANT SELECT ON user_roles TO anon;
GRANT ALL PRIVILEGES ON user_roles TO authenticated;

-- Drop existing function if it exists
DROP FUNCTION IF EXISTS get_user_role(UUID);
DROP FUNCTION IF EXISTS get_user_role();

-- Create a function to get user role (useful for frontend)
CREATE OR REPLACE FUNCTION get_user_role(user_uuid UUID DEFAULT auth.uid())
RETURNS TEXT AS $$
BEGIN
  RETURN (
    SELECT role 
    FROM user_roles 
    WHERE user_id = user_uuid
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission on the function
GRANT EXECUTE ON FUNCTION get_user_role TO authenticated, anon;

-- Drop existing permission function if it exists
DROP FUNCTION IF EXISTS has_permission(TEXT, UUID);
DROP FUNCTION IF EXISTS has_permission(TEXT);

-- Create a function to check if user has specific permission level
CREATE OR REPLACE FUNCTION has_permission(required_role TEXT, user_uuid UUID DEFAULT auth.uid())
RETURNS BOOLEAN AS $$
DECLARE
  user_role TEXT;
  role_hierarchy INTEGER;
BEGIN
  -- Get user's current role
  SELECT role INTO user_role FROM user_roles WHERE user_id = user_uuid;
  
  -- If no role found, return false
  IF user_role IS NULL THEN
    RETURN FALSE;
  END IF;
  
  -- Define role hierarchy (higher number = more permissions)
  role_hierarchy := CASE user_role
    WHEN 'Admin' THEN 5
    WHEN 'Executive' THEN 4
    WHEN 'Director' THEN 3
    WHEN 'Manager' THEN 2
    WHEN 'Sales' THEN 1
    ELSE 0
  END;
  
  -- Check if user has required permission level
  RETURN role_hierarchy >= CASE required_role
    WHEN 'Admin' THEN 5
    WHEN 'Executive' THEN 4
    WHEN 'Director' THEN 3
    WHEN 'Manager' THEN 2
    WHEN 'Sales' THEN 1
    ELSE 0
  END;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = 'public';

-- Grant execute permission on the permission function
GRANT EXECUTE ON FUNCTION has_permission TO authenticated, anon;