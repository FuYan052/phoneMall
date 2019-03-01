import axios from 'axios'
import { Spin } from 'ant-design-vue'

const ajax = axios.create()

// 拦截器
ajax.interceptors.request.use(config => {
  Spin.setDefaultIndicator({
    spinning:true,
    indicator: {
      render () {
        return <i class='anticon anticon-loading anticon-spin ant-spin-dot'></i>
      },
    },
  })
  return config
})

ajax.interceptors.response.use(resp => {
  Spin.setDefaultIndicator({
    spinning:false
  })
  return resp
})

// 获取轮播图
export const getBanners = () => {
  return ajax.get('http://www.xiongmaoyouxuan.com/api/tab/1?start=0')
}
// 热卖专区
export const getHotSale = () => {
  return ajax.get('http://www.xiongmaoyouxuan.com/api/tab/12?start=0')
}