import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FormSection } from './FormSection';

describe('FormSection', () => {
  const mockContent = <div>Section content</div>;

  it('renders children content', () => {
    render(
      <FormSection>
        {mockContent}
      </FormSection>
    );

    expect(screen.getByText('Section content')).toBeInTheDocument();
  });

  it('renders with title', () => {
    render(
      <FormSection title="Personal Information">
        {mockContent}
      </FormSection>
    );

    expect(screen.getByText('Personal Information')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Personal Information');
  });

  it('renders with description', () => {
    render(
      <FormSection 
        title="Contact Details" 
        description="Please provide your contact information"
      >
        {mockContent}
      </FormSection>
    );

    expect(screen.getByText('Please provide your contact information')).toBeInTheDocument();
  });

  it('shows divider when showDivider is true', () => {
    const { container } = render(
      <FormSection showDivider>
        {mockContent}
      </FormSection>
    );

    const divider = container.querySelector('.border-t');
    expect(divider).toBeInTheDocument();
  });

  it('renders collapsible section with toggle button', () => {
    render(
      <FormSection title="Collapsible Section" collapsible>
        {mockContent}
      </FormSection>
    );

    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
  });

  it('toggles content visibility when collapse button is clicked', () => {
    render(
      <FormSection title="Collapsible Section" collapsible>
        {mockContent}
      </FormSection>
    );

    const toggleButton = screen.getByRole('button');
    const content = screen.getByText('Section content');

    // Initially expanded
    expect(content).toBeVisible();
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

    // Click to collapse
    fireEvent.click(toggleButton);
    expect(content).not.toBeVisible();
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

    // Click to expand
    fireEvent.click(toggleButton);
    expect(content).toBeVisible();
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
  });

  it('starts collapsed when defaultCollapsed is true', () => {
    render(
      <FormSection title="Collapsible Section" collapsible defaultCollapsed>
        {mockContent}
      </FormSection>
    );

    const toggleButton = screen.getByRole('button');
    const content = screen.getByText('Section content');

    expect(content).not.toBeVisible();
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('calls onCollapsedChange when toggled', () => {
    const handleCollapsedChange = vi.fn();
    
    render(
      <FormSection 
        title="Collapsible Section" 
        collapsible 
        onCollapsedChange={handleCollapsedChange}
      >
        {mockContent}
      </FormSection>
    );

    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);

    expect(handleCollapsedChange).toHaveBeenCalledWith(true);
  });

  it('respects controlled collapsed state', () => {
    const { rerender } = render(
      <FormSection title="Controlled Section" collapsible collapsed={false}>
        {mockContent}
      </FormSection>
    );

    const content = screen.getByText('Section content');
    expect(content).toBeVisible();

    rerender(
      <FormSection title="Controlled Section" collapsible collapsed={true}>
        {mockContent}
      </FormSection>
    );

    expect(content).not.toBeVisible();
  });

  it('applies size classes correctly', () => {
    render(
      <FormSection title="Large Section" size="lg">
        {mockContent}
      </FormSection>
    );

    const title = screen.getByRole('heading');
    expect(title).toHaveClass('text-xl');
  });

  it('applies custom className', () => {
    const { container } = render(
      <FormSection className="custom-class">
        {mockContent}
      </FormSection>
    );

    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('has proper accessibility attributes for collapsible section', () => {
    render(
      <FormSection title="Accessible Section" collapsible>
        {mockContent}
      </FormSection>
    );

    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toHaveAttribute('aria-label', 'Collapse Accessible Section section');
  });
});