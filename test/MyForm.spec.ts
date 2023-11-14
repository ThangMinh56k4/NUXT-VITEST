import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import MyForm from '../components/MyForm.vue'

describe('MyForm', () => {
  const consoleMock = vi
    .spyOn(console, 'log')
    .mockImplementation((message) => message)

  it('should update name and email fields + should submit the form', async () => {
    const wrapper = mount(MyForm)

    // Tìm các trường input và nhập dữ liệu vào chúng
    const nameInput = wrapper.find('input[name="name"]')
    const emailInput = wrapper.find('input[name="email"]')
    await nameInput.setValue('John Doe')
    await emailInput.setValue('johndoe@example.com')

    // Kiểm tra giá trị của trường input đã được cập nhật
    expect((wrapper.vm as any).name).toBe('John Doe')
    expect((wrapper.vm as any).email).toBe('johndoe@example.com')

    expect((wrapper.vm as any).name).toBe('John Doe')
    expect((wrapper.vm as any).email).toBe('johndoe@example.com')

    // Tìm nút submit và kích hoạt sự kiện submit
    const submitButton = wrapper.find('button[type="submit"]')
    await submitButton.trigger('submit')

    expect(wrapper.emitted('submit')).toBeTruthy()

    // Kiểm tra xem thông báo đã được ghi ra chính xác
    expect(consoleMock).toHaveBeenCalledWith('Name: John Doe')
    expect(consoleMock).toHaveBeenLastCalledWith('Email: johndoe@example.com')
  })
})
