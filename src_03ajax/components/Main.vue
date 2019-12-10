<template>
  
    <h1 v-if="firstView">请输入搜索内容</h1>
    <h1 v-else-if="isLoading">isLoading......</h1>
    <h1 v-else-if="errorMsg">{{errorMsg}}</h1>
    <div class="row" v-else>
      <div class="card" v-for="(user,index) in users" :key="user.name">
        <a href="user.url" target="_blank">
          <img src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.username}}</p>
      </div> 
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  export default {
    data(){
      return{
        firstView:true,
        isLoading:false,
        users:[],
        errorMsg:''
      }
    },
    mounted(){
      this.$eventBus.$on('search',serachName=>{
        //请求中
        this.firstView = false
        this.isLoading = true
        //发送ajax请求
        axios('https://api.github.com/search/users',{params:{q:serachName}})
        .then(response=>{
          const result  = response.data
          const users = result.items.map(item=>({
            username: item.login,
            url: item.html_url,
            avatar_url: item.avatar_url 
          }))
          this.isLoading = false
          this.users = users
        },
        error=>{
          this.isLoading = false
          this.errorMsg = error.message
        })
      })
    },
    beforeDestroy(){
      this.$eventBus.$off('search')
    }
  }
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

 
</style>
