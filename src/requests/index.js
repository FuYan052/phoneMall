import axios from 'axios'
import { Spin } from 'ant-design-vue'

const ajax = axios.create()

// 拦截器
// ajax.interceptors.request.use(config => {
//   Spin.setDefaultIndicator({
//     spinning:true,
//     indicator: {
//       render () {
//         return <i class='anticon anticon-loading anticon-spin ant-spin-dot'></i>
//       },
//     },
//   })
//   return config
// })

// ajax.interceptors.response.use(resp => {
//   Spin.setDefaultIndicator({
//     spinning:false
//   })
//   return resp
// })

// 获取轮播图
export const getBanners = () => {
  return ajax.get('http://rap2api.taobao.org/app/mock/120117/api/banner')
}
// 热卖专区
export const getHotSale = () => {
  return ajax.get('http://www.xiongmaoyouxuan.com/api/tab/12?start=0')
}
// 购物车图片
export const getDetailImg = () => {
  return ajax.get('http://rap2api.taobao.org/app/mock/120117/api/hot')
}
// 分类列表
export const getList = () => {
  return ajax.get('http://rap2api.taobao.org/app/mock/120117/api/hot')
}
// 获取分类（导航）
export const getNav = () => {
  return ajax.get('http://rap2api.taobao.org/app/mock/120117/api/category')
}
// 获取详情
export const getDetail = (id) => {
  return ajax.get('http://rap2api.taobao.org/app/mock/120117/api/detail?id'+id)
}

// 获取用户列表
// export const getUserList = () => {
//   return ajax.get('http://120.78.53.181:8000/api/users/')
// }


// 登录
// export const getLogin = (params) => {
//   return ajax.post('http://http://192.168.137.45:8001/phone/login?'+params)
// } 
export const getLogin = (params) => {
  return ajax.get(encodeURI(`http://192.168.137.45:8001/phone/login?username=${params.username}&password=${params.password}`))
} 

// 登录假接口
// export const getLogin = (params) => {
//   return ajax.post('http://rap2api.taobao.org/app/mock/120117/api/login', params)
// }
// 注册
export const getRegister = (params) => {
  return ajax.post('http://192.168.137.45:8001/phone/addUser/', params)
}
// export const getRegister = (params) => {
//   return ajax.post('http://120.78.53.181:8000/api/users/', params)
// }

// 保存收货地址
export const saveAddress = (params) => {
  return ajax.post('http://192.168.137.45:8001/phone/ra/addAddress', params)
}
// 根据用户id获取收货地址
export const getAddress = (params) => {
  return ajax.post('http://192.168.137.45:8001/phone/ra/getAllAddress?userId='+params)
}
// 删除收货地址
export const delAddress = (params) => {
  return ajax.post('http://192.168.137.45:8001/phone/ra/delAddress?addressIds='+ params)
}
// 获取所有商品
export const getAllPro = () => {
  return ajax.get('http://192.168.137.45:8001/phone/getAllPro')
} 
// 根据id获取商品详情
export const getProById = (id) => {
  return ajax.get('http://192.168.137.45:8001/phone/getProById/?proId='+id)
}
// 对应用户id存购物车
export const saveCart = (params) => {
  return ajax.post('http://192.168.137.45:8001/phone/addCart', params)
}
// 获取用户存入的购物车
export const getCarts = (userId) => {
  return ajax.get('http://192.168.137.45:8001/phone/getCarts?userId='+userId)
}
// 删除购物车
export const delCart = (ids) => {
  return ajax.post('http://192.168.137.45:8001/phone/delUser?ids='+ids)
}
// 获取用户列表
export const getUserList = () => {
  return ajax.get('http://192.168.137.45:8001/phone/getAllUser')
}
// 删除用户
export const delUser = (userIDS) => {
  return ajax.post('http://192.168.137.45:8001/phone/delUser?userIDS='+userIDS)
}

// 保存编辑后的用户
export const updateUser = (user) => {
  return ajax.post('http://192.168.137.45:8001/phone/updateUser', user)
}
// 查询订单
export const getOrders = (userId) => {
  return ajax.get('http://192.168.137.45:8001/phone/order/getOrders?userId='+userId)
}