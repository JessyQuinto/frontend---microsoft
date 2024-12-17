import type { AccessibilityReport } from '../../types/report';

export interface ReportState {
  currentReport: AccessibilityReport | null;
}

export interface ReportActions {
  setReport: (report: AccessibilityReport) => void;
  clearReport: () => void;
}

export const createReportSlice = (set: any) => ({
  currentReport: null,
  setReport: (report: AccessibilityReport) => set({ currentReport: report }),
  clearReport: () => set({ currentReport: null })
});