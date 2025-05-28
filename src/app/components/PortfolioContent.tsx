'use client';

import Image from "next/image";
import BackToTopButton from "./ui/BackToTopButton";
import Navigation from "./ui/Navigation";
import Footer from "./ui/Footer";
import { useModalContext } from "../../lib/modal-context";

// Sample data - sẽ được thay thế bằng real data từ admin system
const sampleEducation = [
  {
    id: 1,
    degree: "Associate Degree of Business English",
    institution: "Thu Duc College Of Technology",
    year: "2020-2022",
    description: "Chuyên ngành Tiếng Anh Thương mại với focus vào giao tiếp kinh doanh quốc tế, đàm phán và dịch thuật chuyên ngành."
  },
  {
    id: 2,
    degree: "IELTS Certificate",
    institution: "IELTS Official Test Center",
    year: "2022",
    description: "Chứng chỉ IELTS với band score cao, demonstrating proficiency in English for academic and professional purposes."
  },
  {
    id: 3,
    degree: "Chứng chỉ chuyên môn khác",
    institution: "Các tổ chức đào tạo pháp lý",
    year: "2023-2024",
    description: "Các khóa học và chứng chỉ về pháp luật quốc tế, hợp đồng thương mại và tư vấn pháp lý."
  }
];

const sampleInterests = [
  {
    id: 1,
    title: "Pháp lý quốc tế",
    description: "Nghiên cứu sâu về pháp luật quốc tế, các hiệp định thương mại và xu hướng pháp lý mới. Đặc biệt quan tâm đến pháp luật đầu tư nước ngoài và giải quyết tranh chấp thương mại.",
    category: "skill"
  },
  {
    id: 2,
    title: "Dịch thuật học thuật",
    description: "Chuyên dịch các tài liệu pháp lý, hợp đồng và văn bản học thuật từ tiếng Anh sang tiếng Việt và ngược lại. Focus vào terminology chính xác và ngữ cảnh pháp lý.",
    category: "skill"
  },
  {
    id: 3,
    title: "Thiền định",
    description: "Thực hành thiền định hàng ngày để duy trì sự cân bằng trong cuộc sống và công việc. Áp dụng mindfulness vào việc xử lý các vấn đề phức tạp trong lĩnh vực pháp lý.",
    category: "hobby"
  }
];

const sampleBlogs = [
  {
    id: 1,
    title: "Xu hướng pháp lý quốc tế 2024",
    excerpt: "Phân tích các xu hướng mới trong lĩnh vực pháp lý quốc tế và tác động đến Việt Nam",
    content: "Trong năm 2024, lĩnh vực pháp lý quốc tế đang chứng kiến nhiều thay đổi quan trọng...\n\nCác xu hướng chính bao gồm:\n\n1. Số hóa trong các thủ tục pháp lý\n2. Tăng cường hợp tác quốc tế trong giải quyết tranh chấp\n3. Phát triển luật công nghệ và AI\n4. Bảo vệ môi trường trong luật thương mại\n\nNhững thay đổi này sẽ có tác động sâu rộng đến cách thức hoạt động của các doanh nghiệp và luật sư tại Việt Nam.",
    tags: ["international-law", "technology", "2024-trends"],
    publishDate: "2024-12-15",
    lastModified: "2024-12-15",
    published: true,
    featured: true
  },
  {
    id: 2,
    title: "Dịch thuật pháp lý: Thách thức và cơ hội",
    excerpt: "Những khó khăn và cơ hội trong lĩnh vực dịch thuật tài liệu pháp lý chuyên môn",
    content: "Dịch thuật pháp lý là một lĩnh vực đòi hỏi sự chính xác cao và hiểu biết sâu về hệ thống pháp luật...\n\nCác thách thức chính:\n\n1. Terminology chuyên ngành phức tạp\n2. Sự khác biệt giữa các hệ thống pháp luật\n3. Yêu cầu về độ chính xác tuyệt đối\n4. Thời gian gấp rút trong các vụ việc\n\nTuy nhiên, đây cũng là lĩnh vực có nhiều cơ hội phát triển nghề nghiệp cho những người có đam mê và năng lực.",
    tags: ["translation", "legal", "career"],
    publishDate: "2024-12-10",
    lastModified: "2024-12-10",
    published: true,
    featured: false
  }
];

