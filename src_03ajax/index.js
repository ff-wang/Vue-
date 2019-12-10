import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
//声明使用Vue插件
Vue.use(VueResource)
new Vue({
  beforeCreate(){
    Vue.prototype.$eventBus = this
  },
  components:{
    App:App
  },
  template:'<App/>'
}).$mount('#root')