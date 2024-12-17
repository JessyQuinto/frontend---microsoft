import { MOCK_MODE } from '../../config';
import { AccessibilityAuditService } from './auditService';
import { MockAuditService } from './mockAuditService';

export function createAuditService() {
  return MOCK_MODE ? new MockAuditService() : new AccessibilityAuditService();
}