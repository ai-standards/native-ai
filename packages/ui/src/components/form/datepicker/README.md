# DatePicker Component

Date and time selection component with calendar interface and date range support.

## Features

- **Calendar Interface** - Interactive calendar dropdown for date selection
- **Manual Input** - Direct date entry with format validation
- **Date Ranges** - Min/max date constraints for valid selections
- **Controlled/Uncontrolled** - Works as both controlled and uncontrolled component
- **Size Variants** - Small, medium, and large sizes
- **Error States** - Visual error feedback with custom messages
- **Accessible** - Keyboard navigation and screen reader support
- **Click Outside** - Auto-close calendar when clicking outside

## Usage

```tsx
import { DatePicker } from '@/components/form';

// Basic usage
<DatePicker />

// With label and default value
<DatePicker 
  label="Birth Date"
  defaultValue={new Date(1990, 0, 1)}
  id="birthdate"
/>

// Controlled with date range
<DatePicker 
  value={selectedDate}
  onChange={setSelectedDate}
  minDate={new Date(2024, 0, 1)}
  maxDate={new Date(2024, 11, 31)}
  label="Event Date"
  id="eventdate"
/>

// With validation
<DatePicker 
  label="Required Date"
  error={hasError}
  errorMessage="Please select a valid date"
  id="required"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `Date` | - | Controlled selected date |
| `defaultValue` | `Date` | - | Default selected date |
| `onChange` | `(date: Date \| null) => void` | - | Date change handler |
| `disabled` | `boolean` | `false` | Disabled state |
| `minDate` | `Date` | - | Minimum selectable date |
| `maxDate` | `Date` | - | Maximum selectable date |
| `format` | `string` | `'MM/dd/yyyy'` | Date display format |
| `placeholder` | `string` | `'Select date'` | Placeholder text |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size variant |
| `label` | `string` | - | Label text |
| `error` | `boolean` | `false` | Error state |
| `errorMessage` | `string` | - | Error message text |
| `name` | `string` | - | Input name |
| `id` | `string` | - | Input id |
| `className` | `string` | - | Additional CSS classes |

## Date Format

The component uses a simple MM/dd/yyyy format by default. In production, consider using a robust date library like `date-fns` or `dayjs` for better internationalization and format support.

## Accessibility

- Calendar is keyboard navigable with arrow keys
- Screen reader compatible with proper ARIA labels
- Focus management when opening/closing calendar
- Date format clearly communicated to assistive technology