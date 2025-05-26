import Image from "next/image";
import BackToTopButton from "./components/ui/BackToTopButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-navy-primary">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            {/* Portrait placeholder - to be replaced with actual image */}
            <div className="w-48 h-60 mx-auto mb-8 bg-navy-light rounded-lg border-2 border-gold-accent flex items-center justify-center">
              <span className="text-gold-accent text-sm">Portrait Image</span>
            </div>
          </div>

          <h1 className="font-primary text-5xl md:text-7xl font-bold text-gold mb-4 animate-fade-in-up">
            Nguyen Phi Huyen
          </h1>
          
          <h2 className="font-primary text-2xl md:text-3xl text-gold-accent mb-6 animate-fade-in-up">
            Senior Associate | 資深法務
          </h2>

          <div className="font-chinese text-3xl md:text-4xl text-gold mb-8 animate-fade-in-up">
            阮 非 玄
          </div>

          <div className="section-divider max-w-md mx-auto"></div>
        </div>
      </section>

      {/* Company Information Section */}
      <section id="company" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-primary text-4xl font-bold text-gold mb-6">
              Công ty hiện tại
            </h2>
            <div className="section-divider max-w-md mx-auto"></div>
          </div>

          <div className="bg-navy-light rounded-lg p-8 hover-gold-glow">
            <div className="text-center mb-8">
              {/* Company logo placeholder */}
              <div className="w-32 h-16 mx-auto mb-6 bg-navy-dark rounded border border-gold-accent flex items-center justify-center">
                <span className="text-gold-accent text-xs">Company Logo</span>
              </div>
              <h3 className="font-primary text-3xl font-bold text-gold mb-4">
                Oriental International Law Firm
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-primary text-xl text-gold-accent mb-4 font-semibold">
                  Văn phòng
                </h4>
                <ul className="space-y-2 text-gold">
                  <li>• Hà Nội</li>
                  <li>• TP. Hồ Chí Minh</li>
                  <li>• Bình Dương</li>
                </ul>
              </div>

              <div>
                <h4 className="font-primary text-xl text-gold-accent mb-4 font-semibold">
                  Thông tin liên hệ
                </h4>
                <div className="space-y-2 text-gold">
                  <p>
                    <span className="text-gold-accent">Điện thoại:</span> 0968 813 066
                  </p>
                  <p>
                    <span className="text-gold-accent">Email:</span> servicecenter@vigorouscg.com
                  </p>
                  <p>
                    <span className="text-gold-accent">Website:</span> www.orientallawpro.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications & Certifications Section */}
      <section id="qualifications" className="py-16 px-4 bg-navy-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-primary text-4xl font-bold text-gold mb-6">
              Bằng cấp & Chứng chỉ
            </h2>
            <div className="section-divider max-w-md mx-auto"></div>
          </div>

          <div className="space-y-8">
            {/* Education Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gold-accent"></div>

              {/* Education items */}
              <div className="relative pl-20 pb-8">
                <div className="absolute left-6 w-4 h-4 bg-gold-accent rounded-full border-4 border-navy-dark"></div>
                <div className="bg-navy-light rounded-lg p-6 hover-gold-glow">
                  <h3 className="font-primary text-xl font-bold text-gold-accent mb-2">
                    Associate Degree of Business English
                  </h3>
                  <p className="text-gold mb-2">Thu Duc College Of Technology</p>
                  <div className="text-sm text-gold-accent">Đại học</div>
                </div>
              </div>

              <div className="relative pl-20 pb-8">
                <div className="absolute left-6 w-4 h-4 bg-gold-accent rounded-full border-4 border-navy-dark"></div>
                <div className="bg-navy-light rounded-lg p-6 hover-gold-glow">
                  <h3 className="font-primary text-xl font-bold text-gold-accent mb-2">
                    IELTS Certificate
                  </h3>
                  <p className="text-gold mb-2">Chứng chỉ tiếng Anh quốc tế</p>
                  <div className="text-sm text-gold-accent">Chứng chỉ Tiếng Anh</div>
                </div>
              </div>

              <div className="relative pl-20">
                <div className="absolute left-6 w-4 h-4 bg-gold-accent rounded-full border-4 border-navy-dark"></div>
                <div className="bg-navy-light rounded-lg p-6 hover-gold-glow">
                  <h3 className="font-primary text-xl font-bold text-gold-accent mb-2">
                    Chứng chỉ chuyên môn khác
                  </h3>
                  <p className="text-gold mb-2">Các chứng chỉ pháp lý và chuyên môn</p>
                  <div className="text-sm text-gold-accent">Phát triển nghề nghiệp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests & Activities Section */}
      <section id="interests" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-primary text-4xl font-bold text-gold mb-6">
              Sở thích & Hoạt động
            </h2>
            <div className="section-divider max-w-md mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Interests */}
            <div>
              <h3 className="font-primary text-2xl font-bold text-gold-accent mb-6">
                Sở thích cá nhân
              </h3>
              <div className="space-y-4">
                <div className="bg-navy-light rounded-lg p-4 hover-gold-glow">
                  <h4 className="text-gold-accent font-semibold mb-2">Pháp lý quốc tế</h4>
                  <p className="text-gold text-sm">Nghiên cứu và theo dõi các xu hướng pháp lý quốc tế</p>
                </div>
                <div className="bg-navy-light rounded-lg p-4 hover-gold-glow">
                  <h4 className="text-gold-accent font-semibold mb-2">Dịch thuật học thuật</h4>
                  <p className="text-gold text-sm">Dịch các tài liệu pháp lý và học thuật</p>
                </div>
                <div className="bg-navy-light rounded-lg p-4 hover-gold-glow">
                  <h4 className="text-gold-accent font-semibold mb-2">Thiền định</h4>
                  <p className="text-gold text-sm">Thực hành thiền định để cân bằng cuộc sống</p>
                </div>
              </div>
            </div>

            {/* Activities */}
            <div>
              <h3 className="font-primary text-2xl font-bold text-gold-accent mb-6">
                Hoạt động nổi bật
              </h3>
              <div className="space-y-4">
                <div className="bg-navy-light rounded-lg p-4 hover-gold-glow">
                  <h4 className="text-gold-accent font-semibold mb-2">Hội thảo chuyên môn</h4>
                  <p className="text-gold text-sm">Tham gia các hội thảo về pháp luật quốc tế</p>
                </div>
                <div className="bg-navy-light rounded-lg p-4 hover-gold-glow">
                  <h4 className="text-gold-accent font-semibold mb-2">Khóa học nâng cao</h4>
                  <p className="text-gold text-sm">Liên tục học hỏi và nâng cao chuyên môn</p>
                </div>
                <div className="bg-navy-light rounded-lg p-4 hover-gold-glow">
                  <h4 className="text-gold-accent font-semibold mb-2">Bài viết chuyên môn</h4>
                  <p className="text-gold text-sm">Xuất bản các bài viết về lĩnh vực pháp lý</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Journal Section */}
      <section id="blog" className="py-16 px-4 bg-navy-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-primary text-4xl font-bold text-gold mb-6">
              Nhật ký & Blog
            </h2>
            <div className="section-divider max-w-md mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog post cards */}
            <div className="bg-navy-light rounded-lg p-6 hover-gold-glow">
              <h3 className="font-primary text-lg font-bold text-gold-accent mb-3">
                Xu hướng pháp lý quốc tế 2024
              </h3>
              <p className="text-gold text-sm mb-4">
                Phân tích các xu hướng mới trong lĩnh vực pháp lý quốc tế và tác động đến Việt Nam...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gold-accent text-xs">15/12/2024</span>
                <a href="#" className="text-gold-accent text-sm hover:underline">
                  Xem thêm →
                </a>
              </div>
            </div>

            <div className="bg-navy-light rounded-lg p-6 hover-gold-glow">
              <h3 className="font-primary text-lg font-bold text-gold-accent mb-3">
                Dịch thuật pháp lý: Thách thức và cơ hội
              </h3>
              <p className="text-gold text-sm mb-4">
                Những khó khăn và cơ hội trong lĩnh vực dịch thuật tài liệu pháp lý chuyên môn...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gold-accent text-xs">10/12/2024</span>
                <a href="#" className="text-gold-accent text-sm hover:underline">
                  Xem thêm →
                </a>
              </div>
            </div>

            <div className="bg-navy-light rounded-lg p-6 hover-gold-glow">
              <h3 className="font-primary text-lg font-bold text-gold-accent mb-3">
                Thiền định trong công việc pháp lý
              </h3>
              <p className="text-gold text-sm mb-4">
                Cách áp dụng thiền định để nâng cao hiệu quả công việc và cân bằng cuộc sống...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gold-accent text-xs">05/12/2024</span>
                <a href="#" className="text-gold-accent text-sm hover:underline">
                  Xem thêm →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gold-accent">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-primary text-xl font-bold text-gold-accent mb-4">
                Liên hệ
              </h3>
              <div className="space-y-2 text-gold">
                <p>0968 813 066</p>
                <p>servicecenter@vigorouscg.com</p>
                <p>www.orientallawpro.com</p>
              </div>
            </div>

            <div>
              <h3 className="font-primary text-xl font-bold text-gold-accent mb-4">
                Mạng xã hội
              </h3>
              <div className="space-y-2">
                <a href="#" className="block text-gold hover:text-gold-accent transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="block text-gold hover:text-gold-accent transition-colors">
                  Email
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-primary text-xl font-bold text-gold-accent mb-4">
                Nguyen Phi Huyen
              </h3>
              <p className="text-gold text-sm mb-4">
                Senior Associate | Oriental International Law Firm
              </p>
              <div className="font-chinese text-lg text-gold-accent">
                阮 非 玄
              </div>
            </div>
          </div>

          <div className="section-divider mt-8"></div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-8">
            <p className="text-gold text-sm">
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
