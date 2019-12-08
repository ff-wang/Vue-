
<template>
  <div class="todo-wrap">
    <!-- <Header @addTodo="addTodo"/> -->
    <Header ref="addTodo"/>
    <List :todos="todos" 
      :deleteTodo="deleteTodo" 
      :updateTodo="updateTodo"
    />
    <Footer :todos="todos" 
      :deleteCompleted="deleteCompleted" 
      :checkAll="checkAll"
    />
  </div>
</template>

<script>
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import {saveTodos,readTodos} from './utils/storageUtils'
export default {
  
  data () {
    return {
      todos:[
        {id:1,title:'吃饭',completed:false},
        {id:2,title:'睡觉',completed:false},
        {id:3,title:'打豆豆',completed:false}
      ]
    }
  },
  components:{
    Header,
    List,
    Footer,
  },
  mounted(){
    setTimeout(() => {
      //读取local中的todos，更新数据
      this.todos = readTodos()
    }, 1000);
    // 自定义事件给<header/>绑定事件
    this.$refs.addTodo.$on('addTodo',this.addTodo)
    // 全局事件总线给<Item/>绑定
    this.$eventBus.$on('deleteTodo',this.deleteTodo)
  },
  methods:{
    addTodo(todo){
      this.todos.unshift(todo)
    },
    deleteTodo(index){
      this.todos.splice(index,1)
    },
    deleteCompleted(){
      this.todos = this.todos.filter((todo,index)=>!todo.completed)
    },
    checkAll(isCheckAll){
      this.todos.forEach(todo=>todo.completed=isCheckAll)
    },
    updateTodo(todo,isCheck){
      todo.completed = isCheck
    }
    
  },
  watch:{
    todos:{
      deep: true, //深度监视
      // handler(value){
      //   //保存到localStorage中
      //   // localStorage.setItem('todos_key',JSON.stringify(value))
      //   //  saveTodos(value)
      // } ,
      handler:saveTodos
    }
  }
  
}
</script>

<style scoped>
    /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
