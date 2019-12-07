<template>
  <div>
    <h2>BlogList</h2>
    <ul>
      <Blog v-for="(blog, index) in blogs" :key="blog.id" :hh="blog"/>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import Blog from './blog'
  export default {
    data() {
      return {
        blogs:[
          {id:1,title:'hhhh'},
          {id:2,title:'xxx'},
          {id:3,title:'aaaa'}
        ]
      }
    },
    //局部注册
    components:{
      Blog
    }
  }
</script>

<style scoped>

 
</style>
