'use client';

import { Interest } from '../../../lib/types';
import Modal from '../ui/Modal';

interface InterestModalProps {
  isOpen: boolean;
  onClose: () => void;
  interest: Interest | null;
}

const getCategoryIcon = (category: string, title: string) => {
  // Based on category and content, return appropriate icon
  if (category === 'skill') {
    if (title.includes('Pháp lý') || title.includes('Legal')) return '⚖️';
    if (title.includes('Dịch thuật') || title.includes('Translation')) return '🔤';
    if (title.includes('Technology') || title.includes('Công nghệ')) return '💻';
    if (title.includes('Language') || title.includes('Ngôn ngữ')) return '🗣️';
    return '⚡';
  } else if (category === 'hobby') {
    if (title.includes('Thiền') || title.includes('Meditation')) return '🧘';
    if (title.includes('Đọc') || title.includes('Reading')) return '📚';
    if (title.includes('Music') || title.includes('Âm nhạc')) return '🎵';
    if (title.includes('Art') || title.includes('Nghệ thuật')) return '🎨';
    if (title.includes('Travel') || title.includes('Du lịch')) return '✈️';
    return '❤️';
  } else if (category === 'activity') {
    if (title.includes('Sport') || title.includes('Thể thao')) return '🏃';
    if (title.includes('Exercise') || title.includes('Tập luyện')) return '💪';
    return '🌟';
  }
  return '⭐';
};

const getCategoryGradient = (category: string) => {
  switch (category) {
    case 'skill': return 'from-gold to-gold-accent';
    case 'hobby': return 'from-gold-accent to-gold';
    case 'activity': return 'from-navy-light to-gold-accent';
    default: return 'from-navy-light to-gold-accent';
  }
};

const getCategoryDisplayName = (category: string) => {
  switch (category) {
    case 'skill': return 'Kỹ năng chuyên môn';
    case 'hobby': return 'Sở thích cá nhân';
    case 'activity': return 'Hoạt động';
    default: return 'Khác';
  }
};

