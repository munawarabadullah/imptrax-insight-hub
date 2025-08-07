import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger 
} from "@/components/ui/dialog";
import { Eye, Filter, Download, MessageSquare, Calendar, User, Building } from "lucide-react";

interface ContactSubmission {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  company?: string;
  job_title?: string;
  website?: string;
  company_size?: string;
  industry?: string;
  services_interested?: string[];
  project_description?: string;
  timeline?: string;
  budget_range?: string;
  urgency?: string;
  preferred_contact_method?: string;
  best_time_to_call?: string;
  meeting_type?: string;
  additional_notes?: string;
  city?: string;
  state?: string;
  country?: string;
  cta_source?: string;
  lead_score?: number;
  lead_status?: string;
  assigned_to?: string;
  notes?: string;
  follow_up_date?: string;
  created_at: string;
  updated_at: string;
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [filters, setFilters] = useState({
    status: "",
    industry: "",
    urgency: "",
    dateRange: "",
    search: ""
  });

  useEffect(() => {
    // Check if already authenticated
    const authStatus = sessionStorage.getItem('adminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      loadSubmissions();
    }
  }, []);

  useEffect(() => {
    applyFilters();
  }, [submissions, filters]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple authentication - in production, use proper authentication
    if (loginForm.email === "admin@imptrax.com" && loginForm.password === "admin123") {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuthenticated', 'true');
      toast.success("Successfully logged in");
      loadSubmissions();
    } else {
      toast.error("Invalid credentials");
    }
  };

