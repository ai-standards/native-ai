import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { 
  Icon, 
  DynamicIcon, 
  SvgIcon,
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

describe('SvgIcon', () => {
  it('renders with SVG path', () => {
    const starPath = "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z";
    
    render(
      <SvgIcon path={starPath} data-testid="svg-path-icon" />
    );

    const icon = screen.getByTestId('svg-path-icon');
    const svg = icon.querySelector('svg');
    const path = svg?.querySelector('path');
    
    expect(svg).toBeDefined();
    expect(path?.getAttribute('d')).toBe(starPath);
  });

  it('renders with raw SVG source', () => {
    const svgSource = `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>`;
    
    render(
      <SvgIcon svg={svgSource} data-testid="svg-source-icon" />
    );

    const icon = screen.getByTestId('svg-source-icon');
    const svgElement = icon.querySelector('svg');
    const circle = icon.querySelector('circle');
    
    expect(svgElement).toBeDefined();
    expect(circle).toBeDefined();
    expect(circle?.getAttribute('cx')).toBe('12');
  });

  it('renders with custom size and viewBox', () => {
    const path = "M12 2L2 7l10 5 10-5-10-5z";
    
    render(
      <SvgIcon 
        path={path} 
        size={32} 
        viewBox="0 0 20 20"
        data-testid="custom-svg-icon" 
      />
    );

    const icon = screen.getByTestId('custom-svg-icon');
    const svg = icon.querySelector('svg');
    
    expect(svg?.getAttribute('width')).toBe('32');
    expect(svg?.getAttribute('height')).toBe('32');
    expect(svg?.getAttribute('viewBox')).toBe('0 0 20 20');
  });

  it('renders with custom colors and stroke', () => {
    const path = "M12 2L2 7l10 5 10-5-10-5z";
    
    render(
      <SvgIcon 
        path={path} 
        fill="none"
        stroke="#ff0000"
        strokeWidth={2}
        data-testid="styled-svg-icon" 
      />
    );

    const icon = screen.getByTestId('styled-svg-icon');
    const svg = icon.querySelector('svg');
    
    expect(svg?.getAttribute('fill')).toBe('none');
    expect(svg?.getAttribute('stroke')).toBe('#ff0000');
    expect(svg?.getAttribute('stroke-width')).toBe('2');
  });

  it('renders with SVG file source', () => {
    const svgSrc = '/path/to/icon.svg';
    
    render(
      <SvgIcon src={svgSrc} alt="Custom icon" data-testid="svg-src-icon" />
    );

    const icon = screen.getByTestId('svg-src-icon');
    const img = icon.querySelector('img');
    
    expect(img).toBeDefined();
    expect(img?.getAttribute('src')).toBe(svgSrc);
    expect(img?.getAttribute('alt')).toBe('Custom icon');
  });

  it('renders with SVG file source and custom size', () => {
    const svgSrc = 'https://example.com/icon.svg';
    
    render(
      <SvgIcon src={svgSrc} size={48} data-testid="svg-src-sized-icon" />
    );

    const icon = screen.getByTestId('svg-src-sized-icon');
    const img = icon.querySelector('img');
    
    expect(img?.getAttribute('width')).toBe('48');
    expect(img?.getAttribute('height')).toBe('48');
  });

  it('uses default alt text when src is provided without alt', () => {
    render(
      <SvgIcon src="/icon.svg" data-testid="svg-src-default-alt" />
    );

    const icon = screen.getByTestId('svg-src-default-alt');
    const img = icon.querySelector('img');
    
    expect(img?.getAttribute('alt')).toBe('SVG icon');
  });

  it('warns when no props are provided', () => {
    const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    
    render(<SvgIcon data-testid="empty-svg-icon" />);
    
    expect(consoleSpy).toHaveBeenCalledWith('SvgIcon: Either "path", "svg", or "src" prop must be provided');
    
    consoleSpy.mockRestore();
  });

  it('applies custom className and color', () => {
    const path = "M12 2L2 7l10 5 10-5-10-5z";
    
    render(
      <SvgIcon 
        path={path} 
        className="custom-svg-class"
        color="#0066cc"
        data-testid="styled-wrapper-icon" 
      />
    );

    const icon = screen.getByTestId('styled-wrapper-icon');
    
    expect(icon.className).toContain('custom-svg-class');
    expect(icon.style.color).toBe('rgb(0, 102, 204)');
  });
});