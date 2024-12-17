import type { WCAGViolation } from '../../../types/accessibility';

export function determinePrinciple(tags: string[]): string {
  if (tags.includes('wcag2a') || tags.includes('wcag2aa')) {
    if (tags.includes('perceivable')) return 'perceivable';
    if (tags.includes('operable')) return 'operable';
    if (tags.includes('understandable')) return 'understandable';
    if (tags.includes('robust')) return 'robust';
  }
  return 'perceivable';
}

export function determineLevel(tags: string[]): WCAGViolation['level'] {
  if (tags.includes('wcag2aaa')) return 'AAA';
  if (tags.includes('wcag2aa')) return 'AA';
  return 'A';
}

export function getViolationSeverity(impact: WCAGViolation['impact']): number {
  const severityMap = {
    critical: 4,
    serious: 3,
    moderate: 2,
    minor: 1
  };
  return severityMap[impact] || 1;
}