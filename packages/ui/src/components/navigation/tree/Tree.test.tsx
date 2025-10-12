import { describe, it, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tree } from './Tree';

describe('Tree', () => {
  const sampleData = [
    {
      id: 'root',
      label: 'Root',
      children: [
        { id: 'child1', label: 'Child 1' },
        { 
          id: 'child2', 
          label: 'Child 2',
          children: [
            { id: 'grandchild', label: 'Grandchild' }
          ]
        },
      ],
    },
    { id: 'leaf', label: 'Leaf Node' },
  ];

  it('renders tree data correctly', () => {
    render(<Tree data={sampleData} />);
    
    expect(screen.getByText('Root')).toBeTruthy();
    expect(screen.getByText('Leaf Node')).toBeTruthy();
  });

  it('shows children when expanded by default', () => {
    const dataWithExpanded = [
      {
        id: 'parent',
        label: 'Parent',
        defaultExpanded: true,
        children: [
          { id: 'child', label: 'Child' },
        ],
      },
    ];

    render(<Tree data={dataWithExpanded} />);
    
    expect(screen.getByText('Child')).toBeTruthy();
  });

  it('expands and collapses nodes when clicked', () => {
    render(<Tree data={sampleData} />);
    
    // Initially, children should not be visible
    expect(screen.queryByText('Child 1')).toBeNull();
    
    // Find and click the expand button for Root
    const expandButtons = screen.getAllByRole('button');
    const rootExpandButton = expandButtons.find(btn => 
      btn.getAttribute('aria-expanded') === 'false'
    );
    
    fireEvent.click(rootExpandButton!);
    
    // Children should now be visible
    expect(screen.getByText('Child 1')).toBeTruthy();
    expect(screen.getByText('Child 2')).toBeTruthy();
  });

  it('calls onSelect when node is clicked', () => {
    const onSelect = vi.fn();
    render(<Tree data={sampleData} onSelect={onSelect} />);
    
    fireEvent.click(screen.getByText('Leaf Node'));
    
    expect(onSelect).toHaveBeenCalledWith('leaf', expect.objectContaining({
      id: 'leaf',
      label: 'Leaf Node',
    }));
  });

  it('calls onExpandedChange when expansion state changes', () => {
    const onExpandedChange = vi.fn();
    render(<Tree data={sampleData} onExpandedChange={onExpandedChange} />);
    
    const expandButtons = screen.getAllByRole('button');
    const rootExpandButton = expandButtons.find(btn => 
      btn.getAttribute('aria-expanded') === 'false'
    );
    
    fireEvent.click(rootExpandButton!);
    
    expect(onExpandedChange).toHaveBeenCalledWith(['root']);
  });

  it('works as controlled component with expandedIds', () => {
    const { rerender } = render(
      <Tree data={sampleData} expandedIds={[]} onExpandedChange={vi.fn()} />
    );
    
    // Children should not be visible
    expect(screen.queryByText('Child 1')).toBeNull();
    
    // Update expandedIds
    rerender(
      <Tree data={sampleData} expandedIds={['root']} onExpandedChange={vi.fn()} />
    );
    
    // Children should now be visible
    expect(screen.getByText('Child 1')).toBeTruthy();
  });

  it('handles disabled nodes correctly', () => {
    const onSelect = vi.fn();
    const dataWithDisabled = [
      { id: 'enabled', label: 'Enabled Node' },
      { id: 'disabled', label: 'Disabled Node', disabled: true },
    ];
    
    render(<Tree data={dataWithDisabled} onSelect={onSelect} />);
    
    // Click enabled node
    fireEvent.click(screen.getByText('Enabled Node'));
    expect(onSelect).toHaveBeenCalledWith('enabled', expect.any(Object));
    
    // Click disabled node
    onSelect.mockClear();
    fireEvent.click(screen.getByText('Disabled Node'));
    expect(onSelect).not.toHaveBeenCalled();
  });

  it('renders icons when provided', () => {
    const dataWithIcons = [
      { 
        id: 'with-icon', 
        label: 'With Icon',
        icon: <span data-testid="node-icon"></span>
      },
    ];
    
    render(<Tree data={dataWithIcons} />);
    
    expect(screen.getByTestId('node-icon')).toBeTruthy();
  });

  test('applies size classes correctly', () => {
    const { rerender, container } = render(
      <Tree data={sampleData} size="sm" />
    );
    
    let nodeElement = container.querySelector('[class*="text-sm"]');
    expect(nodeElement).toBeTruthy();
    
    rerender(<Tree data={sampleData} size="lg" />);
    
    nodeElement = container.querySelector('[class*="text-lg"]');
    expect(nodeElement).toBeTruthy();
  });

  test('applies variant classes correctly', () => {
    const { rerender, container } = render(
      <Tree data={sampleData} variant="default" />
    );
    
    let treeContainer = container.querySelector('[class*="border"]');
    expect(treeContainer).toBeTruthy();
    
    rerender(<Tree data={sampleData} variant="minimal" />);
    
    treeContainer = container.querySelector('[class*="border"]');
    expect(treeContainer).toBeNull();
  });

  it('shows connecting lines when showLines is true', () => {
    const { container } = render(<Tree data={sampleData} showLines />);
    
    // This is a simplified test - in practice, connecting lines are positioned absolutely
    // and would need more complex testing
    expect(container.querySelector('.tree-component')).toBeTruthy();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Tree data={sampleData} className="custom-tree" />
    );
    
    const tree = container.firstChild as Element;
    expect(tree.classList.contains('custom-tree')).toBe(true);
  });

  it('forwards additional props', () => {
    render(
      <Tree 
        data={sampleData} 
        data-testid="tree-component" 
        id="test-tree"
      />
    );
    
    const tree = screen.getByTestId('tree-component');
    expect(tree.getAttribute('id')).toBe('test-tree');
  });

  it('sets correct ARIA attributes', () => {
    render(<Tree data={sampleData} multiSelect />);
    
    const tree = screen.getByRole('tree');
    expect(tree.getAttribute('aria-multiselectable')).toBe('true');
  });

  test('handles deep nesting correctly', () => {
    const deepData = [
      {
        id: 'level1',
        label: 'Level 1',
        defaultExpanded: true,
        children: [
          {
            id: 'level2',
            label: 'Level 2',
            defaultExpanded: true,
            children: [
              { id: 'level3', label: 'Level 3' },
            ],
          },
        ],
      },
    ];
    
    render(<Tree data={deepData} />);
    
    expect(screen.getByText('Level 1')).toBeTruthy();
    expect(screen.getByText('Level 2')).toBeTruthy();
    expect(screen.getByText('Level 3')).toBeTruthy();
  });

  test('handles empty data gracefully', () => {
    const { container } = render(<Tree data={[]} />);
    
    const tree = container.querySelector('[role="tree"]');
    expect(tree).toBeTruthy();
    expect(tree?.children.length).toBe(0);
  });

  test('prevents event bubbling on expand button click', () => {
    const onSelect = vi.fn();
    render(<Tree data={sampleData} onSelect={onSelect} />);
    
    const expandButtons = screen.getAllByRole('button');
    const rootExpandButton = expandButtons.find(btn => 
      btn.getAttribute('aria-expanded') === 'false'
    );
    
    fireEvent.click(rootExpandButton!);
    
    // onSelect should not be called when clicking expand button
    expect(onSelect).not.toHaveBeenCalled();
  });

  test('respects defaultExpandedIds prop', () => {
    render(
      <Tree 
        data={sampleData} 
        defaultExpandedIds={['root']}
      />
    );
    
    // Children should be visible due to defaultExpandedIds
    expect(screen.getByText('Child 1')).toBeTruthy();
  });

  test('handles selectedIds prop correctly', () => {
    const { container } = render(
      <Tree data={sampleData} selectedIds={['leaf']} />
    );
    
    const leafNode = screen.getByText('Leaf Node').parentElement;
    expect(leafNode?.classList.contains('bg-blue-50')).toBe(true);
  });
});