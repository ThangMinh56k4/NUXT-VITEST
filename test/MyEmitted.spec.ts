import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import MyEmitted from '../components/MyEmitted.vue'

describe('Emitted tests', () => {
  it('emits counter-incremented event', async () => {
    const wrapper = shallowMount(MyEmitted)

    // Kích vào button để gọi phương thức incrementCounter và phát ra sự kiện
    await wrapper.find('button').trigger('click')

    // Kiểm tra xem sự kiện đã được phát ra hay không
    expect(wrapper.emitted('counter-incremented')).toBeTruthy()

    // Lấy danh sách các lần sự kiện được phát ra
    const events = wrapper.emitted('counter-incremented') as number[]

    // Kiểm tra xem có một lần sự kiện được phát ra không
    expect(events).toHaveLength(1)

    // Kiểm tra tham số của sự kiện
    expect(events[0]).toEqual([1])
  })
})
