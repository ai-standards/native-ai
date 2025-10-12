# UI Component Library Structure

This document outlines the broad component categories for the NativeAI UI library.  
The goal is to provide a complete, composable, modern UI foundation without unnecessary bloat.  
Each category represents a layer of functionality that can be built and shipped incrementally.

---

## 1. Primitives
Core building blocks for any UI.

- Button  
- Input  
- Icon  
- Card  
- Layout (Container / Grid / Spacer)  
- Tabs

---

## 2. Form Elements
Input controls and form components.

- Select / Dropdown  
- Checkbox  
- Radio  
- Switch / Toggle  
- Textarea  
- Slider  
- Date / Time Picker (optional for v1)

---

## 3. Navigation
Structural and navigational elements.

- Navbar / AppBar  
- Sidebar / Drawer  
- Menu / DropdownMenu  
- Breadcrumbs  
- Pagination  
- Command Palette (optional for later)

---

## 4. Feedback & Overlays
Transient UI elements for status, alerts, or context.

- Toast (must have)  
- Modal / Dialog  
- Tooltip / Popover  
- Alert / Banner  
- Spinner / Progress  
- Skeleton Loader

---

## 5. Data Display
Components for presenting structured information.

- Table / DataGrid  
- List / ListItem  
- Badge / Tag / Chip  
- Accordion / Collapse  
- Avatar

---

## 6. Utility
Low-level helpers to compose layouts and enhance UX.

- Divider / Spacer / Stack  
- Theme Switcher (Dark/Light)  
- Stepper / Wizard (optional)  
- ScrollArea / Scrollable Container

---

## 7. Optional Enhancements (Later)
Advanced components to support richer experiences.

- Rich Text Editor  
- File Dropzone / Uploader  
- Timeline  
- Carousel / Gallery  
- Tree View

---

## Implementation Notes
- Build Primitives + Toast + Modal early — they’re used everywhere.
- Add form elements and navigation as the framework matures.
- Keep optional features decoupled so users can opt in.
- All components should support:
  - Theming (light/dark)
  - Accessibility (a11y)
  - Keyboard interactions
  - Composability
