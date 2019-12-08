// import logo from './assets/imgs/13.jpg'
// import  './assets/css/my.css'

// const image = new Image()
// image.src = logo
// document.body.appendChild(image)
// document.getElementById('root').innerHTML = '<h1>Hello222</h1>'

import Vue from 'vue'
import App from './App'
new Vue({
  // el:'#root',
  beforeCreate(){
    Vue.prototype.$eventBus = this
  },
  components:{
    App:App
  },
  template:'<App/>'

}).$mount('#root')