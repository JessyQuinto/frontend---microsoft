import { DocumentAnalysisClient } from '@azure/ai-form-recognizer';
import { AzureKeyCredential } from '@azure/core-auth';
import { AZURE_CONFIG } from './config';

export class DocumentAnalysisService {
  private client: DocumentAnalysisClient | null = null;

  constructor() {
    if (AZURE_CONFIG.formRecognizerEndpoint && AZURE_CONFIG.formRecognizerKey) {
      this.client = new DocumentAnalysisClient(
        AZURE_CONFIG.formRecognizerEndpoint,
        new AzureKeyCredential(AZURE_CONFIG.formRecognizerKey)
      );
    }
  }

  async analyzePDF(fileUrl: string) {
    if (!this.client) {
      console.warn('Azure Form Recognizer not configured');
      return {
        structure: [],
        text: 'Azure Form Recognizer not configured',
        tables: []
      };
    }

    try {
      const poller = await this.client.beginAnalyzeDocument('prebuilt-document', fileUrl);
      const result = await poller.pollUntilDone();

      return this.processDocumentAnalysis(result);
    } catch (error) {
      console.error('Error analyzing PDF:', error);
      throw error;
    }
  }

  private processDocumentAnalysis(result: any) {
    return {
      structure: result.pages,
      text: result.content,
      tables: result.tables,
    };
  }
}