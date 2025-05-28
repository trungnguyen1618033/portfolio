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
      <div className="p-6 space-y-6">
        {/* Institution Header */}
        <div className="text-center border-b border-gray-200 pb-6">
          <h3 className="text-2xl font-bold text-navy-700 mb-2">
            {education.institution}
          </h3>
          <p className="text-lg text-gray-600">
            {education.year}
          </p>
        </div>

        {/* Degree Information */}
        <div className="bg-gradient-to-r from-navy-50 to-gold-50 rounded-lg p-6">
          <h4 className="text-xl font-semibold text-navy-700 mb-3 flex items-center">
            <svg className="w-6 h-6 mr-2 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            Chi tiết bằng cấp
          </h4>
          <p className="text-gray-700 leading-relaxed">
            {education.description || 'Thông tin chi tiết về bằng cấp này sẽ được cập nhật sớm.'}
          </p>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Academic Achievements */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h5 className="font-semibold text-navy-700 mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Thành tích
            </h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-500 rounded-full mr-2"></span>
                Hoàn thành chương trình đào tạo
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-500 rounded-full mr-2"></span>
                Tích lũy kiến thức chuyên môn
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gold-500 rounded-full mr-2"></span>
                Phát triển kỹ năng thực tế
              </li>
            </ul>
          </div>

          {/* Skills Gained */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h5 className="font-semibold text-navy-700 mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Kỹ năng đạt được
            </h5>
            <div className="flex flex-wrap gap-2">
              {education.institution.includes('Luật') && (
                <>
                  <span className="px-3 py-1 bg-navy-100 text-navy-700 rounded-full text-xs font-medium">Pháp lý</span>
                  <span className="px-3 py-1 bg-navy-100 text-navy-700 rounded-full text-xs font-medium">Nghiên cứu</span>
                  <span className="px-3 py-1 bg-navy-100 text-navy-700 rounded-full text-xs font-medium">Phân tích</span>
                </>
              )}
              {education.institution.includes('IELTS') && (
                <>
                  <span className="px-3 py-1 bg-navy-100 text-navy-700 rounded-full text-xs font-medium">Tiếng Anh</span>
                  <span className="px-3 py-1 bg-navy-100 text-navy-700 rounded-full text-xs font-medium">Giao tiếp</span>
                  <span className="px-3 py-1 bg-navy-100 text-navy-700 rounded-full text-xs font-medium">Học thuật</span>
                </>
              )}
              {education.institution.includes('Technology') && (
                <>
                  <span className="px-3 py-1 bg-navy-100 text-navy-700 rounded-full text-xs font-medium">Business</span>
                  <span className="px-3 py-1 bg-navy-100 text-navy-700 rounded-full text-xs font-medium">English</span>
                  <span className="px-3 py-1 bg-navy-100 text-navy-700 rounded-full text-xs font-medium">Technology</span>
                </>
              )}
            </div>
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