import type { AccessibilityReport } from '../../../types/accessibility';
import { processAuditResults } from '../audit/processor';
import { calculateAccessibilityScore } from './score';
import { createAccessibilitySummary } from './summary';

export function createWebpageReport(url: string, analysis: any): AccessibilityReport {
  const violations = processAuditResults(analysis);
  const score = calculateAccessibilityScore(violations);
  const summary = createAccessibilitySummary(violations);

  return {
    url,
    timestamp: new Date().toISOString(),
    score,
    violations,
    documentType: 'webpage',
    summary
  };
}

export function createDocumentReport(
  url: string, 
  type: 'pdf' | 'word',
  imageAnalysis: any[] = []
): AccessibilityReport {
  const violations = [];
  const summary = createAccessibilitySummary(violations);

  return {
    url,
    timestamp: new Date().toISOString(),
    score: calculateAccessibilityScore(violations),
    violations,
    documentType: type,
    imageAnalysis,
    summary
  };
}