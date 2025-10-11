import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { 
  Layout, 
  ActionBar, 
  TopBar, 
  BottomBar, 
  Sidebar, 
  Console, 
  MainContent,
  useLayout 
} from './Layout';

describe('Layout Component', () => {
  it('renders with children', () => {
    render(
      <Layout>
        <div>Layout content</div>
      </Layout>
    );
    expect(screen.getByText('Layout content')).toBeInTheDocument();
  });

  it('applies correct base classes', () => {
    render(
      <Layout data-testid="layout">
        <div>Content</div>
      </Layout>
    );
    const layout = screen.getByTestId('layout');
    expect(layout).toHaveClass('h-screen', 'w-full', 'flex', 'flex-col', 'bg-gray-50');
  });

  it('accepts custom className', () => {
    render(
      <Layout className="custom-layout" data-testid="layout">
        <div>Content</div>
      </Layout>
    );
    const layout = screen.getByTestId('layout');
    expect(layout).toHaveClass('custom-layout');
  });
});

describe('ActionBar Component', () => {
  it('renders with children', () => {
    render(
      <ActionBar>
        <button>Action 1</button>
      </ActionBar>
    );
    expect(screen.getByText('Action 1')).toBeInTheDocument();
  });

  it('applies correct base classes', () => {
    render(
      <ActionBar data-testid="action-bar">
        <div>Actions</div>
      </ActionBar>
    );
    const actionBar = screen.getByTestId('action-bar');
    expect(actionBar).toHaveClass('w-12', 'bg-gray-900', 'flex', 'flex-col');
  });
});

describe('TopBar Component', () => {
  it('renders with children', () => {
    render(
      <TopBar>
        <span>Top Bar Content</span>
      </TopBar>
    );
    expect(screen.getByText('Top Bar Content')).toBeInTheDocument();
  });

  it('applies correct base classes', () => {
    render(
      <TopBar data-testid="top-bar">
        <span>Content</span>
      </TopBar>
    );
    const topBar = screen.getByTestId('top-bar');
    expect(topBar).toHaveClass('h-8', 'bg-gray-800', 'text-white', 'flex', 'items-center');
  });
});

describe('BottomBar Component', () => {
  it('renders with children', () => {
    render(
      <BottomBar>
        <span>Bottom Bar Content</span>
      </BottomBar>
    );
    expect(screen.getByText('Bottom Bar Content')).toBeInTheDocument();
  });

  it('applies correct base classes', () => {
    render(
      <BottomBar data-testid="bottom-bar">
        <span>Content</span>
      </BottomBar>
    );
    const bottomBar = screen.getByTestId('bottom-bar');
    expect(bottomBar).toHaveClass('h-6', 'bg-blue-600', 'text-white', 'flex', 'items-center');
  });
});

