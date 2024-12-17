import React from 'react';
import { Upload, File } from 'lucide-react';
import { useDropzone } from '../../../hooks/useDropzone';
import { useAccessibilityStore } from '../../../store/accessibilityStore';
import { FileTypeInfo } from './FileTypeInfo';
import { AcceptedFileTypes } from './types';

export function DropZone() {
  const { isLoading, auditDocument } = useAccessibilityStore();
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: AcceptedFileTypes,
    maxSize: 10 * 1024 * 1024, // 10MB
    onDrop: async (file) => {
      const fileType = file.name.toLowerCase().endsWith('.pdf') ? 'pdf' : 'word';
      const fileUrl = URL.createObjectURL(file);
      try {
        await auditDocument(fileUrl, fileType);
      } finally {
        URL.revokeObjectURL(fileUrl);
      }
    }
  });

  return (
    <div
      {...getRootProps()}
      className={`relative border-2 border-dashed rounded-lg p-8 text-center 
                 transition-all duration-200 cursor-pointer
                 bg-light-bg-secondary dark:bg-dark-bg-tertiary
                 hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-secondary
                 group ${
                   isDragActive 
                     ? 'border-light-accent dark:border-dark-accent bg-light-accent/5 dark:bg-dark-accent/5' 
                     : 'border-light-border dark:border-dark-border'
                 }`}
    >
      <input {...getInputProps()} />
      
      <div className="space-y-4">
        <div className="flex flex-col items-center">
          {isLoading ? (
            <File className="w-12 h-12 text-light-accent dark:text-dark-accent animate-pulse" />
          ) : (
            <Upload className="w-12 h-12 text-light-text-tertiary dark:text-dark-text-tertiary 
                             group-hover:text-light-accent dark:group-hover:text-dark-accent
                             transition-colors duration-200" />
          )}
          <div className="mt-4 text-sm">
            <span className="text-light-accent dark:text-dark-accent font-medium">
              Click to upload
            </span>
            <span className="text-light-text-secondary dark:text-dark-text-secondary">
              {' or drag and drop'}
            </span>
          </div>
        </div>

        <FileTypeInfo />
      </div>
    </div>
  );
}