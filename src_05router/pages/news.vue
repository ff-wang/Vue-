<template>
  <ul>
    <li v-for="(n,index) in news" :key="n.id">{{n.title}}</li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        news:[
          {id:1,title:'news1'},
          {id:2,title:'news2'},
          {id:3,title:'news3'},
        ]
      }
    }
  }
</script>

<style scoped>

 
</style>
