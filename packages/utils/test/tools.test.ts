import { describe, expect, it } from 'vitest'
import { isStr } from '../src'

describe('tools', () => {
  it('should be true', () => {
    expect(isStr('')).toBe(true)
    expect(isStr(1)).toMatchInlineSnapshot('false')
  })
})
