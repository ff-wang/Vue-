<template>
  <div>
    <div>
      <ul>
        <li v-for="(message,index) in messages" :key="message.id">
          <router-link :to="'/home/message/deatil/'+message.id">{{message.title}}</router-link>&nbsp;&nbsp;
          <button @click="pushShow(message.id)">push查看</button>&nbsp;&nbsp;
          <button @click="replaceShow(message.id)">replace查看</button>
        </li>
      </ul>
      <button @click="back">回退</button>
      <hr>
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        messages:[]
      }
    },
    mounted(){
      setTimeout(() => {
        const messages = [
        {id:1,title:'message-1'},
        {id:2,title:'message-2'},
        {id:3,title:'message-3'},
      ]
      this.messages = messages
      }, 1000); 
    },
    methods:{
      pushShow(id){
        this.$router.push({name:'deatil',params:{id}})
      },
      replaceShow(id){
        this.$router.replace({name:'deatil',params:{id}})
      },
      back(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>

 
</style>
