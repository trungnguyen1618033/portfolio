"use client";

export default function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button 
      onClick={scrollToTop}
      className="mt-4 md:mt-0 bg-navy-light border border-gold-accent text-gold-accent px-4 py-2 rounded hover:bg-gold-accent hover:text-navy-dark transition-colors"
    >
      Về đầu trang ↑
    </button>
  );
} 