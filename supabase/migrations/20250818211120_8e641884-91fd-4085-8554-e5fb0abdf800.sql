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
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.table_constraints 
                   WHERE constraint_name = 'captcha_required_for_submission') THEN
        ALTER TABLE public.contact_submissions 
        ADD CONSTRAINT captcha_required_for_submission 
        CHECK (captcha_verified = true OR auth.uid() IS NOT NULL);
    END IF;
END $$;

-- Update anonymous insert policy to require captcha verification
DROP POLICY IF EXISTS "anon_can_submit_forms" ON public.contact_submissions;
CREATE POLICY "anon_can_submit_forms_with_captcha" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (captcha_verified = true);

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_lead_status ON public.contact_submissions(lead_status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON public.contact_submissions(created_at);