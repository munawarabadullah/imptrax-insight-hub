import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Menu, 
  X, 
  Home, 
  Users, 
  Building, 
  TrendingUp, 
  BarChart3, 
  Settings, 
  Bell, 
  Search,
  ChevronDown,
  Plus,
  DollarSign,
  Activity,
  CreditCard,
  Download,
  User,
  Lock,
  Shield,
  UserCog
} from "lucide-react";
import { Input } from "@/components/ui/input";
import Leads from './Leads';
import ProfileSettings from '@/components/settings/ProfileSettings';
import PasswordSettings from '@/components/settings/PasswordSettings';
import RoleManagement from '@/components/settings/RoleManagement';
import UserManagement from '@/components/settings/UserManagement';
import { calculateTotalBudgetPipeline, formatCurrency, calculateLeadStatusBreakdown } from '@/utils/budgetCalculations';

interface ContactSubmission {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  company?: string;
  created_at: string;
  lead_status?: string;
  urgency?: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, userRole } = useAuth();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [activeView, setActiveView] = useState("dashboard");
  const [crmExpanded, setCrmExpanded] = useState(false);
  const [settingsExpanded, setSettingsExpanded] = useState(false);
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "crm", label: "CRM", icon: Users, hasSubmenu: true },
    { id: "settings", label: "Settings", icon: Settings, hasSubmenu: true },
  ];

  const crmSubItems = [
    { id: "leads", label: "Leads", icon: Users },
  ];

  // Settings submenu items with role-based access control
  const getSettingsSubItems = () => {
    const baseItems = [
      { id: "profile", label: "Profile", icon: User },
      { id: "password", label: "Password", icon: Lock },
    ];
    
    // Only Admin users can see Roles and Users management
    if (userRole === 'Admin') {
      baseItems.push(
        { id: "roles", label: "Roles", icon: Shield },
        { id: "users", label: "Users", icon: UserCog }
      );
    }
    
    return baseItems;
  };

  const settingsSubItems = getSettingsSubItems();

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = async () => {
    setLoading(true);
    console.log('Starting to load submissions...');
    try {
      console.log('Making Supabase request...');
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      console.log('Supabase response:', { data, error });
      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }
      console.log('Setting submissions data:', data);
      setSubmissions(data || []);
    } catch (error) {
      console.error('Error loading submissions:', error);
    } finally {
      setLoading(false);
      console.log('Loading finished');
    }
  };

  // Calculate statistics from real data using utility functions
  const leadStatusBreakdown = calculateLeadStatusBreakdown(submissions);
  const totalBudgetPipeline = calculateTotalBudgetPipeline(submissions);
  
  const today = new Date();
  const oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  const newLeadsThisWeek = submissions.filter(sub => 
    new Date(sub.created_at) >= oneWeekAgo
  ).length;

  const stats = [
    {
      title: "Total Leads",
      value: leadStatusBreakdown.total.toString(),
      change: `${newLeadsThisWeek} new this week`,
      changeType: newLeadsThisWeek > 0 ? "positive" : "neutral",
      icon: Users,
      color: "bg-blue-500"
    },
    {
      title: "New Leads",
      value: leadStatusBreakdown.new.toString(),
      change: `${leadStatusBreakdown.highPriority} high priority`,
      changeType: leadStatusBreakdown.highPriority > 0 ? "positive" : "neutral",
      icon: Activity,
      color: "bg-green-500"
    },
    {
      title: "VIP Leads",
      value: leadStatusBreakdown.highPriority.toString(),
      change: "High priority clients",
      changeType: "neutral",
      icon: Building,
      color: "bg-purple-500"
    },
    {
      title: "Converted",
      value: leadStatusBreakdown.converted.toString(),
      change: "Successful conversions",
      changeType: leadStatusBreakdown.converted > 0 ? "positive" : "neutral",
      icon: DollarSign,
      color: "bg-orange-500"
    },
  ];

  // Function to render content based on active view
  const renderMainContent = () => {
    switch (activeView) {
      case 'leads':
        return <Leads />;
      case 'profile':
        return <ProfileSettings />;
      case 'password':
        return <PasswordSettings />;
      case 'roles':
        return userRole === 'Admin' ? <RoleManagement /> : <div className="text-center py-8"><p className="text-gray-500">Access denied. Admin role required.</p></div>;
      case 'users':
        return userRole === 'Admin' ? <UserManagement /> : <div className="text-center py-8"><p className="text-gray-500">Access denied. Admin role required.</p></div>;
      case 'dashboard':
      default:
        return (
          <>
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Welcome back, System!</h2>
                  <p className="text-blue-100 mb-4">
                    Here's what's happening with your leads today.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                          <p className={`text-sm ${
                            stat.changeType === 'positive' ? 'text-green-600' : 
                            stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-500'
                          }`}>
                            {stat.change}
                          </p>
                        </div>
                        <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* CRM Analytics Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Total Budget Pipeline */}
              <Card>
                <CardHeader>
                  <CardTitle>Total Budget Pipeline</CardTitle>
                  <CardDescription>{formatCurrency(totalBudgetPipeline)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600">Across all active leads</div>
                </CardContent>
              </Card>

              {/* Performance Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Performance Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">Conversion Rate</div>
                    <div className="text-sm text-gray-600">VIP Ratio</div>
                    <div className="text-sm text-gray-600">Active Pipeline</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest inquiries from contact form</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="text-center py-4">
                    <p className="text-gray-500">Loading recent activity...</p>
                  </div>
                ) : submissions.length === 0 ? (
                  <div className="text-center py-4">
                    <p className="text-gray-500">No recent inquiries found</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {submissions.slice(0, 5).map((submission) => {
                      const urgencyColor = submission.urgency === 'Immediate' ? 'text-red-600' :
                                         submission.urgency === 'High' ? 'text-orange-600' :
                                         submission.urgency === 'Medium' ? 'text-yellow-600' : 'text-green-600';
                      
                      return (
                        <div key={submission.id} className={`flex items-center space-x-3 p-3 rounded-lg ${
                          // Check if inquiry is new (created within last 24 hours) or updated
                          new Date(submission.created_at) > new Date(Date.now() - 24 * 60 * 60 * 1000)
                            ? 'bg-green-100' // Light green for new inquiries
                            : 'bg-blue-100'  // Light blue for updated/older inquiries
                        }`}>
                          <Users className="w-5 h-5 text-blue-500" />
                          <div className="flex-1">
                            <p className="font-medium">
                              {submission.first_name} {submission.last_name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {submission.city && `${submission.city}`}{submission.state && ` ${submission.state}`} - {submission.company && `${submission.company}`} - {submission.country && `${submission.country}`}
                            </p>
                            <div className="flex items-center space-x-2">
                              <p className="text-xs text-gray-400">
                                {new Date(submission.created_at).toLocaleDateString('en-US', { 
                                  month: 'short', 
                                  day: 'numeric', 
                                  year: 'numeric' 
                                }).toUpperCase()}
                              </p>
                              {submission.urgency && (
                                <span className={`text-xs ${urgencyColor}`}>
                                  • {submission.urgency.toLowerCase()}
                                </span>
                              )}
                              {submission.lead_status && (
                                <Badge variant="outline" className="text-xs">
                                  {submission.lead_status}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </>
        );
    }
  };

  return (
    // Workbench - Overall Dashboard Screen
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} bg-white shadow-lg transition-all duration-300 flex flex-col`}>
        {/* Logo */}
        <div className="p-4 border-b">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">IT</span>
            </div>
            {!sidebarCollapsed && (
              <span className="font-semibold text-gray-800">ImpTrax Hub</span>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      if (item.hasSubmenu) {
                        if (item.id === 'crm') {
                          setCrmExpanded(!crmExpanded);
                          setSettingsExpanded(false);
                          setActiveMenu('crm');
                        } else if (item.id === 'settings') {
                          setSettingsExpanded(!settingsExpanded);
                          setCrmExpanded(false);
                          setActiveMenu('settings');
                        }
                      } else {
                        setActiveMenu(item.id);
                        setActiveView(item.id);
                        setCrmExpanded(false);
                        setSettingsExpanded(false);
                      }
                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      (activeMenu === item.id || 
                       (item.hasSubmenu && item.id === 'crm' && (activeMenu === 'crm' || activeView === 'leads')) ||
                       (item.hasSubmenu && item.id === 'settings' && (activeMenu === 'settings' || ['profile', 'password', 'roles', 'users'].includes(activeView))))
                        ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {!sidebarCollapsed && <span>{item.label}</span>}
                  </button>
                  {/* CRM Submenu */}
                  {item.hasSubmenu && item.id === 'crm' && crmExpanded && !sidebarCollapsed && (
                    <ul className="ml-6 mt-2 space-y-1">
                      {crmSubItems.map((subItem) => {
                        const SubIcon = subItem.icon;
                        return (
                          <li key={subItem.id}>
                            <button
                              onClick={() => {
                                setActiveView(subItem.id);
                                setActiveMenu('crm');
                              }}
                              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors text-sm ${
                                activeView === subItem.id
                                  ? 'bg-blue-50 text-blue-600'
                                  : 'text-gray-500 hover:bg-gray-50'
                              }`}
                            >
                              <SubIcon className="w-4 h-4" />
                              <span>{subItem.label}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  {/* Settings Submenu */}
                  {item.hasSubmenu && item.id === 'settings' && settingsExpanded && !sidebarCollapsed && (
                    <ul className="ml-6 mt-2 space-y-1">
                      {settingsSubItems.map((subItem) => {
                        const SubIcon = subItem.icon;
                        return (
                          <li key={subItem.id}>
                            <button
                              onClick={() => {
                                setActiveView(subItem.id);
                                setActiveMenu('settings');
                              }}
                              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors text-sm ${
                                activeView === subItem.id
                                  ? 'bg-blue-50 text-blue-600'
                                  : 'text-gray-500 hover:bg-gray-50'
                              }`}
                            >
                              <SubIcon className="w-4 h-4" />
                              <span>{subItem.label}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Profile */}
        {!sidebarCollapsed && (
          <div className="p-4 border-t">
            <div className="flex items-center space-x-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">Admin User</p>
                <p className="text-xs text-gray-500 truncate">admin@imptrax.com</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              >
                {sidebarCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
              </Button>
              <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search funds, companies, transactions..."
                  className="pl-10 w-80"
                />
              </div>

              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
              </Button>

              {/* User Profile */}
              <div className="flex items-center space-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>AA</AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-sm font-medium">Admin User</p>
                  <p className="text-xs text-gray-500">Manager</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* MainPanel - Main Dashboard Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {renderMainContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;