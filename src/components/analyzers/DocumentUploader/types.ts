export const AcceptedFileTypes = ['.pdf', '.doc', '.docx'];

export type FileType = 'pdf' | 'word';

export interface DropzoneProps {
  accept?: string[];
  maxSize?: number;
  onDrop: (file: File) => void;
}