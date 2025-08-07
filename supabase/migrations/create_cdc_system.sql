-- Create Change Data Capture (CDC) system for lead tracking

-- Create user roles table if not exists
CREATE TABLE IF NOT EXISTS public.user_roles (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    role VARCHAR(50) NOT NULL DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id)
);

-- Create change log table for CDC
CREATE TABLE IF NOT EXISTS public.lead_change_log (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    lead_id UUID REFERENCES public.contact_submissions(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id),
    user_email VARCHAR(255),
    operation_type VARCHAR(20) NOT NULL, -- 'CREATE', 'UPDATE', 'DELETE'
    field_name VARCHAR(100),
    old_value TEXT,
    new_value TEXT,
    changed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    session_id VARCHAR(100),
    ip_address INET,
    user_agent TEXT
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_lead_change_log_lead_id ON public.lead_change_log(lead_id);
CREATE INDEX IF NOT EXISTS idx_lead_change_log_user_id ON public.lead_change_log(user_id);
CREATE INDEX IF NOT EXISTS idx_lead_change_log_changed_at ON public.lead_change_log(changed_at DESC);
CREATE INDEX IF NOT EXISTS idx_lead_change_log_operation_type ON public.lead_change_log(operation_type);

-- Enable RLS on both tables
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lead_change_log ENABLE ROW LEVEL SECURITY;

-- RLS policies for user_roles table
CREATE POLICY "Users can view their own role" ON public.user_roles
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles" ON public.user_roles
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.user_roles ur 
            WHERE ur.user_id = auth.uid() AND ur.role = 'admin'
        )
    );

CREATE POLICY "Admins can insert roles" ON public.user_roles
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.user_roles ur 
            WHERE ur.user_id = auth.uid() AND ur.role = 'admin'
        )
    );

CREATE POLICY "Admins can update roles" ON public.user_roles
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM public.user_roles ur 
            WHERE ur.user_id = auth.uid() AND ur.role = 'admin'
        )
    );

-- RLS policies for lead_change_log table
CREATE POLICY "Authenticated users can view change logs" ON public.lead_change_log
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Admins can view all change logs" ON public.lead_change_log
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.user_roles ur 
            WHERE ur.user_id = auth.uid() AND ur.role = 'admin'
        )
    );

CREATE POLICY "System can insert change logs" ON public.lead_change_log
    FOR INSERT WITH CHECK (true);

-- Grant permissions to anon and authenticated roles
GRANT SELECT ON public.user_roles TO anon, authenticated;
GRANT INSERT, UPDATE ON public.user_roles TO authenticated;
GRANT SELECT ON public.lead_change_log TO anon, authenticated;
GRANT INSERT ON public.lead_change_log TO authenticated;

-- Function to get user role
CREATE OR REPLACE FUNCTION public.get_user_role(user_uuid UUID DEFAULT auth.uid())
RETURNS VARCHAR(50)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    RETURN (
        SELECT role 
        FROM public.user_roles 
        WHERE user_id = user_uuid
    );
END;
$$;

-- Function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin(user_uuid UUID DEFAULT auth.uid())
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    RETURN (
        SELECT role = 'admin'
        FROM public.user_roles 
        WHERE user_id = user_uuid
    );
END;
$$;

-- Function to log changes
CREATE OR REPLACE FUNCTION public.log_lead_change(
    p_lead_id UUID,
    p_operation_type VARCHAR(20),
    p_field_name VARCHAR(100) DEFAULT NULL,
    p_old_value TEXT DEFAULT NULL,
    p_new_value TEXT DEFAULT NULL,
    p_session_id VARCHAR(100) DEFAULT NULL
)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
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

-- Insert default admin user role (you can modify this email)
-- Note: This will only work if the user exists in auth.users
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'
FROM auth.users
WHERE email = 'admin@example.com' -- Change this to your admin email
ON CONFLICT (user_id) DO NOTHING;

-- Grant execute permissions on functions
GRANT EXECUTE ON FUNCTION public.get_user_role(UUID) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.is_admin(UUID) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.log_lead_change(UUID, VARCHAR(20), VARCHAR(100), TEXT, TEXT, VARCHAR(100)) TO authenticated;