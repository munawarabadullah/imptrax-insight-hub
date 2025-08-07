// Script to check admin@imptrax.com user status in Supabase
import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = 'https://tsfjragjkyjtxkgcrakt.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzZmpyYWdqa3lqdHhrZ2NyYWt0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDUxNDAxMiwiZXhwIjoyMDcwMDkwMDEyfQ.2_FVIEM-YJ5me7HSWfo3x0nPEaZMk8LbllPcJT2l61o';

// Create Supabase client with service role key for admin operations
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function checkAdminUser() {
  console.log('🔍 Checking admin@imptrax.com user status...');
  
  try {
    let allUsers = [];
    
    // Try direct auth admin API first
    console.log('Trying auth admin API...');
    const { data: authUsers, error: authError } = await supabase.auth.admin.listUsers();
    
    if (authError) {
      console.error('❌ Error fetching users via auth admin:', authError);
      return;
    }
    
    // Convert auth admin format to our expected format
    allUsers = authUsers.users.map(user => ({
      id: user.id,
      email: user.email,
      created_at: user.created_at,
      email_confirmed_at: user.email_confirmed_at,
      last_sign_in_at: user.last_sign_in_at,
      deleted_at: user.deleted_at,
      banned_until: user.banned_until,
      raw_app_meta_data: user.app_metadata,
      raw_user_meta_data: user.user_metadata
    }));
    
    console.log(`\n📊 Total users found: ${allUsers.length}`);
    
    // Look for admin@imptrax.com specifically
    const adminUser = allUsers.find(user => user.email === 'admin@imptrax.com');
    
    if (adminUser) {
      console.log('\n✅ admin@imptrax.com found:');
      console.log('   ID:', adminUser.id);
      console.log('   Email:', adminUser.email);
      console.log('   Created:', adminUser.created_at);
      console.log('   Email Confirmed:', adminUser.email_confirmed_at);
      console.log('   Last Sign In:', adminUser.last_sign_in_at);
      console.log('   Deleted At:', adminUser.deleted_at);
      console.log('   Banned Until:', adminUser.banned_until);
      console.log('   App Meta Data:', JSON.stringify(adminUser.raw_app_meta_data, null, 2));
      console.log('   User Meta Data:', JSON.stringify(adminUser.raw_user_meta_data, null, 2));
      
      if (adminUser.deleted_at) {
        console.log('\n⚠️  WARNING: This user has been deleted!');
      }
      if (adminUser.banned_until) {
        console.log('\n⚠️  WARNING: This user is banned until:', adminUser.banned_until);
      }
    } else {
      console.log('\n❌ admin@imptrax.com NOT FOUND in auth.users table');
    }
    
    // Check user_roles table for admin roles
    console.log('\n🔍 Checking user_roles table...');
    const { data: userRoles, error: rolesError } = await supabase
      .from('user_roles')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (rolesError) {
      console.error('❌ Error fetching user roles:', rolesError);
    } else {
      console.log(`📊 Total user roles found: ${userRoles.length}`);
      
      if (adminUser && userRoles.length > 0) {
        const adminRoles = userRoles.filter(role => role.user_id === adminUser.id);
        if (adminRoles.length > 0) {
          console.log('\n👤 Admin user roles:');
          adminRoles.forEach(role => {
            console.log(`   - Role: ${role.role}, Created: ${role.created_at}`);
          });
        } else {
          console.log('\n⚠️  No roles found for admin@imptrax.com');
        }
      }
      
      // Show all user roles for context
      if (userRoles.length > 0) {
        console.log('\n📋 All user roles in system:');
        userRoles.forEach(role => {
          const user = allUsers.find(u => u.id === role.user_id);
          console.log(`   - User: ${user?.email || 'Unknown'}, Role: ${role.role}, Created: ${role.created_at}`);
        });
      }
    }
    
    // Show all users for context
    console.log('\n📋 All users in system:');
    allUsers.forEach(user => {
      const status = user.deleted_at ? ' (DELETED)' : user.banned_until ? ' (BANNED)' : '';
      console.log(`   - ${user.email}${status} (Created: ${user.created_at})`);
    });
    
  } catch (error) {
    console.error('❌ Unexpected error:', error);
  }
}

// Run the check
checkAdminUser().then(() => {
  console.log('\n✅ Admin user check completed');
}).catch(error => {
  console.error('❌ Script failed:', error);
});