const sampleActivities = [
  {
    id: 1,
    title: "Hội thảo chuyên môn",
    description: "Tham gia tích cực các hội thảo về pháp luật quốc tế, đầu tư nước ngoài và thương mại điện tử. Đóng góp ý kiến chuyên môn trong các phiên thảo luận về xu hướng pháp lý mới và tác động đến doanh nghiệp Việt Nam.",
    category: "activity",
    details: "Thường xuyên tham gia các hội thảo do Hiệp hội Luật sư Việt Nam, VCCI và các tổ chức quốc tế tổ chức. Đặc biệt quan tâm đến các chủ đề về FDI, M&A và compliance.",
    achievements: ["Diễn giả tại 5+ hội thảo", "Tham gia 20+ sự kiện chuyên môn", "Networking với 100+ chuyên gia"]
  },
  {
    id: 2,
    title: "Khóa học nâng cao",
    description: "Liên tục học hỏi và nâng cao chuyên môn thông qua các khóa học về luật quốc tế, arbitration và corporate law từ các tổ chức uy tín trong và ngoài nước.",
    category: "activity", 
    details: "Hoàn thành các khóa học từ Singapore International Arbitration Centre (SIAC), Vietnam International Arbitration Centre (VIAC) và nhiều tổ chức đào tạo chuyên nghiệp khác.",
    achievements: ["10+ chứng chỉ chuyên môn", "200+ giờ đào tạo/năm", "Top 10% học viên xuất sắc"]
  },
  {
    id: 3,
    title: "Bài viết chuyên môn",
    description: "Xuất bản các bài viết chuyên môn về lĩnh vực pháp lý trên các tạp chí luật, blog và platform chuyên nghiệp để chia sẻ kiến thức và kinh nghiệm với cộng đồng.",
    category: "activity",
    details: "Thường xuyên viết bài về các chủ đề nóng trong luật doanh nghiệp, luật đầu tư và giải quyết tranh chấp. Các bài viết được đăng tải trên Vietnam Law & Legal Forum, Legal500 và LinkedIn.",
    achievements: ["15+ bài viết được publish", "5000+ lượt đọc/tháng", "Featured trong 3 tạp chí luật"]
  }
];

