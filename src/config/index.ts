import { validateEnvironment } from './environment';

export const ENV = validateEnvironment();

export const API_CONFIG = {
  baseUrl: ENV.AZURE_FUNCTION_APP_URL || 'http://localhost:7071',
  endpoints: {
    audit: '/api/audit',
  },
} as const;

export const MOCK_MODE = !ENV.AZURE_FUNCTION_APP_URL;