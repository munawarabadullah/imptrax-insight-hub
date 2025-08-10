-- Migration: Fix has_permission function to set immutable search_path
-- Purpose: Address "Function Search Path Mutable" by explicitly setting search_path for SECURITY DEFINER function
-- Date: 2025-08-10

-- Optional: remove any legacy single-argument overload if it exists
DROP FUNCTION IF EXISTS public.has_permission(TEXT);

-- Recreate the function with an immutable search_path
CREATE OR REPLACE FUNCTION public.has_permission(required_role TEXT, user_uuid UUID DEFAULT auth.uid())
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
DECLARE
  user_role TEXT;
  role_hierarchy INTEGER;
BEGIN
  -- Get user's current role
  SELECT role INTO user_role FROM public.user_roles WHERE user_id = user_uuid;

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
$$;

-- Ensure execute permissions
GRANT EXECUTE ON FUNCTION public.has_permission(TEXT, UUID) TO authenticated, anon;