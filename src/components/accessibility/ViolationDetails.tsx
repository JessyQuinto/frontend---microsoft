import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { WCAGViolation } from '../../services/accessibility/wcag/types';
import { getImpactInfo } from '../../utils/accessibility/impactUtils';

interface ViolationDetailsProps {
  violation: WCAGViolation;
}

export function ViolationDetails({ violation }: ViolationDetailsProps) {
  const { icon: Icon, style } = getImpactInfo(violation.impact);

  return (
    <div className={`border-l-4 rounded-lg p-6 ${style}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Icon className="w-5 h-5" />
          <div>
            <h3 className="font-medium text-gray-900">
              {violation.guidelineId}: {violation.level}
            </h3>
            <p className="text-sm text-gray-600">Impacto: {violation.impact}</p>
          </div>
        </div>
        <a
          href={violation.helpUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 flex items-center space-x-1"
        >
          <span className="text-sm">Más información</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-800 mb-1">Descripción</h4>
          <p className="text-gray-700">{violation.description}</p>
        </div>

        <div>
          <h4 className="font-medium text-gray-800 mb-1">Recomendación</h4>
          <p className="text-gray-700">{violation.recommendation}</p>
        </div>

        {violation.element && (
          <div>
            <h4 className="font-medium text-gray-800 mb-1">Elemento Afectado</h4>
            <code className="block bg-white/50 p-2 rounded text-sm font-mono">
              {violation.element}
            </code>
          </div>
        )}
      </div>
    </div>
  );
}