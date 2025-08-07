// Script to reset admin@imptrax.com password
import { createClient } from '@supabase/supabase-js';

// Get Supabase credentials from environment or use defaults
const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://ixqhqjqjqjqjqjqjqjqj.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'your-service-role-key';

// Create Supabase client with service role key for admin operations
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function resetAdminPassword() {
  console.log('🔄 Resetting admin@imptrax.com password...');
  
  try {
    // Reset password for admin@imptrax.com
    const { data, error } = await supabase.auth.admin.updateUserById(
      'f555b812-8e4a-4268-87f4-8f4da1f7f25b', // Admin user ID from previous check
      {
        password: 'admin123!', // New temporary password
        email_confirm: true // Ensure email is confirmed
      }
    );

    if (error) {
      console.error('❌ Error resetting password:', error.message);
      return;
    }

    console.log('✅ Password reset successfully!');
    console.log('📧 Email: admin@imptrax.com');
    console.log('🔑 New Password: admin123!');
    console.log('⚠️  Please change this password after logging in');
    
    // Verify the user can be retrieved
    const { data: userData, error: userError } = await supabase.auth.admin.getUserById(
      'f555b812-8e4a-4268-87f4-8f4da1f7f25b'
    );
    
    if (userError) {
      console.error('❌ Error retrieving user after reset:', userError.message);
    } else {
      console.log('✅ User verification successful');
      console.log('📊 User status:', {
        email: userData.user.email,
        emailConfirmed: userData.user.email_confirmed_at ? 'Yes' : 'No',
        lastSignIn: userData.user.last_sign_in_at || 'Never',
        createdAt: userData.user.created_at
      });
    }
    
  } catch (err) {
    console.error('❌ Unexpected error:', err.message);
  }
}

// Run the password reset
resetAdminPassword();