import AppHeader from '@/components/AppHeader.vue'
import { mount } from '@vue/test-utils'

describe('AppHeader', () => {

  // Aqui vemos un ejemplo de como podemos probar que un determinado elemento exista o no.
  test('If user is no logged in, do not show logout button', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('button').isVisible()).toBe(false)
  })
})