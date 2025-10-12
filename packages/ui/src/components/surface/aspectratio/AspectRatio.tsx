import React from 'react';
import { cn } from '@/utils/cn';

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Aspect ratio as width/height or predefined ratio */
  ratio?: number | 'square' | '16/9' | '4/3' | '3/2' | '21/9' | '1/1' | '5/4' | '9/16';
  /** Custom width/height ratio */
  width?: number;
  height?: number;
}

export const AspectRatio: React.FC<AspectRatioProps> = ({
  ratio = '16/9',
  width,
  height,
  className,
  children,
  ...props
}) => {
  // Calculate aspect ratio value
  const getAspectRatio = (): number => {
    if (width && height) {
      return width / height;
    }
    
    if (typeof ratio === 'number') {
      return ratio;
    }
    
    const ratioMap = {
      'square': 1,
      '1/1': 1,
      '16/9': 16/9,
      '4/3': 4/3,
      '3/2': 3/2,
      '21/9': 21/9,
      '5/4': 5/4,
      '9/16': 9/16,
    };
    
    return ratioMap[ratio] || 16/9;
  };

  const aspectRatioValue = getAspectRatio();
  const paddingBottom = `${(1 / aspectRatioValue) * 100}%`;

  return (
    <div
      className={cn('relative w-full', className)}
      style={{ paddingBottom }}
      {...props}
    >
      <div className="absolute inset-0">
        {children}
      </div>
    </div>
  );
};