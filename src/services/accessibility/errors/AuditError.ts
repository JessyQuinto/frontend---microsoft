export class AuditError extends Error {
  constructor(
    public readonly type: 'webpage' | 'document',
    public readonly originalError: unknown
  ) {
    const message = `Failed to analyze ${type}: ${
      originalError instanceof Error ? originalError.message : 'Unknown error occurred'
    }`;
    super(message);
    this.name = 'AuditError';
  }
}