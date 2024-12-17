import type { WCAGViolation } from '../../../types/accessibility';

const DEDUCTION_PER_VIOLATION = {
  critical: 20,
  serious: 10,
  moderate: 5,
  minor: 2
} as const;

export function calculateAccessibilityScore(violations: WCAGViolation[]): number {
  const baseScore = 100;
  const totalDeduction = violations.reduce((acc, violation) => 
    acc + (DEDUCTION_PER_VIOLATION[violation.impact] || 0), 0);

  return Math.max(0, Math.min(100, baseScore - totalDeduction));
}