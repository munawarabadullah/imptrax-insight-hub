
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tsfjragjkyjtxkgcrakt.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzZmpyYWdqa3lqdHhrZ2NyYWt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1MTQwMTIsImV4cCI6MjA3MDA5MDAxMn0.JlCB3N3ewh_B_WCxisqe9Qqzdt8uRXPvqh8dNBbqmyU'

// Create the client
const client = createClient(supabaseUrl, supabaseAnonKey)

// Expose URL/key on the exported object for any modules that read them directly.
// Also relax typing to "any" to prevent TS errors when accessing protected fields in certain pages (e.g., Leads.tsx).
;(client as any).supabaseUrl = supabaseUrl
;(client as any).supabaseKey = supabaseAnonKey

// Export as any to bypass protected property TypeScript checks in legacy code paths.
export const supabase: any = client

