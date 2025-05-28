'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../lib/auth-context';
import LoginForm from '../../components/admin/LoginForm';

export default function AdminLogin() {
  const router = useRouter();
  const { isAuthenticated, loading } = useAuth();

  // No useEffect here - let admin layout handle redirects

  const handleLoginSuccess = () => {
    router.push('/admin/dashboard');
  };

  // Show loading while checking auth
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="flex items-center space-x-2">
          <svg className="animate-spin h-8 w-8 text-gold-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-gold-300 text-lg">Đang kiểm tra...</span>
        </div>
      </div>
    );
  }

  // Don't render login form if already authenticated
  if (isAuthenticated) {
    return null;
  }

  return <LoginForm onLoginSuccess={handleLoginSuccess} />;
} 