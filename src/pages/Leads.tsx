import React, { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Eye, Edit, Plus, Search, Filter, X, Save, Clock, User, Calendar } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { calculateLeadStatusBreakdown } from '@/utils/budgetCalculations';

interface Lead {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  company?: string;
  job_title?: string;
  website?: string;
  company_size?: string;
  message?: string;
  services_interested?: string[];
  urgency?: string;
  lead_status?: string;
  budget_range?: string;
  country?: string;
  state?: string;
  city?: string;
  industry?: string;
  project_description?: string;
  timeline?: string;
  project_type?: string;
  preferred_contact_method?: string;
  best_time_to_call?: string;
  meeting_type?: string;
  additional_notes?: string;
  lead_score?: number;
  assigned_to?: string;
  notes?: string;
  follow_up_date?: string;
  // Metadata fields for international user tracking
  ip_address?: string;
  browser_info?: any;
  user_agent?: string;
  referral_page?: string;
  cta_source?: string;
  session_data?: any;
  screen_info?: any;
  timezone_info?: any;
  captcha_verified?: boolean;
  form_interaction_data?: any;
  form_completion_time?: number;
  created_at: string;
  updated_at?: string;
}

const Leads = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [changeHistory, setChangeHistory] = useState<any[]>([]);
  const [userRole, setUserRole] = useState<string>('user');
  const [isAutoSaving, setIsAutoSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [sessionId, setSessionId] = useState(() => Math.random().toString(36).substring(7));
  const [showChangeHistory, setShowChangeHistory] = useState(false);
  const autoSaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const previousFormRef = useRef<Partial<Lead>>({});
  
  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [urgencyFilter, setUrgencyFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  
  // Form states for editing
  const [editForm, setEditForm] = useState<Partial<Lead>>({});

  // Get auth context
  const { user, userRole: contextUserRole, loading: authLoading } = useAuth();

  // Update local userRole when context changes
  useEffect(() => {
    if (contextUserRole) {
      setUserRole(contextUserRole);
    }
  }, [contextUserRole]);

  // Log change to CDC system
  const logChange = useCallback(async (
    leadId: string,
    operationType: string,
    fieldName?: string,
    oldValue?: any,
    newValue?: any
  ) => {
    try {
      await supabase.rpc('log_lead_change', {
        p_lead_id: leadId,
        p_operation_type: operationType,
        p_field_name: fieldName,
        p_old_value: oldValue ? String(oldValue) : null,
        p_new_value: newValue ? String(newValue) : null,
        p_session_id: sessionId
      });
    } catch (error) {
      console.error('Error logging change:', error);
    }
  }, [sessionId]);

  // Fetch change history for a lead
  const fetchChangeHistory = useCallback(async (leadId: string) => {
    try {
      console.log('📊 FETCHING CHANGE HISTORY:', {
        leadId,
        timestamp: new Date().toISOString()
      });
      
      const { data, error } = await supabase
        .from('lead_change_log')
        .select('*')
        .eq('lead_id', leadId)
        .order('changed_at', { ascending: false });
      
      if (error) {
        console.error('❌ ERROR FETCHING CHANGE HISTORY:', error);
        throw error;
      }
      
      console.log('✅ CHANGE HISTORY FETCHED:', {
        leadId,
        recordCount: data?.length || 0,
        records: data?.slice(0, 3) // Show first 3 records for debugging
      });
      
      setChangeHistory(data || []);
    } catch (error) {
      console.error('💥 CHANGE HISTORY FETCH ERROR:', error);
    }
  }, []);

  useEffect(() => {
    if (!authLoading) {
      fetchLeads();
    }
  }, [authLoading]);

  // Fetch change history when a lead is selected
  useEffect(() => {
    if (selectedLead?.id && isSheetOpen) {
      fetchChangeHistory(selectedLead.id);
      previousFormRef.current = { ...selectedLead };
    }
  }, [selectedLead, isSheetOpen, fetchChangeHistory]);

  // Cleanup auto-save timeout on unmount
  useEffect(() => {
    return () => {
      if (autoSaveTimeoutRef.current) {
        clearTimeout(autoSaveTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    applyFilters();
  }, [leads, searchTerm, statusFilter, urgencyFilter, dateFilter]);

  const fetchLeads = async () => {
    try {
      console.log('Fetching leads from Supabase...');
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });
      
      console.log('Supabase response:', { data, error, count: data?.length });
      
      if (error) throw error;
      setLeads(data || []);
      console.log('Leads state updated with:', data?.length || 0, 'leads');
    } catch (error) {
      console.error('Error fetching leads:', error);
      toast({
        title: "Error",
        description: "Failed to fetch leads",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    console.log('Applying filters. Total leads:', leads.length);
    console.log('Filter criteria:', { searchTerm, statusFilter, urgencyFilter, dateFilter });
    
    let filtered = [...leads];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(lead => 
        lead.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.last_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.company?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log('After search filter:', filtered.length);
    }

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(lead => lead.lead_status === statusFilter);
      console.log('After status filter:', filtered.length);
    }

    // Urgency filter
    if (urgencyFilter !== 'all') {
      filtered = filtered.filter(lead => lead.urgency === urgencyFilter);
      console.log('After urgency filter:', filtered.length);
    }

    // Date filter
    if (dateFilter !== 'all') {
      const now = new Date();
      const filterDate = new Date();
      
      switch (dateFilter) {
        case 'today':
          filterDate.setHours(0, 0, 0, 0);
          break;
        case 'week':
          filterDate.setDate(now.getDate() - 7);
          break;
        case 'month':
          filterDate.setMonth(now.getMonth() - 1);
          break;
      }
      
      filtered = filtered.filter(lead => new Date(lead.created_at) >= filterDate);
      console.log('After date filter:', filtered.length);
    }

    console.log('Final filtered leads count:', filtered.length);
    setFilteredLeads(filtered);
  };

  const handleViewLead = (lead: Lead) => {
    console.log('👁️ VIEW LEAD CLICKED:', {
      leadId: lead.id,
      leadData: { ...lead, message: lead.message?.substring(0, 100) + '...' },
      timestamp: new Date().toISOString()
    });
    
    setSelectedLead(lead);
    setEditForm(lead);
    setIsEditMode(false);
    setIsSheetOpen(true);
    
    const newSessionId = Date.now().toString();
    console.log('🆔 GENERATED NEW SESSION ID:', newSessionId);
    setSessionId(newSessionId);
    setLastSaved(null);
    
    console.log('📊 VIEW MODE STATE SET:', {
      isSheetOpen: true,
      isEditMode: false,
      sessionId: newSessionId
    });
  };

  const handleEditLead = (lead: Lead) => {
    console.log('✏️ EDIT LEAD CLICKED:', {
      leadId: lead.id,
      leadData: { ...lead, message: lead.message?.substring(0, 100) + '...' },
      timestamp: new Date().toISOString()
    });
    
    setSelectedLead(lead);
    setEditForm(lead);
    setIsEditMode(true);
    setIsSheetOpen(true);
    
    // CRITICAL FIX: Initialize previousFormRef for auto-save change detection
    previousFormRef.current = { ...lead };
    console.log('🔧 INITIALIZED PREVIOUS FORM REF:', {
      leadId: lead.id,
      previousFormRef: { ...lead, message: lead.message?.substring(0, 100) + '...' }
    });
    
    const newSessionId = Date.now().toString();
    console.log('🆔 GENERATED NEW SESSION ID:', newSessionId);
    setSessionId(newSessionId);
    setLastSaved(null);
    
    console.log('📊 EDIT MODE STATE SET:', {
      isSheetOpen: true,
      isEditMode: true,
      sessionId: newSessionId
    });
  };

  // Function to capture visitor metadata for international users
  const captureVisitorMetadata = () => {
    const metadata = {
      ip_address: '', // This would be captured server-side
      browser_info: {
        language: navigator.language,
        languages: navigator.languages,
        platform: navigator.platform,
        cookieEnabled: navigator.cookieEnabled,
        onLine: navigator.onLine
      },
      user_agent: navigator.userAgent,
      referral_page: document.referrer || '',
      cta_source: new URLSearchParams(window.location.search).get('utm_source') || '',
      session_data: {
        sessionId: sessionId,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        pathname: window.location.pathname,
        search: window.location.search
      },
      screen_info: {
        width: window.screen.width,
        height: window.screen.height,
        availWidth: window.screen.availWidth,
        availHeight: window.screen.availHeight,
        colorDepth: window.screen.colorDepth,
        pixelDepth: window.screen.pixelDepth
      },
      timezone_info: {
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        timezoneOffset: new Date().getTimezoneOffset(),
        locale: Intl.DateTimeFormat().resolvedOptions().locale
      },
      captcha_verified: false,
      form_interaction_data: {
        startTime: Date.now(),
        interactions: []
      },
      form_completion_time: 0
    };
    
    console.log('🌍 CAPTURED VISITOR METADATA:', metadata);
    return metadata;
  };

  const handleAddLead = () => {
    const visitorMetadata = captureVisitorMetadata();
    
    setSelectedLead(null);
    setEditForm({
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      company: '',
      job_title: '',
      website: '',
      company_size: '',
      message: '',
      services_interested: [],
      urgency: 'medium',
      lead_status: 'new',
      budget_range: '',
      country: '',
      state: '',
      city: '',
      industry: '',
      project_description: '',
      timeline: '',
      project_type: '',
      preferred_contact_method: '',
      best_time_to_call: '',
      meeting_type: '',
      additional_notes: '',
      lead_score: 0,
      assigned_to: '',
      notes: '',
      follow_up_date: '',
      // Populate metadata fields with captured visitor information
      ...visitorMetadata
    });
    setIsEditMode(true);
    setIsSheetOpen(true);
  };

  const handleSaveLead = async () => {
    console.log('💾 MANUAL SAVE INITIATED:', {
      selectedLead: selectedLead?.id,
      hasEditForm: !!editForm,
      isEditMode,
      timestamp: new Date().toISOString()
    });
    
    // DEBUG: Check authentication state and user role
    try {
      console.log('🔐 AUTHENTICATION STATE:', {
        user: user ? {
          id: user.id,
          email: user.email,
          role: user.role,
          user_metadata: user.user_metadata,
          app_metadata: user.app_metadata
        } : null,
        userRole,
        authLoading
      });
      
      if (!user) {
        console.error('❌ USER NOT AUTHENTICATED');
        toast({
          title: "Authentication Error",
          description: "You must be logged in to save leads",
          variant: "destructive",
        });
        return;
      }
      
      console.log('👤 USER ROLE CHECK:', {
        userRole,
        userId: user.id
      });
      
      // Test database permissions and connection
      console.log('🧪 TESTING DATABASE PERMISSIONS AND CONNECTION');
      
      // Test 1: Basic read permission
      const { data: testData, error: testError } = await supabase
        .from('contact_submissions')
        .select('id')
        .limit(1);
        
      console.log('📊 READ PERMISSION TEST:', {
        canRead: !testError,
        testError: testError ? {
          message: testError.message,
          details: testError.details,
          hint: testError.hint,
          code: testError.code
        } : null,
        testDataCount: testData?.length || 0
      });
      
      // Test 2: Write permission (insert test)
      console.log('✍️ TESTING WRITE PERMISSIONS');
      const testRecord = {
        name: 'TEST_RECORD_DELETE_ME',
        email: 'test@test.com',
        message: 'This is a test record for permission testing',
        status: 'new',
        urgency: 'low',
        created_at: new Date().toISOString()
      };
      
      const { data: insertTestData, error: insertTestError } = await supabase
        .from('contact_submissions')
        .insert([testRecord])
        .select()
        .single();
        
      console.log('📝 WRITE PERMISSION TEST:', {
        canWrite: !insertTestError,
        insertTestError: insertTestError ? {
          message: insertTestError.message,
          details: insertTestError.details,
          hint: insertTestError.hint,
          code: insertTestError.code
        } : null,
        insertedId: insertTestData?.id
      });
      
      // Clean up test record if it was created
      if (insertTestData?.id) {
        console.log('🧹 CLEANING UP TEST RECORD');
        const { error: deleteError } = await supabase
          .from('contact_submissions')
          .delete()
          .eq('id', insertTestData.id);
          
        console.log('🗑️ TEST RECORD CLEANUP:', {
          cleanupSuccess: !deleteError,
          deleteError: deleteError ? {
            message: deleteError.message,
            details: deleteError.details,
            hint: deleteError.hint,
            code: deleteError.code
          } : null
        });
      }
      
      // Test 3: Supabase client configuration
      console.log('⚙️ SUPABASE CLIENT CONFIG:', {
        supabaseUrl: supabase.supabaseUrl,
        supabaseKey: supabase.supabaseKey ? '***HIDDEN***' : 'NOT SET',
        authHeaders: supabase.auth.headers
      });
      
      // Test 4: Current session details
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      console.log('🔑 SESSION DETAILS:', {
        hasSession: !!sessionData.session,
        sessionError,
        userId: sessionData.session?.user?.id,
        userEmail: sessionData.session?.user?.email,
        accessToken: sessionData.session?.access_token ? '***HIDDEN***' : 'NOT SET',
        tokenType: sessionData.session?.token_type,
        expiresAt: sessionData.session?.expires_at
      });
      
    } catch (debugError) {
      console.error('💥 DEBUG ERROR:', debugError);
    }
    
    let saveAttempts = 0;
    const maxRetries = 3;
    
    // Retry logic for manual save
    while (saveAttempts < maxRetries) {
      try {
        saveAttempts++;
        console.log(`🔄 MANUAL SAVE ATTEMPT ${saveAttempts}/${maxRetries}`);
        
        if (selectedLead) {
          console.log('📝 UPDATING EXISTING LEAD:', {
            leadId: selectedLead.id,
            formData: { ...editForm, message: editForm.message?.substring(0, 100) + '...' }
          });
          
          // Update existing lead
          const { error } = await supabase
            .from('contact_submissions')
            .update({
              ...editForm,
              updated_at: new Date().toISOString()
            })
            .eq('id', selectedLead.id);

          if (error) {
            console.error(`❌ SUPABASE UPDATE ERROR (Attempt ${saveAttempts}):`, error);
            throw error;
          }
          
          console.log('✅ LEAD UPDATED SUCCESSFULLY');
          
          // Log the manual save operation
          console.log('📋 LOGGING MANUAL SAVE TO CDC');
          await logChange(selectedLead.id, 'UPDATE', 'manual_save');
          
          // Update the selected lead with new data
          setSelectedLead({ ...selectedLead, ...editForm });
          
          // Update the previous form reference
          previousFormRef.current = { ...editForm };
          
          setLastSaved(new Date());
          
          toast({
            title: "Success",
            description: "Lead updated successfully",
          });
        } else {
          console.log('➕ CREATING NEW LEAD:', {
            formData: { ...editForm, message: editForm.message?.substring(0, 100) + '...' }
          });
          
          // Create new lead
          const { data, error } = await supabase
            .from('contact_submissions')
            .insert([editForm])
            .select()
            .single();

          if (error) {
            console.error(`❌ SUPABASE INSERT ERROR (Attempt ${saveAttempts}):`, error);
            throw error;
          }
          
          console.log('✅ LEAD CREATED SUCCESSFULLY:', data?.id);
          
          // Log the creation
          if (data) {
            console.log('📋 LOGGING CREATION TO CDC');
            await logChange(data.id, 'CREATE');
          }
          
          toast({
            title: "Success",
            description: "Lead created successfully",
          });
        }
        
        // Refresh the leads list
        console.log('🔄 REFRESHING LEADS LIST AFTER MANUAL SAVE');
        await fetchLeads();
        
        // Refresh change history if we have a selected lead
        if (selectedLead?.id) {
          console.log('📊 REFRESHING CHANGE HISTORY AFTER MANUAL SAVE');
          await fetchChangeHistory(selectedLead.id);
        }
        
        console.log('🚪 CLOSING SHEET AFTER SUCCESSFUL SAVE');
        setIsSheetOpen(false);
        break; // Success, exit retry loop
        
      } catch (error) {
        console.error(`💥 MANUAL SAVE ERROR (Attempt ${saveAttempts}):`, error);
        if (saveAttempts >= maxRetries) {
          // Final attempt failed
          console.error('💥 FINAL MANUAL SAVE ERROR AFTER ALL RETRIES:', error);
          toast({
            title: "Error",
            description: `Failed to save lead after ${maxRetries} attempts: ${error.message}`,
            variant: "destructive",
          });
          break;
        }
        // Wait before retry
        await new Promise(resolve => setTimeout(resolve, 1000 * saveAttempts));
      }
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setStatusFilter('all');
    setUrgencyFilter('all');
    setDateFilter('all');
  };



  // Auto-save function with comprehensive error handling
  const autoSave = useCallback(async (formData: Partial<Lead>) => {
    console.log('💾 AUTO-SAVE FUNCTION CALLED:', {
      selectedLeadId: selectedLead?.id,
      isEditMode,
      hasFormData: !!formData,
      timestamp: new Date().toISOString()
    });
    
    // DEBUG: Check authentication state for auto-save
    console.log('🔐 AUTO-SAVE AUTH CHECK:', {
      hasUser: !!user,
      userId: user?.id,
      userEmail: user?.email,
      userRole,
      authLoading
    });
    
    if (!user) {
      console.error('❌ AUTO-SAVE FAILED: USER NOT AUTHENTICATED');
      return;
    }
    
    if (!selectedLead?.id || !isEditMode) {
      console.warn('⚠️ AUTO-SAVE SKIPPED:', {
        reason: !selectedLead?.id ? 'No selected lead' : !isEditMode ? 'Not in edit mode' : 'Unknown',
        selectedLeadId: selectedLead?.id,
        isEditMode
      });
      return;
    }
    
    console.log('🔄 STARTING AUTO-SAVE:', {
      leadId: selectedLead.id,
      formData: { ...formData, message: formData.message?.substring(0, 100) + '...' }
    });
    setIsAutoSaving(true);
    
    let saveAttempts = 0;
    const maxRetries = 3;
    
    try {
      // Compare with previous form data to detect changes
      const changes: Array<{field: string, oldValue: any, newValue: any}> = [];
      const previousForm = previousFormRef.current || {};
      
      Object.keys(formData).forEach(key => {
        const fieldKey = key as keyof Lead;
        const newValue = formData[fieldKey];
        const oldValue = previousForm[fieldKey];
        
        // Only consider it a change if values are actually different
        if (newValue !== oldValue && !(newValue === '' && oldValue === undefined)) {
          changes.push({
            field: key,
            oldValue: oldValue,
            newValue: newValue
          });
        }
      });
      
      console.log('📊 DETECTED CHANGES:', changes);
      
      if (changes.length === 0) {
        console.log('ℹ️ NO CHANGES DETECTED - SKIPPING AUTO-SAVE');
        return;
      }
      
      // Retry logic for saving
      while (saveAttempts < maxRetries) {
        try {
          saveAttempts++;
          console.log(`🔄 AUTO-SAVE ATTEMPT ${saveAttempts}/${maxRetries}`);
          
          // Update the lead
          console.log('📝 UPDATING LEAD IN DATABASE');
          const { error } = await supabase
            .from('contact_submissions')
            .update({
              ...formData,
              updated_at: new Date().toISOString()
            })
            .eq('id', selectedLead.id);
          
          if (error) {
            console.error(`❌ SUPABASE UPDATE ERROR (Attempt ${saveAttempts}):`, error);
            throw error;
          }
          
          console.log('✅ LEAD UPDATED SUCCESSFULLY');
          
          // Log each change
          console.log('📋 LOGGING CHANGES TO CDC');
          for (const change of changes) {
            await logChange(
              selectedLead.id,
              'UPDATE',
              change.field,
              change.oldValue,
              change.newValue
            );
          }
          
          setLastSaved(new Date());
          previousFormRef.current = { ...formData };
          
          // Update the selected lead with new data
          setSelectedLead({ ...selectedLead, ...formData });
          
          // Refresh the leads list
          console.log('🔄 REFRESHING LEADS LIST');
          await fetchLeads();
          
          // Refresh change history
          console.log('📊 REFRESHING CHANGE HISTORY');
          await fetchChangeHistory(selectedLead.id);
          
          console.log('✅ AUTO-SAVE COMPLETED SUCCESSFULLY');
          break; // Success, exit retry loop
          
        } catch (error) {
          console.error(`💥 AUTO-SAVE ERROR (Attempt ${saveAttempts}):`, error);
          if (saveAttempts >= maxRetries) {
            throw error; // Final attempt failed
          }
          // Wait before retry
          await new Promise(resolve => setTimeout(resolve, 1000 * saveAttempts));
        }
      }
      
    } catch (error) {
      console.error('💥 FINAL AUTO-SAVE ERROR AFTER ALL RETRIES:', error);
      toast({
        title: "Auto-save Error",
        description: `Failed to auto-save changes after ${maxRetries} attempts: ${error.message}`,
        variant: "destructive",
      });
    } finally {
      setIsAutoSaving(false);
      console.log('🏁 AUTO-SAVE FUNCTION COMPLETED');
    }
  }, [selectedLead, isEditMode, logChange, fetchLeads, fetchChangeHistory, toast]);

  // Clear the auto-save timeout when component unmounts
  useEffect(() => {
    return () => {
      if (autoSaveTimeoutRef.current) {
        clearTimeout(autoSaveTimeoutRef.current);
      }
    };
  }, []);

  // Comprehensive database test function
  const testDatabaseAccess = async () => {
    console.log('🧪 Starting comprehensive database access test...');
    
    try {
      // Test 1: Check authentication status
      console.log('🔐 Testing authentication status...');
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      
      if (authError) {
        console.error('❌ Auth check failed:', authError);
        toast({
          title: "Authentication Error",
          description: `Authentication error: ${authError.message}`,
          variant: "destructive",
        });
        return;
      }
      
      if (!user) {
        console.log('⚠️ No authenticated user found');
        toast({
          title: "Authentication Required",
          description: "No authenticated user - please log in",
          variant: "destructive",
        });
        return;
      }
      
      console.log('✅ User authenticated:', user.email, 'Role:', user.user_metadata?.role || 'No role set');
      
      // Test 2: Read from contact_submissions table
      console.log('📖 Testing read access to contact_submissions...');
      const { data: readData, error: readError } = await supabase
        .from('contact_submissions')
        .select('id, first_name, last_name, email, created_at')
        .limit(1);
      
      if (readError) {
        console.error('❌ Read test failed:', readError);
        toast({
          title: "Read Access Failed",
          description: `Read access failed: ${readError.message}`,
          variant: "destructive",
        });
        return;
      }
      
      console.log('✅ Read test successful:', readData?.length || 0, 'records found');
      
      // Test 3: Test write access with a dummy record
      console.log('✏️ Testing write access...');
      const testRecord = {
        first_name: 'Test',
        last_name: 'User',
        email: `test-${Date.now()}@example.com`,
        phone: '555-0123',
        company: 'Test Company',
        message: 'Database access test record',
        lead_status: 'new',
        lead_source: 'manual_test',
        created_at: new Date().toISOString()
      };
      
      const { data: insertData, error: insertError } = await supabase
        .from('contact_submissions')
        .insert([testRecord])
        .select();
      
      if (insertError) {
        console.error('❌ Insert test failed:', insertError);
        toast({
          title: "Write Access Failed",
          description: `Write access failed: ${insertError.message}`,
          variant: "destructive",
        });
        return;
      }
      
      console.log('✅ Insert test successful:', insertData);
      const testId = insertData[0]?.id;
      
      // Test 4: Test update access
      if (testId) {
        console.log('🔄 Testing update access...');
        const { data: updateData, error: updateError } = await supabase
          .from('contact_submissions')
          .update({ lead_status: 'qualified' })
          .eq('id', testId)
          .select();
        
        if (updateError) {
          console.error('❌ Update test failed:', updateError);
          toast({
            title: "Update Access Failed",
            description: `Update access failed: ${updateError.message}`,
            variant: "destructive",
          });
        } else {
          console.log('✅ Update test successful:', updateData);
        }
        
        // Test 5: Clean up test record
        console.log('🧹 Cleaning up test record...');
        const { error: deleteError } = await supabase
          .from('contact_submissions')
          .delete()
          .eq('id', testId);
        
        if (deleteError) {
          console.error('❌ Cleanup failed:', deleteError);
        } else {
          console.log('✅ Test record cleaned up successfully');
        }
      }
      
      toast({
        title: "Database Test Complete",
        description: "Database access test completed successfully!",
        variant: "default",
      });
      console.log('🎉 All database tests completed successfully!');
      
    } catch (error) {
      console.error('💥 Database test failed with exception:', error);
      toast({
        title: "Database Test Failed",
        description: `Database test failed: ${error.message}`,
        variant: "destructive",
      });
    }
  };

  // Add test button trigger (for development) - Ctrl+Shift+T
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'T') {
        event.preventDefault();
        testDatabaseAccess();
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Debounced auto-save
  const debouncedAutoSave = useCallback((formData: Partial<Lead>) => {
    if (autoSaveTimeoutRef.current) {
      clearTimeout(autoSaveTimeoutRef.current);
    }
    
    autoSaveTimeoutRef.current = setTimeout(() => {
      autoSave(formData);
    }, 1000); // Auto-save after 1 second of inactivity
  }, [autoSave]);

  // Enhanced form change handler
  const handleFormChange = useCallback((field: string, value: any) => {
    console.log('🔄 FORM CHANGE DEBUG:', {
      field,
      value,
      selectedLead: selectedLead?.id,
      isEditMode,
      timestamp: new Date().toISOString()
    });
    
    const newForm = { ...editForm, [field]: value };
    console.log('📝 UPDATING FORM:', {
      field,
      oldValue: editForm[field],
      newValue: value,
      newForm
    });
    
    setEditForm(newForm);
    
    if (isEditMode && selectedLead?.id) {
      console.log('🚀 TRIGGERING AUTO-SAVE FOR FIELD CHANGE');
      debouncedAutoSave(newForm);
    } else {
      console.warn('⚠️ AUTO-SAVE NOT TRIGGERED:', {
        reason: !isEditMode ? 'Not in edit mode' : !selectedLead?.id ? 'No selected lead' : 'Unknown',
        isEditMode,
        hasSelectedLead: !!selectedLead?.id
      });
    }
  }, [editForm, isEditMode, selectedLead, debouncedAutoSave]);

  const getUrgencyColor = (urgency?: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'qualified': return 'bg-purple-100 text-purple-800';
      case 'converted': return 'bg-green-100 text-green-800';
      case 'lost': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading leads...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Lead Management</h1>
          <p className="text-gray-600">Manage and track all your leads</p>
        </div>
        <Button onClick={handleAddLead} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Lead
        </Button>
      </div>

      {/* Filters */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search leads..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Stages" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Stages</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="contacted">Contacted</SelectItem>
                  <SelectItem value="qualified">Qualified</SelectItem>
                  <SelectItem value="converted">Converted</SelectItem>
                  <SelectItem value="lost">Lost</SelectItem>
                </SelectContent>
              </Select>

              <Select value={urgencyFilter} onValueChange={setUrgencyFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priority</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>

              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Dates" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Dates</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">Last Week</SelectItem>
                  <SelectItem value="month">Last Month</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" onClick={clearFilters}>
                <X className="h-4 w-4 mr-2" />
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {(() => {
            const leadStats = calculateLeadStatusBreakdown(filteredLeads);
            return (
              <>
                <Card>
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-blue-600">{leadStats.total}</div>
                    <div className="text-sm text-gray-600">Total Leads</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-green-600">
                      {leadStats.new}
                    </div>
                    <div className="text-sm text-gray-600">New Leads</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-purple-600">
                      {leadStats.highPriority}
                    </div>
                    <div className="text-sm text-gray-600">High Priority</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-orange-600">
                      {leadStats.converted}
                    </div>
                    <div className="text-sm text-gray-600">Converted</div>
                  </CardContent>
                </Card>
              </>
            );
          })()}
        </div>
      </div>

      {/* Leads Table */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Leads Overview</CardTitle>
          </CardHeader>
          <CardContent>
            {filteredLeads.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No leads found matching your criteria.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Name</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Phone</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Budget</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Country</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Stage</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Priority</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Created</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeads.map((lead) => (
                      <tr key={lead.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div>
                            <div className="font-medium text-blue-600">{lead.first_name} {lead.last_name}</div>
                            <div className="text-sm text-gray-500">{lead.company || 'N/A'}</div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-gray-900">{lead.phone || 'N/A'}</td>
                        <td className="py-3 px-4 text-gray-900">
                          {lead.budget_range || 'N/A'}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            {lead.country || 'N/A'}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <Badge className={getStatusColor(lead.lead_status)}>
                            {lead.lead_status?.toUpperCase() || 'NEW'}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Badge className={getUrgencyColor(lead.urgency)}>
                            {lead.urgency?.toUpperCase() || 'MEDIUM'}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-gray-900">
                          {new Date(lead.created_at).toLocaleDateString()}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleViewLead(lead)}
                            >
                              <Eye className="h-4 w-4" />
                              View
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleEditLead(lead)}
                            >
                              <Edit className="h-4 w-4" />
                              Edit
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Edit/View Sheet */}
      <Sheet open={isSheetOpen} onOpenChange={(open) => {
          console.log('📋 SHEET STATE CHANGING:', {
            isOpen: open,
            previousState: isSheetOpen,
            timestamp: new Date().toISOString()
          });
          setIsSheetOpen(open);
        }}>
          <SheetContent 
            className="w-[1200px] max-w-none overflow-y-auto"
            onOpenAutoFocus={() => {
              console.log('🎯 SHEET CONTENT FOCUSED - WIDTH CLASSES APPLIED:', {
                widthClasses: 'w-[1800px] sm:w-[2200px] lg:w-[2800px] xl:w-[3200px]',
                isEditMode,
                selectedLead: selectedLead?.id,
                timestamp: new Date().toISOString()
              });
            }}
          >
          <SheetHeader>
            <SheetTitle>
              {isEditMode ? (selectedLead ? 'Edit Lead' : 'Add New Lead') : 'View Lead'}
            </SheetTitle>
          </SheetHeader>
          
          <div className="mt-6 space-y-6">
            {/* Personal Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Personal Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="first_name">First Name *</Label>
                  <Input
                    id="first_name"
                    value={isEditMode ? editForm.first_name || '' : selectedLead?.first_name || ''}
                    onChange={(e) => handleFormChange('first_name', e.target.value)}
                    disabled={!isEditMode}
                  />
                </div>
                <div>
                  <Label htmlFor="last_name">Last Name *</Label>
                  <Input
                    id="last_name"
                    value={isEditMode ? editForm.last_name || '' : selectedLead?.last_name || ''}
                    onChange={(e) => handleFormChange('last_name', e.target.value)}
                    disabled={!isEditMode}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={isEditMode ? editForm.email || '' : selectedLead?.email || ''}
                    onChange={(e) => handleFormChange('email', e.target.value)}
                    disabled={!isEditMode}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={isEditMode ? editForm.phone || '' : selectedLead?.phone || ''}
                    onChange={(e) => handleFormChange('phone', e.target.value)}
                    disabled={!isEditMode}
                  />
                </div>
              </div>
            </div>

            {/* Company Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Company Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                     id="company"
                     value={isEditMode ? editForm.company || '' : selectedLead?.company || ''}
                     onChange={(e) => handleFormChange('company', e.target.value)}
                     disabled={!isEditMode}
                   />
                </div>
                <div>
                  <Label htmlFor="job_title">Job Title</Label>
                  <Input
                     id="job_title"
                     value={isEditMode ? editForm.job_title || '' : selectedLead?.job_title || ''}
                     onChange={(e) => handleFormChange('job_title', e.target.value)}
                     disabled={!isEditMode}
                   />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="website">Website</Label>
                  <Input
                     id="website"
                     value={isEditMode ? editForm.website || '' : selectedLead?.website || ''}
                     onChange={(e) => handleFormChange('website', e.target.value)}
                     disabled={!isEditMode}
                   />
                </div>
                <div>
                  <Label htmlFor="company_size">Company Size</Label>
                  <Select
                    value={isEditMode ? editForm.company_size || '' : selectedLead?.company_size || ''}
                    onValueChange={(value) => handleFormChange('company_size', value)}
                    disabled={!isEditMode}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-500">201-500 employees</SelectItem>
                      <SelectItem value="500+">500+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="industry">Industry</Label>
                <Input
                  id="industry"
                  value={isEditMode ? editForm.industry || '' : selectedLead?.industry || ''}
                  onChange={(e) => handleFormChange('industry', e.target.value)}
                  disabled={!isEditMode}
                />
              </div>
            </div>

            {/* Project Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Project Information</h3>
              <div>
                <Label htmlFor="project_description">Project Description</Label>
                <Textarea
                  id="project_description"
                  value={isEditMode ? editForm.project_description || '' : selectedLead?.project_description || ''}
                  onChange={(e) => handleFormChange('project_description', e.target.value)}
                  disabled={!isEditMode}
                  rows={3}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="timeline">Timeline</Label>
                  <Select
                    value={isEditMode ? editForm.timeline || '' : selectedLead?.timeline || ''}
                    onValueChange={(value) => handleFormChange('timeline', value)}
                    disabled={!isEditMode}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate (within 1 month)</SelectItem>
                      <SelectItem value="1-3months">1-3 months</SelectItem>
                      <SelectItem value="3-6months">3-6 months</SelectItem>
                      <SelectItem value="6+months">6+ months</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="budget_range">Budget Range</Label>
                  <Select
                    value={isEditMode ? editForm.budget_range || '' : selectedLead?.budget_range || ''}
                    onValueChange={(value) => handleFormChange('budget_range', value)}
                    disabled={!isEditMode}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="<5k">Less than $5,000</SelectItem>
                      <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                      <SelectItem value="15k-50k">$15,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="100k+">$100,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="urgency">Priority Level</Label>
                <Select
                  value={isEditMode ? editForm.urgency || 'medium' : selectedLead?.urgency || 'medium'}
                  onValueChange={(value) => handleFormChange('urgency', value)}
                  disabled={!isEditMode}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="immediate">Immediate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Contact Preferences Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Contact Preferences</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="preferred_contact_method">Preferred Contact Method</Label>
                  <Select
                    value={isEditMode ? editForm.preferred_contact_method || '' : selectedLead?.preferred_contact_method || ''}
                    onValueChange={(value) => handleFormChange('preferred_contact_method', value)}
                    disabled={!isEditMode}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select contact method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone</SelectItem>
                      <SelectItem value="video-call">Video Call</SelectItem>
                      <SelectItem value="in-person">In Person</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="best_time_to_call">Best Time to Call</Label>
                  <Select
                    value={isEditMode ? editForm.best_time_to_call || '' : selectedLead?.best_time_to_call || ''}
                    onValueChange={(value) => handleFormChange('best_time_to_call', value)}
                    disabled={!isEditMode}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select best time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9AM-12PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12PM-5PM)</SelectItem>
                      <SelectItem value="evening">Evening (5PM-8PM)</SelectItem>
                      <SelectItem value="anytime">Anytime</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="meeting_type">Preferred Meeting Type</Label>
                <Select
                  value={isEditMode ? editForm.meeting_type || '' : selectedLead?.meeting_type || ''}
                  onValueChange={(value) => handleFormChange('meeting_type', value)}
                  disabled={!isEditMode}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select meeting type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="discovery-call">Discovery Call</SelectItem>
                    <SelectItem value="demo">Product Demo</SelectItem>
                    <SelectItem value="consultation">Consultation</SelectItem>
                    <SelectItem value="proposal-review">Proposal Review</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Location Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Location Information</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    value={isEditMode ? editForm.country || '' : selectedLead?.country || ''}
                    onChange={(e) => handleFormChange('country', e.target.value)}
                    disabled={!isEditMode}
                  />
                </div>
                <div>
                  <Label htmlFor="state">State/Province</Label>
                  <Input
                    id="state"
                    value={isEditMode ? editForm.state || '' : selectedLead?.state || ''}
                    onChange={(e) => handleFormChange('state', e.target.value)}
                    disabled={!isEditMode}
                  />
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={isEditMode ? editForm.city || '' : selectedLead?.city || ''}
                    onChange={(e) => handleFormChange('city', e.target.value)}
                    disabled={!isEditMode}
                  />
                </div>
              </div>
            </div>

            {/* Lead Management Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Lead Management</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="lead_status">Lead Status</Label>
                  <Select
                    value={isEditMode ? editForm.lead_status || 'new' : selectedLead?.lead_status || 'new'}
                    onValueChange={(value) => handleFormChange('lead_status', value)}
                    disabled={!isEditMode}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="contacted">Contacted</SelectItem>
                      <SelectItem value="qualified">Qualified</SelectItem>
                      <SelectItem value="proposal-sent">Proposal Sent</SelectItem>
                      <SelectItem value="negotiation">Negotiation</SelectItem>
                      <SelectItem value="converted">Converted</SelectItem>
                      <SelectItem value="lost">Lost</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="lead_score">Lead Score</Label>
                  <Input
                    id="lead_score"
                    type="number"
                    min="0"
                    max="100"
                    value={isEditMode ? editForm.lead_score || '' : selectedLead?.lead_score || ''}
                    onChange={(e) => handleFormChange('lead_score', parseInt(e.target.value) || 0)}
                    disabled={!isEditMode}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="assigned_to">Assigned To</Label>
                <Input
                  id="assigned_to"
                  value={isEditMode ? editForm.assigned_to || '' : selectedLead?.assigned_to || ''}
                  onChange={(e) => handleFormChange('assigned_to', e.target.value)}
                  disabled={!isEditMode}
                  placeholder="Enter team member name or email"
                />
              </div>
              
              <div>
                <Label htmlFor="notes">Internal Notes</Label>
                <Textarea
                  id="notes"
                  value={isEditMode ? editForm.notes || '' : selectedLead?.notes || ''}
                  onChange={(e) => handleFormChange('notes', e.target.value)}
                  disabled={!isEditMode}
                  rows={3}
                  placeholder="Add internal notes about this lead..."
                />
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Additional Information</h3>
              <div>
                <Label htmlFor="message">Original Message</Label>
                <Textarea
                  id="message"
                  value={isEditMode ? editForm.message || '' : selectedLead?.message || ''}
                  onChange={(e) => handleFormChange('message', e.target.value)}
                  disabled={!isEditMode}
                  rows={4}
                />
              </div>
            </div>
            
            {/* Auto-save Status Indicator */}
            {isEditMode && (
              <div className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg border">
                <div className="flex items-center space-x-2">
                  {isAutoSaving ? (
                    <>
                      <Clock className="h-4 w-4 text-blue-500 animate-spin" />
                      <span className="text-sm text-blue-600">Auto-saving...</span>
                    </>
                  ) : lastSaved ? (
                    <>
                      <Save className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-600">
                        Last saved: {lastSaved.toLocaleTimeString()}
                      </span>
                    </>
                  ) : (
                    <>
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">Auto-save enabled</span>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* CDC Change Log Section - Always Visible and Expandable */}
            <div className="mt-6 border-t pt-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg">
                <button
                  onClick={() => setShowChangeHistory(!showChangeHistory)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-blue-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-blue-900 flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    CDC Change Log ({changeHistory.length} changes)
                  </h3>
                  <div className="flex items-center space-x-2">
                    {changeHistory.length === 0 && (
                      <span className="text-sm text-blue-600">No changes yet</span>
                    )}
                    <div className={`transform transition-transform ${
                      showChangeHistory ? 'rotate-180' : ''
                    }`}>
                      ▼
                    </div>
                  </div>
                </button>
                
                {showChangeHistory && (
                  <div className="border-t border-blue-200 p-4 bg-white">
                    {changeHistory.length > 0 ? (
                      <div className="max-h-96 overflow-y-auto space-y-3">
                        {changeHistory.map((change, index) => (
                          <div key={index} className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <User className="h-4 w-4 text-gray-500" />
                                <span className="text-sm font-medium text-gray-800">
                                  {change.changed_by || 'System'}
                                </span>
                                <Badge variant="outline" className="text-xs">
                                  {change.operation_type.toUpperCase()}
                                </Badge>
                              </div>
                              <span className="text-xs text-gray-500">
                                {new Date(change.changed_at).toLocaleString()}
                              </span>
                            </div>
                            {change.field_name && change.field_name !== 'manual_save' && (
                              <div className="text-sm">
                                <span className="font-medium text-gray-700">
                                  Field: {change.field_name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                </span>
                                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                                  <div className="bg-red-50 border border-red-200 rounded p-2">
                                    <span className="text-xs font-medium text-red-700">Previous Value:</span>
                                    <div className="text-sm text-red-800 mt-1 break-words">
                                      {change.old_value || '(Empty)'}
                                    </div>
                                  </div>
                                  <div className="bg-green-50 border border-green-200 rounded p-2">
                                    <span className="text-xs font-medium text-green-700">New Value:</span>
                                    <div className="text-sm text-green-800 mt-1 break-words">
                                      {change.new_value || '(Empty)'}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            {change.field_name === 'manual_save' && (
                              <div className="text-sm text-blue-600 font-medium">
                                Manual save operation completed
                              </div>
                            )}
                            {change.session_id && (
                              <div className="text-xs text-gray-400 mt-2 font-mono">
                                Session ID: {change.session_id}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        <Calendar className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                        <p className="text-sm">No changes recorded yet</p>
                        <p className="text-xs text-gray-400 mt-1">
                          Changes will appear here when you edit and save this lead
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            {isEditMode && (
              <div className="flex gap-2 pt-4">
                <Button onClick={handleSaveLead} className="flex-1">
                  {selectedLead ? 'Update Lead' : 'Create Lead'}
                </Button>
                <Button variant="outline" onClick={() => setIsSheetOpen(false)}>
                  Cancel
                </Button>
              </div>
            )}
            
            {!isEditMode && (
              <div className="flex gap-2 pt-4">
                <Button onClick={() => setIsEditMode(true)} className="flex-1">
                  Edit Lead
                </Button>
                <Button variant="outline" onClick={() => setIsSheetOpen(false)}>
                  Close
                </Button>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Leads;