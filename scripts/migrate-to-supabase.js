const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase environment variables!');
  console.error('');
  console.error('Please create a .env.local file in the project root with:');
  console.error('');
  console.error('NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co');
  console.error('NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here');
  console.error('');
  console.error('You can find these values in your Supabase project:');
  console.error('1. Go to your Supabase dashboard');
  console.error('2. Click on your project');
  console.error('3. Go to Settings > API');
  console.error('4. Copy the URL and anon/public key');
  console.error('');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function migrateData() {
  try {
    console.log('🚀 Starting data migration to Supabase...');

    // Read education data
    const educationPath = path.join(__dirname, '../src/data/education.json');
    if (fs.existsSync(educationPath)) {
      const educationData = JSON.parse(fs.readFileSync(educationPath, 'utf-8'));
      
      for (const education of educationData) {
        const { id, ...educationWithoutId } = education; // Remove id for auto-generation
        const { data, error } = await supabase
          .from('education')
          .insert(educationWithoutId);
          
        if (error) {
          console.error('Error inserting education:', error);
        } else {
          console.log('✅ Inserted education:', education.degree);
        }
      }
    }

    // Read interests data
    const interestsPath = path.join(__dirname, '../src/data/interests.json');
    if (fs.existsSync(interestsPath)) {
      const interestsData = JSON.parse(fs.readFileSync(interestsPath, 'utf-8'));
      
      for (const interest of interestsData) {
        const { id, relatedSkills, personalImpact, ...rest } = interest;
        
        // Map field names to match database schema
        const interestData = {
          ...rest,
          related_skills: relatedSkills || [],
          personal_impact: personalImpact || ''
        };
        
        const { data, error } = await supabase
          .from('interests')
          .insert(interestData);
          
        if (error) {
          console.error('Error inserting interest:', error);
        } else {
          console.log('✅ Inserted interest:', interest.title);
        }
      }
    }

    // Add sample activities data
    const sampleActivities = [
      {
        title: "Hội thảo chuyên môn",
        description: "Tham gia tích cực các hội thảo về pháp luật quốc tế, đầu tư nước ngoài và thương mại điện tử. Đóng góp ý kiến chuyên môn trong các phiên thảo luận về xu hướng pháp lý mới và tác động đến doanh nghiệp Việt Nam.",
        details: "Thường xuyên tham gia các hội thảo do Hiệp hội Luật sư Việt Nam, VCCI và các tổ chức quốc tế tổ chức. Đặc biệt quan tâm đến các chủ đề về FDI, M&A và compliance.",
        achievements: ["Diễn giả tại 5+ hội thảo", "Tham gia 20+ sự kiện chuyên môn", "Networking với 100+ chuyên gia"]
      },
      {
        title: "Khóa học nâng cao",
        description: "Liên tục học hỏi và nâng cao chuyên môn thông qua các khóa học về luật quốc tế, arbitration và corporate law từ các tổ chức uy tín trong và ngoài nước.",
        details: "Hoàn thành các khóa học từ Singapore International Arbitration Centre (SIAC), Vietnam International Arbitration Centre (VIAC) và nhiều tổ chức đào tạo chuyên nghiệp khác.",
        achievements: ["10+ chứng chỉ chuyên môn", "200+ giờ đào tạo/năm", "Top 10% học viên xuất sắc"]
      },
      {
        title: "Bài viết chuyên môn",
        description: "Xuất bản các bài viết chuyên môn về lĩnh vực pháp lý trên các tạp chí luật, blog và platform chuyên nghiệp để chia sẻ kiến thức và kinh nghiệm với cộng đồng.",
        details: "Thường xuyên viết bài về các chủ đề nóng trong luật doanh nghiệp, luật đầu tư và giải quyết tranh chấp. Các bài viết được đăng tải trên Vietnam Law & Legal Forum, Legal500 và LinkedIn.",
        achievements: ["15+ bài viết được publish", "5000+ lượt đọc/tháng", "Featured trong 3 tạp chí luật"]
      }
    ];

    for (const activity of sampleActivities) {
      const { data, error } = await supabase
        .from('activities')
        .insert(activity);
        
      if (error) {
        console.error('Error inserting activity:', error);
      } else {
        console.log('✅ Inserted activity:', activity.title);
      }
    }

    // Add sample blog data
    const sampleBlogs = [
      {
        title: "Xu hướng pháp lý quốc tế 2024",
        excerpt: "Phân tích các xu hướng mới trong lĩnh vực pháp lý quốc tế và tác động đến Việt Nam",
        content: "Trong năm 2024, lĩnh vực pháp lý quốc tế đang chứng kiến nhiều thay đổi quan trọng...\n\nCác xu hướng chính bao gồm:\n\n1. Số hóa trong các thủ tục pháp lý\n2. Tăng cường hợp tác quốc tế trong giải quyết tranh chấp\n3. Phát triển luật công nghệ và AI\n4. Bảo vệ môi trường trong luật thương mại\n\nNhững thay đổi này sẽ có tác động sâu rộng đến cách thức hoạt động của các doanh nghiệp và luật sư tại Việt Nam.",
        tags: ["international-law", "technology", "2024-trends"],
        published: true,
        featured: true
      },
      {
        title: "Dịch thuật pháp lý: Thách thức và cơ hội",
        excerpt: "Những khó khăn và cơ hội trong lĩnh vực dịch thuật tài liệu pháp lý chuyên môn",
        content: "Dịch thuật pháp lý là một lĩnh vực đòi hỏi sự chính xác cao và hiểu biết sâu về hệ thống pháp luật...\n\nCác thách thức chính:\n\n1. Terminology chuyên ngành phức tạp\n2. Sự khác biệt giữa các hệ thống pháp luật\n3. Yêu cầu về độ chính xác tuyệt đối\n4. Thời gian gấp rút trong các vụ việc\n\nTuy nhiên, đây cũng là lĩnh vực có nhiều cơ hội phát triển nghề nghiệp cho những người có đam mê và năng lực.",
        tags: ["translation", "legal", "career"],
        published: true,
        featured: false
      }
    ];

    for (const blog of sampleBlogs) {
      const { data, error } = await supabase
        .from('blogs')
        .insert(blog);
        
      if (error) {
        console.error('Error inserting blog:', error);
      } else {
        console.log('✅ Inserted blog:', blog.title);
      }
    }

    console.log('🎉 Data migration completed successfully!');
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
  }
}

// Run migration
migrateData(); 