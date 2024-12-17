export type WCAGLevel = 'A' | 'AA' | 'AAA';
export type WCAGImpact = 'critical' | 'serious' | 'moderate' | 'minor';

export interface WCAGViolation {
  guidelineId: string;
  principle: string;
  level: WCAGLevel;
  impact: WCAGImpact;
  element: string;
  description: string;
  recommendation: string;
  helpUrl: string;
}

export interface AccessibilitySummary {
  totalIssues: number;
  criticalIssues: number;
  seriousIssues: number;
  moderateIssues: number;
  minorIssues: number;
  principleBreakdown: Array<{
    principle: string;
    violations: number;
    description: string;
  }>;
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