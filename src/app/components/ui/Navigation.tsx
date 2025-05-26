'use client';

import { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Giới thiệu' },
    { id: 'company', label: 'Công ty' },
    { id: 'qualifications', label: 'Bằng cấp' },
    { id: 'interests', label: 'Sở thích' },
    { id: 'blog', label: 'Blog' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-navy-light/80 backdrop-blur-sm rounded-full p-4 border border-gold-accent/30">
        <ul className="space-y-4">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`w-3 h-3 rounded-full transition-all duration-300 block ${
                  activeSection === section.id
                    ? 'bg-gold-accent scale-125'
                    : 'bg-gold-accent/40 hover:bg-gold-accent/70'
                }`}
                title={section.label}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation; 