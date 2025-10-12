import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from './FileUpload';

const meta: Meta<typeof FileUpload> = {
  title: 'Form/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="min-h-96 w-96 p-8">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    multiple: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    showFileList: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: 'Upload Documents',
    id: 'documents',
  },
};

export const Multiple: Story = {
  args: {
    label: 'Upload Multiple Files',
    multiple: true,
    maxFiles: 5,
    id: 'multiple',
  },
};

export const WithFileTypes: Story = {
  args: {
    label: 'Upload Images',
    accept: '.jpg,.jpeg,.png,.gif',
    multiple: true,
    id: 'images',
  },
};

export const WithSizeLimit: Story = {
  args: {
    label: 'Upload Document',
    accept: '.pdf,.doc,.docx',
    maxSize: 5 * 1024 * 1024, // 5MB
    helperText: 'Maximum file size: 5MB',
    id: 'document',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Upload',
    disabled: true,
    id: 'disabled',
  },
};

export const WithError: Story = {
  args: {
    label: 'Upload with Error',
    error: true,
    errorMessage: 'Please select a valid file',
    id: 'error',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Upload',
    id: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large Upload',
    id: 'large',
  },
};

export const CustomText: Story = {
  args: {
    label: 'Custom Upload Text',
    uploadText: 'Drop your awesome files here!',
    helperText: 'We support all file types',
    id: 'custom',
  },
};

export const Interactive: Story = {
  args: {
    label: 'Interactive File Upload',
    multiple: true,
    maxFiles: 3,
    maxSize: 2 * 1024 * 1024, // 2MB
    accept: '.jpg,.jpeg,.png,.pdf,.txt',
    id: 'interactive',
  },
  render: (args) => {
    const [files, setFiles] = React.useState<File[]>([]);
    const [uploadStatus, setUploadStatus] = React.useState<string>('');

    const handleFilesChange = (newFiles: File[]) => {
      setFiles(newFiles);
      if (newFiles.length > 0) {
        setUploadStatus(`${newFiles.length} file${newFiles.length > 1 ? 's' : ''} selected`);
      } else {
        setUploadStatus('');
      }
    };

    const handleUpload = async () => {
      if (files.length === 0) return;
      
      setUploadStatus('Uploading...');
      
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setUploadStatus('Upload complete!');
      setFiles([]);
    };

    return (
      <div className="w-full space-y-4">
        <FileUpload
          {...args}
          onFilesChange={handleFilesChange}
        />
        
        {uploadStatus && (
          <div className="p-3 bg-blue-50 border border-blue-200 rounded">
            <p className="text-sm text-blue-700">{uploadStatus}</p>
          </div>
        )}
        
        {files.length > 0 && !uploadStatus.includes('Uploading') && (
          <button
            onClick={handleUpload}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Upload {files.length} file{files.length > 1 ? 's' : ''}
          </button>
        )}
      </div>
    );
  },
};

export const ProfilePicture: Story = {
  render: () => {
    const [preview, setPreview] = React.useState<string | null>(null);

    const handleFilesChange = (files: File[]) => {
      if (files.length > 0) {
        const file = files[0];
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setPreview(e.target?.result as string);
          };
          reader.readAsDataURL(file);
        }
      } else {
        setPreview(null);
      }
    };

    return (
      <div className="w-full space-y-4">
        <FileUpload
          label="Profile Picture"
          accept="image/*"
          maxSize={1024 * 1024} // 1MB
          onFilesChange={handleFilesChange}
          uploadText="Upload your profile picture"
          helperText="JPG, PNG or GIF (max 1MB)"
          id="profile"
        />
        
        {preview && (
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
            <img
              src={preview}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-lg border border-gray-300"
            />
          </div>
        )}
      </div>
    );
  },
};