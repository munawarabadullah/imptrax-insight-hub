import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple authentication - in production, use proper authentication
    if (loginForm.email === "admin@imptrax.com" && loginForm.password === "admin123") {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuthenticated', 'true');
      toast.success("Successfully logged in");
      // Redirect to dashboard after successful login
      navigate('/dashboard');
    } else {
      toast.error("Invalid credentials");
    }
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
        <h1 className="text-3xl font-bold text-foreground">ImpTrax CRM Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome to the admin panel!</p>
        <Button 
          onClick={() => {
            setIsAuthenticated(false);
            sessionStorage.removeItem('adminAuthenticated');
          }}
          variant="outline"
          className="mt-4"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Admin;