import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TabGroup, TabsList, Tab, TabPanel } from './Tabs';

describe('Tabs Components', () => {
  const TestTabs = ({ onValueChange }: { onValueChange?: (value: string) => void }) => (
    <TabGroup defaultValue="tab1" onValueChange={onValueChange}>
      <TabsList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3" disabled>Tab 3</Tab>
      </TabsList>
      <TabPanel value="tab1">Content 1</TabPanel>
      <TabPanel value="tab2">Content 2</TabPanel>
      <TabPanel value="tab3">Content 3</TabPanel>
    </TabGroup>
  );

  describe('TabGroup', () => {
    it('renders with children', () => {
      render(<TestTabs />);
      expect(screen.getByText('Tab 1')).toBeInTheDocument();
      expect(screen.getByText('Tab 2')).toBeInTheDocument();
      expect(screen.getByText('Tab 3')).toBeInTheDocument();
    });

    it('shows default active panel content', () => {
      render(<TestTabs />);
      expect(screen.getByText('Content 1')).toBeInTheDocument();
      expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
      expect(screen.queryByText('Content 3')).not.toBeInTheDocument();
    });

    it('works as controlled component', () => {
      const ControlledTabs = () => (
        <TabGroup value="tab2">
          <TabsList>
            <Tab value="tab1">Tab 1</Tab>
            <Tab value="tab2">Tab 2</Tab>
          </TabsList>
          <TabPanel value="tab1">Content 1</TabPanel>
          <TabPanel value="tab2">Content 2</TabPanel>
        </TabGroup>
      );

      render(<ControlledTabs />);
      expect(screen.getByText('Content 2')).toBeInTheDocument();
      expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    });
  });

  describe('Tab', () => {
    it('applies correct active/inactive states', () => {
      render(<TestTabs />);
      const tab1 = screen.getByText('Tab 1');
      const tab2 = screen.getByText('Tab 2');
      
      expect(tab1).toHaveAttribute('aria-selected', 'true');
      expect(tab2).toHaveAttribute('aria-selected', 'false');
    });

    it('switches tabs when clicked', () => {
      render(<TestTabs />);
      const tab2 = screen.getByText('Tab 2');
      
      fireEvent.click(tab2);
      
      expect(screen.getByText('Content 2')).toBeInTheDocument();
      expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    });

    it('calls onValueChange when tab is clicked', () => {
      const handleValueChange = vi.fn();
      render(<TestTabs onValueChange={handleValueChange} />);
      
      fireEvent.click(screen.getByText('Tab 2'));
      
      expect(handleValueChange).toHaveBeenCalledWith('tab2');
    });

    it('respects disabled state', () => {
      render(<TestTabs />);
      const tab3 = screen.getByText('Tab 3');
      
      expect(tab3).toBeDisabled();
      fireEvent.click(tab3);
      
      // Should still show Content 1 (not switch to disabled tab)
      expect(screen.getByText('Content 1')).toBeInTheDocument();
      expect(screen.queryByText('Content 3')).not.toBeInTheDocument();
    });

    it('has proper accessibility attributes', () => {
      render(<TestTabs />);
      const tab1 = screen.getByText('Tab 1');
      
      expect(tab1).toHaveAttribute('role', 'tab');
      expect(tab1).toHaveAttribute('aria-controls', 'tabpanel-tab1');
      expect(tab1).toHaveAttribute('id', 'tab-tab1');
      expect(tab1).toHaveAttribute('tabIndex', '0');
    });
  });

  describe('TabPanel', () => {
    it('has proper accessibility attributes', () => {
      render(<TestTabs />);
      const panel = screen.getByText('Content 1');
      
      expect(panel).toHaveAttribute('role', 'tabpanel');
      expect(panel).toHaveAttribute('id', 'tabpanel-tab1');
      expect(panel).toHaveAttribute('aria-labelledby', 'tab-tab1');
    });

    it('only shows active panel', () => {
      render(<TestTabs />);
      
      expect(screen.getByText('Content 1')).toBeInTheDocument();
      expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('renders pills variant correctly', () => {
      render(
        <TabGroup defaultValue="tab1" variant="pills">
          <TabsList>
            <Tab value="tab1">Tab 1</Tab>
          </TabsList>
        </TabGroup>
      );
      
      const tabsList = screen.getByRole('tablist');
      expect(tabsList).toHaveClass('bg-gray-100', 'rounded-lg');
    });

    it('renders underline variant correctly', () => {
      render(
        <TabGroup defaultValue="tab1" variant="underline">
          <TabsList>
            <Tab value="tab1">Tab 1</Tab>
          </TabsList>
        </TabGroup>
      );
      
      const tabsList = screen.getByRole('tablist');
      expect(tabsList).toHaveClass('border-b', 'border-gray-200');
    });
  });

  describe('Sizes', () => {
    it('renders small size correctly', () => {
      render(
        <TabGroup defaultValue="tab1" size="sm">
          <TabsList>
            <Tab value="tab1">Tab 1</Tab>
          </TabsList>
        </TabGroup>
      );
      
      const tab = screen.getByText('Tab 1');
      expect(tab).toHaveClass('px-3', 'py-1.5', 'text-sm');
    });

    it('renders large size correctly', () => {
      render(
        <TabGroup defaultValue="tab1" size="lg">
          <TabsList>
            <Tab value="tab1">Tab 1</Tab>
          </TabsList>
        </TabGroup>
      );
      
      const tab = screen.getByText('Tab 1');
      expect(tab).toHaveClass('px-6', 'py-3', 'text-lg');
    });
  });

  describe('Layout', () => {
    it('applies flex layout classes for full height behavior', () => {
      render(<TestTabs />);
      const tabGroup = screen.getByRole('tablist').parentElement;
      expect(tabGroup).toHaveClass('w-full', 'h-full', 'flex', 'flex-col');
    });

    it('makes TabsList non-shrinking', () => {
      render(<TestTabs />);
      const tabsList = screen.getByRole('tablist');
      expect(tabsList).toHaveClass('flex-shrink-0');
    });

    it('makes TabPanel scrollable and flexible', () => {
      render(<TestTabs />);
      const panel = screen.getByText('Content 1');
      expect(panel).toHaveClass('flex-1', 'overflow-auto');
    });
  });

  describe('Error Handling', () => {
    it('throws error when Tab is used outside TabGroup', () => {
      // Suppress console.error for this test
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      
      expect(() => {
        render(<Tab value="test">Test</Tab>);
      }).toThrow('Tab components must be used within a TabGroup');
      
      consoleSpy.mockRestore();
    });
  });
});