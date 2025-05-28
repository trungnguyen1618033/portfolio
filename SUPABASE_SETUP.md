# Supabase Setup Guide

## 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Sign up/Login 
3. Create new project
4. Choose region (Singapore for Vietnam)
5. Wait for project setup

## 2. Get API Keys
1. Go to Project Settings > API
2. Copy `Project URL` 
3. Copy `anon public` key

## 3. Environment Variables
Create `.env.local` file in project root:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## 4. Create Database Tables

Run these SQL commands in Supabase SQL Editor:

```sql
-- Education table
CREATE TABLE education (
  id SERIAL PRIMARY KEY,
  degree TEXT NOT NULL,
  institution TEXT NOT NULL,
  year TEXT NOT NULL,
  description TEXT NOT NULL,
  achievements TEXT[] DEFAULT '{}',
  skills TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Interests table  
CREATE TABLE interests (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT CHECK (category IN ('skill', 'hobby', 'activity', 'other')) DEFAULT 'other',
  related_skills TEXT[] DEFAULT '{}',
  benefits TEXT[] DEFAULT '{}',
  personal_impact TEXT DEFAULT '',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Activities table
CREATE TABLE activities (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  details TEXT NOT NULL,
  achievements TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Blogs table
CREATE TABLE blogs (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  publish_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_modified TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Diary table
CREATE TABLE diary (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  mood TEXT CHECK (mood IN ('happy', 'neutral', 'thoughtful', 'excited', 'calm')) DEFAULT 'neutral',
  tags TEXT[] DEFAULT '{}',
  date DATE NOT NULL,
  is_private BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply trigger to all tables
CREATE TRIGGER update_education_updated_at BEFORE UPDATE ON education FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_interests_updated_at BEFORE UPDATE ON interests FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_activities_updated_at BEFORE UPDATE ON activities FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_blogs_updated_at BEFORE UPDATE ON blogs FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_diary_updated_at BEFORE UPDATE ON diary FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

## 5. Insert Sample Data

```sql
-- Sample education data
INSERT INTO education (degree, institution, year, description, achievements, skills) VALUES
('Associate Degree of Business English', 'Thu Duc College Of Technology', '2020-2022', 'Chuyên ngành Tiếng Anh Thương mại với focus vào giao tiếp kinh doanh quốc tế, đàm phán và dịch thuật chuyên ngành.', ARRAY['GPA: 3.8/4.0', 'Outstanding Student Award', 'English Communication Excellence'], ARRAY['Business English', 'Translation', 'International Business']),
('IELTS Certificate', 'IELTS Official Test Center', '2022', 'Chứng chỉ IELTS với band score cao, demonstrating proficiency in English for academic and professional purposes.', ARRAY['IELTS Band 7.5+', 'Speaking: 8.0', 'Writing: 7.5'], ARRAY['English Proficiency', 'Academic Writing', 'Professional Communication']);

-- Sample interests data
INSERT INTO interests (title, description, category, related_skills, benefits, personal_impact) VALUES
('Pháp lý quốc tế', 'Nghiên cứu sâu về pháp luật quốc tế, các hiệp định thương mại và xu hướng pháp lý mới.', 'skill', ARRAY['International Law', 'Commercial Law', 'Dispute Resolution'], ARRAY['Nâng cao kiến thức chuyên môn', 'Theo kịp xu hướng pháp lý toàn cầu'], 'Giúp tôi hiểu sâu hơn về môi trường pháp lý quốc tế.'),
('Thiền định', 'Thực hành thiền định hàng ngày để duy trì sự cân bằng trong cuộc sống và công việc.', 'hobby', ARRAY['Stress Management', 'Focus & Concentration'], ARRAY['Giảm stress', 'Tăng khả năng tập trung'], 'Thiền định giúp tôi maintain work-life balance.');
```

## 6. Row Level Security (Optional)
For admin-only editing, enable RLS:

```sql
-- Enable RLS on all tables
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE interests ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE diary ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Public read access" ON education FOR SELECT USING (true);
CREATE POLICY "Public read access" ON interests FOR SELECT USING (true);
CREATE POLICY "Public read access" ON activities FOR SELECT USING (true);
CREATE POLICY "Public read published blogs" ON blogs FOR SELECT USING (published = true);
CREATE POLICY "Public read public diary" ON diary FOR SELECT USING (is_private = false);
```

## 7. Benefits of Supabase
✅ **Persistent data**: Never lost on deploy
✅ **Real-time**: Auto-sync across clients  
✅ **Scalable**: PostgreSQL with full SQL
✅ **Free tier**: 500MB database
✅ **Built-in Auth**: User management
✅ **API auto-generated**: REST + GraphQL
✅ **Dashboard**: Easy data management 