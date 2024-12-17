import { ComputerVisionClient } from '@azure/cognitiveservices-computervision';
import { ApiKeyCredentials } from '@azure/ms-rest-js';
import { AZURE_CONFIG } from './config';
import type { ImageAnalysisResult } from '../../types/accessibility';

export class ImageAnalysisService {
  private client: ComputerVisionClient | null = null;

  constructor() {
    if (AZURE_CONFIG.cognitiveServicesEndpoint && AZURE_CONFIG.cognitiveServicesKey) {
      this.client = new ComputerVisionClient(
        new ApiKeyCredentials({ 
          inHeader: { 
            'Ocp-Apim-Subscription-Key': AZURE_CONFIG.cognitiveServicesKey 
          } 
        }),
        AZURE_CONFIG.cognitiveServicesEndpoint
      );
    }
  }

  async analyzeImage(imageUrl: string): Promise<ImageAnalysisResult> {
    if (!this.client) {
      console.warn('Azure Cognitive Services not configured');
      return {
        imageUrl,
        altTextPresent: false,
        suggestedAltText: 'Azure Cognitive Services not configured',
        colorContrast: {
          ratio: 0,
          passes: false
        }
      };
    }

    try {
      const analysis = await this.client.analyzeImage(imageUrl, {
        visualFeatures: ['Description', 'Color']
      });

      return {
        imageUrl,
        altTextPresent: false,
        suggestedAltText: analysis.description?.captions?.[0]?.text,
        colorContrast: {
          ratio: 0,
          passes: false
        }
      };
    } catch (error) {
      console.error('Error analyzing image:', error);
      throw error;
    }
  }
}