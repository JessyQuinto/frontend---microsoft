import { useState, useCallback } from 'react';

interface UseDropzoneOptions {
  accept?: string[];
  maxSize?: number;
}

export function useDropzone(
  onDrop: (file: File) => void,
  options: UseDropzoneOptions = {}
) {
  const [isDragActive, setIsDragActive] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else {
      setIsDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    // Validate file type if accept option is provided
    if (options.accept && !options.accept.some(type => file.name.toLowerCase().endsWith(type))) {
      console.error('File type not accepted');
      return;
    }

    // Validate file size if maxSize option is provided
    if (options.maxSize && file.size > options.maxSize) {
      console.error('File size exceeds maximum allowed');
      return;
    }

    onDrop(file);
  }, [onDrop, options]);

  return {
    isDragActive,
    handleDrag,
    handleDrop
  };
}