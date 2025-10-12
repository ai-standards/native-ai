# Navigation Components

Components for user navigation and wayfinding throughout the application. These elements provide clear structure, predictable interaction patterns, and strong accessibility support to help users move through content efficiently.

### Tabs
Tabbed interface for switching between content panels, allowing users to navigate between related sections within the same view.

**Features:** Horizontal and vertical orientations, keyboard navigation, active state management, lazy mounting, accessibility labels  
**Documentation:** [Tabs README](./tabs/README.md)

### Menu
Dropdown and context menu components for hierarchical navigation and contextual actions.

**Features:** Nested submenus, keyboard navigation, placement options, controlled/uncontrolled modes, accessibility support  
**Documentation:** [Menu README](./menu/README.md)

### Menubar
Horizontal menu bar with support for nested submenus and application-level navigation.

**Features:** Horizontal layout, submenu support, focus management, keyboard navigation, role-based semantics  
**Documentation:** [Menubar README](./menubar/README.md)

### NavigationMenu
Complex navigation component for large applications with support for mega-menu structures.

**Features:** Multi-column layouts, icons and labels, responsive behavior, keyboard navigation, accessibility landmarks  
**Documentation:** [NavigationMenu README](./navigationmenu/README.md)

### CommandMenu
Command palette component for search-driven navigation and quick actions.

**Features:** Keyboard shortcuts, fuzzy search, grouped commands, modal overlay, async data support  
**Documentation:** [CommandMenu README](./commandmenu/README.md)

### ContextMenu
Right-click menu component for contextual actions tied to specific UI elements.

**Features:** Trigger customization, nested submenus, keyboard navigation, placement control, accessibility support  
**Documentation:** [ContextMenu README](./contextmenu/README.md)

### Pagination
Page navigation component for browsing large datasets or content collections.

**Features:** Page numbers, previous/next controls, ellipsis truncation, keyboard accessibility, responsive layout  
**Documentation:** [Pagination README](./pagination/README.md)

### Stepper
Step-based navigation component for linear workflows and guided processes.

**Features:** Horizontal/vertical layouts, completed/active states, step labels, progress indication, keyboard navigation  
**Documentation:** [Stepper README](./stepper/README.md)

### Breadcrumb
Hierarchical navigation component displaying the current page’s location within the site structure.

**Features:** Hierarchical links, separators, truncation options, keyboard navigation, ARIA landmarks  
**Documentation:** [Breadcrumb README](./breadcrumb/README.md)

### LinkTree
Tree-style navigation structure for exploring nested content hierarchies.

**Features:** Expand/collapse nodes, keyboard navigation, icon support, async data loading, nested routing integration  
**Documentation:** [LinkTree README](./linktree/README.md)

### BottomNavigation
Mobile-first bottom tab navigation for compact navigation on small screens.

**Features:** Icon and label variants, active state management, swipe gestures, responsive layout  
**Documentation:** [BottomNavigation README](./bottomnavigation/README.md)

### HamburgerMenu
Collapsible mobile menu for small-screen navigation patterns.

**Features:** Toggleable drawer, animations, nested items, keyboard accessibility, responsive design  
**Documentation:** [HamburgerMenu README](./hamburgermenu/README.md)

### SwipeNavigation
Gesture-based navigation for mobile interfaces and touch-first experiences.

**Features:** Horizontal swipe gestures, haptic feedback hooks, velocity thresholds, route transitions  
**Documentation:** [SwipeNavigation README](./swipenavigation/README.md)

### VirtualList
Virtualized list navigation for efficiently handling large datasets with minimal DOM nodes.

**Features:** Virtualization, infinite rendering, dynamic height support, scroll-to-index, smooth performance  
**Documentation:** [VirtualList README](./virtuallist/README.md)

### InfiniteScroll
Continuous loading navigation component for endless scrolling experiences.

**Features:** Scroll thresholds, auto-fetching, loading indicators, async data support, mobile-optimized behavior  
**Documentation:** [InfiniteScroll README](./infinitescroll/README.md)

### SearchNavigation
Search-driven navigation interface for quick content discovery.

**Features:** Typeahead search, keyboard navigation, highlighted matches, async data loading, fuzzy matching  
**Documentation:** [SearchNavigation README](./searchnavigation/README.md)

### Link
Enhanced link component with active state management and accessibility features.

**Features:** Active/inactive states, keyboard focus management, routing integration, external link handling  
**Documentation:** [Link README](./link/README.md)

### NavItem
Reusable navigation item wrapper for building consistent navigation structures.

**Features:** Icon and label support, active state management, accessibility roles, flexible styling  
**Documentation:** [NavItem README](./navitem/README.md)

### NavGroup
Group wrapper for organizing multiple navigation items together.

**Features:** Collapsible groups, headings, nested navigation, responsive behavior, keyboard navigation  
**Documentation:** [NavGroup README](./navgroup/README.md)

### NavIndicator
Visual indicator for current page or active section within a navigation group.

**Features:** Position tracking, animations, alignment control, responsive behavior, theme support  
**Documentation:** [NavIndicator README](./navindicator/README.md)

---

## Design Principles

- **Intuitive UX** – Clear and predictable navigation patterns that guide users effectively.  
- **Keyboard Navigation** – Full keyboard accessibility support across all components.  
- **Mobile Optimized** – Touch-friendly navigation controls for smaller screens.  
- **Performance** – Efficient rendering for large and dynamic navigation structures.  
- **Consistent States** – Unified active, hover, and focus states.  
- **Semantic Structure** – Proper ARIA navigation landmarks and roles for accessibility.
