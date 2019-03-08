const Home = () => import('@/pages/Home')
const PhoneList = () => import('@/pages/PhoneList')
const Detail = () => import('@/pages/Detail')
const Login = () => import('@/pages/Login')
const Register = () => import('@/pages/Register')
const Cart = () => import('@/pages/Cart')
const OrderDetail = () => import('@/pages/OrderDetail')
const Mine = () => import('@/pages/Mine')
const ManagementSystem = () => import('@/pages/management/ManagementSystem')

import Order from '@/components/management/order/Order'
import Product from '@/components/management/product/Product'
import User from '@/components/management/user/User'

const routes = [{
    path: '/',
    redirect: '/home',
}, {
    path: '/home',
    name: 'Home',
    components: {
        default: Home,
    }
}, {
    path: '/phonelist/:id',
    name: 'PhoneList',
    components: {
        default: PhoneList,
    }
}, {
    path: '/detail/:id',
    name: 'Detail',
    components: {
        default: Detail,
    }
}, {
    path: '/login',
    name: 'Login',
    components: {
        default: Login,
    }
}, {
    path: '/register',
    name: 'Register',
    components: {
        default: Register,
    }
}, {
    path: '/cart',
    name: 'Cart',
    components: {
        default: Cart,
    }
}, {
    path: '/order',
    name: 'OrderDetail',
    components: {
        default: OrderDetail,
    }
}, {
    path: '/mine',
    name: 'Mine',
    components: {
        default: Mine,
    }
}, {
    path: '/admin',
    name: 'ManagementSystem',
    components: {
        default: ManagementSystem,
    },
    children: [{
        path: 'order',
        name: 'Order',
        components: {
            default: Order,
        },
    },{
        path: 'product',
        name: 'Product',
        components: {
            default: Product,
        },
    },{
        path: 'user',
        name: 'User',
        components: {
            default: User,
        },
    }]
}];

export default routes
