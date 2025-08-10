-- Fix: Make public.update_updated_at_column search_path immutable to address security check
-- This ensures the function does not rely on the caller's search_path.

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = 'public'
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;