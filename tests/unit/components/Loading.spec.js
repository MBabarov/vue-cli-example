import { shallowMount } from '@vue/test-utils'
import Loading from '@/components/Loading.vue'

describe('Loading.vue', () => {
  it('show prop by default to be false', () => {
    const wrapper = shallowMount(Loading)
    expect(wrapper.props('show')).toBe(false)
  })
  describe('renders by default ', () => {
    const wrapper = shallowMount(Loading, {
      propsData: { show: true }
    })
    it('list', () => {
      expect(wrapper.find('ul').classes('bokeh')).toBe(true)
    })
    it('with 3 items', () => {
      expect(wrapper.findAll('li').length).toBe(3)
    })
  })
})
