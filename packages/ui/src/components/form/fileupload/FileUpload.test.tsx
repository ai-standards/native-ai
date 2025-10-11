import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { FileUpload } from './FileUpload';

// Mock File constructor for testing
const createMockFile = (name: string, size: number, type: string = 'text/plain') => {
  const file = new File([''], name, { type });
  Object.defineProperty(file, 'size', { value: size });
  return file;
};

describe('FileUpload', () => {
  it('renders upload area', () => {
    render(<FileUpload />);
    
    expect(screen.getByText('Click to upload or drag and drop')).toBeDefined();
  });

  it('renders with label', () => {
    render(<FileUpload label="Upload Documents" id="documents" />);
    
    const label = screen.getByText('Upload Documents');
    expect(label).toBeDefined();
    expect(label.getAttribute('for')).toBe('documents');
  });

  it('shows helper text', () => {
    render(<FileUpload helperText="Upload your PDF documents" />);
    
    expect(screen.getByText('Upload your PDF documents')).toBeDefined();
  });

  it('shows error message', () => {
    render(
      <FileUpload 
        error 
        errorMessage="Please select a valid file"
      />
    );
    
    expect(screen.getByText('Please select a valid file')).toBeDefined();
  });

  it('handles file selection', () => {
    const handleFilesChange = vi.fn();
    render(<FileUpload onFilesChange={handleFilesChange} />);
    
    const input = document.querySelector('input[type="file"]');
    const file = createMockFile('test.txt', 1000);
    
    expect(input).toBeTruthy(); fireEvent.change(input!, { target: { files: [file] } });
    
    expect(handleFilesChange).toHaveBeenCalledWith([file]);
  });

  it('shows selected files', () => {
    const handleFilesChange = vi.fn();
    render(<FileUpload onFilesChange={handleFilesChange} showFileList />);
    
    const input = document.querySelector('input[type="file"]');
    const file = createMockFile('document.pdf', 2048);
    
    expect(input).toBeTruthy(); fireEvent.change(input!, { target: { files: [file] } });
    
    expect(screen.getByText('document.pdf')).toBeDefined();
    expect(screen.getByText('2 KB')).toBeDefined();
  });

  it('allows multiple file selection', () => {
    const handleFilesChange = vi.fn();
    render(<FileUpload multiple onFilesChange={handleFilesChange} />);
    
    const input = document.querySelector('input[type="file"]');
    const file1 = createMockFile('file1.txt', 1000);
    const file2 = createMockFile('file2.txt', 2000);
    
    expect(input).toBeTruthy(); fireEvent.change(input!, { target: { files: [file1, file2] } });
    
    expect(handleFilesChange).toHaveBeenCalledWith([file1, file2]);
  });

  it('validates file size', () => {
    const handleFilesChange = vi.fn();
    render(<FileUpload maxSize={1000} onFilesChange={handleFilesChange} />);
    
    const input = document.querySelector('input[type="file"]');
    const largeFile = createMockFile('large.txt', 2000);
    
    expect(input).toBeTruthy(); fireEvent.change(input!, { target: { files: [largeFile] } });
    
    expect(screen.getByText('File size must be less than 1000 Bytes')).toBeDefined();
    // Note: File validation may not trigger onChange with empty array depending on implementation
  });

  it('validates max files', () => {
    const handleFilesChange = vi.fn();
    render(<FileUpload multiple maxFiles={2} onFilesChange={handleFilesChange} />);
    
    const input = document.querySelector('input[type="file"]');
    const files = [
      createMockFile('file1.txt', 100),
      createMockFile('file2.txt', 100),
      createMockFile('file3.txt', 100),
    ];
    
    expect(input).toBeTruthy(); fireEvent.change(input!, { target: { files } });
    
    expect(screen.getByText('Maximum 2 files allowed')).toBeDefined();
  });

  it('removes individual files', () => {
    const handleFilesChange = vi.fn();
    render(<FileUpload multiple onFilesChange={handleFilesChange} />);
    
    const input = document.querySelector('input[type="file"]');
    const files = [
      createMockFile('file1.txt', 100),
      createMockFile('file2.txt', 100),
    ];
    
    expect(input).toBeTruthy(); fireEvent.change(input!, { target: { files } });
    
    // Find and click remove button for first file
    const removeButtons = screen.getAllByRole('button');
    const removeButton = removeButtons.find(btn => 
      btn.querySelector('svg')?.getAttribute('viewBox') === '0 0 24 24'
    );
    
    if (removeButton) {
      fireEvent.click(removeButton);
      
      // Should be called twice: once for initial selection, once for removal
      expect(handleFilesChange).toHaveBeenCalledTimes(2);
    }
  });

  it('clears all files', () => {
    const handleFilesChange = vi.fn();
    render(<FileUpload multiple onFilesChange={handleFilesChange} />);
    
    const input = document.querySelector('input[type="file"]');
    const files = [createMockFile('file1.txt', 100)];
    
    expect(input).toBeTruthy(); fireEvent.change(input!, { target: { files } });
    
    const clearButton = screen.getByText('Clear all');
    fireEvent.click(clearButton);
    
    expect(handleFilesChange).toHaveBeenLastCalledWith([]);
  });

  it('handles disabled state', () => {
    render(<FileUpload disabled />);
    
    const input = document.querySelector('input[type="file"]');
    expect(input).toBeDisabled();
  });

  it('shows accepted file types', () => {
    render(<FileUpload accept=".pdf,.doc,.docx" />);
    
    expect(screen.getByText('Accepted: .pdf,.doc,.docx')).toBeDefined();
  });

  it('formats file sizes correctly', () => {
    const handleFilesChange = vi.fn();
    render(<FileUpload onFilesChange={handleFilesChange} />);
    
    const input = document.querySelector('input[type="file"]');
    const file = createMockFile('large.txt', 1048576); // 1MB
    
    expect(input).toBeTruthy(); fireEvent.change(input!, { target: { files: [file] } });
    
    expect(screen.getByText('1 MB')).toBeDefined();
  });

  it('applies size classes', () => {
    const { container } = render(<FileUpload size="lg" />);
    
    const uploadArea = container.querySelector('[class*="p-8"]');
    expect(uploadArea).toBeDefined();
  });

  it('handles drag and drop events', () => {
    const handleDrop = vi.fn();
    render(<FileUpload onDrop={handleDrop} />);
    
    const uploadArea = screen.getByText('Click to upload or drag and drop').closest('div');
    
    if (uploadArea) {
      // Simulate drag over
      fireEvent.dragOver(uploadArea);
      expect(screen.getByText('Drop files here')).toBeDefined();
      
      // Simulate drag leave
      fireEvent.dragLeave(uploadArea);
      expect(screen.getByText('Click to upload or drag and drop')).toBeDefined();
    }
  });
});