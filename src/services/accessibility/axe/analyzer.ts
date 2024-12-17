import axe from 'axe-core';
import type { WCAGViolation } from '../../../types/accessibility';
import type { AxeResult, AxeConfig } from './types';
import { determineLevel, determinePrinciple } from './utils';

export class AxeAnalyzer {
  private config: AxeConfig = {
    resultTypes: ['violations'],
    reporter: 'v2'
  };

  async analyze(url: string): Promise<WCAGViolation[]> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch URL: ${response.statusText}`);
      }

      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      // Ejecutar axe-core
      const results = await this.runAxe(doc);
      return this.processResults(results);
    } catch (error) {
      console.error('Axe analysis error:', error);
      throw error;
    }
  }

  private async runAxe(document: Document): Promise<AxeResult> {
    return new Promise((resolve, reject) => {
      axe.run(document, this.config, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  private processResults(results: AxeResult): WCAGViolation[] {
    return results.violations.map(violation => ({
      guidelineId: violation.id,
      principle: determinePrinciple(violation.tags),
      level: determineLevel(violation.tags),
      impact: violation.impact,
      element: violation.nodes[0]?.html || '',
      description: violation.description,
      recommendation: violation.help,
      helpUrl: violation.helpUrl
    }));
  }
}