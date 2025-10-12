import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Avatar, AvatarGroup } from './Avatar';

describe('Avatar', () => {
  it('renders with image source', () => {
    render(<Avatar src="/test-image.jpg" alt="Test User" />);
    
    const image = screen.getByRole('img', { name: 'Test User' });
    expect(image).toBeTruthy();
    expect(image.getAttribute('src')).toBe('/test-image.jpg');
    expect(image.getAttribute('alt')).toBe('Test User');
  });

  it('shows fallback when no src provided', () => {
    render(<Avatar alt="John Doe" fallback="JD" />);
    
    expect(screen.getByText('JD')).toBeTruthy();
    expect(screen.queryByRole('img')).toBe(null);
  });

  it('shows fallback from alt text when no explicit fallback', () => {
    render(<Avatar alt="John Doe" />);
    
    expect(screen.getByText('J')).toBeTruthy();
  });

  it('shows fallback when image fails to load', async () => {
    const onError = vi.fn();
    render(<Avatar src="/broken-image.jpg" alt="Test User" fallback="TU" onError={onError} />);
    
    const image = screen.getByRole('img');
    fireEvent.error(image);
    
    await waitFor(() => {
      expect(screen.getByText('TU')).toBeTruthy();
      expect(onError).toHaveBeenCalled();
    });
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(<Avatar alt="Test" size="xs" data-testid="avatar" />);
    const avatar = screen.getByTestId('avatar');
    const firstChild = avatar.firstChild as HTMLElement;
    expect(firstChild?.className).toContain('w-6');
    expect(firstChild?.className).toContain('h-6');
    
    rerender(<Avatar alt="Test" size="lg" data-testid="avatar" />);
    const updatedFirstChild = avatar.firstChild as HTMLElement;
    expect(updatedFirstChild?.className).toContain('w-12');
    expect(updatedFirstChild?.className).toContain('h-12');
  });

  it('renders different size variants', () => {
    const { rerender } = render(<Avatar fallback="AB" size="sm" data-testid="avatar" />);
    const avatarElement = screen.getByTestId('avatar').firstChild as HTMLElement;
    expect(avatarElement.className).toContain('w-8');
    expect(avatarElement.className).toContain('h-8');

    rerender(<Avatar fallback="AB" size="lg" data-testid="avatar" />);
    const lgElement = screen.getByTestId('avatar').firstChild as HTMLElement;
    expect(lgElement.className).toContain('w-12');
    expect(lgElement.className).toContain('h-12');
  });

  it('renders different shape variants', () => {
    const { rerender } = render(<Avatar fallback="AB" shape="circle" data-testid="avatar" />);
    const circleElement = screen.getByTestId('avatar').firstChild as HTMLElement;
    expect(circleElement.className).toContain('rounded-full');

    rerender(<Avatar fallback="AB" shape="rounded" data-testid="avatar" />);
    const roundedElement = screen.getByTestId('avatar').firstChild as HTMLElement;
    expect(roundedElement.className).toContain('rounded-md');

    rerender(<Avatar fallback="AB" shape="square" data-testid="avatar" />);
    const squareElement = screen.getByTestId('avatar').firstChild as HTMLElement;
    expect(squareElement.className).not.toContain('rounded-full');
    expect(squareElement.className).not.toContain('rounded-md');
  });

  it('renders different variants', () => {
    const { rerender } = render(<Avatar fallback="AB" variant="default" data-testid="avatar" />);
    const defaultElement = screen.getByTestId('avatar').firstChild as HTMLElement;
    expect(defaultElement.className).toContain('bg-gray-100');
    expect(defaultElement.className).toContain('text-gray-600');

    rerender(<Avatar fallback="AB" variant="soft" data-testid="avatar" />);
    const softElement = screen.getByTestId('avatar').firstChild as HTMLElement;
    expect(softElement.className).toContain('bg-blue-100');
    expect(softElement.className).toContain('text-blue-600');

    rerender(<Avatar fallback="AB" variant="outline" data-testid="avatar" />);
    const outlineElement = screen.getByTestId('avatar').firstChild as HTMLElement;
    expect(outlineElement.className).toContain('bg-white');
    expect(outlineElement.className).toContain('border-2');
  });  it('renders status indicator when provided', () => {
    render(<Avatar src="/test.jpg" alt="Test" status="online" />);
    
    const statusIndicator = screen.getByLabelText('Status: online');
    expect(statusIndicator).toBeTruthy();
    expect(statusIndicator.className).toContain('bg-green-500');
  });

  it('renders custom status color', () => {
    render(<Avatar alt="Test" statusColor="#8b5cf6" data-testid="avatar" />);
    
    const statusIndicator = screen.getByTestId('avatar').querySelector('[style*="background-color"]');
    expect(statusIndicator).toBeTruthy();
    if (statusIndicator) {
      const style = (statusIndicator as HTMLElement).style.backgroundColor;
      expect(style).toBe('rgb(139, 92, 246)');
    }
  });

  it('applies custom className', () => {
    render(<Avatar alt="Test" className="custom-class" data-testid="avatar" />);
    
    const avatar = screen.getByTestId('avatar');
    expect(avatar.className).toContain('custom-class');
  });

  it('handles loading state correctly', () => {
    render(<Avatar src="/slow-image.jpg" alt="Test" fallback="⟳" />);
    
    // Should show fallback initially (images don't load in test environment)
    expect(screen.getByText('⟳')).toBeTruthy();
    
    // Verify image element exists but is hidden during loading
    const img = screen.getByRole('img');
    expect(img.className).toContain('opacity-0');
  });
});

