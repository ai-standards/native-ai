import React from 'react';
import { cn } from '@/utils/cn';

export interface StepperStep {
  /** Step identifier */
  id: string;
  /** Display label */
  label: string;
  /** Optional description */
  description?: string;
  /** Whether step is completed */
  completed?: boolean;
  /** Whether step is disabled */
  disabled?: boolean;
}

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of steps */
  steps: StepperStep[];
  /** Current active step ID */
  currentStep: string;
  /** Callback when step is clicked */
  onStepClick?: (stepId: string) => void;
  /** Layout orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Visual variant */
  variant?: 'default' | 'minimal' | 'pills';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Whether to show step numbers */
  showNumbers?: boolean;
  /** Whether to show step descriptions */
  showDescriptions?: boolean;
  /** Whether steps are clickable */
  clickable?: boolean;
}

const sizeClasses = {
  sm: {
    step: 'w-6 h-6 text-xs',
    label: 'text-sm',
    description: 'text-xs',
    connector: 'h-px',
  },
  md: {
    step: 'w-8 h-8 text-sm',
    label: 'text-base',
    description: 'text-sm',
    connector: 'h-px',
  },
  lg: {
    step: 'w-10 h-10 text-base',
    label: 'text-lg',
    description: 'text-base',
    connector: 'h-0.5',
  },
};

const CheckIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  onStepClick,
  orientation = 'horizontal',
  variant = 'default',
  size = 'md',
  showNumbers = true,
  showDescriptions = true,
  clickable = true,
  className,
  ...props
}) => {
  const currentStepIndex = steps.findIndex(step => step.id === currentStep);
  const classes = sizeClasses[size];

  const getStepState = (index: number, step: StepperStep) => {
    if (step.completed) return 'completed';
    if (step.disabled) return 'disabled';
    if (index === currentStepIndex) return 'current';
    if (index < currentStepIndex) return 'completed';
    return 'upcoming';
  };

  const getStepClasses = (state: string) => {
    const baseClasses = cn(
      'rounded-full flex items-center justify-center font-medium transition-colors duration-200',
      classes.step
    );

    switch (variant) {
      case 'minimal':
        return cn(baseClasses, {
          'bg-blue-600 text-white': state === 'current',
          'bg-green-600 text-white': state === 'completed',
          'bg-gray-200 text-gray-500': state === 'upcoming' || state === 'disabled',
        });
      
      case 'pills':
        return cn(baseClasses, {
          'bg-blue-100 text-blue-600 border-2 border-blue-600': state === 'current',
          'bg-green-100 text-green-600 border-2 border-green-600': state === 'completed',
          'bg-gray-100 text-gray-400 border-2 border-gray-300': state === 'upcoming' || state === 'disabled',
        });
      
      default:
        return cn(baseClasses, 'border-2', {
          'bg-blue-600 text-white border-blue-600': state === 'current',
          'bg-green-600 text-white border-green-600': state === 'completed',
          'bg-white text-gray-500 border-gray-300': state === 'upcoming',
          'bg-gray-100 text-gray-400 border-gray-200': state === 'disabled',
        });
    }
  };

  const getConnectorClasses = (fromState: string, toState: string) => {
    const isCompleted = fromState === 'completed' || fromState === 'current';
    
    if (orientation === 'horizontal') {
      return cn(
        'flex-1 mx-2',
        classes.connector,
        isCompleted ? 'bg-green-600' : 'bg-gray-300'
      );
    } else {
      return cn(
        'w-px h-8 my-2 ml-4',
        isCompleted ? 'bg-green-600' : 'bg-gray-300'
      );
    }
  };

  const handleStepClick = (step: StepperStep, index: number) => {
    if (!clickable || step.disabled) return;
    onStepClick?.(step.id);
  };

  const containerClasses = cn(
    'flex',
    orientation === 'horizontal' ? 'flex-row items-center' : 'flex-col',
    className
  );

  return (
    <div className={containerClasses} {...props}>
      {steps.map((step, index) => {
        const state = getStepState(index, step);
        const isLast = index === steps.length - 1;
        const isClickable = clickable && !step.disabled;

        return (
          <React.Fragment key={step.id}>
            <div 
              className={cn(
                'flex items-center',
                orientation === 'horizontal' ? 'flex-col text-center' : 'flex-row',
                isClickable && 'cursor-pointer group'
              )}
              onClick={() => handleStepClick(step, index)}
            >
              {/* Step circle */}
              <div className={getStepClasses(state)}>
                {state === 'completed' && !showNumbers ? (
                  <CheckIcon />
                ) : showNumbers ? (
                  index + 1
                ) : (
                  <CheckIcon />
                )}
              </div>
              
              {/* Step content */}
              <div className={cn(
                orientation === 'horizontal' ? 'mt-2' : 'ml-3',
                'text-left'
              )}>
                <div className={cn(
                  'font-medium',
                  classes.label,
                  {
                    'text-blue-600': state === 'current',
                    'text-green-600': state === 'completed',
                    'text-gray-900': state === 'upcoming',
                    'text-gray-400': state === 'disabled',
                  },
                  isClickable && 'group-hover:text-blue-600'
                )}>
                  {step.label}
                </div>
                
                {showDescriptions && step.description && (
                  <div className={cn(
                    'mt-1',
                    classes.description,
                    'text-gray-500'
                  )}>
                    {step.description}
                  </div>
                )}
              </div>
            </div>
            
            {/* Connector line */}
            {!isLast && (
              <div className={getConnectorClasses(state, getStepState(index + 1, steps[index + 1]))} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};