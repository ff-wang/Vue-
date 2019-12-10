<template>
  <div>
    <p v-if="!reqName">isLoding...</p>
    <p v-else>
      most star repo is
      <a :href="reqUrl">{{reqName}}</a>
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import { start } from 'repl'
  export default {
    data(){
      return{
        reqName:'',
        reqUrl:''
      }
    },
    mounted(){
      //1.使用vue-recourse发送ajax请求
      // this.$http.get(`https://api.github.com/search/repositories?q=j&sort=stars`)
      // .then(response=>{
      //   const result = response.data
      //   const {name,html_url} = result.items[0]
      //   this.reqName = name
      //   this.reqUrl = html_url
      // })
      // .catch(error=>{alert('请求错误')})
      
     
      //2.使用axios发送请求
      axios.get(`https://api.github.com/search/repositories`, {
        params: {
          q: 'j',
          sort: 'stars'
        }
      })
        .then(response => {
          const result = response.data
          const {name, html_url} = result.items[0]
          this.repoName = name
          this.repoUrl = html_url
        })
        .catch(error => {
          alert('请求出错了')
        })

    }
  }
</script>

<style scoped>

 
</style>
