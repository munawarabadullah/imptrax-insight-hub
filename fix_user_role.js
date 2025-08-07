import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tsfjragjkyjtxkgcrakt.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzZmpyYWdqa3lqdHhrZ2NyYWt0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDUxNDAxMiwiZXhwIjoyMDcwMDkwMDEyfQ.2_FVIEM-YJ5me7HSWfo3x0nPEaZMk8LbllPcJT2l61o';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const userId = 'f555b812-8e4a-4268-87f4-8f4da1f7f25b';

async function fixUserRole() {
  console.log('🔍 Checking user details...');
  
  // Check user in auth.users
  const { data: authUser, error: authError } = await supabase.auth.admin.getUserById(userId);
  
  if (authError) {
    console.error('❌ Error fetching auth user:', authError);
    return;
  }
  
  if (!authUser.user) {
    console.error('❌ User not found in auth.users');
    return;
  }
  
  console.log('✅ User found:', {
    id: authUser.user.id,
    email: authUser.user.email,
    email_confirmed_at: authUser.user.email_confirmed_at,
    banned_until: authUser.user.banned_until,
    user_metadata: authUser.user.user_metadata
  });
  
  // Check if user exists in user_roles table
  const { data: userRole, error: roleError } = await supabase
    .from('user_roles')
    .select('*')
    .eq('user_id', userId)
    .single();
    
  if (roleError && roleError.code !== 'PGRST116') {
    console.error('❌ Error checking user role:', roleError);
    return;
  }
  
  if (userRole) {
    console.log('✅ User role found:', userRole);
  } else {
    console.log('⚠️ No role found in user_roles table. Creating Admin role...');
    
    // Insert Admin role for this user
    const { data: newRole, error: insertError } = await supabase
      .from('user_roles')
      .insert({
        user_id: userId,
        role: 'Admin'
      })
      .select()
      .single();
      
    if (insertError) {
      console.error('❌ Error creating user role:', insertError);
      return;
    }
    
    console.log('✅ Admin role created:', newRole);
  }
  
  // Check if user exists in admin_users table
  const { data: adminUser, error: adminError } = await supabase
    .from('admin_users')
    .select('*')
    .eq('email', authUser.user.email)
    .single();
    
  if (adminError && adminError.code !== 'PGRST116') {
    console.error('❌ Error checking admin user:', adminError);
    return;
  }
  
  if (adminUser) {
    console.log('✅ Admin user found:', adminUser);
  } else {
    console.log('⚠️ No admin user found. Creating admin user record...');
    
    // Create admin user record
    const { data: newAdminUser, error: adminInsertError } = await supabase
      .from('admin_users')
      .insert({
        id: userId,
        email: authUser.user.email,
        password_hash: 'managed_by_supabase_auth',
        name: authUser.user.user_metadata?.full_name || 'Admin User',
        role: 'admin',
        is_active: true
      })
      .select()
      .single();
      
    if (adminInsertError) {
      console.error('❌ Error creating admin user:', adminInsertError);
      return;
    }
    
    console.log('✅ Admin user created:', newAdminUser);
  }
  
  // Final verification
  console.log('\n🔍 Final verification...');
  
  const { data: finalRole, error: finalError } = await supabase
    .from('user_roles')
    .select('*')
    .eq('user_id', userId)
    .single();
    
  if (finalRole) {
    console.log('✅ User role verified:', finalRole);
  } else {
    console.error('❌ Role verification failed:', finalError);
  }
  
  console.log('\n🎉 User role fix completed!');
}

fixUserRole().catch(console.error);