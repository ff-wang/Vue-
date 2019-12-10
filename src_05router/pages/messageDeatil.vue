<template>
  <div>
    <!-- ID:{{$route.params.id}},  通过props传参-->
    ID:{{id}}, 
    <br/>
    TITLE:{{deatil.title}},<br/>
    CONTENT:{{deatil.content}}
  </div>
</template>

<script type="text/ecmascript-6">
  const messageDeatil = [
    {id: 1, title: 'message1', content: 'message content001'},
    {id: 2, title: 'message2', content: 'message content002'},
    {id: 3, title: 'message3', content: 'message content003'},
  ]

  export default {
    props:['id'],
    data(){
      return {
        deatil:{}
      }
    },
    mounted(){
      setTimeout(() => {
        console.log(this.$route.params.id);
        //获取当前id
        // const id = this.$route.params.id*1
        const id = this.id*1
        this.deatil = messageDeatil.find(deatil=>deatil.id===id)
      }, 1000);
    },
    watch:{
      //当请求参数发生变化时，内部制定新的$route属性
      '$route'(to,from){
        setTimeout(() => {
          const id = to.params.id*1
          this.deatil = messageDeatil.find(deatil=>deatil.id===id)
        }, 1000);
      }
    }
    
  }
</script>

<style scoped>

 
</style>
