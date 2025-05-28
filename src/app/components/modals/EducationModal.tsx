'use client';

import { Education } from '../../../lib/types';
import Modal from '../ui/Modal';

interface EducationModalProps {
  isOpen: boolean;
  onClose: () => void;
  education: Education | null;
}

export default function EducationModal({ isOpen, onClose, education }: EducationModalProps) {
  if (!education) return null;

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={education.degree}
      size="lg"
    >
      <div className="p-8 space-y-8 text-gold">
        {/* Institution Header */}
        <div className="text-center border-b border-gold-accent/20 pb-6">
          <h3 className="font-primary text-3xl font-bold text-gold-accent mb-3">
            {education.institution}
          </h3>
          <div className="inline-flex items-center px-4 py-2 bg-navy-dark rounded-full border border-gold-accent/30">
            <svg className="w-5 h-5 mr-2 text-gold-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-gold font-semibold">{education.year}</span>
          </div>
        </div>

        {/* Degree Information */}
        <div className="bg-navy-dark rounded-xl p-6 border border-gold-accent/20 hover-gold-glow">
          <h4 className="font-primary text-xl font-semibold text-gold-accent mb-4 flex items-center">
            <svg className="w-6 h-6 mr-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            Chi tiết bằng cấp
          </h4>
          <p className="text-gold leading-relaxed text-lg">
            {education.description || 'Thông tin chi tiết về bằng cấp này sẽ được cập nhật sớm.'}
          </p>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Academic Achievements */}
          <div className="bg-navy-dark border border-gold-accent/30 rounded-xl p-6 hover-gold-glow">
            <h5 className="font-primary font-bold text-gold-accent mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Thành tích học tập
            </h5>
            <ul className="space-y-3 text-gold">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-accent rounded-full mr-3"></span>
                Hoàn thành chương trình đào tạo
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-accent rounded-full mr-3"></span>
                Tích lũy kiến thức chuyên môn
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-accent rounded-full mr-3"></span>
                Phát triển kỹ năng thực tế
              </li>
            </ul>
          </div>

          {/* Skills Gained */}
          <div className="bg-navy-dark border border-gold-accent/30 rounded-xl p-6 hover-gold-glow">
            <h5 className="font-primary font-bold text-gold-accent mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Kỹ năng đạt được
            </h5>
            <div className="flex flex-wrap gap-2">
              {education.institution.includes('Luật') && (
                <>
                  <span className="px-3 py-1 bg-gold-accent/20 text-gold-accent border border-gold-accent/30 rounded-full text-sm font-medium">Pháp lý</span>
                  <span className="px-3 py-1 bg-gold-accent/20 text-gold-accent border border-gold-accent/30 rounded-full text-sm font-medium">Nghiên cứu</span>
                  <span className="px-3 py-1 bg-gold-accent/20 text-gold-accent border border-gold-accent/30 rounded-full text-sm font-medium">Phân tích</span>
                </>
              )}
              {education.institution.includes('IELTS') && (
                <>
                  <span className="px-3 py-1 bg-gold-accent/20 text-gold-accent border border-gold-accent/30 rounded-full text-sm font-medium">Tiếng Anh</span>
                  <span className="px-3 py-1 bg-gold-accent/20 text-gold-accent border border-gold-accent/30 rounded-full text-sm font-medium">Giao tiếp</span>
                  <span className="px-3 py-1 bg-gold-accent/20 text-gold-accent border border-gold-accent/30 rounded-full text-sm font-medium">Học thuật</span>
                </>
              )}
              {education.institution.includes('Technology') && (
                <>
                  <span className="px-3 py-1 bg-gold-accent/20 text-gold-accent border border-gold-accent/30 rounded-full text-sm font-medium">Business</span>
                  <span className="px-3 py-1 bg-gold-accent/20 text-gold-accent border border-gold-accent/30 rounded-full text-sm font-medium">English</span>
                  <span className="px-3 py-1 bg-gold-accent/20 text-gold-accent border border-gold-accent/30 rounded-full text-sm font-medium">Technology</span>
                </>
              )}
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