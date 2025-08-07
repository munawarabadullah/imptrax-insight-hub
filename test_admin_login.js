// Test script to verify admin login functionality
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tsfjragjkyjtxkgcrakt.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzZmpyYWdqa3lqdHhrZ2NyYWt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1MTQwMTIsImV4cCI6MjA3MDA5MDAxMn0.JlCB3N3ewh_B_WCxisqe9Qqzdt8uRXPvqh8dNBbqmyU';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testAdminLogin() {
  console.log('=== Testing Admin Login Functionality ===');
  
  try {
    // Test login with admin credentials
    console.log('\n1. Testing login with admin@imptrax.com...');
    const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
      email: 'admin@imptrax.com',
      password: 'AdminSecure2025!'
    });
    
    if (loginError) {
      console.error('Login failed:', loginError.message);
      return;
    }
    
    console.log('Login successful!');
    console.log('User ID:', loginData.user?.id);
    console.log('User Email:', loginData.user?.email);
    
    // Check user role
    console.log('\n2. Checking user role...');
    const { data: roleData, error: roleError } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', loginData.user?.id)
      .single();
    
    if (roleError) {
      console.error('Role check failed:', roleError.message);
    } else {
      console.log('User role:', roleData?.role);
    }
    
    // Test auth state
    console.log('\n3. Getting current session...');
    const { data: sessionData } = await supabase.auth.getSession();
    console.log('Session exists:', !!sessionData.session);
    console.log('Session user:', sessionData.session?.user?.email);
    
    // Sign out
    console.log('\n4. Signing out...');
    await supabase.auth.signOut();
    console.log('Signed out successfully');
    
  } catch (error) {
    console.error('Test failed with exception:', error);
  }
}

testAdminLogin();