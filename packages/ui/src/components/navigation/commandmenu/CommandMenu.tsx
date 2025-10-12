import React, { useState, useEffect, useRef, useMemo } from 'react';
import { cn } from '@/utils/cn';

export interface CommandItem {
  /** Unique identifier */
  id: string;
  /** Display label */
  label: string;
  /** Optional description */
  description?: string;
  /** Optional icon */
  icon?: React.ReactNode;
  /** Keyboard shortcut */
  shortcut?: string[];
  /** Group/category */
  group?: string;
  /** Whether item is disabled */
  disabled?: boolean;
  /** Custom data */
  data?: any;
}

export interface CommandMenuProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /** Array of command items */
  items: CommandItem[];
  /** Whether menu is open */
  open: boolean;
  /** Callback when menu open state changes */
  onOpenChange: (open: boolean) => void;
  /** Callback when item is selected */
  onSelect: (item: CommandItem) => void;
  /** Placeholder text for search input */
  placeholder?: string;
  /** Empty state message */
  emptyMessage?: string;
  /** Maximum height of menu */
  maxHeight?: number;
  /** Search filter function */
  filter?: (items: CommandItem[], search: string) => CommandItem[];
  /** Group items by category */
  groupItems?: boolean;
}

const defaultFilter = (items: CommandItem[], search: string): CommandItem[] => {
  if (!search.trim()) return items;
  
  const searchTerm = search.toLowerCase();
  return items.filter(item => 
    item.label.toLowerCase().includes(searchTerm) ||
    item.description?.toLowerCase().includes(searchTerm) ||
    item.group?.toLowerCase().includes(searchTerm)
  );
};

const SearchIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export const CommandMenu: React.FC<CommandMenuProps> = ({
  items,
  open,
  onOpenChange,
  onSelect,
  placeholder = 'Type a command or search...',
  emptyMessage = 'No results found.',
  maxHeight = 400,
  filter = defaultFilter,
  groupItems = true,
  className,
  ...props
}) => {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const filteredItems = useMemo(() => filter(items, search), [items, search, filter]);
  
  const groupedItems = useMemo(() => {
    if (!groupItems) {
      return { '': filteredItems };
    }
    
    return filteredItems.reduce((groups, item) => {
      const group = item.group || 'Other';
      if (!groups[group]) {
        groups[group] = [];
      }
      groups[group].push(item);
      return groups;
    }, {} as Record<string, CommandItem[]>);
  }, [filteredItems, groupItems]);

  const flatItems = useMemo(() => {
    return Object.values(groupedItems).flat();
  }, [groupedItems]);

  // Reset search and selection when menu opens
  useEffect(() => {
    if (open) {
      setSearch('');
      setSelectedIndex(0);
      inputRef.current?.focus();
    }
  }, [open]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < flatItems.length - 1 ? prev + 1 : prev
          );
          break;
        
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => prev > 0 ? prev - 1 : prev);
          break;
        
        case 'Enter':
          e.preventDefault();
          const selectedItem = flatItems[selectedIndex];
          if (selectedItem && !selectedItem.disabled) {
            onSelect(selectedItem);
            onOpenChange(false);
          }
          break;
        
        case 'Escape':
          e.preventDefault();
          onOpenChange(false);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, flatItems, selectedIndex, onSelect, onOpenChange]);

  // Scroll selected item into view
  useEffect(() => {
    if (open && listRef.current) {
      const selectedElement = listRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex, open]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (open && e.target instanceof Element) {
        const commandMenu = e.target.closest('[data-command-menu]');
        if (!commandMenu) {
          onOpenChange(false);
        }
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-start justify-center pt-[15vh]',
        'bg-black bg-opacity-50'
      )}
      data-command-menu
    >
      <div
        className={cn(
          'w-full max-w-lg mx-4 bg-white rounded-lg shadow-2xl border',
          'animate-in fade-in-0 zoom-in-95 slide-in-from-top-2',
          className
        )}
        {...props}
      >
        {/* Search Input */}
        <div className="flex items-center border-b border-gray-200 px-4">
          <SearchIcon />
          <input
            ref={inputRef}
            className="flex-1 py-3 px-2 text-sm bg-transparent border-0 outline-none placeholder-gray-500"
            placeholder={placeholder}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
          />
        </div>

        {/* Results List */}
        <div
          ref={listRef}
          className="overflow-y-auto py-2"
          style={{ maxHeight }}
        >
          {flatItems.length === 0 ? (
            <div className="px-4 py-8 text-center text-gray-500 text-sm">
              {emptyMessage}
            </div>
          ) : (
            Object.entries(groupedItems).map(([group, groupItems]) => (
              <div key={group}>
                {groupItems && group && (
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    {group}
                  </div>
                )}
                {groupItems.map((item, itemIndex) => {
                  const globalIndex = flatItems.indexOf(item);
                  const isSelected = globalIndex === selectedIndex;
                  
                  return (
                    <div
                      key={item.id}
                      className={cn(
                        'flex items-center px-4 py-2 text-sm cursor-pointer',
                        'hover:bg-gray-100 transition-colors duration-150',
                        {
                          'bg-gray-100': isSelected,
                          'text-gray-400 cursor-not-allowed hover:bg-transparent': item.disabled,
                        }
                      )}
                      onClick={() => {
                        if (!item.disabled) {
                          onSelect(item);
                          onOpenChange(false);
                        }
                      }}
                      onMouseEnter={() => setSelectedIndex(globalIndex)}
                    >
                      {item.icon && (
                        <div className="flex-shrink-0 mr-3 text-gray-400">
                          {item.icon}
                        </div>
                      )}
                      
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900">
                          {item.label}
                        </div>
                        {item.description && (
                          <div className="text-xs text-gray-500 truncate">
                            {item.description}
                          </div>
                        )}
                      </div>
                      
                      {item.shortcut && (
                        <div className="flex-shrink-0 ml-3">
                          <div className="flex items-center space-x-1">
                            {item.shortcut.map((key, i) => (
                              <kbd
                                key={i}
                                className="px-1.5 py-0.5 text-xs font-mono bg-gray-100 rounded border"
                              >
                                {key}
                              </kbd>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};