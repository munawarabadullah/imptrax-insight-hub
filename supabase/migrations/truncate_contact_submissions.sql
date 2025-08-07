-- Truncate contact_submissions table completely
-- This will remove ALL existing data to start fresh

-- First, delete all records from dependent tables to avoid foreign key constraints
DELETE FROM lead_change_log;

-- Then truncate the main table
TRUNCATE TABLE contact_submissions RESTART IDENTITY CASCADE;

-- Verify the table is empty
SELECT COUNT(*) as remaining_records FROM contact_submissions;