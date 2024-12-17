import type { WCAGViolation } from '../../../types/accessibility';
import { WCAG_GUIDELINES } from '../../accessibility/wcagGuidelines';

type DocumentViolationType = 
  | 'service-unavailable'
  | 'analysis-failed'
  | 'no-structure'
  | 'missing-alt-text';

const violationTemplates: Record<DocumentViolationType, Omit<WCAGViolation, 'element'>> = {
  'service-unavailable': {
    guidelineId: 'service',
    principle: 'robust',
    level: 'A',
    impact: 'critical',
    description: 'Document analysis service is not available',
    recommendation: 'Configure Azure Form Recognizer credentials',
    helpUrl: 'https://learn.microsoft.com/azure/applied-ai-services/form-recognizer/'
  },
  'analysis-failed': {
    guidelineId: 'service',
    principle: 'robust',
    level: 'A',
    impact: 'critical',
    description: 'Failed to analyze document',
    recommendation: 'Verify document format and try again',
    helpUrl: ''
  },
  'no-structure': {
    guidelineId: '1.3.1',
    principle: 'perceivable',
    level: 'A',
    impact: 'serious',
    description: 'Document structure is not properly marked up',
    recommendation: 'Ensure document has proper headings and structure',
    helpUrl: WCAG_GUIDELINES.find(g => g.id === '1.3.1')?.helpUrl || ''
  },
  'missing-alt-text': {
    guidelineId: '1.1.1',
    principle: 'perceivable',
    level: 'A',
    impact: 'critical',
    description: 'Image missing alternative text',
    recommendation: 'Add descriptive alternative text to the image',
    helpUrl: WCAG_GUIDELINES.find(g => g.id === '1.1.1')?.helpUrl || ''
  }
};

export function createDocumentViolation(
  type: DocumentViolationType,
  element: string = 'document'
): WCAGViolation {
  return {
    ...violationTemplates[type],
    element
  };
}