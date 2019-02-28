const Home = () => import('@/pages/Home')
const PhoneList = () => import('@/pages/PhoneList')
const Detail = () => import('@/pages/Detail')
const Login = () => import('@/pages/Login')
const Register = () => import('@/pages/Register')
const Cart = () => import('@/pages/Cart')

const routes = [{
    path: '/',
    redirect: '/home',
},{
    path: '/home',
    name: 'Home',
    components: {
        default: Home,
    }
},{
    path: '/phonelist',
    name: 'PhoneList',
    components: {
        default: PhoneList,
    }
},{
    path: '/detail',
    name: 'Detail',
    components: {
        default: Detail,
    }
},{
    path: '/login',
    name: 'Login',
    components: {
        default: Login,
    }
},{
    path: '/register',
    name: 'Register',
    components: {
        default: Register,
    }
},{
    path: '/cart',
    name: 'Cart',
    components: {
        default: Cart,
    }
}];

export default routes
