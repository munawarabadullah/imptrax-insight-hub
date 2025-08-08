import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useAuth } from "../contexts/AuthContext";

const Admin = () => {
  const navigate = useNavigate();
  const { user, userRole, loading, signIn, signOut } = useAuth();
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Redirect authenticated users with proper roles to Dashboard immediately
  useEffect(() => {
    if (!loading && user && userRole) {
      const normalizedRole = userRole.toLowerCase();
      if (normalizedRole === 'admin' || normalizedRole === 'executive' || normalizedRole === 'director') {
        navigate('/dashboard', { replace: true });
        return;
      }
    }
  }, [user, userRole, loading, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    
    try {
      const { error } = await signIn(loginForm.email, loginForm.password);
      
      if (error) {
        toast.error(error.message || "Invalid credentials");
      } else {
        toast.success("Successfully logged in");
      }
    } catch (error) {
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
      toast.error("Logout failed");
    }
  };

  // Show loading state
  if (loading || isLoggingIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // If user is authenticated with proper role, redirect immediately (this should not render)
  if (!loading && user && userRole) {
    const normalizedRole = userRole.toLowerCase();
    if (normalizedRole === 'admin' || normalizedRole === 'executive' || normalizedRole === 'director') {
      navigate('/dashboard', { replace: true });
      return null;
    }
  }

  // Show login form for unauthenticated users
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
  if (user && userRole) {
    const normalizedRole = userRole.toLowerCase();
    if (normalizedRole !== 'admin' && normalizedRole !== 'executive' && normalizedRole !== 'director') {
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
  }

  // This should never be reached - fallback
  return null;
};

export default Admin;