//事件触发器
const EventEmitter = require('events');
class MyEventEmitter extends EventEmitter {}
const myEmitter = new MyEventEmitter();
myEmitter.on('event', () => {
    console.log('触发事件')
})
myEmitter.emit('event')