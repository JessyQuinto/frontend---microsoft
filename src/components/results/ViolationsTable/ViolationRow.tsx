import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { WCAGViolation } from '../../../types/accessibility';
import { getImpactInfo } from '../../../utils/accessibility/impactUtils';

interface ViolationRowProps {
  violation: WCAGViolation;
}

export function ViolationRow({ violation }: ViolationRowProps) {
  const { icon: Icon, style } = getImpactInfo(violation.impact);

  return (
    <div className={`border-l-4 p-4 rounded-r-lg ${style}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-2">
          <Icon className="w-5 h-5" aria-hidden="true" />
          <h3 className="font-medium">
            {violation.guidelineId}: {violation.impact}
          </h3>
        </div>
        {violation.helpUrl && (
          <a
            href={violation.helpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 flex items-center space-x-1"
          >
            <span className="text-sm">Learn more</span>
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        )}
      </div>
      <p className="mt-2">{violation.description}</p>
      <div className="mt-2 text-sm">
        <strong>Recommendation:</strong> {violation.recommendation}
      </div>
      {violation.element && (
        <div className="mt-2 text-sm font-mono bg-white/50 p-2 rounded">
          <strong>Element:</strong> {violation.element}
        </div>
      )}
    </div>
  );
}