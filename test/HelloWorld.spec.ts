// tests/HelloWorld.spec.ts
import { describe, it, expect, vi } from 'vitest'

describe('HelloWorld', () => {
  const consoleMock = vi
    .spyOn(console, 'log')
    .mockImplementation((message) => message)

  it('should log `sample output`', () => {
    console.log('sample output')
    expect(consoleMock).toHaveBeenCalledOnce()
    expect(consoleMock).toHaveBeenLastCalledWith('sample output')
  })
})
