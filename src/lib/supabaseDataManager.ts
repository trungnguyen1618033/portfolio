import { supabase } from './supabase'
import type { Database } from './supabase'

// Type aliases for easier use
type Education = Database['public']['Tables']['education']['Row']
type Interest = Database['public']['Tables']['interests']['Row']
type Activity = Database['public']['Tables']['activities']['Row']
type Blog = Database['public']['Tables']['blogs']['Row']
type Diary = Database['public']['Tables']['diary']['Row']

type EducationInsert = Database['public']['Tables']['education']['Insert']
type InterestInsert = Database['public']['Tables']['interests']['Insert']
type ActivityInsert = Database['public']['Tables']['activities']['Insert']
type BlogInsert = Database['public']['Tables']['blogs']['Insert']
type DiaryInsert = Database['public']['Tables']['diary']['Insert']

export class SupabaseDataManager {
  // Education methods
  static async getEducation(): Promise<Education[]> {
    const { data, error } = await supabase
      .from('education')
      .select('*')
      .order('created_at', { ascending: true })

    if (error) {
      console.error('Error fetching education:', error)
      return []
    }

    return data || []
  }

  static async addEducation(education: EducationInsert): Promise<Education | null> {
    const { data, error } = await supabase
      .from('education')
      .insert(education)
      .select()
      .single()

    if (error) {
      console.error('Error adding education:', error)
      return null
    }

    return data
  }

  static async updateEducation(id: number, updates: Partial<EducationInsert>): Promise<Education | null> {
    const { data, error } = await supabase
      .from('education')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating education:', error)
      return null
    }

    return data
  }

  static async deleteEducation(id: number): Promise<boolean> {
    const { error } = await supabase
      .from('education')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting education:', error)
      return false
    }

    return true
  }

  // Interest methods
  static async getInterests(): Promise<Interest[]> {
    const { data, error } = await supabase
      .from('interests')
      .select('*')
      .order('created_at', { ascending: true })

    if (error) {
      console.error('Error fetching interests:', error)
      return []
    }

    return data || []
  }

  static async addInterest(interest: InterestInsert): Promise<Interest | null> {
    const { data, error } = await supabase
      .from('interests')
      .insert(interest)
      .select()
      .single()

    if (error) {
      console.error('Error adding interest:', error)
      return null
    }

    return data
  }

  // Activity methods
  static async getActivities(): Promise<Activity[]> {
    const { data, error } = await supabase
      .from('activities')
      .select('*')
      .order('created_at', { ascending: true })

    if (error) {
      console.error('Error fetching activities:', error)
      return []
    }

    return data || []
  }

  static async addActivity(activity: ActivityInsert): Promise<Activity | null> {
    const { data, error } = await supabase
      .from('activities')
      .insert(activity)
      .select()
      .single()

    if (error) {
      console.error('Error adding activity:', error)
      return null
    }

    return data
  }

  // Blog methods
  static async getBlogs(): Promise<Blog[]> {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching blogs:', error)
      return []
    }

    return data || []
  }

  static async getPublishedBlogs(): Promise<Blog[]> {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('published', true)
      .order('publish_date', { ascending: false })

    if (error) {
      console.error('Error fetching published blogs:', error)
      return []
    }

    return data || []
  }

  static async addBlog(blog: BlogInsert): Promise<Blog | null> {
    const { data, error } = await supabase
      .from('blogs')
      .insert({
        ...blog,
        publish_date: new Date().toISOString(),
        last_modified: new Date().toISOString()
      })
      .select()
      .single()

    if (error) {
      console.error('Error adding blog:', error)
      return null
    }

    return data
  }

  // Diary methods  
  static async getDiaryEntries(): Promise<Diary[]> {
    const { data, error } = await supabase
      .from('diary')
      .select('*')
      .order('date', { ascending: false })

    if (error) {
      console.error('Error fetching diary entries:', error)
      return []
    }

    return data || []
  }

  static async getPublicDiaryEntries(): Promise<Diary[]> {
    const { data, error } = await supabase
      .from('diary')
      .select('*')
      .eq('is_private', false)
      .order('date', { ascending: false })

    if (error) {
      console.error('Error fetching public diary entries:', error)
      return []
    }

    return data || []
  }

  static async addDiaryEntry(entry: DiaryInsert): Promise<Diary | null> {
    const { data, error } = await supabase
      .from('diary')
      .insert(entry)
      .select()
      .single()

    if (error) {
      console.error('Error adding diary entry:', error)
      return null
    }

    return data
  }
}

// Export types for use in components
export type { Education, Interest, Activity, Blog, Diary } 