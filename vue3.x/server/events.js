var events = require('events');
var eventsEmitter = new events.EventEmitter();//创建eventsEmitter对象
var fn = function(age1,age2){
     console.log(parseInt(age1)+parseInt(age2)); 
}
//注册banner监听器
eventsEmitter.on('banner',fn)
//执行banner监听器
eventsEmitter.emit('banner','2','2');