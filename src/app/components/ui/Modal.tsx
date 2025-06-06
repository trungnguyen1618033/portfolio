'use client';

import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showCloseButton?: boolean;
}

export default function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = 'md', 
  showCloseButton = true 
}: ModalProps) {
  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    full: 'max-w-7xl'
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Transparent Backdrop with blur */}
      <div 
        className="fixed inset-0 bg-navy-dark/60 backdrop-blur-md transition-all duration-500 ease-out"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div 
          className={`relative bg-navy-light border-2 border-gold-accent/30 rounded-2xl shadow-2xl transform transition-all duration-500 ease-out w-full ${sizeClasses[size]} max-h-[90vh] overflow-hidden hover-gold-glow`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between p-6 border-b border-gold-accent/20 bg-gradient-to-r from-navy-dark to-navy-primary relative">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-accent via-gold to-gold-accent"></div>
              
              {title && (
                <h2 className="font-primary text-2xl font-bold text-gold">
                  {title}
                </h2>
              )}
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gold-accent hover:text-navy-dark rounded-full transition-all duration-300 text-gold-accent border border-gold-accent/30 hover:border-gold-accent hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          )}

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-100px)] bg-navy-light">
            {children}
          </div>

          {/* Bottom decorative border */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold-accent via-gold to-gold-accent opacity-50"></div>
        </div>
      </div>
    </div>
  );
} 