describe('AvatarGroup', () => {
  const mockAvatars = [
    <Avatar key="1" alt="User 1" fallback="U1" />,
    <Avatar key="2" alt="User 2" fallback="U2" />,
    <Avatar key="3" alt="User 3" fallback="U3" />,
    <Avatar key="4" alt="User 4" fallback="U4" />,
    <Avatar key="5" alt="User 5" fallback="U5" />,
    <Avatar key="6" alt="User 6" fallback="U6" />,
  ];

  it('renders all avatars when count is within max limit', () => {
    render(<AvatarGroup max={6}>{mockAvatars}</AvatarGroup>);
    
    expect(screen.getByText('U1')).toBeTruthy();
    expect(screen.getByText('U2')).toBeTruthy();
    expect(screen.getByText('U3')).toBeTruthy();
    expect(screen.getByText('U4')).toBeTruthy();
    expect(screen.getByText('U5')).toBeTruthy();
    expect(screen.getByText('U6')).toBeTruthy();
  });

  it('shows overflow count when exceeding max limit', () => {
    render(<AvatarGroup max={3}>{mockAvatars}</AvatarGroup>);
    
    // Should show first 3 avatars
    expect(screen.getByText('U1')).toBeTruthy();
    expect(screen.getByText('U2')).toBeTruthy();
    expect(screen.getByText('U3')).toBeTruthy();
    
    // Should show overflow count
    expect(screen.getByText('+3')).toBeTruthy();
    
    // Should not show remaining avatars
    expect(screen.queryByText('U4')).toBe(null);
    expect(screen.queryByText('U5')).toBe(null);
    expect(screen.queryByText('U6')).toBe(null);
  });

  it('applies size to all avatars', () => {
    render(
      <AvatarGroup size="lg" data-testid="avatar-group">
        <Avatar alt="User 1" fallback="U1" />
        <Avatar alt="User 2" fallback="U2" />
      </AvatarGroup>
    );
    
    const avatars = screen.getAllByText(/U[12]/);
    avatars.forEach(avatar => {
      const avatarDiv = avatar.closest('div');
      expect(avatarDiv?.className).toContain('w-12');
      expect(avatarDiv?.className).toContain('h-12');
    });
  });

  it('applies spacing classes correctly', () => {
    const { rerender } = render(
      <AvatarGroup spacing="tight" data-testid="avatar-group">
        {mockAvatars.slice(0, 2)}
      </AvatarGroup>
    );
    expect(screen.getByTestId('avatar-group').className).toContain('-space-x-1');
    
    rerender(
      <AvatarGroup spacing="normal" data-testid="avatar-group">
        {mockAvatars.slice(0, 2)}
      </AvatarGroup>
    );
    expect(screen.getByTestId('avatar-group').className).toContain('-space-x-2');
    
    rerender(
      <AvatarGroup spacing="loose" data-testid="avatar-group">
        {mockAvatars.slice(0, 2)}
      </AvatarGroup>
    );
    expect(screen.getByTestId('avatar-group').className).toContain('space-x-1');
  });

  it('applies ring classes to avatars', () => {
    render(
      <AvatarGroup>
        <Avatar alt="User 1" fallback="U1" />
      </AvatarGroup>
    );
    
    const avatar = screen.getByText('U1');
    // The ring classes are applied to the Avatar's outer container (grandparent of the text)
    const avatarContainer = avatar.closest('.ring-2');
    expect(avatarContainer).toBeTruthy();
    expect(avatarContainer?.className).toContain('ring-white');
  });

  it('preserves individual avatar props', () => {
    render(
      <AvatarGroup>
        <Avatar alt="User 1" fallback="U1" size="sm" />
        <Avatar alt="User 2" fallback="U2" />
      </AvatarGroup>
    );
    
    // First avatar should keep its sm size
    const firstAvatar = screen.getByText('U1').closest('div');
    expect(firstAvatar?.className).toContain('w-8');
    expect(firstAvatar?.className).toContain('h-8');
  });

  it('applies custom className', () => {
    render(
      <AvatarGroup className="custom-group" data-testid="avatar-group">
        {mockAvatars.slice(0, 2)}
      </AvatarGroup>
    );
    
    expect(screen.getByTestId('avatar-group').className).toContain('custom-group');
  });

  it('handles empty children gracefully', () => {
    render(<AvatarGroup data-testid="avatar-group" />);
    
    const group = screen.getByTestId('avatar-group');
    expect(group).toBeTruthy();
    expect(group.children).toHaveLength(0);
  });
});