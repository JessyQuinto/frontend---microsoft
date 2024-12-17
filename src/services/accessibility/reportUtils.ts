import type { AccessibilitySummary, WCAGViolation } from '../../types/accessibility';

export function createAccessibilitySummary(violations: WCAGViolation[]): AccessibilitySummary {
  return {
    totalIssues: violations.length,
    criticalIssues: violations.filter(v => v.impact === 'critical').length,
    seriousIssues: violations.filter(v => v.impact === 'serious').length,
    moderateIssues: violations.filter(v => v.impact === 'moderate').length,
    minorIssues: violations.filter(v => v.impact === 'minor').length,
    category: 'WCAG Compliance',
    description: 'Analysis of web content accessibility guidelines compliance'
  };
}