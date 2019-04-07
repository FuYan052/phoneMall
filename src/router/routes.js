const Home = () => import('@/pages/Home')
const PhoneList = () => import('@/pages/PhoneList')
const Detail = () => import('@/pages/Detail')
const Login = () => import('@/pages/Login')
const Register = () => import('@/pages/Register')
const Cart = () => import('@/pages/Cart')
const OrderDetail = () => import('@/pages/OrderDetail')
const Payment = () => import('@/pages/Payment')
const Mine = () => import('@/pages/Mine')
const ManagementSystem = () => import('@/pages/management/ManagementSystem')

import Order from '@/components/management/order/Order'
import ProductList from '@/components/management/product/ProductList'
import ProductEdit from '@/components/management/product/ProductEdit'
import ProductAdd from '@/components/management/product/ProductAdd'
import ProductColor from '@/components/management/product/ProductColor'
import ProductVersion from '@/components/management/product/ProductVersion'
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
    path: '/detail/',
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
},{
    path: '/payment',
    name: 'Payment',
    components: {
        default: Payment,
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
    },{
        path: 'productlist',
        name: 'ProductList',
        components: {
            default: ProductList,
        },
    },{
        path: 'productedit',
        name: 'ProductEdit',
        components: {
            default: ProductEdit,
        },
    },{
        path: 'productadd',
        name: 'ProductAdd',
        components: {
            default: ProductAdd,
        },
    },{
        path: 'productcolor',
        name: 'ProductColor',
        components: {
            default: ProductColor,
        },
    },{
        path: 'productversion',
        name: 'ProductVersion',
        components: {
            default: ProductVersion,
        },
    }]
}];

export default routes
