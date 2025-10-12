# Accordion Component

A flexible accordion component for organizing content into collapsible sections. Supports single or multiple section expansion with proper keyboard navigation and accessibility.

## Features

- **Multiple Sections**: Organize related content in expandable sections
- **Selection Modes**: Single or multiple section expansion
- **Keyboard Navigation**: Full arrow key, Enter, and Space support
- **State Management**: Controlled and uncontrolled modes
- **Accessibility**: Complete ARIA implementation and screen reader support
- **Compound Components**: Flexible structure with AccordionItem, AccordionTrigger, AccordionContent
- **TypeScript Support**: Full type definitions and IntelliSense
- **Customizable**: Extensive styling and behavior options

## Usage

```tsx
import { Accordion } from '@/Surface/accordion';

// Basic single-selection accordion
<Accordion type="single" collapsible>
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Section 1</Accordion.Trigger>
    <Accordion.Content>Content for section 1</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Trigger>Section 2</Accordion.Trigger>
    <Accordion.Content>Content for section 2</Accordion.Content>
  </Accordion.Item>
</Accordion>

// Multiple selection with default values
<Accordion type="multiple" defaultValue={["item-1", "item-3"]}>
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Always Open Section</Accordion.Trigger>
    <Accordion.Content>This section is open by default</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Trigger>Optional Section</Accordion.Trigger>
    <Accordion.Content>This section can be toggled</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-3">
    <Accordion.Trigger>Another Open Section</Accordion.Trigger>
    <Accordion.Content>This section is also open by default</Accordion.Content>
  </Accordion.Item>
</Accordion>

// Controlled accordion
const [value, setValue] = useState<string | undefined>("item-1");
<Accordion type="single" value={value} onValueChange={setValue}>
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Controlled Section</Accordion.Trigger>
    <Accordion.Content>This accordion is controlled externally</Accordion.Content>
  </Accordion.Item>
</Accordion>
```

## Components

### Accordion (Root)

The main accordion container that manages state and provides context.

#### Props
| Prop          | Type                                           | Default | Description                           |
|---------------|------------------------------------------------|---------|---------------------------------------|
| type          | `'single' \| 'multiple'`                      | -       | Selection behavior mode               |
| collapsible   | `boolean`                                      | `false` | Allow collapsing all items (single)  |
| defaultValue  | `string \| string[]`                           | -       | Initial value(s) (uncontrolled)      |
| value         | `string \| string[] \| undefined`              | -       | Current value(s) (controlled)        |
| onValueChange | `(value: string \| string[] \| undefined) => void` | -   | Called when value changes            |
| disabled      | `boolean`                                      | `false` | Disable all accordion items          |
| className     | `string`                                       | -       | Additional CSS classes               |
| children      | `React.ReactNode`                              | -       | Accordion items                      |

### Accordion.Item

Individual accordion section container.

#### Props
| Prop      | Type              | Default | Description                    |
|-----------|-------------------|---------|--------------------------------|
| value     | `string`          | -       | Unique identifier for the item |
| disabled  | `boolean`         | `false` | Disable this specific item     |
| className | `string`          | -       | Additional CSS classes         |
| children  | `React.ReactNode` | -       | Trigger and content components |

### Accordion.Trigger

The clickable header that toggles section visibility.

#### Props
| Prop      | Type              | Default | Description            |
|-----------|-------------------|---------|------------------------|
| className | `string`          | -       | Additional CSS classes |
| children  | `React.ReactNode` | -       | Trigger content        |

### Accordion.Content

The collapsible content container.

#### Props
| Prop      | Type              | Default | Description            |
|-----------|-------------------|---------|------------------------|
| className | `string`          | -       | Additional CSS classes |
| children  | `React.ReactNode` | -       | Section content        |

## Examples

