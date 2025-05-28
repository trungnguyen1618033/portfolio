'use client';

import { useState } from 'react';

export type ModalType = 'education' | 'interest' | 'diary' | 'blog';

export interface ModalState {
  isOpen: boolean;
  type: ModalType | null;
  data: any;
}

export function useModal() {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    type: null,
    data: null
  });

  const openModal = (type: ModalType, data: any = null) => {
    setModalState({
      isOpen: true,
      type,
      data
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      type: null,
      data: null
    });
  };

  return {
    modalState,
    openModal,
    closeModal,
    isOpen: modalState.isOpen,
    modalType: modalState.type,
    modalData: modalState.data
  };
} 