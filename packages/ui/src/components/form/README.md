# Form Components

Interactive form elements and controls for user input and data collection. Each component includes comprehensive documentation, TypeScript support, accessibility features, and Storybook examples.

### Button
Versatile button component with multiple variants, sizes, and states for form actions and user interactions.

**Features:** Primary/secondary variants, loading states, icon support, disabled states  
**Documentation:** [Button README](./button/README.md)

### Input
Flexible text input field with validation, error states, and customizable styling options.

**Features:** Text/email/password types, validation states, prefix/suffix icons, size variants  
**Documentation:** [Input README](./input/README.md)

### NumberInput
Numeric input component with increment/decrement controls, validation, and formatting options.

**Features:** Increment/decrement buttons, keyboard navigation, min/max limits, decimal support, thousands formatting  
**Documentation:** [NumberInput README](./numberinput/README.md)

### PasswordInput
Password input field with visibility toggle, strength indicator, and character count features.

**Features:** Visibility toggle, password strength indicator, character count, custom validation, size variants  
**Documentation:** [PasswordInput README](./passwordinput/README.md)

### Radio

### Checkbox
Single and grouped checkbox controls for multiple selections with indeterminate state support.

**Features:** Individual checkboxes, checkbox groups, indeterminate state, custom styling  
**Documentation:** [Checkbox README](./checkbox/README.md)

### ColorPicker
Color selection interface with hue/saturation picker, presets, and multiple format support.

**Features:** Interactive color wheel, HEX/RGB/HSL formats, preset colors, alpha channel, format conversion  
**Documentation:** [ColorPicker README](./colorpicker/README.md)

### DatePicker
Interactive date selection component with calendar interface and date range validation.

**Features:** Calendar dropdown, manual input, date ranges, format customization, accessibility  
**Documentation:** [DatePicker README](./datepicker/README.md)

### FileUpload
File upload component with drag-and-drop support, validation, and file management features.

**Features:** Drag & drop interface, file validation, multiple files, visual feedback, size variants  
**Documentation:** [FileUpload README](./fileupload/README.md)

### Form
Form wrapper component that automatically collects data from named form controls with debounced change tracking.

**Features:** Automatic data collection, debounced updates, error tracking, validation modes, form context  
**Documentation:** [Form README](./form/README.md)

### Radio
Radio button groups for exclusive selection with flexible layouts and styling options.

**Features:** Horizontal/vertical layouts, size variants, individual option disabling  
**Documentation:** [Radio README](./radio/README.md)

### SearchInput
Search input field with autocomplete suggestions, debounced search, and keyboard navigation.

**Features:** Autocomplete suggestions, debounced search, keyboard navigation, search/clear buttons, loading states  
**Documentation:** [SearchInput README](./searchinput/README.md)

### Select
Dropdown selection component with search capabilities and multi-select support.

**Features:** Single/multi-select, search filtering, custom option rendering, keyboard navigation  
**Documentation:** [Select README](./select/README.md)

### Slider
Range slider for numeric value selection with customizable ranges, steps, and formatting.

**Features:** Custom min/max/step, value formatting, size variants, drag interaction  
**Documentation:** [Slider README](./slider/README.md)

### Switch
Toggle switch component for boolean values with label positioning and size options.

**Features:** On/off states, label positioning, size variants, smooth animations  
**Documentation:** [Switch README](./switch/README.md)

### Textarea
Multi-line text input with auto-resize capabilities and validation support.

**Features:** Auto-resize, character counting, validation states, size variants  
**Documentation:** [Textarea README](./textarea/README.md)

## Planned Components

Future form components planned for development. These will follow the same design principles and patterns as the current components.

### Advanced Input Controls

### FieldArray
Dynamic form arrays for repeatable fields with add/remove functionality, validation, and drag-and-drop sorting.

**Features:** Add/remove items, drag & drop reordering, validation, min/max constraints, helper functions  
**Documentation:** [FieldArray README](./fieldarray/README.md)

### FormField
Field wrapper component that provides consistent labeling, error handling, and layout for form controls.

**Features:** Flexible labeling, error handling, helper text, required indicators, size variants, accessibility  
**Documentation:** [FormField README](./formfield/README.md)

### FormSection
Form section component for grouping related form fields with optional dividers, titles, and collapsible functionality.

**Features:** Section headers, visual dividers, collapsible content, size variants, controlled state, accessibility  
**Documentation:** [FormSection README](./formsection/README.md)

### Form Structure

### ErrorMessage
Styled error message component for displaying validation errors and other error states.

**Features:** Consistent styling, accessibility, size variants, icons, animations, auto association  
**Documentation:** [ErrorMessage README](./errormessage/README.md)

### HelperText
Helper text component for providing contextual information and guidance to users.

**Features:** Contextual guidance, visual variants, flexible positioning, icon support, accessibility  
**Documentation:** [HelperText README](./helpertext/README.md)

### ValidationIndicator
Visual validation status indicators for form fields with icons and optional status text.

**Features:** Status states, visual feedback, loading animation, flexible display, size variants, positioning, accessibility  
**Documentation:** [ValidationIndicator README](./validationindicator/README.md)


## Design Principles

- **Accessibility First** - WCAG 2.1 AA compliance with proper ARIA labels
- **Consistent Styling** - Unified design language across all form elements
- **Flexible Validation** - Built-in and custom validation support
- **Responsive Design** - Mobile-friendly input controls
- **Theme Support** - Light/dark theme compatibility