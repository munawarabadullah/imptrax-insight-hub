import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { User, Mail, Bell, Save } from "lucide-react";

interface UserProfile {
  first_name: string;
  last_name: string;
  email: string;
  notifications_enabled: boolean;
  email_notifications: boolean;
  push_notifications: boolean;
}

const ProfileSettings = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile>({
    first_name: "",
    last_name: "",
    email: "",
    notifications_enabled: true,
    email_notifications: true,
    push_notifications: false,
  });
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (user) {
      loadProfile();
    }
  }, [user]);

  const loadProfile = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      // Get user metadata from auth
      const { data: { user: authUser } } = await supabase.auth.getUser();
      
      if (authUser) {
        setProfile({
          first_name: authUser.user_metadata?.first_name || "",
          last_name: authUser.user_metadata?.last_name || "",
          email: authUser.email || "",
          notifications_enabled: authUser.user_metadata?.notifications_enabled ?? true,
          email_notifications: authUser.user_metadata?.email_notifications ?? true,
          push_notifications: authUser.user_metadata?.push_notifications ?? false,
        });
      }
    } catch (error) {
      console.error('Error loading profile:', error);
      toast.error('Failed to load profile information');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!user) return;
    
    setSaving(true);
    try {
      const { error } = await supabase.auth.updateUser({
        data: {
          first_name: profile.first_name,
          last_name: profile.last_name,
          notifications_enabled: profile.notifications_enabled,
          email_notifications: profile.email_notifications,
          push_notifications: profile.push_notifications,
        }
      });

      if (error) throw error;
      
      toast.success('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update profile');
    } finally {
      setSaving(false);
    }
  };

  const handleInputChange = (field: keyof UserProfile, value: string | boolean) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-4">
            <div className="h-20 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <User className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>Personal Information</span>
            </CardTitle>
            <CardDescription>
              Update your personal details and contact information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={profile.first_name}
                  onChange={(e) => handleInputChange('first_name', e.target.value)}
                  placeholder="Enter your first name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={profile.last_name}
                  onChange={(e) => handleInputChange('last_name', e.target.value)}
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  disabled
                  className="pl-10 bg-gray-50"
                  placeholder="Email address"
                />
              </div>
              <p className="text-xs text-gray-500">Email address cannot be changed from this interface</p>
            </div>
          </CardContent>
        </Card>

        {/* Notification Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="w-5 h-5" />
              <span>Notification Preferences</span>
            </CardTitle>
            <CardDescription>
              Manage how you receive notifications and updates
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Enable Notifications</Label>
                <p className="text-sm text-gray-500">Receive notifications about system updates</p>
              </div>
              <Switch
                checked={profile.notifications_enabled}
                onCheckedChange={(checked) => handleInputChange('notifications_enabled', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Email Notifications</Label>
                <p className="text-sm text-gray-500">Get notified via email for important updates</p>
              </div>
              <Switch
                checked={profile.email_notifications}
                onCheckedChange={(checked) => handleInputChange('email_notifications', checked)}
                disabled={!profile.notifications_enabled}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Push Notifications</Label>
                <p className="text-sm text-gray-500">Receive push notifications in your browser</p>
              </div>
              <Switch
                checked={profile.push_notifications}
                onCheckedChange={(checked) => handleInputChange('push_notifications', checked)}
                disabled={!profile.notifications_enabled}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSave} disabled={saving} className="flex items-center space-x-2">
          <Save className="w-4 h-4" />
          <span>{saving ? 'Saving...' : 'Save Changes'}</span>
        </Button>
      </div>
    </div>
  );
};

export default ProfileSettings;