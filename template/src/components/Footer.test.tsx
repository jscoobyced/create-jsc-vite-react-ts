import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders footer text', () => {
    render(<Footer />)
    const footerText = screen.getByText(/built with ❤️ by IndyTheDog/i)
    expect(footerText).toBeInTheDocument()
  })

  it('has correct styling classes', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('text-center')
  })
})
