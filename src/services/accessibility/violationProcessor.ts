import type { AccessibilityViolation } from '../../types/accessibility';
import type { AuditResult } from './types';
import { IMPACT_THRESHOLDS } from './config';

export function determineImpact(score: number): AccessibilityViolation['impact'] {
  if (score === IMPACT_THRESHOLDS.CRITICAL) return 'critical';
  if (score <= IMPACT_THRESHOLDS.SERIOUS) return 'serious';
  if (score <= IMPACT_THRESHOLDS.MODERATE) return 'moderate';
  return 'minor';
}

export function processViolations(audits: Record<string, AuditResult>): AccessibilityViolation[] {
  return Object.values(audits)
    .filter((audit) => audit.score !== null && audit.score < 1)
    .map((audit) => ({
      guidelineId: audit.id,
      element: audit.details?.items?.[0]?.element || '',
      impact: determineImpact(audit.score!),
      description: audit.description,
      recommendation: audit.title
    }));
}