export default function InterestModal({ isOpen, onClose, interest }: InterestModalProps) {
  if (!interest) return null;

  const category = interest.category || 'other';
  const icon = getCategoryIcon(category, interest.title);
  const gradientColor = getCategoryGradient(category);
  const categoryName = getCategoryDisplayName(category);

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={interest.title}
      size="lg"
    >
      <div className="p-8 space-y-8 text-gold">
        {/* Interest Header */}
        <div className="text-center border-b border-gold-accent/20 pb-6">
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br ${gradientColor} mb-4 shadow-lg`}>
            <span className="text-4xl text-navy-dark">{icon}</span>
          </div>
          <h3 className="font-primary text-3xl font-bold text-gold-accent mb-3">
            {interest.title}
          </h3>
          <div className="inline-flex items-center px-4 py-2 bg-navy-dark rounded-full border border-gold-accent/30">
            <span className="text-gold-accent font-semibold">
              {categoryName}
            </span>
          </div>
        </div>

        {/* Interest Description */}
        <div className="bg-navy-dark rounded-xl p-6 border border-gold-accent/20 hover-gold-glow">
          <h4 className="font-primary text-xl font-semibold text-gold-accent mb-4 flex items-center">
            <svg className="w-6 h-6 mr-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Mô tả chi tiết
          </h4>
          <p className="text-gold leading-relaxed text-lg">
            {interest.description}
          </p>
        </div>

        {/* Interest Details */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Benefits */}
          <div className="bg-navy-dark border border-gold-accent/30 rounded-xl p-6 hover-gold-glow">
            <h5 className="font-primary font-bold text-gold-accent mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Lợi ích & Ứng dụng
            </h5>
            <ul className="space-y-3 text-gold">
              {category === 'skill' && (
                <>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gold-accent rounded-full mr-3"></span>
                    Phát triển chuyên môn
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gold-accent rounded-full mr-3"></span>
                    Nâng cao hiệu quả công việc
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gold-accent rounded-full mr-3"></span>
                    Tăng cơ hội nghề nghiệp
                  </li>
                </>
              )}
              {category === 'hobby' && (
                <>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gold-accent rounded-full mr-3"></span>
                    Giảm stress và thư giãn
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gold-accent rounded-full mr-3"></span>
                    Cân bằng cuộc sống
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gold-accent rounded-full mr-3"></span>
                    Phát triển bản thân
                  </li>
                </>
              )}
              {category === 'activity' && (
                <>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gold-accent rounded-full mr-3"></span>
                    Duy trì sức khỏe
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gold-accent rounded-full mr-3"></span>
                    Tăng cường thể lực
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gold-accent rounded-full mr-3"></span>
                    Kết nối cộng đồng
                  </li>
                </>
              )}
              {category === 'other' && (
                <>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gold-accent rounded-full mr-3"></span>
                    Mở rộng kiến thức
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gold-accent rounded-full mr-3"></span>
                    Phát triển kỹ năng mới
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gold-accent rounded-full mr-3"></span>
                    Tăng cường sự sáng tạo
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Related Skills */}
          <div className="bg-navy-dark border border-gold-accent/30 rounded-xl p-6 hover-gold-glow">
            <h5 className="font-primary font-bold text-gold-accent mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Kỹ năng liên quan
            </h5>
            <div className="flex flex-wrap gap-2">
              {category === 'skill' && interest.title.includes('Pháp lý') && (
                <>
                  <span className="px-3 py-1 bg-gold-accent/20 text-gold-accent border border-gold-accent/30 rounded-full text-sm font-medium">Phân tích</span>
                  <span className="px-3 py-1 bg-gold-accent/20 text-gold-accent border border-gold-accent/30 rounded-full text-sm font-medium">Nghiên cứu</span>
                  <span className="px-3 py-1 bg-gold-accent/20 text-gold-accent border border-gold-accent/30 rounded-full text-sm font-medium">Tư vấn</span>
                  <span className="px-3 py-1 bg-gold-accent/20 text-gold-accent border border-gold-accent/30 rounded-full text-sm font-medium">Đàm phán</span>
                </>
              )}
              {category === 'skill' && interest.title.includes('Dịch thuật') && (
                <>
                  <span className="px-3 py-1 bg-gold-accent/20 text-gold-accent border border-gold-accent/30 rounded-full text-sm font-medium">Ngôn ngữ</span>
                  <span className="px-3 py-1 bg-gold-accent/20 text-gold-accent border border-gold-accent/30 rounded-full text-sm font-medium">Chuyên môn</span>
                  <span className="px-3 py-1 bg-gold-accent/20 text-gold-accent border border-gold-accent/30 rounded-full text-sm font-medium">Chính xác</span>
                  <span className="px-3 py-1 bg-gold-accent/20 text-gold-accent border border-gold-accent/30 rounded-full text-sm font-medium">Văn hóa</span>
                </>
              )}
              {category === 'hobby' && interest.title.includes('Thiền') && (
                <>
                  <span className="px-3 py-1 bg-gold-accent/20 text-gold-accent border border-gold-accent/30 rounded-full text-sm font-medium">Mindfulness</span>
                  <span className="px-3 py-1 bg-gold-accent/20 text-gold-accent border border-gold-accent/30 rounded-full text-sm font-medium">Tập trung</span>
                  <span className="px-3 py-1 bg-gold-accent/20 text-gold-accent border border-gold-accent/30 rounded-full text-sm font-medium">Cân bằng</span>
                  <span className="px-3 py-1 bg-gold-accent/20 text-gold-accent border border-gold-accent/30 rounded-full text-sm font-medium">Thư giãn</span>
                </>
              )}
              {!interest.title.includes('Pháp lý') && !interest.title.includes('Dịch thuật') && !interest.title.includes('Thiền') && (
                <>
                  <span className="px-3 py-1 bg-gold-accent/20 text-gold-accent border border-gold-accent/30 rounded-full text-sm font-medium">Sáng tạo</span>
                  <span className="px-3 py-1 bg-gold-accent/20 text-gold-accent border border-gold-accent/30 rounded-full text-sm font-medium">Kiên nhẫn</span>
                  <span className="px-3 py-1 bg-gold-accent/20 text-gold-accent border border-gold-accent/30 rounded-full text-sm font-medium">Tư duy</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Personal Impact */}
        <div className="bg-navy-dark rounded-xl p-6 border border-gold-accent/20 hover-gold-glow">
          <h4 className="font-primary text-xl font-semibold text-gold-accent mb-4 flex items-center">
            <svg className="w-6 h-6 mr-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Ý nghĩa cá nhân
          </h4>
          <p className="text-gold leading-relaxed">
            {category === 'skill' 
              ? 'Kỹ năng này giúp tôi phát triển chuyên môn và nâng cao chất lượng công việc trong lĩnh vực pháp lý quốc tế.'
              : category === 'hobby'
              ? 'Sở thích này mang lại cho tôi sự cân bằng trong cuộc sống và giúp tôi duy trì năng lượng tích cực cho công việc.'
              : category === 'activity'
              ? 'Hoạt động này giúp tôi duy trì sức khỏe và tạo ra sự cân bằng giữa công việc và đời sống cá nhân.'
              : 'Điều này góp phần làm phong phú thêm kinh nghiệm sống và phát triển toàn diện bản thân.'
            }
          </p>
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