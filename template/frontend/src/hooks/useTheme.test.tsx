import { renderHook } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { useTheme } from './useTheme'
import { ThemeProvider } from '../contexts/ThemeContext'

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('throws error when used outside ThemeProvider', () => {
    expect(() => {
      renderHook(() => useTheme())
    }).toThrow('useTheme must be used within a ThemeProvider')
  })

  it('returns theme and toggleTheme function', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    })

    expect(result.current).toHaveProperty('theme')
    expect(result.current).toHaveProperty('toggleTheme')
    expect(typeof result.current.toggleTheme).toBe('function')
  })

  it('starts with light theme by default', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    })

    expect(result.current.theme).toBe('light')
  })
})
