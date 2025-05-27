import BackToTopButton from "./components/ui/BackToTopButton";
import Navigation from "./components/ui/Navigation";

export default function Home() {
  return (
    <div className="bg-navy-primary">
      {/* Navigation */}
      <Navigation />
      {/* Hero Section - Full Screen Introduction */}
      <section id="hero" className="h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center z-10">
          <div className="mb-8">
            {/* Portrait placeholder - to be replaced with actual image */}
            <div className="w-56 h-72 mx-auto mb-8 bg-navy-light rounded-lg border-2 border-gold-accent flex items-center justify-center shadow-2xl">
              <span className="text-gold-accent text-sm">Portrait Image</span>
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

              {/* Education items */}
              <div className="relative pl-24 pb-12">
                <div className="absolute left-6 w-6 h-6 bg-gold-accent rounded-full border-4 border-navy-dark shadow-lg"></div>
                <div className="bg-navy-light rounded-xl p-8 hover-gold-glow shadow-xl">
                  <h3 className="font-primary text-2xl font-bold text-gold-accent mb-3">
                    Associate Degree of Business English
                  </h3>
                  <p className="text-gold mb-3 text-lg">Thu Duc College Of Technology</p>
                  <div className="text-gold-accent font-semibold">Đại học</div>
                </div>
              </div>

              <div className="relative pl-24 pb-12">
                <div className="absolute left-6 w-6 h-6 bg-gold-accent rounded-full border-4 border-navy-dark shadow-lg"></div>
                <div className="bg-navy-light rounded-xl p-8 hover-gold-glow shadow-xl">
                  <h3 className="font-primary text-2xl font-bold text-gold-accent mb-3">
                    IELTS Certificate
                  </h3>
                  <p className="text-gold mb-3 text-lg">Chứng chỉ tiếng Anh quốc tế</p>
                  <div className="text-gold-accent font-semibold">Chứng chỉ Tiếng Anh</div>
                </div>
              </div>

              <div className="relative pl-24">
                <div className="absolute left-6 w-6 h-6 bg-gold-accent rounded-full border-4 border-navy-dark shadow-lg"></div>
                <div className="bg-navy-light rounded-xl p-8 hover-gold-glow shadow-xl">
                  <h3 className="font-primary text-2xl font-bold text-gold-accent mb-3">
                    Chứng chỉ chuyên môn khác
                  </h3>
                  <p className="text-gold mb-3 text-lg">Các chứng chỉ pháp lý và chuyên môn</p>
                  <div className="text-gold-accent font-semibold">Phát triển nghề nghiệp</div>
                </div>
              </div>
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
            {/* Interests */}
            <div>
              <h3 className="font-primary text-3xl font-bold text-gold-accent mb-8 text-center md:text-left">
                Sở thích cá nhân
              </h3>
              <div className="space-y-6">
                <div className="bg-navy-light rounded-xl p-6 hover-gold-glow shadow-lg">
                  <h4 className="text-gold-accent font-bold mb-3 text-lg">Pháp lý quốc tế</h4>
                  <p className="text-gold">Nghiên cứu và theo dõi các xu hướng pháp lý quốc tế</p>
                </div>
                <div className="bg-navy-light rounded-xl p-6 hover-gold-glow shadow-lg">
                  <h4 className="text-gold-accent font-bold mb-3 text-lg">Dịch thuật học thuật</h4>
                  <p className="text-gold">Dịch các tài liệu pháp lý và học thuật</p>
                </div>
                <div className="bg-navy-light rounded-xl p-6 hover-gold-glow shadow-lg">
                  <h4 className="text-gold-accent font-bold mb-3 text-lg">Thiền định</h4>
                  <p className="text-gold">Thực hành thiền định để cân bằng cuộc sống</p>
                </div>
              </div>
            </div>

            {/* Activities */}
            <div>
              <h3 className="font-primary text-3xl font-bold text-gold-accent mb-8 text-center md:text-left">
                Hoạt động nổi bật
              </h3>
              <div className="space-y-6">
                <div className="bg-navy-light rounded-xl p-6 hover-gold-glow shadow-lg">
                  <h4 className="text-gold-accent font-bold mb-3 text-lg">Hội thảo chuyên môn</h4>
                  <p className="text-gold">Tham gia các hội thảo về pháp luật quốc tế</p>
                </div>
                <div className="bg-navy-light rounded-xl p-6 hover-gold-glow shadow-lg">
                  <h4 className="text-gold-accent font-bold mb-3 text-lg">Khóa học nâng cao</h4>
                  <p className="text-gold">Liên tục học hỏi và nâng cao chuyên môn</p>
                </div>
                <div className="bg-navy-light rounded-xl p-6 hover-gold-glow shadow-lg">
                  <h4 className="text-gold-accent font-bold mb-3 text-lg">Bài viết chuyên môn</h4>
                  <p className="text-gold">Xuất bản các bài viết về lĩnh vực pháp lý</p>
                </div>
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
            {/* Blog post cards */}
            <div className="bg-navy-light rounded-xl p-8 hover-gold-glow shadow-xl transform hover:scale-105 transition-all duration-300">
              <h3 className="font-primary text-xl font-bold text-gold-accent mb-4">
                Xu hướng pháp lý quốc tế 2024
              </h3>
              <p className="text-gold mb-6">
                Phân tích các xu hướng mới trong lĩnh vực pháp lý quốc tế và tác động đến Việt Nam...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gold-accent font-semibold">15/12/2024</span>
                <a href="#" className="text-gold-accent hover:text-gold transition-colors font-semibold">
                  Xem thêm →
                </a>
              </div>
            </div>

            <div className="bg-navy-light rounded-xl p-8 hover-gold-glow shadow-xl transform hover:scale-105 transition-all duration-300">
              <h3 className="font-primary text-xl font-bold text-gold-accent mb-4">
                Dịch thuật pháp lý: Thách thức và cơ hội
              </h3>
              <p className="text-gold mb-6">
                Những khó khăn và cơ hội trong lĩnh vực dịch thuật tài liệu pháp lý chuyên môn...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gold-accent font-semibold">10/12/2024</span>
                <a href="#" className="text-gold-accent hover:text-gold transition-colors font-semibold">
                  Xem thêm →
                </a>
              </div>
            </div>

            <div className="bg-navy-light rounded-xl p-8 hover-gold-glow shadow-xl transform hover:scale-105 transition-all duration-300">
              <h3 className="font-primary text-xl font-bold text-gold-accent mb-4">
                Thiền định trong công việc pháp lý
              </h3>
              <p className="text-gold mb-6">
                Cách áp dụng thiền định để nâng cao hiệu quả công việc và cân bằng cuộc sống...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gold-accent font-semibold">05/12/2024</span>
                <a href="#" className="text-gold-accent hover:text-gold transition-colors font-semibold">
                  Xem thêm →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-gold-accent bg-navy-primary">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <h3 className="font-primary text-2xl font-bold text-gold-accent mb-6">
                Liên hệ
              </h3>
              <div className="space-y-3 text-gold text-lg">
                <p className="flex items-center justify-center md:justify-start">
                  <span className="mr-3">📞</span>
                  0968 813 066
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  <span className="mr-3">✉️</span>
                  servicecenter@vigorouscg.com
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  <span className="mr-3">🌐</span>
                  www.orientallawpro.com
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-primary text-2xl font-bold text-gold-accent mb-6">
                Mạng xã hội
              </h3>
              <div className="space-y-3">
                <a href="#" className="block text-gold hover:text-gold-accent transition-colors text-lg">
                  LinkedIn
                </a>
                <a href="#" className="block text-gold hover:text-gold-accent transition-colors text-lg">
                  Email
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-primary text-2xl font-bold text-gold-accent mb-6">
                Nguyen Phi Huyen
              </h3>
              <p className="text-gold mb-4 text-lg">
                Senior Associate | Oriental International Law Firm
              </p>
              <div className="font-chinese text-2xl text-gold-accent">
                阮 非 玄
              </div>
            </div>
          </div>

          <div className="section-divider mt-12"></div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-8">
            <p className="text-gold">
              © 2024 Nguyen Phi Huyen. All rights reserved.
            </p>
            
            {/* Back to top button */}
            <BackToTopButton />
          </div>
        </div>
      </footer>
    </div>
  );
}
