
-- 1) Prereqs
create extension if not exists "pgcrypto";

-- 2) Ensure contact_submissions table exists (minimal base structure)
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 3) Add/align all required columns (idempotent)
alter table public.contact_submissions add column if not exists phone text;
alter table public.contact_submissions add column if not exists company text;
alter table public.contact_submissions add column if not exists job_title text;
alter table public.contact_submissions add column if not exists website text;
alter table public.contact_submissions add column if not exists company_size text;
alter table public.contact_submissions add column if not exists industry text;
alter table public.contact_submissions add column if not exists services_interested text[];
alter table public.contact_submissions alter column services_interested set default '{}';
alter table public.contact_submissions add column if not exists project_description text;
alter table public.contact_submissions add column if not exists timeline text;
alter table public.contact_submissions add column if not exists budget_range text;
alter table public.contact_submissions add column if not exists urgency text;

alter table public.contact_submissions add column if not exists preferred_contact_method text;
alter table public.contact_submissions add column if not exists best_time_to_call text;
alter table public.contact_submissions add column if not exists meeting_type text;
alter table public.contact_submissions add column if not exists additional_notes text;

-- IP/location
alter table public.contact_submissions add column if not exists ip_address text;
alter table public.contact_submissions add column if not exists city text;
alter table public.contact_submissions add column if not exists state text;
alter table public.contact_submissions add column if not exists country text;
alter table public.contact_submissions add column if not exists country_code text;
alter table public.contact_submissions add column if not exists latitude double precision;
alter table public.contact_submissions add column if not exists longitude double precision;
alter table public.contact_submissions add column if not exists timezone text;
alter table public.contact_submissions add column if not exists isp text;
alter table public.contact_submissions add column if not exists organization text;

-- Metadata
alter table public.contact_submissions add column if not exists browser_info jsonb;
alter table public.contact_submissions add column if not exists screen_info jsonb;
alter table public.contact_submissions add column if not exists timezone_info jsonb;
alter table public.contact_submissions add column if not exists referral_page text;
alter table public.contact_submissions add column if not exists cta_source text;
alter table public.contact_submissions add column if not exists user_agent text;
alter table public.contact_submissions add column if not exists session_data jsonb;
alter table public.contact_submissions add column if not exists form_completion_time integer;
alter table public.contact_submissions add column if not exists form_interaction_data jsonb;
alter table public.contact_submissions add column if not exists captcha_verified boolean default false;

-- CRM fields
alter table public.contact_submissions add column if not exists lead_score integer;
alter table public.contact_submissions add column if not exists lead_status text default 'new';
alter table public.contact_submissions add column if not exists assigned_to uuid; -- no FK to auth.users per best practices
alter table public.contact_submissions add column if not exists notes text;
alter table public.contact_submissions add column if not exists follow_up_date date;

-- 4) Update trigger for updated_at
do $$
begin
  if not exists (
    select 1 from pg_trigger 
    where tgname = 'set_contact_submissions_updated_at'
  ) then
    create trigger set_contact_submissions_updated_at
    before update on public.contact_submissions
    for each row execute function public.update_updated_at_column();
  end if;
end$$;

-- 5) Indexes for performance (idempotent)
create index if not exists idx_contact_submissions_created_at on public.contact_submissions (created_at desc);
create index if not exists idx_contact_submissions_email on public.contact_submissions (email);
create index if not exists idx_contact_submissions_lead_status on public.contact_submissions (lead_status);
create index if not exists idx_contact_submissions_urgency on public.contact_submissions (urgency);

-- 6) RLS and policies for CRM access (Director+, i.e., Director/Executive/Admin)
alter table public.contact_submissions enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies 
    where schemaname='public' and tablename='contact_submissions' and policyname='Privileged roles can view leads'
  ) then
    create policy "Privileged roles can view leads"
      on public.contact_submissions
      for select
      to authenticated
      using (public.has_permission('Director', auth.uid()));
  end if;

  if not exists (
    select 1 from pg_policies 
    where schemaname='public' and tablename='contact_submissions' and policyname='Privileged roles can insert leads'
  ) then
    create policy "Privileged roles can insert leads"
      on public.contact_submissions
      for insert
      to authenticated
      with check (public.has_permission('Director', auth.uid()));
  end if;

  if not exists (
    select 1 from pg_policies 
    where schemaname='public' and tablename='contact_submissions' and policyname='Privileged roles can update leads'
  ) then
    create policy "Privileged roles can update leads"
      on public.contact_submissions
      for update
      to authenticated
      using (public.has_permission('Director', auth.uid()));
  end if;

  if not exists (
    select 1 from pg_policies 
    where schemaname='public' and tablename='contact_submissions' and policyname='Privileged roles can delete leads'
  ) then
    create policy "Privileged roles can delete leads"
      on public.contact_submissions
      for delete
      to authenticated
      using (public.has_permission('Director', auth.uid()));
  end if;
end$$;

-- 7) Lead change log table (for audit/history)
create table if not exists public.lead_change_log (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.contact_submissions(id) on delete cascade,
  user_id uuid,
  user_email text,
  operation_type varchar(50) not null,
  field_name varchar(255),
  old_value text,
  new_value text,
  session_id varchar(255),
  changed_at timestamptz not null default now()
);

alter table public.lead_change_log enable row level security;

-- Allow Director+ to view history
do $$
begin
  if not exists (
    select 1 from pg_policies 
    where schemaname='public' and tablename='lead_change_log' and policyname='Privileged roles can view lead history'
  ) then
    create policy "Privileged roles can view lead history"
      on public.lead_change_log
      for select
      to authenticated
      using (public.has_permission('Director', auth.uid()));
  end if;
end$$;

-- Helpful indexes
create index if not exists idx_lead_change_log_lead_id on public.lead_change_log (lead_id);
create index if not exists idx_lead_change_log_changed_at on public.lead_change_log (changed_at desc);
