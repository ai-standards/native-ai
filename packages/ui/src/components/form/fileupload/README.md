# FileUpload Component

File upload component with drag-and-drop support, validation, and file management features.

## Features

- **Drag & Drop** - Intuitive drag-and-drop interface with visual feedback
- **File Validation** - Size limits, file type restrictions, and count limits
- **Multiple Files** - Support for single or multiple file selection
- **File Preview** - Display selected files with size information and removal options
- **Visual States** - Hover, drag-over, error, and disabled states
- **Size Variants** - Small, medium, and large upload areas
- **Accessible** - Screen reader compatible with proper ARIA labels
- **Customizable** - Custom upload text, helper text, and styling

## Usage

```tsx
import { FileUpload } from '@/components/form';

// Basic usage
<FileUpload />

// With validation and multiple files
<FileUpload 
  label="Upload Documents"
  multiple
  maxFiles={5}
  maxSize={5 * 1024 * 1024} // 5MB
  accept=".pdf,.doc,.docx"
  onFilesChange={handleFilesChange}
  id="documents"
/>

// Image upload with preview
<FileUpload 
  label="Profile Picture"
  accept="image/*"
  maxSize={1024 * 1024} // 1MB
  onFilesChange={handleImageChange}
  uploadText="Upload your profile picture"
  helperText="JPG, PNG or GIF (max 1MB)"
  id="profile"
/>

// With error state
<FileUpload 
  label="Required Upload"
  error={hasError}
  errorMessage="Please select at least one file"
  id="required"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onFilesChange` | `(files: File[]) => void` | - | Called when file selection changes |
| `onDrop` | `(files: File[]) => void` | - | Called when files are dropped |
| `accept` | `string` | - | Accepted file types (e.g., '.pdf,.jpg') |
| `multiple` | `boolean` | `false` | Allow multiple file selection |
| `maxSize` | `number` | - | Maximum file size in bytes |
| `maxFiles` | `number` | `1` or `10` | Maximum number of files |
| `disabled` | `boolean` | `false` | Disabled state |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size variant |
| `label` | `string` | - | Label text |
| `helperText` | `string` | - | Helper text |
| `error` | `boolean` | `false` | Error state |
| `errorMessage` | `string` | - | Error message text |
| `showFileList` | `boolean` | `true` | Show selected files list |
| `uploadText` | `string` | - | Custom upload area text |
| `name` | `string` | - | Input name |
| `id` | `string` | - | Input id |
| `className` | `string` | - | Additional CSS classes |

## File Validation

The component includes built-in validation for:

- **File size limits** - Reject files exceeding `maxSize`
- **File count limits** - Enforce `maxFiles` restriction  
- **File type filtering** - Use `accept` prop for type restrictions
- **Automatic error display** - Shows validation errors with clear messages

## File Management

- **Individual removal** - Remove specific files from selection
- **Clear all** - Remove all selected files at once
- **File information** - Display file names and formatted sizes
- **Visual feedback** - Icons and status indicators

## Accessibility

- Uses native file input for keyboard accessibility
- Proper ARIA labels and descriptions
- Visual focus indicators for keyboard users
- Screen reader compatible file list and status updates