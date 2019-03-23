export default {
  // isLogin: false,
  user: window.sessionStorage.getItem('user'),
  // token: window.sessionStorage.getItem('token'),
  isLogin: Boolean(window.sessionStorage.getItem('user')) // 实际要根据需求来，有可能需要检测token的合法性
}
