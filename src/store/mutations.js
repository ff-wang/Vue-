//包含间接更新state多个事件回调函数对象
export default{
  //请求中
  requesting(state){
    state.firstView = false
    state.isLoading = true
  },
  //请求成功
  req_success(state,users){
    state.isLoading = true
    state.users = users
  },
  //请求失败
  req_error(state,errorMsg){
    state.errorMsg = true
    state.errorMsg = errorMsg
  }
}