import React, { useRef, useState } from 'react';
import { Upload, File } from 'lucide-react';
import { useAccessibilityStore } from '../store/accessibilityStore';

export function DocumentUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { auditDocument, isLoading } = useAccessibilityStore();
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const fileType = file.name.toLowerCase().endsWith('.pdf') ? 'pdf' : 'word';
    const mockFileUrl = URL.createObjectURL(file);
    
    try {
      await auditDocument(mockFileUrl, fileType);
    } finally {
      URL.revokeObjectURL(mockFileUrl);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else {
      setDragActive(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    const fileType = file.name.toLowerCase().endsWith('.pdf') ? 'pdf' : 'word';
    const mockFileUrl = URL.createObjectURL(file);
    
    try {
      await auditDocument(mockFileUrl, fileType);
    } finally {
      URL.revokeObjectURL(mockFileUrl);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Upload Document</h2>
      
      <div 
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors
          ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
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
          className="flex flex-col items-center justify-center w-full space-y-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-4"
          aria-label="Choose a file to upload"
        >
          {isLoading ? (
            <File className="w-8 h-8 text-blue-600 animate-pulse" />
          ) : (
            <Upload className="w-8 h-8 text-gray-400" />
          )}
          <div className="text-sm text-gray-600">
            <span className="text-blue-600 hover:underline">Choose a file</span>
            {' or drag and drop'}
          </div>
          <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
        </button>
      </div>
    </div>
  );
}