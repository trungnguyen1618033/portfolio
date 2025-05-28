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
      <div className="p-6 space-y-6">
        {/* Article Header */}
        <div className="border-b border-gray-200 pb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              {blog.featured && (
                <span className="px-3 py-1 bg-gold-100 text-gold-800 rounded-full text-sm font-medium flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  Nổi bật
                </span>
              )}
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${blog.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                {blog.published ? 'Đã xuất bản' : 'Bản nháp'}
              </span>
            </div>
            <div className="text-sm text-gray-500">
              {formatDate(blog.publishDate)}
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-navy-700 mb-4">
            {blog.title}
          </h1>
          
          {blog.excerpt && (
            <p className="text-lg text-gray-600 italic leading-relaxed">
              {blog.excerpt}
            </p>
          )}
        </div>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-navy-100 text-navy-700 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Article Content */}
        <div className="prose max-w-none">
          <div className="text-gray-800 leading-relaxed space-y-4">
            {blog.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Article Footer */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-navy-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">NH</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Nguyen Phi Huyen</p>
                  <p className="text-sm text-gray-500">Senior Associate</p>
                </div>
              </div>
            </div>
            
            <div className="text-sm text-gray-500">
              {blog.lastModified !== blog.publishDate && (
                <p>Cập nhật: {formatDate(blog.lastModified)}</p>
              )}
            </div>
          </div>
        </div>

        {/* Related Topics */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h5 className="font-semibold text-navy-700 mb-3 flex items-center">
            <svg className="w-5 h-5 mr-2 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Chủ đề liên quan
          </h5>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {blog.tags?.includes('international-law') && (
              <div className="text-center p-3 bg-white rounded-lg border">
                <div className="text-2xl mb-1">⚖️</div>
                <p className="text-xs text-gray-600">Luật quốc tế</p>
              </div>
            )}
            {blog.tags?.includes('technology') && (
              <div className="text-center p-3 bg-white rounded-lg border">
                <div className="text-2xl mb-1">💻</div>
                <p className="text-xs text-gray-600">Công nghệ</p>
              </div>
            )}
            {blog.tags?.includes('education') && (
              <div className="text-center p-3 bg-white rounded-lg border">
                <div className="text-2xl mb-1">🎓</div>
                <p className="text-xs text-gray-600">Giáo dục</p>
              </div>
            )}
            {blog.tags?.includes('experience') && (
              <div className="text-center p-3 bg-white rounded-lg border">
                <div className="text-2xl mb-1">💡</div>
                <p className="text-xs text-gray-600">Kinh nghiệm</p>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between pt-4 border-t border-gray-200">
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 text-gray-600 hover:text-navy-600 transition-colors duration-200">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Thích
            </button>
            <button className="flex items-center px-4 py-2 text-gray-600 hover:text-navy-600 transition-colors duration-200">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Chia sẻ
            </button>
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-medium"
          >
            Đóng
          </button>
        </div>
      </div>
    </Modal>
  );
} 