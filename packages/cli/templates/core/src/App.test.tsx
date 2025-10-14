import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the page', () => {
    render(<App />)
    expect(screen.getByText('Welcome to NativeAI')).toBeInTheDocument()
  })

  it('renders the three cards', () => {
    render(<App />)
    
    // Check that all three card headings are present
    expect(screen.getByRole('heading', { name: 'Workspace' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'UI' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'AI' })).toBeInTheDocument()
    
    // Check that all three GitHub buttons are present
    const githubButtons = screen.getAllByText('View on GitHub')
    expect(githubButtons).toHaveLength(3)
  })
})