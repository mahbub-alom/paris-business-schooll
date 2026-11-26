import React, { createContext, useContext, useState } from 'react';
import type { SchoolEvent } from '@/src/data/schoolData';

interface ModalContextValue {
  brochureOpen: boolean;
  brochureProgram: string;
  openBrochure: (programTitle?: string) => void;
  closeBrochure: () => void;

  applyOpen: boolean;
  applyProgram: string;
  openApply: (programTitle?: string) => void;
  closeApply: () => void;

  eventOpen: boolean;
  selectedEvent: SchoolEvent | null;
  openEventRsvp: (event: SchoolEvent) => void;
  closeEventRsvp: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [brochureProgram, setBrochureProgram] = useState('Master in Management Program');

  const [applyOpen, setApplyOpen] = useState(false);
  const [applyProgram, setApplyProgram] = useState('Master in Management Program');

  const [eventOpen, setEventOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<SchoolEvent | null>(null);

  const openBrochure = (programTitle?: string) => {
    if (programTitle) setBrochureProgram(programTitle);
    setBrochureOpen(true);
  };

  const openApply = (programTitle?: string) => {
    if (programTitle) setApplyProgram(programTitle);
    setApplyOpen(true);
  };

  const openEventRsvp = (event: SchoolEvent) => {
    setSelectedEvent(event);
    setEventOpen(true);
  };

  return (
    <ModalContext.Provider
      value={{
        brochureOpen,
        brochureProgram,
        openBrochure,
        closeBrochure: () => setBrochureOpen(false),
        applyOpen,
        applyProgram,
        openApply,
        closeApply: () => setApplyOpen(false),
        eventOpen,
        selectedEvent,
        openEventRsvp,
        closeEventRsvp: () => setEventOpen(false),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModals() {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error('useModals must be used inside ModalProvider');
  }
  return ctx;
}
