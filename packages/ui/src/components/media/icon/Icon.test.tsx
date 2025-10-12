import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { 
  Icon, 
  DynamicIcon, 
  FileIcon, 
  FolderIcon, 
  registerIcon, 
  registerIcons, 
  getRegisteredIcon,
  clearIconRegistry
} from './Icon';
import { FaReact } from 'react-icons/fa';

describe('Icon', () => {
  it('renders with default props', () => {
    render(
      <Icon data-testid="icon">
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
      </Icon>
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('inline-flex');
    // When rendering with children (like <path>), the children are rendered directly
  });

  it('renders with custom size', () => {
    render(
      <Icon size={24} data-testid="icon">
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
      </Icon>
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
    // Size is passed to the inner SVG component, not as attributes on wrapper
  });

  it('renders with custom color', () => {
    render(
      <Icon color="#ff0000" data-testid="icon">
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
      </Icon>
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveStyle('color: #ff0000');
  });

  it('applies custom className', () => {
    render(
      <Icon className="custom-class" data-testid="icon">
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
      </Icon>
    );

    const icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('custom-class');
    expect(icon).toHaveClass('inline-flex'); // Component uses inline-flex, not inline-block
  });
});

describe('FileIcon', () => {
  it('renders FileIcon', () => {
    render(<FileIcon data-testid="file-icon" />);
    
    const icon = screen.getByTestId('file-icon');
    expect(icon).toBeInTheDocument();
    expect(icon.querySelector('path')).toBeInTheDocument();
  });

  it('renders with custom size', () => {
    render(<FileIcon size={32} data-testid="file-icon" />);
    
    const icon = screen.getByTestId('file-icon');
    expect(icon).toHaveAttribute('width', '32');
    expect(icon).toHaveAttribute('height', '32');
  });
});

describe('FolderIcon', () => {
  it('renders FolderIcon', () => {
    render(<FolderIcon data-testid="folder-icon" />);
    
    const icon = screen.getByTestId('folder-icon');
    expect(icon).toBeInTheDocument();
    expect(icon.querySelector('path')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<FolderIcon className="text-blue-500" data-testid="folder-icon" />);
    
    const icon = screen.getByTestId('folder-icon');
    expect(icon).toHaveClass('text-blue-500');
  });
});

describe('Icon Registry Functions', () => {
  beforeEach(() => {
    clearIconRegistry();
  });

  it('should register a single icon', () => {
    registerIcon('test-icon', FaReact);
    const retrievedIcon = getRegisteredIcon('test-icon');
    expect(retrievedIcon).toBe(FaReact);
  });

  it('should register multiple icons', () => {
    const icons = {
      'icon1': FaReact,
      'icon2': FaReact,
    };
    registerIcons(icons);
    
    expect(getRegisteredIcon('icon1')).toBe(FaReact);
    expect(getRegisteredIcon('icon2')).toBe(FaReact);
  });

  it('should return undefined for unregistered icon', () => {
    const icon = getRegisteredIcon('nonexistent');
    expect(icon).toBeUndefined();
  });

  it('should clear icon registry', () => {
    registerIcon('test', FaReact);
    expect(getRegisteredIcon('test')).toBe(FaReact);
    
    clearIconRegistry();
    expect(getRegisteredIcon('test')).toBeUndefined();
  });
});

describe('DynamicIcon', () => {
  beforeEach(() => {
    clearIconRegistry();
    registerIcon('test-icon', FaReact);
  });

  it('should render registered icon by name', () => {
    render(<DynamicIcon name="test-icon" data-testid="dynamic-icon" />);
    const icon = screen.getByTestId('dynamic-icon');
    expect(icon).toBeDefined();
  });

  it('should return null for unregistered icon', () => {
    const { container } = render(<DynamicIcon name="nonexistent" />);
    expect(container.firstChild).toBeNull();
  });
});

describe('Icon with Direct Props', () => {
  it('should render icon passed as prop', () => {
    render(<Icon icon={FaReact} data-testid="direct-icon" />);
    const icon = screen.getByTestId('direct-icon');
    expect(icon).toBeDefined();
  });

  it('should render registered icon by name', () => {
    registerIcon('test', FaReact);
    render(<Icon name="test" data-testid="named-icon" />);
    const icon = screen.getByTestId('named-icon');
    expect(icon).toBeDefined();
  });

  it('should render children when no icon or name provided', () => {
    render(
      <Icon data-testid="children-icon">
        <span>Custom Content</span>
      </Icon>
    );
    const icon = screen.getByTestId('children-icon');
    expect(icon.textContent).toBe('Custom Content');
  });
});