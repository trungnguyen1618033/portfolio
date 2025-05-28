import fs from 'fs';
import path from 'path';

// Types
export interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface Interest {
  id: number;
  title: string;
  description: string;
  category: 'skill' | 'hobby' | 'activity' | 'other';
  relatedSkills: string[];
  benefits: string[];
  personalImpact: string;
}

export interface Activity {
  id: number;
  title: string;
  description: string;
  category: 'activity';
  details: string;
  achievements: string[];
}

export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  publishDate: string;
  lastModified: string;
  published: boolean;
  featured: boolean;
}

export interface Diary {
  id: number;
  title: string;
  content: string;
  mood: 'happy' | 'neutral' | 'thoughtful' | 'excited' | 'calm';
  tags: string[];
  date: string;
  isPrivate: boolean;
}

// Data directory path
const dataDir = path.join(process.cwd(), 'src/data');

// Generic data reader
async function readJsonFile<T>(filename: string): Promise<T[]> {
  try {
    const filePath = path.join(dataDir, `${filename}.json`);
    const fileContent = await fs.promises.readFile(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Error reading ${filename}.json:`, error);
    return [];
  }
}

// Generic data writer
async function writeJsonFile<T>(filename: string, data: T[]): Promise<void> {
  try {
    const filePath = path.join(dataDir, `${filename}.json`);
    await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(`Error writing ${filename}.json:`, error);
    throw error;
  }
}

// Data access methods
export class DataManager {
  // Education methods
  static async getEducation(): Promise<Education[]> {
    return readJsonFile<Education>('education');
  }

  static async addEducation(education: Omit<Education, 'id'>): Promise<Education> {
    const educations = await this.getEducation();
    const newId = Math.max(...educations.map(e => e.id), 0) + 1;
    const newEducation = { ...education, id: newId };
    educations.push(newEducation);
    await writeJsonFile('education', educations);
    return newEducation;
  }

  static async updateEducation(id: number, education: Partial<Education>): Promise<Education | null> {
    const educations = await this.getEducation();
    const index = educations.findIndex(e => e.id === id);
    if (index === -1) return null;
    
    educations[index] = { ...educations[index], ...education };
    await writeJsonFile('education', educations);
    return educations[index];
  }

  static async deleteEducation(id: number): Promise<boolean> {
    const educations = await this.getEducation();
    const filteredEducations = educations.filter(e => e.id !== id);
    if (filteredEducations.length === educations.length) return false;
    
    await writeJsonFile('education', filteredEducations);
    return true;
  }

  // Interest methods
  static async getInterests(): Promise<Interest[]> {
    return readJsonFile<Interest>('interests');
  }

  static async addInterest(interest: Omit<Interest, 'id'>): Promise<Interest> {
    const interests = await this.getInterests();
    const newId = Math.max(...interests.map(i => i.id), 0) + 1;
    const newInterest = { ...interest, id: newId };
    interests.push(newInterest);
    await writeJsonFile('interests', interests);
    return newInterest;
  }

  // Activity methods
  static async getActivities(): Promise<Activity[]> {
    return readJsonFile<Activity>('activities');
  }

  // Blog methods
  static async getBlogs(): Promise<Blog[]> {
    return readJsonFile<Blog>('blogs');
  }

  static async getPublishedBlogs(): Promise<Blog[]> {
    const blogs = await this.getBlogs();
    return blogs.filter(blog => blog.published);
  }

  // Diary methods
  static async getDiaryEntries(): Promise<Diary[]> {
    return readJsonFile<Diary>('diary');
  }

  static async getPublicDiaryEntries(): Promise<Diary[]> {
    const entries = await this.getDiaryEntries();
    return entries.filter(entry => !entry.isPrivate);
  }
} 