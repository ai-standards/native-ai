import { describe, it, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Stepper } from './Stepper';

describe('Stepper', () => {
  const sampleSteps = [
    { id: 'step1', label: 'First Step', description: 'First step description' },
    { id: 'step2', label: 'Second Step', description: 'Second step description' },
    { id: 'step3', label: 'Third Step', description: 'Third step description' },
  ];

  it('renders with default props', () => {
    render(<Stepper steps={sampleSteps} currentStep="step1" />);
    
    expect(screen.getByText('First Step')).toBeTruthy();
    expect(screen.getByText('Second Step')).toBeTruthy();
    expect(screen.getByText('Third Step')).toBeTruthy();
  });

  it('shows step numbers by default', () => {
    render(<Stepper steps={sampleSteps} currentStep="step2" />);
    
    expect(screen.getByText('1')).toBeTruthy();
    expect(screen.getByText('2')).toBeTruthy();
    expect(screen.getByText('3')).toBeTruthy();
  });

  it('shows step descriptions by default', () => {
    render(<Stepper steps={sampleSteps} currentStep="step1" />);
    
    expect(screen.getByText('First step description')).toBeTruthy();
    expect(screen.getByText('Second step description')).toBeTruthy();
    expect(screen.getByText('Third step description')).toBeTruthy();
  });

  it('hides descriptions when showDescriptions is false', () => {
    render(<Stepper steps={sampleSteps} currentStep="step1" showDescriptions={false} />);
    
    expect(screen.queryByText('First step description')).toBeNull();
    expect(screen.queryByText('Second step description')).toBeNull();
    expect(screen.queryByText('Third step description')).toBeNull();
  });

  it('hides numbers when showNumbers is false', () => {
    render(<Stepper steps={sampleSteps} currentStep="step1" showNumbers={false} />);
    
    expect(screen.queryByText('1')).toBeNull();
    expect(screen.queryByText('2')).toBeNull();
    expect(screen.queryByText('3')).toBeNull();
  });

  it('calls onStepClick when step is clicked', () => {
    const onStepClick = vi.fn();
    render(
      <Stepper 
        steps={sampleSteps} 
        currentStep="step1" 
        onStepClick={onStepClick}
      />
    );
    
    fireEvent.click(screen.getByText('Second Step'));
    expect(onStepClick).toHaveBeenCalledWith('step2');
  });

  it('does not call onStepClick when clickable is false', () => {
    const onStepClick = vi.fn();
    render(
      <Stepper 
        steps={sampleSteps} 
        currentStep="step1" 
        onStepClick={onStepClick}
        clickable={false}
      />
    );
    
    fireEvent.click(screen.getByText('Second Step'));
    expect(onStepClick).not.toHaveBeenCalled();
  });

  it('does not call onStepClick for disabled steps', () => {
    const onStepClick = vi.fn();
    const stepsWithDisabled = [
      ...sampleSteps.slice(0, 2),
      { ...sampleSteps[2], disabled: true },
    ];
    
    render(
      <Stepper 
        steps={stepsWithDisabled} 
        currentStep="step1" 
        onStepClick={onStepClick}
      />
    );
    
    fireEvent.click(screen.getByText('Third Step'));
    expect(onStepClick).not.toHaveBeenCalled();
  });

  test('applies correct state classes for current step', () => {
    const { container } = render(<Stepper steps={sampleSteps} currentStep="step2" />);
    
    // Check that step 2 has current state styling
    const step2 = container.querySelector('[class*="bg-blue-600"]');
    expect(step2).toBeTruthy();
  });

  test('applies correct state classes for completed steps', () => {
    const stepsWithCompleted = [
      { ...sampleSteps[0], completed: true },
      ...sampleSteps.slice(1),
    ];
    
    const { container } = render(<Stepper steps={stepsWithCompleted} currentStep="step2" />);
    
    // Check that step 1 has completed state styling
    const completedStep = container.querySelector('[class*="bg-green-600"]');
    expect(completedStep).toBeTruthy();
  });

  test('renders in vertical orientation', () => {
    const { container } = render(
      <Stepper steps={sampleSteps} currentStep="step1" orientation="vertical" />
    );
    
    const stepperContainer = container.firstChild as Element;
    expect(stepperContainer.classList.contains('flex-col')).toBe(true);
  });

  test('renders in horizontal orientation by default', () => {
    const { container } = render(<Stepper steps={sampleSteps} currentStep="step1" />);
    
    const stepperContainer = container.firstChild as Element;
    expect(stepperContainer.classList.contains('flex-row')).toBe(true);
  });

  test('applies variant classes correctly', () => {
    const { rerender, container } = render(
      <Stepper steps={sampleSteps} currentStep="step1" variant="minimal" />
    );
    
    // Check minimal variant has appropriate classes
    let currentStep = container.querySelector('[class*="bg-blue-600"]');
    expect(currentStep).toBeTruthy();
    
    rerender(<Stepper steps={sampleSteps} currentStep="step1" variant="pills" />);
    
    // Check pills variant has border classes
    currentStep = container.querySelector('[class*="border-2"]');
    expect(currentStep).toBeTruthy();
  });

  test('applies size classes correctly', () => {
    const { rerender, container } = render(
      <Stepper steps={sampleSteps} currentStep="step1" size="sm" />
    );
    
    let stepCircle = container.querySelector('[class*="w-6"]');
    expect(stepCircle).toBeTruthy();
    
    rerender(<Stepper steps={sampleSteps} currentStep="step1" size="lg" />);
    
    stepCircle = container.querySelector('[class*="w-10"]');
    expect(stepCircle).toBeTruthy();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Stepper 
        steps={sampleSteps} 
        currentStep="step1" 
        className="custom-stepper"
      />
    );
    
    const stepperContainer = container.firstChild as Element;
    expect(stepperContainer.classList.contains('custom-stepper')).toBe(true);
  });

  it('forwards additional props', () => {
    render(
      <Stepper 
        steps={sampleSteps} 
        currentStep="step1" 
        data-testid="stepper"
        id="test-stepper"
      />
    );
    
    const stepper = screen.getByTestId('stepper');
    expect(stepper.getAttribute('id')).toBe('test-stepper');
  });

  test('handles empty steps array', () => {
    const { container } = render(<Stepper steps={[]} currentStep="none" />);
    
    const stepperContainer = container.firstChild as Element;
    expect(stepperContainer.children.length).toBe(0);
  });

  test('handles invalid currentStep', () => {
    render(<Stepper steps={sampleSteps} currentStep="invalid" />);
    
    // Should not crash and should render all steps
    expect(screen.getByText('First Step')).toBeTruthy();
    expect(screen.getByText('Second Step')).toBeTruthy();
    expect(screen.getByText('Third Step')).toBeTruthy();
  });
});