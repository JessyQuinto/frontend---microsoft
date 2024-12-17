import { ComputerVisionClient } from '@azure/cognitiveservices-computervision';
import { ApiKeyCredentials } from '@azure/ms-rest-js';
import { AZURE_CONFIG } from '../config';

export function createVisionClient(): ComputerVisionClient | null {
  if (!AZURE_CONFIG.cognitiveServicesEndpoint || !AZURE_CONFIG.cognitiveServicesKey) {
    console.warn('Computer Vision credentials not configured');
    return null;
  }

  return new ComputerVisionClient(
    new ApiKeyCredentials({ 
      inHeader: { 
        'Ocp-Apim-Subscription-Key': AZURE_CONFIG.cognitiveServicesKey 
      } 
    }),
    AZURE_CONFIG.cognitiveServicesEndpoint
  );
}