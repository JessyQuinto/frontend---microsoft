import type { AccessibilityReport } from '../../types/accessibility';
import { createDocumentClient } from './clients/documentClient';
import { createVisionClient } from './clients/visionClient';
import { DocumentAnalyzer } from './analyzers/documentAnalyzer';
import { WebAnalyzer } from './analyzers/webAnalyzer';
import { calculateAccessibilityScore } from '../accessibility/auditUtils';
import { createAccessibilitySummary } from '../accessibility/reportUtils';

export class AzureAccessibilityService {
  private documentAnalyzer: DocumentAnalyzer;
  private webAnalyzer: WebAnalyzer;

  constructor() {
    this.documentAnalyzer = new DocumentAnalyzer(createDocumentClient());
    this.webAnalyzer = new WebAnalyzer(createVisionClient());
  }

  async analyzeWebPage(url: string): Promise<AccessibilityReport> {
    const violations = await this.webAnalyzer.analyzeWebPage(url);
    const score = calculateAccessibilityScore(violations);

    return {
      url,
      timestamp: new Date().toISOString(),
      score,
      violations,
      documentType: 'webpage',
      summary: createAccessibilitySummary(violations)
    };
  }

  async analyzeDocument(url: string, type: 'pdf' | 'word'): Promise<AccessibilityReport> {
    const violations = await this.documentAnalyzer.analyzeDocument(url);
    const score = calculateAccessibilityScore(violations);

    return {
      url,
      timestamp: new Date().toISOString(),
      score,
      violations,
      documentType: type,
      summary: createAccessibilitySummary(violations)
    };
  }
}