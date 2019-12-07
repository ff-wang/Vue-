
<template>
  <div class="example">
    <h2>{{ msg }}</h2>
    <Blogs/>
  </div>
</template>

<script>
import Blogs from './components/Blogs'
export default {
  
  data () {
    return {
      msg: 'Hello world!zzzz'
    }
  },
  components:{
    Blogs
  }
  
}
</script>

<style scoped>
  h2{
    color:pink
  }
</style>
