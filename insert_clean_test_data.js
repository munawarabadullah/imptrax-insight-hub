// Script to insert ONLY 5 clean test leads into empty Supabase table
import { createClient } from '@supabase/supabase-js';

// Get Supabase credentials from environment or use defaults
const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://tsfjragjkyjtxkgcrakt.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// Function to insert exactly 5 test leads for today
async function insertCleanTestLeads() {
  console.log('📝 Inserting 5 clean test leads for today...');
  
  const cleanTestLeads = [
    {
      first_name: 'James',
      last_name: 'Anderson',
      email: 'james.anderson@techcorp.com',
      phone: '+1-555-0101',
      company: 'TechCorp Solutions',
      job_title: 'Chief Technology Officer',
      website: 'https://techcorp.com',
      company_size: '100-500',
      industry: 'Technology',
      country: 'United States',
      city: 'San Francisco',
      state: 'California',
      ip_address: '192.168.1.100',
      budget_range: '$50,000 - $150,000',
      timeline: '3-6 months',
      urgency: 'high',
      lead_status: 'new',
      lead_score: 85,
      project_description: 'Enterprise software development and cloud migration',
      services_interested: ['Web Development', 'Cloud Services', 'Consulting'],
      preferred_contact_method: 'email',
      best_time_to_call: 'Morning (9-12 PM)',
      meeting_type: 'video_call',
      cta_source: 'website',
      referral_page: 'https://example.com/services',
      user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      browser_info: {
        name: 'Chrome',
        version: '120.0.0.0',
        platform: 'Windows'
      },
      session_data: {
        sessionId: 'sess_' + Date.now() + '_1',
        visitDuration: 180,
        pageViews: 5
      },
      screen_info: {
        width: 1920,
        height: 1080,
        colorDepth: 24
      },
      timezone_info: {
        timezone: 'America/Los_Angeles',
        offset: -8
      },
      form_completion_time: 120,
      captcha_verified: true,
      form_interaction_data: {
        focusTime: 45,
        fieldChanges: 12
      },
      additional_notes: 'High-priority lead with immediate project needs',
      created_at: new Date().toISOString()
    },
    {
      first_name: 'Sarah',
      last_name: 'Williams',
      email: 'sarah.williams@innovate.co.uk',
      phone: '+44-20-7946-0958',
      company: 'Innovate Ltd',
      job_title: 'Marketing Director',
      website: 'https://innovate.co.uk',
      company_size: '50-100',
      industry: 'Marketing',
      country: 'United Kingdom',
      city: 'London',
      state: 'England',
      ip_address: '192.168.1.101',
      budget_range: '$25,000 - $75,000',
      timeline: '1-3 months',
      urgency: 'medium',
      lead_status: 'contacted',
      lead_score: 72,
      project_description: 'Digital marketing platform and analytics dashboard',
      services_interested: ['Web Development', 'Analytics', 'SEO'],
      preferred_contact_method: 'phone',
      best_time_to_call: 'Afternoon (2-5 PM)',
      meeting_type: 'phone_call',
      cta_source: 'referral',
      referral_page: 'https://example.com/portfolio',
      user_agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
      browser_info: {
        name: 'Safari',
        version: '17.1',
        platform: 'macOS'
      },
      session_data: {
        sessionId: 'sess_' + Date.now() + '_2',
        visitDuration: 240,
        pageViews: 8
      },
      screen_info: {
        width: 1440,
        height: 900,
        colorDepth: 24
      },
      timezone_info: {
        timezone: 'Europe/London',
        offset: 0
      },
      form_completion_time: 95,
      captcha_verified: true,
      form_interaction_data: {
        focusTime: 38,
        fieldChanges: 8
      },
      additional_notes: 'Interested in long-term partnership',
      created_at: new Date().toISOString()
    },
    {
      first_name: 'Michael',
      last_name: 'Thompson',
      email: 'michael.thompson@globaltech.ca',
      phone: '+1-416-555-0123',
      company: 'GlobalTech Inc',
      job_title: 'VP of Sales',
      website: 'https://globaltech.ca',
      company_size: '500+',
      industry: 'Technology',
      country: 'Canada',
      city: 'Toronto',
      state: 'Ontario',
      ip_address: '192.168.1.102',
      budget_range: '$100,000 - $300,000',
      timeline: '6-12 months',
      urgency: 'high',
      lead_status: 'qualified',
      lead_score: 92,
      project_description: 'Enterprise CRM system and sales automation platform',
      services_interested: ['Custom Software', 'Integration', 'Training'],
      preferred_contact_method: 'email',
      best_time_to_call: 'Morning (10-12 PM)',
      meeting_type: 'in_person',
      cta_source: 'linkedin',
      referral_page: 'https://example.com/case-studies',
      user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      browser_info: {
        name: 'Edge',
        version: '119.0.0.0',
        platform: 'Windows'
      },
      session_data: {
        sessionId: 'sess_' + Date.now() + '_3',
        visitDuration: 320,
        pageViews: 12
      },
      screen_info: {
        width: 2560,
        height: 1440,
        colorDepth: 32
      },
      timezone_info: {
        timezone: 'America/Toronto',
        offset: -5
      },
      form_completion_time: 180,
      captcha_verified: true,
      form_interaction_data: {
        focusTime: 65,
        fieldChanges: 15
      },
      additional_notes: 'Enterprise client with complex requirements',
      created_at: new Date().toISOString()
    },
    {
      first_name: 'Emma',
      last_name: 'Davis',
      email: 'emma.davis@startupco.com',
      phone: '+1-555-0145',
      company: 'StartupCo',
      job_title: 'Founder & CEO',
      website: 'https://startupco.com',
      company_size: '10-50',
      industry: 'Startup',
      country: 'United States',
      city: 'Austin',
      state: 'Texas',
      ip_address: '192.168.1.103',
      budget_range: '$15,000 - $50,000',
      timeline: '1-2 months',
      urgency: 'medium',
      lead_status: 'new',
      lead_score: 68,
      project_description: 'MVP development for mobile application',
      services_interested: ['Mobile Development', 'UI/UX Design', 'MVP'],
      preferred_contact_method: 'video_call',
      best_time_to_call: 'Evening (6-8 PM)',
      meeting_type: 'video_call',
      cta_source: 'google_ads',
      referral_page: 'https://example.com/startup-solutions',
      user_agent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15',
      browser_info: {
        name: 'Safari',
        version: '17.1',
        platform: 'iOS'
      },
      session_data: {
        sessionId: 'sess_' + Date.now() + '_4',
        visitDuration: 150,
        pageViews: 6
      },
      screen_info: {
        width: 390,
        height: 844,
        colorDepth: 24
      },
      timezone_info: {
        timezone: 'America/Chicago',
        offset: -6
      },
      form_completion_time: 85,
      captcha_verified: true,
      form_interaction_data: {
        focusTime: 32,
        fieldChanges: 6
      },
      additional_notes: 'Startup founder looking for technical partner',
      created_at: new Date().toISOString()
    },
    {
      first_name: 'Robert',
      last_name: 'Wilson',
      email: 'robert.wilson@enterprise.com.au',
      phone: '+61-2-9876-5432',
      company: 'Enterprise Solutions',
      job_title: 'IT Manager',
      website: 'https://enterprise.com.au',
      company_size: '200-500',
      industry: 'Enterprise',
      country: 'Australia',
      city: 'Sydney',
      state: 'New South Wales',
      ip_address: '192.168.1.104',
      budget_range: '$75,000 - $200,000',
      timeline: '3-6 months',
      urgency: 'high',
      lead_status: 'contacted',
      lead_score: 78,
      project_description: 'Legacy system modernization and cloud migration',
      services_interested: ['Cloud Migration', 'System Integration', 'Support'],
      preferred_contact_method: 'email',
      best_time_to_call: 'Morning (9-11 AM)',
      meeting_type: 'video_call',
      cta_source: 'website',
      referral_page: 'https://example.com/enterprise',
      user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      browser_info: {
        name: 'Chrome',
        version: '120.0.0.0',
        platform: 'Windows'
      },
      session_data: {
        sessionId: 'sess_' + Date.now() + '_5',
        visitDuration: 280,
        pageViews: 10
      },
      screen_info: {
        width: 1920,
        height: 1200,
        colorDepth: 24
      },
      timezone_info: {
        timezone: 'Australia/Sydney',
        offset: 11
      },
      form_completion_time: 140,
      captcha_verified: true,
      form_interaction_data: {
        focusTime: 52,
        fieldChanges: 11
      },
      additional_notes: 'Enterprise modernization project with tight timeline',
      created_at: new Date().toISOString()
    }
  ];
  
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert(cleanTestLeads);
    
    if (error) {
      console.error('❌ Error inserting clean test leads:', error);
      return false;
    }
    
    console.log('✅ Successfully inserted', cleanTestLeads.length, 'clean test leads');
    return true;
  } catch (err) {
    console.error('❌ Exception during insertion:', err);
    return false;
  }
}

