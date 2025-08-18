
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing required Supabase environment variables')
}

const client = createClient(supabaseUrl, supabaseAnonKey)

// Expose URL/key on the exported object for any modules that read them directly.
// Also relax typing to "any" to prevent TS errors when accessing protected fields in certain pages (e.g., Leads.tsx).
;(client as any).supabaseUrl = supabaseUrl
;(client as any).supabaseKey = supabaseAnonKey

// Export as any to bypass protected property TypeScript checks in legacy code paths.
export const supabase: any = client

