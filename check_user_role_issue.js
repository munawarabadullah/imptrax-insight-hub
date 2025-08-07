// Script to check user details and role assignment for access denied issue
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tsfjragjkyjtxkgcrakt.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzZmpyYWdqa3lqdHhrZ2NyYWt0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDUxNDAxMiwiZXhwIjoyMDcwMDkwMDEyfQ.2_FVIEM-YJ5me7HSWfo3x0nPEaZMk8LbllPcJT2l61o';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function checkUserRoleIssue() {
  const userId = 'f555b812-8e4a-4268-87f4-8f4da1f7f25b';
  
  console.log('=== Checking User Role Issue ===');
  console.log(`User ID: ${userId}`);
  
  try {
    // 1. Check user details in auth.users
    console.log('\n1. Checking user details in auth.users...');
    const { data: userData, error: userError } = await supabase
      .from('auth.users')
      .select('*')
      .eq('id', userId)
      .single();
    
    if (userError) {
      console.error('Error fetching user:', userError);
      // Try alternative query
      const { data: authData, error: authError } = await supabase.auth.admin.getUserById(userId);
      if (authError) {
        console.error('Error with admin getUserById:', authError);
        return;
      }
      console.log('User found via admin API:', authData.user);
    } else {
      console.log('User found:', userData);
    }
    
    // 2. Check role assignment in user_roles table
    console.log('\n2. Checking role assignment in user_roles...');
    const { data: roleData, error: roleError } = await supabase
      .from('user_roles')
      .select(`
        *,
        roles (
          id,
          name,
          permissions
        )
      `)
      .eq('user_id', userId);
    
    if (roleError) {
      console.error('Error fetching user roles:', roleError);
    } else {
      console.log('User roles found:', roleData);
      if (roleData.length === 0) {
        console.log('❌ NO ROLES ASSIGNED - This is the problem!');
      } else {
        console.log('✅ User has roles assigned:', roleData.length);
      }
    }
    
    // 3. Check all available roles
    console.log('\n3. Checking available roles...');
    const { data: allRoles, error: rolesError } = await supabase
      .from('roles')
      .select('*')
      .order('name');
    
    if (rolesError) {
      console.error('Error fetching roles:', rolesError);
    } else {
      console.log('Available roles:');
      allRoles.forEach(role => {
        console.log(`  - ${role.name} (ID: ${role.id})`);
      });
    }
    
    // 4. If this is admin@imptrax.com, assign Admin role
    const { data: authUser } = await supabase.auth.admin.getUserById(userId);
    if (authUser && authUser.user && authUser.user.email === 'admin@imptrax.com') {
      console.log('\n4. This is the admin user - assigning Admin role...');
      
      // Find Admin role
      const adminRole = allRoles.find(role => role.name === 'Admin');
      if (adminRole) {
        const { data: assignData, error: assignError } = await supabase
          .from('user_roles')
          .insert({
            user_id: userId,
            role_id: adminRole.id
          });
        
        if (assignError) {
          console.error('Error assigning Admin role:', assignError);
        } else {
          console.log('✅ Admin role assigned successfully!');
        }
      } else {
        console.error('❌ Admin role not found!');
      }
    }
    
    // 5. Verify role assignment after fix
    console.log('\n5. Verifying role assignment after fix...');
    const { data: finalRoleData, error: finalRoleError } = await supabase
      .from('user_roles')
      .select(`
        *,
        roles (
          id,
          name,
          permissions
        )
      `)
      .eq('user_id', userId);
    
    if (finalRoleError) {
      console.error('Error in final verification:', finalRoleError);
    } else {
      console.log('Final role assignment:', finalRoleData);
      if (finalRoleData.length > 0) {
        console.log('✅ User now has roles assigned!');
        finalRoleData.forEach(userRole => {
          console.log(`  - Role: ${userRole.roles.name}`);
          console.log(`  - Permissions: ${JSON.stringify(userRole.roles.permissions)}`);
        });
      } else {
        console.log('❌ User still has no roles assigned');
      }
    }
    
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

checkUserRoleIssue();