-- Grant permissions for contact_submissions table
-- This allows the anon and authenticated roles to interact with the table

-- Grant SELECT permission to anon role (for public access)
GRANT SELECT ON contact_submissions TO anon;

-- Grant full permissions to authenticated role
GRANT ALL PRIVILEGES ON contact_submissions TO authenticated;

-- Create RLS policies for contact_submissions
-- Allow anon users to insert new submissions (for contact forms)
CREATE POLICY "Allow anon insert" ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anon users to read all submissions
CREATE POLICY "Allow anon select" ON contact_submissions
  FOR SELECT
  TO anon
  USING (true);

-- Allow authenticated users full access
CREATE POLICY "Allow authenticated all" ON contact_submissions
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);