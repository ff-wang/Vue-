(function (window) {
  //定义PubSub对象
  const PubSub = {}

  let callbackContainer = {}
  let id = 0
  //订阅
  PubSub.subscribe = function (msg,callback) {
    //如果没有此消息名msg,则进行添加到callbackContainer
    let  callbacks= callbackContainer[msg]
    if (!callbacks) {
      callbackContainer[msg] = callbacks = {}
    }
    const token = 'uid_'+ ++id
    callbacks[token] = callback
    return token
  }

  //异步分发
  PubSub.publish = function (msg,data) {
    let  callbacks= callbackContainer[msg]
    if (callbacks) {
      Object.values(callbacks).forEach(callback=>{
        setTimeout(() => {
          callback(msg,data)
        }, 1000);  
      })
    }
  }

  //同步分发
  PubSub.publishSync = function (msg,data) {
    let  callbacks= callbackContainer[msg]
    if (callbacks) {
      Object.values(callbacks).forEach(callback=>{
        callback(msg,data)
      })
    }
  }
  //删除
  PubSub.unsubscribe = function (msg) {
    if (msg===undefined) {
      callbackContainer = {}
    }else if(typeof msg==='string'&&msg.indexOf('uid_')===0){
      Object.values(callbackContainer).forEach(callbacks=>{
        delete callbacks[msg]
      })
    }else{
      delete callbackContainer[msg]
    }
  }


  window.PubSub = PubSub
})(window)