  const loadSubmissions = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error) {
      console.error('Error loading submissions:', error);
      toast.error("Failed to load submissions");
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...submissions];

    if (filters.status) {
      filtered = filtered.filter(sub => sub.lead_status === filters.status);
    }

    if (filters.industry) {
      filtered = filtered.filter(sub => sub.industry === filters.industry);
    }

    if (filters.urgency) {
      filtered = filtered.filter(sub => sub.urgency === filters.urgency);
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(sub => 
        sub.first_name?.toLowerCase().includes(searchLower) ||
        sub.last_name?.toLowerCase().includes(searchLower) ||
        sub.email?.toLowerCase().includes(searchLower) ||
        sub.company?.toLowerCase().includes(searchLower)
      );
    }

    setFilteredSubmissions(filtered);
  };

  const updateLeadStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ lead_status: status })
        .eq('id', id);

      if (error) throw error;
      
      setSubmissions(prev => 
        prev.map(sub => sub.id === id ? { ...sub, lead_status: status } : sub)
      );
      toast.success("Lead status updated");
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error("Failed to update status");
    }
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'hot': return 'bg-red-500';
      case 'warm': return 'bg-orange-500';
      case 'cold': return 'bg-blue-500';
      case 'converted': return 'bg-green-500';
      case 'rejected': return 'bg-gray-500';
      default: return 'bg-gray-400';
    }
  };

  const getUrgencyColor = (urgency?: string) => {
    switch (urgency) {
      case 'Immediate': return 'bg-red-500';
      case 'High': return 'bg-orange-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Low': return 'bg-green-500';
      default: return 'bg-gray-400';
    }
  };

  const exportToCSV = () => {
    const headers = [
      'Date', 'Name', 'Email', 'Company', 'Industry', 'Services', 
      'Budget', 'Timeline', 'Urgency', 'Status', 'Score', 'Location'
    ];
    
    const csvData = filteredSubmissions.map(sub => [
      new Date(sub.created_at).toLocaleDateString(),
      `${sub.first_name} ${sub.last_name}`,
      sub.email,
      sub.company || '',
      sub.industry || '',
      sub.services_interested?.join('; ') || '',
      sub.budget_range || '',
      sub.timeline || '',
      sub.urgency || '',
      sub.lead_status || '',
      sub.lead_score || '',
      `${sub.city || ''}, ${sub.state || ''}, ${sub.country || ''}`
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
            <CardDescription className="text-center">
              Access the ImpTrax CRM Dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">ImpTrax CRM Dashboard</h1>
            <p className="text-muted-foreground mt-2">Manage leads and consultation requests</p>
          </div>
          <div className="flex gap-4">
            <Button onClick={exportToCSV} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
            <Button 
              onClick={() => {
                setIsAuthenticated(false);
                sessionStorage.removeItem('adminAuthenticated');
              }}
              variant="outline"
            >
              Logout
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Leads</p>
                  <p className="text-3xl font-bold">{submissions.length}</p>
                </div>
                <User className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Hot Leads</p>
                  <p className="text-3xl font-bold text-red-500">
                    {submissions.filter(s => s.lead_status === 'hot').length}
                  </p>
                </div>
                <Calendar className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">This Week</p>
                  <p className="text-3xl font-bold text-green-500">
                    {submissions.filter(s => {
                      const weekAgo = new Date();
                      weekAgo.setDate(weekAgo.getDate() - 7);
                      return new Date(s.created_at) > weekAgo;
                    }).length}
                  </p>
                </div>
                <Building className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Score</p>
                  <p className="text-3xl font-bold text-blue-500">
                    {Math.round(submissions.reduce((acc, s) => acc + (s.lead_score || 0), 0) / submissions.length) || 0}
                  </p>
                </div>
                <MessageSquare className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex-1 min-w-[200px]">
                <Input
                  placeholder="Search leads..."
                  value={filters.search}
                  onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                />
              </div>
              <Select value={filters.status} onValueChange={(value) => setFilters(prev => ({ ...prev, status: value }))}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Status</SelectItem>
                  <SelectItem value="hot">Hot</SelectItem>
                  <SelectItem value="warm">Warm</SelectItem>
                  <SelectItem value="cold">Cold</SelectItem>
                  <SelectItem value="converted">Converted</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filters.industry} onValueChange={(value) => setFilters(prev => ({ ...prev, industry: value }))}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Industries</SelectItem>
                  <SelectItem value="Financial Services">Financial Services</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                  <SelectItem value="Real Estate">Real Estate</SelectItem>
                  <SelectItem value="Technology">Technology</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filters.urgency} onValueChange={(value) => setFilters(prev => ({ ...prev, urgency: value }))}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Urgency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Urgency</SelectItem>
                  <SelectItem value="Immediate">Immediate</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
              <Button 
                onClick={() => setFilters({ status: "", industry: "", urgency: "", dateRange: "", search: "" })}
                variant="outline"
              >
                <Filter className="w-4 h-4 mr-2" />
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Leads Table */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Submissions ({filteredSubmissions.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">Loading...</div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Industry</TableHead>
                      <TableHead>Budget</TableHead>
                      <TableHead>Urgency</TableHead>
                      <TableHead>Score</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Source</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSubmissions.map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell>
                          {new Date(submission.created_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">
                              {submission.first_name} {submission.last_name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {submission.email}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{submission.company}</div>
                            <div className="text-sm text-muted-foreground">
                              {submission.job_title}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{submission.industry}</Badge>
                        </TableCell>
                        <TableCell>{submission.budget_range}</TableCell>
                        <TableCell>
                          <Badge className={`text-white ${getUrgencyColor(submission.urgency)}`}>
                            {submission.urgency}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{submission.lead_score}</span>
                            <div className={`w-2 h-2 rounded-full ${
                              (submission.lead_score || 0) >= 70 ? 'bg-green-500' :
                              (submission.lead_score || 0) >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                            }`} />
                          </div>
                        </TableCell>
                        <TableCell>
                          <Select 
                            value={submission.lead_status || ''} 
                            onValueChange={(value) => updateLeadStatus(submission.id, value)}
                          >
                            <SelectTrigger className="w-[120px]">
                              <SelectValue>
                                <Badge className={`text-white ${getStatusColor(submission.lead_status)}`}>
                                  {submission.lead_status || 'new'}
                                </Badge>
                              </SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="new">New</SelectItem>
                              <SelectItem value="hot">Hot</SelectItem>
                              <SelectItem value="warm">Warm</SelectItem>
                              <SelectItem value="cold">Cold</SelectItem>
                              <SelectItem value="converted">Converted</SelectItem>
                              <SelectItem value="rejected">Rejected</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{submission.cta_source}</Badge>
                        </TableCell>
                        <TableCell>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => setSelectedSubmission(submission)}
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>
                                  Lead Details - {submission.first_name} {submission.last_name}
                                </DialogTitle>
                                <DialogDescription>
                                  Complete information about this consultation request
                                </DialogDescription>
                              </DialogHeader>
                              {selectedSubmission && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div>
                                    <h3 className="font-semibold mb-3">Contact Information</h3>
                                    <div className="space-y-2 text-sm">
                                      <p><strong>Name:</strong> {selectedSubmission.first_name} {selectedSubmission.last_name}</p>
                                      <p><strong>Email:</strong> {selectedSubmission.email}</p>
                                      <p><strong>Phone:</strong> {selectedSubmission.phone || 'Not provided'}</p>
                                      <p><strong>Job Title:</strong> {selectedSubmission.job_title || 'Not provided'}</p>
                                      <p><strong>Location:</strong> {selectedSubmission.city}, {selectedSubmission.state}, {selectedSubmission.country}</p>
                                    </div>
                                  </div>
                                  <div>
                                    <h3 className="font-semibold mb-3">Company Information</h3>
                                    <div className="space-y-2 text-sm">
                                      <p><strong>Company:</strong> {selectedSubmission.company}</p>
                                      <p><strong>Website:</strong> {selectedSubmission.website || 'Not provided'}</p>
                                      <p><strong>Industry:</strong> {selectedSubmission.industry}</p>
                                      <p><strong>Company Size:</strong> {selectedSubmission.company_size}</p>
                                    </div>
                                  </div>
                                  <div className="md:col-span-2">
                                    <h3 className="font-semibold mb-3">Project Details</h3>
                                    <div className="space-y-2 text-sm">
                                      <p><strong>Services:</strong> {selectedSubmission.services_interested?.join(', ')}</p>
                                      <p><strong>Description:</strong> {selectedSubmission.project_description}</p>
                                      <p><strong>Timeline:</strong> {selectedSubmission.timeline}</p>
                                      <p><strong>Budget:</strong> {selectedSubmission.budget_range}</p>
                                      <p><strong>Urgency:</strong> {selectedSubmission.urgency}</p>
                                      <p><strong>Contact Method:</strong> {selectedSubmission.preferred_contact_method}</p>
                                      <p><strong>Best Time to Call:</strong> {selectedSubmission.best_time_to_call || 'Not specified'}</p>
                                      <p><strong>Meeting Type:</strong> {selectedSubmission.meeting_type}</p>
                                      {selectedSubmission.additional_notes && (
                                        <p><strong>Additional Notes:</strong> {selectedSubmission.additional_notes}</p>
                                      )}
                                    </div>
                                  </div>
                                  <div className="md:col-span-2">
                                    <h3 className="font-semibold mb-3">Lead Analytics</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                      <div>
                                        <p className="font-medium">Lead Score</p>
                                        <p className="text-2xl font-bold text-primary">{selectedSubmission.lead_score}</p>
                                      </div>
                                      <div>
                                        <p className="font-medium">Status</p>
                                        <Badge className={`text-white ${getStatusColor(selectedSubmission.lead_status)}`}>
                                          {selectedSubmission.lead_status || 'new'}
                                        </Badge>
                                      </div>
                                      <div>
                                        <p className="font-medium">Source</p>
                                        <Badge variant="outline">{selectedSubmission.cta_source}</Badge>
                                      </div>
                                      <div>
                                        <p className="font-medium">Submitted</p>
                                        <p>{new Date(selectedSubmission.created_at).toLocaleString()}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;