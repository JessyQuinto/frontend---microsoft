import type { WCAGLevel, WCAGViolation, WCAGPrinciple } from './wcag';

export interface AccessibilitySummary {
  totalIssues: number;
  criticalIssues: number;
  seriousIssues: number;
  moderateIssues: number;
  minorIssues: number;
  principleBreakdown: WCAGPrinciple[];
  levelBreakdown: Record<WCAGLevel, number>;
}

export interface AccessibilityReport {
  url: string;
  timestamp: string;
  score: number;
  violations: WCAGViolation[];
  documentType?: 'webpage' | 'pdf' | 'word';
  summary: AccessibilitySummary;
}