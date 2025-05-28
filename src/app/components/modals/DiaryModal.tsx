'use client';

import { DiaryEntry } from '../../../lib/types';
import Modal from '../ui/Modal';

interface DiaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  diary: DiaryEntry | null;
}

export default function DiaryModal({ isOpen, onClose, diary }: DiaryModalProps) {
  if (!diary) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getMoodIcon = (mood: string) => {
    switch (mood) {
      case 'happy':
        return '😊';
      case 'excited':
        return '🤩';
      case 'calm':
        return '😌';
      case 'thoughtful':
        return '🤔';
      case 'motivated':
        return '💪';
      case 'grateful':
        return '🙏';
      case 'nostalgic':
        return '😌';
      case 'hopeful':
        return '🌟';
      default:
        return '😊';
    }
  };

  const getMoodColor = (mood: string) => {
    switch (mood) {
      case 'happy':
        return 'from-yellow-50 to-orange-50 border-yellow-200';
      case 'excited':
        return 'from-pink-50 to-red-50 border-pink-200';
      case 'calm':
        return 'from-blue-50 to-indigo-50 border-blue-200';
      case 'thoughtful':
        return 'from-purple-50 to-indigo-50 border-purple-200';
      case 'motivated':
        return 'from-green-50 to-emerald-50 border-green-200';
      case 'grateful':
        return 'from-teal-50 to-cyan-50 border-teal-200';
      case 'nostalgic':
        return 'from-gray-50 to-slate-50 border-gray-200';
      case 'hopeful':
        return 'from-amber-50 to-yellow-50 border-amber-200';
      default:
        return 'from-gray-50 to-slate-50 border-gray-200';
    }
  };

  const getMoodName = (mood: string) => {
    switch (mood) {
      case 'happy': return 'Vui vẻ';
      case 'excited': return 'Hào hứng';
      case 'calm': return 'Bình tĩnh';
      case 'thoughtful': return 'Suy tư';
      case 'motivated': return 'Động lực';
      case 'grateful': return 'Biết ơn';
      case 'nostalgic': return 'Hoài niệm';
      case 'hopeful': return 'Hy vọng';
      default: return 'Tâm trạng';
    }
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={`Nhật ký - ${formatDate(diary.date)}`}
      size="lg"
    >
      <div className="p-6 space-y-6">
        {/* Date and Mood Header */}
        <div className={`bg-gradient-to-r ${getMoodColor(diary.mood || 'happy')} border rounded-lg p-6`}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="text-4xl">
                {getMoodIcon(diary.mood || 'happy')}
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-700">
                  {diary.title}
                </h3>
                <p className="text-navy-600">
                  {getMoodName(diary.mood || 'happy')} • {formatDate(diary.date)}
                </p>
              </div>
            </div>
            
            {diary.isPrivate && (
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Riêng tư
              </span>
            )}
          </div>
        </div>

        {/* Tags */}
        {diary.tags && diary.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {diary.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-navy-100 text-navy-700 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Diary Content */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="text-gray-800 leading-relaxed space-y-4">
            {diary.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Reflection Questions */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-navy-50 to-gold-50 rounded-lg p-4">
            <h5 className="font-semibold text-navy-700 mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Điều tích cực hôm nay
            </h5>
            <p className="text-sm text-gray-600">
              Những khoảnh khắc đẹp và trải nghiệm tốt đã tạo nên một ngày ý nghĩa.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
            <h5 className="font-semibold text-navy-700 mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Bài học rút ra
            </h5>
            <p className="text-sm text-gray-600">
              Những hiểu biết mới và kinh nghiệm quý báu cho những ngày tiếp theo.
            </p>
          </div>
        </div>

        {/* Weather & Location */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-1">📍</div>
              <p className="text-xs text-gray-600">Vị trí</p>
              <p className="text-sm font-medium">Hà Nội</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-1">🌤️</div>
              <p className="text-xs text-gray-600">Thời tiết</p>
              <p className="text-sm font-medium">Dễ chịu</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-1">⏰</div>
              <p className="text-xs text-gray-600">Thời gian</p>
              <p className="text-sm font-medium">Tối</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-1">💭</div>
              <p className="text-xs text-gray-600">Trạng thái</p>
              <p className="text-sm font-medium">{getMoodName(diary.mood || 'happy')}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between pt-4 border-t border-gray-200">
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 text-gray-600 hover:text-navy-600 transition-colors duration-200">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Lưu ý
            </button>
            <button className="flex items-center px-4 py-2 text-gray-600 hover:text-navy-600 transition-colors duration-200">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Chỉnh sửa
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