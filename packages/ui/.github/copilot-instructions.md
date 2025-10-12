# Copilot Project Instructions

These instructions define how Copilot should behave when generating or modifying code in this project.

---

##  Component Architecture

- All components must be placed in the correct category folder:  
  - `content` — text and display components  
  - `form` — input and interactive form components  
  - `media` — image, video, and icon components  
  - `navigation` — wayfinding and navigation components  
  - `surface` — containers and overlays

- Each component must include:  
  - `Component.tsx` — core component implementation  
  - `Component.stories.tsx` — Storybook demo  
  - `Component.test.tsx` — unit tests using Vitest + React Testing Library  
  - `README.md` — usage documentation

---

##  Testing Rules

- All components must include unit tests.  
- Tests should use Vitest and React Testing Library.  
- When suggesting or running tests, always use:

Run the tests with `npm run test:run` so they terminate and dont watch


- Test coverage should include:
  - Rendering behavior
  - Props and variants
  - Event handling (if applicable)
  - Accessibility attributes (e.g., ARIA roles)
  - Edge cases

---

##  Storybook Guidelines

- All components must include Storybook stories.  
- Stories should demonstrate:
  - Default state
  - All variants and visual states
  - Interactions where relevant
- Use semantic, accessible markup in stories.
- Keep stories minimal but representative — Storybook is for demos, not end-to-end tests.

---

##  Documentation Rules

- Each component must include a `README.md` file describing:
  - Purpose and use cases
  - Props and configuration
  - Example usage
  - Accessibility considerations
- Use concise, structured formatting for readability.

---

##  Additional Copilot Behavior

- Prefer **TypeScript** over JavaScript.  
- Use **named exports** instead of default exports.  
- Do not generate raw HTML test files — use **Storybook** for UI demos.  
- Follow semantic and accessible markup practices.  
- Keep generated code consistent with existing patterns.

 This ensures every component is documented, tested, and demoable with minimal extra setup.
