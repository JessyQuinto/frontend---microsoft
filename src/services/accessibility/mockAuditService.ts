import type { AccessibilityReport } from '../../types/accessibility';

export class MockAuditService {
  async auditWebpage(url: string): Promise<AccessibilityReport> {
    return {
      url,
      timestamp: new Date().toISOString(),
      score: 85,
      violations: [
        {
          guidelineId: 'mock-1',
          element: 'img',
          impact: 'serious',
          description: 'Images must have alt text',
          recommendation: 'Add alt attributes to all images'
        }
      ],
      documentType: 'webpage'
    };
  }

  async auditDocument(url: string, type: 'pdf' | 'word'): Promise<AccessibilityReport> {
    return {
      url,
      timestamp: new Date().toISOString(),
      score: 90,
      violations: [],
      documentType: type,
      imageAnalysis: []
    };
  }
}