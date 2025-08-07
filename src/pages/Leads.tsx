import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Eye, Edit, Plus, Search, Filter, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Lead {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  urgency?: string;
  lead_status?: string;
  budget_range?: string;
  country?: string;
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
  
  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [urgencyFilter, setUrgencyFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  
  // Form states for editing
  const [editForm, setEditForm] = useState<Partial<Lead>>({});

  useEffect(() => {
    fetchLeads();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [leads, searchTerm, statusFilter, urgencyFilter, dateFilter]);

  const fetchLeads = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setLeads(data || []);
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
    let filtered = [...leads];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(lead => 
        lead.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.last_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.company?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(lead => lead.lead_status === statusFilter);
    }

    // Urgency filter
    if (urgencyFilter !== 'all') {
      filtered = filtered.filter(lead => lead.urgency === urgencyFilter);
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
    }

    setFilteredLeads(filtered);
  };

  const handleEditLead = (lead: Lead) => {
    setSelectedLead(lead);
    setEditForm(lead);
    setIsEditMode(true);
    setIsSheetOpen(true);
  };

  const handleViewLead = (lead: Lead) => {
    setSelectedLead(lead);
    setIsEditMode(false);
    setIsSheetOpen(true);
  };

  const handleAddLead = () => {
    setSelectedLead(null);
    setEditForm({
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      urgency: 'medium',
      lead_status: 'new',
      budget_range: '',
      country: ''
    });
    setIsEditMode(true);
    setIsSheetOpen(true);
  };

  const handleSaveLead = async () => {
    try {
      if (selectedLead) {
        // Update existing lead
        const { error } = await supabase
          .from('contact_submissions')
          .update({
            ...editForm,
            updated_at: new Date().toISOString()
          })
          .eq('id', selectedLead.id);

        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Lead updated successfully",
        });
      } else {
        // Create new lead
        const { error } = await supabase
          .from('contact_submissions')
          .insert([editForm]);

        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Lead created successfully",
        });
      }
      
      setIsSheetOpen(false);
      fetchLeads();
    } catch (error) {
      console.error('Error saving lead:', error);
      toast({
        title: "Error",
        description: "Failed to save lead",
        variant: "destructive",
      });
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setStatusFilter('all');
    setUrgencyFilter('all');
    setDateFilter('all');
  };

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
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-blue-600">{filteredLeads.length}</div>
              <div className="text-sm text-gray-600">Total Leads</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-green-600">
                {filteredLeads.filter(lead => lead.lead_status === 'new').length}
              </div>
              <div className="text-sm text-gray-600">New Leads</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-purple-600">
                {filteredLeads.filter(lead => lead.urgency === 'high').length}
              </div>
              <div className="text-sm text-gray-600">High Priority</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-orange-600">
                {filteredLeads.filter(lead => lead.lead_status === 'converted').length}
              </div>
              <div className="text-sm text-gray-600">Converted</div>
            </CardContent>
          </Card>
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
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Profile</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Name</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Phone</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Investment</th>
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
                          <Badge variant="outline" className="bg-blue-50 text-blue-700">
                            STANDARD
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <div>
                            <div className="font-medium text-blue-600">{lead.first_name} {lead.last_name}</div>
                            <div className="text-sm text-gray-500">{lead.email}</div>
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
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>
              {isEditMode ? (selectedLead ? 'Edit Lead' : 'Add New Lead') : 'View Lead'}
            </SheetTitle>
          </SheetHeader>
          
          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="first_name">First Name *</Label>
                <Input
                  id="first_name"
                  value={isEditMode ? editForm.first_name || '' : selectedLead?.first_name || ''}
                  onChange={(e) => setEditForm({...editForm, first_name: e.target.value})}
                  disabled={!isEditMode}
                />
              </div>
              <div>
                <Label htmlFor="last_name">Last Name *</Label>
                <Input
                  id="last_name"
                  value={isEditMode ? editForm.last_name || '' : selectedLead?.last_name || ''}
                  onChange={(e) => setEditForm({...editForm, last_name: e.target.value})}
                  disabled={!isEditMode}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={isEditMode ? editForm.email || '' : selectedLead?.email || ''}
                onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                disabled={!isEditMode}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={isEditMode ? editForm.phone || '' : selectedLead?.phone || ''}
                  onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
                  disabled={!isEditMode}
                />
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={isEditMode ? editForm.company || '' : selectedLead?.company || ''}
                  onChange={(e) => setEditForm({...editForm, company: e.target.value})}
                  disabled={!isEditMode}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  value={isEditMode ? editForm.country || '' : selectedLead?.country || ''}
                  onChange={(e) => setEditForm({...editForm, country: e.target.value})}
                  disabled={!isEditMode}
                />
              </div>
              <div>
                <Label htmlFor="budget_range">Budget Range</Label>
                <Input
                  id="budget_range"
                  value={isEditMode ? editForm.budget_range || '' : selectedLead?.budget_range || ''}
                  onChange={(e) => setEditForm({...editForm, budget_range: e.target.value})}
                  disabled={!isEditMode}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="status">Lead Status</Label>
                <Select
                  value={isEditMode ? editForm.lead_status || 'new' : selectedLead?.lead_status || 'new'}
                  onValueChange={(value) => setEditForm({...editForm, lead_status: value})}
                  disabled={!isEditMode}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="qualified">Qualified</SelectItem>
                    <SelectItem value="converted">Converted</SelectItem>
                    <SelectItem value="lost">Lost</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="urgency">Priority</Label>
                <Select
                  value={isEditMode ? editForm.urgency || 'medium' : selectedLead?.urgency || 'medium'}
                  onValueChange={(value) => setEditForm({...editForm, urgency: value})}
                  disabled={!isEditMode}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={isEditMode ? editForm.message || '' : selectedLead?.message || ''}
                onChange={(e) => setEditForm({...editForm, message: e.target.value})}
                disabled={!isEditMode}
                rows={4}
              />
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