import MessageContainer from '@/components/MessageContainer.vue'
import { mount } from '@vue/test-utils'

// 
const MessageDisplayMock0 = {
  template: '<p v-else data-testid="message">Hello from the db!</p>'
}

describe('MessageContainer', () => {
  it('Wrap MessageDisplay component', () => {
    const wrapper = mount(MessageContainer, {
      stubs: {
        // Usamos stub para reemplazar el componente hijo con el codigo html
        MessageDisplay: MessageDisplayMock0
      }
    })

    const message = wrapper.find('[data-testid="message"]').element.textContent
    expect(message).toEqual('Hello from the db!')
  })
})