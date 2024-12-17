import type { WCAGViolation } from '../wcag/types';
import type { AccessibilitySummary } from '../../../types/accessibility';
import { WCAG_PRINCIPLES } from '../wcag/guidelines';

export function createAccessibilitySummary(violations: WCAGViolation[]): AccessibilitySummary {
  const principleViolations = violations.reduce((acc, violation) => {
    acc[violation.principle] = (acc[violation.principle] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return {
    totalIssues: violations.length,
    criticalIssues: violations.filter(v => v.impact === 'critical').length,
    seriousIssues: violations.filter(v => v.impact === 'serious').length,
    moderateIssues: violations.filter(v => v.impact === 'moderate').length,
    minorIssues: violations.filter(v => v.impact === 'minor').length,
    principleBreakdown: Object.entries(WCAG_PRINCIPLES).map(([key, principle]) => ({
      principle: principle.name,
      violations: principleViolations[key] || 0,
      description: principle.description
    })),
    levelBreakdown: {
      A: violations.filter(v => v.level === 'A').length,
      AA: violations.filter(v => v.level === 'AA').length,
      AAA: violations.filter(v => v.level === 'AAA').length
    }
  };
}