-- PHASE 1: CRITICAL SECURITY FIXES

-- 1. Remove the unused admin_users table which poses a security risk
-- This table contains password hashes and admin credentials but is not used by the application
-- The application properly uses Supabase Auth + user_roles system instead
DROP TABLE IF EXISTS public.admin_users CASCADE;

-- 2. Add security audit logging table for sensitive operations
CREATE TABLE IF NOT EXISTS public.security_audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  user_email TEXT,
  action TEXT NOT NULL,
  resource_type TEXT,
  resource_id TEXT,
  details JSONB,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on audit log
ALTER TABLE public.security_audit_log ENABLE ROW LEVEL SECURITY;

-- Only admins can view audit logs
CREATE POLICY "Admins can view audit logs"
ON public.security_audit_log
FOR SELECT
USING (is_admin_safe(auth.uid()));

-- System can insert audit logs (for triggers/functions)
CREATE POLICY "System can insert audit logs"
ON public.security_audit_log
FOR INSERT
WITH CHECK (true);

-- 3. Add trigger to automatically log role changes
CREATE OR REPLACE FUNCTION public.log_role_changes()
RETURNS TRIGGER AS $$
BEGIN
  -- Log role changes in audit log
  IF TG_OP = 'INSERT' THEN
    INSERT INTO public.security_audit_log (
      user_id, user_email, action, resource_type, resource_id, 
      details, ip_address, user_agent
    ) VALUES (
      auth.uid(),
      (SELECT email FROM auth.users WHERE id = auth.uid()),
      'ROLE_ASSIGNED',
      'user_role',
      NEW.id::text,
      jsonb_build_object(
        'target_user_id', NEW.user_id,
        'role_assigned', NEW.role
      ),
      inet_client_addr(),
      current_setting('request.headers', true)::jsonb->>'user-agent'
    );
    RETURN NEW;
  END IF;
  
  IF TG_OP = 'UPDATE' THEN
    INSERT INTO public.security_audit_log (
      user_id, user_email, action, resource_type, resource_id,
      details, ip_address, user_agent
    ) VALUES (
      auth.uid(),
      (SELECT email FROM auth.users WHERE id = auth.uid()),
      'ROLE_CHANGED',
      'user_role',
      NEW.id::text,
      jsonb_build_object(
        'target_user_id', NEW.user_id,
        'old_role', OLD.role,
        'new_role', NEW.role
      ),
      inet_client_addr(),
      current_setting('request.headers', true)::jsonb->>'user-agent'
    );
    RETURN NEW;
  END IF;
  
  IF TG_OP = 'DELETE' THEN
    INSERT INTO public.security_audit_log (
      user_id, user_email, action, resource_type, resource_id,
      details, ip_address, user_agent
    ) VALUES (
      auth.uid(),
      (SELECT email FROM auth.users WHERE id = auth.uid()),
      'ROLE_REMOVED',
      'user_role', 
      OLD.id::text,
      jsonb_build_object(
        'target_user_id', OLD.user_id,
        'role_removed', OLD.role
      ),
      inet_client_addr(),
      current_setting('request.headers', true)::jsonb->>'user-agent'
    );
    RETURN OLD;
  END IF;
  
  RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create trigger for role changes
DROP TRIGGER IF EXISTS log_role_changes_trigger ON public.user_roles;
CREATE TRIGGER log_role_changes_trigger
  AFTER INSERT OR UPDATE OR DELETE ON public.user_roles
  FOR EACH ROW EXECUTE FUNCTION public.log_role_changes();

-- 4. Improve role hierarchy validation with better security
CREATE OR REPLACE FUNCTION public.validate_role_assignment()
RETURNS TRIGGER AS $$
BEGIN
  -- Only admins can assign admin roles
  IF NEW.role = 'admin' AND NOT is_admin_safe(auth.uid()) THEN
    RAISE EXCEPTION 'Only administrators can assign admin roles';
  END IF;
  
  -- Only admins and executives can assign director+ roles  
  IF NEW.role IN ('admin', 'executive', 'director') AND NOT has_permission('Executive', auth.uid()) THEN
    RAISE EXCEPTION 'Insufficient privileges to assign role: %', NEW.role;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create role validation trigger
DROP TRIGGER IF EXISTS validate_role_assignment_trigger ON public.user_roles;
CREATE TRIGGER validate_role_assignment_trigger
  BEFORE INSERT OR UPDATE ON public.user_roles
  FOR EACH ROW EXECUTE FUNCTION public.validate_role_assignment();

-- 5. Add data retention policy for contact submissions (90 days for inactive leads)
CREATE OR REPLACE FUNCTION public.cleanup_old_contact_submissions()
RETURNS void AS $$
BEGIN
  -- Archive contact submissions older than 90 days with status 'closed' or 'rejected'
  DELETE FROM public.contact_submissions 
  WHERE created_at < (now() - interval '90 days')
    AND lead_status IN ('closed', 'rejected', 'spam');
    
  -- Log the cleanup action
  INSERT INTO public.security_audit_log (
    action, resource_type, details, created_at
  ) VALUES (
    'DATA_CLEANUP',
    'contact_submissions',
    jsonb_build_object('cleanup_date', now(), 'retention_days', 90),
    now()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;