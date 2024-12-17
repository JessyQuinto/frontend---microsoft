import React from 'react';
import { Info } from 'lucide-react';

interface InfoTooltipProps {
  content: string;
}

export function InfoTooltip({ content }: InfoTooltipProps) {
  return (
    <div className="relative group">
      <Info className="w-4 h-4 text-light-text-tertiary dark:text-dark-text-tertiary cursor-help" />
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity w-48 pointer-events-none">
        <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">
          {content}
        </p>
      </div>
    </div>
  );
}