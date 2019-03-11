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
import UserList from '@/components/management/user/UserList'
import UserEdit from '@/components/management/user/UserEdit'

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
    path: '/order/:id',
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
        path: 'userlist',
        name: 'UserList',
        components: {
            default: UserList,
        },
    },{
        path: 'useredit',
        name: 'UserEdit',
        components: {
            default: UserEdit,
        },
    }]
}];

export default routes
