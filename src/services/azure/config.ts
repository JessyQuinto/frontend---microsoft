import { z } from 'zod';

const configSchema = z.object({
  formRecognizerEndpoint: z.string().url().optional(),
  formRecognizerKey: z.string().min(1).optional(),
  cognitiveServicesEndpoint: z.string().url().optional(),
  cognitiveServicesKey: z.string().min(1).optional(),
});

const config = {
  formRecognizerEndpoint: import.meta.env.VITE_AZURE_FORM_RECOGNIZER_ENDPOINT,
  formRecognizerKey: import.meta.env.VITE_AZURE_FORM_RECOGNIZER_KEY,
  cognitiveServicesEndpoint: import.meta.env.VITE_AZURE_COGNITIVE_SERVICES_ENDPOINT,
  cognitiveServicesKey: import.meta.env.VITE_AZURE_COGNITIVE_SERVICES_KEY,
};

export const AZURE_CONFIG = configSchema.parse(config);

export const isMockMode = !AZURE_CONFIG.formRecognizerKey || 
                         !AZURE_CONFIG.cognitiveServicesKey;