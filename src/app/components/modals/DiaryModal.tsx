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
      case 'happy': return '😊';
      case 'excited': return '🤩';
      case 'neutral': return '😐';
      case 'thoughtful': return '🤔';
      case 'challenging': return '😤';
      default: return '😊';
    }
  };

  const getMoodGradient = (mood: string) => {
    switch (mood) {
      case 'happy': return 'from-gold to-gold-accent';
      case 'excited': return 'from-gold-accent to-gold';
      case 'neutral': return 'from-navy-light to-gold-accent';
      case 'thoughtful': return 'from-gold to-navy-light';
      case 'challenging': return 'from-navy-light to-gold';
      default: return 'from-gold to-gold-accent';
    }
  };

  const getMoodName = (mood: string) => {
    switch (mood) {
      case 'happy': return 'Vui vẻ';
      case 'excited': return 'Hào hứng';
      case 'neutral': return 'Bình thường';
      case 'thoughtful': return 'Suy tư';
      case 'challenging': return 'Thử thách';
      default: return 'Tâm trạng';
    }
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={diary.title}
      size="lg"
    >
      <div className="p-8 space-y-8 text-gold">
        {/* Diary Header */}
        <div className="text-center border-b border-gold-accent/20 pb-6">
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br ${getMoodGradient(diary.mood || 'happy')} mb-4 shadow-lg`}>
            <span className="text-4xl text-navy-dark">{getMoodIcon(diary.mood || 'happy')}</span>
          </div>
          
          <h3 className="font-primary text-3xl font-bold text-gold-accent mb-3">
            {diary.title}
          </h3>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center px-4 py-2 bg-navy-dark rounded-full border border-gold-accent/30">
              <svg className="w-4 h-4 mr-2 text-gold-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-gold">{formatDate(diary.date)}</span>
            </div>

            <div className="flex items-center px-4 py-2 bg-navy-dark rounded-full border border-gold-accent/30">
              <span className="text-2xl mr-2">{getMoodIcon(diary.mood || 'happy')}</span>
              <span className="text-gold">{getMoodName(diary.mood || 'happy')}</span>
            </div>

            {diary.isPrivate && (
              <div className="flex items-center px-4 py-2 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-full">
                <svg className="w-4 h-4 mr-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-red-400 font-semibold">Riêng tư</span>
              </div>
            )}
          </div>
        </div>

        {/* Diary Content */}
        <div className="bg-navy-dark rounded-xl p-6 border border-gold-accent/20 hover-gold-glow">
          <h4 className="font-primary text-xl font-semibold text-gold-accent mb-6 flex items-center">
            <svg className="w-6 h-6 mr-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Nội dung nhật ký
          </h4>
          <div className="text-gold leading-relaxed space-y-4">
            {diary.content.split('\n').map((paragraph, index) => {
              if (paragraph.trim() === '') return null;
              return (
                <p key={index} className="text-gold leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>

        {/* Tags */}
        {diary.tags && diary.tags.length > 0 && (
          <div className="bg-navy-dark rounded-xl p-6 border border-gold-accent/20 hover-gold-glow">
            <h4 className="font-primary text-lg font-semibold text-gold-accent mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              Thẻ gắn
            </h4>
            <div className="flex flex-wrap gap-2">
              {diary.tags.map((tag, index) => (
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

        {/* Reflection Sections */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Daily Highlights */}
          <div className="bg-navy-dark border border-gold-accent/30 rounded-xl p-6 hover-gold-glow">
            <h5 className="font-primary font-bold text-gold-accent mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Điểm nổi bật
            </h5>
            <ul className="space-y-2 text-gold text-sm">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-accent rounded-full mr-3"></span>
                Khoảnh khắc đáng nhớ trong ngày
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-accent rounded-full mr-3"></span>
                Thành tựu và tiến bộ cá nhân
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-accent rounded-full mr-3"></span>
                Cảm xúc và suy nghĩ sâu sắc
              </li>
            </ul>
          </div>

          {/* Lessons Learned */}
          <div className="bg-navy-dark border border-gold-accent/30 rounded-xl p-6 hover-gold-glow">
            <h5 className="font-primary font-bold text-gold-accent mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Bài học rút ra
            </h5>
            <ul className="space-y-2 text-gold text-sm">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-accent rounded-full mr-3"></span>
                Kinh nghiệm quý báu từ công việc
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-accent rounded-full mr-3"></span>
                Hiểu biết mới về bản thân
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-accent rounded-full mr-3"></span>
                Định hướng cho tương lai
              </li>
            </ul>
          </div>
        </div>

        {/* Context Information */}
        <div className="bg-navy-dark rounded-xl p-6 border border-gold-accent/20 hover-gold-glow">
          <h4 className="font-primary text-lg font-semibold text-gold-accent mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Thông tin ngữ cảnh
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-gold-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">📍</span>
              </div>
              <p className="text-xs text-gold-accent">Vị trí</p>
              <p className="text-sm font-medium text-gold">Hà Nội</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gold-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">🌤️</span>
              </div>
              <p className="text-xs text-gold-accent">Thời tiết</p>
              <p className="text-sm font-medium text-gold">Dễ chịu</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gold-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">⏰</span>
              </div>
              <p className="text-xs text-gold-accent">Thời gian</p>
              <p className="text-sm font-medium text-gold">Tối</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gold-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">{getMoodIcon(diary.mood || 'happy')}</span>
              </div>
              <p className="text-xs text-gold-accent">Tâm trạng</p>
              <p className="text-sm font-medium text-gold">{getMoodName(diary.mood || 'happy')}</p>
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