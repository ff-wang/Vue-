import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../pages/about'
import Home from '../pages/home'
import News from '../pages/news'
import Message from '../pages/message'
import MessageDeatil from '../pages/messageDeatil.vue'
//声明使用Vue插件
Vue.use(VueRouter)
export default new VueRouter({
  mode:'history',
  routes:[
    {
      name:'about',
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'/home/news',
          component:News
        },
        {
          path:'/home/message',
          component:Message,
          children:[
            {
              name:'deatil',
              path:'/home/message/deatil/:id',
              component:MessageDeatil,
              props:true
            }
          ]
        },
        {
          path:'',
          redirect:'/home/news'
        }
      ]

    },
    
    {
      path:'/',
      redirect:'/about'
    }
  ]
})