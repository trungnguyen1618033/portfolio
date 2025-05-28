import { PortfolioData, Education, Interest, DiaryEntry, BlogPost, DataType } from './types';

// Sample initial data
const INITIAL_DATA: PortfolioData = {
  education: [
    {
      id: 'edu-1',
      institution: 'Đại học Luật Hà Nội',
      degree: 'Cử nhân Luật',
      year: '2018-2022',
      description: 'Chuyên ngành Luật Quốc tế, tốt nghiệp loại Giỏi',
      order: 1
    },
    {
      id: 'edu-2',
      institution: 'IELTS Certification',
      degree: 'IELTS Academic',
      year: '2023',
      description: 'Overall Band Score: 7.5',
      order: 2
    }
  ],
  interests: [
    {
      id: 'int-1',
      title: 'Đọc sách',
      category: 'hobby',
      description: 'Đam mê văn học cổ điển và sách pháp lý quốc tế',
      order: 1
    },
    {
      id: 'int-2',
      title: 'Du lịch',
      category: 'activity',
      description: 'Khám phá văn hóa và hệ thống pháp luật các nước',
      order: 2
    },
    {
      id: 'int-3',
      title: 'Nghiên cứu luật',
      category: 'skill',
      description: 'Nghiên cứu và phân tích các vụ án quốc tế',
      order: 3
    }
  ],
  diary: [
    {
      id: 'diary-1',
      date: '2024-01-15',
      title: 'Ngày làm việc đầu tiên tại Oriental International Law Firm',
      content: 'Hôm nay là ngày đầu tiên tôi bước chân vào văn phòng luật Oriental International. Cảm giác rất hồi hộp nhưng cũng đầy phấn khích. Đội ngũ đồng nghiệp rất thân thiện và chuyên nghiệp. Tôi được giao nhiệm vụ đầu tiên là nghiên cứu về luật thương mại quốc tế - đúng với chuyên môn mà tôi đã học. Hy vọng những ngày tới sẽ có nhiều trải nghiệm thú vị.',
      mood: 'excited',
      tags: ['work', 'new-beginning', 'career'],
      isPrivate: false
    },
    {
      id: 'diary-2',
      date: '2024-01-20',
      title: 'Hoàn thành dự án đầu tiên',
      content: 'Sau một tuần làm việc, tôi đã hoàn thành thành công dự án nghiên cứu đầu tiên về luật thương mại quốc tế. Đây là một trải nghiệm quý giá giúp tôi hiểu sâu hơn về thực tiễn áp dụng luật trong môi trường doanh nghiệp. Cảm ơn team đã hỗ trợ nhiệt tình.',
      mood: 'happy',
      tags: ['achievement', 'project', 'international-law'],
      isPrivate: false
    }
  ],
  blog: [
    {
      id: 'blog-1',
      title: 'Luật Quốc tế trong Thời đại Số hóa',
      slug: 'luat-quoc-te-thoi-dai-so-hoa',
      excerpt: 'Những thay đổi và thách thức của luật quốc tế trong bối cảnh công nghệ phát triển mạnh mẽ.',
      content: 'Trong thời đại số hóa hiện nay, luật quốc tế đang phải đối mặt với nhiều thách thức mới. Từ việc quản lý dữ liệu xuyên biên giới đến các vấn đề về an ninh mạng, các luật sư và nhà hoạch định chính sách cần có cái nhìn toàn diện về tác động của công nghệ...',
      publishDate: '2024-01-10',
      lastModified: '2024-01-10',
      tags: ['international-law', 'technology', 'digitalization'],
      featured: true,
      published: true
    },
    {
      id: 'blog-2',
      title: 'Kinh nghiệm Học Luật Quốc tế',
      slug: 'kinh-nghiem-hoc-luat-quoc-te',
      excerpt: 'Chia sẻ những kinh nghiệm và bài học quý giá trong quá trình học tập chuyên ngành Luật Quốc tế.',
      content: 'Học luật quốc tế không chỉ là việc ghi nhớ các điều khoản pháp luật mà còn là quá trình hiểu sâu về văn hóa, chính trị và kinh tế của các quốc gia. Trong bài viết này, tôi muốn chia sẻ những kinh nghiệm học tập và nghiên cứu...',
      publishDate: '2024-01-05',
      lastModified: '2024-01-05',
      tags: ['education', 'law-school', 'experience'],
      featured: false,
      published: true
    }
  ],
  lastUpdated: new Date().toISOString()
};

export class DataManager {
  private static readonly STORAGE_KEY = 'portfolio_data';

  // Get all data
  static getData(): PortfolioData {
    if (typeof window === 'undefined') {
      return INITIAL_DATA;
    }

    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }

