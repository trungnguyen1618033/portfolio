'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import BackToTopButton from "./ui/BackToTopButton";
import Navigation from "./ui/Navigation";
import Footer from "./ui/Footer";
import { useModalContext } from "../../lib/modal-context";
import { SupabaseDataManager } from "../../lib/supabaseDataManager";
import type { Education, Interest, Activity, Blog } from "../../lib/supabaseDataManager";

export default function PortfolioContent() {
  const { openModal } = useModalContext();
  
  // State for dynamic data
  const [education, setEducation] = useState<Education[]>([]);
  const [interests, setInterests] = useState<Interest[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  // Load data from Supabase on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        // Start timer for minimum loading time
        const minLoadTime = 4000; // 4 seconds minimum
        const startTime = Date.now();
        
        // Fetch all data in parallel
        const [educationData, interestsData, activitiesData, blogsData] = await Promise.all([
          SupabaseDataManager.getEducation(),
          SupabaseDataManager.getInterests(),
          SupabaseDataManager.getActivities(),
          SupabaseDataManager.getPublishedBlogs() // Only published blogs for public view
        ]);

        setEducation(educationData);
        setInterests(interestsData);
        setActivities(activitiesData);
        setBlogs(blogsData);
        
        // Ensure minimum loading time for smooth animation
        const elapsed = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadTime - elapsed);
        
        setTimeout(() => {
          setLoading(false);
        }, remainingTime);
        
      } catch (error) {
        console.error('Error loading data:', error);
        // Still show loading for minimum time even on error
        setTimeout(() => {
          setLoading(false);
        }, 4000);
      }
    };

    loadData();
  }, []);

  const handleEducationClick = (education: Education) => {
    openModal('education', education);
  };

  const handleInterestClick = (interest: Interest) => {
    openModal('interest', interest);
  };

  const handleBlogClick = (blog: Blog) => {
    openModal('blog', blog);
  };

  const handleActivityClick = (activity: Activity) => {
    openModal('interest', activity);  // Using interest modal for activities since they have similar structure
  };

  // Loading state
  if (loading) {
    return (
      <div className="bg-navy-primary min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-gold-accent rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-gold-accent rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 border border-gold-accent rounded-full animate-pulse"></div>
        </div>

        <div className="text-center z-10">
          {/* Book opening animation */}
          <div 
            className="relative w-80 h-60 mx-auto mb-12"
            style={{
              animation: 'bookFloat 3s ease-in-out infinite'
            }}
          >
            {/* Book spine */}
            <div 
              className="absolute left-1/2 top-0 w-3 h-full bg-gradient-to-b from-gold-accent via-gold to-gold-accent rounded-sm transform -translate-x-1/2 shadow-2xl border border-gold/20"
              style={{
                animation: 'spineGlow 2s ease-in-out infinite'
              }}
            ></div>
            
            {/* Left page */}
            <div 
              className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-gold/15 to-gold/8 rounded-l-lg border border-gold-accent/40 shadow-2xl transform-gpu origin-right"
              style={{
                animation: 'bookPageLeft 3s ease-in-out infinite',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="p-6 h-full flex flex-col justify-center items-center">
                <div className="text-center space-y-4">
                  {/* Vietnamese Name */}
                  <div className="mb-8">
                    <h4 className="font-primary text-xl text-gold-accent font-bold tracking-wide">
                      Nguyễn Phi Huyền
                    </h4>
                    <div className="w-16 h-0.5 bg-gold-accent/60 mx-auto mt-2 rounded"></div>
                  </div>
                  
                  {/* Decorative lines */}
                  <div className="space-y-3 opacity-50">
                    <div className="w-20 h-0.5 bg-gold-accent/40 rounded mx-auto animate-pulse"></div>
                    <div className="w-24 h-0.5 bg-gold-accent/30 rounded mx-auto animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-16 h-0.5 bg-gold-accent/25 rounded mx-auto animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  
                  {/* Subtitle */}
                  <div className="mt-6 text-center">
                    <p className="text-xs text-gold-accent/70 font-light tracking-widest">
                      PORTFOLIO
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right page */}
            <div 
              className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-gold/15 to-gold/8 rounded-r-lg border border-gold-accent/40 shadow-2xl transform-gpu origin-left"
              style={{
                animation: 'bookPageRight 3s ease-in-out infinite',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="p-6 h-full flex flex-col justify-center items-center">
                <div className="text-center space-y-4">
                  {/* Chinese Name */}
                  <div className="mb-8">
                    <h4 className="font-chinese text-2xl text-gold-accent font-bold tracking-wider">
                      阮斐玄
                    </h4>
                    <div className="w-16 h-0.5 bg-gold-accent/60 mx-auto mt-2 rounded"></div>
                  </div>
                  
                  {/* Decorative lines */}
                  <div className="space-y-3 opacity-50">
                    <div className="w-22 h-0.5 bg-gold-accent/40 rounded mx-auto animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-18 h-0.5 bg-gold-accent/30 rounded mx-auto animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                    <div className="w-24 h-0.5 bg-gold-accent/25 rounded mx-auto animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  
                  {/* Subtitle in Chinese */}
                  <div className="mt-6 text-center">
                    <p className="text-xs text-gold-accent/70 font-light tracking-widest font-chinese">
                      作品集
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Book pages binding */}
            <div className="absolute left-1/2 top-2 w-1 h-[calc(100%-16px)] bg-gradient-to-b from-transparent via-gold/30 to-transparent transform -translate-x-1/2 animate-pulse"></div>
            
            {/* Book shadow */}
            <div className="absolute -bottom-2 left-4 right-4 h-4 bg-gradient-to-r from-transparent via-black/20 to-transparent rounded-full blur-sm"></div>
          </div>

          {/* Text content */}
          <div 
            className="space-y-6"
            style={{
              animation: 'fadeInUp 1s ease-out 2s both'
            }}
          >
            <h3 className="font-primary text-4xl text-gold-accent font-bold">
              Đang dệt nên bức tranh sự nghiệp...
            </h3>
            <p className="text-gold text-xl font-light tracking-wide">
              Chuẩn bị nội dung chuyên nghiệp cho bạn
            </p>
            
            {/* Loading dots */}
            <div className="flex justify-center space-x-3 mt-10">
              <div className="w-3 h-3 bg-gold-accent rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-gold-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 bg-gold-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>

          {/* Progress indicator */}
          <div 
            className="mt-16 w-80 mx-auto"
            style={{
              animation: 'fadeInUp 1s ease-out 2.5s both'
            }}
          >
            {/* Animated progress bar with wave effect */}
            <div className="relative h-2 bg-navy-light rounded-full overflow-hidden shadow-inner">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-gold-accent via-gold to-gold-accent rounded-full shadow-sm"
                style={{
                  animation: 'loadingProgress 2s ease-in-out infinite'
                }}
              ></div>
              {/* Wave effect overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"
                style={{
                  animation: 'waveEffect 1.5s ease-in-out infinite'
                }}
              ></div>
            </div>
            
            {/* Spinning circles around progress */}
            <div className="relative mt-6">
              <div 
                className="absolute -top-8 left-0 w-4 h-4 border-2 border-gold-accent rounded-full"
                style={{
                  animation: 'orbitLeft 3s linear infinite'
                }}
              ></div>
              <div 
                className="absolute -top-8 right-0 w-4 h-4 border-2 border-gold-accent rounded-full"
                style={{
                  animation: 'orbitRight 3s linear infinite reverse'
                }}
              ></div>
            </div>
            
            <p className="text-gold-accent/70 text-sm mt-3 font-light tracking-widest">
              LOADING...
            </p>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold-accent/30 rounded-full"
              style={{
                animation: 'floatParticle1 4s ease-in-out infinite'
              }}
            ></div>
            <div 
              className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-gold-accent/40 rounded-full"
              style={{
                animation: 'floatParticle2 5s ease-in-out infinite'
              }}
            ></div>
            <div 
              className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-gold-accent/50 rounded-full"
              style={{
                animation: 'floatParticle3 3.5s ease-in-out infinite'
              }}
            ></div>
            <div 
              className="absolute bottom-1/3 right-1/3 w-2.5 h-2.5 bg-gold-accent/20 rounded-full"
              style={{
                animation: 'floatParticle4 4.5s ease-in-out infinite'
              }}
            ></div>
          </div>
        </div>

        {/* Custom styles */}
        <style jsx>{`
          @keyframes bookFloat {
            0%, 100% { 
              transform: translateY(0px) scale(1); 
              opacity: 0.9;
            }
            50% { 
              transform: translateY(-10px) scale(1.02); 
              opacity: 1;
            }
          }

          @keyframes bookPageLeft {
            0% { 
              transform: perspective(1000px) rotateY(-25deg);
              opacity: 0.7;
            }
            50% { 
              transform: perspective(1000px) rotateY(-5deg);
              opacity: 0.9;
            }
            100% { 
              transform: perspective(1000px) rotateY(-25deg);
              opacity: 0.7;
            }
          }

          @keyframes bookPageRight {
            0% { 
              transform: perspective(1000px) rotateY(25deg);
              opacity: 0.7;
            }
            50% { 
              transform: perspective(1000px) rotateY(5deg);
              opacity: 0.9;
            }
            100% { 
              transform: perspective(1000px) rotateY(25deg);
              opacity: 0.7;
            }
          }

          @keyframes spineGlow {
            0%, 100% { 
              box-shadow: 0 0 10px rgba(229, 184, 134, 0.5);
            }
            50% { 
              box-shadow: 0 0 25px rgba(229, 184, 134, 0.8), 0 0 35px rgba(229, 184, 134, 0.4);
            }
          }

          @keyframes loadingProgress {
            0% { 
              transform: translateX(-100%);
              opacity: 0.6;
            }
            50% { 
              transform: translateX(50%);
              opacity: 1;
            }
            100% { 
              transform: translateX(200%);
              opacity: 0.6;
            }
          }

          @keyframes waveEffect {
            0% {
              transform: translateX(-100%);
            }
            50% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          @keyframes orbitLeft {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes orbitRight {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(-360deg);
            }
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
            }
          }

          @keyframes floatParticle1 {
            0% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(10px, 10px);
            }
            100% {
              transform: translate(0, 0);
            }
          }

          @keyframes floatParticle2 {
            0% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(-10px, -10px);
            }
            100% {
              transform: translate(0, 0);
            }
          }

          @keyframes floatParticle3 {
            0% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(5px, -5px);
            }
            100% {
              transform: translate(0, 0);
            }
          }

          @keyframes floatParticle4 {
            0% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(-5px, 5px);
            }
            100% {
              transform: translate(0, 0);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="bg-navy-primary">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section - Full Screen Introduction */}
      <section id="hero" className="h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center z-10">
          <div className="mb-8">
            {/* Professional Portrait */}
            <div className="w-72 h-96 md:w-80 md:h-[420px] lg:w-96 lg:h-[480px] mx-auto mb-8 rounded-xl border-3 border-gold-accent shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 hover:scale-105 bg-navy-primary relative">
              <Image 
                src="/portrait.jpg" 
                alt="Nguyen Phi Huyen - Senior Associate at Oriental International Law Firm"
                width={384}
                height={480}
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
              {education.length > 0 ? (
                education.map((education, index) => (
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
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-gold-accent text-lg">Chưa có thông tin học vấn nào được thêm.</p>
                  <p className="text-gold text-sm mt-2">Dữ liệu sẽ được cập nhật qua admin system.</p>
                </div>
              )}
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
                {interests.length > 0 ? (
                  interests.map((interest) => (
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
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gold-accent">Chưa có sở thích nào được thêm.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Activities */}
            <div>
              <h3 className="font-primary text-3xl font-bold text-gold-accent mb-8 text-center md:text-left">
                Hoạt động nổi bật
              </h3>
              <div className="space-y-6">
                {activities.length > 0 ? (
                  activities.map((activity) => (
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
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gold-accent">Chưa có hoạt động nào được thêm.</p>
                  </div>
                )}
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
            {blogs.length > 0 ? (
              blogs.map((blog) => (
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
                      {new Date(blog.publish_date).toLocaleDateString('vi-VN')}
                    </span>
                    <span className="text-gold-accent hover:text-gold transition-colors font-semibold">
                      Xem thêm →
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gold-accent text-lg">Chưa có bài viết nào được xuất bản.</p>
                <p className="text-gold text-sm mt-2">Nội dung blog sẽ được cập nhật sớm.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTopButton />
    </div>
  );
} 