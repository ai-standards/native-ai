# Feedback Components

Feedback components provide **system state indicators** and **status communication** to the user.  
These elements help users understand what’s happening — loading, progress, success, errors, or general status — without interrupting their workflow.

---

## 🌀 Spinner
A lightweight loading indicator for ongoing background processes, async actions, or pending UI updates.

**Features:**  
- Indeterminate loading indicator  
- Size and color variants  
- Accessible role and `aria-busy` support  
- Inline or block display modes  

**Documentation:** [Spinner README](./spinner/README.md)

---

## 📊 Progress
A visual representation of task or process completion. Useful for file uploads, form submissions, and long-running operations.

**Features:**  
- Determinate and indeterminate modes  
- Configurable min/max values  
- Color and size variants  
- Accessible `aria-valuenow` attributes  

**Documentation:** [Progress README](./progress/README.md)

---

## 🦴 Skeleton
A placeholder component that mimics the layout of content while data is loading, improving perceived performance.

**Features:**  
- Rectangular and circular variants  
- Pulse and shimmer animations  
- Accessible semantics for screen readers  
- Customizable width and height  

**Documentation:** [Skeleton README](./skeleton/README.md)

---

## 🚨 Alert
A static or dismissible message banner for status updates, warnings, or errors.

**Features:**  
- Status variants: info, success, warning, error  
- Optional icons and titles  
- Dismissible behavior and animations  
- ARIA live region support  

**Documentation:** [Alert README](./alert/README.md)

---

## 🔔 Toast
A temporary, non-blocking notification component for transient messages or status updates.

**Features:**  
- Timed auto-dismiss  
- Stacking and positioning  
- Visual status variants  
- Keyboard accessibility and focus management  

**Documentation:** [Toast README](./toast/README.md)

---

## 🧭 Design Principles

- **Non-blocking:** Feedback should inform users without stopping interaction.  
- **Accessible by default:** Proper ARIA roles and live regions are required.  
- **Consistent visual language:** Colors and shapes map directly to status semantics.  
- **Lightweight and performant:** Feedback components should not add unnecessary complexity.  
- **Composable:** Feedback elements should work seamlessly with surfaces and forms.

✅ Use **feedback components** whenever the UI needs to communicate **state** or **progress**, not to display content.
