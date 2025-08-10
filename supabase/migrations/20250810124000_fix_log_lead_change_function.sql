-- Fix: Make public.log_lead_change search_path immutable to address security finding
-- Ensures the function does not depend on the caller's search_path.

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
SECURITY DEFINER SET search_path = 'public'
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