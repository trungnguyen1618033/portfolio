'use client';

import { Interest } from '../../../lib/types';
import Modal from '../ui/Modal';

interface InterestModalProps {
  isOpen: boolean;
  onClose: () => void;
  interest: Interest | null;
}

export default function InterestModal({ isOpen, onClose, interest }: InterestModalProps) {
  if (!interest) return null;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'hobby':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      case 'activity':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'skill':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        );
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'hobby': return 'Sở thích';
      case 'activity': return 'Hoạt động';
      case 'skill': return 'Kỹ năng';
      default: return 'Khác';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'hobby': return 'from-red-50 to-pink-50 border-red-200';
      case 'activity': return 'from-blue-50 to-indigo-50 border-blue-200';
      case 'skill': return 'from-green-50 to-emerald-50 border-green-200';
      default: return 'from-gray-50 to-slate-50 border-gray-200';
    }
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={interest.title}
      size="lg"
    >
      <div className="p-6 space-y-6">
        {/* Header with Category */}
        <div className={`bg-gradient-to-r ${getCategoryColor(interest.category)} border rounded-lg p-6`}>
          <div className="flex items-center mb-4">
            <div className="text-navy-600 mr-3">
              {getCategoryIcon(interest.category)}
            </div>
            <span className="px-3 py-1 bg-navy-100 text-navy-700 rounded-full text-sm font-medium">
              {getCategoryName(interest.category)}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-navy-700 mb-2">
            {interest.title}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {interest.description}
          </p>
        </div>

        {/* Detailed Content */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Experience Level */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h5 className="font-semibold text-navy-700 mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Mức độ kinh nghiệm
            </h5>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Beginner</span>
                <span>Expert</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-gold-400 to-gold-600 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
          </div>

          {/* Time Investment */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h5 className="font-semibold text-navy-700 mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Thời gian đầu tư
            </h5>
            <p className="text-gray-600 text-sm">
              Thường xuyên thực hành và phát triển kỹ năng này trong thời gian rảnh rỗi.
            </p>
          </div>
        </div>

        {/* Related Activities */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h5 className="font-semibold text-navy-700 mb-3 flex items-center">
            <svg className="w-5 h-5 mr-2 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Hoạt động liên quan
          </h5>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {interest.title.includes('Pháp lý') && (
              <>
                <div className="text-center p-3 bg-white rounded-lg border">
                  <div className="text-2xl mb-1">📚</div>
                  <p className="text-xs text-gray-600">Nghiên cứu</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border">
                  <div className="text-2xl mb-1">🏛️</div>
                  <p className="text-xs text-gray-600">Hội thảo</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border">
                  <div className="text-2xl mb-1">✍️</div>
                  <p className="text-xs text-gray-600">Viết bài</p>
                </div>
              </>
            )}
            {interest.title.includes('Dịch thuật') && (
              <>
                <div className="text-center p-3 bg-white rounded-lg border">
                  <div className="text-2xl mb-1">🔤</div>
                  <p className="text-xs text-gray-600">Dịch thuật</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border">
                  <div className="text-2xl mb-1">📖</div>
                  <p className="text-xs text-gray-600">Đọc hiểu</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border">
                  <div className="text-2xl mb-1">🗣️</div>
                  <p className="text-xs text-gray-600">Giao tiếp</p>
                </div>
              </>
            )}
            {interest.title.includes('Thiền') && (
              <>
                <div className="text-center p-3 bg-white rounded-lg border">
                  <div className="text-2xl mb-1">🧘</div>
                  <p className="text-xs text-gray-600">Thực hành</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border">
                  <div className="text-2xl mb-1">🌅</div>
                  <p className="text-xs text-gray-600">Buổi sáng</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border">
                  <div className="text-2xl mb-1">☮️</div>
                  <p className="text-xs text-gray-600">Tĩnh tâm</p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
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