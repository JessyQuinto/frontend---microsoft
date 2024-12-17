import { create } from 'zustand';
import type { AccessibilityReport } from '../types/accessibility';
import { createAuditService } from '../services/accessibility/auditServiceFactory';

interface AccessibilityStore {
  currentReport: AccessibilityReport | null;
  isLoading: boolean;
  error: string | null;
  auditUrl: (url: string) => Promise<void>;
  auditDocument: (url: string, type: 'pdf' | 'word') => Promise<void>;
  setError: (error: string | null) => void;
}

const auditService = createAuditService();

export const useAccessibilityStore = create<AccessibilityStore>((set) => ({
  currentReport: null,
  isLoading: false,
  error: null,

  auditUrl: async (url: string) => {
    set({ isLoading: true, error: null });
    try {
      const report = await auditService.auditWebpage(url);
      set({ currentReport: report, isLoading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to analyze URL',
        isLoading: false 
      });
    }
  },

  auditDocument: async (url: string, type: 'pdf' | 'word') => {
    set({ isLoading: true, error: null });
    try {
      const report = await auditService.auditDocument(url, type);
      set({ currentReport: report, isLoading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to analyze document',
        isLoading: false 
      });
    }
  },

  setError: (error: string | null) => set({ error })
}));