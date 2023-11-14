import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import MyInput from '../components/MyInput.vue'

describe('Key event tests', () => {
  it('------Quantity is zero by default------', () => {
    const wrapper = mount(MyInput)
    const { vm } = wrapper as any
    expect(vm.quantity).toBe(0)
  })

  it('------Up arrow key increments quantity by 1------', async () => {
    const wrapper = mount(MyInput)
    await wrapper.trigger('keydown.up')
    const { vm } = wrapper as any
    expect(vm.quantity).toBe(1)
  })

  it('------Down arrow key decrements quantity by 1------', async () => {
    const wrapper = mount(MyInput)
    const { vm } = wrapper as any
    vm.quantity = 5
    await wrapper.trigger('keydown.down')
    expect(vm.quantity).toBe(4)
  })

  it('------Enter sets quantity to 13------', async () => {
    const wrapper = mount(MyInput)
    const { vm } = wrapper as any
    await wrapper.trigger('keydown.enter')
    expect(vm.quantity).toBe(13)
  })

  it('------Space increments quantity by 13------', async () => {
    const wrapper = mount(MyInput)
    const { vm } = wrapper as any
    await wrapper.trigger('keydown.space')
    expect(vm.quantity).toBe(13)
  })

  it('------Delete sets quantity to 0------', async () => {
    const wrapper = mount(MyInput)
    const { vm } = wrapper as any
    vm.quantity = 5
    await wrapper.trigger('keydown', { keyCode: 8 })
    expect(vm.quantity).toBe(0)
  })
})
