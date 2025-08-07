// Test script to verify database connection and permissions
import { createClient } from '@supabase/supabase-js';

// Get Supabase credentials from the actual client configuration
const supabaseUrl = 'https://tsfjragjkyjtxkgcrakt.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzZmpyYWdqa3lqdHhrZ2NyYWt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1MTQwMTIsImV4cCI6MjA3MDA5MDAxMn0.JlCB3N3ewh_B_WCxisqe9Qqzdt8uRXPvqh8dNBbqmyU';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testDatabaseConnection() {
  console.log('🔍 Testing database connection and permissions...');
  
  try {
    // Test 1: Check if we can read from contact_submissions
    console.log('\n📖 Test 1: Reading from contact_submissions table...');
    const { data: readData, error: readError } = await supabase
      .from('contact_submissions')
      .select('id, first_name, last_name, email')
      .limit(1);
    
    if (readError) {
      console.error('❌ Read test failed:', readError);
    } else {
      console.log('✅ Read test successful:', readData);
    }
    
    // Test 2: Check authentication status
    console.log('\n🔐 Test 2: Checking authentication status...');
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError) {
      console.error('❌ Auth check failed:', authError);
    } else {
      console.log('✅ Auth status:', user ? 'Authenticated' : 'Not authenticated');
      if (user) {
        console.log('User ID:', user.id);
        console.log('User email:', user.email);
      }
    }
    
    // Test 3: Try to insert a test record (if authenticated)
    if (user) {
      console.log('\n📝 Test 3: Attempting to insert test record...');
      const testData = {
        first_name: 'Test',
        last_name: 'User',
        email: 'test@example.com',
        message: 'Test message from connection test',
        lead_status: 'new'
      };
      
      const { data: insertData, error: insertError } = await supabase
        .from('contact_submissions')
        .insert([testData])
        .select();
      
      if (insertError) {
        console.error('❌ Insert test failed:', insertError);
      } else {
        console.log('✅ Insert test successful:', insertData);
        
        // Clean up: delete the test record
        if (insertData && insertData[0]) {
          const { error: deleteError } = await supabase
            .from('contact_submissions')
            .delete()
            .eq('id', insertData[0].id);
          
          if (deleteError) {
            console.error('⚠️ Cleanup failed:', deleteError);
          } else {
            console.log('🧹 Test record cleaned up successfully');
          }
        }
      }
    } else {
      console.log('⏭️ Skipping insert test - not authenticated');
    }
    
    // Test 4: Check table permissions
    console.log('\n🔒 Test 4: Checking table permissions...');
    const { data: permData, error: permError } = await supabase
      .rpc('check_table_permissions', { table_name: 'contact_submissions' })
      .single();
    
    if (permError) {
      console.log('ℹ️ Permission check function not available (this is normal)');
    } else {
      console.log('✅ Permission check result:', permData);
    }
    
  } catch (error) {
    console.error('💥 Unexpected error during testing:', error);
  }
}

// Run the test
testDatabaseConnection().then(() => {
  console.log('\n🏁 Database connection test completed');
}).catch((error) => {
  console.error('💥 Test execution failed:', error);
});