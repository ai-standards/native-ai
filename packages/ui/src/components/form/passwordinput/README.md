# PasswordInput Component

Password input field with visibility toggle, strength indicator, and character count features.

## Features

- **Visibility Toggle** - Eye icon to show/hide password text
- **Password Strength** - Optional strength indicator with visual feedback
- **Character Count** - Optional character counter with limits
- **Custom Validation** - Configurable strength validation function
- **Size Variants** - Small, medium, and large sizes
- **Error Handling** - Built-in error state styling and messaging
- **Accessibility** - Proper labeling and keyboard navigation
- **TypeScript Support** - Full TypeScript support with proper interfaces

## Usage

```tsx
import { PasswordInput } from '@/components/form';

// Basic usage
<PasswordInput placeholder="Enter password" />

// With strength indicator
<PasswordInput 
  label="Create Password"
  showStrength
  helperText="Password should be strong"
  id="password"
/>

// With character count
<PasswordInput 
  label="Password"
  showCount
  maxLength={20}
  helperText="Maximum 20 characters"
  id="password"
/>

// Full featured
<PasswordInput 
  label="New Password"
  showStrength
  showCount
  maxLength={50}
  validateStrength={customValidator}
  id="new-password"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text |
| `error` | `string` | - | Error message |
| `helperText` | `string` | - | Helper text |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size variant |
| `showStrength` | `boolean` | `false` | Show password strength indicator |
| `validateStrength` | `(password: string) => { score: number; feedback: string }` | - | Custom strength validator |
| `showCount` | `boolean` | `false` | Show character count |
| `maxLength` | `number` | - | Maximum character length |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | auto-generated | Input ID |

Inherits all standard HTML input props except `type` (always password).

## Password Strength

The default strength validator checks for:

- **Length** (8+ characters) - +1 point
- **Mixed case** (upper and lower) - +1 point  
- **Numbers** (0-9) - +1 point
- **Special characters** (!@#$%^&*) - +1 point

**Strength Levels:**
- 0-1 points: Too weak (red)
- 2 points: Weak (yellow)
- 3 points: Good (blue)
- 4 points: Strong (green)

### Custom Validation

```tsx
const customValidator = (password: string) => {
  // Your custom logic
  let score = 0;
  let feedback = 'Too weak';
  
  if (password.length >= 12) score += 2;
  if (/[A-Z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  
  if (score >= 4) feedback = 'Very Strong';
  else if (score >= 3) feedback = 'Strong';
  else if (score >= 2) feedback = 'Good';
  
  return { score, feedback };
};

<PasswordInput 
  showStrength
  validateStrength={customValidator}
/>
```

## Character Count

When `showCount` is enabled with `maxLength`:

```tsx
<PasswordInput showCount maxLength={20} />
```

- Shows current/max character count
- Changes color when approaching limit
- Turns red when at/over limit

## Accessibility

- Toggle button is properly labeled for screen readers
- Password visibility state is announced
- Strength indicators have appropriate color contrast
- All interactive elements are keyboard accessible