import MessageDisplay from '@/components/MessageDisplay.vue'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios'
import flushPromises from 'flush-promises'

// Con un mock simularemos la llamada a un API usando axios.
// le apsamos la ruta donde viven nuestra funciones de llamadas a api
jest.mock('@/services/axios')

// La llamada a getMessage se hace en el primer test y luego en el segundo, por lo que
// la funcion toHaveBeenCalledTimes, lo anotará como 2 en el segundo test y asi irá subiendo
// a medida que los test aumentan por eso es importante limpiar los mocks.
beforeEach(() =>{
  jest.clearAllMocks()
})

describe('MessageDisplay', () => {
  
  it('Calls getMessage and displays message', async () => {
    // Esta parte simula el api, usando un mock, es decir no llama al api real
    // solo entrega lo que nosotros queremos que entregue
    const mockMessage = "Hello from the db";
    (getMessage as jest.Mock).mockResolvedValueOnce({ text: mockMessage })
    // Recien despues de colocar la simulacion del api, montamos nuestro componmente
    const wrapper = mount(MessageDisplay)

    // Esta parte con flushPromises resuleve la promesa que se genera al inicio, para
    // que esta no tenga que ser probada
    await flushPromises()
    // probamos que getMessage tenga que llamarse una sola vez
    expect(getMessage).toHaveBeenCalledTimes(1)
    // Buscamos el mensaje y verificamos que envio el mensaje que queremos
    const message = wrapper.find('[data-testid="message"]').element.textContent
    expect(message).toEqual(mockMessage)
  })
  it('Displays an error when getMessage call fails', async () => {
    const mockError = 'Un error!!';
    (getMessage as jest.Mock).mockRejectedValueOnce(mockError)
    const wrapper = mount(MessageDisplay)
    
    await flushPromises()
    expect(getMessage).toHaveBeenCalledTimes(1)
    const message = wrapper.find('[data-testid="message-error"]').element.textContent
    expect(message).toEqual(mockError)
  })
})
