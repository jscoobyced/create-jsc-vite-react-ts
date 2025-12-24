import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, it, expect, beforeEach } from 'vitest'
import { ThemeToggle } from './ThemeToggle'
import { ThemeProvider } from '../contexts/ThemeContext'

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>)
}

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('renders theme toggle button', () => {
    renderWithTheme(<ThemeToggle />)
    const button = screen.getByRole('button', { name: /toggle theme/i })
    expect(button).toBeInTheDocument()
  })

  it('displays moon icon for light theme', () => {
    renderWithTheme(<ThemeToggle />)
    const button = screen.getByRole('button', { name: /toggle theme/i })
    expect(button).toHaveTextContent('🌙')
  })

  it('toggles theme when clicked', async () => {
    const user = userEvent.setup()
    renderWithTheme(<ThemeToggle />)
    const button = screen.getByRole('button', { name: /toggle theme/i })

    expect(button).toHaveTextContent('🌙')

    await user.click(button)

    expect(button).toHaveTextContent('☀️')
  })

  it('toggles theme back and forth', async () => {
    const user = userEvent.setup()
    renderWithTheme(<ThemeToggle />)
    const button = screen.getByRole('button', { name: /toggle theme/i })

    expect(button).toHaveTextContent('🌙')

    await user.click(button)
    expect(button).toHaveTextContent('☀️')

    await user.click(button)
    expect(button).toHaveTextContent('🌙')
  })
})
