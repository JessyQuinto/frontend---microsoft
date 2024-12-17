import React, { useRef } from 'react';
import { Upload, File } from 'lucide-react';
import { useAccessibilityStore } from '../../store/accessibilityStore';
import { useDropzone } from '../../hooks/useDropzone';

export function DocumentUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { auditDocument, isLoading } = useAccessibilityStore();

  const { isDragActive, handleDrag, handleDrop } = useDropzone((file) => {
    const fileType = file.name.toLowerCase().endsWith('.pdf') ? 'pdf' : 'word';
    const fileUrl = URL.createObjectURL(file);
    auditDocument(fileUrl, fileType).finally(() => {
      URL.revokeObjectURL(fileUrl);
    });
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const fileType = file.name.toLowerCase().endsWith('.pdf') ? 'pdf' : 'word';
    const fileUrl = URL.createObjectURL(file);
    
    auditDocument(fileUrl, fileType).finally(() => {
      URL.revokeObjectURL(fileUrl);
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Upload Document</h2>
      
      <div 
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors
          ${isDragActive 
            ? 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-900/20' 
            : 'border-gray-300 dark:border-gray-600'}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        role="button"
        tabIndex={0}
        aria-label="Upload document area. Click or drag and drop a file."
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
          className="hidden"
          aria-hidden="true"
        />
        
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={isLoading}
          className="flex flex-col items-center justify-center w-full space-y-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 rounded-lg p-4"
          aria-label="Choose a file to upload"
        >
          {isLoading ? (
            <File className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-pulse" />
          ) : (
            <Upload className="w-8 h-8 text-gray-400 dark:text-gray-500" />
          )}
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <span className="text-blue-600 dark:text-blue-400 hover:underline">Choose a file</span>
            {' or drag and drop'}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">PDF, DOC, DOCX up to 10MB</p>
        </button>
      </div>
    </div>
  );
}