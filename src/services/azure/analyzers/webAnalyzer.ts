import type { WCAGViolation } from '../../../types/accessibility';
import type { ComputerVisionClient } from '@azure/cognitiveservices-computervision';
import { createWebViolation } from '../violations/webViolations';

export class WebAnalyzer {
  constructor(private client: ComputerVisionClient | null) {}

  async analyzeWebPage(url: string): Promise<WCAGViolation[]> {
    if (!this.client) {
      return [createWebViolation('service-unavailable')];
    }

    try {
      const analysis = await this.client.analyzeImage(url, {
        visualFeatures: ['Description', 'Tags', 'Objects']
      });
      return this.processResults(analysis);
    } catch (error) {
      console.error('Web analysis error:', error);
      return [createWebViolation('analysis-failed')];
    }
  }

  private processResults(analysis: any): WCAGViolation[] {
    const violations: WCAGViolation[] = [];

    if (analysis.objects) {
      for (const object of analysis.objects) {
        if (!object.description) {
          violations.push(createWebViolation('missing-alt-text', {
            coordinates: `(${object.rectangle.x}, ${object.rectangle.y})`
          }));
        }
      }
    }

    return violations;
  }
}