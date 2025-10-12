import React, { useState, useCallback } from 'react';
import { cn } from '@/utils/cn';

export interface TreeNode {
  /** Unique identifier */
  id: string;
  /** Display label */
  label: string;
  /** Optional icon */
  icon?: React.ReactNode;
  /** Child nodes */
  children?: TreeNode[];
  /** Whether node is disabled */
  disabled?: boolean;
  /** Custom data */
  data?: any;
  /** Whether node is expanded by default */
  defaultExpanded?: boolean;
}

export interface TreeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /** Tree data */
  data: TreeNode[];
  /** Selected node IDs */
  selectedIds?: string[];
  /** Expanded node IDs (controlled) */
  expandedIds?: string[];
  /** Default expanded node IDs */
  defaultExpandedIds?: string[];
  /** Callback when node is selected */
  onSelect?: (nodeId: string, node: TreeNode) => void;
  /** Callback when node expansion changes */
  onExpandedChange?: (expandedIds: string[]) => void;
  /** Whether multiple selection is allowed */
  multiSelect?: boolean;
  /** Whether to show connecting lines */
  showLines?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Visual variant */
  variant?: 'default' | 'minimal';
  /** Indentation per level in pixels */
  indent?: number;
}

const sizeClasses = {
  sm: 'text-sm py-1',
  md: 'text-base py-1.5',
  lg: 'text-lg py-2',
};

const ChevronIcon = ({ isExpanded }: { isExpanded: boolean }) => (
  <svg
    className={cn(
      'w-4 h-4 transition-transform duration-200 flex-shrink-0',
      isExpanded ? 'rotate-90' : 'rotate-0'
    )}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export const Tree: React.FC<TreeProps> = ({
  data,
  selectedIds = [],
  expandedIds,
  defaultExpandedIds = [],
  onSelect,
  onExpandedChange,
  multiSelect = false,
  showLines = false,
  size = 'md',
  variant = 'default',
  indent = 20,
  className,
  ...props
}) => {
  // Internal state for expanded nodes
  const [internalExpandedIds, setInternalExpandedIds] = useState<string[]>(() => {
    if (expandedIds) return expandedIds;
    
    const getDefaultExpanded = (nodes: TreeNode[]): string[] => {
      const expanded: string[] = [];
      nodes.forEach(node => {
        if (node.defaultExpanded || defaultExpandedIds.includes(node.id)) {
          expanded.push(node.id);
        }
        if (node.children) {
          expanded.push(...getDefaultExpanded(node.children));
        }
      });
      return expanded;
    };
    
    return getDefaultExpanded(data);
  });

  const currentExpandedIds = expandedIds || internalExpandedIds;

  const toggleExpanded = useCallback((nodeId: string) => {
    const newExpandedIds = currentExpandedIds.includes(nodeId)
      ? currentExpandedIds.filter(id => id !== nodeId)
      : [...currentExpandedIds, nodeId];
    
    if (!expandedIds) {
      setInternalExpandedIds(newExpandedIds);
    }
    
    onExpandedChange?.(newExpandedIds);
  }, [currentExpandedIds, expandedIds, onExpandedChange]);

  const handleSelect = useCallback((nodeId: string, node: TreeNode) => {
    if (node.disabled) return;
    onSelect?.(nodeId, node);
  }, [onSelect]);

  const TreeNodeComponent: React.FC<{
    node: TreeNode;
    level: number;
    isLast?: boolean;
    parentIsLast?: boolean;
  }> = ({ node, level, isLast = false, parentIsLast = false }) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = currentExpandedIds.includes(node.id);
    const isSelected = selectedIds.includes(node.id);

    return (
      <div key={node.id} className="relative">
        {/* Connecting lines */}
        {showLines && level > 0 && (
          <>
            {/* Horizontal line */}
            <div
              className="absolute border-gray-300 border-l border-b"
              style={{
                left: (level - 1) * indent + 8,
                top: 0,
                width: 12,
                height: '50%',
              }}
            />
            {/* Vertical line for parent */}
            {!parentIsLast && (
              <div
                className="absolute border-gray-300 border-l"
                style={{
                  left: (level - 1) * indent + 8,
                  top: 0,
                  bottom: isLast ? '50%' : 0,
                }}
              />
            )}
          </>
        )}

        {/* Node content */}
        <div
          className={cn(
            'flex items-center cursor-pointer transition-colors duration-200',
            sizeClasses[size],
            {
              'hover:bg-gray-100': !node.disabled && variant === 'default',
              'bg-blue-50 text-blue-700': isSelected && !node.disabled,
              'text-gray-400 cursor-not-allowed': node.disabled,
              'px-2 rounded': variant === 'default',
            }
          )}
          style={{ paddingLeft: level * indent }}
          onClick={() => handleSelect(node.id, node)}
        >
          {/* Expand/collapse button */}
          <div className="flex items-center justify-center w-6 h-6 mr-1">
            {hasChildren ? (
              <button
                className={cn(
                  'p-1 rounded hover:bg-gray-200 transition-colors duration-200',
                  { 'text-gray-400': node.disabled }
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!node.disabled) {
                    toggleExpanded(node.id);
                  }
                }}
                disabled={node.disabled}
                aria-expanded={isExpanded}
              >
                <ChevronIcon isExpanded={isExpanded} />
              </button>
            ) : (
              showLines && <div className="w-4 h-4" />
            )}
          </div>

          {/* Icon */}
          {node.icon && (
            <div className={cn('flex-shrink-0 mr-2', { 'text-gray-400': node.disabled })}>
              {node.icon}
            </div>
          )}

          {/* Label */}
          <span className="truncate select-none">{node.label}</span>
        </div>

        {/* Children */}
        {hasChildren && isExpanded && (
          <div>
            {node.children!.map((child, index) => (
              <TreeNodeComponent
                key={child.id}
                node={child}
                level={level + 1}
                isLast={index === node.children!.length - 1}
                parentIsLast={isLast}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={cn(
        'tree-component',
        {
          'border border-gray-200 rounded-lg p-2': variant === 'default',
        },
        className
      )}
      role="tree"
      aria-multiselectable={multiSelect}
      {...props}
    >
      {data.map((node, index) => (
        <TreeNodeComponent
          key={node.id}
          node={node}
          level={0}
          isLast={index === data.length - 1}
        />
      ))}
    </div>
  );
};