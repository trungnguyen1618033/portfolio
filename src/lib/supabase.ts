import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database table types
export interface Database {
  public: {
    Tables: {
      education: {
        Row: {
          id: number
          degree: string
          institution: string
          year: string
          description: string
          achievements: string[]
          skills: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          degree: string
          institution: string
          year: string
          description: string
          achievements?: string[]
          skills?: string[]
        }
        Update: {
          degree?: string
          institution?: string
          year?: string
          description?: string
          achievements?: string[]
          skills?: string[]
        }
      }
      interests: {
        Row: {
          id: number
          title: string
          description: string
          category: 'skill' | 'hobby' | 'activity' | 'other'
          related_skills: string[]
          benefits: string[]
          personal_impact: string
          created_at: string
          updated_at: string
        }
        Insert: {
          title: string
          description: string
          category: 'skill' | 'hobby' | 'activity' | 'other'
          related_skills?: string[]
          benefits?: string[]
          personal_impact?: string
        }
        Update: {
          title?: string
          description?: string
          category?: 'skill' | 'hobby' | 'activity' | 'other'
          related_skills?: string[]
          benefits?: string[]
          personal_impact?: string
        }
      }
      activities: {
        Row: {
          id: number
          title: string
          description: string
          details: string
          achievements: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          title: string
          description: string
          details: string
          achievements?: string[]
        }
        Update: {
          title?: string
          description?: string
          details?: string
          achievements?: string[]
        }
      }
      blogs: {
        Row: {
          id: number
          title: string
          excerpt: string
          content: string
          tags: string[]
          publish_date: string
          last_modified: string
          published: boolean
          featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          title: string
          excerpt: string
          content: string
          tags?: string[]
          published?: boolean
          featured?: boolean
        }
        Update: {
          title?: string
          excerpt?: string
          content?: string
          tags?: string[]
          published?: boolean
          featured?: boolean
        }
      }
      diary: {
        Row: {
          id: number
          title: string
          content: string
          mood: 'happy' | 'neutral' | 'thoughtful' | 'excited' | 'calm'
          tags: string[]
          date: string
          is_private: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          title: string
          content: string
          mood: 'happy' | 'neutral' | 'thoughtful' | 'excited' | 'calm'
          tags?: string[]
          date: string
          is_private?: boolean
        }
        Update: {
          title?: string
          content?: string
          mood?: 'happy' | 'neutral' | 'thoughtful' | 'excited' | 'calm'
          tags?: string[]
          date?: string
          is_private?: boolean
        }
      }
    }
  }
} 