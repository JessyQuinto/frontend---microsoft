import { IMPACT_THRESHOLDS } from '../config';
import type { AccessibilityViolation } from '../../../types/accessibility';

export function determineImpact(score: number): AccessibilityViolation['impact'] {
  if (score === IMPACT_THRESHOLDS.CRITICAL) return 'critical';
  if (score <= IMPACT_THRESHOLDS.SERIOUS) return 'serious';
  if (score <= IMPACT_THRESHOLDS.MODERATE) return 'moderate';
  return 'minor';
}