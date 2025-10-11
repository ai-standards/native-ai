import React from 'react';

/**
 * Base props that most UI components should have
 */
export interface BaseProps {
  className?: string;
}

/**
 * Props for components that require children
 */
export interface PropsWithRequiredChildren extends BaseProps {
  children: React.ReactNode;
}

/**
 * Utility types using React's built-in patterns
 */
export type ComponentProps<T extends keyof JSX.IntrinsicElements> = React.ComponentProps<T>;
export type PropsWithChildren<P = {}> = React.PropsWithChildren<P>;
export type ForwardedRef<T, P> = React.ForwardRefExoticComponent<P & React.RefAttributes<T>>;