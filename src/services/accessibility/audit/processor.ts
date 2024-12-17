import type { WCAGViolation } from '../../../types/accessibility';
import { WCAG_GUIDELINES } from '../wcag/guidelines';

interface AzureAnalysisResult {
  // Define la estructura esperada del resultado de Azure
  accessibility?: {
    issues: Array<{
      type: string;
      impact: string;
      element?: string;
      description: string;
    }>;
  };
}

export function processAuditResults(analysis: AzureAnalysisResult): WCAGViolation[] {
  if (!analysis.accessibility?.issues) {
    return [];
  }

  return analysis.accessibility.issues.map(issue => {
    const guideline = WCAG_GUIDELINES.find(g => g.id === issue.type) || {
      id: issue.type,
      level: 'A',
      principle: 'perceivable',
      helpUrl: ''
    };

    return {
      guidelineId: guideline.id,
      principle: guideline.principle,
      level: guideline.level,
      impact: determineImpact(issue.impact),
      element: issue.element || '',
      description: issue.description,
      recommendation: generateRecommendation(issue),
      helpUrl: guideline.helpUrl
    };
  });
}

function determineImpact(impact: string): WCAGViolation['impact'] {
  switch (impact.toLowerCase()) {
    case 'critical':
      return 'critical';
    case 'serious':
    case 'high':
      return 'serious';
    case 'moderate':
    case 'medium':
      return 'moderate';
    default:
      return 'minor';
  }
}

function generateRecommendation(issue: AzureAnalysisResult['accessibility']['issues'][0]): string {
  // Implementar lógica para generar recomendaciones específicas basadas en el tipo de problema
  return `Fix the accessibility issue: ${issue.description}`;
}