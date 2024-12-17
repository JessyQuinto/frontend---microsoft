import type { WCAGViolation } from '../../../types/accessibility';
import type { DocumentAnalysisClient } from '@azure/ai-form-recognizer';
import { createDocumentViolation } from '../violations/documentViolations';

export class DocumentAnalyzer {
  constructor(private client: DocumentAnalysisClient | null) {}

  async analyzeDocument(url: string): Promise<WCAGViolation[]> {
    if (!this.client) {
      return [createDocumentViolation('service-unavailable')];
    }

    try {
      const poller = await this.client.beginAnalyzeDocument('prebuilt-document', url);
      const result = await poller.pollUntilDone();
      return this.processResults(result);
    } catch (error) {
      console.error('Document analysis error:', error);
      return [createDocumentViolation('analysis-failed')];
    }
  }

  private processResults(result: any): WCAGViolation[] {
    const violations: WCAGViolation[] = [];

    if (!result.paragraphs?.length) {
      violations.push(createDocumentViolation('no-structure'));
    }

    if (result.images) {
      for (const image of result.images) {
        if (!image.altText) {
          violations.push(createDocumentViolation('missing-alt-text'));
        }
      }
    }

    return violations;
  }
}