/* 
自定义全局事件总线对象模块
*/

(function (window) {
  const eventBus = {}

  //保存所有待处理的回调函数的容器
  let callbackContainer = {}
  // {
  //   "on":[add1,add2],
  //   "smit:[]
  // }

  eventBus.on = function(eventName, callback){
    let callbacks = callbackContainer[eventName]
    if (!callbacks) {
      callbacks = []
      callbackContainer[eventName] = callbacks
    }
    callbacks.push(callback)
  }

  //分发事件
  eventBus.emit = function(eventName,data){
    const callbacks = callbackContainer[eventName]
    if (callbacks) {
      callbacks.forEach(callback => {
        callback(data)
      });
    }
  }
  //解绑事件
  eventBus.off = function(eventName){
    if (eventName===undefined) {
      callbackContainer = {}
    }else{
      delete callbackContainer[eventName]
    }
  }
  window.eventBus = eventBus
})(window)