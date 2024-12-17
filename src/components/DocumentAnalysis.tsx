import React from 'react';
import type { AccessibilityReport } from '../types/accessibility';

interface DocumentAnalysisProps {
  report: AccessibilityReport;
}

export function DocumentAnalysis({ report }: DocumentAnalysisProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Document Analysis</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Document Type</h3>
          <p className="text-gray-600 capitalize">{report.documentType}</p>
        </div>

        {report.imageAnalysis && report.imageAnalysis.length > 0 && (
          <div>
            <h3 className="text-lg font-medium text-gray-900">Images</h3>
            <div className="space-y-2">
              {report.imageAnalysis.map((image, index) => (
                <div key={index} className="border rounded p-4">
                  <p className="text-sm text-gray-600">
                    Alt Text Present: {image.altTextPresent ? 'Yes' : 'No'}
                  </p>
                  {image.suggestedAltText && (
                    <p className="text-sm text-gray-600">
                      Suggested Alt Text: {image.suggestedAltText}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}