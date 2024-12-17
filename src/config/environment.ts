import { z } from 'zod';

const envSchema = z.object({
  AZURE_FUNCTION_APP_URL: z.string().url().optional(),
  AZURE_COGNITIVE_SERVICES_ENDPOINT: z.string().url().optional(),
  AZURE_COGNITIVE_SERVICES_KEY: z.string().optional(),
  AZURE_FORM_RECOGNIZER_ENDPOINT: z.string().url().optional(),
  AZURE_FORM_RECOGNIZER_KEY: z.string().optional(),
});

export type Environment = z.infer<typeof envSchema>;

export function validateEnvironment(): Environment {
  const env = {
    AZURE_FUNCTION_APP_URL: import.meta.env.VITE_AZURE_FUNCTION_APP_URL,
    AZURE_COGNITIVE_SERVICES_ENDPOINT: import.meta.env.VITE_AZURE_COGNITIVE_SERVICES_ENDPOINT,
    AZURE_COGNITIVE_SERVICES_KEY: import.meta.env.VITE_AZURE_COGNITIVE_SERVICES_KEY,
    AZURE_FORM_RECOGNIZER_ENDPOINT: import.meta.env.VITE_AZURE_FORM_RECOGNIZER_ENDPOINT,
    AZURE_FORM_RECOGNIZER_KEY: import.meta.env.VITE_AZURE_FORM_RECOGNIZER_KEY,
  };

  return envSchema.parse(env);
}