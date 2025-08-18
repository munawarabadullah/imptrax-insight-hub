-- Add missing columns to contact_submissions table for enhanced form data
ALTER TABLE public.contact_submissions 
ADD COLUMN IF NOT EXISTS project_description text,
ADD COLUMN IF NOT EXISTS timeline text,
ADD COLUMN IF NOT EXISTS budget_range text,
ADD COLUMN IF NOT EXISTS urgency text,
ADD COLUMN IF NOT EXISTS preferred_contact_method text,
ADD COLUMN IF NOT EXISTS best_time_to_call text,
ADD COLUMN IF NOT EXISTS meeting_type text,
ADD COLUMN IF NOT EXISTS additional_notes text,
ADD COLUMN IF NOT EXISTS lead_status text DEFAULT 'new',
ADD COLUMN IF NOT EXISTS assigned_to text,
ADD COLUMN IF NOT EXISTS notes text,
ADD COLUMN IF NOT EXISTS country_code text,
ADD COLUMN IF NOT EXISTS timezone text,
ADD COLUMN IF NOT EXISTS isp text;

-- Ensure captcha_verified defaults to false for security
ALTER TABLE public.contact_submissions 
ALTER COLUMN captcha_verified SET DEFAULT false;

-- Add constraint to ensure captcha is verified for anonymous submissions
ALTER TABLE public.contact_submissions 
ADD CONSTRAINT captcha_required_for_submission 
CHECK (captcha_verified = true OR auth.uid() IS NOT NULL);

-- Create lead change log table for audit trail
CREATE TABLE IF NOT EXISTS public.lead_change_log (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    lead_id uuid REFERENCES public.contact_submissions(id),
    user_id uuid,
    user_email varchar(255),
    operation_type varchar(50) NOT NULL,
    field_name varchar(255),
    old_value text,
    new_value text,
    changed_at timestamp with time zone DEFAULT now(),
    ip_address inet,
    user_agent text,
    session_id varchar(255)
);

-- Enable RLS on lead_change_log
ALTER TABLE public.lead_change_log ENABLE ROW LEVEL SECURITY;

-- Create policies for lead_change_log
CREATE POLICY "Authenticated users can view change logs" 
ON public.lead_change_log 
FOR SELECT 
USING (auth.role() = 'authenticated');

CREATE POLICY "System can insert change logs" 
ON public.lead_change_log 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Privileged roles can view lead history" 
ON public.lead_change_log 
FOR SELECT 
USING (has_permission('Director', auth.uid()));

-- Create function to log lead changes
CREATE OR REPLACE FUNCTION public.log_lead_change(
    p_lead_id uuid,
    p_operation_type varchar,
    p_field_name varchar DEFAULT NULL,
    p_old_value text DEFAULT NULL,
    p_new_value text DEFAULT NULL,
    p_session_id varchar DEFAULT NULL
)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    log_id UUID;
    current_user_email VARCHAR(255);
BEGIN
    -- Get current user email
    SELECT email INTO current_user_email
    FROM auth.users
    WHERE id = auth.uid();

    -- Insert change log
    INSERT INTO public.lead_change_log (
        lead_id,
        user_id,
        user_email,
        operation_type,
        field_name,
        old_value,
        new_value,
        session_id
    ) VALUES (
        p_lead_id,
        auth.uid(),
        current_user_email,
        p_operation_type,
        p_field_name,
        p_old_value,
        p_new_value,
        p_session_id
    ) RETURNING id INTO log_id;

    RETURN log_id;
END;
$$;

-- Update anonymous insert policy to require captcha verification
DROP POLICY IF EXISTS "anon_can_submit_forms" ON public.contact_submissions;
CREATE POLICY "anon_can_submit_forms_with_captcha" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (captcha_verified = true);

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_lead_status ON public.contact_submissions(lead_status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON public.contact_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_lead_change_log_lead_id ON public.lead_change_log(lead_id);
CREATE INDEX IF NOT EXISTS idx_lead_change_log_changed_at ON public.lead_change_log(changed_at);