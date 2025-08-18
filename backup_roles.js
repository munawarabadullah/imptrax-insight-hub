import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

// Get Supabase credentials from environment or use defaults
const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://tsfjragjkyjtxkgcrakt.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function backupUserRoles() {
  try {
    console.log('Starting backup of user_roles table...');
    
    // Fetch all current user_roles data
    const { data: roles, error } = await supabase
      .from('user_roles')
      .select('*')
      .order('created_at', { ascending: true });
    
    if (error) {
      console.error('Error fetching user_roles:', error);
      return;
    }
    
    console.log(`Found ${roles?.length || 0} role records to backup`);
    
    // Create backup data with timestamp
    const backupData = {
      backup_timestamp: new Date().toISOString(),
      table_name: 'user_roles',
      record_count: roles?.length || 0,
      data: roles || []
    };
    
    // Save backup to JSON file
    const backupFileName = `user_roles_backup_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
    fs.writeFileSync(backupFileName, JSON.stringify(backupData, null, 2));
    
    console.log(`Backup completed successfully!`);
    console.log(`Backup file: ${backupFileName}`);
    console.log(`Records backed up: ${roles?.length || 0}`);
    
    // Display current roles for reference
    if (roles && roles.length > 0) {
      console.log('\nCurrent roles in the system:');
      const uniqueRoles = [...new Set(roles.map(r => r.role))];
      uniqueRoles.forEach(role => {
        const count = roles.filter(r => r.role === role).length;
        console.log(`- ${role}: ${count} user(s)`);
      });
    }
    
  } catch (error) {
    console.error('Backup failed:', error);
  }
}

// Run backup
backupUserRoles();