// Function to verify clean data insertion
async function verifyCleanData() {
  console.log('🔍 Verifying clean data insertion...');
  
  try {
    const { data, error, count } = await supabase
      .from('contact_submissions')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('❌ Error verifying data:', error);
      return false;
    }
    
    console.log('📊 Total records in contact_submissions:', count);
    console.log('📋 All records:');
    
    if (data && data.length > 0) {
      data.forEach((record, index) => {
        console.log(`${index + 1}. ${record.first_name} ${record.last_name} (${record.company}) - Status: ${record.lead_status} - Score: ${record.lead_score}`);
      });
    }
    
    return count === 5;
  } catch (err) {
    console.error('❌ Exception during verification:', err);
    return false;
  }
}

// Main execution function
async function main() {
  console.log('🚀 Inserting 5 clean test leads...');
  console.log('=' .repeat(50));
  
  // Insert clean test leads
  const insertSuccess = await insertCleanTestLeads();
  if (!insertSuccess) {
    console.log('❌ Failed to insert clean test leads. Exiting...');
    process.exit(1);
  }
  
  console.log('');
  
  // Verify insertion
  const verifySuccess = await verifyCleanData();
  if (!verifySuccess) {
    console.log('❌ Data verification failed - expected exactly 5 records.');
    process.exit(1);
  }
  
  console.log('');
  console.log('=' .repeat(50));
  console.log('🎉 Clean test data setup completed successfully!');
  console.log('✅ Exactly 5 realistic test leads inserted for today\'s date');
  console.log('✅ All leads include comprehensive metadata and Western names');
  console.log('✅ Different statuses: new, contacted, qualified');
  console.log('✅ Budget ranges from $15K to $300K');
  console.log('✅ IP addresses and browser metadata included');
  console.log('✅ Clean slate achieved - no old dummy data');
}

// Run the script
main().catch(console.error);