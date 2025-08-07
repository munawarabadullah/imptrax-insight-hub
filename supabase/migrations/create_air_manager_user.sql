-- Create a test user with 'air manager' role
-- Note: This creates a user directly in auth.users for testing purposes

-- First, check if user already exists and delete if needed
DELETE FROM user_roles WHERE user_id IN (
    SELECT id FROM auth.users WHERE email = 'airmanager@imptrax.com'
);

DELETE FROM admin_users WHERE email = 'airmanager@imptrax.com';

DELETE FROM auth.users WHERE email = 'airmanager@imptrax.com';

-- Create the user in auth.users table
INSERT INTO auth.users (
  id,
  instance_id,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  raw_app_meta_data,
  raw_user_meta_data,
  is_super_admin,
  role
) VALUES (
  gen_random_uuid(),
  '00000000-0000-0000-0000-000000000000',
  'airmanager@imptrax.com',
  crypt('airmanager123', gen_salt('bf')), -- Password: airmanager123
  now(),
  now(),
  now(),
  '{"provider": "email", "providers": ["email"]}',
  '{}',
  false,
  'authenticated'
);

-- Get the user ID and insert into user_roles
DO $$
DECLARE
    user_uuid uuid;
BEGIN
    -- Get the user ID
    SELECT id INTO user_uuid FROM auth.users WHERE email = 'airmanager@imptrax.com';
    
    -- Insert into user_roles table
    INSERT INTO user_roles (user_id, role) 
    VALUES (user_uuid, 'air manager');
        
    -- Also insert into admin_users for backward compatibility
    INSERT INTO admin_users (email, password_hash, name, role, is_active)
    VALUES (
        'airmanager@imptrax.com',
        crypt('airmanager123', gen_salt('bf')),
        'Air Manager',
        'air manager',
        true
    );
END $$;

-- Verify the user was created
SELECT 'User created successfully:' as status;
SELECT u.id, u.email, ur.role 
FROM auth.users u 
LEFT JOIN user_roles ur ON u.id = ur.user_id 
WHERE u.email = 'airmanager@imptrax.com';