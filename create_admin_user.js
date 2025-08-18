// Script to create admin@imptrax.com user and assign admin role
import { createClient } from '@supabase/supabase-js';

// Get Supabase credentials from environment or use defaults
const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://tsfjragjkyjtxkgcrakt.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Create Supabase client with service role key for admin operations
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function createAdminUser() {
  console.log('🔧 Creating admin@imptrax.com user...');
  
  try {
    // Create the admin user
    const { data: userData, error: userError } = await supabase.auth.admin.createUser({
      email: 'admin@imptrax.com',
      password: 'admin123!', // Default password - should be changed after first login
      email_confirm: true, // Auto-confirm email
      user_metadata: {
        role: 'admin',
        created_by: 'system'
      }
    });

    if (userError) {
      console.error('❌ Error creating user:', userError.message);
      return;
    }

    console.log('✅ Admin user created successfully!');
    console.log('📧 Email:', userData.user.email);
    console.log('🆔 User ID:', userData.user.id);
    console.log('🔑 Default password: admin123! (please change after first login)');

    // Now assign the admin role in user_roles table
    console.log('\n🔧 Assigning admin role...');
    
    const { data: roleData, error: roleError } = await supabase
      .from('user_roles')
      .upsert({
        user_id: userData.user.id,
        role: 'admin',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'user_id'
      });

    if (roleError) {
      console.error('❌ Error assigning role:', roleError.message);
      return;
    }

    console.log('✅ Admin role assigned successfully!');
    
    // Verify the setup
    console.log('\n🔍 Verifying admin user setup...');
    
    const { data: verifyUser, error: verifyError } = await supabase.auth.admin.listUsers();
    if (verifyError) {
      console.error('❌ Error verifying users:', verifyError.message);
      return;
    }
    
    const adminUser = verifyUser.users.find(u => u.email === 'admin@imptrax.com');
    if (adminUser) {
      console.log('✅ Admin user found in auth.users');
      console.log('📧 Email confirmed:', adminUser.email_confirmed_at ? 'Yes' : 'No');
      console.log('🔐 Last sign in:', adminUser.last_sign_in_at || 'Never');
    }
    
    const { data: roleCheck, error: roleCheckError } = await supabase
      .from('user_roles')
      .select('*')
      .eq('user_id', userData.user.id);
      
    if (roleCheckError) {
      console.error('❌ Error checking role:', roleCheckError.message);
      return;
    }
    
    if (roleCheck && roleCheck.length > 0) {
      console.log('✅ Admin role assigned in user_roles table');
      console.log('👤 Role:', roleCheck[0].role);
    }
    
    console.log('\n🎉 Admin user setup completed successfully!');
    console.log('📝 You can now login with:');
    console.log('   Email: admin@imptrax.com');
    console.log('   Password: admin123!');
    console.log('⚠️  Please change the password after first login for security.');
    
  } catch (error) {
    console.error('💥 Unexpected error:', error.message);
  }
}

// Run the script
createAdminUser();