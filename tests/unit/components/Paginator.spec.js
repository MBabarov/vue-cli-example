import { shallowMount } from '@vue/test-utils'
import Paginator from '@/components/Paginator.vue'

describe('Paginator.vue', () => {
  it('show prop by default to be false', () => {
    const wrapper = shallowMount(Paginator, {
      propsData: {
        amount: 10,
        currentRange: 5
      }
    })
    expect(wrapper.vm.currentStep).toBe(1)
  })
  it('currentStep should update to 1 if currentRange was updated', () => {
    const wrapper = shallowMount(Paginator, {
      propsData: {
        amount: 10,
        currentRange: 5
      }
    })
    wrapper.setData({currentStep: 2})
    expect(wrapper.vm.currentStep).toBe(2)
    wrapper.setProps({currentRange: 2})
    expect(wrapper.vm.currentStep).toBe(1)
  })
  it('currentStep should update to 1 if amount was updated', () => {
    const wrapper = shallowMount(Paginator, {
      propsData: {
        amount: 10,
        currentRange: 5
      }
    })
    wrapper.setData({currentStep: 2})
    expect(wrapper.vm.currentStep).toBe(2)
    wrapper.setProps({amount: 2})
    expect(wrapper.vm.currentStep).toBe(1)
  })
})
