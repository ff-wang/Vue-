import Vue from 'vue'
import App from './App'
import store from './vuex/store'

new Vue({
  components:{
    App:App
  },
  template:'<App/>',
  store
}).$mount('#root')