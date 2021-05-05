const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('message', (message) =>
  console.log('Message: ', message)
)
emitter.on('error', (error) =>
  console.log('Error: ', error)
)

emitter.emit('message', 'Node js EventEmitter in action.')


const emitter2 = new EventEmitter()

emitter2.once('message', (message) =>
  console.log('Message: ', message)
) //выполнится один раз

emitter2.emit('message', 'First')
emitter2.emit('message', 'Second')

class EmitterOne extends EventEmitter {}
class EmitterTwo extends EventEmitter {}

const emitterOneInstance = new EmitterOne()
const emitterTwoInstance = new EmitterTwo()

emitterOneInstance.on('message', (message) =>
  console.log('Emitter one message: ', message)
)
emitterOneInstance.on('error', (error) =>
  console.log('Emitter one error: ', error)
)

emitterTwoInstance.on('message', (message) =>
  console.log('Emitter two message: ', message)
)
emitterTwoInstance.on('error', (error) =>
  console.log('Emitter two error: ', error)
)

emitterOneInstance.emit(
  'message',
  'Node js EventEmitter in action.'
)

//remove
const messageListener = (message) =>
  console.log('Message: messageListener ', message)

emitter.on('message', messageListener)

emitter.emit('message', 'First')

emitter.removeListener('message', messageListener)

emitter.emit('message', 'Second')

emitter.removeAllListeners(['message'])

emitter.emit('message', 'Second')
