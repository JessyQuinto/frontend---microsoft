import type { WCAGViolation } from '../../../types/accessibility';
import { WCAG_GUIDELINES } from '../../accessibility/wcagGuidelines';

type WebViolationType = 
  | 'service-unavailable'
  | 'analysis-failed'
  | 'missing-alt-text';

const violationTemplates: Record<WebViolationType, Omit<WCAGViolation, 'element'>> = {
  'service-unavailable': {
    guidelineId: 'service',
    principle: 'robust',
    level: 'A',
    impact: 'critical',
    description: 'Web analysis service is not available',
    recommendation: 'Configure Azure Computer Vision credentials',
    helpUrl: 'https://learn.microsoft.com/azure/cognitive-services/computer-vision/'
  },
  'analysis-failed': {
    guidelineId: 'service',
    principle: 'robust',
    level: 'A',
    impact: 'critical',
    description: 'Failed to analyze webpage',
    recommendation: 'Verify URL and try again',
    helpUrl: ''
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

interface ViolationParams {
  coordinates?: string;
}

export function createWebViolation(
  type: WebViolationType,
  params: ViolationParams = {}
): WCAGViolation {
  const template = violationTemplates[type];
  const element = params.coordinates ? 
    `image at coordinates ${params.coordinates}` : 
    'webpage';

  return {
    ...template,
    element
  };
}