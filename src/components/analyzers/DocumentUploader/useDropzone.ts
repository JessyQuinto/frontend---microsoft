import { useState, useCallback, DragEvent, ChangeEvent } from 'react';
import type { DropzoneProps } from './types';

export function useDropzone({ accept, maxSize, onDrop }: DropzoneProps) {
  const [isDragActive, setIsDragActive] = useState(false);

  const handleDrag = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(e.type === "dragenter" || e.type === "dragover");
  }, []);

  const validateFile = useCallback((file: File) => {
    if (accept && !accept.some(type => file.name.toLowerCase().endsWith(type))) {
      throw new Error('File type not accepted');
    }
    if (maxSize && file.size > maxSize) {
      throw new Error('File size exceeds maximum allowed');
    }
    return true;
  }, [accept, maxSize]);

  const handleDrop = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    try {
      validateFile(file) && onDrop(file);
    } catch (error) {
      console.error('File validation error:', error);
    }
  }, [onDrop, validateFile]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      validateFile(file) && onDrop(file);
    } catch (error) {
      console.error('File validation error:', error);
    }
  }, [onDrop, validateFile]);

  return {
    isDragActive,
    getRootProps: () => ({
      onDragEnter: handleDrag,
      onDragLeave: handleDrag,
      onDragOver: handleDrag,
      onDrop: handleDrop,
    }),
    getInputProps: () => ({
      type: 'file',
      accept: accept?.join(','),
      onChange: handleChange,
      className: 'hidden',
      'aria-label': 'File upload',
    }),
  };
}