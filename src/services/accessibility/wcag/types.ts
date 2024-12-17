export type WCAGLevel = 'A' | 'AA' | 'AAA';

export interface WCAGPrinciple {
  id: string;
  name: string;
  description: string;
}

export interface WCAGGuideline {
  id: string;
  name: string;
  level: WCAGLevel;
  principle: string;
  description: string;
  helpUrl: string;
}

export interface WCAGViolation {
  guidelineId: string;
  principle: string;
  level: WCAGLevel;
  impact: 'critical' | 'serious' | 'moderate' | 'minor';
  element: string;
  description: string;
  recommendation: string;
  helpUrl: string;
}