    // Return initial data and save it
    this.saveData(INITIAL_DATA);
    return INITIAL_DATA;
  }

  // Save all data
  static saveData(data: PortfolioData): void {
    if (typeof window === 'undefined') return;

    try {
      data.lastUpdated = new Date().toISOString();
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }

  // Get data by type
  static getDataByType<T>(type: DataType): T[] {
    const data = this.getData();
    return data[type] as T[];
  }

  // Add new item
  static addItem<T extends { id: string; order?: number }>(type: DataType, item: Omit<T, 'id'>): T {
    const data = this.getData();
    const newItem = {
      ...item,
      id: this.generateId(type),
      order: item.order || this.getNextOrder(type)
    } as T;

    (data[type] as any[]).push(newItem);
    this.saveData(data);
    return newItem;
  }

  // Update item
  static updateItem<T extends { id: string }>(type: DataType, id: string, updates: Partial<T>): T | null {
    const data = this.getData();
    const items = data[type] as T[];
    const index = items.findIndex(item => item.id === id);

    if (index === -1) return null;

    items[index] = { ...items[index], ...updates };
    this.saveData(data);
    return items[index];
  }

  // Delete item
  static deleteItem(type: DataType, id: string): boolean {
    const data = this.getData();
    const items = data[type] as any[];
    const index = items.findIndex(item => item.id === id);

    if (index === -1) return false;

    items.splice(index, 1);
    this.saveData(data);
    return true;
  }

  // Reorder items
  static reorderItems(type: DataType, itemIds: string[]): boolean {
    const data = this.getData();
    const items = data[type] as any[];
    
    try {
      itemIds.forEach((id, index) => {
        const item = items.find(item => item.id === id);
        if (item) {
          item.order = index + 1;
        }
      });
      
      // Sort by order
      items.sort((a, b) => (a.order || 0) - (b.order || 0));
      this.saveData(data);
      return true;
    } catch (error) {
      console.error('Error reordering items:', error);
      return false;
    }
  }

  // Generate unique ID
  private static generateId(type: DataType): string {
    const prefix = type.substring(0, 3);
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8);
    return `${prefix}-${timestamp}-${random}`;
  }

  // Get next order number
  private static getNextOrder(type: DataType): number {
    const items = this.getDataByType(type) as any[];
    const maxOrder = Math.max(...items.map(item => item.order || 0), 0);
    return maxOrder + 1;
  }

  // Search items
  static searchItems<T>(type: DataType, query: string): T[] {
    const items = this.getDataByType<T>(type) as any[];
    if (!query.trim()) return items;

    const searchTerm = query.toLowerCase();
    return items.filter(item => {
      const searchableFields = [
        item.title,
        item.institution,
        item.degree,
        item.description,
        item.content,
        item.excerpt,
        ...(item.tags || [])
      ].filter(Boolean);

      return searchableFields.some(field => 
        field.toLowerCase().includes(searchTerm)
      );
    });
  }

  // Get items by tag
  static getItemsByTag<T>(type: DataType, tag: string): T[] {
    const items = this.getDataByType<T>(type) as any[];
    return items.filter(item => 
      item.tags && item.tags.includes(tag)
    );
  }

  // Get all tags for a data type
  static getAllTags(type: DataType): string[] {
    const items = this.getDataByType(type) as any[];
    const tags = new Set<string>();
    
    items.forEach(item => {
      if (item.tags) {
        item.tags.forEach((tag: string) => tags.add(tag));
      }
    });
    
    return Array.from(tags).sort();
  }

  // Export data as JSON
  static exportData(): string {
    const data = this.getData();
    return JSON.stringify(data, null, 2);
  }

  // Import data from JSON
  static importData(jsonString: string): boolean {
    try {
      const data = JSON.parse(jsonString) as PortfolioData;
      
      // Validate data structure
      if (!data.education || !data.interests || !data.diary || !data.blog) {
        throw new Error('Invalid data structure');
      }

      this.saveData(data);
      return true;
    } catch (error) {
      console.error('Error importing data:', error);
      return false;
    }
  }

  // Reset to initial data
  static resetData(): void {
    this.saveData(INITIAL_DATA);
  }

  // Get statistics
  static getStats() {
    const data = this.getData();
    return {
      education: data.education.length,
      interests: data.interests.length,
      diary: data.diary.length,
      blog: data.blog.length,
      totalPosts: data.blog.filter(post => post.published).length,
      featuredPosts: data.blog.filter(post => post.featured && post.published).length,
      privateDiary: data.diary.filter(entry => entry.isPrivate).length,
      lastUpdated: data.lastUpdated
    };
  }
} 