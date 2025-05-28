'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthManager } from './auth';
import { User, LoginCredentials } from './types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize authentication state
  useEffect(() => {
    const initAuth = () => {
      try {
        const session = AuthManager.getSession();
        setUser(session?.user || null);
      } catch (error) {
        console.error('Auth initialization error:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    setLoading(true);
    try {
      const result = await AuthManager.login(credentials);
      if (result.success) {
        const session = AuthManager.getSession();
        setUser(session?.user || null);
      }
      setLoading(false);
      return result;
    } catch (error) {
      setLoading(false);
      return { success: false, error: 'Lỗi kết nối' };
    }
  };

  const logout = () => {
    AuthManager.logout();
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 