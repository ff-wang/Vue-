<template>
  <div>
    <p>click {{count}} times count is{{eventOrodd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        count:0
      }
    },
    computed:{
      eventOrodd(){
        return this.count%2===1?'奇数':'偶数'
      }
    }
  }
</script>

<style scoped>

 
</style>
