import AppHeader from '@/components/AppHeader.vue'
import { mount } from '@vue/test-utils'

describe('AppHeader', () => {

  // Aqui vemos un ejemplo de como podemos probar que un determinado elemento exista o no.
  test('If user is no logged in, do not show logout button', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('button').isVisible()).toBe(false)
  })

  test('If user is no logged in, do not show logout button', () => {
    const wrapper = mount(AppHeader)
    // Esto falla porque con mount ya renderizamos el DOM, y luego realizamos el cambio
    // Pero estas llamadas no son asincronas, por lo que hay un tiempo hasta que el boton sea visible
    wrapper.setData({ loggedIn: true })
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})