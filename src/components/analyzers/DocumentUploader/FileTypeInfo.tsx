import React from 'react';
import { FileText, FileCheck } from 'lucide-react';

interface FileTypeTagProps {
  icon: React.ElementType;
  label: string;
}

function FileTypeTag({ icon: Icon, label }: FileTypeTagProps) {
  return (
    <div className="flex items-center space-x-2 px-3 py-1 rounded-full
                    bg-light-bg dark:bg-dark-bg
                    border border-light-border dark:border-dark-border">
      <Icon className="w-4 h-4 text-light-text-tertiary dark:text-dark-text-tertiary" />
      <span className="text-xs text-light-text-secondary dark:text-dark-text-secondary">
        {label}
      </span>
    </div>
  );
}

export function FileTypeInfo() {
  return (
    <div className="flex flex-col space-y-2">
      <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
        Supported file types:
      </p>
      <div className="flex justify-center space-x-4">
        <FileTypeTag icon={FileText} label="PDF" />
        <FileTypeTag icon={FileCheck} label="DOC/DOCX" />
      </div>
      <p className="text-xs text-light-text-tertiary dark:text-dark-text-tertiary">
        Maximum file size: 10MB
      </p>
    </div>
  );
}