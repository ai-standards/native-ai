# Stepper Component

Step-based navigation component for linear workflows and guided processes with horizontal and vertical orientations and progress indication.

## Features

- **Horizontal/Vertical Layouts** - Flexible orientation options
- **Step States** - Current, completed, upcoming, and disabled states  
- **Progress Indication** - Visual progress with connecting lines
- **Clickable Navigation** - Optional step selection via clicks
- **Multiple Variants** - Default, minimal, and pills styling
- **Size Options** - Small, medium, and large sizing
- **Flexible Content** - Labels, descriptions, and numbers

## Usage

```tsx
import { Stepper } from '@/components/navigation/stepper';

const steps = [
  { id: 'step1', label: 'Account', description: 'Create account', completed: true },
  { id: 'step2', label: 'Profile', description: 'Complete profile' },
  { id: 'step3', label: 'Verification', description: 'Verify email', disabled: true },
];

// Basic usage
<Stepper 
  steps={steps}
  currentStep="step2"
  onStepClick={(stepId) => setCurrentStep(stepId)}
/>

// Vertical layout
<Stepper 
  steps={steps}
  currentStep="step2"
  orientation="vertical"
  variant="pills"
  size="lg"
/>

// Minimal without descriptions
<Stepper 
  steps={steps}
  currentStep="step2"
  showDescriptions={false}
  showNumbers={false}
  clickable={false}
/>
```

## Props

- `steps` - Array of step objects with id, label, description, etc.
- `currentStep` - ID of the currently active step
- `onStepClick` - Callback when step is clicked (if clickable)
- `orientation` - Layout direction: horizontal or vertical
- `variant` - Visual style: default, minimal, or pills
- `size` - Size variant: sm, md, or lg
- `showNumbers` - Whether to show step numbers (default: true)
- `showDescriptions` - Whether to show step descriptions (default: true)  
- `clickable` - Whether steps are clickable (default: true)

## Step States

- **Current** - Active step being worked on
- **Completed** - Successfully finished steps
- **Upcoming** - Future steps not yet reached  
- **Disabled** - Steps that cannot be accessed

## Accessibility

- Semantic HTML structure for screen readers
- Proper color contrast for all states
- Keyboard navigation support when clickable
- Clear visual indicators for step progression