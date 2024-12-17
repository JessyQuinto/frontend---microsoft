import type { AuditResult } from '../types';
import type { AccessibilityViolation } from '../../../types/accessibility';
import { determineImpact } from '../utils/impact';

export function processLighthouseResults(audits: Record<string, AuditResult>): AccessibilityViolation[] {
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