### FAQ Section
```tsx
<Accordion type="single" collapsible className="w-full">
  <Accordion.Item value="faq-1">
    <Accordion.Trigger>How do I reset my password?</Accordion.Trigger>
    <Accordion.Content>
      <div className="prose prose-sm">
        <p>To reset your password:</p>
        <ol>
          <li>Click on "Forgot Password" on the login page</li>
          <li>Enter your email address</li>
          <li>Check your email for reset instructions</li>
          <li>Follow the link to create a new password</li>
        </ol>
      </div>
    </Accordion.Content>
  </Accordion.Item>

  <Accordion.Item value="faq-2">
    <Accordion.Trigger>How do I update my profile?</Accordion.Trigger>
    <Accordion.Content>
      <div className="prose prose-sm">
        <p>You can update your profile information by:</p>
        <ul>
          <li>Going to Settings → Profile</li>
          <li>Editing the fields you want to change</li>
          <li>Clicking "Save Changes"</li>
        </ul>
      </div>
    </Accordion.Content>
  </Accordion.Item>

  <Accordion.Item value="faq-3">
    <Accordion.Trigger>How do I cancel my subscription?</Accordion.Trigger>
    <Accordion.Content>
      <div className="prose prose-sm">
        <p>To cancel your subscription, visit the Billing section in your account settings.</p>
      </div>
    </Accordion.Content>
  </Accordion.Item>
</Accordion>
```

### Settings Panel
```tsx
<Accordion type="multiple" defaultValue={["account", "notifications"]}>
  <Accordion.Item value="account">
    <Accordion.Trigger>Account Settings</Accordion.Trigger>
    <Accordion.Content>
      <div className="space-y-4 p-4">
        <div>
          <label className="block text-sm font-medium mb-1">Display Name</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" />
        </div>
      </div>
    </Accordion.Content>
  </Accordion.Item>

  <Accordion.Item value="notifications">
    <Accordion.Trigger>Notification Preferences</Accordion.Trigger>
    <Accordion.Content>
      <div className="space-y-3 p-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" defaultChecked />
          <span>Email notifications</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" />
          <span>SMS notifications</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" defaultChecked />
          <span>Push notifications</span>
        </label>
      </div>
    </Accordion.Content>
  </Accordion.Item>

  <Accordion.Item value="privacy">
    <Accordion.Trigger>Privacy Settings</Accordion.Trigger>
    <Accordion.Content>
      <div className="space-y-3 p-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" defaultChecked />
          <span>Make profile public</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" />
          <span>Allow data collection</span>
        </label>
      </div>
    </Accordion.Content>
  </Accordion.Item>
</Accordion>
```

## Accessibility

- **Keyboard Navigation**: 
  - Arrow keys navigate between triggers
  - Enter and Space toggle sections
  - Tab moves focus through accordion items
- **ARIA Attributes**: Complete implementation with `aria-expanded`, `aria-controls`, `aria-labelledby`
- **Screen Reader Support**: Proper semantic structure and state announcements
- **Focus Management**: Visual focus indicators and logical tab order
- **Disabled State**: Proper handling of disabled items and sections

## Keyboard Navigation

| Key           | Action                                |
|---------------|---------------------------------------|
| `↓` / `↑`     | Move focus between accordion triggers |
| `Home`        | Focus first accordion trigger         |
| `End`         | Focus last accordion trigger          |
| `Enter`       | Toggle focused accordion item         |
| `Space`       | Toggle focused accordion item         |
| `Tab`         | Move to next focusable element        |

## Styling

### CSS Classes
The accordion uses these Tailwind CSS classes:
- Root: `space-y-2`
- Item: `border border-gray-200 rounded-lg overflow-hidden`
- Trigger: `w-full px-4 py-3 text-left font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500`
- Content: `px-4 py-3 border-t border-gray-200 bg-gray-50`

### Animation
Content sections include smooth expand/collapse transitions:
- Height transitions with `transition-all duration-200 ease-in-out`
- Opacity fade effects for content
- Chevron rotation indicators

## Best Practices

### When to Use Accordion
- **FAQ sections** with many questions and answers
- **Settings panels** with grouped configuration options
- **Content organization** where space is at a premium
- **Progressive disclosure** of complex information

### Design Guidelines
- Keep trigger text concise and descriptive
- Group related content logically
- Consider using icons to enhance triggers
- Maintain consistent content formatting

### Performance Tips
- Use `defaultValue` for uncontrolled components when possible
- Consider lazy loading heavy content in accordion sections
- Minimize re-renders by memoizing complex content

## Related Components

- **Panel** - Single collapsible content section
- **Tabs** - Horizontal navigation between content sections  
- **Modal** - Overlay dialogs for focused interactions
- **Drawer** - Sliding panels for secondary content