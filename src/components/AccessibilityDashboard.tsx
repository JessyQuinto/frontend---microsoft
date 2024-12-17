import React from 'react';
import { useAccessibilityStore } from '../store/accessibilityStore';
import { ScoreCard } from './accessibility/ScoreCard';
import { PrincipleBreakdown } from './accessibility/PrincipleBreakdown';
import { ViolationDetails } from './accessibility/ViolationDetails';
import { LoadingSpinner } from './LoadingSpinner';

export function AccessibilityDashboard() {
  const { currentReport, isLoading, error } = useAccessibilityStore();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-700">{error}</p>
      </div>
    );
  }

  if (!currentReport) {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
        <p className="text-blue-700 text-lg">
          Ingrese una URL o suba un documento para comenzar el análisis de accesibilidad
        </p>
      </div>
    );
  }

  // Determine WCAG level based on violations
  const wcagLevel = currentReport.summary?.levelBreakdown?.AA > 0 ? 'AA' : 'A';

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ScoreCard 
          score={currentReport.score} 
          level={wcagLevel}
        />
        {currentReport.summary?.principleBreakdown && (
          <PrincipleBreakdown breakdown={currentReport.summary.principleBreakdown} />
        )}
      </div>

      {currentReport.violations.length > 0 ? (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Problemas de Accesibilidad ({currentReport.violations.length})
          </h2>
          <div className="space-y-4">
            {currentReport.violations.map((violation, index) => (
              <ViolationDetails 
                key={`${violation.guidelineId}-${index}`} 
                violation={violation} 
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-green-50 p-6 rounded-lg">
          <p className="text-green-700 text-lg font-medium">
            ¡No se encontraron problemas de accesibilidad!
          </p>
          <p className="text-green-600 mt-2">
            El sitio cumple con las pautas WCAG analizadas. Continúe monitoreando y realizando auditorías periódicas.
          </p>
        </div>
      )}
    </div>
  );
}