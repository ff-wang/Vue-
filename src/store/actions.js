//包含间接更新state多个事件回调函数对象
import axios from 'axios'
export default{
  async search({commit},searchName){
    //请求中
    commit('requesting')
    //发异步请求获取数据
    try {
      const response = await axios('/gh/search/users', {params: {q: searchName}})
      // 成功，提交请求成功的mutation
      const result = response.data
      const users = result.items.map(item => ({
        username: item.login,
        url: item.html_url,
        avatar_url: item.avatar_url 
      }))
      commit('req_success',users)
    } catch (error) { // 失败
      commit('req_error',error.message)
    }
    

    
  }
}