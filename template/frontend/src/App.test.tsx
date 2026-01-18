import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'
import { ThemeProvider } from './contexts/ThemeContext'

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>)
}

describe('App', () => {
  it('renders Hello World heading', () => {
    renderWithTheme(<App />)
    const heading = screen.getByText('Hello World')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveClass('text-4xl')
  })

  it('renders ThemeToggle button', () => {
    renderWithTheme(<App />)
    const button = screen.getByRole('button', { name: /toggle theme/i })
    expect(button).toBeInTheDocument()
  })

  it('renders Footer', () => {
    renderWithTheme(<App />)
    const footer = screen.getByText(/built with ❤️/i)
    expect(footer).toBeInTheDocument()
  })
})
