export interface AxeResult {
  violations: Array<{
    id: string;
    impact: 'minor' | 'moderate' | 'serious' | 'critical';
    tags: string[];
    description: string;
    help: string;
    helpUrl: string;
    nodes: Array<{
      html: string;
      target: string[];
    }>;
  }>;
}

export interface AxeConfig {
  rules?: Record<string, { enabled: boolean }>;
  checks?: Record<string, { enabled: boolean }>;
  reporter?: string;
  resultTypes?: Array<'violations' | 'passes' | 'incomplete' | 'inapplicable'>;
}