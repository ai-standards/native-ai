import React, { forwardRef, useRef, useState, useCallback } from 'react';
import { cn } from '../../../utils/cn';

export interface FileUploadProps {
  /** Called when files are selected */
  onFilesChange?: (files: File[]) => void;
  /** Called when files are dropped */
  onDrop?: (files: File[]) => void;
  /** Accepted file types */
  accept?: string;
  /** Allow multiple file selection */
  multiple?: boolean;
  /** Maximum file size in bytes */
  maxSize?: number;
  /** Maximum number of files */
  maxFiles?: number;
  /** Disabled state */
  disabled?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Label text */
  label?: string;
  /** Helper text */
  helperText?: string;
  /** Error state */
  error?: boolean;
  /** Error message */
  errorMessage?: string;
  /** Show file list */
  showFileList?: boolean;
  /** Custom upload text */
  uploadText?: string;
  /** Additional CSS classes */
  className?: string;
  /** Input name */
  name?: string;
  /** Input id */
  id?: string;
}

const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  (
    {
      onFilesChange,
      onDrop,
      accept,
      multiple = false,
      maxSize,
      maxFiles = multiple ? 10 : 1,
      disabled = false,
      size = 'md',
      label,
      helperText,
      error = false,
      errorMessage,
      showFileList = true,
      uploadText,
      className,
      name,
      id,
      ...props
    },
    ref
  ) => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [isDragOver, setIsDragOver] = useState(false);
    const [validationError, setValidationError] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const validateFiles = useCallback((files: File[]): { valid: File[]; error?: string } => {
      let validFiles = [...files];
      
      // Check max files
      if (validFiles.length > maxFiles) {
        return { valid: [], error: `Maximum ${maxFiles} file${maxFiles > 1 ? 's' : ''} allowed` };
      }
      
      // Check file sizes
      if (maxSize) {
        const oversizedFiles = validFiles.filter(file => file.size > maxSize);
        if (oversizedFiles.length > 0) {
          return { 
            valid: [], 
            error: `File size must be less than ${formatFileSize(maxSize)}` 
          };
        }
      }
      
      // If not multiple, only take first file
      if (!multiple && validFiles.length > 1) {
        validFiles = [validFiles[0]];
      }
      
      return { valid: validFiles };
    }, [maxSize, maxFiles, multiple]);

    const formatFileSize = (bytes: number): string => {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const handleFilesSelect = useCallback((files: FileList | File[]) => {
      const fileArray = Array.from(files);
      const { valid, error } = validateFiles(fileArray);
      
      if (error) {
        setValidationError(error);
        setSelectedFiles([]);
      } else {
        setValidationError('');
        setSelectedFiles(valid);
        onFilesChange?.(valid);
      }
    }, [validateFiles, onFilesChange]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        handleFilesSelect(e.target.files);
      }
    };

    const handleDrop = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      
      if (disabled) return;
      
      const files = Array.from(e.dataTransfer.files);
      handleFilesSelect(files);
      onDrop?.(files);
    }, [disabled, handleFilesSelect, onDrop]);

    const handleDragOver = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      if (!disabled) {
        setIsDragOver(true);
      }
    }, [disabled]);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
    }, []);

    const handleClick = () => {
      if (!disabled) {
        inputRef.current?.click();
      }
    };

    const removeFile = (index: number) => {
      const newFiles = selectedFiles.filter((_, i) => i !== index);
      setSelectedFiles(newFiles);
      onFilesChange?.(newFiles);
      setValidationError('');
    };

    const clearFiles = () => {
      setSelectedFiles([]);
      onFilesChange?.([]);
      setValidationError('');
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    };

    const sizeStyles = {
      sm: {
        container: 'p-4 text-sm',
        icon: 'w-6 h-6',
        text: 'text-sm'
      },
      md: {
        container: 'p-6 text-base',
        icon: 'w-8 h-8',
        text: 'text-base'
      },
      lg: {
        container: 'p-8 text-lg',
        icon: 'w-10 h-10',
        text: 'text-lg'
      }
    };

    const currentError = error || validationError;
    const displayError = errorMessage || validationError;

    const uploadArea = (
      <div
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={cn(
          'relative border-2 border-dashed rounded-lg cursor-pointer transition-colors',
          sizeStyles[size].container,
          isDragOver && !disabled && 'border-blue-500 bg-blue-50',
          currentError 
            ? 'border-red-300 bg-red-50'
            : 'border-gray-300 hover:border-gray-400',
          disabled && 'cursor-not-allowed opacity-50 bg-gray-50',
          className
        )}
      >
        <input
          ref={ref || inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleInputChange}
          disabled={disabled}
          name={name}
          id={id}
          className="sr-only"
          {...props}
        />
        
        <div className="flex flex-col items-center justify-center space-y-2">
          {/* Upload icon */}
          <svg 
            className={cn(sizeStyles[size].icon, 'text-gray-400')} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
            />
          </svg>
          
          <div className="text-center">
            <p className={cn('font-medium text-gray-700', sizeStyles[size].text)}>
              {uploadText || (
                isDragOver 
                  ? 'Drop files here' 
                  : 'Click to upload or drag and drop'
              )}
            </p>
            <p className="text-sm text-gray-500">
              {accept && `Accepted: ${accept}`}
              {maxSize && ` • Max size: ${formatFileSize(maxSize)}`}
              {multiple && ` • Max ${maxFiles} files`}
            </p>
          </div>
        </div>
      </div>
    );

    const fileList = showFileList && selectedFiles.length > 0 && (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-700">
            Selected Files ({selectedFiles.length})
          </p>
          <button
            type="button"
            onClick={clearFiles}
            className="text-sm text-red-600 hover:text-red-800"
          >
            Clear all
          </button>
        </div>
        
        <div className="space-y-2">
          {selectedFiles.map((file, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-2 bg-gray-50 rounded border"
            >
              <div className="flex items-center space-x-2 min-w-0">
                <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-700 truncate">{file.name}</p>
                  <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                </div>
              </div>
              
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="ml-2 text-red-600 hover:text-red-800 flex-shrink-0"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    );

    if (label) {
      return (
        <div className="space-y-2">
          <label
            htmlFor={id}
            className={cn(
              'block text-sm font-medium',
              currentError ? 'text-red-700' : 'text-gray-700',
              disabled && 'text-gray-400'
            )}
          >
            {label}
          </label>
          {uploadArea}
          {helperText && !currentError && (
            <p className="text-sm text-gray-500">{helperText}</p>
          )}
          {currentError && displayError && (
            <p className="text-sm text-red-600">{displayError}</p>
          )}
          {fileList}
        </div>
      );
    }

    return (
      <div>
        {uploadArea}
        {helperText && !currentError && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
        {currentError && displayError && (
          <p className="mt-1 text-sm text-red-600">{displayError}</p>
        )}
        {fileList}
      </div>
    );
  }
);

FileUpload.displayName = 'FileUpload';

export { FileUpload };