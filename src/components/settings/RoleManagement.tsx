import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Shield, Users, Eye, Edit, Trash2, Settings, RefreshCw } from "lucide-react";

interface Role {
  id: string;
  user_id: string;
  role: string;
  created_at: string;
  updated_at: string;
}

interface RolePermissions {
  [key: string]: {
    description: string;
    permissions: string[];
    color: string;
    hierarchy: number;
  };
}

const rolePermissions: RolePermissions = {
  'Admin': {
    description: 'Full system access with all technical permissions',
    permissions: ['Read', 'Write', 'Delete', 'Configure', 'User Management', 'System Settings'],
    color: 'bg-red-500',
    hierarchy: 5
  },
  'Executive': {
    description: 'High-level business access with strategic oversight',
    permissions: ['Read', 'Write', 'Strategic Reports', 'Executive Dashboard'],
    color: 'bg-purple-500',
    hierarchy: 4
  },
  'Director': {
    description: 'Departmental leadership with management capabilities',
    permissions: ['Read', 'Write', 'Team Management', 'Department Reports'],
    color: 'bg-blue-500',
    hierarchy: 3
  },
  'Manager': {
    description: 'Team leadership with operational management',
    permissions: ['Read', 'Write', 'Team Reports', 'Task Assignment'],
    color: 'bg-green-500',
    hierarchy: 2
  },
  'Sales': {
    description: 'Sales-focused access with lead management',
    permissions: ['Read', 'Lead Management', 'Sales Reports', 'Customer Contact'],
    color: 'bg-orange-500',
    hierarchy: 1
  }
};

const RoleManagement = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadRoles();
  }, []);

  const loadRoles = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setRoles(data || []);
    } catch (error) {
      console.error('Error loading roles:', error);
      toast.error('Failed to load roles');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadRoles();
    setRefreshing(false);
    toast.success('Roles refreshed successfully');
  };

  const getRoleStats = () => {
    const stats = Object.keys(rolePermissions).map(roleName => ({
      name: roleName,
      count: roles.filter(role => role.role === roleName).length,
      ...rolePermissions[roleName]
    }));
    return stats.sort((a, b) => b.hierarchy - a.hierarchy);
  };

  const roleStats = getRoleStats();
  const totalUsers = roles.length;
  const uniqueRoles = new Set(roles.map(role => role.role)).size;

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">Role Management</h2>
        </div>
        <Button 
          onClick={handleRefresh} 
          disabled={refreshing}
          variant="outline"
          className="flex items-center space-x-2"
        >
          <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
          <span>Refresh</span>
        </Button>
      </div>

      {/* Role Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{totalUsers}</p>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Roles</p>
                <p className="text-2xl font-bold text-gray-900">{uniqueRoles}</p>
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Role Types</p>
                <p className="text-2xl font-bold text-gray-900">{Object.keys(rolePermissions).length}</p>
              </div>
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Role Hierarchy */}
      <Card>
        <CardHeader>
          <CardTitle>Role Hierarchy &amp; Permissions</CardTitle>
          <CardDescription>
            Overview of all system roles, their permissions, and current user assignments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {roleStats.map((role) => (
              <div key={role.name} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 ${role.color} rounded-full`}></div>
                    <h3 className="text-lg font-semibold text-gray-900">{role.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      Level {role.hierarchy}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {role.count} user{role.count !== 1 ? 's' : ''}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-3">{role.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {role.permissions.map((permission) => (
                    <Badge key={permission} variant="outline" className="text-xs">
                      {permission}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Role Assignment Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Current Role Assignments</CardTitle>
          <CardDescription>
            Summary of users assigned to each role in the system
          </CardDescription>
        </CardHeader>
        <CardContent>
          {roles.length === 0 ? (
            <div className="text-center py-8">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No role assignments found</p>
            </div>
          ) : (
            <div className="space-y-3">
              {roleStats.filter(role => role.count > 0).map((role) => (
                <div key={role.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 ${role.color} rounded-full`}></div>
                    <span className="font-medium text-gray-900">{role.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">{role.count} assigned</Badge>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* System Information */}
      <Card>
        <CardHeader>
          <CardTitle>System Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Role System Version</p>
              <p className="font-medium">5-Tier Hierarchy v2.0</p>
            </div>
            <div>
              <p className="text-gray-600">Last Updated</p>
              <p className="font-medium">{new Date().toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-gray-600">Permission Model</p>
              <p className="font-medium">Role-Based Access Control (RBAC)</p>
            </div>
            <div>
              <p className="text-gray-600">Security Level</p>
              <p className="font-medium">Enterprise Grade</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoleManagement;