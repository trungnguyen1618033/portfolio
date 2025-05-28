'use client';

import { useModalContext } from '../../../lib/modal-context';
import EducationModal from './EducationModal';
import InterestModal from './InterestModal';
import DiaryModal from './DiaryModal';
import BlogModal from './BlogModal';

export default function ModalManager() {
  const { isOpen, modalType, modalData, closeModal } = useModalContext();

  if (!isOpen || !modalType) return null;

  switch (modalType) {
    case 'education':
      return (
        <EducationModal
          isOpen={isOpen}
          onClose={closeModal}
          education={modalData}
        />
      );
    
    case 'interest':
      return (
        <InterestModal
          isOpen={isOpen}
          onClose={closeModal}
          interest={modalData}
        />
      );
    
    case 'diary':
      return (
        <DiaryModal
          isOpen={isOpen}
          onClose={closeModal}
          diary={modalData}
        />
      );
    
    case 'blog':
      return (
        <BlogModal
          isOpen={isOpen}
          onClose={closeModal}
          blog={modalData}
        />
      );
    
    default:
      return null;
  }
} 