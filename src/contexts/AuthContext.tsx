import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  userRole: string | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error?: any }>;
  signOut: () => Promise<void>;
  refreshUserRole: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getUserRole = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId)
        .single();
      
      if (error) {
        console.error('Error fetching user role:', error);
        return null;
      }
      
      return data?.role || null;
    } catch (error) {
      console.error('Error in getUserRole:', error);
      return null;
    }
  };

  const refreshUserRole = async () => {
    if (user) {
      const role = await getUserRole(user.id);
      setUserRole(role);
    }
  };

  useEffect(() => {
    console.log('AuthContext: Starting initialization');
    
    // Timeout fallback to prevent infinite loading
    const timeoutId = setTimeout(() => {
      console.warn('AuthContext: Timeout reached, forcing loading to false');
      setLoading(false);
    }, 5000);
    
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('AuthContext: Got session:', session?.user?.email || 'No user');
      clearTimeout(timeoutId);
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        getUserRole(session.user.id).then(setUserRole);
      }
      console.log('AuthContext: Setting loading to false');
      setLoading(false);
    }).catch(error => {
      console.error('AuthContext: Error getting session:', error);
      clearTimeout(timeoutId);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', event, session?.user?.email);
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        const role = await getUserRole(session.user.id);
        setUserRole(role);
      } else {
        setUserRole(null);
      }
      
      setLoading(false);
    });

    return () => {
      clearTimeout(timeoutId);
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        console.error('Sign in error:', error);
        return { error };
      }
      
      return { data };
    } catch (error) {
      console.error('Sign in exception:', error);
      return { error };
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Sign out error:', error);
    }
  };

  const value = {
    user,
    session,
    userRole,
    loading,
    signIn,
    signOut,
    refreshUserRole,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};