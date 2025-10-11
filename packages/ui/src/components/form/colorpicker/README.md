# ColorPicker Component

Color selection interface with hue/saturation picker, presets, and multiple format support.

## Features

- **Interactive Color Wheel** - Hue slider and saturation/brightness area for precise color selection
- **Multiple Formats** - Support for HEX, RGB, and HSL color formats
- **Color Presets** - Customizable preset color palette for quick selection
- **Alpha Channel** - Optional transparency/alpha channel support
- **Visual Preview** - Color preview button with current selection
- **Size Variants** - Small, medium, and large picker sizes
- **Format Conversion** - Automatic conversion between color formats
- **Accessible** - Keyboard navigation and screen reader support

## Usage

```tsx
import { ColorPicker } from '@/components/form';

// Basic usage
<ColorPicker />

// With label and format
<ColorPicker 
  label="Theme Color"
  format="hex"
  defaultValue="#3b82f6"
  onChange={handleColorChange}
  id="theme"
/>

// RGB format with alpha
<ColorPicker 
  label="Background Color"
  format="rgb"
  showAlpha={true}
  onChange={handleColorChange}
  id="background"
/>

// Custom presets
<ColorPicker 
  label="Brand Colors"
  presets={[
    '#1f2937', '#ef4444', '#10b981', '#3b82f6'
  ]}
  onChange={handleColorChange}
  id="brand"
/>

// With validation
<ColorPicker 
  label="Required Color"
  error={hasError}
  errorMessage="Please select a color"
  id="required"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Controlled color value |
| `defaultValue` | `string` | `'#3b82f6'` | Default color value |
| `onChange` | `(color: string) => void` | - | Color change handler |
| `disabled` | `boolean` | `false` | Disabled state |
| `format` | `'hex' \| 'rgb' \| 'hsl'` | `'hex'` | Color format |
| `showAlpha` | `boolean` | `false` | Show alpha channel |
| `presets` | `string[]` | Default palette | Preset color array |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size variant |
| `label` | `string` | - | Label text |
| `error` | `boolean` | `false` | Error state |
| `errorMessage` | `string` | - | Error message text |
| `name` | `string` | - | Hidden input name |
| `id` | `string` | - | Input id |
| `className` | `string` | - | Additional CSS classes |

## Color Formats

### HEX Format
```tsx
<ColorPicker format="hex" /> // #3b82f6
```

### RGB Format
```tsx
<ColorPicker format="rgb" /> // rgb(59, 130, 246)
<ColorPicker format="rgb" showAlpha /> // rgba(59, 130, 246, 0.8)
```

### HSL Format
```tsx
<ColorPicker format="hsl" /> // hsl(217, 91%, 60%)
<ColorPicker format="hsl" showAlpha /> // hsla(217, 91%, 60%, 0.8)
```

## Default Presets

The component includes a default set of carefully chosen preset colors covering the full spectrum. You can override these with custom presets for brand colors or specific use cases.

## Interaction

- **Click preview** - Opens/closes color picker dropdown
- **Drag hue slider** - Adjusts hue (color)
- **Click saturation area** - Adjusts saturation and brightness
- **Click presets** - Instantly select preset colors
- **Click outside** - Closes picker dropdown

## Accessibility

- Color picker button is keyboard focusable
- Screen reader compatible with proper ARIA labels
- Visual focus indicators for keyboard users
- Color values are announced to assistive technology