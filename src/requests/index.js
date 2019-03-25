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
export const getUserList = () => {
  return ajax.get('http://120.78.53.181:8000/api/users/')
}
// 编辑用户
export const saveUser = (id,params) => {
  return ajax.post('http://120.78.53.181:8000/api/users/'+id, params)
}
// 登录
// export const getLogin = (params) => {
//   return ajax.post('http://http://192.168.137.45:8001/phone/login?'+params)
// } 
export const getLogin = (params) => {
  return ajax.get(encodeURI(`http://192.168.43.204:8001/phone/login?username=${params.username}&password=${params.password}`))
} 

// 登录假接口
// export const getLogin = (params) => {
//   return ajax.post('http://rap2api.taobao.org/app/mock/120117/api/login', params)
// }
// 注册
export const getRegister = (params) => {
  return ajax.post('http://192.168.43.204:8001/phone/addUser/', params)
}
// export const getRegister = (params) => {
//   return ajax.post('http://120.78.53.181:8000/api/users/', params)
// }

// 保存收货地址
export const saveAddress = (params) => {
  return ajax.post('http://192.168.43.204:8001/phone/ra/addAddress', params)
}
// 根据用户id获取收货地址
export const getAddress = (params) => {
  return ajax.post(`http://192.168.43.204:8001/phone/ra/getAllAddress?userId=${params}`)
}
// 根据用户id获取收货地址
export const getBannerImg = () => {
  return ajax.get('http://192.168.43.204:8001/phone/getAllPro')
}
// 获取所有商品
export const getAllPro = () => {
  return ajax.get('http://192.168.43.204:8001/phone/getAllPro')
} 
// 根据id获取商品详情
export const getProById = (id) => {
  return ajax.get('http://192.168.43.204:8001/phone/getProById/?proId='+id)
}