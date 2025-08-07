import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useAuth } from "../contexts/AuthContext";

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
  const navigate = useNavigate();
  const { user, userRole, loading, signIn, signOut } = useAuth();
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Redirect authenticated users with proper roles to Dashboard
  useEffect(() => {
    if (!loading && user && userRole) {
      if (userRole === 'Admin' || userRole === 'Executive' || userRole === 'Director') {
        navigate('/dashboard', { replace: true });
      }
    }
  }, [user, userRole, loading, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    
    try {
      const { error } = await signIn(loginForm.email, loginForm.password);
      
      if (error) {
        console.error('Login error:', error);
        toast.error(error.message || "Invalid credentials");
      } else {
        toast.success("Successfully logged in");
        // Navigation will happen automatically via useEffect when auth state changes
      }
    } catch (error) {
      console.error('Login exception:', error);
      toast.error("Login failed. Please try again.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      toast.success("Successfully logged out");
      navigate('/admin');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error("Logout failed");
    }
  };
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!user) {
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
              <Button type="submit" className="w-full" disabled={isLoggingIn}>
                {isLoggingIn ? "Logging in..." : "Login"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Check if user has proper role - if not, show access denied
  if (user && userRole && userRole !== 'Admin' && userRole !== 'Executive' && userRole !== 'Director') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-red-600">Access Denied</CardTitle>
            <CardDescription className="text-center">
              You don't have permission to access this area.
              <br />Your role: {userRole || 'No role assigned'}
              <br />User ID: {user?.id}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleLogout} className="w-full">
              Logout
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // If user is authenticated with proper role, they will be redirected via useEffect
  // This component should only show login form for unauthenticated users
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
      <div className="text-lg">Redirecting to Dashboard...</div>
    </div>
  );
};

export default Admin;