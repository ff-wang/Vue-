import  Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count:1 //初始化状态
}
//mutations不能包含异步操作 直接操作state
const mutations = {
  increment(state){
    state.count++
  },
  decrement(state){
    state.count--
  },
}
const actions = {
  incrementIfOdd({commit,state}){
    if (state.count%2===1) {
      commit('increment')
    }
  },
  incrementAsync({commit}){
    setTimeout(() => {
      commit('increment')
    }, 1000);
    
  }
}
const getters = {
  eventOrodd(state){
    return state.count%2===1?'奇数':'偶数'
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})