export default function PortfolioContent() {
  const { openModal } = useModalContext();

  const handleEducationClick = (education: any) => {
    openModal('education', education);
  };

  const handleInterestClick = (interest: any) => {
    openModal('interest', interest);
  };

  const handleBlogClick = (blog: any) => {
    openModal('blog', blog);
  };

  const handleActivityClick = (activity: any) => {
    openModal('interest', activity);  // Using interest modal for activities since they have similar structure
  };

  return (
    <div className="bg-navy-primary">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section - Full Screen Introduction */}
      <section id="hero" className="h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center z-10">
          <div className="mb-8">
            {/* Professional Portrait */}
            <div className="w-56 h-72 mx-auto mb-8 rounded-lg border-2 border-gold-accent shadow-2xl overflow-hidden">
              <Image 
                src="/portrait.jpg" 
                alt="Nguyen Phi Huyen - Senior Associate at Oriental International Law Firm"
                width={224}
                height={288}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          <h1 className="font-primary text-6xl md:text-8xl font-bold text-gold mb-6 animate-fade-in-up">
            Nguyen Phi Huyen
          </h1>
          
          <h2 className="font-primary text-3xl md:text-4xl text-gold-accent mb-8 animate-fade-in-up">
            Senior Associate | 資深法務
          </h2>

          <div className="font-chinese text-4xl md:text-5xl text-gold mb-12 animate-fade-in-up">
            阮 非 玄
          </div>

          <div className="section-divider max-w-md mx-auto"></div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gold-accent rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gold-accent rounded-full mt-2 animate-pulse"></div>
            </div>
            <p className="text-gold-accent text-sm mt-2">Kéo xuống</p>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-gold-accent rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-gold-accent rounded-full"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 border border-gold-accent rounded-full"></div>
        </div>
      </section>

      {/* Company Information Section - Full Screen */}
      <section id="company" className="h-screen flex items-center justify-center px-4 relative">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="font-primary text-5xl md:text-6xl font-bold text-gold mb-8">
              Công ty hiện tại
            </h2>
            <div className="section-divider max-w-md mx-auto"></div>
          </div>

          <div className="bg-navy-light rounded-2xl p-12 hover-gold-glow shadow-2xl max-w-4xl mx-auto">
            <div className="text-center mb-12">
              {/* Company logo placeholder */}
              <div className="w-40 h-20 mx-auto mb-8 bg-navy-dark rounded-lg border-2 border-gold-accent flex items-center justify-center shadow-lg">
                <span className="text-gold-accent text-sm">Company Logo</span>
              </div>
              <h3 className="font-primary text-4xl md:text-5xl font-bold text-gold mb-6">
                Oriental International Law Firm
              </h3>
              <p className="text-gold-accent text-lg">Công ty Luật Quốc tế Oriental</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center md:text-left">
                <h4 className="font-primary text-2xl text-gold-accent mb-6 font-semibold">
                  Văn phòng
                </h4>
                <ul className="space-y-3 text-gold text-lg">
                  <li className="flex items-center justify-center md:justify-start">
                    <span className="w-2 h-2 bg-gold-accent rounded-full mr-3"></span>
                    Hà Nội
                  </li>
                  <li className="flex items-center justify-center md:justify-start">
                    <span className="w-2 h-2 bg-gold-accent rounded-full mr-3"></span>
                    TP. Hồ Chí Minh
                  </li>
                  <li className="flex items-center justify-center md:justify-start">
                    <span className="w-2 h-2 bg-gold-accent rounded-full mr-3"></span>
                    Bình Dương
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <h4 className="font-primary text-2xl text-gold-accent mb-6 font-semibold">
                  Thông tin liên hệ
                </h4>
                <div className="space-y-3 text-gold text-lg">
                  <p className="flex items-center justify-center md:justify-start">
                    <span className="text-gold-accent font-semibold mr-2">📞</span>
                    0968 813 066
                  </p>
                  <p className="flex items-center justify-center md:justify-start">
                    <span className="text-gold-accent font-semibold mr-2">✉️</span>
                    servicecenter@vigorouscg.com
                  </p>
                  <p className="flex items-center justify-center md:justify-start">
                    <span className="text-gold-accent font-semibold mr-2">🌐</span>
                    www.orientallawpro.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications & Certifications Section - Full Screen */}
      <section id="qualifications" className="h-screen flex items-center justify-center px-4 bg-navy-dark relative">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="font-primary text-5xl md:text-6xl font-bold text-gold mb-8">
              Bằng cấp & Chứng chỉ
            </h2>
            <div className="section-divider max-w-md mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Education Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-accent to-gold rounded-full"></div>

              {/* Education items - Now clickable */}
              {sampleEducation.map((education, index) => (
                <div key={education.id} className="relative pl-24 pb-12">
                  <div className="absolute left-6 w-6 h-6 bg-gold-accent rounded-full border-4 border-navy-dark shadow-lg"></div>
                  <div 
                    className="bg-navy-light rounded-xl p-8 hover-gold-glow shadow-xl cursor-pointer transform hover:scale-105 transition-all duration-300"
                    onClick={() => handleEducationClick(education)}
                  >
                    <h3 className="font-primary text-2xl font-bold text-gold-accent mb-3">
                      {education.degree}
                    </h3>
                    <p className="text-gold mb-3 text-lg">{education.institution}</p>
                    <div className="text-gold-accent font-semibold">{education.year}</div>
                    <div className="mt-4 text-gold-accent text-sm opacity-75">
                      Click để xem chi tiết →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interests & Activities Section */}
      <section id="interests" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="font-primary text-5xl md:text-6xl font-bold text-gold mb-8">
              Sở thích & Hoạt động
            </h2>
            <div className="section-divider max-w-md mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Interests - Now clickable */}
            <div>
              <h3 className="font-primary text-3xl font-bold text-gold-accent mb-8 text-center md:text-left">
                Sở thích cá nhân
              </h3>
              <div className="space-y-6">
                {sampleInterests.map((interest) => (
                  <div 
                    key={interest.id}
                    className="bg-navy-light rounded-xl p-6 hover-gold-glow shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
                    onClick={() => handleInterestClick(interest)}
                  >
                    <h4 className="text-gold-accent font-bold mb-3 text-lg">{interest.title}</h4>
                    <p className="text-gold">{interest.description.substring(0, 100)}...</p>
                    <div className="mt-3 text-gold-accent text-sm opacity-75">
                      Click để xem chi tiết →
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div>
              <h3 className="font-primary text-3xl font-bold text-gold-accent mb-8 text-center md:text-left">
                Hoạt động nổi bật
              </h3>
              <div className="space-y-6">
                {sampleActivities.map((activity) => (
                  <div 
                    key={activity.id}
                    className="bg-navy-light rounded-xl p-6 hover-gold-glow shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
                    onClick={() => handleActivityClick(activity)}
                  >
                    <h4 className="text-gold-accent font-bold mb-3 text-lg">{activity.title}</h4>
                    <p className="text-gold">{activity.description.substring(0, 100)}...</p>
                    <div className="mt-3 text-gold-accent text-sm opacity-75">
                      Click để xem chi tiết →
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Journal Section - Full Screen */}
      <section id="blog" className="h-screen flex items-center justify-center px-4 bg-navy-dark">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="font-primary text-5xl md:text-6xl font-bold text-gold mb-8">
              Nhật ký & Blog
            </h2>
            <div className="section-divider max-w-md mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog post cards - Now clickable */}
            {sampleBlogs.map((blog) => (
              <div 
                key={blog.id}
                className="bg-navy-light rounded-xl p-8 hover-gold-glow shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => handleBlogClick(blog)}
              >
                <h3 className="font-primary text-xl font-bold text-gold-accent mb-4">
                  {blog.title}
                </h3>
                <p className="text-gold mb-6">
                  {blog.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gold-accent font-semibold">
                    {new Date(blog.publishDate).toLocaleDateString('vi-VN')}
                  </span>
                  <span className="text-gold-accent hover:text-gold transition-colors font-semibold">
                    Xem thêm →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTopButton />
    </div>
  );
} 