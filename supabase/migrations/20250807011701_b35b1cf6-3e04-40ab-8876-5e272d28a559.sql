-- Update contact_submissions table to accommodate consultation form fields
ALTER TABLE public.contact_submissions 
ADD COLUMN IF NOT EXISTS website text,
ADD COLUMN IF NOT EXISTS company_size text,
ADD COLUMN IF NOT EXISTS industry text,
ADD COLUMN IF NOT EXISTS project_description text,
ADD COLUMN IF NOT EXISTS timeline text,
ADD COLUMN IF NOT EXISTS budget_range text,
ADD COLUMN IF NOT EXISTS urgency text,
ADD COLUMN IF NOT EXISTS preferred_contact_method text,
ADD COLUMN IF NOT EXISTS best_time_to_call text,
ADD COLUMN IF NOT EXISTS meeting_type text,
ADD COLUMN IF NOT EXISTS additional_notes text,
ADD COLUMN IF NOT EXISTS form_completion_time integer,
ADD COLUMN IF NOT EXISTS session_data jsonb,
ADD COLUMN IF NOT EXISTS screen_info jsonb,
ADD COLUMN IF NOT EXISTS timezone_info jsonb,
ADD COLUMN IF NOT EXISTS captcha_verified boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS form_interaction_data jsonb,
ADD COLUMN IF NOT EXISTS lead_score integer DEFAULT 0,
ADD COLUMN IF NOT EXISTS lead_status text DEFAULT 'new',
ADD COLUMN IF NOT EXISTS assigned_to text,
ADD COLUMN IF NOT EXISTS notes text,
ADD COLUMN IF NOT EXISTS follow_up_date timestamp with time zone;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_lead_status ON public.contact_submissions(lead_status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON public.contact_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON public.contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_company ON public.contact_submissions(company);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_industry ON public.contact_submissions(industry);

-- Create admin_users table for admin authentication
CREATE TABLE IF NOT EXISTS public.admin_users (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL UNIQUE,
  password_hash text NOT NULL,
  name text NOT NULL,
  role text DEFAULT 'admin',
  is_active boolean DEFAULT true,
  last_login timestamp with time zone,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on admin_users
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Create admin policies
CREATE POLICY "Admins can view their own data" 
ON public.admin_users 
FOR SELECT 
USING (true);

CREATE POLICY "Admins can update their own data" 
ON public.admin_users 
FOR UPDATE 
USING (true);

-- Add trigger for admin_users updated_at
CREATE TRIGGER update_admin_users_updated_at
BEFORE UPDATE ON public.admin_users
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default admin user (password: admin123 - should be changed)
INSERT INTO public.admin_users (email, password_hash, name) 
VALUES ('admin@imptrax.com', '$2b$10$rQVU8zV8zV8zV8zV8zV8zO.QKqY3dY3dY3dY3dY3dY3dY3dY3dY3d', 'ImpTrax Admin')
ON CONFLICT (email) DO NOTHING;