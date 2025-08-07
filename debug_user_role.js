import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tsfjragjkyjtxkgcrakt.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzZmpyYWdqa3lqdHhrZ2NyYWt0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDUxNDAxMiwiZXhwIjoyMDcwMDkwMDEyfQ.2_FVIEM-YJ5me7HSWfo3x0nPEaZMk8LbllPcJT2l61o';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzZmpyYWdqa3lqdHhrZ2NyYWt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1MTQwMTIsImV4cCI6MjA3MDA5MDAxMn0.JlCB3N3ewh_B_WCxisqe9Qqzdt8uRXPvqh8dNBbqmyU';

const supabaseService = createClient(supabaseUrl, supabaseServiceKey);
const supabaseAnon = createClient(supabaseUrl, supabaseAnonKey);

async function debugUserRole() {
  const userId = 'f555b812-8e4a-4268-87f4-8f4da1f7f25b';
  
  console.log('=== Debugging User Role Issue ===');
  console.log('User ID:', userId);
  
  // 1. Check user exists in auth.users using service role
  console.log('\n1. Checking user in auth.users...');
  const { data: authUser, error: authError } = await supabaseService.auth.admin.getUserById(userId);
  if (authError) {
    console.error('Auth user error:', authError);
  } else {
    console.log('Auth user found:', authUser.user?.email);
  }
  
  // 2. Check user_roles table using service role
  console.log('\n2. Checking user_roles with service role...');
  const { data: serviceRoleData, error: serviceError } = await supabaseService
    .from('user_roles')
    .select('*')
    .eq('user_id', userId);
  
  if (serviceError) {
    console.error('Service role query error:', serviceError);
  } else {
    console.log('Service role result:', serviceRoleData);
  }
  
  // 3. Try to query user_roles as authenticated user
  console.log('\n3. Simulating authenticated user query...');
  
  // First, sign in as the user
  const { data: signInData, error: signInError } = await supabaseAnon.auth.signInWithPassword({
    email: 'admin@imptrax.com',
    password: 'AdminSecure2025!'
  });
  
  if (signInError) {
    console.error('Sign in error:', signInError);
    return;
  }
  
  console.log('Signed in successfully');
  
  // Now try to query user_roles as authenticated user
  const { data: authRoleData, error: authRoleError } = await supabaseAnon
    .from('user_roles')
    .select('role')
    .eq('user_id', userId)
    .single();
  
  if (authRoleError) {
    console.error('Authenticated role query error:', authRoleError);
  } else {
    console.log('Authenticated role result:', authRoleData);
  }
  
  // 4. Check current session
  console.log('\n4. Checking current session...');
  const { data: session } = await supabaseAnon.auth.getSession();
  console.log('Current session user ID:', session.session?.user?.id);
  console.log('Target user ID:', userId);
  console.log('IDs match:', session.session?.user?.id === userId);
  
  // 5. Check RLS policies
  console.log('\n5. Checking RLS policies...');
  const { data: policies, error: policyError } = await supabaseService
    .rpc('sql', {
      query: "SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual FROM pg_policies WHERE tablename = 'user_roles';"
    });
  
  if (policyError) {
    console.error('Policy query error:', policyError);
  } else {
    console.log('RLS Policies:', JSON.stringify(policies, null, 2));
  }
}

debugUserRole().catch(console.error);