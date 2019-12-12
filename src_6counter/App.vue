<template>
  <div>
    <p>click {{count}} times, count is{{eventOrodd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
  export default {
    computed:{
      // count(){
      //  return this.$store.state.count
      // },
      // eventOrodd(){
      //   return this.$store.getters.eventOrodd
      // }
      ...mapState(['count']),
      ...mapGetters(['eventOrodd'])
    },
    methods:{
      // increment(){
      //   this.$store.commit('increment')
      // },
      // decrement(){
      //   this.$store.commit('decrement')
      // },
      // incrementIfOdd(){
      //   this.$store.dispatch('incrementIfOdd')
      // },
      // incrementAsync(){
      //   this.$store.dispatch('incrementAsync')
      // }
      ...mapMutations(['increment','decrement']),
      ...mapActions(['incrementIfOdd','incrementAsync'])
    }
  }
</script>

<style scoped>

 
</style>
