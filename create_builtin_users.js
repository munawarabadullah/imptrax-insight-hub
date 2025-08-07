import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://tsfjragjkyjtxkgcrakt.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzZmpyYWdqa3lqdHhrZ2NyYWt0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDUxNDAxMiwiZXhwIjoyMDcwMDkwMDEyfQ.2_FVIEM-YJ5me7HSWfo3x0nPEaZMk8LbllPcJT2l61o';

// Create Supabase client with service role key for admin operations
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

// Define built-in users for each role
const builtInUsers = [
  {
    email: 'admin@imptrax.com',
    password: 'AdminPass1234!',
    role: 'Admin',
    firstName: 'System',
    lastName: 'Administrator'
  },
  {
    email: 'executive@imptrax.com',
    password: 'ExecPass1234!',
    role: 'Executive',
    firstName: 'Executive',
    lastName: 'User'
  },
  {
    email: 'director@imptrax.com',
    password: 'DirectorPass1234!',
    role: 'Director',
    firstName: 'Director',
    lastName: 'User'
  },
  {
    email: 'manager@imptrax.com',
    password: 'ManagerPass1234!',
    role: 'Manager',
    firstName: 'Manager',
    lastName: 'User'
  },
  {
    email: 'sales@imptrax.com',
    password: 'SalesPass1234!',
    role: 'Sales',
    firstName: 'Sales',
    lastName: 'User'
  }
];

async function createBuiltInUsers() {
  console.log('🚀 Starting built-in user creation process...');
  console.log('=' .repeat(50));

  for (const userData of builtInUsers) {
    try {
      console.log(`\n📧 Processing user: ${userData.email}`);
      
      // Check if user already exists by listing all users and finding by email
      const { data: allUsers, error: listError } = await supabase.auth.admin.listUsers();
      
      if (listError) {
        console.error(`❌ Error listing users:`, listError.message);
        continue;
      }
      
      const existingUser = allUsers.users.find(u => u.email === userData.email);
      
      if (existingUser) {
        console.log(`⚠️  User ${userData.email} already exists. Skipping creation.`);
        
        // Check if role assignment exists
        const { data: roleData, error: roleCheckError } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', existingUser.id)
          .single();
        
        if (roleCheckError || !roleData) {
          console.log(`🔧 Assigning role ${userData.role} to existing user...`);
          
          const { error: roleAssignError } = await supabase
            .from('user_roles')
            .upsert({
              user_id: existingUser.id,
              role: userData.role
            });
          
          if (roleAssignError) {
            console.error(`❌ Error assigning role to ${userData.email}:`, roleAssignError.message);
          } else {
            console.log(`✅ Role ${userData.role} assigned to ${userData.email}`);
          }
        } else {
          console.log(`✅ User ${userData.email} already has role: ${roleData.role}`);
        }
        continue;
      }
      
      // Create new user
      console.log(`🔨 Creating new user: ${userData.email}`);
      const { data: newUser, error: createError } = await supabase.auth.admin.createUser({
        email: userData.email,
        password: userData.password,
        email_confirm: true,
        user_metadata: {
          first_name: userData.firstName,
          last_name: userData.lastName
        }
      });
      
      if (createError) {
        console.error(`❌ Error creating user ${userData.email}:`, createError.message);
        continue;
      }
      
      if (!newUser.user) {
        console.error(`❌ Failed to create user ${userData.email}: No user data returned`);
        continue;
      }
      
      console.log(`✅ User created successfully: ${userData.email}`);
      console.log(`   User ID: ${newUser.user.id}`);
      
      // Assign role to the new user
      console.log(`🔧 Assigning role ${userData.role}...`);
      const { error: roleError } = await supabase
        .from('user_roles')
        .insert({
          user_id: newUser.user.id,
          role: userData.role
        });
      
      if (roleError) {
        console.error(`❌ Error assigning role to ${userData.email}:`, roleError.message);
      } else {
        console.log(`✅ Role ${userData.role} assigned successfully`);
      }
      
      console.log(`🎉 User ${userData.email} setup completed!`);
      
    } catch (error) {
      console.error(`❌ Unexpected error processing ${userData.email}:`, error.message);
    }
  }
  
  console.log('\n' + '=' .repeat(50));
  console.log('🎯 Built-in user creation process completed!');
  console.log('\n📋 Summary of created users:');
  console.log('   • admin@imptrax.com (Admin) - Password: AdminPass1234!');
  console.log('   • executive@imptrax.com (Executive) - Password: ExecPass1234!');
  console.log('   • director@imptrax.com (Director) - Password: DirectorPass1234!');
  console.log('   • manager@imptrax.com (Manager) - Password: ManagerPass1234!');
  console.log('   • sales@imptrax.com (Sales) - Password: SalesPass1234!');
  console.log('\n🔐 All passwords follow the complex pattern: [Role]Pass1234!');
  console.log('\n⚠️  IMPORTANT: Change these default passwords in production!');
}

// Verify user roles function
async function verifyUserRoles() {
  console.log('\n🔍 Verifying user roles...');
  
  try {
    const { data: userRoles, error } = await supabase
      .from('user_roles')
      .select(`
        user_id,
        role
      `);
    
    if (error) {
      console.error('❌ Error fetching user roles:', error.message);
      return;
    }
    
    console.log('\n📊 Current user roles in database:');
    for (const userRole of userRoles) {
      // Get user email
      const { data: userData } = await supabase.auth.admin.getUserById(userRole.user_id);
      const email = userData?.user?.email || 'Unknown';
      console.log(`   • ${email}: ${userRole.role}`);
    }
    
  } catch (error) {
    console.error('❌ Error verifying user roles:', error.message);
  }
}

// Main execution
async function main() {
  try {
    await createBuiltInUsers();
    await verifyUserRoles();
  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

// Run the script
console.log('🚀 Script starting...');
main().catch(error => {
  console.error('❌ Script failed:', error);
  process.exit(1);
});

export { createBuiltInUsers, verifyUserRoles };