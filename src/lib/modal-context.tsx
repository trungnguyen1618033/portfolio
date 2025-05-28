'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useModal, ModalType } from './useModal';

interface ModalContextType {
  openModal: (type: ModalType, data: any) => void;
  closeModal: () => void;
  isOpen: boolean;
  modalType: ModalType | null;
  modalData: any;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const modalControls = useModal();

  return (
    <ModalContext.Provider value={modalControls}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
} 