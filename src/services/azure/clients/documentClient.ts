import { DocumentAnalysisClient } from '@azure/ai-form-recognizer';
import { AzureKeyCredential } from '@azure/core-auth';
import { AZURE_CONFIG } from '../config';

export function createDocumentClient(): DocumentAnalysisClient | null {
  if (!AZURE_CONFIG.formRecognizerEndpoint || !AZURE_CONFIG.formRecognizerKey) {
    console.warn('Form Recognizer credentials not configured');
    return null;
  }

  return new DocumentAnalysisClient(
    AZURE_CONFIG.formRecognizerEndpoint,
    new AzureKeyCredential(AZURE_CONFIG.formRecognizerKey)
  );
}