import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import MyProps from '../components/MyProps.vue'

describe('Props tests', () => {
  it('renders props.message when passed', () => {
    const wrapper = shallowMount(MyProps, {
      props: {
        message: 'Hello, World!',
      },
    })
    // Sử dụng props() để kiểm tra giá trị của props
    expect(wrapper.props('message')).toBe('Hello, World!')

    // Kiểm tra nội dung của phần tử được render
    expect(wrapper.text()).toBe('Hello, World!')
  })
})
