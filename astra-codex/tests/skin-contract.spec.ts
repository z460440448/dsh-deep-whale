import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const css = readFileSync(new URL('../src/client/astra-codex.module.css', import.meta.url), 'utf8')

describe('astra codex skin contract', () => {
  it('scopes every appearance to the active skin', () => {
    expect(css).toContain('body[data-dsh-astra-codex]')
  })

  it('supports the host dark appearance without owning theme state', () => {
    expect(css).toContain('body[data-dsh-astra-codex][data-ds-dark-theme]')
  })

  it('supports reduced motion and transparency', () => {
    expect(css).toContain('prefers-reduced-motion: reduce')
    expect(css).toContain('prefers-reduced-transparency: reduce')
  })
})
