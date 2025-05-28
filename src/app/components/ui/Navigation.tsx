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
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Get all sections with their positions
      const sectionPositions = sections.map(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const top = rect.top + scrollY;
          const height = rect.height;
          return {
            id: section.id,
            top,
            bottom: top + height,
            center: top + height / 2
          };
        }
        return null;
      }).filter(Boolean);

      // Find which section is currently most visible
      let currentSection = 'hero';
      
      // Check from top to bottom
      for (const section of sectionPositions) {
        if (section && scrollY >= section.top - windowHeight / 3) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    // Add scroll listener with throttling
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    
    // Call once to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-50">
      <div className="bg-navy-light/95 backdrop-blur-md rounded-full p-3 md:p-4 border-2 border-gold-accent/60 shadow-2xl">
        <ul className="space-y-3">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`w-5 h-5 md:w-4 md:h-4 rounded-full transition-all duration-500 block relative group nav-dot ${
                  activeSection === section.id
                    ? 'bg-gold scale-125 shadow-xl shadow-gold/50 ring-2 ring-gold/50'
                    : 'bg-gold-accent/60 hover:bg-gold-accent hover:scale-110'
                }`}
                title={section.label}
                aria-label={section.label}
              >
                {/* Tooltip */}
                <span className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-navy-dark text-gold text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-lg border border-gold-accent/30">
                  {section.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation; 