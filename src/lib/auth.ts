'use client';

import { AuthSession, User, LoginCredentials } from './types';

// Simple authentication configuration
const AUTH_CONFIG = {
  // In production, these should be environment variables
  ADMIN_USERNAME: process.env.NEXT_PUBLIC_ADMIN_USERNAME || 'admin',
  ADMIN_PASSWORD: process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin',
  SESSION_DURATION: 24 * 60 * 60 * 1000, // 24 hours
  TOKEN_SECRET: process.env.NEXT_PUBLIC_TOKEN_SECRET || 'portfolio-secret-key'
};

// Generate simple token
function generateToken(username: string): string {
  const timestamp = Date.now();
  const payload = `${username}:${timestamp}`;
  // Simple encoding (in production, use proper JWT)
  return btoa(payload + ':' + AUTH_CONFIG.TOKEN_SECRET);
}

// Verify token
function verifyToken(token: string): { username: string; timestamp: number } | null {
  try {
    const decoded = atob(token);
    const parts = decoded.split(':');
    if (parts.length !== 3) return null;
    
    const [username, timestamp, secret] = parts;
    if (secret !== AUTH_CONFIG.TOKEN_SECRET) return null;
    
    return { username, timestamp: parseInt(timestamp) };
  } catch {
    return null;
  }
}

// Client-side authentication functions
export class AuthManager {
  private static readonly STORAGE_KEY = 'portfolio_auth_session';

  // Login function
  static async login(credentials: LoginCredentials): Promise<{ success: boolean; error?: string }> {
    try {
      // Simple client-side authentication (for demo purposes)
      if (
        credentials.username === AUTH_CONFIG.ADMIN_USERNAME &&
        credentials.password === AUTH_CONFIG.ADMIN_PASSWORD
      ) {
        const session = this.createSession(credentials.username);
        this.setSession(session);
        return { success: true };
      } else {
        return { success: false, error: 'Tên đăng nhập hoặc mật khẩu không đúng' };
      }
    } catch (error) {
      return { success: false, error: 'Lỗi kết nối' };
    }
  }

  // Logout function
  static logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.STORAGE_KEY);
    }
  }

  // Get current session
  static getSession(): AuthSession | null {
    if (typeof window === 'undefined') return null;
    
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) return null;

      const session: AuthSession = JSON.parse(stored);
      
      // Check if session is expired
      if (Date.now() > session.expiresAt) {
        this.logout();
        return null;
      }

      return session;
    } catch {
      return null;
    }
  }

  // Set session
  private static setSession(session: AuthSession): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(session));
    }
  }

  // Create session
  private static createSession(username: string): AuthSession {
    const token = generateToken(username);
    const expiresAt = Date.now() + AUTH_CONFIG.SESSION_DURATION;

    return {
      user: { username, role: 'admin' },
      token,
      expiresAt
    };
  }

  // Check if user is authenticated
  static isAuthenticated(): boolean {
    const session = this.getSession();
    return session !== null;
  }

  // Get current user
  static getCurrentUser(): User | null {
    const session = this.getSession();
    return session?.user || null;
  }

  // Validate session
  static validateSession(): boolean {
    const session = this.getSession();
    if (!session) return false;

    const decoded = verifyToken(session.token);
    if (!decoded) {
      this.logout();
      return false;
    }

    // Check if token is expired
    if (Date.now() > decoded.timestamp + AUTH_CONFIG.SESSION_DURATION) {
      this.logout();
      return false;
    }

    return true;
  }

  // Extend session if it's about to expire
  static extendSession(): void {
    const session = this.getSession();
    if (!session) return;

    // Extend if session will expire in the next hour
    const oneHour = 60 * 60 * 1000;
    if (session.expiresAt - Date.now() < oneHour) {
      session.expiresAt = Date.now() + AUTH_CONFIG.SESSION_DURATION;
      this.setSession(session);
    }
  }
}

// Old useAuth hooks removed - now using AuthContext from auth-context.tsx 