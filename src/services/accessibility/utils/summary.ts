import type { AccessibilitySummary, WCAGViolation } from '../../../types/accessibility';

export function createAccessibilitySummary(violations: WCAGViolation[]): AccessibilitySummary {
  return {
    totalIssues: violations.length,
    criticalIssues: violations.filter(v => v.impact === 'critical').length,
    seriousIssues: violations.filter(v => v.impact === 'serious').length,
    moderateIssues: violations.filter(v => v.impact === 'moderate').length,
    minorIssues: violations.filter(v => v.impact === 'minor').length,
    principleBreakdown: calculatePrincipleBreakdown(violations),
    levelBreakdown: calculateLevelBreakdown(violations)
  };
}

function calculatePrincipleBreakdown(violations: WCAGViolation[]) {
  const principles = violations.reduce((acc, violation) => {
    const principle = violation.principle;
    if (!acc[principle]) {
      acc[principle] = {
        principle,
        violations: 0,
        description: getPrincipleDescription(principle)
      };
    }
    acc[principle].violations++;
    return acc;
  }, {} as Record<string, any>);

  return Object.values(principles);
}

function calculateLevelBreakdown(violations: WCAGViolation[]) {
  return {
    A: violations.filter(v => v.level === 'A').length,
    AA: violations.filter(v => v.level === 'AA').length,
    AAA: violations.filter(v => v.level === 'AAA').length
  };
}

function getPrincipleDescription(principle: string): string {
  const descriptions: Record<string, string> = {
    perceivable: 'Information must be presentable to users in ways they can perceive.',
    operable: 'User interface components and navigation must be operable.',
    understandable: 'Information and operation must be understandable.',
    robust: 'Content must be robust enough to be interpreted reliably.'
  };
  return descriptions[principle.toLowerCase()] || '';
}