-- Fix: Make public.is_admin search_path immutable to address security finding
-- This ensures the function does not depend on the caller's search_path.

CREATE OR REPLACE FUNCTION public.is_admin(user_uuid UUID DEFAULT auth.uid())
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = 'public'
AS $$
BEGIN
  RETURN (
    SELECT role = 'admin'
    FROM public.user_roles
    WHERE user_id = user_uuid
  );
END;
$$;