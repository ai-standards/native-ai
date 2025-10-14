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
    
    // Check that each card has its description text
    expect(screen.getByText('Set up your project structure, routes, and plugins.')).toBeInTheDocument()
    expect(screen.getByText('Build your interface with ready-to-use components.')).toBeInTheDocument()
    expect(screen.getByText('Connect to models and build AI-powered features.')).toBeInTheDocument()
    
    // Check that all three GitHub buttons are present
    const githubButtons = screen.getAllByText('View on GitHub')
    expect(githubButtons).toHaveLength(3)
  })
})