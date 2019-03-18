export default {
  // addToCart (state, item) {
  //   // 判断item是否已经存在于购物车
  //   const isInCart = state.cart.some(cartItem => cartItem.id === item.id)
  //   if (isInCart) {
  //     state.cart = state.cart.map(cartItem => {
  //       if (cartItem.id === item.id) {
  //         cartItem.count += 1
  //       }
  //       return cartItem
  //     })
  //   } else {
  //     state.cart.push({
  //       ...item,
  //       isChecked: false,
  //       count: 1
  //     })
  //   }
  // },
  // addCartItemCount (state, id) {
  //   state.cart = state.cart.map(cartItem => {
  //     if (cartItem.id === id) {
  //       cartItem.count += 1
  //     }
  //     return cartItem
  //   })
  // },
  // reduceCartItemCount (state, id) {
  //   state.cart = state.cart.map(cartItem => {
  //     if (cartItem.id === id && cartItem.count > 1) {
  //       cartItem.count -= 1
  //     }
  //     return cartItem
  //   })
  // },
  // toggleChecked (state, id) {
  //   state.cart = state.cart.map(cartItem => {
  //     if (cartItem.id === id) {
  //       cartItem.isChecked = !cartItem.isChecked
  //     }
  //     return cartItem
  //   })
  // },
  // changeAllCheck (state, checked) {
  //   state.cart = state.cart.map(cartItem => {
  //     cartItem.isChecked = checked
  //     return cartItem
  //   })
  // },
  // changePageTitle (state, title) {
  //   state.pageTitle = title
  // },

  // 将token保存到sessionStorage里，token表示登录状态
  // SET_TOKEN: (state, data) => {
  //   state.token = data;
  //   window.sessionStorage.setItem('token', data)
  // },

  // 获取用户名
  // GET_USER: (state, data) => {
  //   state.user = data;
  //   window.sessionStorage.setItem('user', data)
  // },
  
  // 用户登录状态
  changeLoginStatus (state) {
    state.isLogin = true
    state.user = window.sessionStorage.user
  },
  
  // 退出登录
  logout (state) {
    window.sessionStorage.removeItem('user');
    state.user = ''
    state.isLogin = false
  }

}
