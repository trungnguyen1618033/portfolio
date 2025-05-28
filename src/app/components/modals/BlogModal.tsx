'use client';

import { BlogPost } from '../../../lib/types';
import Modal from '../ui/Modal';

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  blog: BlogPost | null;
}

export default function BlogModal({ isOpen, onClose, blog }: BlogModalProps) {
  if (!blog) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={blog.title}
      size="xl"
    >
      <div className="p-8 space-y-8 text-gold">
        {/* Blog Header */}
        <div className="text-center border-b border-gold-accent/20 pb-6">
          <div className="flex justify-center items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-accent rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-navy-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
          </div>
          
          <h3 className="font-primary text-3xl font-bold text-gold-accent mb-4">
            {blog.title}
          </h3>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm mb-4">
            <div className="flex items-center px-4 py-2 bg-navy-dark rounded-full border border-gold-accent/30">
              <svg className="w-4 h-4 mr-2 text-gold-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-gold">{formatDate(blog.publishDate)}</span>
            </div>

            {blog.featured && (
              <div className="flex items-center px-4 py-2 bg-gradient-to-r from-gold-accent to-gold rounded-full">
                <svg className="w-4 h-4 mr-2 text-navy-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <span className="text-navy-dark font-semibold">Bài nổi bật</span>
              </div>
            )}

            <div className="flex items-center px-4 py-2 bg-navy-dark rounded-full border border-gold-accent/30">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                blog.published 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
              }`}>
                {blog.published ? 'Đã xuất bản' : 'Bản nháp'}
              </span>
            </div>
          </div>
          
          {blog.excerpt && (
            <p className="text-gold leading-relaxed text-lg italic">
              {blog.excerpt}
            </p>
          )}
        </div>

        {/* Blog Content */}
        <div className="bg-navy-dark rounded-xl p-6 border border-gold-accent/20 hover-gold-glow">
          <h4 className="font-primary text-xl font-semibold text-gold-accent mb-6 flex items-center">
            <svg className="w-6 h-6 mr-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Nội dung
          </h4>
          <div className="prose prose-lg max-w-none">
            <div className="text-gold leading-relaxed space-y-4">
              {blog.content.split('\n').map((paragraph, index) => {
                if (paragraph.trim() === '') return null;
                
                // Handle headers
                if (paragraph.startsWith('#')) {
                  const level = paragraph.match(/^#+/)?.[0].length || 1;
                  const text = paragraph.replace(/^#+\s*/, '');
                  const headingClasses = {
                    1: 'text-2xl font-bold text-gold-accent mt-6 mb-4',
                    2: 'text-xl font-semibold text-gold-accent mt-5 mb-3',
                    3: 'text-lg font-medium text-gold-accent mt-4 mb-2',
                  };
                  const className = headingClasses[level as keyof typeof headingClasses] || headingClasses[3];
                  return <div key={index} className={className}>{text}</div>;
                }
                
                // Handle list items
                if (paragraph.match(/^\d+\./)) {
                  return (
                    <div key={index} className="flex items-start mb-2">
                      <span className="w-6 h-6 bg-gold-accent text-navy-dark rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                        {paragraph.match(/^(\d+)\./)?.[1]}
                      </span>
                      <span className="text-gold">{paragraph.replace(/^\d+\.\s*/, '')}</span>
                    </div>
                  );
                }
                
                return (
                  <p key={index} className="text-gold leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="bg-navy-dark rounded-xl p-6 border border-gold-accent/20 hover-gold-glow">
            <h4 className="font-primary text-lg font-semibold text-gold-accent mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              Từ khóa
            </h4>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gold-accent/20 text-gold-accent border border-gold-accent/30 rounded-full text-sm font-medium hover:bg-gold-accent hover:text-navy-dark transition-all duration-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Blog Metadata */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Author Info */}
          <div className="bg-navy-dark border border-gold-accent/30 rounded-xl p-6 hover-gold-glow">
            <h5 className="font-primary font-bold text-gold-accent mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Tác giả
            </h5>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-accent rounded-full flex items-center justify-center">
                <span className="text-navy-dark font-bold">NH</span>
              </div>
              <div>
                <p className="font-medium text-gold">Nguyen Phi Huyen</p>
                <p className="text-sm text-gold-accent">Senior Associate</p>
                <p className="text-xs text-gold-accent/70">Oriental International Law Firm</p>
              </div>
            </div>
          </div>

          {/* Publication Info */}
          <div className="bg-navy-dark border border-gold-accent/30 rounded-xl p-6 hover-gold-glow">
            <h5 className="font-primary font-bold text-gold-accent mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Thông tin xuất bản
            </h5>
            <div className="space-y-2 text-gold text-sm">
              <div className="flex justify-between">
                <span className="text-gold-accent">Xuất bản:</span>
                <span>{formatDate(blog.publishDate)}</span>
              </div>
              {blog.lastModified !== blog.publishDate && (
                <div className="flex justify-between">
                  <span className="text-gold-accent">Cập nhật:</span>
                  <span>{formatDate(blog.lastModified)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gold-accent">Số từ:</span>
                <span>{blog.content.split(' ').length.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 pt-6 border-t border-gold-accent/20">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-navy-dark border border-gold-accent/30 rounded-lg text-gold hover:bg-gold-accent hover:text-navy-dark transition-all duration-300 font-medium hover:scale-105"
          >
            Đóng
          </button>
        </div>
      </div>
    </Modal>
  );
} 