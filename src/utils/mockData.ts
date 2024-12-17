import type { AccessibilityReport } from '../types/report';

export function createMockReport(url: string, documentType?: 'webpage' | 'pdf' | 'word'): AccessibilityReport {
  return {
    url,
    timestamp: new Date().toISOString(),
    score: 85,
    violations: [
      {
        guidelineId: '1.1.1',
        principle: 'perceivable',
        level: 'A',
        impact: 'serious',
        element: 'img',
        description: 'Images must have alt text',
        recommendation: 'Add alt attributes to all images',
        helpUrl: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-content'
      }
    ],
    documentType,
    summary: {
      totalIssues: 1,
      criticalIssues: 0,
      seriousIssues: 1,
      moderateIssues: 0,
      minorIssues: 0,
      principleBreakdown: [
        {
          principle: 'Perceivable',
          violations: 1,
          description: 'Information must be presentable to users in ways they can perceive.'
        }
      ],
      levelBreakdown: {
        A: 1,
        AA: 0,
        AAA: 0
      }
    }
  };
}