import type { AccessibilityReport } from '../../types/accessibility';
import { ImageAnalysisService } from '../azure/imageAnalysis';
import { DocumentAnalysisService } from '../azure/documentAnalysis';
import { AxeAnalyzer } from './axe/analyzer';
import { createWebpageReport, createDocumentReport } from './utils/report';
import { AuditError } from './errors/AuditError';

export class AccessibilityAuditService {
  private axeAnalyzer: AxeAnalyzer;

  constructor(
    private imageAnalysis = new ImageAnalysisService(),
    private documentAnalysis = new DocumentAnalysisService()
  ) {
    this.axeAnalyzer = new AxeAnalyzer();
  }

  async auditWebpage(url: string): Promise<AccessibilityReport> {
    try {
      const violations = await this.axeAnalyzer.analyze(url);
      return createWebpageReport(url, { violations });
    } catch (error) {
      throw new AuditError('webpage', error);
    }
  }

  async auditDocument(url: string, type: 'pdf' | 'word'): Promise<AccessibilityReport> {
    try {
      const analysis = await this.documentAnalysis.analyzePDF(url);
      const imageAnalysis = await this.processDocumentImages(analysis);
      return createDocumentReport(url, type, imageAnalysis);
    } catch (error) {
      throw new AuditError('document', error);
    }
  }

  private async processDocumentImages(analysis: any) {
    return [];
  }
}