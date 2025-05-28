// Portfolio Data Types
export interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
  description?: string;
  image?: string;
  order: number;
}

export interface Interest {
  id: string;
  title: string;
  category: 'hobby' | 'activity' | 'skill' | 'other';
  description: string;
  image?: string;
  order: number;
}

export interface DiaryEntry {
  id: string;
  date: string;
  title: string;
  content: string;
  mood?: 'happy' | 'excited' | 'neutral' | 'thoughtful' | 'challenging';
  tags: string[];
  isPrivate: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishDate: string;
  lastModified: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  image?: string;
}

export interface PortfolioData {
  education: Education[];
  interests: Interest[];
  diary: DiaryEntry[];
  blog: BlogPost[];
  lastUpdated: string;
}

// Authentication Types
export interface User {
  username: string;
  role: 'admin';
}

export interface AuthSession {
  user: User;
  token: string;
  expiresAt: number;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form Types
export interface LoginCredentials {
  username: string;
  password: string;
}

export type DataType = 'education' | 'interests' | 'diary' | 'blog';

export interface DataOperation {
  type: 'create' | 'update' | 'delete';
  dataType: DataType;
  id?: string;
  data?: any;
} 