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

export interface WCAGPrinciple {
  principle: string;
  violations: number;
  description: string;
}