'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '../../lib/auth-context';
import AuthWrapper from './auth-wrapper';

interface AdminLayoutProps {
  children: React.ReactNode;
}

function AdminLayoutInner({ children }: AdminLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, loading, logout, user } = useAuth();

  useEffect(() => {
    // Wait for auth to be loaded
    if (loading) return;

    // Simple redirect logic
    if (pathname === '/admin/login' && isAuthenticated) {
      // Already logged in, go to dashboard
      router.replace('/admin/dashboard');
    } else if (pathname !== '/admin/login' && !isAuthenticated) {
      // Not logged in and not on login page, go to login
      router.replace('/admin/login');
    }
  }, [loading, isAuthenticated, pathname, router]);

  // Show loading while checking auth
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex items-center space-x-2">
          <svg className="animate-spin h-8 w-8 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-navy-600 text-lg">Đang tải...</span>
        </div>
      </div>
    );
  }

  // Show login page without admin layout
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return null;
  }

  // Admin dashboard layout
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo / Title */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-gray-900">Portfolio Admin</h1>
              </div>
              <nav className="hidden md:ml-8 md:flex md:space-x-8">
                <NavLink href="/admin/dashboard" pathname={pathname}>
                  Dashboard
                </NavLink>
                <NavLink href="/admin/education" pathname={pathname}>
                  Bằng cấp
                </NavLink>
                <NavLink href="/admin/interests" pathname={pathname}>
                  Sở thích
                </NavLink>
                <NavLink href="/admin/diary" pathname={pathname}>
                  Nhật ký
                </NavLink>
                <NavLink href="/admin/blog" pathname={pathname}>
                  Blog
                </NavLink>
              </nav>
            </div>

            {/* User menu */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Xin chào, <span className="font-medium">{user?.username}</span>
              </span>
              <button
                onClick={() => {
                  logout();
                  router.push('/admin/login');
                }}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500 transition-colors duration-200"
              >
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Đăng xuất
              </button>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500 transition-colors duration-200"
              >
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Xem Portfolio
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile navigation */}
      <nav className="md:hidden bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-3">
            <NavLink href="/admin/dashboard" pathname={pathname} mobile>
              Dashboard
            </NavLink>
            <NavLink href="/admin/education" pathname={pathname} mobile>
              Bằng cấp
            </NavLink>
            <NavLink href="/admin/interests" pathname={pathname} mobile>
              Sở thích
            </NavLink>
            <NavLink href="/admin/diary" pathname={pathname} mobile>
              Nhật ký
            </NavLink>
            <NavLink href="/admin/blog" pathname={pathname} mobile>
              Blog
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}

// Navigation link component
interface NavLinkProps {
  href: string;
  pathname: string;
  children: React.ReactNode;
  mobile?: boolean;
}

function NavLink({ href, pathname, children, mobile }: NavLinkProps) {
  const isActive = pathname === href;
  const baseClasses = mobile
    ? "whitespace-nowrap py-2 px-1 text-sm font-medium"
    : "inline-flex items-center px-1 pt-1 text-sm font-medium";
  
  const activeClasses = mobile
    ? "border-b-2 border-navy-500 text-navy-600"
    : "border-b-2 border-navy-500 text-gray-900";
    
  const inactiveClasses = mobile
    ? "border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
    : "border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300";

  return (
    <a
      href={href}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses} transition-colors duration-200`}
    >
      {children}
    </a>
  );
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <AuthWrapper>
      <AdminLayoutInner>{children}</AdminLayoutInner>
    </AuthWrapper>
  );
} 