describe('Sidebar Component', () => {
  it('renders with children', () => {
    render(
      <Layout>
        <Sidebar>
          <div>Sidebar content</div>
        </Sidebar>
      </Layout>
    );
    expect(screen.getByText('Sidebar content')).toBeInTheDocument();
  });

  it('renders left sidebar by default', () => {
    render(
      <Layout>
        <Sidebar data-testid="sidebar">
          <div>Left sidebar</div>
        </Sidebar>
      </Layout>
    );
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveClass('border-r');
  });

  it('renders right sidebar when specified', () => {
    render(
      <Layout>
        <Sidebar side="right" data-testid="sidebar">
          <div>Right sidebar</div>
        </Sidebar>
      </Layout>
    );
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveClass('border-l');
  });

  it('can be collapsed and expanded', () => {
    render(
      <Layout>
        <Sidebar side="left" data-testid="sidebar">
          <div>Collapsible sidebar</div>
        </Sidebar>
      </Layout>
    );
    
    // Find the collapse button
    const collapseButton = screen.getByRole('button');
    expect(collapseButton).toBeInTheDocument();
    
    // Initially expanded
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).not.toHaveClass('w-0');
    
    // Click to collapse
    fireEvent.click(collapseButton);
    expect(sidebar).toHaveClass('w-0');
  });

  it('applies custom width', () => {
    render(
      <Layout>
        <Sidebar width="300px" data-testid="sidebar">
          <div>Custom width</div>
        </Sidebar>
      </Layout>
    );
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveStyle({ width: '300px' });
  });

  it('can be non-collapsible', () => {
    render(
      <Layout>
        <Sidebar collapsible={false}>
          <div>Non-collapsible sidebar</div>
        </Sidebar>
      </Layout>
    );
    
    // Should not have a collapse button
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});

describe('Console Component', () => {
  it('renders with children', () => {
    render(
      <Layout>
        <Console>
          <div>Console output</div>
        </Console>
      </Layout>
    );
    expect(screen.getByText('Console output')).toBeInTheDocument();
  });

  it('applies correct base classes', () => {
    render(
      <Layout>
        <Console data-testid="console">
          <div>Content</div>
        </Console>
      </Layout>
    );
    const console = screen.getByTestId('console');
    expect(console).toHaveClass('bg-gray-900', 'text-green-400', 'font-mono');
  });

  it('can be collapsed and expanded', () => {
    render(
      <Layout>
        <Console data-testid="console">
          <div>Console content</div>
        </Console>
      </Layout>
    );
    
    // Find the collapse button
    const collapseButton = screen.getByRole('button');
    expect(collapseButton).toBeInTheDocument();
    
    // Initially expanded
    const console = screen.getByTestId('console');
    expect(console).not.toHaveClass('h-0');
    
    // Click to collapse
    fireEvent.click(collapseButton);
    expect(console).toHaveClass('h-0');
  });

  it('applies custom height', () => {
    render(
      <Layout>
        <Console height="150px" data-testid="console">
          <div>Custom height</div>
        </Console>
      </Layout>
    );
    const console = screen.getByTestId('console');
    expect(console).toHaveStyle({ height: '150px' });
  });

  it('can be non-collapsible', () => {
    render(
      <Layout>
        <Console collapsible={false}>
          <div>Non-collapsible console</div>
        </Console>
      </Layout>
    );
    
    // Should not have a collapse button
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});

describe('MainContent Component', () => {
  it('renders with children', () => {
    render(
      <MainContent>
        <div>Main content area</div>
      </MainContent>
    );
    expect(screen.getByText('Main content area')).toBeInTheDocument();
  });

  it('applies correct base classes', () => {
    render(
      <MainContent data-testid="main-content">
        <div>Content</div>
      </MainContent>
    );
    const mainContent = screen.getByTestId('main-content');
    expect(mainContent).toHaveClass('flex-1', 'bg-white', 'overflow-hidden');
  });

  it('accepts custom className', () => {
    render(
      <MainContent className="custom-main" data-testid="main-content">
        <div>Content</div>
      </MainContent>
    );
    const mainContent = screen.getByTestId('main-content');
    expect(mainContent).toHaveClass('custom-main');
  });
});

describe('Layout Context', () => {
  const TestComponent = () => {
    const layout = useLayout();
    return (
      <div>
        <button onClick={layout.toggleLeftSidebar}>Toggle Left</button>
        <button onClick={layout.toggleRightSidebar}>Toggle Right</button>
        <button onClick={layout.toggleConsole}>Toggle Console</button>
        <div data-testid="left-state">{layout.leftSidebarCollapsed.toString()}</div>
        <div data-testid="right-state">{layout.rightSidebarCollapsed.toString()}</div>
        <div data-testid="console-state">{layout.consoleCollapsed.toString()}</div>
      </div>
    );
  };

  it('provides layout state and controls', () => {
    render(
      <Layout>
        <TestComponent />
      </Layout>
    );

    // Check initial state
    expect(screen.getByTestId('left-state')).toHaveTextContent('false');
    expect(screen.getByTestId('right-state')).toHaveTextContent('false');
    expect(screen.getByTestId('console-state')).toHaveTextContent('false');

    // Toggle left sidebar
    fireEvent.click(screen.getByText('Toggle Left'));
    expect(screen.getByTestId('left-state')).toHaveTextContent('true');

    // Toggle right sidebar
    fireEvent.click(screen.getByText('Toggle Right'));
    expect(screen.getByTestId('right-state')).toHaveTextContent('true');

    // Toggle console
    fireEvent.click(screen.getByText('Toggle Console'));
    expect(screen.getByTestId('console-state')).toHaveTextContent('true');
  });

  it('throws error when used outside Layout', () => {
    const TestComponentOutside = () => {
      try {
        useLayout();
        return <div>Should not reach here</div>;
      } catch (error) {
        return <div>Error caught: {(error as Error).message}</div>;
      }
    };

    render(<TestComponentOutside />);
    expect(screen.getByText(/useLayout must be used within a Layout component/)).toBeInTheDocument();
  });
});

describe('Full Layout Integration', () => {
  it('renders complete VS Code-like layout', () => {
    render(
      <Layout data-testid="layout">
        <TopBar data-testid="top-bar">
          <span>App Title</span>
        </TopBar>
        
        <div className="flex flex-1">
          <ActionBar data-testid="action-bar">
            <button>Action</button>
          </ActionBar>
          
          <Sidebar side="left" data-testid="left-sidebar">
            <div>Left content</div>
          </Sidebar>
          
          <div className="flex flex-col flex-1">
            <MainContent data-testid="main-content">
              <div>Main editor area</div>
            </MainContent>
            
            <Console data-testid="console">
              <div>Console output</div>
            </Console>
          </div>
          
          <Sidebar side="right" data-testid="right-sidebar">
            <div>Right panel</div>
          </Sidebar>
        </div>
        
        <BottomBar data-testid="bottom-bar">
          <span>Status info</span>
        </BottomBar>
      </Layout>
    );

    // Verify all components are present
    expect(screen.getByTestId('layout')).toBeInTheDocument();
    expect(screen.getByTestId('top-bar')).toBeInTheDocument();
    expect(screen.getByTestId('action-bar')).toBeInTheDocument();
    expect(screen.getByTestId('left-sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('main-content')).toBeInTheDocument();
    expect(screen.getByTestId('console')).toBeInTheDocument();
    expect(screen.getByTestId('right-sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('bottom-bar')).toBeInTheDocument();

    // Verify content is present
    expect(screen.getByText('App Title')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
    expect(screen.getByText('Left content')).toBeInTheDocument();
    expect(screen.getByText('Main editor area')).toBeInTheDocument();
    expect(screen.getByText('Console output')).toBeInTheDocument();
    expect(screen.getByText('Right panel')).toBeInTheDocument();
    expect(screen.getByText('Status info')).toBeInTheDocument();
  });
});